import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { ETATS } from '../shared/data';

@Component({
  selector: 'app-states-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>États et marqueurs</h1>
    <app-collapsible-list [items]="etats"></app-collapsible-list>
  `
})
export class StatesPageComponent {
  etats = ETATS;
}
