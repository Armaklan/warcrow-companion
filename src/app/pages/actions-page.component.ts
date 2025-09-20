import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { ACTIONS_SIMPLES, ACTIONS_COMPLEXES } from '../shared/data';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-actions-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent, MatDividerModule],
  template: `
    <h1>Actions</h1>
    <section>
      <h2>Actions simples</h2>
      <app-collapsible-list [items]="actionsSimples"></app-collapsible-list>
    </section>
    <section>
      <h2>Actions longues</h2>
      <app-collapsible-list [items]="actionsComplexes"></app-collapsible-list>
    </section>
  `
})
export class ActionsPageComponent {
  actionsSimples = ACTIONS_SIMPLES;
  actionsComplexes = ACTIONS_COMPLEXES;
}
