import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Scenario} from '../shared/data.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-scenario-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <a mat-button color="primary" routerLink="/scenarios">
      <mat-icon>arrow_back</mat-icon>
      {{ labels.scenario.back }}</a>

    @if (!scenario) {
      <h1>Not found</h1>
    } @else {
      <h1>{{ scenario.title }}</h1>
      @if (scenario.image) {
        <div class="image-wrapper">
          <img [src]="scenario.image" alt="{{scenario.title}}"/>
        </div>
      }

      <section class="block" *ngIf="scenario.requiredMaterial?.length">
        <h2>{{ labels.scenario.material }}</h2>
        <ul>
          <li *ngFor="let item of scenario.requiredMaterial">{{ item }}</li>
        </ul>
      </section>

      <section class="block">
        <h2>{{ labels.scenario.duree.title }}</h2>
        <p>{{ labels.scenario.duree.detail }} {{ scenario.roundLength }} {{ labels.scenario.duree.turn }}.</p>
      </section>

      <section class="block" *ngIf="scenario.endRoundScoring?.length">
        <h2>{{ labels.scenario.score.title }}</h2>
        <p>{{ labels.scenario.score.detail }}</p>
        <ul>
          <li *ngFor="let s of scenario.endRoundScoring">{{ s }}</li>
        </ul>
      </section>

      <section class="block">
        <h2>{{ labels.scenario.end.title }}</h2>
        <p>{{ labels.scenario.end.details }} {{ scenario.endGame }} {{ labels.scenario.end.rounds }}</p>
      </section>

      @if (scenario.additionnal) {
        <section class="block">
          <div class="additionnal" [innerHTML]="scenario.additionnal"></div>
        </section>
      }

    }
  `,
  styles: [`
    .image-wrapper { max-width: 650px; margin: 8px 0 16px; }
    .image-wrapper img { width: 100%; height: auto; border-radius: 4px; }
    .description :where(p, ul, ol) { line-height: 1.6; }
  `]
})
export class ScenarioDetailPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  scenario?: Scenario;
  private idx: number | null = null;

  constructor(private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const idx = idParam ? Number(idParam) : NaN;
    this.idx = !Number.isNaN(idx) && idx >= 0 ? idx : null;
    this.refreshScenario();
    this.lang.langChanges.subscribe(() => this.refreshScenario());
  }

  private refreshScenario() {
    if (this.idx === null) { this.scenario = undefined; return; }
    const list = this.lang.data.SCENARIO;
    this.scenario = (this.idx >= 0 && this.idx < list.length) ? list[this.idx] : undefined;
  }
}
