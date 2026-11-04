// ============================================
// STORY: "The Lighthouse Keeper's Last Night"
// 67s vertical | 2D chars in 3D world | Same pipeline
// ============================================

export const LIGHTHOUSE_STORY = {
  title: "The Lighthouse Keeper's Last Night",
  duration: 67, // seconds
  fps: 30,
  totalFrames: 2001,

  // ===== STORY BEATS =====
  beats: [
    { id: 'arrival', startFrame: 0, endFrame: 180, desc: 'Storm hits, keeper climbs spiral stairs' },
    { id: 'lantern', startFrame: 180, endFrame: 540, desc: 'Lights the lens, beam cuts through storm' },
    { id: 'ship', startFrame: 540, endFrame: 900, desc: 'Sees ship in distress, beam guides it' },
    { id: 'memory', startFrame: 900, endFrame: 1260, desc: 'Flashbacks: wife, daughter, years of service' },
    { id: 'retirement', startFrame: 1260, endFrame: 1620, desc: 'Letter arrives: automation replaces him' },
    { id: 'final', startFrame: 1620, endFrame: 2001, desc: 'Last beam sweep, walks down stairs forever' },
  ],

  // ===== CHARACTERS =====
  characters: [
    {
      id: 'keeper',
      name: 'Elias Vane',
      age: 67,
      spriteSheets: ['keeper_idle', 'keeper_climb', 'keeper_lantern', 'keeper_walk', 'keeper_sad'],
      height: 1.75,
      outfit: 'weathered_oilskin_coat',
    },
    {
      id: 'ghost_wife',
      name: 'Mara',
      spriteSheets: ['ghost_idle', 'ghost_reach', 'ghost_fade'],
      isGhost: true,
    },
    {
      id: 'ghost_daughter',
      name: 'Lily',
      spriteSheets: ['ghost_child_idle', 'ghost_child_run', 'ghost_fade'],
      isGhost: true,
    },
  ],

  // ===== 3D WORLD =====
  world: {
    // Lighthouse exterior
    lighthouse: {
      baseRadius: 4,
      topRadius: 2.5,
      height: 45,
      floors: 6,
      stairs: { turns: 12, stepsPerTurn: 14 },
      lanternRoom: { radius: 3, height: 5, glassPanels: 12 },
    },
    // Environment
    ocean: {
      radius: 200,
      waveHeight: { calm: 0.5, storm: 8 },
      foamColor: '#8ab4d8',
    },
    cliffs: {
      height: 60,
      erosion: true,
      grassPatches: 40,
    },
    sky: {
      storm: { clouds: 'nimbus', lightning: true, color: '#1a1a2e' },
      dawn: { color: '#ff6b35', rays: true },
    },
    // Lighting
    lighthouseBeam: {
      angle: 4, // degrees
      rotationSpeed: 30, // seconds per revolution
      range: 400,
      color: '#fff8e7',
      intensity: 50000,
      volumetricFog: true,
    },
  },

  // ===== CAMERA SHOTS =====
  shots: [
    { id: 1, beat: 'arrival', frames: [0, 180], type: 'spiral_up', desc: 'Spiraling up stairs with keeper' },
    { id: 2, beat: 'arrival', frames: [180, 240], type: 'close_up', desc: 'Keeper hands on rusted railing' },
    { id: 3, beat: 'lantern', frames: [240, 540], type: 'lantern_pov', desc: 'Lighting the Fresnel lens' },
    { id: 4, beat: 'ship', frames: [540, 900], type: 'beam_sweep', desc: 'Beam cuts storm, finds ship' },
    { id: 5, beat: 'ship', frames: [900, 1020], type: 'ship_pov', desc: 'Ship captain sees beam, turns' },
    { id: 6, beat: 'memory', frames: [1020, 1260], type: 'ghost_overlay', desc: 'Wife & daughter appear on stairs' },
    { id: 7, beat: 'retirement', frames: [1260, 1440], type: 'close_up', desc: 'Letter in trembling hands' },
    { id: 8, beat: 'final', frames: [1440, 1800], type: 'wide_spiral_down', desc: 'Keeper descends, beam sweeps last time' },
    { id: 9, beat: 'final', frames: [1800, 2001], type: 'wide_exterior', desc: 'Lighthouse silent, automated light blinks' },
  ],

  // ===== POST PROCESSING (Same as Bridge) =====
  postProcessing: {
    inkPass: { enabled: true, lineWidth: 1.5, color: '#0a0a0a' },
    dof: { enabled: true, focusDistance: 'auto', aperture: 2.8 },
    bloom: { enabled: true, threshold: 0.8, intensity: 0.5, radius: 0.6 },
    toneMapping: 'ACESFilmic',
    colorGrade: {
      lift: [0.02, 0.01, 0.03],
      gamma: [1.0, 0.98, 1.02],
      gain: [1.1, 1.05, 0.95],
    },
    filmGrain: { intensity: 0.015, size: 1.2 },
    vignette: { intensity: 0.15, smoothness: 0.5 },
  },

  // ===== AUDIO CUES =====
  audio: {
    ambient: ['storm_wind', 'ocean_waves', 'thunder_roll'],
    foley: ['footsteps_metal', 'lantern_glass', 'paper_letter', 'door_creak'],
    music: [
      { beat: 'arrival', track: 'lighthouse_theme_intro', volume: 0.4 },
      { beat: 'lantern', track: 'lighthouse_theme_build', volume: 0.5 },
      { beat: 'ship', track: 'lighthouse_theme_peak', volume: 0.7 },
      { beat: 'memory', track: 'lighthouse_theme_memory', volume: 0.5 },
      { beat: 'retirement', track: 'lighthouse_theme_sad', volume: 0.4 },
      { beat: 'final', track: 'lighthouse_theme_end', volume: 0.3 },
    ],
  },
};

export default LIGHTHOUSE_STORY;