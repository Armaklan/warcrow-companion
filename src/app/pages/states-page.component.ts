import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shared/language.service';

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
  lang = inject(LanguageService);
  route  = inject(ActivatedRoute);

  openId: string | null = null;
  etats = this.lang.data.ETATS;

  constructor() {
    this.lang.langChanges.subscribe(() => this.etats = this.lang.data.ETATS);
    this.route.queryParamMap.subscribe(pm => this.openId = pm.get('open'));
  }
}
