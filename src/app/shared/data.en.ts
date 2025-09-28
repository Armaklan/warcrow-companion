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
    title: 'Cover (D)',
    details: '<p>Units adjacent to this unit (allied or not) can benefit from cover against ranged attacks. The value D indicates the automatic dice or symbols that adjacent units add to their defense roll.</p>'
  },
  {
    title: 'Dispel (D)',
    details: '<p>When this unit is targeted by a spell, it can attempt to block it. The D value indicates the dice or automatic symbols rolled to block the spell. This unit does not gain Tinge from a <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span>. You cannot attempt to block a spell more than once or with more than one unit.</p>'
  },
  {
    title: 'Scout',
    details: `
      <p>Scout units can deploy right after all other units on both sides have finished deploying. They represent advance guards that have recognized the terrain or the enemy and choose the best position.</p>
      <p>If your opponent also has Scout units, whoever has the initiative decides who deploys one of their Scout units first. You and your opponent must alternate until you have deployed all of them.</p>
      <p>You can also keep your Scout unit secret and deploy it once the game has started, under the following restrictions:</p>
      <ul>
        <li>You may deploy it unit anywhere in your deployment zone (it cannot be deployed engaged in combat).</li>
        <li>You may deploy it unit adjacent to one of the battlefield edges, as long as you do not enter your opponent’s deployment zone and no enemy units within 12 strides have Line of Sight (LoS) to it.</li>
      </ul>
      <p>If you deploy it once the game has started, you must activate it immediately and spend one of your two actions for its activation. Thus, it can only perform one action that cannot be long.</p>
    `
  },
  {
    title: 'Elite',
    details: '<p>Once the dice have been rolled (rerolls included) and before the switches step, this unit may replace any ' +
      '<span class="warcrow-font-HollowSuccess" role="img" aria-label="Hollow Success" ></span> with <span class="warcrow-font-Success" role="img" aria-label="Success" ></span>, ' +
      'any <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> with <span class="warcrow-font-Block" role="img" aria-label="Block" ></span>, ' +
      'and any <span class="warcrow-font-Hollow-Special" role="img" aria-label="Hollow Special" ></span> with <span class="warcrow-font-Special" role="img" aria-label="Special" ></span>. This effect applies to all rolls made by this unit.</p>'
  },
  {
    title: 'Ambusher',
    details: `
      <p>Ambusher units wait in hiding, ready to strike once the battle has already started. You can keep your Ambusher units secret and not deploy them until after the game has started.</p>
      <p>You can activate your Ambusher unit during your turn instead of another unit, as if it were already on the battlefield. In this case:</p>
      <ul>
        <li>
          <strong>Deploy the unit on the battlefield:</strong>
          <ul>
            <li>Anywhere in your deployment zone. You can deploy it engaged in combat with an enemy unit. It is considered to have charged, but the enemy unit cannot hold or fire.</li>
            <li>Anywhere on the battlefield, except in the opponent’s deployment zone, as long as no enemy units within 10 strides have Line of Sight (LoS) to it.</li>
          </ul>
        </li>
        <li><strong>Then activate your unit.</strong></li>
      </ul>
    `
  },
  {
    title: 'Manned',
    details: '<ul><li>Ignores the effects of Intimidating.</li><li>Becomes stressed only if activated more than once during the same round.</li></ul>'
  },
  {
    title: 'Raging',
    details: '<p>Adds <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> to its attack rolls when it charges.</p>'
  },
  {
    title: 'Golem',
    details: '<ul><li>Ignores Intimidating.</li><li>Immune to the Frightened state.</li><li>Cannot be demoralized. If stress exceeds the unit’s MOR value, ignore the excess.</li></ul>'
  },
  {
    title: 'Immovable',
    details: '<p>Cannot be attracted, shoved, placed, displaced, or pushed back unless you want it to.</p>'
  },
  {
    title: 'Fearless',
    details: '<p>Ignores Intimidating and is immune to the Frightened state.</p>'
  },
  {
    title: 'Intimidating (N)',
    details: `
      <p>When this unit engages or is engaged in combat, the enemy unit must perform a WP test and obtain at least as many <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> as the value <strong>N</strong> to avoid stress.</p>
      <p>For each missing <span class="warcrow-font-Success" role="img" aria-label="Success" ></span>, the enemy unit gains 1 stress point.</p>
      <p>A unit can only suffer the effects of Intimidating once per activation.</p>
    `
  },
  {
    title: 'Large',
    details: `
      <ul>
        <li>Large units can move through units that are not Large. Units moved through must pass a WP test to avoid stress. In addition, a unit moved through must make an opposed defense roll against as many <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> as there are troops in the unit (up to a maximum of 3). It suffers as much damage as the number of <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> not cancelled.</li>
        <li>Even if engaged in combat, a Large unit can charge another unit if it has Line of Sight (LoS) and can move to engage it. This charge move provokes an opportunity attack.</li>
        <li>Only other Large units and terrain elements with the keyword <em>Blocks LoS</em> block Line of Sight to Large units.</li>
        <li>Large units are always considered <em>Immovable</em>.</li>
      </ul>
    `
  },
  {
    title: 'Berserker Rage',
    details: `
      <p>Your unit can inflict <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> on itself to add one symbol of your choice to an attack, defense, or WP roll. You must do this after rolling the dice but before proceeding to the switches step.</p>
      <p>You cannot inflict this damage if it would eliminate the unit. This damage is not taken into account when resolving combat.</p>
    `
  },
  {
    title: 'Bloodlust (X)',
    details: `
      <p>If the unit is not engaged in combat when activated, it must engage (Charge or Assault) <span class="warcrow-font-LongAction" role="img" aria-label="LongAction" ></span> an enemy unit <strong>X</strong> whenever possible. <em>X</em> can be the name of a unit, a keyword, or several elements separated by “|”. If no value is specified for <em>X</em>, the unit must charge <span class="warcrow-font-LongAction" role="img" aria-label="LongAction" ></span> the nearest enemy unit.</p>
      <p>If the unit engages due to its Bloodlust, it may re-roll all of its attack rolls while engaged with that enemy unit (not just when charging or assaulting).</p>
      <p>At the beginning of its activation, the unit can ignore the effects of Bloodlust until the end of its activation by passing a WP test.</p>
    `
  },
  {
    title: 'Preferred Terrain (E)',
    details: `
      <p>The unit can ignore the effects of terrain elements of type E, which can refer to a type of terrain, a keyword, or several such elements separated by “|”.</p>
    `
  },
  {
    title: 'Tinge',
    details: `
      <p>Your unit gains <img src="teint.png" alt="tinge" style="height: 1em; vertical-align: -0.2em;"/> at the start of each round.</p>
      <b>Character joining a unit</b>
      <p>The joined unit is considered to have the Tinge keyword while the character is part of it. It therefore gains <img src="teint.png" alt="tinge" style="height: 1em; vertical-align: -0.2em;"/> at the start of each round.</p>
      <b>Unit outside the battlefield</b>
      <p>Units outside the battlefield do not gain <img src="teint.png" alt="tinge" style="height: 1em; vertical-align: -0.2em;"/> from this keyword.</p>
    `
  },
  {
    title: 'Aim',
    details: '<p>Can re-roll its ranged attack rolls. The target does not benefit from Cover (D).</p>'
  },
  {
    title: 'Join (X)',
    details: `
      <p>Characters able to join a unit have the Join (X) keyword in their profile, where X can be the name of a unit, a characteristic, a keyword, or several such elements separated by “|”. In this case, the target unit must have all the keywords or characteristics, or be named as at least one of the elements.</p>
      <p>Officer-type characters automatically become the leader of the unit they join.</p>
    `
  },
  {
    title: 'Shove (X)',
    details: `
      <p>The target unit must move away from your unit by X strides along a line connecting the centers of both units’ leaders’ bases. This movement does not provoke an opportunity attack.</p>
      <p>If the target unit comes into contact with another unit or an Impassable terrain element during this movement, it stops immediately at that point.</p>
    `
  },
  {
    title: 'Attract (X)',
    details: `
      <p>The target unit must move toward your unit by X strides along a line connecting the centers of both units’ leaders’ bases. This movement does not provoke an opportunity attack.</p>
      <p>If the target unit comes into contact with another unit or an Impassable terrain element during this movement, it stops immediately at that point.</p>
    `
  },
  {
    title: 'Place (X)',
    details: `
      <p>Indicate a point on the battlefield X strides from your unit’s leader. The controller of the target unit must take their unit leader and place it on that point. Then, place the rest of the target unit’s models in formation.</p>
      <p>This movement does not provoke opportunity attacks. You cannot place models on top of others or on an Impassable terrain feature.</p>
    `
  },
  {
    title: 'Displace (X)',
    details: `
      <p>The unit you displace must make a straight movement of X strides in the chosen direction. The effects of terrain elements (except Impassable) do not affect this movement. It does not provoke an opportunity attack.</p>
      <p>If the displaced unit comes into contact with another unit or an Impassable terrain element during this movement, it stops immediately at that point.</p>
    `
  }
];

