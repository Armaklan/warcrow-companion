import { CollapsibleItem, Decor, Scenario } from './data.model';

// Toutes les constantes sont regroupées dans l'objet EN

const ETATS: CollapsibleItem[] = [
  {
    title: 'Frightened', details: `<b>State</b><p>When making a WP test, your unit must reroll the dice on which it rolls at least one <span class="warcrow-font-Success" role="img" aria-label="succès" >.
Remove this state after making a willpower test.</p>`, icon: 'effraye.png'
  },
  {
    title: 'Slowed',
    details: `<b>State</b><p>
Your unit can only use one of the two MOV values when performing the move and assault
actions. Additionally, you must subtract 4 strides from your charge movement (up to a minimum
value of 0). For example, if your unit has movement 3-2 (9), it can only move 3 and can only move 5
when it charges
</p>
<p>Remove this state at the end of the activation in which your unit performs the action move, charge
or assault.</p>`,
    icon: 'ralenti.png'
  },
  {
    title: 'Demoralized',
    details: `<b>State</b></b><p>If your unit is demoralized: :</p>
  <ul>
    <li>It cannot be activated in any way.</li>
    <li>It cannot stress itself in any way and cannot reduce its stress.</li>
    <li>It cannot control objectives (we consider its conquest value null).</li>
    <li>If it participates in combat, it will always flee after the result. (See “Melee Attack”).</li>
    <li>It cannot activate its command abilities.</li>
  </ul>

  <h3>Demoralize a unit</h3>
      <p>As long as your unit has an activation token and at least
        as much stress as its MOR, you can only activate it to
        perform the complex Rest action.</p>
      <p>f your unit is stressed beyond its MOR value, you must
        perform a WP test at the end of the current activation. If
        you do not pass it, your unit will become demoralized
        and must flee immediately. (See “Flee”).</p>
  <h3>Fuite</h3>
  <p>If your unit flees, you must immediately move it using
both of its MOV values towards your deployment
zone, following the shortest possible path and, if it
is already there, move it towards the nearest edge
of the battlefield. When a fleeing unit comes into
contact with one of the battlefield edges, remove it.
The unit will count as eliminated for all purposes.
  </p>
  <p>
    For a unit to be considered to have entered your
  deployment zone, all its troops must have bases
  completely within the zone’s limits. It is enough for
  one of them to touch the border of the battlefield
  for the unit to leave the battlefield.
  </p>
  <h3>Rally a demoralized unit</h3>
  <p>When the turn counter marker
  activates your unit’s broken unit token,
  you must make a WP check to rally :</p>
  <ul>
  <li>If you pass the test : Your unit is no longer
demoralized. Remove the broken
unit tokens from the turn counter
and their game profile. Reduce the unit’s stress level to
its MOR value minus 1. You can perform the move action
once. </li>
  <li>If you don’t pass the test : Advance the demoralized unit
token two positions on the turn counter. Your unit flees.</li>
</ul>
    `,
    icon: 'demoraliser.png'
  },
  {
    title: 'Disarmed',
    details: `<b>State</b><p>
Your unit must cancel one die from its attack rolls in which it has obtained at least one
1. In the case of multiple dice, your opponent will choose which one. You must apply this effect after
<span class="warcrow-font-Success" role="img" aria-label="succès" ></span>. In the case of multiple dice, your opponent will choose which one.
You must apply this effect after rolling the dice (with all possible repetitions), but just before starting the Switches step.
</p>
<p>You cannot add modifiers to your attack rolls.</p>
<p>Remove this state at the end of the resolution of a roll in which you have applied its effects (if you
have not been able to cancel any dice, the state is considered to remain active).</p>
`,
    icon: 'desarme.png'
  },
  {
    title: 'Vulnerable', details: `<b>State</b><p>
    Your unit must cancel one die from its defense rolls in which it has rolled at least one <span class="warcrow-font-Block" role="img" aria-label="Block" ></span>.
    In the case of multiple dice, your opponent will choose which one. You must apply this effect after
rolling the dice (with all possible repetitions), but just before starting the Switches step.
  </p>
  <p>
    You cannot add modifiers to your attack rolls.
  </p>
  <p>Remove this state at the end of the resolution of a roll in which you have applied its effects (if you
have not been able to cancel any dice, the state is considered to remain active).</p>`,
    icon: 'vulnerable.png'
  },
  {
    title: 'Stress',
    details: `
      <p>As long as your unit has an activation token and at least
        as much stress as its MOR, you can only activate it to
        perform the complex Rest action.</p>
      <p>f your unit is stressed beyond its MOR value, you must
        perform a WP test at the end of the current activation. If
        you do not pass it, your unit will become demoralized
        and must flee immediately. (See “Flee”).</p>
      <p>If the level of stress of your unit exceeds its MOR value
        by 2 or more, then you will require 2 <span class="warcrow-font-Success" role="img" aria-label="succes" ></span> to pass the WP
        roll to avoid being demoralized and required to flee (for
        example, if you have MOR 2 and 4 levels of stress, you
        must get 2 <span class="warcrow-font-Success" role="img" aria-label="succes" ></span> on your WP roll).</p>
    `,
    icon: 'stress-token.png'
  },
  {
    title: 'Activate',
    details: `
      <p>Place this marker on your unit after it activates. If it activates again this round, stress it..</p>
      <p>At the end of the round, remove this marker.</p>
    `,
    icon: 'activation.png'
  }
];

