/* ================================================
   Mr. President — Turn Sequence Tracker
   script.js
   ================================================ */

// ─── TURN SEQUENCE DATA ──────────────────────────────────────────

const TURN_SEQUENCE = [

  /* ══════════════════════════════════════════
     US SPECIAL ACTIVATIONS  (Steps 1–7)
  ══════════════════════════════════════════ */

  {
    id: 1,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Determine Starting Action Points (APs)",
    subtitle: "How many APs do you begin the year with?",
    ref: ["GM P4"],
    body: `
      <div class="note-box">⚠️ Reminder: APs do <strong>not</strong> roll over between years. All unused APs at end of a year are lost.</div>
      <p>APs come from the following sources:</p>
      <ul>
        <li><strong>Easier game:</strong> Year 1 → 20 APs; subsequent years → 15 APs</li>
        <li><strong>Normal / Harder game:</strong> Year 1 → 15 APs; subsequent years → 10 APs</li>
        <li>Cabinet Effectiveness Track (e.g. Level 4 = +2 APs)</li>
        <li><strong>+4 APs</strong> if you have the <em>EFFICIENT</em> Presidential Attribute</li>
        <li><strong>−3 APs</strong> if you have the <em>DISORGANIZED</em> Presidential Attribute</li>
        <li><strong>+2 APs</strong> if you have the <em>AWESOME CHIEF OF STAFF</em> Exceptional White House Resource Card</li>
      </ul>
      <p>Place the APs counter on the appropriate box of the Presidential Prestige/APs Track.</p>
    `
  },

  {
    id: 2,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Apply Presidential Attributes & WH Resources",
    subtitle: "Non-AP effects from Attributes and Exceptional White House Resources",
    ref: ["GM P4"],
    body: `
      <p>Apply any effects <em>other than APs</em> gained from Presidential Attributes or Exceptional White House Resources (or any penalties from negative Attributes).</p>
      <p><strong>Example:</strong> The "Business Friendly" Attribute and the "Amazing Secretary of Treasury" Exceptional White House Resource each add an Economy Improving Counter to the US SoE.</p>
    `
  },

  {
    id: 3,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Key Cabinet Member Experience",
    subtitle: "Not on Turn 1",
    ref: ["GM P4"],
    body: `
      <div class="turn-note">⛔ Skip this step on Turn / Year 1.</div>
      <p>Choose <strong>one</strong> Key Cabinet Member currently on their <em>Novice</em> side and roll a d6.</p>
      <ul>
        <li><strong>1–2:</strong> They gain experience — flip their counter to the <em>Veteran</em> side and use those values for the rest of the game.</li>
        <li><strong>3–6:</strong> No change.</li>
      </ul>
    `
  },

  {
    id: 4,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Optionally Replace One Key Cabinet Member",
    subtitle: "Not on Turn 1",
    ref: ["GM P4", "Presidential Master Action #7"],
    body: `
      <div class="turn-note">⛔ Skip this step on Turn / Year 1.</div>
      <p>You <strong>MAY</strong> choose to replace one Key Cabinet Member (SecDef, SecState, or Chief of Staff) using the procedure in <strong>Presidential Master Action #7</strong>.</p>
      <div class="note-box">This does <strong>not</strong> cost an action.</div>
    `
  },

  {
    id: 5,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Improve the Cabinet",
    subtitle: "Roll on the Cabinet Improvement Table",
    ref: ["GM P4", "D2 (p.2 DCB)", "D3 (p.3 DCB)"],
    body: `
      <p>Roll on the <strong>Cabinet Improvement Table (D2)</strong> in the Domestic Charts Booklet and apply results.</p>
      <div class="note-box">Note: You may also have to roll on the <strong>Cabinet Drama Table (D3, p.3 DCB)</strong> as a result.</div>
    `
  },

  {
    id: 6,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Set Focus Region(s) for National Intelligence",
    subtitle: "Not on Turn 1 — Focused National Intelligence Collection",
    ref: ["GM P41"],
    body: `
      <div class="turn-note">⛔ Skip this step on Turn / Year 1.</div>
      <p>Determine how many Focused National Intelligence (FNI) counters you have this turn:</p>
      <ul>
        <li>Check your Strategic Capabilities for <strong>Space Warfare</strong> and <strong>Strategic Recon/Intel</strong>.</li>
        <li>If <strong>both</strong> your values are ≥ <strong>both</strong> China's and Russia's values → you get <strong>2</strong> FNIC counters.</li>
        <li>Otherwise → you get <strong>1</strong> FNIC counter.</li>
      </ul>
      <p>Place each available FNIC counter in one World Region of your choice (max 1 per region). <strong>You may NOT place in Russia, China, or CONUS.</strong></p>
    `
  },

  {
    id: 7,
    phase: "special",
    phaseName: "US Special Activations",
    title: "New Year's Surprise",
    subtitle: "Draw Cascading Events from the 3-Deck and 2-Deck",
    ref: ["GM P4"],
    body: `
      <ol>
        <li>Draw a random Cascading Event from the <strong>"3 Deck"</strong> and resolve its <em>"From the 3 Deck"</em> effect.</li>
        <li>Draw a random Cascading Event from the <strong>"2 Deck"</strong> and resolve its <em>"From the 2 Deck"</em> effect.</li>
      </ol>
      <div class="alert-box">If either (or both) decks are <strong>empty</strong>: draw a new Cascading Event from the unused Cascading Events deck and resolve it as a new Cascading Event.</div>
    `
  },

  {
    id: 8,
    phase: "special",
    phaseName: "US Special Activations",
    title: "State of the Union Address",
    subtitle: "Not on Turn 1 — Roll on the SotU Chart",
    ref: ["GM P26"],
    body: `
      <div class="turn-note">⛔ Skip this step on Turn / Year 1.</div>
      <p>Roll on the <strong>State of the Union Chart</strong>. Choose the column equal to the <em>sum</em> of:</p>
      <ul>
        <li>Public Approval Die Roll Modifier (top-left of PA%)</li>
        <li>Relations with Congress</li>
        <li>Media Relations</li>
        <li>Current Presidential Prestige</li>
      </ul>
      <p>Then roll a d10 and find the result in that column.</p>
      <div class="note-box">DRM: −2 if you have the <em>"Orator"</em> Presidential Attribute.</div>
      <p>Possible results: +Public Approval, +APs, +Relations with Congress, new Bills in Congress, immediate actions, new Friends, etc.</p>
    `
  },

  {
    id: 9,
    phase: "special",
    phaseName: "US Special Activations",
    title: "US State of Economy Impact",
    subtitle: "Not on Turn 1 — Economic Assistance & SoE Effects",
    ref: ["GM P27"],
    body: `
      <div class="turn-note">⛔ Skip this step on Turn / Year 1.</div>
      <h3>1. Economic Assistance</h3>
      <p>Perform the number of Economic Assistance acts shown on the box to the <em>left</em> of the Current SoE counter.</p>
      <p>For each Economic Assistance, you may <strong>either</strong>:</p>
      <ul>
        <li>Improve an Ally Relationship by one level, <strong>OR</strong></li>
        <li>Place a "Trending Pro-US" counter in one of the 8 World Regions.</li>
      </ul>
      <h3>2. Apply SoE Effects</h3>
      <p>Update the game state as noted in the box to the <em>right</em> of the Current SoE counter — potentially gaining/losing Public Approval, APs, Relations with Congress, and/or losing a Friend.</p>
    `
  },

  {
    id: 10,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Improve Strategic Capabilities",
    subtitle: "Not on Turn 1 — Roll to improve capability tracks",
    ref: ["GM P36"],
    body: `
      <div class="turn-note">⛔ Skip this step on Turn / Year 1.</div>
      <ul>
        <li><strong>SoE 5+:</strong> Roll for <strong>two</strong> different capabilities.</li>
        <li><strong>SoE 4 or less:</strong> Roll for <strong>one</strong> capability.</li>
        <li>For each <strong>DARPA/Rapid Capabilities</strong> counter on the Strategic Capabilities track, you get one additional roll for that track.</li>
      </ul>
      <p>For each capability (and DARPA/RC counter), roll one d10:</p>
      <ul>
        <li><strong>Regular roll 1–5</strong> OR <strong>DARPA roll 1–7</strong> → improve that capability by one box.</li>
        <li>Otherwise: no improvement.</li>
      </ul>
      <p>SecDef Military Rating provides a −# DRM on any non-DARPA roll.</p>
      <div class="note-box">Remove <strong>all</strong> DARPA/Rapid Capabilities counters after this step, whether or not the track improved.</div>
    `
  },

  {
    id: 11,
    phase: "special",
    phaseName: "US Special Activations",
    title: "Set POTUS / Cabinet Focus",
    subtitle: "Place or move Cabinet Focus counters; handle Tensions counters",
    ref: ["GM P17-18"],
    body: `
      <ol>
        <li><strong>Set POTUS/Cabinet Focus:</strong> Place or move any/all of the 6 Cabinet Focus counters to reflect your domestic priorities for this year.</li>
        <li><strong>Remove Tensions Counters:</strong> If any Tensions counters are in the Cabinet Focus area, remove one.</li>
        <li><strong>Place Tensions Counters:</strong> If there are remaining Tensions counters, place them next to your Focus/Priority counters — starting at Priority #6, then #5, #4, etc. — until none remain.</li>
      </ol>
    `
  },

  {
    id: 12,
    phase: "special",
    phaseName: "US Special Activations",
    title: "1 Action for POTUS & Each Cabinet Member",
    subtitle: "Final step of US Special Activations",
    ref: ["GM P8", "GM P16"],
    body: `
      <p><strong>POTUS</strong> may perform <strong>one action</strong> from <em>any</em> of the four Master Actions Player Aids (Presidential, Domestic, Diplomatic, Military), OR remove a Tensions Counter from anywhere on the board (including Russia or China), OR exchange an action for 1 AP.</p>
      <div class="note-box">Actions allowed only once per Activation Phase may NOT be attempted in this Segment.</div>
      <p><strong>Each Cabinet Member</strong> may (in any order) perform one eligible action:</p>
      <ul>
        <li>VP & Sec State → Diplomatic Action</li>
        <li>VP & Chief of Staff → Domestic Action</li>
        <li>Sec Def → Military Action</li>
        <li>Any Cabinet Member → remove one Tensions Counter (NOT from China or Russia)</li>
      </ul>
      <p>If a Cabinet Member has <strong>"+1 Action"</strong> on their counter, they may perform an additional action during this Segment. Rotate their counter 90° when done.</p>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type before the end of this Segment.</p>
      <div class="alert-box">🎉 This concludes the US Special Activations. Your four Quarterly Activation Phases begin next!</div>
    `
  },

  /* ══════════════════════════════════════════
     ACTIVATION PHASES 1 & 3  (Steps 13–19)
  ══════════════════════════════════════════ */

  {
    id: 13,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "Any 3 Actions — POTUS Only",
    subtitle: "Take a mix of any 3 Domestic, Diplomatic, Military, or Presidential actions",
    ref: ["GM P8", "GM P16"],
    body: `
      <p>Take a mix of any <strong>3</strong> actions from the Master Actions Charts (Domestic, Diplomatic, Military, Presidential). <em>Cabinet Members may NOT take any actions in this segment.</em></p>
      <div class="note-box"><strong>AP / Action Exchange:</strong> You may forego one or more actions to recover <strong>1 AP each</strong>. (e.g., 2 actions + 1 forgone = +1 AP.)</div>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type before end of this Segment.</p>
    `
  },

  {
    id: 14,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "Russia or China Acts",
    subtitle: "Phase 1: Roll to determine who acts. Phase 3: The one who did NOT act in Phase 1.",
    ref: ["GM P30-32", "WPR1 (p.2 WPR)", "WPC1 (p.2 WPC)"],
    body: `
      <p><strong>If this is Activation Phase 1:</strong> Roll a d10.</p>
      <ul>
        <li><strong>1–5:</strong> Russia Acts (see WPR1). Place a "Russia Acted" counter as a reminder.</li>
        <li><strong>6–10:</strong> China Acts (see WPC1). Place a "China Acted" counter as a reminder.</li>
      </ul>
      <p><strong>If this is Activation Phase 3:</strong> The country that did NOT act in Phase 1 acts now.</p>
    `
  },

  {
    id: 15,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "Draw One Crisis Chit",
    subtitle: "Resolve the chit's effect; may draw up to 3 chits total if '+' sign",
    ref: ["GM P9"],
    body: `
      <p>Draw 1 Crisis Chit, perform its indicated action, then place it on the "Draw One Chit" space of the Turn Sequence.</p>
      <p>Possible effects include:</p>
      <ul>
        <li><strong>Draw Crisis Card(s)</strong> — resolve one at a time</li>
        <li><strong>Domestic Crisis</strong> — roll d10 on Domestic Crisis Event Table (D9)</li>
        <li><strong>Regional Summit</strong> — see WD2; optionally spend 1–2 AP before rolling</li>
        <li><strong>Random Regional Crisis</strong> — roll d10 for region, move Regional Crisis +1 box (check for MAJOR CRISIS → WD1)</li>
        <li><strong>Cascading Event 2</strong> — shuffle 2-Deck, draw 1, apply "From the 2 Deck" effect; place in 3-Deck unless directed</li>
        <li><strong>Cascading Event 3</strong> — shuffle 3-Deck, draw 1, apply "From the 3 Deck" effect; place in Discard unless directed</li>
        <li><strong>Good Times!</strong> — roll d10 on Good Times Table (D15)</li>
        <li><strong>NSA 2</strong> — draw top 2 Crisis Cards, remove one permanently, put other in Reshuffle pile</li>
        <li><strong>Russia Acts (2)</strong> — only if Russia is at Posture 2; perform 2 special actions</li>
        <li><strong>China Acts (2)</strong> — only if China is at Posture 2; perform 2 special actions</li>
      </ul>
      <div class="alert-box">
        <strong>Multiple Chits:</strong> If the chit has a <strong>(+)</strong> sign, move counter down one space and draw another chit. Maximum of 3 chits total even if the 3rd has a (+) sign.
      </div>
      <div class="note-box">If the "3 Deck" is empty when drawing Cascading Event 3, treat it as Cascading Event 2 instead. If the "2 Deck" is empty, nothing happens.</div>
    `
  },

  {
    id: 16,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "Ally / Rogue Group Acts",
    subtitle: "Randomly draw one of the four Ally Chits to activate a group",
    ref: ["GM P34-35", "WA1–WA4"],
    body: `
      <p>Randomly draw one of the <strong>four Ally Chits</strong> to determine which group of Allies and/or Rogue States activates.</p>
      <p>Refer to the applicable <strong>Ally and Rogue Nation Action Chart (WA1–WA4)</strong> and follow its instructions.</p>
      <p>Place the drawn Ally Chit on this Activation Segment space as a reminder of which group was activated.</p>
    `
  },

  {
    id: 17,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "POTUS / Cabinet Focus Rolls",
    subtitle: "Roll d6 for each Focus/Priority (except those with Tensions counters)",
    ref: ["GM P17-18"],
    body: `
      <p>Refer to the <strong>POTUS/CABINET FOCUS</strong> section on the game board. Roll a d6 for each Focus/Priority, starting with Priority #6 and moving to Priority #1.</p>
      <div class="alert-box"><strong>Exception:</strong> Do NOT roll for any Focus/Priority that has a Tensions counter next to it.</div>
      <p>If the result falls within the <strong>Success range</strong>, apply the result in the "Success Effect" area.</p>
      <h3>Success Effects Reference</h3>
      <ul>
        <li>Improve Relations with Congress → +1 RWC</li>
        <li>Improve Economy → place "Economy Improving" counter on US SoE Track</li>
        <li>Improve Homeland Security → decrease one Terror Group in US by 1 level (or if none: +1 HS, −2 PA)</li>
        <li>Improve Public/Press Relations → +3 PA <em>or</em> +1 PA & +1 Media Relations</li>
        <li>Address Domestic Crisis → −1 Domestic Crisis (if already 0: +2 APs)</li>
        <li>Improve Cabinet Effectiveness → roll d6: 1–3 = place "Improving" counter; 4+ = +3 APs</li>
      </ul>
      <p>At the end of this Segment, <strong>remove 1 Tensions counter</strong> (Priority #1 to #6 order).</p>
    `
  },

  {
    id: 18,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "Decrease Media Relations & 2 Domestic Actions",
    subtitle: "Media Relations degrade; then perform 2 Domestic actions",
    ref: ["GM P8", "GM P23-24"],
    body: `
      <h3>1. Decrease Media Relations</h3>
      <p>Decrease Media Relations by <strong>one box</strong> (relations degrade with time).</p>
      <h3>2. Perform Two Domestic Actions</h3>
      <p>Choose and perform any <strong>2 Actions</strong> from the Master Domestic Actions Player Aid or the "Domestic"/"Any" sections of the Master Presidential Actions Player Aid. <em>Cabinet Members may NOT take actions.</em></p>
      <div class="note-box"><strong>AP / Action Exchange:</strong> You may forego an action to gain <strong>1 AP</strong> (e.g., 1 action + 1 forgone = +1 AP).</div>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type before end of this Segment.</p>
    `
  },

  {
    id: 19,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "Legislative Segment",
    subtitle: "10-step legislative procedure: support, pass bills, introduce new ones",
    ref: ["GM P8", "GM P23-24"],
    body: `
      <ol>
        <li><strong>Determine Support/Opposition.</strong> Total Friends' vs. Opponents' Legislative Ratings (cap ±3). Move bills on the Pending Bills Track accordingly.</li>
        <li><strong>Attempt to Pass Pending Bills.</strong> Check Bipartisan Cooperation for number of attempts. Roll d6 with DRM from the bill's current box — on modified 1–3, the bill passes.</li>
        <li><strong>Determine Bill Quality.</strong> For any passed bill, roll on Effects of Passed Legislation Table (D5). Place in Passed Legislation Box and implement effects (unless vetoed).</li>
        <li><strong>Add Legislative Friends or Opponents.</strong> If a Landmark bill is passed, add a new Friend (your bill) or Opponent (Opponent's bill).</li>
        <li><strong>"How the Sausage is Made."</strong> Roll on Congressional Maneuvering & Drama Table (D6).</li>
        <li><strong>Introduce New Bill(s).</strong> Remove bills in "Cannot Be Passed" box → Unused Bills. Remove any of YOUR bills you choose. Introduce new bills per Bipartisan Cooperation box number.</li>
        <li><strong>Adjust Public Approval & Media Relations.</strong> Net Media Ratings of Friends minus Opponents → adjust PA (max ±3 boxes). Adjust Media Relations ±1 if PA moved ±3.</li>
        <li><strong>Scandal Investigations.</strong> Roll d6 for each Scandal (starting at Concluding Scandal box) on Scandal Table (D14).</li>
        <li><strong>Adjust Bipartisan Cooperation.</strong> More Moderates than Radicals → move right one box. More Radicals → move left one box.</li>
        <li><strong>Legislative Momentum.</strong> For each of YOUR bills passed and signed, perform one immediate Action of any type.</li>
      </ol>
    `
  },

  {
    id: 20,
    phase: "phase1",
    phaseName: "Activation Phase 1 (& 3)",
    title: "1 Action for POTUS & Each Cabinet Member",
    subtitle: "Activation Phase 3 ONLY — Skip if this is Phase 1",
    ref: ["GM P8", "GM P16"],
    body: `
      <div class="turn-note">⛔ <strong>ONLY performed in Activation Phase 3.</strong> Skip entirely if this is Activation Phase 1.</div>
      <p><strong>POTUS</strong> may perform <strong>one action</strong> from any Master Actions Player Aid, OR remove a Tensions Counter (including Russia or China), OR exchange for 1 AP.</p>
      <div class="note-box">Actions allowed only once per Activation Phase may NOT be attempted here.</div>
      <p><strong>Each Cabinet Member</strong> may perform one eligible action (in any order):</p>
      <ul>
        <li>VP & Sec State → Diplomatic Action</li>
        <li>VP & Chief of Staff → Domestic Action</li>
        <li>Sec Def → Military Action</li>
        <li>Any Cabinet Member → remove one Tensions Counter (NOT from China or Russia)</li>
      </ul>
      <p>Cabinet Members with <strong>"+1 Action"</strong> may perform an additional action. Rotate their counter 90° when done.</p>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type.</p>
      <div class="alert-box">✅ Activation Phase 1 (or 3) is now complete. Continue to either Phase 2 or Phase 4.</div>
    `
  },

  /* ══════════════════════════════════════════
     ACTIVATION PHASES 2 & 4  (Steps 21–27)
  ══════════════════════════════════════════ */

  {
    id: 21,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Draw One Crisis Chit",
    subtitle: "Identical procedure as in Phases 1 & 3",
    ref: ["GM P9"],
    body: `
      <p>Draw 1 Crisis Chit, perform its indicated action, then place it on the "Draw One Chit" space of the Turn Sequence.</p>
      <p>Possible effects include:</p>
      <ul>
        <li><strong>Draw Crisis Card(s)</strong> — resolve one at a time</li>
        <li><strong>Domestic Crisis</strong> — roll d10 on D9 (Domestic Charts Booklet)</li>
        <li><strong>Regional Summit</strong> — see WD2; optionally spend 1–2 AP before rolling</li>
        <li><strong>Random Regional Crisis</strong> — roll d10 for region, +1 to Regional Crisis (check for MAJOR CRISIS → WD1)</li>
        <li><strong>Cascading Event 2</strong> — shuffle & draw from 2-Deck; apply "From the 2 Deck"; place in 3-Deck</li>
        <li><strong>Cascading Event 3</strong> — shuffle & draw from 3-Deck; apply "From the 3 Deck"; place in Discard</li>
        <li><strong>Good Times!</strong> — roll d10 on Good Times Table (D15)</li>
        <li><strong>NSA 2</strong> — draw top 2 Crisis Cards, remove 1 permanently, reshuffle 1</li>
        <li><strong>Russia Acts (2) / China Acts (2)</strong> — only if at Posture 2</li>
      </ul>
      <div class="alert-box"><strong>Multiple Chits:</strong> (+) sign → draw another chit. Maximum 3 chits total.</div>
    `
  },

  {
    id: 22,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Ally / Rogue Group Acts",
    subtitle: "Randomly draw one of the four Ally Chits to activate a group",
    ref: ["GM P34-35", "WA1–WA4"],
    body: `
      <p>Randomly draw one of the <strong>four Ally Chits</strong> to determine which group activates.</p>
      <p>Refer to the applicable <strong>Ally and Rogue Nation Action Chart (WA1–WA4)</strong> and follow its instructions.</p>
      <p>Place the drawn Ally Chit on this Activation Segment space as a reminder.</p>
    `
  },

  {
    id: 23,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Any 3 Actions — POTUS Only",
    subtitle: "Take a mix of any 3 Domestic, Diplomatic, Military, or Presidential actions",
    ref: ["GM P8", "GM P16"],
    body: `
      <p>Take a mix of any <strong>3</strong> actions from the Master Actions Charts (Domestic, Diplomatic, Military, Presidential). <em>Cabinet Members may NOT take any actions.</em></p>
      <div class="note-box"><strong>AP / Action Exchange:</strong> Forego one or more actions to gain <strong>1 AP each</strong>.</div>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type.</p>
    `
  },

  {
    id: 24,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Resolve Terror Acts or Chaos",
    subtitle: "Roll d10: 1–5 = Terror Acts Procedure; 6–10 = Chaos Procedure",
    ref: ["GM P38"],
    body: `
      <p>Roll 1 d10:</p>
      <ul>
        <li><strong>1–5:</strong> Resolve <strong>Terror Acts Procedure</strong></li>
        <li><strong>6–10:</strong> Resolve <strong>Chaos Procedure</strong></li>
      </ul>
      <h3>Terror Acts Procedure</h3>
      <ul>
        <li>Increase Regional Crises in every region with 1+ Rogue State counters by one box.</li>
        <li><em>Consolidation:</em> In each Region with 2+ Lvl 1 Terror Groups, remove two and replace with one Lvl 2 Terror Group (place on lower Intel Track box if applicable).</li>
        <li>Roll d10 on the <strong>Terror Acts Table</strong> (DRM: +1 per Lvl 3 or 4 Terror Group on board; max +3).</li>
        <li>If any Rogue State is on the board, roll d10 again: 1–4 = export to Eurozone; 5–8 = to CONUS; 9 = Russia (−1 AP); 10 = China (−1 AP).</li>
      </ul>
      <h3>Chaos Procedure</h3>
      <ul>
        <li>Increase the Conflict Status Track for a random conflict by one box. If it causes War, set it up and make an initial War Progress Check (WM5).</li>
        <li>Roll d10: 1–3 = draw new Cascading Event (apply "C" result, place in 2-Deck); 4–7 = roll on International Chaos Table; 8–10 = Domestic Chaos.</li>
      </ul>
    `
  },

  {
    id: 25,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Core Support",
    subtitle: "Adjust Public Approval toward 40% based on Core Support number",
    ref: ["GM P20"],
    body: `
      <p>Adjust Public Approval according to your <strong>Core Support</strong> number:</p>
      <ul>
        <li><strong>If PA > 40%:</strong> Move PA <em>down</em> a number of boxes equal to Core Support, or until you reach 40%.</li>
        <li><strong>If PA < 40%:</strong> Move PA <em>up</em> a number of boxes equal to Core Support, or until you reach 40%.</li>
      </ul>
    `
  },

  {
    id: 26,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Perform Focused National Intelligence (FNI)",
    subtitle: "Roll d10 for each region with a FNIC counter",
    ref: ["GM P41"],
    body: `
      <p>Roll a d10 on the <strong>Focused National Intelligence Collection Table</strong> for each region with a FNIC counter.</p>
      <p><strong>DRMs (max ±2):</strong></p>
      <ul>
        <li>−1 if US Strategic Recon/Intel Capability > both Russia's and China's</li>
        <li>−1 if US Space Warfare Capability > both Russia's and China's</li>
        <li>+1 if Russia or China has influence in the region AND their Space Warfare > US</li>
      </ul>
      <h3>Results</h3>
      <ul>
        <li><strong>2 or less:</strong> Move Lvl 3/2/1 Terror Group (priority) to "Targeting" box. Any remaining → to "Gathering" box. War effects: +2 strength to US/Ally, or Broker Peace Talks (UN) with −2 DRM.</li>
        <li><strong>3–5:</strong> Move Lvl 3/2/1 Terror Group to "Locating" box. Any remaining → "Gathering" box. War effects: +1 strength, or Broker Peace Talks with −1 DRM.</li>
        <li><strong>6–8:</strong> Move Lvl 3/2/1 Terror Group to "Locating" box.</li>
        <li><strong>9+:</strong> Move Lvl 3/2/1 Terror Group to "Gathering" box only.</li>
      </ul>
      <div class="note-box">You may move FNIC counters to new regions after resolving. If using intel to help an Ally in War, you may automatically improve that Ally Relationship by one level (if < "Very Close").</div>
    `
  },

  {
    id: 27,
    phase: "phase2",
    phaseName: "Activation Phase 2 (& 4)",
    title: "Perform Any 4 Diplomatic and/or Military Actions",
    subtitle: "POTUS only — choose from Diplomatic and/or Military Master Actions",
    ref: ["GM P8", "GM P16"],
    body: `
      <p>Perform <strong>4 actions total</strong> from:</p>
      <ul>
        <li>Master Diplomacy Actions Chart Player Aid</li>
        <li>Master Military Actions Chart Player Aid</li>
        <li>"Diplomatic"/"Any" sections of the Master Presidential Action Chart</li>
      </ul>
      <p><em>Cabinet Members may NOT take any actions in this segment.</em></p>
      <div class="note-box"><strong>AP / Action Exchange:</strong> Forego actions to gain <strong>1 AP each</strong> (e.g., 2 actions + 2 forgone = +2 APs).</div>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type.</p>
      <div class="alert-box">✅ Activation Phase 2 (or 4) is now complete.<br>• After Phase 2 → return to Phase 1/3 page and perform Phase 3.<br>• After Phase 4 → proceed to Final Activations.</div>
    `
  },

  /* ══════════════════════════════════════════
     FINAL ACTIVATIONS  (Steps 28–36)
  ══════════════════════════════════════════ */

  {
    id: 28,
    phase: "final",
    phaseName: "Final Activations",
    title: "US State of Economy Impact (Final)",
    subtitle: "Economic Assistance & SoE Effects — same as earlier but in Final Activations",
    ref: ["GM P27"],
    body: `
      <h3>1. Economic Assistance</h3>
      <p>Perform the number of Economic Assistance acts shown on the box to the left of the Current SoE counter.</p>
      <p>For each Economic Assistance, either:</p>
      <ul>
        <li>Improve an Ally Relationship by one level, <strong>OR</strong></li>
        <li>Place a "Trending Pro-US" counter in one of the 8 World Regions.</li>
      </ul>
      <h3>2. Apply SoE Effects</h3>
      <p>Update the game state as noted to the right of the Current SoE counter — potentially gaining/losing Public Approval, APs, Relations with Congress, and/or losing a Friend.</p>
    `
  },

  {
    id: 29,
    phase: "final",
    phaseName: "Final Activations",
    title: "Draw One Crisis Chit (Final)",
    subtitle: "Begin Final Activations — draw up to 3 chits if (+) signs",
    ref: ["GM P9"],
    body: `
      <p>Draw 1 Crisis Chit, perform its indicated action, then place it on the "Draw One Chit" space.</p>
      <p>All standard Crisis Chit effects apply (Crisis Cards, Domestic Crisis, Regional Summit, Random Regional Crisis, Cascading Events, Good Times!, NSA 2, Russia/China Acts (2)).</p>
      <div class="alert-box"><strong>Multiple Chits:</strong> (+) sign → draw another chit. Maximum 3 chits total.</div>
    `
  },

  {
    id: 30,
    phase: "final",
    phaseName: "Final Activations",
    title: "Perform Three Domestic Actions (Final)",
    subtitle: "POTUS only — 3 Domestic or Presidential actions",
    ref: ["GM P8", "GM P16"],
    body: `
      <p>Perform any <strong>3 actions</strong> from the Master Domestic Actions Chart Player Aid or the "Domestic"/"Any" sections of the Master Presidential Action Chart. <em>Cabinet Members may NOT take actions.</em></p>
      <div class="note-box"><strong>AP / Action Exchange:</strong> Forego actions to gain <strong>1 AP each</strong>.</div>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type.</p>
    `
  },

  {
    id: 31,
    phase: "final",
    phaseName: "Final Activations",
    title: "Draw One Crisis Chit (Final — 2nd)",
    subtitle: "Second Crisis Chit draw of the Final Activations",
    ref: ["GM P9"],
    body: `
      <p>Draw 1 Crisis Chit and resolve as normal. All standard effects apply.</p>
      <div class="alert-box"><strong>Multiple Chits:</strong> (+) sign → draw another chit. Maximum 3 chits total.</div>
    `
  },

  {
    id: 32,
    phase: "final",
    phaseName: "Final Activations",
    title: "Ally / Rogue Group Acts (Final)",
    subtitle: "Randomly draw one of the four Ally Chits",
    ref: ["GM P34-35", "WA1–WA4"],
    body: `
      <p>Randomly draw one of the <strong>four Ally Chits</strong> to activate a group.</p>
      <p>Refer to the applicable <strong>Ally and Rogue Nation Action Chart (WA1–WA4)</strong> and follow its instructions.</p>
      <p>Place the drawn Ally Chit on this Activation Segment space as a reminder.</p>
    `
  },

  {
    id: 33,
    phase: "final",
    phaseName: "Final Activations",
    title: "The UN Acts Segment",
    subtitle: "4 mandatory UN actions; optionally 2 US-Initiated UN actions",
    ref: ["GM P35"],
    body: `
      <h3>Mandatory UN Actions</h3>
      <ol>
        <li><strong>Humanitarian Aid:</strong> Roll d10 — 1–8: −1 Regional Crisis in region with highest crisis level.</li>
        <li><strong>Infrastructure Aid:</strong> Roll d10 — 1–5: +1 Stability in region with lowest stability.</li>
        <li><strong>Youth Empowerment:</strong> Roll d10 — 1–5: decrease one Lvl 2 or 3 Terror Group in lowest-stability region by one level.</li>
        <li><strong>Civil War Peace Talks:</strong> Roll on Broker Peace Table (WM4) for Civil War or CW Ceasefire in lowest-stability region with such a counter.</li>
      </ol>
      <div class="note-box">You cannot spend APs or UN Goodwill counters for DRMs on mandatory UN actions.</div>
      <h3>Optional: Up to 2 US-Initiated UN Actions</h3>
      <p>Spend 1 AP or 1 UN Goodwill counter = 1 US-Initiated action. If performing 2, one must be AP and one must be a Goodwill counter; cannot perform the same action twice.</p>
      <ul>
        <li>Spending 1 AP → −1 DRM to the roll</li>
        <li>Spending a Goodwill counter → flip it; use the number shown as DRM</li>
      </ul>
      <p>Available US-Initiated actions: Humanitarian Aid, Youth Empowerment, Sanctions, Arms Control Negotiations, De-Escalate, Broker Peace in Major War.</p>
    `
  },

  {
    id: 34,
    phase: "final",
    phaseName: "Final Activations",
    title: "Media Check",
    subtitle: "Apply Public Approval benefit or penalty based on Media Relations",
    ref: ["GM P27"],
    body: `
      <p>Check your <strong>Media Relations</strong> and apply any Public Approval benefit or penalty as listed on your current Media Relations box.</p>
    `
  },

  {
    id: 35,
    phase: "final",
    phaseName: "Final Activations",
    title: "Perform War Progress for Wars & Civil Wars",
    subtitle: "Resolve each current War and Civil War",
    ref: ["GM P46-47", "WM5 (p.16 WCB)", "WM4 (p.15 WCB)"],
    body: `
      <p>For each current <strong>War</strong>: use the War Status Sideboard and resolve progress of the War (see WM5).</p>
      <p>For each current <strong>Civil War</strong> (or Civil War Ceasefire): roll d10 on the Civil War Resolution / Broker Peace Table.</p>
      <p>Civil War DRMs:</p>
      <ul>
        <li>−1 if you spent 1 AP on that specific Civil War</li>
        <li>−2 (Ceasefire column only) if UN Peacekeepers counter is present</li>
        <li>+1 if Regional Stability < 5</li>
        <li>+1 if Iranian Influence (+1) counter is beneath the Civil War</li>
      </ul>
    `
  },

  {
    id: 36,
    phase: "final",
    phaseName: "Final Activations",
    title: "Perform Any 4 Diplomatic and/or Military Actions (Final)",
    subtitle: "POTUS only — last major action window of the turn",
    ref: ["GM P8", "GM P16"],
    body: `
      <p>Perform <strong>4 actions total</strong> from the Master Diplomacy or Military Actions Charts (or Presidential "Diplomatic"/"Any" sections). <em>Cabinet Members may NOT act.</em></p>
      <div class="note-box"><strong>AP / Action Exchange:</strong> Forego actions to gain <strong>1 AP each</strong>.</div>
      <p>You may spend <span class="ap-chip">2 AP</span> to take one additional Action of any type.</p>
    `
  },

  {
    id: 37,
    phase: "final",
    phaseName: "Final Activations",
    title: "End Turn Roll — Final Crisis?",
    subtitle: "Roll d10 to determine if there is one final Crisis Chit",
    ref: ["GM P9"],
    body: `
      <p>Roll d10:</p>
      <ul>
        <li><strong>1–4:</strong> End Turn immediately. Proceed to <strong>End of Turn Clean-Up & Consequences</strong>.</li>
        <li><strong>5–10:</strong> Draw one Crisis Chit and follow its instructions, then proceed to <strong>End of Turn Clean-Up & Consequences</strong>.</li>
      </ul>
    `
  },

  /* ══════════════════════════════════════════
     END OF TURN CLEAN-UP & CONSEQUENCES
  ══════════════════════════════════════════ */

  {
    id: 38,
    phase: "endturn",
    phaseName: "End of Turn",
    title: "End of Turn Clean-Up",
    subtitle: "Reset crisis chits, ally chits, bills, and relations tracks",
    ref: ["GM P24"],
    body: `
      <ul>
        <li>Place Russia Acts (2) / China Acts (2) chits in the extra actions box if the Peer is at Posture 1. Return all other Crisis chits to the draw cup.</li>
        <li>Flip the four Ally/Rogue group (A–D) counters, randomize, and place letter-side down in the four Ally/Rogue holding boxes.</li>
        <li>Remove any "Can't increase this Turn" counters from Nuclear/Missile tracks.</li>
        <li>Move all bills in "Passed and Signed Bills this Turn" box → Unused Bills box.</li>
        <li>Place a <strong>Trending Anti-US</strong> counter on both Russia's and China's US Relations Track (relationship degrades over time).</li>
        <li>Adjust Public Priorities: move counters up to fill blank spaces, then randomly draw from the cup to fill any remaining blanks.</li>
        <li>You may re-order your Administrative Legislative Priorities as you wish.</li>
      </ul>
    `
  },

  {
    id: 39,
    phase: "endturn",
    phaseName: "End of Turn",
    title: "End of Turn Consequences",
    subtitle: "16-step consequences sequence — stability, terror, wars, elections",
    ref: ["GM P24-26"],
    body: `
      <ol>
        <li><strong>Regional Stability Impact on Terror Groups.</strong> For each of the 8 regions, check stability and adjust Terror Groups, Unstable States, and Rogue States accordingly (Stability 7–8 reduces; 3–6 adds groups).</li>
        <li><strong>Terrorist Recruiting/Planning.</strong> 2 random regions → increase Lvl 1 Terror Group to Lvl 2 (or add new). Then Homeland Security Check — if failed, add Lvl 1 Terror Group in CONUS and add new Terrorism Card to Crisis Deck.</li>
        <li><strong>Rogue State Impact and Recruiting.</strong><br>
          a. Rogue State 4 on board → <strong>AUTO-LOSS</strong>.<br>
          b. Rogue State 2/3 → −1 Regional Stability, +1 highest Terror Group.<br>
          c. Rogue State 1 → +1 Regional Crisis.<br>
          d. No Rogue States anywhere → +1 World Opinion, +2 UN Goodwill, +3 PA, improve one Ally.<br>
          e. Recruiting: randomly select one Rogue State, roll d10 (1–5 = success = increase by 1 level).<br>
          f. Remove "-1 AP" from all game-created Rogue States.</li>
        <li><strong>War Effects.</strong> Each US War → place "Worsening Economy" counter on SoE. Unless War Status is "US Winning", −2 PA. Each Civil War (not Ceasefire) → +1 Regional Crisis in its region.</li>
        <li><strong>Unexpected Consequences of US Military Footprint.</strong> Flip each footprint counter and apply result. Then place new footprint counters for non-Intel/Air/SoF US Military units in each region.</li>
        <li><strong>Good Governments and Improving Stability.</strong> Check each region's crisis rating and counters for potential stability increases or tension/terror reductions.</li>
        <li><strong>EU Economic Stability.</strong> Eurozone SoE 6+ → +1 Stability; SoE 3–4 → −1 Stability.</li>
        <li><strong>An Agent for Peace?</strong> If no US/Ally Wars, ≤2 Civil Wars, and 3+ UN Goodwill counters → Nobel Peace Prize or Agent of Peace award.</li>
        <li><strong>Changing World Opinion of the US.</strong> Check region Alignment Ratings → potentially +/− World Opinion.</li>
        <li><strong>Effects of Trade Agreements.</strong> Roll on Trade Agreement Table (WD4) for each Trade Agreement counter. Then check if agreement continues.</li>
        <li><strong>Campaign Promise.</strong> If no legislation fulfilled your Campaign Promise this year → −2 PA, −1 Party Relations.</li>
        <li><strong>Congressional Reaction to PA.</strong> PA 60%+ → +1 RWC, draw new Friend. PA below 40% → −1 RWC, draw new Opponent.</li>
        <li><strong>Credible Threat.</strong> If Russia/China has higher Strategic Missiles/Missile Defense than US → −1 Homeland Security.</li>
        <li><strong>Harder Difficulty Only — Yearly Penalties.</strong> Varied by year (−RWC, −PA, possible cabinet resignation).</li>
        <li><strong>Harder Difficulty Only — Peer Capability Increases.</strong> Years 2–3: increase one random Strategic Capability per Peer; add one Russia/China Influence counter to map.</li>
        <li><strong>Add New Year Deck and Reshuffle.</strong> If not end of Turn 4: add next Year Deck, randomly remove half of Reshuffle Pile, shuffle all into new Crisis Deck.</li>
      </ol>
    `
  },

  {
    id: 40,
    phase: "endturn",
    phaseName: "End of Turn",
    title: "Presidential Performance Evaluation",
    subtitle: "Score your presidency — auto-victories and auto-losses apply",
    ref: ["GM P26"],
    body: `
      <p>Total the values of your five main tracks:</p>
      <ul>
        <li>Public Approval (value at top left)</li>
        <li>Relations with Congress</li>
        <li>Relations with Media</li>
        <li>State of the Economy</li>
        <li>Homeland Security</li>
      </ul>
      <p>Then <strong>subtract 1</strong> for each:</p>
      <ul>
        <li>Region with Regional Alignment of 4 or less</li>
        <li>Rogue State counter (any level) on the board</li>
        <li>Ally with Relationship worse than "Very Close"</li>
        <li>Peer (Russia/China) with US Relations 2 or less</li>
      </ul>
      <h3>Results</h3>
      <ul>
        <li><strong>35+:</strong> Auto Victory (on Normal/Harder or Turn 1: treat as 30–34)</li>
        <li><strong>30–34:</strong> +2 Legacy Points, +1 Presidential Prestige, +3 PA</li>
        <li><strong>26–29:</strong> +1 Legacy Point, +1 PA</li>
        <li><strong>22–25:</strong> No impact</li>
        <li><strong>17–21:</strong> −1 Legacy Point, −1 PA</li>
        <li><strong>16 or less:</strong> <strong>AUTO-LOSS</strong></li>
      </ul>
      <div class="alert-box">🔄 If end of Turn 1 or 3 → begin a new turn. | If end of Turn 2 → Midterm Elections. | If end of Turn 4 → Re-Election.</div>
    `
  }

];

