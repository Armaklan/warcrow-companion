import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { MOTS_CLEFS } from '../shared/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keywords-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>Mots‑clefs</h1>

    <div class="filter-bar">
      <input
        type="search"
        placeholder="Filtrer par titre..."
        (input)="onFilterInput($event)"
        [value]="filterText"
        aria-label="Filtrer les mots-clefs par titre"
      />
    </div>

    <app-collapsible-list [items]="filteredMotsClefs" [selectedId]="openId"></app-collapsible-list>
  `,
  styles: [
    `.filter-bar { margin: 12px 0 16px; }
     .filter-bar input { width: 100%; max-width: 480px; padding: 8px 12px; font-size: 16px; }
    `
  ]
})
export class KeywordsPageComponent {
  filterText = '';
  openId: string | null = null;
  motsClefs = MOTS_CLEFS;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(pm => this.openId = pm.get('open'));
  }

  get filteredMotsClefs() {
    const q = this.filterText.toLowerCase().trim();
    if (!q) return this.motsClefs;
    return this.motsClefs.filter(i => i.title.toLowerCase().includes(q));
  }

  onFilterInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.filterText = target?.value ?? '';
  }
}
