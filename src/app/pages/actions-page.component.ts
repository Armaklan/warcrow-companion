import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleListComponent } from '../components/collapsible-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-actions-page',
  standalone: true,
  imports: [CommonModule, CollapsibleListComponent, MatDividerModule],
  template: `
    <h1>Actions</h1>
    <section>
      <h2>Actions simples</h2>
      <app-collapsible-list #simpleList [items]="actionsSimples"></app-collapsible-list>
    </section>
    <section>
      <h2>Actions longues</h2>
      <app-collapsible-list #complexList [items]="actionsComplexes"></app-collapsible-list>
    </section>
  `
})
export class ActionsPageComponent implements AfterViewInit {
  lang = inject(LanguageService);
  actionsSimples = this.lang.data.ACTIONS_SIMPLES;
  actionsComplexes = this.lang.data.ACTIONS_COMPLEXES;

  @ViewChild('simpleList') simpleList?: CollapsibleListComponent;
  @ViewChild('complexList') complexList?: CollapsibleListComponent;

  constructor(private route: ActivatedRoute) {
    this.lang.langChanges.subscribe(() => {
      this.actionsSimples = this.lang.data.ACTIONS_SIMPLES;
      this.actionsComplexes = this.lang.data.ACTIONS_COMPLEXES;
    });

    this.route.queryParamMap.subscribe(pm => {
      const id = pm.get('open');
      if (!id) return;
      // Defer to after lists are ready
      setTimeout(() => {
        const hitSimple = this.simpleList?.expandAndScrollTo(id);
        if (!hitSimple) this.complexList?.expandAndScrollTo(id!);
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    // no-op
  }
}
