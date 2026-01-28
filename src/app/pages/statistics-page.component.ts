import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTabsModule],
  template: `
    <h1>{{ labels.menu.statistique }}</h1>

    <mat-tab-group>
      <mat-tab [label]="labels.menu.statistiqueTab.profil" [attr.aria-label]="'Onglet ' + labels.menu.statistiqueTab.profil">
        <div class="dice-controls two-cols">
          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Red" aria-hidden="true"></span>
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
          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Success" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="decSym('Success')" aria-label="Retirer un succès">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ sSuccess }}</span>
                <button mat-mini-fab color="primary" (click)="incSym('Success')" aria-label="Ajouter un succès">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Special" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="decSym('Special')" aria-label="Retirer un spécial">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ sSpecial }}</span>
                <button mat-mini-fab color="primary" (click)="incSym('Special')" aria-label="Ajouter un spécial">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Block" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="decSym('Block')" aria-label="Retirer un bloc">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ sBlock }}</span>
                <button mat-mini-fab color="primary" (click)="incSym('Block')" aria-label="Ajouter un bloc">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-HollowSuccess" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="decSym('HollowSuccess')" aria-label="Retirer un succès creux">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ sHollowSuccess }}</span>
                <button mat-mini-fab color="primary" (click)="incSym('HollowSuccess')" aria-label="Ajouter un succès creux">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Hollow-Special" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="decSym('HollowSpecial')" aria-label="Retirer un spécial creux">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ sHollowSpecial }}</span>
                <button mat-mini-fab color="primary" (click)="incSym('HollowSpecial')" aria-label="Ajouter un spécial creux">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Hollow-Block" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="decSym('HollowBlock')" aria-label="Retirer un bloc creux">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ sHollowBlock }}</span>
                <button mat-mini-fab color="primary" (click)="incSym('HollowBlock')" aria-label="Ajouter un bloc creux">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>{{ labels.menu.statistiqueTab.apercu }}</h2>
        <div class="preview" aria-label="Dés sélectionnés - Mon profil">
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
          <!-- Symboles fixes - Mon profil -->
          <ng-container *ngFor="let i of countArray(sSuccess)">
            <span class="die warcrow-font-Success" role="img" aria-label="Symbole succès"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(sSpecial)">
            <span class="die warcrow-font-Special" role="img" aria-label="Symbole spécial"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(sBlock)">
            <span class="die warcrow-font-Block" role="img" aria-label="Symbole bloc"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(sHollowSuccess)">
            <span class="die warcrow-font-HollowSuccess" role="img" aria-label="Symbole succès creux"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(sHollowSpecial)">
            <span class="die warcrow-font-Hollow-Special" role="img" aria-label="Symbole spécial creux"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(sHollowBlock)">
            <span class="die warcrow-font-Hollow-Block" role="img" aria-label="Symbole bloc creux"></span>
          </ng-container>
          <span class="empty" *ngIf="red + orange + yellow + green + blue + black + sSuccess + sSpecial + sBlock + sHollowSuccess + sHollowSpecial + sHollowBlock === 0">Aucune sélection</span>
        </div>
      </mat-tab>

      <mat-tab [label]="labels.menu.statistiqueTab.adversaire" [attr.aria-label]="'Onglet ' + labels.menu.statistiqueTab.adversaire">
        <div class="dice-controls two-cols">
          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Red" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDec('red')" aria-label="Retirer un dé rouge (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oRed }}</span>
                <button mat-mini-fab color="primary" (click)="oppInc('red')" aria-label="Ajouter un dé rouge (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Orange" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDec('orange')" aria-label="Retirer un dé orange (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oOrange }}</span>
                <button mat-mini-fab color="primary" (click)="oppInc('orange')" aria-label="Ajouter un dé orange (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Yellow" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDec('yellow')" aria-label="Retirer un dé jaune (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oYellow }}</span>
                <button mat-mini-fab color="primary" (click)="oppInc('yellow')" aria-label="Ajouter un dé jaune (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Green" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDec('green')" aria-label="Retirer un dé vert (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oGreen }}</span>
                <button mat-mini-fab color="primary" (click)="oppInc('green')" aria-label="Ajouter un dé vert (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Blue" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDec('blue')" aria-label="Retirer un dé bleu (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oBlue }}</span>
                <button mat-mini-fab color="primary" (click)="oppInc('blue')" aria-label="Ajouter un dé bleu (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Black" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDec('black')" aria-label="Retirer un dé noir (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oBlack }}</span>
                <button mat-mini-fab color="primary" (click)="oppInc('black')" aria-label="Ajouter un dé noir (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Success" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDecSym('Success')" aria-label="Retirer un succès (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oSuccess }}</span>
                <button mat-mini-fab color="primary" (click)="oppIncSym('Success')" aria-label="Ajouter un succès (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Special" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDecSym('Special')" aria-label="Retirer un spécial (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oSpecial }}</span>
                <button mat-mini-fab color="primary" (click)="oppIncSym('Special')" aria-label="Ajouter un spécial (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Block" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDecSym('Block')" aria-label="Retirer un bloc (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oBlock }}</span>
                <button mat-mini-fab color="primary" (click)="oppIncSym('Block')" aria-label="Ajouter un bloc (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-HollowSuccess" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDecSym('HollowSuccess')" aria-label="Retirer un succès creux (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oHollowSuccess }}</span>
                <button mat-mini-fab color="primary" (click)="oppIncSym('HollowSuccess')" aria-label="Ajouter un succès creux (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Hollow-Special" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDecSym('HollowSpecial')" aria-label="Retirer un spécial creux (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oHollowSpecial }}</span>
                <button mat-mini-fab color="primary" (click)="oppIncSym('HollowSpecial')" aria-label="Ajouter un spécial creux (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>

            <div class="dice-row">
              <div class="dice-type">
                <span class="warcrow-font-Hollow-Block" aria-hidden="true"></span>
              </div>
              <div class="spacer"></div>
              <div class="actions">
                <button mat-mini-fab color="primary" (click)="oppDecSym('HollowBlock')" aria-label="Retirer un bloc creux (adversaire)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="count">{{ oHollowBlock }}</span>
                <button mat-mini-fab color="primary" (click)="oppIncSym('HollowBlock')" aria-label="Ajouter un bloc creux (adversaire)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>{{ labels.menu.statistiqueTab.apercu }}</h2>
        <div class="preview" aria-label="Dés sélectionnés - Mon adversaire">
          <ng-container *ngFor="let i of countArray(oRed)">
            <span class="die warcrow-font-Red" role="img" aria-label="Dé rouge"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oOrange)">
            <span class="die warcrow-font-Orange" role="img" aria-label="Dé orange"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oYellow)">
            <span class="die warcrow-font-Yellow" role="img" aria-label="Dé jaune"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oGreen)">
            <span class="die warcrow-font-Green" role="img" aria-label="Dé vert"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oBlue)">
            <span class="die warcrow-font-Blue" role="img" aria-label="Dé bleu"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oBlack)">
            <span class="die warcrow-font-Black" role="img" aria-label="Dé noir"></span>
          </ng-container>
          <!-- Symboles fixes - Adversaire -->
          <ng-container *ngFor="let i of countArray(oSuccess)">
            <span class="die warcrow-font-Success" role="img" aria-label="Symbole succès (adversaire)"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oSpecial)">
            <span class="die warcrow-font-Special" role="img" aria-label="Symbole spécial (adversaire)"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oBlock)">
            <span class="die warcrow-font-Block" role="img" aria-label="Symbole bloc (adversaire)"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oHollowSuccess)">
            <span class="die warcrow-font-HollowSuccess" role="img" aria-label="Symbole succès creux (adversaire)"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oHollowSpecial)">
            <span class="die warcrow-font-Hollow-Special" role="img" aria-label="Symbole spécial creux (adversaire)"></span>
          </ng-container>
          <ng-container *ngFor="let i of countArray(oHollowBlock)">
            <span class="die warcrow-font-Hollow-Block" role="img" aria-label="Symbole bloc creux (adversaire)"></span>
          </ng-container>
          <span class="empty" *ngIf="oRed + oOrange + oYellow + oGreen + oBlue + oBlack + oSuccess + oSpecial + oBlock + oHollowSuccess + oHollowSpecial + oHollowBlock === 0">Aucune sélection</span>
        </div>
      </mat-tab>
    </mat-tab-group>

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
            <th rowspan="2">Symbole</th>
            <th class="group" colspan="2">{{ labels.menu.statistiqueTab.profil }}</th>
            <th class="group" colspan="2" *ngIf="opponentHasSelection">{{ labels.menu.statistiqueTab.adversaire }}</th>
          </tr>
          <tr>
            <th title="Nombre moyen pour ma sélection">Moy</th>
            <th title="Valeur maximale possible pour ma sélection">Max</th>
            <th *ngIf="opponentHasSelection" title="Nombre moyen pour la sélection de l'adversaire">Moy</th>
            <th *ngIf="opponentHasSelection" title="Valeur maximale possible pour la sélection de l'adversaire">Max</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of symbols">
            <td class="sym">
              <span class="sym-ico" [ngClass]="symbolClass[s]" aria-hidden="true"></span>
            </td>
            <td class="num strong">{{ formatNum(totalAvg[s]) }}</td>
            <td class="num strong">{{ formatInt(totalMax[s]) }}</td>
            <td class="num strong" *ngIf="opponentHasSelection">{{ formatNum(opponentAvg[s]) }}</td>
            <td class="num strong" *ngIf="opponentHasSelection">{{ formatInt(opponentMax[s]) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .dice-controls { display: grid; gap: 12px; max-width: 1120px; margin-top: 1em; }
    .dice-controls.two-cols { grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); align-items: start; }
    .dice-controls .col { display: grid; gap: 12px; }
    .dice-row { display: flex; align-items: center; padding: 8px 12px; border: 1px solid var(--wc-border); border-radius: 8px; background: var(--wc-surface); }
    .dice-type { display: flex; align-items: center; gap: 8px; font-size: 20px; }
    .dice-type .warcrow-font-Red,
    .dice-type .warcrow-font-Orange,
    .dice-type .warcrow-font-Yellow,
    .dice-type .warcrow-font-Green,
    .dice-type .warcrow-font-Blue,
    .dice-type .warcrow-font-Black { font-size: 28px; line-height: 1; }
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
    .stats-table thead .group { text-align: center; }
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

  // Opponent selection
  oRed = 0;
  oOrange = 0;
  oYellow = 0;
  oGreen = 0;
  oBlue = 0;
  oBlack = 0;

  // --- Symbols model ---
  symbols = ['Success','HollowSuccess', 'Special','HollowSpecial','Block','HollowBlock'] as const;
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

  // --- Manual symbol selections (each counts as +1 in stats) ---
  sSuccess = 0;
  sSpecial = 0;
  sBlock = 0;
  sHollowSuccess = 0;
  sHollowSpecial = 0;
  sHollowBlock = 0;

  // --- Opponent manual symbol selections ---
  oSuccess = 0;
  oSpecial = 0;
  oBlock = 0;
  oHollowSuccess = 0;
  oHollowSpecial = 0;
  oHollowBlock = 0;

  incSym(sym: (typeof this.symbols)[number]) {
    switch (sym) {
      case 'Success': this.sSuccess++; break;
      case 'Special': this.sSpecial++; break;
      case 'Block': this.sBlock++; break;
      case 'HollowSuccess': this.sHollowSuccess++; break;
      case 'HollowSpecial': this.sHollowSpecial++; break;
      case 'HollowBlock': this.sHollowBlock++; break;
    }
  }
  decSym(sym: (typeof this.symbols)[number]) {
    switch (sym) {
      case 'Success': this.sSuccess = Math.max(0, this.sSuccess - 1); break;
      case 'Special': this.sSpecial = Math.max(0, this.sSpecial - 1); break;
      case 'Block': this.sBlock = Math.max(0, this.sBlock - 1); break;
      case 'HollowSuccess': this.sHollowSuccess = Math.max(0, this.sHollowSuccess - 1); break;
      case 'HollowSpecial': this.sHollowSpecial = Math.max(0, this.sHollowSpecial - 1); break;
      case 'HollowBlock': this.sHollowBlock = Math.max(0, this.sHollowBlock - 1); break;
    }
  }

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
    const base = this.computeTotalsAvg({
      red: this.red, orange: this.orange, yellow: this.yellow,
      green: this.green, blue: this.blue, black: this.black
    });
    // Add manual fixed symbols (each selection contributes +1 deterministically)
    base.Success += this.sSuccess;
    base.Special += this.sSpecial;
    base.Block += this.sBlock;
    base.HollowSuccess += this.sHollowSuccess;
    base.HollowSpecial += this.sHollowSpecial;
    base.HollowBlock += this.sHollowBlock;
    return base;
  }

  // Total maximums (sum of per-die maxima across selected dice)
  get totalMax(): Record<(typeof this.symbols)[number], number> {
    const base = this.computeTotalsMax({
      red: this.red, orange: this.orange, yellow: this.yellow,
      green: this.green, blue: this.blue, black: this.black
    });
    // Manual fixed symbols also increase maxima by their count
    base.Success += this.sSuccess;
    base.Special += this.sSpecial;
    base.Block += this.sBlock;
    base.HollowSuccess += this.sHollowSuccess;
    base.HollowSpecial += this.sHollowSpecial;
    base.HollowBlock += this.sHollowBlock;
    return base;
  }

  countArray(n: number) { return Array.from({ length: Math.max(0, Math.floor(n)) }); }

  inc(color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'black') {
    this[color] = this[color] + 1;
  }

  dec(color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'black') {
    this[color] = Math.max(0, this[color] - 1);
  }

  reset() {
    this.red = this.orange = this.yellow = this.green = this.blue = this.black = 0;
    this.oRed = this.oOrange = this.oYellow = this.oGreen = this.oBlue = this.oBlack = 0;
    this.sSuccess = this.sSpecial = this.sBlock = 0;
    this.sHollowSuccess = this.sHollowSpecial = this.sHollowBlock = 0;
    this.oSuccess = this.oSpecial = this.oBlock = 0;
    this.oHollowSuccess = this.oHollowSpecial = this.oHollowBlock = 0;
  }

  // Opponent controls
  oppInc(color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'black') {
    const map = { red: 'oRed', orange: 'oOrange', yellow: 'oYellow', green: 'oGreen', blue: 'oBlue', black: 'oBlack' } as const;
    this[map[color]] = (this[map[color]] as number) + 1;
  }
  oppDec(color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'black') {
    const map = { red: 'oRed', orange: 'oOrange', yellow: 'oYellow', green: 'oGreen', blue: 'oBlue', black: 'oBlack' } as const;
    const v = this[map[color]] as number;
    this[map[color]] = Math.max(0, v - 1);
  }

  // Opponent fixed symbol controls
  oppIncSym(sym: (typeof this.symbols)[number]) {
    switch (sym) {
      case 'Success': this.oSuccess++; break;
      case 'Special': this.oSpecial++; break;
      case 'Block': this.oBlock++; break;
      case 'HollowSuccess': this.oHollowSuccess++; break;
      case 'HollowSpecial': this.oHollowSpecial++; break;
      case 'HollowBlock': this.oHollowBlock++; break;
    }
  }
  oppDecSym(sym: (typeof this.symbols)[number]) {
    switch (sym) {
      case 'Success': this.oSuccess = Math.max(0, this.oSuccess - 1); break;
      case 'Special': this.oSpecial = Math.max(0, this.oSpecial - 1); break;
      case 'Block': this.oBlock = Math.max(0, this.oBlock - 1); break;
      case 'HollowSuccess': this.oHollowSuccess = Math.max(0, this.oHollowSuccess - 1); break;
      case 'HollowSpecial': this.oHollowSpecial = Math.max(0, this.oHollowSpecial - 1); break;
      case 'HollowBlock': this.oHollowBlock = Math.max(0, this.oHollowBlock - 1); break;
    }
  }

  get opponentHasSelection(): boolean {
    return (
      this.oRed + this.oOrange + this.oYellow + this.oGreen + this.oBlue + this.oBlack +
      this.oSuccess + this.oSpecial + this.oBlock + this.oHollowSuccess + this.oHollowSpecial + this.oHollowBlock
    ) > 0;
  }

  get opponentAvg(): Record<(typeof this.symbols)[number], number> {
    const base = this.computeTotalsAvg({
      red: this.oRed, orange: this.oOrange, yellow: this.oYellow,
      green: this.oGreen, blue: this.oBlue, black: this.oBlack
    });
    base.Success += this.oSuccess;
    base.Special += this.oSpecial;
    base.Block += this.oBlock;
    base.HollowSuccess += this.oHollowSuccess;
    base.HollowSpecial += this.oHollowSpecial;
    base.HollowBlock += this.oHollowBlock;
    return base;
  }

  get opponentMax(): Record<(typeof this.symbols)[number], number> {
    const base = this.computeTotalsMax({
      red: this.oRed, orange: this.oOrange, yellow: this.oYellow,
      green: this.oGreen, blue: this.oBlue, black: this.oBlack
    });
    base.Success += this.oSuccess;
    base.Special += this.oSpecial;
    base.Block += this.oBlock;
    base.HollowSuccess += this.oHollowSuccess;
    base.HollowSpecial += this.oHollowSpecial;
    base.HollowBlock += this.oHollowBlock;
    return base;
  }

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

  private computeTotalsAvg(counts: { red: number, orange: number, yellow: number, green: number, blue: number, black: number }): Record<(typeof this.symbols)[number], number> {
    const out: Record<(typeof this.symbols)[number], number> = {
      Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0
    };
    for (const s of this.symbols) {
      out[s] = counts.red * this.avgPerDie.red[s]
             + counts.orange * this.avgPerDie.orange[s]
             + counts.yellow * this.avgPerDie.yellow[s]
             + counts.green * this.avgPerDie.green[s]
             + counts.blue * this.avgPerDie.blue[s]
             + counts.black * this.avgPerDie.black[s];
    }
    return out;
  }

  private computeTotalsMax(counts: { red: number, orange: number, yellow: number, green: number, blue: number, black: number }): Record<(typeof this.symbols)[number], number> {
    const out: Record<(typeof this.symbols)[number], number> = {
      Success: 0, Special: 0, HollowSuccess: 0, HollowSpecial: 0, Block: 0, HollowBlock: 0
    };
    for (const s of this.symbols) {
      out[s] = counts.red * this.maxPerDie.red[s]
             + counts.orange * this.maxPerDie.orange[s]
             + counts.yellow * this.maxPerDie.yellow[s]
             + counts.green * this.maxPerDie.green[s]
             + counts.blue * this.maxPerDie.blue[s]
             + counts.black * this.maxPerDie.black[s];
    }
    return out;
  }

  formatNum(v: number): string { return (v ?? 0).toFixed(2); }
  formatInt(v: number): string { return String(Math.round(v ?? 0)); }
}
