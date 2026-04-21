import { Routes } from '@angular/router';
import { ActionsPageComponent } from './pages/actions-page.component';
import { KeywordsPageComponent } from './pages/keywords-page.component';
import { StatesPageComponent } from './pages/states-page.component';
import { TeintePageComponent } from './pages/teinte-page.component';
import { CapacitesPageComponent } from './pages/capacites-page.component';
import { CurrentDecorsPageComponent } from './pages/current-decors-page.component';
import { ScenariosPageComponent } from './pages/scenarios-page.component';
import { ScenarioDetailPageComponent } from './pages/scenario-detail-page.component';
import { FeatDetailPageComponent } from './pages/feat-detail-page.component';
import { ScenarioFeatDetailPageComponent } from './pages/scenario-feat-detail-page.component';
import { StatisticsPageComponent } from './pages/statistics-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { RuleSummaryPageComponent } from './pages/rule-summary-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'actions' },
  { path: 'actions', component: ActionsPageComponent, title: 'Actions' },
  { path: 'resume-du-tour', redirectTo: 'rule-summary' },
  { path: 'resume-opposition', redirectTo: 'rule-summary' },
  { path: 'rule-summary', component: RuleSummaryPageComponent, title: 'Résumé de règle' },
  { path: 'mots-clefs', component: KeywordsPageComponent, title: 'Mots‑clefs' },
  { path: 'mots-clefs-decors', redirectTo: 'decors-actuel' },
  { path: 'decors', redirectTo: 'decors-actuel' },
  { path: 'etats', component: StatesPageComponent, title: 'États' },
  { path: 'teinte', component: TeintePageComponent, title: 'Teinte' },
  { path: 'capacites', component: CapacitesPageComponent, title: 'Capacités' },
  { path: 'decors-actuel', component: CurrentDecorsPageComponent, title: 'Décors actuel' },
  { path: 'personnage-unite', redirectTo: 'rule-summary' },
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
