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
    title: 'Démoralisé',
    details: `<p>Si votre unité est démoralisée :</p>
  <ul>
    <li>Elle ne peut plus être activée d’aucune façon.</li>
    <li>Elle ne peut se stresser d’aucune façon et ne peut pas réduire son stress.</li>
    <li>Elle ne peut pas contrôler d’objectifs (sa valeur de conquête est nulle).</li>
    <li>Si elle participe à un combat, elle fuira toujours après le résultat (voir “Attaque de mêlée”).</li>
  </ul>

  <h3>Unité démoralisée</h3>
  <p>Si votre unité est stressée au-delà de sa valeur de MOR, vous devez effectuer un test de VOL à la fin de l’activation en cours. Si vous ne le réussissez pas, votre unité sera démoralisée et devra fuir immédiatement (voir “Fuite”).</p>`,
    icon: 'demoraliser.png'
  },
  {
    title: 'Désarmé',
    details: `<p>
Votre unité doit annuler un dé de ses jets d’attaque dans lesquels elle a obtenu au moins un symbole
<img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>. Si vous avez plusieurs dés, c’est votre adversaire qui choisit lequel.
</p>
<p>Vous devez appliquer cet effet après avoir effectué votre jet et toutes les relances possibles, mais avant l’étape des variations.</p>
<p><strong>Fin :</strong> Retirez cet état à la fin de l’activation durant laquelle vous avez subi ses effets (si vous n’avez pu annuler aucun dé, l’état persiste).</p>`,
    icon: 'desarme.png'
  },
  {
    title: 'Vulnérable', details: `<p>
    Votre unité doit annuler un dé de ses jets de défense dans lesquels elle a obtenu au moins un <img src="bouclier.png" alt="bouclier" style="height: 1em; vertical-align: -0.2em;"/>.
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
  {
    title: 'Couvert (D)',
    details: '<p>Les unités adjacentes à cette unité (alliées ou non) bénéficient d’un couvert contre les attaques à distance. La valeur D indique les dés ou symboles automatiques que les unités adjacentes ajoutent à leur jet de défense.</p>'
  },
  {
    title: 'Dissipation (D)',
    details: '<p>Lorsque cette unité est ciblée par un sort, elle peut tenter de le bloquer. La valeur D indique le dé ou les symboles automatiques à lancer pour bloquer le sort. Cette unité ne gagne pas de Teinte sur un <img src="bouclier-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>. On ne peut pas bloquer un sort plus d’une fois ni avec plus d’une unité.</p>'
  },
  {
    title: 'Éclaireur',
    details: '<p>Ces unités se déploient après toutes les autres. Elles peuvent aussi rester secrètes et être déployées une fois la partie commencée, en respectant des conditions de placement (zone de déploiement, hors combat, hors LdV ennemie, etc.). Si elles entrent après le début, elles doivent s’activer immédiatement en ne réalisant qu’une seule action (non complexe).</p>'
  },
  {
    title: 'Élite',
    details: '<p>Après les jets de dés (relances incluses) et avant les variations, cette unité peut remplacer tout ' +
      '<img src="success-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> par <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>, ' +
      'tout <img src="bouclier-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> par <img src="bouclier.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>,' +
      ' et tout <img src="alert-hollow.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> par <img src="alert.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>. Cet effet s’applique à tous ses jets.</p>'
  },
  {
    title: 'Embusqué',
    details: `
    <p>
    Les unités Embusquées se cachent, prêtes à entrer en action après le début de la bataille en frappant par surprise.
    Vous pouvez garder vos unités Embusquées secrètes et ne les déployer qu’après avoir commencé la partie.
  </p>
  <p>
    Vous pouvez activer votre unité Embusquée pendant votre tour au lieu d’activer une autre unité,
    comme si vos Embusqués étaient déjà sur le champ de bataille. Dans ce cas :
  </p>
  <ul>
    <li>
      <strong>Déployez l’unité sur le champ de bataille :</strong>
      <ul>
        <li>
          À n’importe quel endroit de votre zone de déploiement. Vous pouvez la déployer engagée en combat avec une unité ennemie.
          Elle est considérée comme ayant chargé, mais l’unité ennemie ne peut pas tenir bon et tirer.
        </li>
        <li>
          N’importe où sur le champ de bataille, sauf dans la zone de déploiement ennemie, et aucune unité ennemie
          à 10 pas ou moins ne doit avoir de Ligne de Vue (LdV) sur elle.
        </li>
      </ul>
    </li>
    <li>
      <strong>Activez ensuite votre unité.</strong>
    </li>
  </ul>
`
  },
  {
    title: 'Équipage',
    details: '<ul><li>L’unité ignore les effets d’Intimidation.</li><li>L’unité n’est stressée que si elle est activée plusieurs fois au cours d’un même round.</li></ul>'
  },
  {
    title: 'Fureur',
    details: '<p>Ajoute <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/> à ses jets d’attaque lorsqu’elle charge.</p>'
  },
  {
    title: 'Golem',
    details: '<ul><li>Ignore l’Intimidation.</li><li>Immunisé contre Effrayé.</li><li>Ne peut pas être démoralisé. Si le stress dépasse la valeur de MOR, ignorez l’excédent.</li></ul>'
  },
  {
    title: 'Inamovible',
    details: '<p>Ne peut pas être attirée, bousculée, placée, replacée ni forcée au repli, sauf si vous le souhaitez.</p>'
  },
  {
    title: 'Intrépide',
    details: '<p>Ignore Intimidation et immunisé contre Effrayé.</p>'
  },
  {
    title: 'Intimidation (N)',
    details: `
    <p>
    Lorsque cette unité engage le combat, l’unité ennemie doit effectuer un test de VOL et obtenir
    au moins autant de
    <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    que la valeur <strong>N</strong> pour éviter d’être stressée.
  </p>
  <p>
    Pour chaque
    <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    manquant, l’unité ennemie gagne 1 point de stress.
  </p>`
  },
  {
    title: 'Massive',
    details: `<ul>
    <li>
      Les unités Massives peuvent traverser les unités qui ne le sont pas.
      Les unités traversées doivent réussir un test de VOL pour éviter le stress.
      De plus, une unité traversée doit faire un jet opposé avec sa défense contre autant de
      <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
      qu’il y a de soldats dans ladite unité (jusqu’à un maximum de 3).
      Elle subira autant de dégâts que de
      <img src="success.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
      non annulés.
    </li>
    <li>
      Même engagée en combat, une unité Massive peut charger une autre unité si elle a une Ligne de Vue (LdV)
      sur elle et peut se déplacer pour l’engager. Ce mouvement de charge provoque une attaque d’opportunité.
    </li>
    <li>
      Seules les autres unités Massives et les décors avec le mot-clé <em>Bloque la LdV</em> bloquent la LdV vers les unités Massives.
    </li>
    <li>
      Les unités Massives sont toujours considérées comme <em>Inamovibles</em>.
    </li>
  </ul>`
  },
  {
    title: 'Rage de berserker',
    details: `<p>
    Votre unité peut s’infliger
    <img src="sang.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    pour ajouter un symbole de votre choix à un jet d’attaque, de défense ou de VOL.
    Vous devez le faire après le jet de dés mais avant de passer à l’étape des variations.
  </p>
  <p>
    Vous ne pouvez pas vous infliger ce dégât si cela entraîne l’élimination de l’unité.
    Ce dégât n’est pas pris en compte lors de la résolution d’un combat.
  </p>`
  },
  {
    title: 'Soif de sang (X)',
    details: `<p>
    Si l’unité n’est pas engagée en combat lorsqu’elle est activée, elle est obligée de charger
    <img src="complexe.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    une unité ennemie <strong>X</strong>, à chaque fois que c’est possible.
    <em>X</em> peut être le nom d’une unité, un mot-clé ou plusieurs de ces éléments (séparés par des traits « | »).
    Si aucune valeur n’est spécifiée pour <em>X</em>, l’unité doit charger
    <img src="complexe.png" alt="succès" style="height: 1em; vertical-align: -0.2em;"/>
    l’unité ennemie la plus proche.
  </p>
  <p>
    Si l’unité charge en raison de sa Soif de sang, elle peut relancer tous ses jets d’attaque tant qu’elle est engagée avec l’unité ennemie (et pas seulement lorsqu’elle charge).
  </p>
  <p>
    Au début de son activation, l’unité peut ignorer les effets de Soif de sang jusqu’à la fin de son activation en réussissant un test de VOL.
  </p>`
  },
  {
    title: 'Terrain favori (E)',
    details: '<p>Ignore les effets des décors de type E (un ou plusieurs). Si l’unité commence son activation adjacente à un tel décor, ajoutez +2 à sa première valeur de MOV et à son mouvement de charge.</p>'
  },
  {
    title: 'Visée',
    details: '<p>Peut relancer ses jets d’attaque à distance. La cible ne bénéficie pas du Couvert (D).</p>'
  }
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