// ─── PHASE METADATA ──────────────────────────────────────────────

const PHASE_INFO = {
  special:  { name: "US Special Activations", key: "special" },
  phase1:   { name: "Activation Phase 1 & 3", key: "phase1" },
  phase2:   { name: "Activation Phase 2 & 4", key: "phase2" },
  final:    { name: "Final Activations",       key: "final"  },
  endturn:  { name: "End of Turn",             key: "final"  }
};

const PHASE_ORDER = ["special", "phase1", "phase2", "phase3", "phase4", "final"];

// Map step phases to progress bar phases
function stepToProgressPhase(step) {
  const p = step.phase;
  if (p === "special") return "special";
  if (p === "phase1")  return step.id <= 20 ? "phase1" : "phase3";
  if (p === "phase2")  return step.id <= 27 ? "phase2" : "phase4";
  if (p === "final" || p === "endturn") return "final";
  return "special";
}

// ─── STATE ───────────────────────────────────────────────────────

let currentStep = 0;   // index into TURN_SEQUENCE
let currentTurn = 1;   // 1–4

// ─── RENDER ──────────────────────────────────────────────────────

function render() {
  const step = TURN_SEQUENCE[currentStep];

  // Header turn
  document.getElementById("turnDisplay").textContent = currentTurn;
  document.getElementById("overviewYear").textContent = currentTurn;

  // Phase badge
  const phaseKey = step.phase === "endturn" ? "final" : step.phase;
  document.getElementById("phaseBadge").textContent = step.phaseName.toUpperCase();
  document.querySelector(".card-wrapper").setAttribute("data-phase", phaseKey);

  // Card
  document.getElementById("cardNumber").textContent = String(step.id).padStart(2, "0");

  // Re-animate card
  const card = document.getElementById("sequenceCard");
  card.style.animation = "none";
  card.offsetHeight; // reflow
  card.style.animation = "";

  document.getElementById("cardTitle").textContent = step.title;
  document.getElementById("cardSubtitle").textContent = step.subtitle || "";
  document.getElementById("cardBody").innerHTML = step.body;

  // References
  const refEl = document.getElementById("cardRef");
  if (step.ref && step.ref.length) {
    refEl.innerHTML = "📖 " + step.ref.map(r => `<span>${r}</span>`).join(" ");
  } else {
    refEl.innerHTML = "";
  }

  // Progress bar
  const pct = ((currentStep) / (TURN_SEQUENCE.length - 1)) * 100;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("stepCurrent").textContent = currentStep + 1;
  document.getElementById("stepTotal").textContent = TURN_SEQUENCE.length;

  // Phase labels
  const progressPhase = stepToProgressPhase(step);
  document.querySelectorAll(".phase-label").forEach(el => {
    el.classList.toggle("active", el.dataset.phase === progressPhase);
  });

  // Nav buttons
  document.getElementById("btnPrev").disabled = currentStep === 0;
  document.getElementById("btnNext").disabled = currentStep === TURN_SEQUENCE.length - 1;

  // Turn controls
  document.getElementById("btnTurnPrev").disabled = currentTurn <= 1;
  document.getElementById("btnTurnNext").disabled = currentTurn >= 4;
}

