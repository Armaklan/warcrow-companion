import { Routes } from '@angular/router';
import { ActionsPageComponent } from './pages/actions-page.component';
import { KeywordsPageComponent } from './pages/keywords-page.component';
import { StatesPageComponent } from './pages/states-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'actions' },
  { path: 'actions', component: ActionsPageComponent, title: 'Actions' },
  { path: 'mots-clefs', component: KeywordsPageComponent, title: 'Mots‑clefs' },
  { path: 'etats', component: StatesPageComponent, title: 'États' },
  { path: '**', redirectTo: 'actions' }
];