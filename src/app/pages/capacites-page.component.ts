import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shared/language.service';

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
  lang = inject(LanguageService);
  openId: string | null = null;
  capacites = this.lang.data.CAPACITES;

  constructor(route: ActivatedRoute) {
    this.lang.langChanges.subscribe(() => this.capacites = this.lang.data.CAPACITES);
    route.queryParamMap.subscribe(pm => this.openId = pm.get('open'));
  }
}