const ACTIONS_SIMPLES: CollapsibleItem[] = [
  {
    title: 'Move',
    details: `
      <ul>
        <li>Move the unit by its first MOV value.</li>
        <li>Then move the unit by its second MOV value.</li>
      </ul>
    `
  },
  {
    title: 'Melee Attack',
    details: `
      <ul>
        <li>Perform a positioning maneuver if necessary.</li>
        <li>Resolve a Face to Face roll between the attack roll and the defense roll. Each unblocked <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> inflicts a <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> on the enemy unit.</li>
        <li>The unit that suffered the most damage (at least one <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span>) becomes stressed at the end of the activation.</li>
        <li>The winning unit may <b>force the losing unit to retreat</b> and decide whether to pursue it (using its first MOV value).</li>
        <li>Perform a second positioning maneuver if necessary at the end of the combat.</li>
      </ul>
      <p><b>Positioning Maneuver</b></p>
      <ul>
        <li>Starting with your Leader, place all unengaged soldiers in contact with at least one enemy soldier.</li>
        <li>Your soldiers must always remain in formation.</li>
        <li>You may swap the position of your Leader with that of any soldier engaged with the enemy.</li>
        <li>If you cannot engage a soldier in combat, place it in contact with your Leader, or, if not possible, with any other soldier of your unit.</li>
        <li>If any of the above cannot be fulfilled, place the soldier as close to your Leader as possible.</li>
      </ul>
      <p><b>Force to Retreat</b></p>
      <ul>
        <li>The unit being forced to retreat may gain 1 Stress to prevent it.</li>
        <li>A retreating unit must move using its first MOV value, putting as much distance as possible from its opponent.</li>
        <li>The winning unit may pursue the retreating one by moving with its first MOV value. If the Leader ends in base contact with the enemy Leader, it may engage it (you are not considered to have charged).</li>
      </ul>
      <p><b>Elimination of a Unit</b></p>
      <ul>
        <li>If you completely eliminate the enemy unit, your unit may perform a free Move action once (it does not count as an activation).</li>
      </ul>
    `
  },
  {
    title: 'Ranged Attack',
    details: `
      <ul>
        <li>The defender can only use <span class="warcrow-font-Blue" role="img" aria-label="Blue dice" ></span>, <span class="warcrow-font-Green" role="img" aria-label="Green dice" ></span>, <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>, <span class="warcrow-font-Block" role="img" aria-label="Block" ></span> and <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> in their defense roll.</li>
        <li>Resolve a Face to Face roll between the attack roll and the defense roll. Each unblocked <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> inflicts a <span class="warcrow-font-Wound" role="img" aria-label="Wound" ></span> on the enemy unit. The defender cannot apply switches.</li>
      </ul>
    `
  },
  {
    title: 'Cast a Spell',
    details: `
      <ol>
        <li>Choose your spell and declare any alterations, then check the casting requirements. If they are not met, you cannot cast the spell.</li>
        <li>If your opponent has a unit that can attempt to block the spell, perform the test.</li>
        <li>Resolve a Face to Face roll between the caster’s WP and the Dispel test.</li>
        <li>Declare any alterations that use <img src="teint.png" alt="Tinge" style="height: 1em; vertical-align: -0.2em;"/> and spend it.</li>
        <li>The spellcaster may gain <img src="teint.png" alt="1 Tinge" style="height: 1em; vertical-align: -0.2em;"/> to add one <span class="warcrow-font-Success" role="img" aria-label="Success" ></span>.</li>
        <li>If you roll at least one <span class="warcrow-font-Success" role="img" aria-label="Success" ></span> on the check, apply the spell effects.</li>
      </ol>
      <p><b>Tinge Roll</b></p>
      <ol>
        <li>Create the Tinge roll: take the number of <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span> indicated in the spell’s chosen alterations.</li>
        <li>For each <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> rolled in the Tinge roll, gain one <img src="teint.png" alt="Tinge" style="height: 1em; vertical-align: -0.2em;"/>.</li>
        <li>If the caster has any <img src="teint.png" alt="Tinge" style="height: 1em; vertical-align: -0.2em;"/>, apply the Tinge effects.</li>
      </ol>
      <p><b>Blocking a Spell</b></p>
      <ol>
        <li>Declare your intention to block the spell during step 2 of casting.</li>
        <li>A spell may be blocked either by its target if it has the Dispel keyword, or by a Mage within 20 strides of the enemy caster.</li>
        <li>Form the blocking test: take 3 <span class="warcrow-font-Black" role="img" aria-label="Black dice" ></span>, or the dice indicated by the Dispel skill, and roll them. The result will be opposed to the casting roll during step 3.</li>
        <li>For each <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span> rolled, the unit blocking the spell gains one <img src="teint.png" alt="Tinge" style="height: 1em; vertical-align: -0.2em;"/>.</li>
        <li>If you rolled at least one <span class="warcrow-font-Hollow-Block" role="img" aria-label="Hollow Block" ></span>, apply the Tinge effects at the end of the activation.</li>
      </ol>
      <p>You cannot attempt to block a spell more than once or with more than one unit.</p>
    `
  },
  {
    title: 'Tinge Ability',
    details: `
      <ul>
        <li>Choose your Tinge ability.</li>
        <li>Spend <img src="teint.png" alt="Tinge" style="height: 1em; vertical-align: -0.2em;"/>.</li>
        <li>Apply the effects of the ability.</li>
      </ul>
    `
  },
  {
    title: 'Use a Skill',
    details: `
      <ul>
        <li>Choose your skill and verify that its requirements are met.</li>
        <li>Apply the effects of the ability.</li>
      </ul>
    `
  }
];

