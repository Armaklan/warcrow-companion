import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { FR } from '../shared/data.fr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>États et marqueurs</h1>
    <app-collapsible-list [items]="etats" [selectedId]="openId"></app-collapsible-list>
  `
})
export class StatesPageComponent {
  openId: string | null = null;
  etats = FR.ETATS;

  constructor(route: ActivatedRoute) {
    route.queryParamMap.subscribe(pm => this.openId = pm.get('open'));
  }
}
