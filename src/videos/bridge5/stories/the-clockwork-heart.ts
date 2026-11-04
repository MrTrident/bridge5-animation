// ============================================
// STORY: "The Clockwork Heart"
// 67s vertical | 2D chars in 3D world | Same pipeline
// ============================================

export const CLOCKWORK_STORY = {
  title: "The Clockwork Heart",
  duration: 67,
  fps: 30,
  totalFrames: 2001,

  beats: [
    { id: 'workshop', startFrame: 0, endFrame: 250, desc: 'Master horologist winds his final creation' },
    { id: 'activation', startFrame: 250, endFrame: 500, desc: 'Key turns - mechanical heart beats to life' },
    { id: 'life', startFrame: 500, endFrame: 900, desc: 'Automaton learns to walk, draw, dream' },
    { id: 'love', startFrame: 900, endFrame: 1300, desc: 'Falls for music box ballerina' },
    { id: 'separation', startFrame: 1300, endFrame: 1500, desc: 'Collector buys ballerina - they part' },
    { id: 'journey', startFrame: 1500, endFrame: 1800, desc: 'Crosses gear cities, gear forests, gear seas' },
    { id: 'reunion', startFrame: 1800, endFrame: 2001, desc: 'Finds her - winds her key, they dance forever' },
  ],

  characters: [
    {
      id: 'automaton',
      name: 'Cogsworth VII',
      type: 'automaton',
      spriteSheets: [
        'auto_idle', 'auto_walk', 'auto_gear_turn', 'auto_draw',
        'auto_sad', 'auto_joy', 'auto_wind_key', 'auto_dance'
      ],
      height: 0.6, // 60cm tall
      materials: {
        body: 'polished_brass_etched',
        joints: 'gold_filigree',
        eyes: 'camera_lens_blue',
        heart: 'ruby_glass_mechanical',
      },
      heart: { rpm: 72, visible: true, glow: '#ff3366' },
    },
    {
      id: 'ballerina',
      name: 'Melodia',
      type: 'automaton',
      spriteSheets: [
        'ballerina_idle', 'ballerina_spin', 'ballerina_pose',
        'ballerina_sad', 'ballerina_joy', 'ballerina_dance'
      ],
      height: 0.55,
      materials: {
        body: 'porcelain_ivory',
        dress: 'silk_organza_gold_thread',
        eyes: 'pearl_blue',
        heart: 'sapphire_glass_mechanical',
      },
      musicBox: { melody: 'waltz_nocturne', volume: 0.4 },
    },
    {
      id: 'maker',
      name: 'Horatio Voss',
      age: 72,
      spriteSheets: ['maker_idle', 'maker_wind', 'maker_tools', 'maker_sad', 'maker_proud'],
      height: 1.72,
      outfit: 'velvet_waistcoat_magnifying_glass',
      tools: ['watchmaker_screwdriver', 'gear_puller', 'mainspring_winder'],
    },
    {
      id: 'collector',
      name: 'Lord Blackwood',
      age: 58,
      spriteSheets: ['collector_idle', 'collector_cane', 'collector_gloves', 'collector_smile'],
      height: 1.83,
      outfit: 'frock_coat_top_hat_monocle',
      aura: 'cold_gold_aura',
    },
  ],

  world: {
    workshop: {
      size: [12, 8, 5],
      style: 'victorian_steampunk',
      clutter: 'organized_chaos',
      items: [
        'gear_walls', 'clock_faces_hundreds', 'tool_cabinets',
        'half_assembled_automata', 'blueprint_tables',
        'oil_lamps', 'magnifying_lamps', 'brass_shavings_floor'
      ],
      lighting: 'warm_gas_lamps_amber',
      dustMotes: true,
    },
    gearCity: {
      districts: [
        { name: 'spire', height: 500, material: 'copper_gold' },
        { name: 'factory', height: 200, material: 'cast_iron_soot' },
        { name: 'market', height: 50, material: 'brass_copper' },
        { name: 'residential', height: 80, material: 'brass_glass' },
      ],
      transport: {
        gearTrains: true,
        pistonElevators: true,
        chainBridges: true,
      },
      sky: {
        color: '#2d1b3d',
        gearsInSky: true, // massive gears turning slowly in clouds
        twinMoons: ['brass', 'silver'],
      },
    },
    gearForest: {
      trees: {
        trunk: 'ironwood_bark',
        leaves: 'gear_sprockets_copper',
        fruit: 'mainspring_coils',
      },
      rivers: {
        liquid: 'mercury_silver',
        banks: 'gear_pebbles',
      },
      creatures: ['gear_birds', 'spring_foxes', 'cog_deer'],
    },
    gearSea: {
      surface: 'molten_copper_waves',
      ships: 'brass_hulls_canvas_sails',
      creatures: ['gear_whales', 'spring_dolphins'],
      horizon: 'gear_teeth_mountains',
    },
    ballerinaTower: {
      height: 400,
      material: 'glass_brass_frame',
      rooms: ['music_chamber', 'dance_hall', 'observatory'],
      windMechanism: { type: 'aeolian_harp', melody: 'eternal_waltz' },
    },
  },

  shots: [
    { id: 1, beat: 'workshop', frames: [0, 250], type: 'workbench_macro', desc: 'Magnifying glass over micro-gears' },
    { id: 2, beat: 'workshop', frames: [200, 300], type: 'maker_pov', desc: 'Inserting ruby heart into brass chest' },
    { id: 3, beat: 'activation', frames: [250, 500], type: 'heart_start', desc: 'Key turns - ruby pulses, eyes open' },
    { id: 4, beat: 'life', frames: [500, 700], type: 'first_steps', desc: 'Clumsy brass walk across workbench' },
    { id: 5, beat: 'life', frames: [700, 900], type: 'learning', desc: 'Drawing gears, learning to dream' },
    { id: 6, beat: 'love', frames: [900, 1100], type: 'meet_cute', desc: 'Sees ballerina in music box - heart races' },
    { id: 7, beat: 'love', frames: [1100, 1300], type: 'duet', desc: 'They dance on gear teeth - magic' },
    { id: 8, beat: 'separation', frames: [1300, 1500], type: 'separation', desc: 'Collector winds ballerina, takes her' },
    { id: 9, beat: 'journey', frames: [1500, 1650], type: 'gear_city', desc: 'Crosses piston bridges, gear trains' },
    { id: 10, beat: 'journey', frames: [1650, 1800], type: 'gear_forest_sea', desc: 'Sails mercury sea, climbs gear mountains' },
    { id: 11, beat: 'reunion', frames: [1800, 1900], type: 'tower_climb', desc: 'Scales glass tower, gears turning' },
    { id: 12, beat: 'reunion', frames: [1900, 2001], type: 'eternal_dance', desc: 'Winds her key - they dance forever in gear starlight' },
  ],

  postProcessing: {
    inkPass: { enabled: true, lineWidth: 1.1, color: '#0a080a' },
    dof: { enabled: true, focusDistance: 'auto', aperture: 1.8 },
    bloom: { enabled: true, threshold: 0.7, intensity: 0.7, radius: 0.8 },
    toneMapping: 'ACESFilmic',
    colorGrade: {
      lift: [0.02, 0.01, 0.03],
      gamma: [1.0, 0.98, 1.02],
      gain: [1.15, 1.08, 0.92],
    },
    filmGrain: { intensity: 0.01, size: 1.0 },
    vignette: { intensity: 0.12, smoothness: 0.7 },
    chromaticAberration: { enabled: true, intensity: 0.003 },
  },

  audio: {
    ambient: ['gear_whir', 'mainspring_hum', 'clock_tick_chorus', 'steam_hiss_subtle'],
    foley: ['gear_mesh', 'mainspring_wind', 'brass_click', 'porcelain_chime', 'silk_rustle'],
    music: [
      { beat: 'workshop', track: 'clockwork_theme_ticking', volume: 0.3 },
      { beat: 'activation', track: 'clockwork_theme_awakening', volume: 0.5 },
      { beat: 'life', track: 'clockwork_theme_discovery', volume: 0.5 },
      { beat: 'love', track: 'clockwork_theme_waltz', volume: 0.6 },
      { beat: 'separation', track: 'clockwork_theme_heartbreak', volume: 0.5 },
      { beat: 'journey', track: 'clockwork_theme_epic', volume: 0.7 },
      { beat: 'reunion', track: 'clockwork_theme_eternal_waltz', volume: 0.6 },
    ],
    leitmotifs: {
      automaton: 'descending_brass_motif',
      ballerina: 'ascending_violin_motif',
      together: 'intertwined_harp_motif',
    },
  },
};

export default CLOCKWORK_STORY;