export interface CollapsibleItem {
  title: string;
  details: string;
  icon?: string;
}

export const ETATS: CollapsibleItem[] = [
  {
    title: 'Effrayé', details: `<p>Votre unité doit relancer tous ses tests de Volonté réussis (maximum une fois par test).</p>
<p><strong>Fin :</strong> Retirez cet état quand vous réussissez un test de Volonté.</p>`, icon: 'effraye.png'
  },
  {
    title: 'Ralenti',
    details: `<p>
Votre unité ne peut pas utiliser sa deuxième valeur de mouvement (MOV) lors des actions de mouvement et d’assaut.
  De plus, vous devez soustraire 4 pas à votre mouvement de charge (min. 0).
</p>
<p><em>Exemple :</em> Si votre unité a un mouvement 3-2 (9), elle ne peut se déplacer que de 3 pas et ne peut charger que jusqu’à 5 pas.</p>
<p><strong>Fin :</strong> Retirez cet état à la fin de l’activation durant laquelle votre unité effectue un mouvement ou un assaut.</p>`,
    icon: 'ralenti.png'
  },
  {
    title: 'Désarmé',
    details: `<p>
Votre unité doit annuler un dé de ses jets d’attaque dans lesquels elle a obtenu au moins un symbole
<em>&amp;</em>. Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
</p>
<p>Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles, mais avant l’étape des variations.</p>
<p><strong>Fin :</strong> Retirez cet état à la fin de l’activation durant laquelle vous avez subi ses effets (si vous n’avez pu annuler aucun dé, l’état persiste).</p>`,
    icon: 'desarme.png'
  },
  {
    title: 'Vulnérable', details: `<p>
    Votre unité doit annuler un dé de ses jets de défense dans lesquels elle a obtenu au moins un <em>@</em>.
    Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
  </p>
  <p>
    Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles,
    mais avant l’étape des variations.
  </p>
  <p><strong>Fin :</strong> Retirez cet état à la fin de l’activation durant laquelle vous avez subi ses effets
    (si vous n’avez pu annuler aucun dé, l’état demeure actif).</p>`, icon: 'vulnerable.png'
  }
];

export const MOTS_CLEFS: CollapsibleItem[] = [
  {title: 'Intrépide', details: 'Ignore la peur.'},
  {title: 'Intimidant', details: 'Peut forcer un test de moral.'}
];

export const ACTIONS_SIMPLES: CollapsibleItem[] = [
  {title: 'Mouvement', details: 'Se déplacer jusqu’à sa vitesse.'},
  {title: 'Attaque', details: 'Se déplacer jusqu’à sa vitesse.'},
  {title: 'Utiliser une compétence', details: 'Lancer un sort.'},
  {title: 'Lancer un sort', details: 'Lancer un sort.'}
];

export const ACTIONS_COMPLEXES: CollapsibleItem[] = [
  {title: 'Assaut', details: 'Enchaînement d’attaques coordonnées.'},
  {title: 'Charge', details: 'Avancer en ligne droite puis attaquer.'},
  {title: 'Repose', details: 'Avancer en ligne droite puis attaquer.'},
];
