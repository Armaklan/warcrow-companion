import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

export interface SearchEntry {
  kind: 'action' | 'capacite' | 'etat' | 'mot-clef' | 'mot-clef-decor' | 'decor';
  title: string;
  route: string;
  openId: string; // slug used in query param "open"
  subtitle?: string; // optional info (e.g., Simple/Complexe)
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private index: SearchEntry[] = [];

  constructor(private lang: LanguageService) {
    this.buildIndex();
    this.lang.langChanges.subscribe(() => this.buildIndex());
  }

  private slug(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}+/gu, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  private buildIndex() {
    const entries: SearchEntry[] = [];
    const D = this.lang.data;
    const isFR = this.lang.currentLang === 'FR';

    // Actions simples
    for (const a of D.ACTIONS_SIMPLES) {
      entries.push({ kind: 'action', title: a.title, route: '/actions', openId: this.slug(a.title), subtitle: isFR ? 'Action simple' : 'Simple action' });
    }
    // Actions complexes
    for (const a of D.ACTIONS_COMPLEXES) {
      entries.push({ kind: 'action', title: a.title, route: '/actions', openId: this.slug(a.title), subtitle: isFR ? 'Action longue' : 'Complex action' });
    }

    // Capacités
    for (const c of D.CAPACITES) {
      entries.push({ kind: 'capacite', title: c.title, route: '/capacites', openId: this.slug(c.title) });
    }

    // États
    for (const e of D.ETATS) {
      entries.push({ kind: 'etat', title: e.title, route: '/etats', openId: this.slug(e.title) });
    }

    // Mots-clefs généraux
    for (const k of D.MOTS_CLEFS) {
      entries.push({ kind: 'mot-clef', title: k.title, route: '/mots-clefs', openId: this.slug(k.title) });
    }

    // Mots-clefs de décors
    for (const k of D.MOTS_CLEFS_DECORS) {
      entries.push({ kind: 'mot-clef-decor', title: k.title, route: '/mots-clefs-decors', openId: this.slug(k.title) });
    }

    // Décors
    for (const d of D.DECORS) {
      entries.push({ kind: 'decor', title: d.title, route: '/decors', openId: this.slug(d.title) });
      // Also index decor keywords by name but route to mots-clefs-decors page
      for (const kw of d.keywords) {
        const kwTitle = kw.value ? `${kw.name}` : kw.name;
        entries.push({ kind: 'mot-clef-decor', title: kwTitle, route: '/mots-clefs-decors', openId: this.slug(kw.name) });
      }
    }

    this.index = entries;
  }

  search(query: string, limit = 20): SearchEntry[] {
    const q = (query || '').toLowerCase().trim();
    if (!q) return [];
    const results: SearchEntry[] = [];
    for (const e of this.index) {
      if (e.title.toLowerCase().includes(q)) {
        results.push(e);
        if (results.length >= limit) break;
      }
    }
    return results;
  }
}
