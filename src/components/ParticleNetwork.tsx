import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0, t = 0;

    interface TwinkleStar { x: number; y: number; size: number; baseAlpha: number; speed: number; phase: number; vx: number; vy: number; }
    interface SpaceNode { x: number; y: number; z: number; }

    let tStars: TwinkleStar[] = [];
    let nodes: SpaceNode[] = [];

    const TWINKLE_COUNT = 220;
    const NODE_COUNT    = 160;          // much denser
    const SPEED         = 3.2;
    const MAX_Z         = 900;
    const LINK_DIST     = 190;          // wider connection radius

    const rnd  = (a: number, b: number) => a + Math.random() * (b - a);

    // Project with a synchronized global sway applied to every node
    const proj = (x: number, y: number, z: number) => {
      // Global slow sway — all nodes share this offset → synchronized motion
      const swayX = Math.sin(t * 0.0008) * 60;
      const swayY = Math.cos(t * 0.0005) * 35;
      return {
        sx: ((x + swayX) / z) * W * 0.5 + W / 2,
        sy: ((y + swayY) / z) * H * 0.5 + H / 2,
        scale: 1 - z / MAX_Z,
      };
    };

    const makeNode  = (randomZ = false): SpaceNode => ({
      x: rnd(-W * 0.8, W * 0.8),
      y: rnd(-H * 0.8, H * 0.8),
      z: randomZ ? rnd(10, MAX_Z) : MAX_Z,
    });

    const makeStar = (): TwinkleStar => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: rnd(0.3, 1.3),
      baseAlpha: rnd(0.06, 0.28),
      speed: rnd(0.004, 0.013),
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() - 0.5) * 0.06,
    });

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      tStars = Array.from({ length: TWINKLE_COUNT }, makeStar);
      nodes  = Array.from({ length: NODE_COUNT },   () => makeNode(true));
    };

    const drawTwinkle = () => {
      tStars.forEach(s => {
        s.x += s.vx; s.y += s.vy;
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
        const a = s.baseAlpha * (0.4 + 0.6 * Math.sin(t * s.speed * 60 + s.phase));
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(210,228,255,${a})`;
        ctx!.fill();
      });
    };

    const drawNetwork = () => {
      // Advance all nodes at the same speed → naturally synchronized depth
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].z -= SPEED;
        if (nodes[i].z <= 1) nodes[i] = makeNode(false);
      }

      // Project
      const P = nodes.map(n => proj(n.x, n.y, n.z));
      const alive = P.map(p => p.sx > -80 && p.sx < W + 80 && p.sy > -80 && p.sy < H + 80);

      // Lines
      for (let i = 0; i < P.length; i++) {
        if (!alive[i]) continue;
        for (let j = i + 1; j < P.length; j++) {
          if (!alive[j]) continue;
          const dx = P[i].sx - P[j].sx;
          const dy = P[i].sy - P[j].sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const depth = (P[i].scale + P[j].scale) * 0.5;
            const a = (1 - dist / LINK_DIST) * depth * 0.6;
            ctx!.beginPath();
            ctx!.moveTo(P[i].sx, P[i].sy);
            ctx!.lineTo(P[j].sx, P[j].sy);
            ctx!.strokeStyle = `rgba(0,212,255,${a})`;
            ctx!.lineWidth = 0.5 + depth * 0.8;
            ctx!.stroke();
          }
        }
      }

      // Dots + glow
      P.forEach((p, i) => {
        if (!alive[i]) return;
        const r = Math.max(0.3, p.scale * 3);
        const a = Math.min(1, p.scale * 1.4);

        // Halo
        const g = ctx!.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 6);
        g.addColorStop(0, `rgba(0,212,255,${a * 0.45})`);
        g.addColorStop(1, `rgba(0,212,255,0)`);
        ctx!.beginPath();
        ctx!.arc(p.sx, p.sy, r * 6, 0, Math.PI * 2);
        ctx!.fillStyle = g;
        ctx!.fill();

        // Core
        ctx!.beginPath();
        ctx!.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,212,255,${a})`;
        ctx!.fill();

        // Warp tail
        const prevZ = nodes[i].z + SPEED * 5;
        if (prevZ < MAX_Z) {
          const pp = proj(nodes[i].x, nodes[i].y, prevZ);
          ctx!.beginPath();
          ctx!.moveTo(p.sx, p.sy);
          ctx!.lineTo(pp.sx, pp.sy);
          ctx!.strokeStyle = `rgba(0,212,255,${a * 0.25})`;
          ctx!.lineWidth = r * 0.5;
          ctx!.stroke();
        }
      });
    };

    const animate = () => {
      t++;
      ctx!.clearRect(0, 0, W, H);
      drawTwinkle();
      drawNetwork();
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}
