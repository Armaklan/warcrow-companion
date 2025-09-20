import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { MOTS_CLEFS } from '../shared/data';

@Component({
  selector: 'app-keywords-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>Mots‑clefs</h1>
    <app-collapsible-list [items]="motsClefs"></app-collapsible-list>
  `
})
export class KeywordsPageComponent {
  motsClefs = MOTS_CLEFS;
}