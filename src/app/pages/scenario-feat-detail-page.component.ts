import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Feat, Scenario} from '../shared/data.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-scenario-feat-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <a mat-button color="primary" routerLink="/scenarios">
      <mat-icon>arrow_back</mat-icon>
      {{ labels.scenario.back }}</a>

    @if (!scenario || !feat) {
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
        <p>{{ labels.scenario.duree.detail }} {{ scenario.roundLength }} {{ labels.scenario.duree.turn }}</p>
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

      <hr />

      <h1>{{ feat.title }}</h1>

      <section class="block" *ngIf="feat.requiredMaterial?.length">
        <h2>{{ labels.scenario.material }}</h2>
        <ul>
          <li *ngFor="let item of feat.requiredMaterial">{{ item }}</li>
        </ul>
      </section>

      <section class="block" *ngIf="feat.scoring">
        <h2>{{ labels.scenario.score.title }}</h2>
        <div class="additionnal" [innerHTML]="feat.scoring"></div>
      </section>

      @if (feat.additionnal) {
        <section class="block">
          <div class="additionnal" [innerHTML]="feat.additionnal"></div>
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
export class ScenarioFeatDetailPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  scenario?: Scenario;
  feat?: Feat;
  private sid: number | null = null;
  private fid: number | null = null;

  constructor(private route: ActivatedRoute) {
    const sidParam = this.route.snapshot.paramMap.get('sid');
    const fidParam = this.route.snapshot.paramMap.get('fid');
    const sid = sidParam ? Number(sidParam) : NaN;
    const fid = fidParam ? Number(fidParam) : NaN;
    this.sid = !Number.isNaN(sid) && sid >= 0 ? sid : null;
    this.fid = !Number.isNaN(fid) && fid >= 0 ? fid : null;
    this.refresh();
    this.lang.langChanges.subscribe(() => this.refresh());
  }

  private refresh() {
    if (this.sid === null || this.fid === null) { this.scenario = undefined; this.feat = undefined; return; }
    const scenarios = this.lang.data.SCENARIO;
    const feats = this.lang.data.FEAT;
    this.scenario = (this.sid >= 0 && this.sid < scenarios.length) ? scenarios[this.sid] : undefined;
    this.feat = (this.fid >= 0 && this.fid < feats.length) ? feats[this.fid] : undefined;
    this.labels = this.lang.data.LABEL;
  }
}
