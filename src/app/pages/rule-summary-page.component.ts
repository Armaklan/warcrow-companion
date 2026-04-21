import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-rule-summary-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  template: `
    <h1>{{ labels.menu.ruleSummary }}</h1>

    <mat-tab-group>
      <mat-tab [label]="labels.menu.resumeTour">
        <div class="tab-content" [innerHTML]="tour.html"></div>
      </mat-tab>
      <mat-tab [label]="labels.menu.resumeOpposition">
        <div class="tab-content" [innerHTML]="opposition.html"></div>
      </mat-tab>
      <mat-tab [label]="labels.menu.personnageUnite">
        <div class="tab-content" [innerHTML]="personnage.html"></div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    .tab-content {
      padding: 16px;
    }
  `]
})
export class RuleSummaryPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  opposition = this.lang.data.RESUME_OPPOSITION;
  tour = this.lang.data.RESUME_TOUR;
  personnage = this.lang.data.PERSONNAGE_UNITE;

  constructor() {
    this.lang.langChanges.subscribe(() => {
      this.labels = this.lang.data.LABEL;
      this.opposition = this.lang.data.RESUME_OPPOSITION;
      this.tour = this.lang.data.RESUME_TOUR;
      this.personnage = this.lang.data.PERSONNAGE_UNITE;
    });
  }
}
