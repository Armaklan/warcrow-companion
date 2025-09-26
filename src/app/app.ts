import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenav} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SearchEntry, SearchService} from './shared/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatDividerModule,
    MatFormFieldModule, MatInputModule
  ],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav #sidenav [mode]="isWideScreen ? 'side' : 'over'" [opened]="isWideScreen">
        <div class="menu-search">
          <mat-form-field appearance="outline" class="search-field">
            <mat-icon matPrefix>search</mat-icon>
            <input matInput type="search" placeholder="Rechercher..." [value]="searchQuery" (input)="onSearchInput($event)" (focus)="onSearchFocus()" (blur)="onSearchBlur()" aria-label="Recherche globale"/>
          </mat-form-field>
          @if (showResults && searchResults.length > 0) {
            <div class="search-results">
              @for (r of searchResults; track $index) {
                <a class="result" href (click)="$event.preventDefault(); onSelectResult(r)">
                  <div class="title">{{ r.title }}</div>
                  <div class="meta">{{ r.subtitle || r.kind }}</div>
                </a>
              }
            </div>
          }
        </div>
        <mat-nav-list>
          <a mat-list-item routerLink="/actions" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>bolt</mat-icon>
              <span>Actions</span>
            </div>
          </a>
          <a mat-list-item routerLink="/capacites" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>psychology</mat-icon>
              <span>Capacités</span>
            </div>
          </a>
          <a mat-list-item routerLink="/etats" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>info</mat-icon>
              <span>États et marqueurs</span>
            </div>
          </a>
          <a mat-list-item routerLink="/mots-clefs" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>label</mat-icon>
              <span>Mots‑clefs</span>
            </div>
          </a>
          <a mat-list-item routerLink="/mots-clefs-decors" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>terrain</mat-icon>
              <span>Mots clef de décors</span>
            </div>
          </a>
          <a mat-list-item routerLink="/resume-du-tour" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>summarize</mat-icon>
              <span>Résumé du tour</span>
            </div>
          </a>
          <a mat-list-item routerLink="/resume-opposition" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>groups</mat-icon>
              <span>Résumé d'une opposition</span>
            </div>
          </a>
          <a mat-list-item routerLink="/personnage-unite" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>person</mat-icon>
              <span>Personnages et unités</span>
            </div>
          </a>
          <a mat-list-item routerLink="/decors" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>landscape</mat-icon>
              <span>Décors</span>
            </div>
          </a>
          <a mat-list-item routerLink="/scenarios" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>menu_book</mat-icon>
              <span>Scénarios</span>
            </div>
          </a>
          <a mat-list-item routerLink="/teinte" (click)="closeOnMobile()">
            <div class="menu-item">
              <mat-icon>palette</mat-icon>
              <span>Teinte</span>
            </div>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content (touchstart)="onTouchStart($event)" (touchend)="onTouchEnd($event)">
        <mat-toolbar color="primary">
          @if (!isWideScreen) {
            <button mat-icon-button (click)="sidenav.toggle()" aria-label="Ouvrir le menu">
              <mat-icon>menu</mat-icon>
            </button>
          }
          <span class="toolbar-title">Warcrow Companion</span>
          <span class="spacer"></span>
        </mat-toolbar>

        <div class="content">
          <router-outlet></router-outlet>

          <footer>
            <i>Warcrow is a © Corvus Belli game. All rules belongs to them.</i><br>
            <i>Warcrow Companion is an unofficial fan-made application.</i>
          </footer>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    :host { display: block; }
    .app-container { height: 100vh; }
    mat-sidenav { background: var(--wc-surface); color: rgba(0, 0, 0, 0.87); }
    .menu-item { display: flex; align-items: center; gap: 8px; }
    .menu-search { padding: 12px; border-bottom: 1px solid var(--wc-border); background: #ffffffcc; backdrop-filter: blur(2px); }
    .search-field { width: 100%; }
    .search-results { max-height: 320px; overflow: auto; margin-top: 8px; border: 1px solid #e0e0e0; border-radius: 8px; }
    .search-results .result { display: block; padding: 8px 12px; text-decoration: none; color: inherit; cursor: pointer; }
    .search-results .result:hover { background: var(--wc-hover); }
    .search-results .title { font-weight: 600; }
    .search-results .meta { font-size: 12px; color: #666; }
  `]
})
export class App {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isWideScreen = window.matchMedia('(min-width: 960px)').matches;

  // Mobile swipe state
  private touchStartX: number | null = null;
  private touchStartY: number | null = null;
  private touchStartTime = 0;

  // Search state
  searchQuery = '';
  searchResults: SearchEntry[] = [];
  showResults = false;

  constructor(private router: Router, private searchService: SearchService) {
    const mq = window.matchMedia('(min-width: 960px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => this.isWideScreen = e.matches;
    // @ts-ignore
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler as any);
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.searchQuery = target?.value ?? '';
    this.searchResults = this.searchService.search(this.searchQuery, 30);
    this.showResults = this.searchResults.length > 0;
  }

  onSearchFocus() { this.showResults = this.searchResults.length > 0; }
  onSearchBlur() { setTimeout(() => this.showResults = false, 150); }

  async onSelectResult(r: SearchEntry) {
    this.showResults = false;
    this.searchQuery = '';
    this.searchResults = [];
    await this.router.navigate([r.route], { queryParams: { open: r.openId } });
    this.closeOnMobile();
  }

  onTouchStart(event: TouchEvent) {
    if (this.isWideScreen || this.sidenav?.opened) return;
    const t = event.changedTouches[0];
    // Only start if swipe begins near the left edge to avoid conflicts with horizontal scrolls in content
    this.touchStartX = t.clientX;
    this.touchStartY = t.clientY;
    this.touchStartTime = Date.now();
  }

  onTouchEnd(event: TouchEvent) {
    if (this.isWideScreen || this.sidenav?.opened) return;
    if (this.touchStartX === null || this.touchStartY === null) return;

    const t = event.changedTouches[0];
    const dx = t.clientX - this.touchStartX;
    const dy = Math.abs(t.clientY - this.touchStartY);
    const dt = Date.now() - this.touchStartTime;

    // Criteria: quick right swipe, small vertical movement, starts from very left edge
    const startedAtEdge = this.touchStartX <= 150; // 30px from the left edge
    if (startedAtEdge && dx >= 60 && dy <= 80 && dt <= 500) {
      this.sidenav.open();
    }

    this.touchStartX = this.touchStartY = null;
  }

  closeOnMobile() {
    if (!this.isWideScreen && this.sidenav?.opened) {
      this.sidenav.close();
    }
  }
}
