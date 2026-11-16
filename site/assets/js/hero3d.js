/* Wild Projects â€” homepage hero 3D: a timber house frame that assembles itself, then slowly turns.
   Loads only when the #wp-hero-3d container exists on the page. */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const mount = document.getElementById('wp-hero-3d');
if (mount && !mount.dataset.ready) {
  mount.dataset.ready = '1';
  try { start(mount); } catch (err) { console.warn('[Wild Projects] 3D hero disabled:', err); }
}

function start(mount) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x111c17, 18, 42);

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(15, 9.5, 17.5);
  const target = new THREE.Vector3(0, 2.3, 0);
  camera.lookAt(target);

  // lights
  scene.add(new THREE.HemisphereLight(0xfff1dd, 0x1d3329, 1.15));
  const key = new THREE.DirectionalLight(0xffc58a, 2.2);
  key.position.set(8, 14, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fc2b0, 0.9);
  rim.position.set(-10, 6, -8);
  scene.add(rim);

  // materials â€” a few timber tones so the frame looks like real lumber
  const woods = [0xd9a76e, 0xcf9a5f, 0xe2b27c, 0xc98f55].map(
    (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.82, metalness: 0 })
  );
  const plyMat = new THREE.MeshStandardMaterial({ color: 0xa8784a, roughness: 0.9 });
  const wood = () => woods[(Math.random() * woods.length) | 0];

  const house = new THREE.Group();
  scene.add(house);
  const pieces = [];
  const add = (w, h, d, x, y, z, mat = wood(), rot) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
    m.userData.target = m.position.clone();
    house.add(m);
    pieces.push(m);
    return m;
  };

  const W = 8, D = 6, H = 3, S = 0.6, T = 0.1, B = 0.22; // width, depth, wall height, stud spacing, stud thickness/depth
  const hw = W / 2, hd = D / 2;

  // floor deck
  add(W + 0.4, 0.22, D + 0.4, 0, 0.11, 0, plyMat);

  // walls: bottom plate, studs (with openings), double top plate
  const openingsFront = [[-2.6, -1.4], [-0.5, 0.5], [1.4, 2.6]]; // window, door, window (x ranges)
  const openingsSide = [[-1, 1]];
  const wallX = (z, openings) => {
    add(W, 0.1, B, 0, 0.27, z);
    add(W, 0.1, B, 0, H + 0.27, z);
    add(W, 0.1, B, 0, H + 0.37, z);
    for (let x = -hw + T / 2; x <= hw; x += S) {
      const open = openings.find(([a, b]) => x > a && x < b);
      if (!open) add(T, H, B, x, H / 2 + 0.32, z);
    }
    openings.forEach(([a, b]) => {
      const isDoor = a === -0.5;
      add(b - a + 0.2, 0.28, B, (a + b) / 2, H - 0.25, z); // header
      if (!isDoor) add(b - a, 0.08, B, (a + b) / 2, 1.1, z); // sill
      add(T, H, B, a, H / 2 + 0.32, z); add(T, H, B, b, H / 2 + 0.32, z); // king studs
    });
  };
  const wallZ = (x, openings) => {
    add(B, 0.1, D, x, 0.27, 0);
    add(B, 0.1, D, x, H + 0.27, 0);
    add(B, 0.1, D, x, H + 0.37, 0);
    for (let z = -hd + T / 2 + S; z < hd - S / 2; z += S) {
      const open = openings.find(([a, b]) => z > a && z < b);
      if (!open) add(B, H, T, x, H / 2 + 0.32, z);
    }
    openings.forEach(([a, b]) => {
      add(B, 0.28, b - a + 0.2, x, H - 0.25, (a + b) / 2);
      add(B, 0.08, b - a, x, 1.1, (a + b) / 2);
    });
  };
  wallX(hd - B / 2, openingsFront);
  wallX(-hd + B / 2, [[-1.6, 1.6]]);
  wallZ(-hw + B / 2, openingsSide);
  wallZ(hw - B / 2, openingsSide);

  // ceiling joists
  for (let x = -hw + 0.6; x < hw; x += 1.2) add(T, 0.22, D, x, H + 0.53, 0);

  // gable roof: rafter pairs + ridge beam
  const rise = 2.1, overhang = 0.45;
  const baseY = H + 0.6;
  const top = baseY + rise;              // ridge height
  const slope = rise / hd;               // drop per unit of z
  const run = hd + overhang;             // horizontal span of each rafter (ridge -> eave tip)
  const len = run * Math.sqrt(1 + slope * slope);
  const ang = Math.atan(slope);
  const cy = top - (slope * run) / 2;    // rafter centre height
  for (let x = -hw; x <= hw + 0.01; x += S) {
    add(T, 0.2, len, x, cy, run / 2, undefined, [ang, 0, 0]);    // front slope
    add(T, 0.2, len, x, cy, -run / 2, undefined, [-ang, 0, 0]);  // back slope
  }
  add(W + 0.3, 0.3, 0.12, 0, top + 0.02, 0); // ridge beam
  // two strips of roof sheathing on the front slope for depth
  [0.3, 0.62].forEach((f) => {
    const zz = f * hd;
    add(W + 0.3, 0.05, 0.9, 0, top - slope * zz + 0.14, zz, plyMat, [ang, 0, 0]);
  });

  house.position.y = -0.4;

  // ground + survey grid
  const grid = new THREE.GridHelper(60, 60, 0x3b5a4c, 0x253d33);
  grid.material.transparent = true;
  grid.material.opacity = 0.45;
  scene.add(grid);

  // sawdust particles
  const N = 260;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 30;
    pos[i * 3 + 1] = Math.random() * 12;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xe2b27c, size: 0.06, transparent: true, opacity: 0.7, depthWrite: false }));
  scene.add(dust);

  // assembly: every piece drops into place in build order
  const DUR = 0.9, STAGGER = reduce ? 0 : Math.min(0.022, 3.2 / pieces.length);
  pieces.forEach((p, i) => {
    p.userData.delay = i * STAGGER;
    if (!reduce) { p.position.y = p.userData.target.y + 7 + Math.random() * 3; p.visible = false; }
  });
  const easeOutBack = (t) => { const c = 1.4; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };

  // sizing â€” on desktop shift the view so the house sits on the right, beside the copy
  const resize = () => {
    const w = mount.clientWidth, h = mount.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // desktop: push the house to the right of the copy; mobile: smaller, lower, faded behind the text
    if (w > 960) { camera.zoom = 1; camera.setViewOffset(w, h, -w * 0.24, 0, w, h); }
    else { camera.zoom = 0.62; camera.setViewOffset(w, h, 0, -h * 0.22, w, h); }
    camera.updateProjectionMatrix();
    renderer.domElement.style.opacity = w > 960 ? '1' : '0.3';
  };
  resize();
  new ResizeObserver(resize).observe(mount);

  // pointer parallax
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('pointermove', (e) => {
    mouse.tx = e.clientX / window.innerWidth - 0.5;
    mouse.ty = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  // only animate when visible
  let visible = true;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) loop(); }).observe(mount);

  const clock = new THREE.Clock();
  let running = false;
  const t0 = performance.now();

  function frame() {
    const t = (performance.now() - t0) / 1000;
    const dt = Math.min(clock.getDelta(), 0.05);

    pieces.forEach((p) => {
      const k = (t - p.userData.delay) / DUR;
      if (k <= 0) return;
      p.visible = true;
      const e = k >= 1 ? 1 : easeOutBack(k);
      p.position.y = p.userData.target.y + (1 - e) * 8;
    });

    if (!reduce) {
      house.rotation.y += dt * 0.12;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      camera.position.x = 15 + mouse.x * 3;
      camera.position.y = 9.5 - mouse.y * 2;
      camera.lookAt(target);
      const a = dustGeo.attributes.position;
      for (let i = 0; i < N; i++) {
        let y = a.getY(i) + dt * 0.25;
        if (y > 12) y = 0;
        a.setY(i, y);
      }
      a.needsUpdate = true;
    }
    renderer.render(scene, camera);
  }

  function loop() {
    if (running) return;
    running = true;
    clock.getDelta();
    const tick = () => {
      if (!visible || document.hidden) { running = false; return; }
      frame();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) loop(); });
  if (reduce) { house.rotation.y = 0.5; frame(); } else loop();
}