const MOTS_CLEFS: CollapsibleItem[] = [
  {
    title: 'Couvert (D) / Cover',
    details: '<p>Les unités adjacentes à cette unité (alliées ou non) bénéficient d’un couvert contre les attaques à distance. La valeur D indique les dés ou symboles automatiques que les unités adjacentes ajoutent à leur jet de défense.</p>'
  },
  {
    title: 'Dissipation (D) / Dispel',
    details: '<p>Lorsque cette unité est ciblée par un sort, elle peut tenter de le bloquer. La valeur D indique le dé ou les symboles automatiques à lancer pour bloquer le sort. Cette unité ne gagne pas de Teinte sur un <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span>. On ne peut pas bloquer un sort plus d’une fois ni avec plus d’une unité.</p>'
  },
  {
    title: 'Éclaireur / Scout',
    details: `
      <p>
      Les unités d’Éclaireurs peuvent se déployer juste après que toutes les autres unités des deux camps ont fini de se déployer. Ils représentent des avant-gardes qui ont reconnu le terrain et qui choisissent la meilleure position.
      </p>
      <p>Si votre aversaire possède aussi des éclaieurs, celui qui a l'initiative décide qui déploie 1 de ses unités d'Eclaireurs en premier. Vous et votre adversaire devez alterner jusqu'à ce que vous ayez déployé tous vos Eclaireurs.
      </p>
      <p>
      Vous pouvez aussi garder vos unités d’Éclaireurs secrètes et les déployer une fois la partie commencée, en respectant les contraintes
        suivantes :</p>
    <ul>
      <li>
        Vous pouvez déployer votre unité d’Éclaireurs n’importe où dans votre zone de déploiement (mais pas engagée en combat).
      </li>
      <li>
        Vous pouvez déployer votre unité d’Éclaireurs adjacente à un des bords du champ de bataille, tant que vous êtes hors de la  zone de déploiement de votre adversaire et qu’aucune unité ennemie à 12 pas ou moins n’a de LdV sur votre unité.
      </li>
    </ul>

    <p>
      Si vous déployez une unité d’Éclaireur après le début de la partie, vous devez l’activer immédiatement et consommer une de vos deux actions pour son activation. Ainsi, elle ne pourra réaliser qu’une seule action, qui ne peut pas être une action complexe.
    </p>
    `
  },
  {
    title: 'Élite / Elite',
    details: '<p>Après les jets de dés (relances incluses) et avant les variations, cette unité peut remplacer tout ' +
      '<span class="warcrow-font-HollowSuccess" role="img" aria-label="Succès Hollow" ></span> par <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>, ' +
      'tout <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> par <span class="warcrow-font-Block" role="img" aria-label="Blockl" ></span>,' +
      ' et tout <span class="warcrow-font-Hollow-Special" role="img" aria-label="Hollow Special" ></span> par <span class="warcrow-font-Special" role="img" aria-label="Special" ></span>. Cet effet s’applique à tous ses jets.</p>' +
      '<p>Cette règle s\'applique aux tests de VOL, d\'attaque, défense, ainsi qu\'aux effets de compétences ou sort de l\'unité. Cela ne s\'applique pas aux autres tests comme le blocage de sort, la dissipation, ou les tests de teintes.</p>'
  },
  {
    title: 'Embusqué / Ambusher',
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
    title: 'Équipage / Manned',
    details: '<ul><li>L’unité ignore les effets d’Intimidation.</li><li>L’unité n’est stressée que si elle est activée plusieurs fois au cours d’un même round.</li></ul>'
  },
  {
    title: 'Fureur / Raging',
    details: '<p>Ajoute <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> à ses jets d’attaque lorsqu’elle charge.</p>'
  },
  {
    title: 'Golem / Golem',
    details: '<ul><li>Ignore l’Intimidation.</li><li>Immunisé contre Effrayé.</li><li>Ne peut pas être démoralisé. Si le stress dépasse la valeur de MOR, ignorez l’excédent.</li></ul>'
  },
  {
    title: 'Inamovible / Immovable',
    details: '<p>Ne peut pas être attirée, bousculée, placée, replacée ni forcée au repli, sauf si vous le souhaitez.</p>'
  },
  {
    title: 'Intrépide / Fearless',
    details: '<p>Ignore Intimidation et immunisé contre Effrayé.</p>'
  },
  {
    title: 'Intimidation (N) / Intimidating',
    details: `
    <p>
    Lorsque cette unité engage ou est engagé au combat, l’unité ennemie doit effectuer un test de VOL et obtenir
    au moins autant de
    <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
    que la valeur <strong>N</strong> pour éviter d’être stressée.
  </p>
  <p>
    Pour chaque
    <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
    manquant, l’unité ennemie gagne 1 point de stress.
  </p>
  <p>Une unité ne peut subir les effets de l'intimidation qu'une fois par activation.</p>`
  },
  {
    title: 'Massive / Large',
    details: `<ul>
    <li>
      Les unités Massives peuvent traverser les unités qui ne le sont pas.
      Les unités traversées doivent réussir un test de VOL pour éviter le stress.
      De plus, une unité traversée doit faire un jet opposé avec sa défense contre autant de
      <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
      qu’il y a de soldats dans ladite unité (jusqu’à un maximum de 3).
      Elle subira autant de dégâts que de
      <span class="warcrow-font-Success" role="img" aria-label="succès" ></span>
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
    title: 'Rage de berserker / Berseker rage',
    details: `<p>
    Votre unité peut s’infliger
    <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span>
    pour ajouter un symbole de votre choix à un jet d’attaque, de défense ou de VOL.
    Vous devez le faire après le jet de dés mais avant de passer à l’étape des variations.
  </p>
  <p>
    Vous ne pouvez pas vous infliger ce dégât si cela entraîne l’élimination de l’unité.
    Ce dégât n’est pas pris en compte lors de la résolution d’un combat.
  </p>`
  },
  {
    title: 'Soif de sang (X) / Bloodlust',
    details: `<p>
    Si l’unité n’est pas engagée en combat lorsqu’elle est activée, elle est obligée d'engager (charge ou assaut)
    <span class="warcrow-font-LongAction" role="img" aria-label="LongAction" ></span>
    une unité ennemie <strong>X</strong>, à chaque fois que c’est possible.
    <em>X</em> peut être le nom d’une unité, un mot-clé ou plusieurs de ces éléments (séparés par des traits « | »).
    Si aucune valeur n’est spécifiée pour <em>X</em>, l’unité doit charger
    <span class="warcrow-font-LongAction" role="img" aria-label="LongAction" ></span>
    l’unité ennemie la plus proche.
  </p>
  <p>
    Si l’unité engage en raison de sa Soif de sang, elle peut relancer tous ses jets d’attaque durant les activations où elle est engagée avec l’unité ennemie (et pas seulement lorsqu’elle charge ou fait un assaut).
  </p>
  <p>
    Au début de son activation, l’unité peut ignorer les effets de Soif de sang jusqu’à la fin de son activation en réussissant un test de VOL.
  </p>`
  },
  {
    title: 'Terrain favori (E) / Preferred terrain',
    details: `
<p>L'unité peut ignorer les effets des décors de type E, ce qui peut désigner un type de décor, un mot-clé, ou plusieurs de ces élements (séparés dans ce cas par des trait | ).</p>
`
  },
  {
    title: 'Teinte / Tinge',
    details: `
    <p>Votre unité reçoit <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> au début de chaque manche.</p>
    <b>Personnage rejoignant une unité</b>
    <p>L'unité rejointe est considéré comme ayant le mot-clé Teinte quand le personnage l'a rejoint. Elle recevra donc <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> au début de chaque manque. </p>
    <b>Unité en dehors du champs de bataille</b>
    <p>Les unités hors du champs de bataille ne reçoivent pas de <img src="teint.png" alt="teinte" style="height: 1em; vertical-align: -0.2em;"/> grâce à ce mot-clé.</p>
    `
  },
  {
    title: 'Visée / Aim',
    details: '<p>Peut relancer ses jets d’attaque à distance. La cible ne bénéficie pas du Couvert (D).</p>'
  },
  {
    title: 'Rejoindre / Join',
    details: `
      <p>Les Personnages capables d’intégrer une unité ont le mot-clé Rejoindre (X) dans leur profil, où X peut être le nom d’une unité, une caractéristique,
      un mot-clé ou plusieurs de ces éléments séparés par des traits “ | ”. Dans ce dernier cas, l’unité cible doit posséder tous les mots-clés ou
      caractéristiques, ou être nommée comme au moins un des éléments.</p>
      <p>Les personnages de type Officier deviennent automatiquement le leader de l'unité qu'ils rejoignent.</p>
    `
  },
  {
    title: 'Bousculer (X) / Shove',
    details: `
      <p>L’unité ciblée doit s’éloigner de votre unité de X pas en suivant la trajectoire indiquée en traçant
        une ligne reliant les centres des socles des leaders de votre unité et de l’unité ciblée. Ce mouvement
        ne provoque pas d’attaque d’opportunité.</p>
      <p>
        Si l’unité ciblée entre en contact avec une unité ou un décor Infranchissable durant ce mouvement,
        celui-ci s’interrompt immédiatement à cet endroit précis.
      </p>
    `
  },
  {
    title: 'Attirer (X) / Attract',
    details: `
      <p>L’unité ciblée doit s’approcher de votre unité de X pas en suivant la trajectoire indiquée en traçant
        une ligne reliant les centres des socles des leaders de votre unité et de l’unité ciblée. Ce mouvement
        ne provoque pas d’attaque d’opportunité.</p>
      <p>Si l’unité ciblée entre en contact avec une unité ou un décor Infranchissable durant ce mouvement,
        celui-ci s’interrompt immédiatement à cet endroit précis.</p>
    `
  },
  {
    title: 'Placer (X) / Place',
    details: `
      <p>Indiquez un point sur le champ de bataille à X pas du leader de votre unité. Celui qui contrôle l’unité
      ciblée doit prendre son leader et le placer sur le point indiqué. Vous devez ensuite placer le reste des
      soldats de l’unité ciblée en formation.</p>
      <p>Ce mouvement de l’unité placée ne provoque pas d’attaques d’opportunité.</p>
      <p>Vous ne pouvez pas placer de figurines sur d’autres figurines et vous ne pouvez pas placer une unité
      sur un décor Infranchissable.</p>
    `
  },
  {
    title: 'Replacer (X) / Displace',
    details: `
      <p>L’unité que vous replacez doit effectuer un mouvement rectiligne de X pas dans la direction que
      vous choisissez. Les effets des décors (sauf Infranchissable) n’affectent pas ce mouvement. Il ne
      provoque pas d’attaque d’opportunité.</p>
      <p>Si l’unité replacée entre en contact avec une unité ou un décor Infranchissable durant ce mouvement,
      celui-ci s’interrompt immédiatement à cet endroit précis.</p>
    `
  }
];

const ACTIONS_SIMPLES: CollapsibleItem[] = [
  {
    title: 'Déplacer', details: `
    <ul>
        <li>Déplacez l'unité de votre première valeur de mouvement.</li>
        <li>Puis déplacez l'unité de votre seconde valeur de mouvement.</li>
    </ul>
  `
  },
  {
    title: 'Attaque de mêlée', details: `
    <ul>
        <li>Faites une manoeuvres de positionnement si nécessaire.</li>
        <li>Résolvez un jet face à face entre le jet d'attaque et le jet de défense. Chaque <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> non annulé inflige <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> à l'unité ennemie.</li>
        <li>L'unité qui a subis le plus de dégâts (au moins <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span>) est stressée à la fin de l'activation.</li>
        <li>L'unité gagante peut <b>forcer au repli</b> l'unité perdante et décider de la poursuivre, ou non (première valeur de Mouvement).</b></li>
        <li>Faites une seconde manoeuvre de positionnement si nécessaire à la fin du combat.</li>
    </ul>
    <p>
        <b>Manoeuvre de repositionnement</b>
    </p>
    <ul>
      <li>En commençant par votre leader, vous devez placez les soldats non engagés de votre unité au contact d'au moins un soldat ennemi.</li>
      <li>Vos soldats doivent toujours rester en formation.</li>
      <li>Vous pouvez échanger la position de votre leader avec celle de n'importe quel soldat engagé avec l'ennemi.</li>
      <li>S'il vous est impossible d'engager un soldat en combat, vous devez le placer au contact de votre leader, ou, à défaut, de toute autre soldat de votre unité.</li>
      <li>S'il n'est pas possible de respecter un des points, placez le soldat le plus près possible de votre leader.</li>
    </ul>
    <p>
        <b>Forcer au repli</b>
    </p>
    <ul>
        <li>L'unité forcer au repli peut se stresser pour l'empêcher.</li>
        <li>Un unité qui se replie doit se déplacer de la première valeur de son mouvement. Elle doit mettre le plus de distance possible avec son adversaire.</li>
        <li>L'unité gagnante peut poursuivre l'unité qui se replie en se déplaçant avec sa première valeur de mouvement. Si le leader entre en contact socle à socle avec l'adversaire, il peut l'engager (vous n’êtes pas considéré
            comme ayant chargé).</li>
    </ul>
    <p><b>Elimination d'une unité</b></p>
    <ul>
        <li>Si vous avez complètement éliminé l'unité ennemie, votre unité peut effectuer l'action de mouvement gratuitement une fois (cela ne compte pas comme une activation).</li>
    </ul>
  `
  },
  {
    title: 'Attaque à distance', details: `
    <ul>
        <li>Le défenseur ne peut utiliser que <span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>  <span class="warcrow-font-Green" role="img" aria-label="Green dice" ></span> <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span> <span class="warcrow-font-Block" role="img" aria-label="Block" ></span> et <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> dans son jet de défense.</li>
        <li>Résolvez un jet face à face entre le jet d'attaque et le jet de défense. Chaque <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> non annulé inflige <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> à l'unité ennemie. Le défenseur ne peut pas agir sur les variations.</li>
    </ul>
  `
  },
  {
    title: 'Lancer un sort', details: `
      <ol>
        <li>Choisissez votre sort et déclarez si vous appliquez des altérations, puis vérifier les conditions de lancement du sort. Si les conditions ne sont pas remplis, vous ne pouvez lancer le sort.</li>
        <li>Si vous adversaire à une unité qui peut tenter de bloquer le sort, faite le test.</li>
        <li>Résolvez un jet face à face entre la VOL du lanceur de sort et le test de dissipation.</li>
        <li>Déclarez les altérations utilisant de la <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/> et dépensez-là..</li>
        <li>Le lanceur de sort peut recevoir <img src="teint.png" alt="1 teinte" style="height: 1em; vertical-align: -0.2em;"/> pour ajouter un <span class="warcrow-font-Success" role="img" aria-label="succès" ></span></li>
        <li>Si vous obtenez au moins <span class="warcrow-font-Success" role="img" aria-label="succès" ></span> sur le jet, appliquez les effets du sort. </li>
      </ol>
      <p>Jet de teinte</p>
      <ol>
        <li>Créez le jet de teinte : prenez <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span> comme indiqué dans les altérations choisis du sort.</li>
        <li>Pour chaque <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> obtenu au jet de teinte, vous recevez un <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/></li>
        <li>Si le lanceur possède des <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/>, appliquez les effets de la teinte.</li>
      </ol>
      <p>Bloquer un sort</p>
      <ol>
        <li>Déclarer votre intention de bloquer le sort pendant l'état 2 du lancement. </li>
        <li>Le sort peut être bloqué par la cible si elle a le mot-clef Dissipation, ou par un mage situé à moins de 20 pas de l'ennemi qui lance le sort.</li>
        <li>Formez le test de blocage : prenez 3 <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>, ou les dés indiqués par la compétence Dissipation, et lancez les. Le résultat sera opposé au test de lancement du sort durant l'étape 3./</li>
        <li>Pour chaque <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> obtenu, l'unité qui bloque le sort reçoit <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/> </li>
        <li>Si vous avez obtenu au moins un <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span>, appliquez les effets de la teinte à la fin de l'activation. </li>
      </ol>
      <p>Vous ne pouvez pas tenter de bloquer un sort plus d'une fois ou avec plusieurs unités.</p>
  `
  },
  {
    title: 'Capacité de teinte', details: `
      <ul>
        <li>Choisissez votre capacité de teinte.</li>
        <li>Dépensez <img src="teint.png" alt="Teinte" style="height: 1em; vertical-align: -0.2em;"/>.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
  `
  },
  {
    title: 'Utiliser une compétence', details: `
      <ul>
        <li>Choisissez votre compétence et vérifier que les conditions sont remplis.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
  `
  }
];

const ACTIONS_COMPLEXES: CollapsibleItem[] = [
  {
    title: 'Assaut', details: `
    <ul>
        <li>Déplacez-vous jusqu'à engager le combat avec l'ennemi, en utilisant votre première puis votre seconde valeur de mouvement.</li>
        <li>Résolvez une attaque de mêlée contre lui.</li>
    </ul>
  `
  },
  {
    title: 'Charge', details: `
    <ul>
        <li>Déplacez-vous en ligne droite, en utilisant le mouvement de charge, jusqu'à engager le combat avec l'ennemi.</li>
        <li>Résolvez une attaque de mêlée contre lui. Vous pouvez relancer le jet d'attaque.</li>
    </ul>
  `
  },
  {
    title: 'Repos', details: `
    <p>Quand votre unité effectue cette action, utilisez autant des options suivantes</p>
    <ul>
        <li>Eliminer tout son stress.</li>
        <li>Supprimer n'importe quel état de son profil.</li>
        <li>Effectuer un mouvement en utilisant uniquement sa deuxième valeur de Mouvement.</li>
    </ul>
    <p>Même si elle a déjà été activée pendant ce round, l'unité n'est pas stressée en effectuant cette action.</p>
  `
  },
  {
    title: 'Utiliser une compétence longue', details: `
      <ul>
        <li>Choisissez votre compétence avec le symbole <span class="warcrow-font-LongAction" role="img" aria-label="Long Action" ></span> et vérifier que les conditions sont remplis.</li>
        <li>Appliquez les effets de la capacité.</li>
    </ul>
  `
  }
];

// Nouvelles données: Capacités (compétence, passive, commandement, ...)
const CAPACITES: CollapsibleItem[] = [
  {
    title: 'Compétence',
    details: `
      <p>Les compétences sont des capacités que vous pouvez activez à l'aide d'une action simple ou complexe.</p>
    `,
    icon: 'competence.png'
  },
  {
    title: 'Passive',
    details: `
      <p>Les passives sont des effets toujours actifs. Tant que l'unité remplit les conditions, l'effet s'applique automatiquement.</p>
    `,
    icon: 'passive.png'
  },
  {
    title: 'Commandement',
    details: `
      <p>Les capacités de commandement s'activent par la dépense de point de commandement.</p>
    `,
    icon: 'commandement.png'
  },
  {
    title: 'Sort',
    details: `
      <p>Les sorts sont des actions de magie. Leur fonctionnement est décrite dans la liste des actions. </p>
    `,
    icon: 'sort.png'
  },
  {
    title: 'Actions de teinte',
    details: `
      <p>Les actions de teintes sont des actions. Leur fonctionnement est décrite dans la liste des actions. </p>
    `,
    icon: 'teint.png'
  }
];

const MOTS_CLEFS_DECORS: CollapsibleItem[] = [
  {
    title: 'Accidenté (X) / Rugged',
    details: `
        <p>Les unités définies par X reçoivent l'état Ralenti du moment qu'elles sont adjacentes au décors pendant leur activation. De plus, elles ne peuvent pas déclarer de charge si la trajectoire du mouvement de la charge les amènes à être adjacentes au décors.</p>
        <p>X peut être le nom d'une unité, d'une caractéristique, d'un mot-clé, ou de plusieurs de ce élements. Si aucune valeur X n'est spécifiée, l'effet s'applique à toutes les unités.</p>
    `
  },
  {
    title: 'Bloque la LdV / Block LoS',
    details: `
      Ce décor bloque tous les LdV tracées à travers lui, ainsi que celles tracées depuis son intérieur et vers son intérieur. A moins qu'un décor ne possède ce mot-clé, il n'est jamais considéré comme bloquant les LdV.
    `
  },
  {
    title: 'Couvert (D) / Cover',
    details: `<p>Les unités adjacentes à ce décor peuvent bénéficier d'un couvert lors d'une attaque à distance. La valeur D indique les dés ou symboles automatique que les unités adjacentes ajoutent à leur jet de défense.</p>`
  },
  {
    title: 'Infranchissable / Impassable',
    details: `<p>Les unités ne peuvent pas traverser ce décor, n'y y finir leur mouvement. Si un décor gagne la caractéristique Infranchissable pendant la bataille, les unités qui s'y trouvent doivent se déplacer pour devenir adjacentes.</p>`
  },
  {
    title: 'Mortel (X:D) / Lethal',
    details: `
      <p>Les unités définies par X et
      rentrant au contact avec ce décor, subissent une
      attaque de mêlée résolue avec un
      jet D. Le décor ne peut pas subir
      de dégâts et ne force pas les unités
      au repli.</p>
      <p>X peut être le nom d’une unité,
      d’une caractéristique, d’un mot-clé
      ou de plusieurs de ces éléments
      (dans ce cas séparés par des traits
      “|”) (voir “Personnages. Rejoindre
      une unité” pour des exemples de
      X). Si aucune valeur n’est spécifiée
      pour X, l’effet s’applique à toutes
      les unités.</p>`
  },
  {
    title: 'Piège / Trap',
    details: `
      <p>Ce décor a été créé par une unité utilisant une compétence ou un
        sort. Les unités capables de supprimer les pièges peuvent retirer
        ce décor du champ de bataille.
      </p>
      <p>
        Placer un piège
      </p>
      <p>Toutes les unités qui placent un piège doivent suivre les règles suivantes :</p>
      <ul>
        <li>A moins que ce soit spécifiée, l'élement de piège doit avoir un diamètre de 6 pas.</li>
        <li>Vous ne pouvez le placer par dessus un élement impassable.</li>
        <li>Les unités ne sont pas des élements de terrain, vous pouvez donc placer un piège sous l'une d'entre elle.
        Prenez leur position actuelle comme point de référence, soulevez les unités, et placez le piège en dessous avant
         de reposer les figurines aussi près que possible de leurs positions initiale.</li>
      </ul>
    `
  },
  {
    title: 'Sinistre (X) / Sinister',
    details: `<p>
        Les unités définies par X qui se
        trouvent jusqu’à 4 pas de ce décor au début de leur activation
        doivent réussir un test de VOL ou
        devenir stressées.
        </p>
        <p>
        X peut être le nom d’une unité,
        d’une caractéristique, d’un mot-clé
        ou de plusieurs de ces éléments
        (dans ce cas séparés par des traits
        “|”) (voir “Personnages. Rejoindre
        une unité” pour des exemples de
        X). Si aucune valeur n’est spécifiée
        pour X, l’effet s’applique à toutes
        les unités.
        </p>`
  },
  {
    title: 'Brouillard',
    details: `
    <p>
        Le brouillard est représenté sous forme de marqueurs.
    </p>
    <p>Une unité qui terminé son activation dans les 4 pas d'un marqueur Brouillard reçoit 1 teinte. </p>
    <p>Le brouillard ne coupe pas les lignes de vue et n'interrompt pas le mouvement.
    Une unité ne peut placer un marqueur brouillard à moins de 10 pas d'un autre marqueur brouillard.</p>`
  }
];

