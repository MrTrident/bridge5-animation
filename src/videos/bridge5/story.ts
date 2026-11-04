// 5-second cut of the bridge story: march -> snap -> deadpan water beat (150 frames @ 30 fps, vertical).
// The physics constants are identical to the full short (SNAP/DROP at tau 34.62 / 36.35 / 36.95); a single
// mapping tau = 33.2 + t (t = global seconds) places the snap at frame ~42.6, the deck drop at 94.5-112.5 and
// leaves the floating-hats beat frames 116-150. Shot ids 7/8/9 are kept so the world/cast id special cases
// (snap fx, falling soldiers, river sitters) work unchanged; SHOTS is padded with never-matching dummies
// because several modules index it as SHOTS[id - 1].
export const FPS = 30;
export const TOTAL = 2001;
export const D0 = 6.0; // bank top + deck height (m)
export const HALF = 27; // towers at z = +-27, span 54 m
export const FILES = [-1.65, -0.55, 0.55, 1.65];
export const ROW_GAP = 1.3;
export const COUNT = 74;
export const PARK: V3 = [70, D0, -75]; // swing pivot base (unused in this cut, exported for world.ts)
export type V3 = [number, number, number];

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
export const smooth = (x: number) => { const u = clamp01(x); return u * u * (3 - 2 * u); };
export const easeOut = (u: number) => 1 - (1 - clamp01(u)) ** 4;
const lin = (pts: [number, number][], x: number) => {
  if (x <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
    return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  }
  return pts[pts.length - 1][1];
};

// ---------------- story physics (tau = story time in seconds) ----------------
export const front = (tau: number) => 26 - 1.6 * (tau - 4.4); // z of the front row, marching toward -z
export const marchPhase = (tau: number) => ((tau % 1) + 1) % 1; // 1 Hz cycle = 2 steps/s, footfalls at 0 and 0.5
export const SNAP = 34.62, DROP0 = 36.35, DROP1 = 36.95;
export const amp = (tau: number) =>
  lin([[14.85, 0], [17.8, 0.07], [21.4, 0.13], [27.4, 0.26], [33.0, 0.46], [SNAP, 0.55], [SNAP + 0.35, 0.0]], tau);
export const stomp = (tau: number) => lin([[21.4, 1.0], [27.4, 1.35], [33, 1.5]], tau);
export const shapeZ = (z: number) => (Math.abs(z) < HALF ? Math.cos((Math.PI * z) / (2 * HALF)) : 0);
export const dropW = (z: number) => smooth((20 - z) / 26); // 1 on the near half, 0 at the far tower
export const dropU = (tau: number) => (tau < DROP0 ? 0 : Math.min(1, ((tau - DROP0) / (DROP1 - DROP0)) ** 2));
export const DROP_H = 6.6;

export type BridgeState = { bounce: number; drop: number; snap: number; collapsed: boolean };
export const deckY = (z: number, b: BridgeState) => D0 + b.bounce * shapeZ(z) - b.drop * DROP_H * dropW(z);

// ---------------- shots ----------------
export type Light = "day" | "golden";
export type Crowd = "march" | "fall" | "water" | "bank" | "tourists" | "none";
export type ShotDef = { id: number; a: number; b: number; light: Light; crowd: Crowd; tau: (t: number) => number; towns?: boolean; exposure?: number };

/** the single tau mapping for this cut: snap at t=1.42 s (f 42.6), drop 3.15-3.75 s (f 94.5-112.5) */
export const TAU = (t: number) => (t / 2000) * 67.0;

/** padding dummies: a = b = 0 never matches a frame, but SHOTS[id - 1] resolves for the real ids 7/8/9 */
const DUMMY: ShotDef = { id: 0, a: 0, b: 0, light: "day", crowd: "none", tau: TAU };
/** Exposure compensation (stops) per shot to match reference's stable ~136 luminance across all frames.
 *  world.ts uses SHOTS[id - 1], so index = id - 1.
 *  Indices: 6=id7, 7=id8, 8=id9, 14=id15. */
export const SHOTS: ShotDef[] = [
  DUMMY, DUMMY, DUMMY, DUMMY, DUMMY, DUMMY,                          // 0-5
  { id: 7, a: 0, b: 40, light: "day", crowd: "march", tau: TAU, exposure: -1.5 },    // idx 6 - march (was +0.8)
  { id: 8, a: 40, b: 64, light: "day", crowd: "fall", tau: TAU, exposure: +1.5 },   // idx 7 - bolt (was -15.9)
  { id: 9, a: 116, b: TOTAL, light: "day", crowd: "water", tau: TAU, exposure: +2.0 }, // idx 8 - river (was +14.4)
  DUMMY, DUMMY, DUMMY, DUMMY, DUMMY,                                // idx 9-13 (id 10-14)
  { id: 15, a: 64, b: 116, light: "day", crowd: "fall", tau: TAU, exposure: -2.0 }, // idx 14 - aerial (was +39.5)
];
/** one soft crossfade into the water beat */
export const XFADE: Record<number, number> = { 9: 6, 15: 8 };
export const FLASH_AT = 99999; // no flash in this cut (never reached in 150 frames)

