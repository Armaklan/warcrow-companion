import { Routes } from '@angular/router';
import { ActionsPageComponent } from './pages/actions-page.component';
import { KeywordsPageComponent } from './pages/keywords-page.component';
import { StatesPageComponent } from './pages/states-page.component';
import { TeintePageComponent } from './pages/teinte-page.component';
import { ResumeDuTourPageComponent } from './pages/resume-du-tour-page.component';
import { CapacitesPageComponent } from './pages/capacites-page.component';
import { KeywordsDecorsPageComponent } from './pages/keywords-decors-page.component';
import { DecorsPageComponent } from './pages/decors-page.component';
import { ResumeOppositionPageComponent } from './pages/resume-opposition-page.component';
import { PersonnageEtUnitePageComponent } from './pages/personnage-et-unite-page.component';
import { ScenariosPageComponent } from './pages/scenarios-page.component';
import { ScenarioDetailPageComponent } from './pages/scenario-detail-page.component';
import { FeatDetailPageComponent } from './pages/feat-detail-page.component';
import { ScenarioFeatDetailPageComponent } from './pages/scenario-feat-detail-page.component';
import { StatisticsPageComponent } from './pages/statistics-page.component';
import { AboutPageComponent } from './pages/about-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'actions' },
  { path: 'actions', component: ActionsPageComponent, title: 'Actions' },
  { path: 'resume-du-tour', component: ResumeDuTourPageComponent, title: 'Résumé du tour' },
  { path: 'resume-opposition', component: ResumeOppositionPageComponent, title: "Résumé d'une opposition" },
  { path: 'mots-clefs', component: KeywordsPageComponent, title: 'Mots‑clefs' },
  { path: 'mots-clefs-decors', component: KeywordsDecorsPageComponent, title: 'Mots clef de décors' },
  { path: 'etats', component: StatesPageComponent, title: 'États' },
  { path: 'teinte', component: TeintePageComponent, title: 'Teinte' },
  { path: 'capacites', component: CapacitesPageComponent, title: 'Capacités' },
  { path: 'decors', component: DecorsPageComponent, title: 'Décors' },
  { path: 'personnage-unite', component: PersonnageEtUnitePageComponent, title: 'Personnage et unité' },
  { path: 'scenarios', component: ScenariosPageComponent, title: 'Scénarios' },
  { path: 'scenarios/:id', component: ScenarioDetailPageComponent, title: 'Détail du scénario' },
  // Nouvelle URL pour la rencontre
  { path: 'scenarios/encounter/:sid/:fid', component: ScenarioFeatDetailPageComponent, title: 'Scénario & Exploit' },
  // Redirection rétrocompatibilité depuis l'ancienne URL
  { path: 'scenarios/random/:sid/:fid', pathMatch: 'full', redirectTo: 'scenarios/encounter/:sid/:fid' },
  { path: 'statistique', component: StatisticsPageComponent, title: 'Statistique' },
  { path: 'about', component: AboutPageComponent, title: 'About' },
  { path: 'feats/:id', component: FeatDetailPageComponent, title: "Détail de l'exploit" },
  { path: '**', redirectTo: 'actions' }
];
