// ============================================
// STORY: "The Paper City"
// 67s vertical | 2D chars in 3D world | Same pipeline
// ============================================

export const PAPER_CITY_STORY = {
  title: "The Paper City",
  duration: 67,
  fps: 30,
  totalFrames: 2001,

  beats: [
    { id: 'dawn', startFrame: 0, endFrame: 200, desc: 'Sun rises - paper city unfolds from flat sheets' },
    { id: 'life', startFrame: 200, endFrame: 500, desc: 'Paper citizens fold into being - origami lives' },
    { id: 'rain', startFrame: 500, endFrame: 800, desc: 'Ink rain falls - colors bleed, stories smudge' },
    { id: 'fire', startFrame: 800, endFrame: 1200, desc: 'Spark catches - edges curl, ash becomes snow' },
    { id: 'rebuild', startFrame: 1200, endFrame: 1500, desc: 'From ash, new folds rise - stronger, brighter' },
    { id: 'flight', startFrame: 1500, endFrame: 1800, desc: 'Paper birds carry city skyward, page by page' },
    { id: 'eternal', startFrame: 1800, endFrame: 2001, desc: 'Infinite library - every fold a story, forever' },
  ],

  characters: [
    {
      id: 'scribe',
      name: 'The Architect',
      type: 'paper_human',
      spriteSheets: [
        'scribe_idle', 'scribe_fold', 'scribe_write', 'scribe_walk',
        'scribe_sad', 'scribe_hope', 'scribe_fly', 'scribe_create'
      ],
      height: 1.75,
      paperType: 'heavy_cream_laid',
      inkColor: '#1a1a2e',
      tools: ['bone_folder', 'ruler_steel', 'ink_brush', 'ink_bottle_blue'],
    },
    {
      id: 'girl_kite',
      name: 'Lina',
      age: 10,
      spriteSheets: [
        'girl_idle', 'girl_run', 'girl_kite_hold', 'girl_look_up',
        'girl_laugh', 'girl_fold', 'girl_fly'
      ],
      paperType: 'light_cream_wove',
      inkColor: '#ff6b35',
      kite: { material: 'tissue_paper_gold', string: 'silk_thread' },
    },
    {
      id: 'old_folder',
      name: 'Master Ori',
      age: 88,
      spriteSheets: [
        'master_idle', 'master_fold', 'master_teach', 'master_smile',
        'master_bow', 'master_ascend'
      ],
      paperType: 'ancient_rice_paper',
      inkColor: '#0d0d1a',
      aura: 'soft_gold_glow',
    },
    {
      id: 'paper_birds',
      type: 'flock',
      count: 50,
      spriteSheets: ['bird_fold', 'bird_flight', 'bird_glide', 'bird_unfold'],
      paperTypes: ['tissue_white', 'tissue_gold', 'tissue_blue', 'tissue_red'],
      behaviors: ['flock', 'spiral', 'carry', 'form_shapes'],
    },
  ],

  world: {
    city: {
      districts: [
        { name: 'origami_quarter', style: 'geometric_sharp', color: '#ffffff' },
        { name: 'watercolor_ward', style: 'soft_bleed', color: '#8ab4d8' },
        { name: 'ink_district', style: 'bold_strokes', color: '#0d0d1a' },
        { name: 'gold_leaf', style: 'gilded_edges', color: '#ffd700' },
      ],
      architecture: {
        buildings: 'folded_not_built',
        streets: 'creased_paths',
        bridges: 'folded_spans',
        parks: 'paper_cranes_trees',
      },
      dayNight: {
        paperSun: { material: 'gold_foil', rays: 'creased_beams' },
        paperMoon: { material: 'silver_foil', glow: 'soft_pearlescent' },
        cycle: 2001, // frames per day
      },
    },
    weather: {
      inkRain: { color: '#1a1a2e', viscosity: 'ink', effect: 'bleed_stories' },
      goldSnow: { material: 'gold_leaf', accumulation: 'gilded_edges' },
      tissueWind: { effect: 'flutter_pages', sound: 'paper_rustle' },
      origamiStorm: { intensity: 'hurricane', debris: 'flying_folds' },
    },
    library: {
      location: 'city_center',
      structure: 'infinite_spiral_fold',
      floors: 'infinite',
      books: {
        format: 'single_sheet_folded',
        content: 'every_life_a_page',
        infinite: true,
      },
      stairs: 'folded_steps_ascending_forever',
    },
  },

  shots: [
    { id: 1, beat: 'dawn', frames: [0, 200], type: 'city_unfold', desc: 'Flat sheets rise - towers fold into place' },
    { id: 2, beat: 'dawn', frames: [150, 250], type: 'scribe_pov', desc: 'Bone folder creases first street' },
    { id: 3, beat: 'life', frames: [200, 500], type: 'street_wide', desc: 'Paper citizens fold into being' },
    { id: 4, beat: 'life', frames: [400, 500], type: 'kite_girl', desc: 'Girl flies gold kite - lifts whole block' },
    { id: 5, beat: 'rain', frames: [500, 650], type: 'ink_rain_start', desc: 'First ink drop falls - story bleeds' },
    { id: 6, beat: 'rain', frames: [650, 800], type: 'rain_montage', desc: 'Colors run, edges blur, stories merge' },
    { id: 7, beat: 'fire', frames: [800, 1000], type: 'spark_catch', desc: 'Ember lands - corner curls, ash snow falls' },
    { id: 8, beat: 'fire', frames: [1000, 1200], type: 'burn_montage', desc: 'Edges curl inward, stories burn bright' },
    { id: 9, beat: 'rebuild', frames: [1200, 1350], type: 'ash_to_fold', desc: 'From ash - new folds rise, stronger' },
    { id: 10, beat: 'rebuild', frames: [1350, 1500], type: 'rebuild_montage', desc: 'Streets re-crease, towers re-fold taller' },
    { id: 11, beat: 'flight', frames: [1500, 1650], type: 'birds_carry', desc: 'Paper birds lift buildings page by page' },
    { id: 12, beat: 'flight', frames: [1650, 1800], type: 'skyward', desc: 'City ascends - pages flutter like wings' },
    { id: 13, beat: 'eternal', frames: [1800, 1900], type: 'library_entry', desc: 'Enters infinite library - every fold a life' },
    { id: 14, beat: 'eternal', frames: [1900, 2001], type: 'infinite_spiral', desc: 'Ascends spiral - every fold a story, forever' },
  ],

  postProcessing: {
    inkPass: { enabled: true, lineWidth: 1.0, color: '#0d0d1a', feather: 0.5 },
    dof: { enabled: true, focusDistance: 'auto', aperture: 2.0 },
    bloom: { enabled: true, threshold: 0.65, intensity: 0.8, radius: 1.0 },
    toneMapping: 'ACESFilmic',
    colorGrade: {
      lift: [0.01, 0.02, 0.03],
      gamma: [1.02, 1.0, 0.98],
      gain: [1.1, 1.05, 0.95],
      saturation: 1.15,
    },
    filmGrain: { intensity: 0.008, size: 0.8 },
    vignette: { intensity: 0.1, smoothness: 0.8 },
    paperTexture: { enabled: true, opacity: 0.03, scale: 200 },
    chromaticAberration: { enabled: true, intensity: 0.002 },
  },

  audio: {
    ambient: ['paper_rustle_ambient', 'pen_scratch_ambient', 'page_turn_chorus'],
    foley: ['bone_folder_crease', 'paper_tear', 'ink_drop', 'gold_leaf_rustle', 'page_flutter'],
    music: [
      { beat: 'dawn', track: 'paper_theme_unfolding', volume: 0.4 },
      { beat: 'life', track: 'paper_theme_living', volume: 0.5 },
      { beat: 'rain', track: 'paper_theme_ink_rain', volume: 0.5 },
      { beat: 'fire', track: 'paper_theme_burning', volume: 0.6 },
      { beat: 'rebuild', track: 'paper_theme_reborn', volume: 0.7 },
      { beat: 'flight', track: 'paper_theme_ascending', volume: 0.7 },
      { beat: 'eternal', track: 'paper_theme_infinite', volume: 0.6 },
    ],
    leitmotifs: {
      scribe: 'piano_motif_repeating',
      girl: 'violin_motif_soaring',
      birds: 'harp_motif_fluttering',
      city: 'orchestra_motif_grand',
    },
  },
};

export default PAPER_CITY_STORY;