export const shotAt = (f: number) => SHOTS.find((s) => f >= s.a && f < s.b) ?? SHOTS[SHOTS.length - 1];
/** layers to draw at frame f: base shot, plus the next shot fading in during a crossfade */
export const layersAt = (f: number): { id: number; alpha: number }[] => {
  for (const s of SHOTS) {
    const x = XFADE[s.id];
    if (x && f >= s.a - x / 2 && f < s.a + x / 2) return [{ id: s.id - 1, alpha: 1 }, { id: s.id, alpha: (f - (s.a - x / 2) + 1) / (x + 1) }];
  }
  const s = shotAt(f);
  // Map shot 15 back to id 8 for camera rendering (they share the same aerial camera)
  return [{ id: s.id === 15 ? 8 : s.id, alpha: 1 }];
};

export const bridgeState = (id: number, t: number): BridgeState => {
  const s = SHOTS[id - 1];
  const tau = s.tau(t);
  if (id === 9) return { bounce: 0, drop: 1, snap: 1, collapsed: true };
  const bounce = -amp(tau) * Math.cos(4 * Math.PI * marchPhase(tau));
  if (id === 8 || id === 15) return { bounce, drop: dropU(tau), snap: clamp01((tau - SNAP) / 0.7), collapsed: tau >= DROP1 };
  return { bounce, drop: 0, snap: 0, collapsed: false };
};

// ---------------- camera ----------------
// Same grammar as the full short: smootherstep glides, hard cuts on reframes, holds that creep (pushK),
// 7-frame impact kicks that flip sign every frame. Frames below are cut-local (0-150).
export type Cam = { pos: V3; look: V3; fov: number; roll: number };
type Shot = Partial<Cam> & { pos: V3; look: V3 };
type Key = { f: number; dur?: number; cut?: boolean; s: (f: number) => Shot };
export const glide = (u: number) => { const x = clamp01(u); return x * x * x * (x * (6 * x - 15) + 10); };
const mix = (a: Cam, b: Cam, k: number): Cam => ({
  pos: a.pos.map((v, i) => v + (b.pos[i] - v) * k) as V3, look: a.look.map((v, i) => v + (b.look[i] - v) * k) as V3,
  fov: a.fov + (b.fov - a.fov) * k, roll: a.roll + (b.roll - a.roll) * k,
});
const full = (c: Shot): Cam => ({ fov: 40, roll: 0, ...c });
const run = (keys: Key[], f: number) => {
  let cur = full(keys[0].s(f));
  for (let i = 1; i < keys.length; i++) {
    const k = keys[i];
    if (f < k.f) break;
    cur = k.cut ? full(k.s(f)) : mix(cur, full(k.s(f)), glide((f - k.f) / (k.dur ?? 24)));
  }
  return cur;
};
const T = (f: number) => f / FPS;
const Fz = (id: number, f: number) => front(SHOTS[id - 1].tau(T(f)));
const pushK = (f: number, f0: number, rate: number, punch = 0, n = 35) => {
  const x = Math.max(0, f - f0);
  let s = rate * x;
  if (punch > rate) for (let i = 0; i < Math.min(x, n); i++) s += (punch - rate) * Math.max(0, Math.min(1, (i + 0.5) / 8, (n - i - 0.5) / 8));
  return Math.exp(-s);
};
const dolly = (pos: V3, look: V3, k: number, rest: Partial<Cam> = {}): Shot =>
  ({ pos: [look[0] + (pos[0] - look[0]) * k, look[1] + (pos[1] - look[1]) * k, look[2] + (pos[2] - look[2]) * k], look, ...rest });
const zoom = (pos: V3, look: V3, fov: number, k: number, rest: Partial<Cam> = {}): Shot =>
  ({ pos, look, fov: (360 / Math.PI) * Math.atan(Math.tan((fov * Math.PI) / 360) * k), ...rest });

// near-left anchorage where the bolt lives, and the free end of the snapped backstay
export const ANCHOR: V3 = [-2.7, D0 + 0.62, -37];
export const snapEnd = (snap: number): V3 => {
  const u = easeOut(snap);
  return [ANCHOR[0] - 0.6 * u, ANCHOR[1] + 5.5 * u - 2.0 * u * u, ANCHOR[2] + 4.5 * u];
};