const ACTIONS_COMPLEXES: CollapsibleItem[] = [
  {
    title: 'Assault',
    details: `
      <ul>
        <li>Move until you engage in combat with the enemy, using your first and then your second MOV value.</li>
        <li>Resolve a melee attack against it.</li>
      </ul>
    `
  },
  {
    title: 'Charge',
    details: `
      <ul>
        <li>Move in a straight line, using your charge movement, until you engage in combat with the enemy.</li>
        <li>Resolve a melee attack against it. You may re-roll your attack roll.</li>
      </ul>
    `
  },
  {
    title: 'Rest',
    details: `
      <p>When your unit performs this action, choose as many of the following options as you wish:</p>
      <ul>
        <li>Remove all its stress.</li>
        <li>Remove any state from its profile.</li>
        <li>Perform a move using only its second MOV value.</li>
      </ul>
      <p>Even if it has already been activated during this round, the unit does not become stressed when performing this action.</p>
    `
  },
  {
    title: 'Use a Long Skill',
    details: `
      <ul>
        <li>Choose your skill with the <span class="warcrow-font-LongAction" role="img" aria-label="Long Action" ></span> symbol and verify that all conditions are met.</li>
        <li>Apply the effects of the ability.</li>
      </ul>
    `
  }
];

// Nouvelles données: Capacités (compétence, passive, commandement, ...)
const CAPACITES: CollapsibleItem[] = [
  {
    title: 'Skill',
    details: `
      <p>Skills are abilities that you can activate by performing a simple or complex action.</p>
    `,
    icon: 'competence.png'
  },
  {
    title: 'Passive',
    details: `
      <p>Passive abilities are effects that are always active. As long as the unit meets the conditions, the effect applies automatically.</p>
    `,
    icon: 'passive.png'
  },
  {
    title: 'Command',
    details: `
      <p>Command abilities are activated by spending Command Tokens.</p>
    `,
    icon: 'commandement.png'
  },
  {
    title: 'Spell',
    details: `
      <p>Spells are magical actions. Their operation is described in the list of actions and in the Magic section.</p>
    `,
    icon: 'sort.png'
  },
  {
    title: 'Tinge Actions',
    details: `
      <p>Tinge actions are special actions related to the effects of magic. Their operation is described in the list of actions.</p>
    `,
    icon: 'teint.png'
  }
];


