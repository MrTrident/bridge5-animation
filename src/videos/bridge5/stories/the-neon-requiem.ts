// ============================================
// STORY: "The Neon Requiem"
// 67s vertical | 2D chars in 3D world | Same pipeline
// Cyberpunk/Neon-Noir aesthetic
// ============================================

export const NEON_REQUIEM_STORY = {
  title: "The Neon Requiem",
  duration: 67,
  fps: 30,
  totalFrames: 2001,

  beats: [
    { id: 'rain', startFrame: 0, endFrame: 200, desc: 'Acid rain falls on Neo-Shanghai - memory dealers ply their trade' },
    { id: 'client', startFrame: 200, endFrame: 450, desc: 'Woman in red hires memory thief - wants husband erased' },
    { id: 'heist', startFrame: 450, endFrame: 800, desc: 'Jack into husband\'s mind - neon labyrinth of lies' },
    { id: 'truth', startFrame: 800, endFrame: 1100, desc: 'Husband didn\'t cheat - he was murdered, she ordered it' },
    { id: 'betrayal', startFrame: 1100, endFrame: 1400, desc: 'Client pulls gun - memory thief\'s own memories at stake' },
    { id: 'choice', startFrame: 1400, endFrame: 1700, desc: 'Upload truth to city mesh or delete forever' },
    { id: 'dawn', startFrame: 1700, endFrame: 2001, desc: 'Sun breaks smog - neon fades, truth remains' },
  ],

  characters: [
    {
      id: 'thief',
      name: 'Kaito "Glitch" Chen',
      age: 32,
      type: 'memory_thief',
      spriteSheets: [
        'thief_idle', 'thief_jack_in', 'thief_navigate', 'thief_combat',
        'thief_sad', 'thief_determined', 'thief_extract', 'thief_upload'
      ],
      height: 1.78,
      cybernetics: {
        eyes: 'retinal_hack_deck_cyan',
        leftArm: 'data_port_chrome',
        neuralLink: 'cerebral_interface_v3',
      },
      outfit: 'trench_coat_hologram_lining',
      deck: 'custom_quantum_deck_v7',
    },
    {
      id: 'client',
      name: 'Mei-Ling Voss',
      age: 28,
      spriteSheets: [
        'client_idle', 'client_plead', 'client_cold', 'client_reveal',
        'client_draw', 'client_fire', 'client_break'
      ],
      height: 1.68,
      outfit: 'red_cheongsam_kevlar_collar',
      cybernetics: {
        eyes: 'targeting_reticle_gold',
        hand: 'smart_gun_link',
      },
      motive: 'cover_up_murder',
    },
    {
      id: 'target',
      name: 'Dr. Julian Voss',
      age: 42,
      spriteSheets: [
        'target_idle', 'target_work', 'target_memories', 'target_death',
        'target_ghost', 'target_truth'
      ],
      height: 1.82,
      profession: 'neurogeneticist',
      outfit: 'lab_coat_aramid_weave',
      cybernetics: {
        neuralArchive: 'cortical_stack_experimental',
      },
      memories: [
        'discovered_cure', 'client_paid_hit', 'memory_backup_exists',
      ],
    },
    {
      id: 'fixer',
      name: 'Zero',
      age: 'unknown',
      spriteSheets: [
        'fixer_idle', 'fixer_clean', 'fixer_deal', 'fixer_vanish'
      ],
      height: 1.91,
      outfit: 'all_black_tactical_active_camo',
      cybernetics: {
        fullBody: 'military_grade_chassis',
        voice: 'scrambler_modulator',
      },
      role: 'cleaner_for_hire',
    },
    {
      id: 'ai_companion',
      name: 'Echo',
      type: 'AI_construct',
      spriteSheets: [
        'echo_idle', 'echo_scan', 'echo_warn', 'echo_hack', 'echo_care'
      ],
      form: 'hologram_cyan_wireframe',
      voice: 'soft_female_synth',
      loyalty: 'thief_only',
    },
  ],

  world: {
    city: {
      name: 'Neo-Shanghai Sector 7',
      year: 2087,
      population: 47_000_000,
      districts: [
        { name: 'The Sprawl', level: 'ground', lighting: 'neon_dense', class: 'poor' },
        { name: 'Mid-City', level: 'mid', lighting: 'corporate_white', class: 'middle' },
        { name: 'Cloud District', level: 'high', lighting: 'gold_white', class: 'elite' },
        { name: 'The Roots', level: 'under', lighting: 'bioluminescent', class: 'forgotten' },
      ],
      architecture: {
        style: 'brutalist_meets_art_nouveau',
        verticality: 'extreme',
        connectivity: 'skybridges_maglev_drones',
        greenery: 'hydroponic_vertical_farms',
      },
      sky: {
        smog: { density: 0.7, color: '#0d0d1a' },
        hologramAds: { density: 'saturated', regulation: 'none' },
        stars: 'invisible',
      },
    },
    cyberspace: {
      name: 'The Mesh',
      visualization: 'geometric_neon_constructs',
      physics: 'non_euclidean',
      inhabitants: ['AIs', 'uploaded_minds', 'viruses', 'ICE'],
      ice: { color: '#ff0066', geometry: 'fractal_sharp' },
      data: { color: '#00ffff', flow: 'liquid_light' },
    },
    memoryMarket: {
      name: 'The Synapse Exchange',
      location: 'Cloud District - Black Tower',
      currency: 'credits_or_secrets',
      goods: ['stolen_memories', 'forged_identities', 'skill_chips', 'personality_fragments'],
      regulation: 'triad_enforced',
    },
  },

  shots: [
    { id: 1, beat: 'rain', frames: [0, 200], type: 'city_wide', desc: 'Acid rain on neon canals - memory ads scroll' },
    { id: 2, beat: 'rain', frames: [150, 250], type: 'thief_pov', desc: 'HUD scrolls: TARGET ACQUIRED - JULIAN VOSS' },
    { id: 3, beat: 'client', frames: [200, 450], type: 'meeting', desc: 'Red cheongsam, gold eyes - pay upfront in crypto' },
    { id: 4, beat: 'heist', frames: [450, 650], type: 'jack_in', desc: 'Neural link engages - falls into neon mind' },
    { id: 5, beat: 'heist', frames: [650, 800], type: 'mindscape', desc: 'Neon labyrinth - memories as floating geometry' },
    { id: 6, beat: 'truth', frames: [800, 1000], type: 'memory_core', desc: 'Finds murder memory - client\'s signature' },
    { id: 7, beat: 'betrayal', frames: [1000, 1100], type: 'confrontation', desc: 'Red cheongsam draws smart-gun - betrayal' },
    { id: 7, beat: 'betrayal', frames: [1100, 1200], type: 'combat', desc: 'Cyberdeck vs smart-gun - ICE shatters' },
    { id: 8, beat: 'choice', frames: [1200, 1400], type: 'decision', desc: 'Upload truth to Mesh or delete forever' },
    { id: 9, beat: 'choice', frames: [1400, 1550], type: 'upload', desc: 'Truth floods Mesh - neon flickers citywide' },
    { id: 10, beat: 'dawn', frames: [1550, 1750], type: 'escape', desc: 'Jacks out - runs through waking city' },
    { id: 11, beat: 'dawn', frames: [1750, 2001], type: 'rooftop_dawn', desc: 'Smog clears - sun hits neon, truth remains' },
  ],

  postProcessing: {
    inkPass: { enabled: true, lineWidth: 0.9, color: '#000814', glow: 0.3 },
    dof: { enabled: true, focusDistance: 'auto', aperture: 1.4 },
    bloom: { enabled: true, threshold: 0.5, intensity: 1.2, radius: 1.5, quality: 'high' },
    toneMapping: 'ACESFilmic',
    colorGrade: {
      lift: [0.01, 0.005, 0.02],
      gamma: [1.05, 0.95, 1.1],
      gain: [1.2, 1.1, 0.85],
      saturation: 1.3,
      hueShift: 0.02,
    },
    filmGrain: { intensity: 0.005, size: 0.6 },
    vignette: { intensity: 0.25, smoothness: 0.4 },
    chromaticAberration: { enabled: true, intensity: 0.008 },
    scanlines: { enabled: true, intensity: 0.03, count: 1080 },
    vignette: { intensity: 0.3, smoothness: 0.3 },
    lensDistortion: { enabled: true, intensity: 0.02 },
  },

  audio: {
    ambient: [
      'city_hum_constant',
      'rain_acid_constant',
      'drone_whine_overhead',
      'neon_buzz_ambient',
      'distant_screams_muffled',
    ],
    foley: [
      'keyboard_mechanical',
      'neural_link_connect',
      'data_stream_whoosh',
      'gun_charge_cyber',
      'ice_shatter',
      'truth_upload_pulse',
    ],
    music: [
      { beat: 'rain', track: 'neon_requiem_ambient', volume: 0.4 },
      { beat: 'client', track: 'neon_requiem_meeting', volume: 0.5 },
      { beat: 'heist', track: 'neon_requiem_jack_in', volume: 0.6 },
      { beat: 'truth', track: 'neon_requiem_revelation', volume: 0.7 },
      { beat: 'betrayal', track: 'neon_requiem_betrayal', volume: 0.8 },
      { beat: 'choice', track: 'neon_requiem_decision', volume: 0.8 },
      { beat: 'dawn', track: 'neon_requiem_redemption', volume: 0.6 },
    ],
    leitmotifs: {
      thief: 'synth_bass_motif_descending',
      client: 'violin_motif_sharp',
      target: 'piano_motif_haunting',
      truth: 'choir_motif_ascending',
    },
    diegetic: [
      'hologram_ad_jingle',
      'vending_machine_chime',
      'train_announcement_mandarin',
      'rain_on_umbrella_pvc',
    ],
  },
};

export default NEON_REQUIEM_STORY;