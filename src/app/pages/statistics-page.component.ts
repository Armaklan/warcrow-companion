import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <h1>{{ labels.menu.statistique }}</h1>

    <div class="dice-controls two-cols">
      <div class="col">
        <div class="dice-row">
          <div class="dice-type">
            <span class="warcrow-font-Red" aria-hidden="true"></span>
            <span class="dice-name">Rouge</span>
          </div>
          <div class="spacer"></div>
          <div class="actions">
            <button mat-mini-fab color="primary" (click)="dec('red')" aria-label="Retirer un dé rouge">
              <mat-icon>remove</mat-icon>
            </button>
            <span class="count">{{ red }}</span>
            <button mat-mini-fab color="primary" (click)="inc('red')" aria-label="Ajouter un dé rouge">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>

        <div class="dice-row">
          <div class="dice-type">
            <span class="warcrow-font-Orange" aria-hidden="true"></span>
            <span class="dice-name">Orange</span>
          </div>
          <div class="spacer"></div>
          <div class="actions">
            <button mat-mini-fab color="primary" (click)="dec('orange')" aria-label="Retirer un dé orange">
              <mat-icon>remove</mat-icon>
            </button>
            <span class="count">{{ orange }}</span>
            <button mat-mini-fab color="primary" (click)="inc('orange')" aria-label="Ajouter un dé orange">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>

        <div class="dice-row">
          <div class="dice-type">
            <span class="warcrow-font-Yellow" aria-hidden="true"></span>
            <span class="dice-name">Jaune</span>
          </div>
          <div class="spacer"></div>
          <div class="actions">
            <button mat-mini-fab color="primary" (click)="dec('yellow')" aria-label="Retirer un dé jaune">
              <mat-icon>remove</mat-icon>
            </button>
            <span class="count">{{ yellow }}</span>
            <button mat-mini-fab color="primary" (click)="inc('yellow')" aria-label="Ajouter un dé jaune">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="dice-row">
          <div class="dice-type">
            <span class="warcrow-font-Green" aria-hidden="true"></span>
            <span class="dice-name">Vert</span>
          </div>
          <div class="spacer"></div>
          <div class="actions">
            <button mat-mini-fab color="primary" (click)="dec('green')" aria-label="Retirer un dé vert">
              <mat-icon>remove</mat-icon>
            </button>
            <span class="count">{{ green }}</span>
            <button mat-mini-fab color="primary" (click)="inc('green')" aria-label="Ajouter un dé vert">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>

        <div class="dice-row">
          <div class="dice-type">
            <span class="warcrow-font-Blue" aria-hidden="true"></span>
            <span class="dice-name">Bleu</span>
          </div>
          <div class="spacer"></div>
          <div class="actions">
            <button mat-mini-fab color="primary" (click)="dec('blue')" aria-label="Retirer un dé bleu">
              <mat-icon>remove</mat-icon>
            </button>
            <span class="count">{{ blue }}</span>
            <button mat-mini-fab color="primary" (click)="inc('blue')" aria-label="Ajouter un dé bleu">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>

        <div class="dice-row">
          <div class="dice-type">
            <span class="warcrow-font-Black" aria-hidden="true"></span>
            <span class="dice-name">Noir</span>
          </div>
          <div class="spacer"></div>
          <div class="actions">
            <button mat-mini-fab color="primary" (click)="dec('black')" aria-label="Retirer un dé noir">
              <mat-icon>remove</mat-icon>
            </button>
            <span class="count">{{ black }}</span>
            <button mat-mini-fab color="primary" (click)="inc('black')" aria-label="Ajouter un dé noir">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <h2>Aperçu</h2>
    <div class="preview" aria-label="Dés sélectionnés">
      <ng-container *ngFor="let i of countArray(red)">
        <span class="die warcrow-font-Red" role="img" aria-label="Dé rouge"></span>
      </ng-container>
      <ng-container *ngFor="let i of countArray(orange)">
        <span class="die warcrow-font-Orange" role="img" aria-label="Dé orange"></span>
      </ng-container>
      <ng-container *ngFor="let i of countArray(yellow)">
        <span class="die warcrow-font-Yellow" role="img" aria-label="Dé jaune"></span>
      </ng-container>
      <ng-container *ngFor="let i of countArray(green)">
        <span class="die warcrow-font-Green" role="img" aria-label="Dé vert"></span>
      </ng-container>
      <ng-container *ngFor="let i of countArray(blue)">
        <span class="die warcrow-font-Blue" role="img" aria-label="Dé bleu"></span>
      </ng-container>
      <ng-container *ngFor="let i of countArray(black)">
        <span class="die warcrow-font-Black" role="img" aria-label="Dé noir"></span>
      </ng-container>
      <span class="empty" *ngIf="red + orange + yellow + green + blue + black === 0">Aucun dé sélectionné</span>
    </div>

    <h2>Statistique</h2>
    <div class="stats-actions">
      <button mat-stroked-button color="primary" (click)="reset()">
        <mat-icon>restart_alt</mat-icon>
        Réinitialiser
      </button>
    </div>

    <div class="table-wrap">
      <table class="stats-table" aria-label="Tableau du nombre moyen et maximum par symbole">
        <thead>
          <tr>
            <th>Symbole</th>
            <th title="Nombre moyen pour la sélection">Nombre moyen</th>
            <th title="Valeur maximale possible pour la sélection">Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of symbols">
            <td class="sym">
              <span class="sym-ico" [ngClass]="symbolClass[s]" aria-hidden="true"></span>
              <span class="sym-name">{{ symbolLabel[s] }}</span>
            </td>
            <td class="num strong">{{ formatNum(totalAvg[s]) }}</td>
            <td class="num strong">{{ formatInt(totalMax[s]) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .dice-controls { display: grid; gap: 12px; max-width: 1120px; }
    .dice-controls.two-cols { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); align-items: start; }
    .dice-controls .col { display: grid; gap: 12px; }
    .dice-row { display: flex; align-items: center; gap: 12px; padding: 8px 12px; border: 1px solid var(--wc-border); border-radius: 8px; background: var(--wc-surface); }
    .dice-type { display: flex; align-items: center; gap: 8px; font-size: 20px; }
    .dice-type .warcrow-font-Red,
    .dice-type .warcrow-font-Orange,
    .dice-type .warcrow-font-Yellow,
    .dice-type .warcrow-font-Green,
    .dice-type .warcrow-font-Blue,
    .dice-type .warcrow-font-Black { font-size: 28px; line-height: 1; }
    .dice-name { font-weight: 600; }
    .spacer { flex: 1; }
    .actions { display: flex; align-items: center; gap: 8px; }
    .count { min-width: 24px; text-align: center; font-weight: 600; }
    .preview { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; border: 2px dashed var(--wc-border); border-radius: 8px; min-height: 64px; }
    .preview .die { font-size: 36px; line-height: 1; }
    .empty { color: #777; font-style: italic; }

    .stats-actions { margin: 12px 0; }
    .table-wrap { overflow-x: auto; }
    .stats-table { border-collapse: collapse; width: 100%; max-width: 720px; }
    .stats-table th, .stats-table td { border: 1px solid var(--wc-border); padding: 6px 8px; text-align: right; background: var(--wc-surface); }
    .stats-table th:first-child, .stats-table td:first-child { text-align: left; }
    .stats-table thead th { background: #f5f5f5; position: sticky; top: 0; }
    .sym { display: flex; align-items: center; gap: 8px; }
    .sym-ico { font-size: 18px; }
    .num { font-variant-numeric: tabular-nums; }
    .strong { font-weight: 600; }
  `]
})
export class StatisticsPageComponent {
  private lang = inject(LanguageService);
  get labels() { return this.lang.data.LABEL; }

  red = 0;
  orange = 0;
  yellow = 0;
  green = 0;
  blue = 0;
  black = 0;

  // --- Symbols model ---
  symbols = ['Success','Special','HollowSuccess','HollowSpecial','Block','HollowBlock'] as const;
  symbolClass: Record<(typeof this.symbols)[number], string> = {
    Success: 'warcrow-font-Success',
    Special: 'warcrow-font-Special',
    HollowSuccess: 'warcrow-font-HollowSuccess',
    HollowSpecial: 'warcrow-font-Hollow-Special',
    Block: 'warcrow-font-Block',
    HollowBlock: 'warcrow-font-Hollow-Block'
  } as const;
  symbolLabel: Record<(typeof this.symbols)[number], string> = {
    Success: 'Success',
    Special: 'Special',
    HollowSuccess: 'HollowSuccess',
    HollowSpecial: 'HollowSpecial',
    Block: 'Block',
    HollowBlock: 'HollowBlock'
  } as const;

  // --- Dice faces definition (equally likely) ---
  private facesRed: Array<Record<(typeof this.symbols)[number], number>> = [
    // 2 Success (x2 faces)
    { Success: 2, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 2, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Success (x4 faces)
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Success 1 Special
    { Success: 1, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 SuccessHollow 1 Special
    { Success: 0, Special: 1, HollowSuccess: 1, HollowSpecial: 0, Block: 0, HollowBlock: 0 }
  ];

  private facesOrange: Array<Record<(typeof this.symbols)[number], number>> = [
    // 1 Success (x2)
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 SuccessHollow 1 Special
    { Success: 0, Special: 1, HollowSuccess: 1, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Success 1 Special (x2)
    { Success: 1, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 1, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Success 1 SpecialHollow
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 1, Block: 0, HollowBlock: 0 },
    // 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Special Hollow
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 1, Block: 0, HollowBlock: 0 }
  ];

  private facesYellow: Array<Record<(typeof this.symbols)[number], number>> = [
    // 1 Success 1 Special (x2 lines given; treat as two faces)
    { Success: 1, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 1, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 SuccessHollow 1Spcial (typo -> Special)
    { Success: 0, Special: 1, HollowSuccess: 1, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Success
    { Success: 1, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 2 Special
    { Success: 0, Special: 2, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Special (x2)
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 SuccessHollow
    { Success: 0, Special: 0, HollowSuccess: 1, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 SpecialHollow
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 1, Block: 0, HollowBlock: 0 }
  ];

  // New dice faces according to the provided lists (8 faces each, equiprobables)
  private facesGreen: Array<Record<(typeof this.symbols)[number], number>> = [
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 2 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 2, HollowBlock: 0 },
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 BlockHollow 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 1 },
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 }
  ];

  private facesBlue: Array<Record<(typeof this.symbols)[number], number>> = [
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 Block 1 SpecialHollow
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 1, Block: 1, HollowBlock: 0 },
    // 1 Block 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 BlockHollow 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 1 },
    // 1 Special Hollow
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 1, Block: 0, HollowBlock: 0 },
    // 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 }
  ];

  private facesBlack: Array<Record<(typeof this.symbols)[number], number>> = [
    // 1 BlockHollow 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 1 },
    // 1 Block 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 BlockHollow 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 1 },
    // 2 Special
    { Success: 0, Special: 2, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Block
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 1, HollowBlock: 0 },
    // 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 },
    // 1 Special Hollow
    { Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 1, Block: 0, HollowBlock: 0 },
    // 1 Special
    { Success: 0, Special: 1, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0 }
  ];

  // Precomputed per-die averages
  avgPerDie = {
    red: this.computeAverages(this.facesRed),
    orange: this.computeAverages(this.facesOrange),
    yellow: this.computeAverages(this.facesYellow),
    green: this.computeAverages(this.facesGreen),
    blue: this.computeAverages(this.facesBlue),
    black: this.computeAverages(this.facesBlack)
  } as const;

  // Precomputed per-die maximums (max symbols achievable on one face)
  maxPerDie = {
    red: this.computeMaximums(this.facesRed),
    orange: this.computeMaximums(this.facesOrange),
    yellow: this.computeMaximums(this.facesYellow),
    green: this.computeMaximums(this.facesGreen),
    blue: this.computeMaximums(this.facesBlue),
    black: this.computeMaximums(this.facesBlack)
  } as const;

  // Total averages (depend on selection)
  get totalAvg(): Record<(typeof this.symbols)[number], number> {
    const out: Record<(typeof this.symbols)[number], number> = {
      Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0
    };
    for (const s of this.symbols) {
      out[s] = this.red * this.avgPerDie.red[s]
             + this.orange * this.avgPerDie.orange[s]
             + this.yellow * this.avgPerDie.yellow[s]
             + this.green * this.avgPerDie.green[s]
             + this.blue * this.avgPerDie.blue[s]
             + this.black * this.avgPerDie.black[s];
    }
    return out;
  }

  // Total maximums (sum of per-die maxima across selected dice)
  get totalMax(): Record<(typeof this.symbols)[number], number> {
    const out: Record<(typeof this.symbols)[number], number> = {
      Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0
    };
    for (const s of this.symbols) {
      out[s] = this.red * this.maxPerDie.red[s]
             + this.orange * this.maxPerDie.orange[s]
             + this.yellow * this.maxPerDie.yellow[s]
             + this.green * this.maxPerDie.green[s]
             + this.blue * this.maxPerDie.blue[s]
             + this.black * this.maxPerDie.black[s];
    }
    return out;
  }

  countArray(n: number) { return Array.from({ length: Math.max(0, Math.floor(n)) }); }

  inc(color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'black') {
    this[color] = this[color] + 1;
  }

  dec(color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'black') {
    this[color] = Math.max(0, this[color] - 1);
  }

  reset() { this.red = this.orange = this.yellow = this.green = this.blue = this.black = 0; }

  private computeAverages(faces: Array<Record<(typeof this.symbols)[number], number>>): Record<(typeof this.symbols)[number], number> {
    const sum: Record<(typeof this.symbols)[number], number> = {
      Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0
    };
    const n = faces.length || 1;
    for (const f of faces) {
      for (const s of this.symbols) sum[s] += f[s] || 0;
    }
    for (const s of this.symbols) sum[s] = sum[s] / n;
    return sum;
  }

  private computeMaximums(faces: Array<Record<(typeof this.symbols)[number], number>>): Record<(typeof this.symbols)[number], number> {
    const max: Record<(typeof this.symbols)[number], number> = {
      Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0
    };
    for (const s of this.symbols) {
      let m = 0;
      for (const f of faces) m = Math.max(m, f[s] || 0);
      max[s] = m;
    }
    return max;
  }

  formatNum(v: number): string { return (v ?? 0).toFixed(2); }
  formatInt(v: number): string { return String(Math.round(v ?? 0)); }
}