const MOTS_CLEFS_DECORS: CollapsibleItem[] = [
  {
    title: 'Rugged (X)',
    details: `
      <p>Units defined by X gain the Slowed state while they are adjacent to this terrain element during their activation. In addition, they cannot declare a Charge if the trajectory of the Charge movement would make them adjacent to this terrain.</p>
      <p>X can be the name of a unit, a characteristic, a keyword, or several of these elements. If no value for X is specified, the effect applies to all units.</p>
    `
  },
  {
    title: 'Blocks LoS',
    details: `
      <p>This terrain blocks all Lines of Sight (LoS) drawn through it, as well as those drawn from within it or toward it. Unless a terrain element has this keyword, it is never considered to block LoS.</p>
    `
  },
  {
    title: 'Cover (D)',
    details: `
      <p>Units adjacent to this terrain element can benefit from cover during a ranged attack. The value D indicates the dice or automatic symbols that adjacent units add to their defense roll.</p>
    `
  },
  {
    title: 'Impassable',
    details: `
      <p>Units cannot move through this terrain element or end their movement on it. If a terrain element gains the Impassable characteristic during the battle, units inside it must move so they become adjacent to it.</p>
    `
  },
  {
    title: 'Lethal (X:D)',
    details: `
      <p>Units defined by X that come into contact with this terrain suffer a melee attack resolved with a D roll. The terrain cannot suffer damage and does not force units to retreat.</p>
      <p>X can be the name of a unit, a characteristic, a keyword, or several of these elements (in this case separated by “|”) (see “Characters. Join a Unit” for examples of X). If no value is specified for X, the effect applies to all units.</p>
    `
  },
  {
    title: 'Trap',
    details: `
      <p>This terrain element has been created by a unit using a skill or spell. Units capable of removing traps can remove this terrain element from the battlefield.</p>
      <p><b>Placing a Trap</b></p>
      <p>All units that place a trap must follow these rules:</p>
      <ul>
        <li>Unless otherwise specified, a trap element must have a diameter of 6 strides.</li>
        <li>You cannot place it on top of an Impassable element.</li>
        <li>Units are not considered terrain elements, so you may place a trap beneath one. Use their current position as reference, lift the units, place the trap underneath, then return the models as close as possible to their original positions.</li>
      </ul>
    `
  },
  {
    title: 'Sinister (X)',
    details: `
      <p>Units defined by X that are within 4 strides of this terrain element at the start of their activation must pass a WP test or become Stressed.</p>
      <p>X can be the name of a unit, a characteristic, a keyword, or several of these elements (in this case separated by “|”) (see “Characters. Join a Unit” for examples of X). If no value for X is specified, the effect applies to all units.</p>
    `
  },
  {
    title: 'Fog',
    details: `
      <p>Fog is represented by markers.</p>
      <p>A unit that ends its activation within 4 strides of a Fog marker gains 1 <img src="teint.png" alt="Tinge" style="height: 1em; vertical-align: -0.2em;"/>.</p>
      <p>Fog does not block Line of Sight and does not interrupt movement. A unit cannot place a Fog marker within 10 strides of another Fog marker.</p>
    `
  }
];