// ---- framings ----
// shot 7 (march): wide 3/4 ahead of the column, slow push (from the original S7a)
const S7a = (f: number) => { const F = Fz(7, f); return zoom([-3.0, D0 + 1.4, F - 11], [0, D0 + 1.7, F + 3], 46, pushK(f, 0, 0.002), { roll: -0.03 }); };
// shot 8: bolt insert with a punch push on the cut, then cut up to the aerial over the collapse
const S8a = (f: number) => dolly([-2.35, D0 + 1.25, -38.9], [ANCHOR[0], ANCHOR[1] + 0.3, ANCHOR[2]], pushK(f, 40, 0.0025, 0.006, 35), { fov: 34 });
const S8c = (f: number) => dolly([4.5, 15, -45], [0, 3.2, -14], pushK(f, 64, 0.0025), { fov: 42 });
// shot 9: river sitters at face height, slow deadpan push (from the original S9a)
const S9a = (f: number) => dolly([1.5, 0.55, -24.6], [0, 0.62, -18], pushK(f, 116, 0.0018), { fov: 40, roll: -0.03 });

const CAMS: Record<number, Key[]> = {
  7: [{ f: 0, s: S7a }],
  8: [
    { f: 40, s: S8a },           // bolt insert; the snap whip + kick lands here (f ~43)
    { f: 64, cut: true, s: S8c } // cut to the aerial as the column falls
  ],
  9: [{ f: 116, s: S9a }],
  15: [
    { f: 64, s: S8c }            // aerial continues from f64 (same camera as shot 8's S8c)
  ]
};
// world.ts sightLines() calls camAt(s.id, ...) for EVERY SHOTS entry (the dummies included): alias ids 0-6, 10-14
// to the march camera so those rays are valid (they duplicate shot 7's rays, so the cull set does not change).
for (let id = 0; id <= 6; id++) CAMS[id] = CAMS[7];
for (let id = 10; id <= 14; id++) CAMS[id] = CAMS[7];

// impact kicks: [global seconds, gain]; the snap kick lands on the bolt CU, the slam on the aerial
const KICKS: [number, number][] = [[SNAP - TAU(0), 1], [DROP1 - TAU(0), 1.6]];
export const kickAt = (t: number) => {
  let a = 0;
  for (const [t0, g] of KICKS) {
    const n = Math.floor((t - t0) * FPS + 1e-6);
    if (n >= 0 && n < 7) a += g * (n % 2 ? -1 : 1) * (1 - n / 7) ** 1.5;
  }
  return a;
};
export const camAt = (id: number, f: number): Cam => {
  const c = run(CAMS[id], f), a = kickAt(T(f));
  if (!a) return c;
  const d: V3 = [c.look[0] - c.pos[0], c.look[1] - c.pos[1], c.look[2] - c.pos[2]];
  const L = Math.hypot(...d), h = Math.hypot(d[0], d[2]) || 1;
  const m = (3 / 640) * Math.tan((c.fov * Math.PI) / 360) * L * a;
  return { ...c, look: [c.look[0] - (d[2] / h) * m, c.look[1] + 0.6 * m, c.look[2] + (d[0] / h) * m], roll: c.roll + a * 0.004 };
};
export const keyEnd = (id: number, f: number) => {
  let e = 0;
  for (const k of CAMS[id]) if (f >= k.f) e = k.f + (k.cut ? 0 : k.dur ?? 24);
  return Math.max(f, e);
};

// ---------------- lens: depth of field + foreground ----------------
// Reference measurements (depth.md): DOF on ~1/3 of time; cInf at 1080: CU 15-16, MS 12-14, park 7, golden sway 5, wides 0
// Focus on the eyes of the front row. Our 1440p output = 1.333x 1080p, so cInf scales by 1.333
export type Dof = { f: number; dur?: number; cInf: number; focus?: (f: number) => V3 };
export const DOF: Dof[] = [
  { f: 0, cInf: 0 }, // march wide: sharp (establishing)
  { f: 40, dur: 24, cInf: 16, focus: () => [ANCHOR[0], ANCHOR[1] + 0.3, ANCHOR[2]] }, // bolt CU: 16px@1080p (ref 15-16)
  { f: 64, cInf: 0 }, // aerial collapse: kept readable
  { f: 116, dur: 18, cInf: 16, focus: () => [0.6, 0.6, -21.6] } // river sitters: 16px@1080p (ref ~16)
];
export const dofAt = (f: number) => {
  let i = 0; while (i + 1 < DOF.length && f >= DOF[i + 1].f) i++;
  const d = DOF[i], p = DOF[Math.max(0, i - 1)];
  const k = d.dur ? Math.min(1, (f - d.f) / d.dur) : 1;
  return { cInf: p.cInf + (d.cInf - p.cInf) * k, focus: d.focus };
};
export const focusAt = (id: number, f: number): V3 => {
  const d = dofAt(f);
  return d.focus ? d.focus(f) : camAt(id, f).look;
};

/** near framing objects: none in this cut (the Kenney kit is not bundled; empty is the safe reading) */
export type Fg = { a: number; b: number; kit: string; pos: V3; s?: number; yaw?: number };
export const FOREGROUND: Fg[] = [];