const DECORS: Decor[] = [{
  title: 'Clôture/Barricade',
  keywords: [{name: 'Couvert', value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`}],
  dimensions: `Socle de 4 à 13 pas de long et pas plus d'un pas de large`
}, {
  title: 'Mur',
  keywords: [{name: 'Couvert', value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>`}],
  dimensions: `Socle de 4 à 13 pas de long et pas plus d'un pas de large`
}, {
  title: 'Petite structure',
  keywords: [{name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`
  }, {name: 'Infranchissable'}],
  dimensions: `Socle d'une surface équivalente à un carré de 4 à 7 pas de coté`
}, {
  title: 'Bâtiment',
  keywords: [{name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>`
  }, {name: 'Infranchissable'}],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Forêt clairsemée',
  keywords: [{name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`
  }],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Forêt dense',
  keywords: [{name: 'Accidenté', value: 'Cavalerie, Golem'}, {name: 'Bloque la LdV'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>`
  }],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Rivière',
  keywords: [{name: 'Accidenté'}],
  dimensions: `Socle d'une longue de 4 à 13 pas et d'une largeur maximale de 7 pas`
}, {
  title: 'Lac',
  keywords: [{name: 'Infranchissable'}],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Ruines',
  keywords: [{name: 'Accidenté'}, {
    name: 'Couvert',
    value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>`
  }],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}, {
  title: 'Terrain accidenté',
  keywords: [{name: 'Accidenté'}],
  dimensions: `Socle d'une surface équivalente à un carré de 7 à 10 pas de coté`
}];

const SCENARIO: Scenario[] = [{
  title: 'Prendre position',
  image: 'scenario/take-position.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM pour chaque objectif adversaire controllé`,
    `1 PM si aucun objectif amis n'est controllé par l'adversaire`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`
  ]
}, {
  title: `Zone d'influence`,
  image: 'scenario/influence-zone.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM si vous contrôlez plus d'objectifs que l'adversaire.`,
    `1 PM si vous contrôlez au moins un objectif adverse.`,
    `1 PM si vous contrôlez au moins 2 objectifs.`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`,
    `1 marqueur d'objectif marron`
  ],
  additionnal: `
    <h2>Domaine stratégique</h2>
    <ul>
     <li>Toutes les unités qui ne sont pas démoralisées ont une valeur de conquête augmentée de 1.</li>
     <li>Les modificateurs de conquêtes ne sont pas augmentés. </li>
    </ul>
    <h2>Zone d'influence</h2>
    <p>Les unités peuvent contester le contrôle d'un objectif à 7 pas au lieu de 3.</p>
  `
}, {
  title: `Expansion`,
  image: 'scenario/expanse.png',
  roundLength: 5,
  endRoundScoring: [
    `2 PM si vous contrôlez plus d'objectifs marron que l'adversaire.`,
    `1 PM si vous contrôlez le même nombre d'objectif marron que l'adversaire.`,
    `1 PM si vous contrôlez l'objectif bleu central.`
  ],
  endGame: 3,
  requiredMaterial: [
    `4 marqueurs d'objectifs marron`,
    `1 marqueurs d'objectifs bleu`
  ],
  additionnal: `
    <h2>Préparation</h2>
    <p>Les objectifs marrons commencent avec un marqueur de contrôle de la compagnie qui a sa zone de déploiement adjacente au marqueur.</p>
  `
}, {
  title: `Butin`,
  image: 'scenario/loot.png',
  roundLength: 5,
  endRoundScoring: [
    `1 PM si vous possédez au moins 1 butin.`,
    `1 PM si vous possédez plus de butins que l'adversaire  .`,
    `1 PM si votre adversaire ne possède pas de butin.`
  ],
  endGame: 3,
  requiredMaterial: [
    `2 marqueurs d'objectifs rouge`,
    `2 marqueurs d'objectifs bleu`,
    `1 marqueur d'objectif marron`
  ],
  additionnal: `
    <h2>Butin</h2>
    <p>Les marqueurs d'objectif servent à représenter le butin. Ils utilisent ces règles à la place de celle du livre de règles :</p>
    <ul>
        <li>Un unité adjacente à un objectif peut se stressé pour le récupérer. Placez le sur votre fiche de profil.</li>
        <li>Les unités peuvent traverser les marqueurs objectifs mais pas s'arrêter dessus.</li>
        <li>Les unités ne peuvent saisir d'objectif de la couleur adverse.</li>
        <li>Une unité ne peut pas porter plus d'un marqueur objectif à la fois.</li>
        <li>Quand une unité portant un objectif doit quitter de la table, la compagnie
        doit placer l'objectif à coté du leader de l'unité avant de le retirer de la table. Si une unité est détruite
        mais contenait dans ces rangs un personnage officier, donnez-lui l'objectif. </li>
        <li>Quand une unité portant un objectif est démoralisée, placez l'objectif au sol à coté du leader avant la fuite.</li>
        <li>Si un personnage quitte une unité qui porte un objectif, il peut choisir de prendre ou de laisser l'objectif.</li>
    </ul>
  `
}];

export const LABEL = {
  menu:  {
    actions: 'Actions',
    capacites: 'Habilities',
    etats: 'State and Token',
    motsClefs: 'Keyword',
    motsClefsDecors: 'Terrain Keyword',
    resumeTour: 'Turn Summary',
    resumeOpposition: "Test Summary",
    personnageUnite: 'Characters and unit',
    decors: 'Terrain',
    scenarios: 'Scenario',
    teinte: 'Tinge'
  }
}

export const EN = {
  ETATS,
  MOTS_CLEFS,
  ACTIONS_SIMPLES,
  ACTIONS_COMPLEXES,
  CAPACITES,
  MOTS_CLEFS_DECORS,
  DECORS,
  SCENARIO,
  LABEL
};
