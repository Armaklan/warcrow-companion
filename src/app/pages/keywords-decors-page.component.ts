import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-keywords-decors-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>Mots clef de décors</h1>

    <div class="filter-bar">
      <input
        type="search"
        placeholder="Filtrer par titre..."
        (input)="onFilterInput($event)"
        [value]="filterText"
        aria-label="Filtrer les mots-clefs de décors par titre"
      />
    </div>

    <app-collapsible-list [items]="filtered" [selectedId]="openId"></app-collapsible-list>
  `,
  styles: [
    `.filter-bar { margin: 12px 0 16px; }
     .filter-bar input { width: 100%; max-width: 480px; padding: 8px 12px; font-size: 16px; }
    `
  ]
})
export class KeywordsDecorsPageComponent {
  lang = inject(LanguageService);
  filterText = '';
  openId: string | null = null;
  items = this.lang.data.MOTS_CLEFS_DECORS;

  constructor(private route: ActivatedRoute) {
    this.lang.langChanges.subscribe(() => this.items = this.lang.data.MOTS_CLEFS_DECORS);
    this.route.queryParamMap.subscribe(pm => {
      const q = (pm.get('q') ?? '').trim();
      this.filterText = q;
      this.openId = pm.get('open');
    });
  }

  get filtered() {
    const q = this.filterText.toLowerCase().trim();
    if (!q) return this.items;
    return this.items.filter(i => i.title.toLowerCase().includes(q));
  }

  onFilterInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.filterText = target?.value ?? '';
  }
}
