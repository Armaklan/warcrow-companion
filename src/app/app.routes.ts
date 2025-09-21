import { Routes } from '@angular/router';
import { ActionsPageComponent } from './pages/actions-page.component';
import { KeywordsPageComponent } from './pages/keywords-page.component';
import { StatesPageComponent } from './pages/states-page.component';
import { TeintePageComponent } from './pages/teinte-page.component';
import { ResumeDuTourPageComponent } from './pages/resume-du-tour-page.component';
import { CapacitesPageComponent } from './pages/capacites-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'actions' },
  { path: 'actions', component: ActionsPageComponent, title: 'Actions' },
  { path: 'resume-du-tour', component: ResumeDuTourPageComponent, title: 'Résumé du tour' },
  { path: 'mots-clefs', component: KeywordsPageComponent, title: 'Mots‑clefs' },
  { path: 'etats', component: StatesPageComponent, title: 'États' },
  { path: 'teinte', component: TeintePageComponent, title: 'Teinte' },
  { path: 'capacites', component: CapacitesPageComponent, title: 'Capacités' },
  { path: '**', redirectTo: 'actions' }
];
