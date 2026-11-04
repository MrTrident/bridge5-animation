// ============================================
// STORY: "The Last Train to Nowhere"
// 67s vertical | 2D chars in 3D world | Same pipeline
// ============================================

export const TRAIN_STORY = {
  title: "The Last Train to Nowhere",
  duration: 67,
  fps: 30,
  totalFrames: 2001,

  beats: [
    { id: 'boarding', startFrame: 0, endFrame: 200, desc: 'Last passengers board midnight express' },
    { id: 'departure', startFrame: 200, endFrame: 450, desc: 'Train pulls out, station fades to fog' },
    { id: 'passengers', startFrame: 450, endFrame: 800, desc: 'Strangers share stories in dim light' },
    { id: 'tunnel', startFrame: 800, endFrame: 1100, desc: 'Endless tunnel - reality warps' },
    { id: 'memories', startFrame: 1100, endFrame: 1400, desc: 'Windows show passengers past lives' },
    { id: 'destination', startFrame: 1400, endFrame: 1750, desc: 'Train stops at station that doesn\'t exist' },
    { id: 'finale', startFrame: 1750, endFrame: 2001, desc: 'Doors open to blinding light - they step out' },
  ],

  characters: [
    {
      id: 'conductor',
      name: 'Silas',
      age: 'ageless',
      spriteSheets: ['conductor_idle', 'conductor_punch', 'conductor_walk', 'conductor_whistle'],
      height: 1.85,
      outfit: 'vintage_uniform_brass',
      isEternal: true,
    },
    {
      id: 'woman_red',
      name: 'Elena',
      age: 34,
      spriteSheets: ['woman_coat_idle', 'woman_coat_sit', 'woman_coat_look', 'woman_coat_cry'],
      outfit: 'red_trench_coat',
      prop: 'wilted_rose',
    },
    {
      id: 'old_man',
      name: 'Arthur',
      age: 78,
      spriteSheets: ['old_man_idle', 'old_man_cane', 'old_man_glasses', 'woman_coat_look'],
      outfit: 'tweed_suit_pocket_watch',
      prop: 'pocket_watch',
    },
    {
      id: 'young_girl',
      name: 'Mira',
      age: 8,
      spriteSheets: ['child_idle', 'child_sleep', 'child_teddy', 'child_look'],
      outfit: 'yellow_raincoat',
      prop: 'teddy_bear',
    },
    {
      id: 'businessman',
      name: 'David',
      age: 42,
      spriteSheets: ['biz_idle', 'biz_phone', 'biz_briefcase', 'biz_look'],
      outfit: 'charcoal_suit_briefcase',
      prop: 'briefcase',
    },
  ],

  world: {
    train: {
      cars: 7,
      carLength: 26,
      carWidth: 3.2,
      carHeight: 4.1,
      wheelBase: 18,
      couplerLength: 1.5,
      style: '1920s_pullman_luxury',
      materials: {
        exterior: 'dark_green_lacquer_gold_trim',
        windows: 'brass_framed_tinted',
        interior: 'mahogany_velvet_brass',
        lighting: 'brass_sconces_warm_edison',
      },
      locomotive: {
        type: '4-6-2_pacific_steam',
        color: 'midnight_blue_gold_lines',
        smoke: 'volumetric_white_gray',
      },
    },
    track: {
      gauge: 'standard',
      ballast: 'gray_crushed_stone',
      ties: 'weathered_oak',
      fogDensity: 0.15,
    },
    environments: [
      { name: 'station', frames: [0, 250], fog: 0.3, lighting: 'gas_lamps_mist' },
      { name: 'countryside', frames: [250, 600], fog: 0.1, lighting: 'moonlight_silver' },
      { name: 'mountains', frames: [600, 1000], fog: 0.3, lighting: 'storm_dramatic' },
      { name: 'tunnel', frames: [1000, 1200], fog: 0.8, lighting: 'car_interior_warm' },
      { name: 'void', frames: [1200, 1800], fog: 0.5, lighting: 'ethereal_white' },
      { name: 'void_station', frames: [1800, 2001], fog: 0, lighting: 'blinding_pure' },
    ],
    lighting: {
      carInterior: { color: '#ffd700', intensity: 1.2, flicker: 0.02 },
      moonlight: { color: '#88aaff', intensity: 0.3, direction: [-0.3, 0.8, -0.5] },
      tunnelGlow: { color: '#ff6600', intensity: 2.0, pulse: 0.5 },
      voidLight: { color: '#ffffff', intensity: 10.0, bloom: 2.0 },
    },
  },

  shots: [
    { id: 1, beat: 'boarding', frames: [0, 200], type: 'platform_wide', desc: 'Steam hisses, last passengers board' },
    { id: 2, beat: 'boarding', frames: [150, 250], type: 'conductor_close', desc: 'Conductor punches ticket - no destination printed' },
    { id: 3, beat: 'departure', frames: [200, 450], type: 'train_pull_away', desc: 'Station fades into swirling fog' },
    { id: 4, beat: 'passengers', frames: [450, 650], type: 'car_interior_wide', desc: 'Strangers in velvet seats, steam outside' },
    { id: 5, beat: 'passengers', frames: [650, 800], type: 'portrait_series', desc: 'Each face holds a secret' },
    { id: 6, beat: 'tunnel', frames: [800, 1100], type: 'tunnel_pov', desc: 'Darkness swallows train, lights pulse' },
    { id: 7, beat: 'memories', frames: [1100, 1400], type: 'window_memory', desc: 'Windows become mirrors of past lives' },
    { id: 8, beat: 'destination', frames: [1400, 1750], type: 'impossible_station', desc: 'Train stops at platform made of light' },
    { id: 9, beat: 'finale', frames: [1750, 2001], type: 'doors_open', desc: 'Blinding white - they step onto platform of stars' },
  ],

  postProcessing: {
    inkPass: { enabled: true, lineWidth: 1.3, color: '#0d0d0d' },
    dof: { enabled: true, focusDistance: 'auto', aperture: 2.2 },
    bloom: { enabled: true, threshold: 0.75, intensity: 0.6, radius: 0.7 },
    toneMapping: 'ACESFilmic',
    colorGrade: {
      lift: [0.01, 0.01, 0.02],
      gamma: [1.0, 0.97, 1.03],
      gain: [1.05, 1.0, 0.98],
    },
    filmGrain: { intensity: 0.012, size: 1.1 },
    vignette: { intensity: 0.18, smoothness: 0.6 },
  },

  audio: {
    ambient: ['train_rumble', 'steam_hiss', 'track_clickety', 'distant_whistle'],
    foley: ['velvet_rustle', 'brass_pocket_watch', 'glass_clink', 'coat_brush'],
    music: [
      { beat: 'boarding', track: 'train_theme_departure', volume: 0.4 },
      { beat: 'passengers', track: 'train_theme_intimate', volume: 0.5 },
      { beat: 'tunnel', track: 'train_theme_tension', volume: 0.6 },
      { beat: 'memories', track: 'train_theme_memory', volume: 0.5 },
      { beat: 'destination', track: 'train_theme_transcend', volume: 0.7 },
      { beat: 'finale', track: 'train_theme_eternal', volume: 0.5 },
    ],
  },
};

export default TRAIN_STORY;