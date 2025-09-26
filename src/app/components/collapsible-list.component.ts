import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';

export interface CollapsibleItem { title: string; details: string; icon?: string; }

@Component({
  selector: 'app-collapsible-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  template: `
    <mat-accordion>
      @for (item of items; track $index) {
        <mat-expansion-panel [attr.id]="slug(item.title)" #panel>
          <mat-expansion-panel-header>
            <span class="header-content">
              @if (item.icon) { <img [src]="item.icon" alt="" class="item-icon" /> }
              <span>{{ item.title }}</span>
            </span>
          </mat-expansion-panel-header>
          <p [innerHTML]="item.details"></p>
        </mat-expansion-panel>
      }
    </mat-accordion>
  `,
  styles: [
    `.header-content { display: inline-flex; align-items: center; gap: 16px; }`,
    `.item-icon { width: 40px; height: 40px; object-fit: contain; }`
  ]
})
export class CollapsibleListComponent implements AfterViewInit, OnChanges {
  private _items: CollapsibleItem[] = [];

  @Input() selectedId: string | null = null;

  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  @Input()
  set items(value: CollapsibleItem[]) {
    const arr = Array.isArray(value) ? [...value] : [];
    this._items = arr.sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }));
  }
  get items(): CollapsibleItem[] {
    return this._items;
  }

  ngAfterViewInit(): void {
    // Try expanding after view init if selectedId provided
    if (this.selectedId) {
      setTimeout(() => this.expandAndScrollTo(this.selectedId!), 0);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedId'] && !changes['selectedId'].firstChange) {
      const id = changes['selectedId'].currentValue as string | null;
      if (id) {
        // Defer to ensure panels exist
        setTimeout(() => this.expandAndScrollTo(id), 0);
      }
    }
  }

  slug(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}+/gu, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  expandAndScrollTo(id: string): boolean {
    const idx = this.items.findIndex(i => this.slug(i.title) === id);
    if (idx === -1) return false;
    const panel = this.panels.get(idx);
    if (!panel) return false;
    panel.open();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return true;
  }
}
