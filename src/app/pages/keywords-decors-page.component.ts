import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { MOTS_CLEFS_DECORS } from '../shared/data';

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

    <app-collapsible-list [items]="filtered"></app-collapsible-list>
  `,
  styles: [
    `.filter-bar { margin: 12px 0 16px; }
     .filter-bar input { width: 100%; max-width: 480px; padding: 8px 12px; font-size: 16px; }
    `
  ]
})
export class KeywordsDecorsPageComponent {
  filterText = '';
  items = MOTS_CLEFS_DECORS;

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
