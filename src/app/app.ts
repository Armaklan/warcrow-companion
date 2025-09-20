import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatDividerModule
  ],
  template: `
  <mat-sidenav-container class="app-container">
    <mat-sidenav #sidenav mode="side" [opened]="isWideScreen">
      <mat-nav-list>
        <a mat-list-item routerLink="/actions" (click)="closeOnMobile()">
          <mat-icon>bolt</mat-icon>
          <span>Actions</span>
        </a>
        <a mat-list-item routerLink="/mots-clefs" (click)="closeOnMobile()">
          <mat-icon>label</mat-icon>
          <span>Mots‑clefs</span>
        </a>
        <a mat-list-item routerLink="/etats" (click)="closeOnMobile()">
          <mat-icon>info</mat-icon>
          <span>États</span>
        </a>
      </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content>
      <mat-toolbar color="primary">
        @if (!isWideScreen) {
          <button mat-icon-button (click)="sidenav.toggle()" aria-label="Ouvrir le menu">
            <mat-icon>menu</mat-icon>
          </button>
        }
        <span class="toolbar-title">Référence — Actions / Mots‑clefs / États</span>
        <span class="spacer"></span>
      </mat-toolbar>

      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class App {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isWideScreen = window.matchMedia('(min-width: 960px)').matches;

  constructor() {
    const mq = window.matchMedia('(min-width: 960px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => this.isWideScreen = e.matches;
    // @ts-ignore
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler as any);
  }

  closeOnMobile() {
    if (!this.isWideScreen && this.sidenav?.opened) {
      this.sidenav.close();
    }
  }
}