// ─── NAVIGATION ──────────────────────────────────────────────────

function navigate(dir) {
  const next = currentStep + dir;
  if (next < 0 || next >= TURN_SEQUENCE.length) return;
  currentStep = next;
  render();
  // Scroll card into view on mobile
  document.getElementById("sequenceCard").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetToStep(idx) {
  currentStep = idx;
  render();
}

function changeTurn(dir) {
  const next = currentTurn + dir;
  if (next < 1 || next > 4) return;
  currentTurn = next;
  currentStep = 0;
  render();
}

// ─── OVERVIEW PANEL ──────────────────────────────────────────────

function toggleOverview() {
  const backdrop = document.getElementById("overviewBackdrop");
  const panel    = document.getElementById("overviewPanel");
  const isOpen   = panel.classList.contains("open");

  if (isOpen) {
    panel.classList.remove("open");
    backdrop.classList.remove("open");
  } else {
    buildOverview();
    panel.classList.add("open");
    backdrop.classList.add("open");
  }
}

function buildOverview() {
  const list = document.getElementById("overviewList");
  list.innerHTML = "";

  TURN_SEQUENCE.forEach((step, idx) => {
    const div = document.createElement("div");
    div.className = "overview-item" +
      (idx === currentStep ? " current" : "") +
      (idx < currentStep ? " done" : "");

    const phaseShort = {
      special: "Special",
      phase1:  idx <= 19 ? "Phase 1" : "Phase 3",
      phase2:  idx <= 26 ? "Phase 2" : "Phase 4",
      final:   "Final",
      endturn: "End Turn"
    }[step.phase] || step.phase;

    div.innerHTML = `
      <span class="ov-num">${String(step.id).padStart(2, "0")}</span>
      <span class="ov-phase">${phaseShort}</span>
      <span class="ov-title">${step.title}</span>
    `;

    div.addEventListener("click", () => {
      currentStep = idx;
      render();
      toggleOverview();
    });

    list.appendChild(div);
  });

  // Scroll current item into view
  const currentEl = list.querySelector(".current");
  if (currentEl) currentEl.scrollIntoView({ block: "center" });
}

// ─── KEYBOARD ────────────────────────────────────────────────────

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); navigate(1); }
  if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   { e.preventDefault(); navigate(-1); }
  if (e.key === "Escape") {
    const panel = document.getElementById("overviewPanel");
    if (panel.classList.contains("open")) toggleOverview();
  }
});

// ─── INIT ────────────────────────────────────────────────────────

render();
