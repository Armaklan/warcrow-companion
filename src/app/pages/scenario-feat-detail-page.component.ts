import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {Feat, Scenario} from '../shared/data.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-scenario-feat-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatTabsModule],
  template: `
    <a mat-button color="primary" routerLink="/scenarios">
      <mat-icon>arrow_back</mat-icon>
      {{ labels.scenario.back }}</a>

    @if (!scenario || !feat) {
      <h1>Not found</h1>
    } @else {
      <!-- Bandeau de score au-dessus des onglets -->
      <section class="score-board">
        <h2>Score</h2>
        <div class="players">
          <div class="player p1">
            <div class="player-title">Joueur 1</div>
            <div class="stats-row">
              <div class="stat-tile">
                <div class="stat-label">PA</div>
                <div class="stat-value">{{ score.p1.pa }}</div>
                <div class="stat-actions">
                  <button mat-fab color="primary" aria-label="Réduire PA Joueur 1" (click)="dec('p1','pa')"><mat-icon>remove</mat-icon></button>
                  <button mat-fab color="primary" aria-label="Augmenter PA Joueur 1" (click)="inc('p1','pa')"><mat-icon>add</mat-icon></button>
                </div>
              </div>
              <div class="stat-tile">
                <div class="stat-label">PM</div>
                <div class="stat-value">{{ score.p1.pm }}</div>
                <div class="stat-actions">
                  <button mat-fab color="primary" aria-label="Réduire PM Joueur 1" (click)="dec('p1','pm')"><mat-icon>remove</mat-icon></button>
                  <button mat-fab color="primary" aria-label="Augmenter PM Joueur 1" (click)="inc('p1','pm')"><mat-icon>add</mat-icon></button>
                </div>
              </div>
            </div>
          </div>
          <div class="player p2">
            <div class="player-title">Joueur 2</div>
            <div class="stats-row">
              <div class="stat-tile">
                <div class="stat-label">PA</div>
                <div class="stat-value">{{ score.p2.pa }}</div>
                <div class="stat-actions">
                  <button mat-fab color="warn" aria-label="Réduire PA Joueur 2" (click)="dec('p2','pa')"><mat-icon>remove</mat-icon></button>
                  <button mat-fab color="warn" aria-label="Augmenter PA Joueur 2" (click)="inc('p2','pa')"><mat-icon>add</mat-icon></button>
                </div>
              </div>
              <div class="stat-tile">
                <div class="stat-label">PM</div>
                <div class="stat-value">{{ score.p2.pm }}</div>
                <div class="stat-actions">
                  <button mat-fab color="warn" aria-label="Réduire PM Joueur 2" (click)="dec('p2','pm')"><mat-icon>remove</mat-icon></button>
                  <button mat-fab color="warn" aria-label="Augmenter PM Joueur 2" (click)="inc('p2','pm')"><mat-icon>add</mat-icon></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <mat-tab-group>
        <mat-tab [label]="scenario.title">
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
        </mat-tab>

        <mat-tab [label]="feat.title">
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
        </mat-tab>
      </mat-tab-group>
    }
  `,
  styles: [`
    .image-wrapper { max-width: 650px; margin: 8px 0 16px; }
    .image-wrapper img { width: 100%; height: auto; border-radius: 4px; }
    .description :where(p, ul, ol) { line-height: 1.6; }
    .score-board { margin: 8px 0 16px; padding: 12px; border: 1px solid #ddd; border-radius: 12px; }
    .score-board h2 { margin: 0 0 12px; font-size: 20px; }
    .players { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
    .player { border-radius: 10px; padding: 12px; color: #0d1b2a; }
    .player.p1 { background: #e3f2fd; /* bleu clair */ }
    .player.p2 { background: #ffebee; /* rouge clair */ }
    .player-title { font-weight: 700; margin-bottom: 10px; font-size: 16px; }
    .stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .stat-tile { background: rgba(255,255,255,0.7); border-radius: 10px; padding: 12px; display: grid; grid-template-rows: auto 1fr auto; align-items: center; text-align: center; box-shadow: 0 1px 2px rgba(0,0,0,0.06); }
    .stat-label { font-weight: 600; opacity: 0.9; }
    .stat-value { font-size: clamp(28px, 6vw, 40px); line-height: 1.2; font-weight: 800; margin: 8px 0; font-variant-numeric: tabular-nums; }
    .stat-actions { display: flex; justify-content: center; gap: 12px; }
    .stat-actions button[mat-fab] { width: 48px; height: 48px; }
    @media (max-width: 420px) { .stat-actions button[mat-fab] { width: 56px; height: 56px; } }
  `]
})
export class ScenarioFeatDetailPageComponent {
  lang = inject(LanguageService);
  labels = this.lang.data.LABEL;
  scenario?: Scenario;
  feat?: Feat;
  private sid: number | null = null;
  private fid: number | null = null;
  private static readonly SCORE_LAST_RANDOM_SEEN_KEY = 'wc:score:lastRandom';
  private static readonly LAST_RANDOM_KEY = 'wc:lastRandom';

