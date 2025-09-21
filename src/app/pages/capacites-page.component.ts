import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { CAPACITES } from '../shared/data';

@Component({
  selector: 'app-capacites-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>Capacités</h1>
    <app-collapsible-list [items]="capacites"></app-collapsible-list>
  `
})
export class CapacitesPageComponent {
  capacites = CAPACITES;
}
