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
    <h1>{{ labels.menu.actions }}</h1>
    <section>
      <h2>{{ labels.actions.simple }}</h2>
      <app-collapsible-list #simpleList [items]="actionsSimples"></app-collapsible-list>
    </section>
    <section>
      <h2>{{ labels.actions.complexe }}</h2>
      <app-collapsible-list #complexList [items]="actionsComplexes"></app-collapsible-list>
    </section>
    <section>
      <h2>{{ labels.actions.reactions }}</h2>
      <app-collapsible-list #reactionsList [items]="actionsReactions"></app-collapsible-list>
    </section>
  `
})
export class ActionsPageComponent implements AfterViewInit {
  lang = inject(LanguageService);
  actionsSimples = this.lang.data.ACTIONS_SIMPLES;
  actionsComplexes = this.lang.data.ACTIONS_COMPLEXES;
  actionsReactions = this.lang.data.ACTIONS_REACTIONS;
  labels = this.lang.data.LABEL;

  @ViewChild('simpleList') simpleList?: CollapsibleListComponent;
  @ViewChild('complexList') complexList?: CollapsibleListComponent;
  @ViewChild('reactionsList') reactionsList?: CollapsibleListComponent;

  constructor(private route: ActivatedRoute) {
    this.lang.langChanges.subscribe(() => {
      this.actionsSimples = this.lang.data.ACTIONS_SIMPLES;
      this.actionsComplexes = this.lang.data.ACTIONS_COMPLEXES;
      this.actionsReactions = this.lang.data.ACTIONS_REACTIONS;
      this.labels = this.lang.data.LABEL;
    });

    this.route.queryParamMap.subscribe(pm => {
      const id = pm.get('open');
      if (!id) return;
      // Defer to after lists are ready
      setTimeout(() => {
        const hitSimple = this.simpleList?.expandAndScrollTo(id);
        if (!hitSimple) {
          const hitComplex = this.complexList?.expandAndScrollTo(id!);
          if (!hitComplex) this.reactionsList?.expandAndScrollTo(id!);
        }
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    // no-op
  }
}