  // Modèle de score
  score: { p1: { pa: number; pm: number }, p2: { pa: number; pm: number } } = {
    p1: { pa: 0, pm: 0 },
    p2: { pa: 0, pm: 0 }
  };

  constructor(private route: ActivatedRoute) {
    const sidParam = this.route.snapshot.paramMap.get('sid');
    const fidParam = this.route.snapshot.paramMap.get('fid');
    const sid = sidParam ? Number(sidParam) : NaN;
    const fid = fidParam ? Number(fidParam) : NaN;
    this.sid = !Number.isNaN(sid) && sid >= 0 ? sid : null;
    this.fid = !Number.isNaN(fid) && fid >= 0 ? fid : null;
    this.refresh();
    this.lang.langChanges.subscribe(() => this.refresh());
    this.initScore();
  }

  private refresh() {
    if (this.sid === null || this.fid === null) { this.scenario = undefined; this.feat = undefined; return; }
    const scenarios = this.lang.data.SCENARIO;
    const feats = this.lang.data.FEAT;
    this.scenario = (this.sid >= 0 && this.sid < scenarios.length) ? scenarios[this.sid] : undefined;
    this.feat = (this.fid >= 0 && this.fid < feats.length) ? feats[this.fid] : undefined;
    this.labels = this.lang.data.LABEL;
  }

  // Gestion du score
  inc(player: 'p1'|'p2', stat: 'pa'|'pm') {
    this.score[player][stat] = (this.score[player][stat] ?? 0) + 1;
    this.saveScore();
  }

  dec(player: 'p1'|'p2', stat: 'pa'|'pm') {
    const v = (this.score[player][stat] ?? 0) - 1;
    this.score[player][stat] = v < 0 ? 0 : v;
    this.saveScore();
  }

  private getScoreKey() {
    return (this.sid !== null && this.fid !== null) ? `wc:score:${this.sid}:${this.fid}` : 'wc:score:unknown';
  }

  private loadScore() {
    try {
      const raw = localStorage.getItem(this.getScoreKey());
      if (!raw) { return; }
      const parsed = JSON.parse(raw) as any;
      if (parsed && parsed.p1 && parsed.p2) {
        this.score = {
          p1: { pa: Number(parsed.p1.pa) || 0, pm: Number(parsed.p1.pm) || 0 },
          p2: { pa: Number(parsed.p2.pa) || 0, pm: Number(parsed.p2.pm) || 0 }
        };
      }
    } catch { /* ignore */ }
  }

  private saveScore() {
    try {
      localStorage.setItem(this.getScoreKey(), JSON.stringify(this.score));
    } catch { /* ignore */ }
  }

  private resetScoreToZero() {
    this.score = { p1: { pa: 0, pm: 0 }, p2: { pa: 0, pm: 0 } };
    this.saveScore();
  }

  private initScore() {
    // Réinitialise à 0 si la rencontre mémorisée vient de changer et correspond à cette page
    try {
      const lastRaw = localStorage.getItem(ScenarioFeatDetailPageComponent.LAST_RANDOM_KEY);
      const seen = localStorage.getItem(ScenarioFeatDetailPageComponent.SCORE_LAST_RANDOM_SEEN_KEY);
      if (lastRaw && lastRaw !== seen) {
        const parsed = JSON.parse(lastRaw) as { sid?: number; fid?: number } | null;
        if (parsed && typeof parsed.sid === 'number' && typeof parsed.fid === 'number') {
          if (this.sid === parsed.sid && this.fid === parsed.fid) {
            // Nouvelle rencontre sélectionnée -> remettre le score à 0 pour cette page
            this.resetScoreToZero();
          }
        }
        // Mémorise le dernier wc:lastRandom vu pour éviter reset intempestif
        localStorage.setItem(ScenarioFeatDetailPageComponent.SCORE_LAST_RANDOM_SEEN_KEY, lastRaw);
        return; // on sort: soit reset effectué soit pas pertinent, mais on ne recharge pas d'ancien score
      }
    } catch { /* ignore */ }

    // Sinon, charger le score existant pour cette rencontre
    this.loadScore();
  }
}
