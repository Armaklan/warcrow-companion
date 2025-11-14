import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FR } from './data.fr';
import { EN } from './data.en';

export type Lang = 'FR' | 'EN';

export interface IData {
  ETATS: typeof FR.ETATS;
  MOTS_CLEFS: typeof FR.MOTS_CLEFS;
  ACTIONS_SIMPLES: typeof FR.ACTIONS_SIMPLES;
  ACTIONS_COMPLEXES: typeof FR.ACTIONS_COMPLEXES;
  ACTIONS_REACTIONS: typeof FR.ACTIONS_REACTIONS;
  CAPACITES: typeof FR.CAPACITES;
  MOTS_CLEFS_DECORS: typeof FR.MOTS_CLEFS_DECORS;
  DECORS: typeof FR.DECORS;
  SCENARIO: typeof FR.SCENARIO;
  LABEL: typeof FR.LABEL;
  PERSONNAGE_UNITE: typeof FR.PERSONNAGE_UNITE;
  RESUME_TOUR: typeof FR.RESUME_TOUR;
  RESUME_OPPOSITION: typeof FR.RESUME_OPPOSITION;
  TEINTE_PAGE: typeof FR.TEINTE_PAGE;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private static readonly STORAGE_KEY = 'wc-lang';
  private lang$ = new BehaviorSubject<Lang>(this.readInitialLang());

  get currentLang() { return this.lang$.value; }
  get langChanges() { return this.lang$.asObservable(); }

  setLang(lang: Lang) {
    if (lang === this.lang$.value) return;
    try { localStorage.setItem(LanguageService.STORAGE_KEY, lang); } catch {}
    this.lang$.next(lang);
  }

  toggle() { this.setLang(this.currentLang === 'FR' ? 'EN' : 'FR'); }

  get data(): IData {
    return this.currentLang === 'FR' ? FR : EN;
  }

  private readInitialLang(): Lang {
    try {
      const v = localStorage.getItem(LanguageService.STORAGE_KEY) as Lang | null;
      if (v === 'EN' || v === 'FR') return v;
    } catch {}
    return 'EN';
  }
}
