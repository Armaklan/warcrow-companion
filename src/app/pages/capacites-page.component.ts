import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { CAPACITES } from '../shared/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-capacites-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent],
  template: `
    <h1>Capacités</h1>
    <app-collapsible-list [items]="capacites" [selectedId]="openId"></app-collapsible-list>
  `
})
export class CapacitesPageComponent {
  openId: string | null = null;
  capacites = CAPACITES;

  constructor(route: ActivatedRoute) {
    route.queryParamMap.subscribe(pm => this.openId = pm.get('open'));
  }
}