const DECORS: Decor[] = [{
  title: 'Fence / Barricade',
  keywords: [{name: 'Cover', value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice"></span>`}],
  dimensions: `Base between 4 and 13 strides long and no more than 1 stride wide`
}, {
  title: 'Wall',
  keywords: [{name: 'Cover', value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice"></span>`}],
  dimensions: `Base between 4 and 13 strides long and no more than 1 stride wide`
}, {
  title: 'Small Structure',
  keywords: [
    {name: 'Block LoS'},
    {name: 'Cover', value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice"></span>`},
    {name: 'Impassable'}
  ],
  dimensions: `Base with a surface equivalent to a square measuring between 4 and 7 strides a side`
}, {
  title: 'Building',
  keywords: [
    {name: 'Block LoS'},
    {name: 'Cover', value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice"></span>`},
    {name: 'Impassable'}
  ],
  dimensions: `Base with a surface equivalent to a square measuring between 7 and 10 strides a side`
}, {
  title: 'Light Forest',
  keywords: [
    {name: 'Block LoS'},
    {name: 'Cover', value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice"></span>`}
  ],
  dimensions: `Base with a surface equivalent to a square measuring between 7 and 10 strides a side`
}, {
  title: 'Dense Forest',
  keywords: [
    {name: 'Rugged', value: 'Cavalry, Golem'},
    {name: 'Block LoS'},
    {name: 'Cover', value: `<span class="warcrow-font-Blue" role="img" aria-label="Blue dice"></span>`}
  ],
  dimensions: `Base with a surface equivalent to a square measuring between 7 and 10 strides a side`
}, {
  title: 'River',
  keywords: [{name: 'Rugged'}],
  dimensions: `Base between 4 and 13 strides long and no more than 7 strides wide`
}, {
  title: 'Lake',
  keywords: [{name: 'Impassable'}],
  dimensions: `Base with a surface equivalent to a square measuring between 7 and 10 strides a side`
}, {
  title: 'Ruins',
  keywords: [
    {name: 'Rugged'},
    {name: 'Cover', value: `<span class="warcrow-font-Black" role="img" aria-label="Black dice"></span>`}
  ],
  dimensions: `Base with a surface equivalent to a square measuring between 7 and 10 strides a side`
}, {
  title: 'Rugged Terrain',
  keywords: [{name: 'Rugged'}],
  dimensions: `Base with a surface equivalent to a square measuring between 7 and 10 strides a side`
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

const PERSONNAGE_UNITE = {
  title: 'Characters and Units',
  html: `
    <h3>Join a Unit during Activation</h3>
    <p>During its activation, your Character may join a unit that meets the conditions of its Join keyword as long as:</p>
    <ul>
      <li>There are no other Characters in the unit.</li>
      <li>The unit is not demoralized.</li>
    </ul>

    <p>The only action your character may perform is Move, up to twice, to reach the unit. Token and damage handling:</p>
    <ul>
      <li><b>Damage:</b> The character keeps its damage tokens on its own profile. The unit does not account for the character’s damage.</li>
      <li><b>Stress:</b> Keep the higher stress level between the unit and the character.</li>
      <li><b>States:</b> Transfer state tokens to the unit. Remove any duplicates.</li>
      <li><b>Effects:</b> Transfer effect tokens to the unit.</li>
      <li><b>Activation:</b> Remove the character’s activation token.</li>
      <li><b>Tinge:</b> Compare the Tinge of the character and the unit. The unit keeps the highest value.</li>
    </ul>

    <h3>Leave a Unit</h3>
    <p>Declare to your opponent that your character leaves the unit. At that moment, the character is no longer part of the unit. Then resolve token distribution:</p>
    <ul>
      <li><b>Damage:</b> The unit keeps all damage tokens, except those directly on the character’s profile.</li>
      <li><b>Stress:</b> The character gains as many stress tokens as the unit.</li>
      <li><b>States:</b> The character gains the same states as the unit.</li>
      <li><b>Effects:</b> The character keeps all effect tokens.</li>
      <li><b>Tinge:</b> The character gains the same number of Tinge tokens as the unit.</li>
      <li><b>Demoralized:</b> If the unit was demoralized, the character receives its own demoralized token in the same position.</li>
    </ul>
    <p>Then, activate your character.</p>
    <p>If the character was an Officer, the unit’s leader takes the position the character occupied at the start of the activation.</p>
    <p>A character cannot leave and rejoin a unit during the same activation.</p>
    <p>A character cannot leave a unit that is engaged in combat.</p>
  `
};

const RESUME_TOUR = {
  title: 'Turn Summary',
  html: `
    <h2>Start of the Round</h2>
    <ol>
      <li>The player with the initiative chooses who will play first this round.</li>
    </ol>
    <h2>Round Sequence</h2>
    <ol>
      <li>
        <p>The first player activates one of their units.</p>
        <ul>
          <li>The unit may perform 2 different simple actions, or 1 long action. The Move action is an exception and may be chosen twice.</li>
          <li>If the unit has already been activated during the round, it becomes Stressed.</li>
          <li>At the end of the activation, check objective control.</li>
        </ul>
      </li>
      <li>
        The second player activates one of their units following the same process.
      </li>
      <li>Resolve event tokens and end the turn.</li>
      <li>Repeat the sequence until the last turn of the round has been played.</li>
    </ol>
    <h2>End of the Round</h2>
    <ol>
      <li>Apply any “end of round” effects.</li>
      <li>Gain your Victory Points (VP).</li>
      <li>
        <p>Reduce stress on your units (except demoralized units):</p>
        <ul>
          <li>by 1 if the unit was activated during this round.</li>
          <li>by 2 if the unit was not activated during this round.</li>
        </ul>
      </li>
      <li>Check Tinge effects.</li>
      <li><b>No one left behind.</b> Units that are not activated, not demoralized, and not engaged may move.</li>
      <li>Remove activation tokens.</li>
      <li>
        <p>Initiative changes hands.</p>
        <ul>
          <li>The player with the fewest Victory Points takes the initiative.</li>
          <li>In case of a tie, the initiative changes player.</li>
        </ul>
      </li>
      <li>Advance the end-of-round marker according to the scenario conditions.</li>
    </ol>
  `
};

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
  },
  actions: {
    simple: 'Simple actions',
    complexe: 'Complex actions'
  },
  terrain: {
    name: 'Terrain',
    keywords: 'Keywords',
    size: 'Size'
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
  LABEL,
  PERSONNAGE_UNITE,
  RESUME_TOUR
};
