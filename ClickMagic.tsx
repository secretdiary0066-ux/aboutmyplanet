import { useEffect, useRef } from "react";

export default function ClickMagic() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize handling
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle type structure
    interface MagicParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
      spin: number;
      angle: number;
      shape: "spark" | "cross" | "star" | "bubble";
    }

    const particles: MagicParticle[] = [];

    // Magic Colors for Sumin's portfolio theme
    const magicColors = [
      "#d946ef", // Intense pink-purple
      "#a855f7", // Vivid purple
      "#818cf8", // Soft indigo
      "#22d3ee", // Sky-cyan
      "#38bdf8", // Sky blue
      "#fbbf24", // Celestial gold
      "#ffffff", // Core starlight
    ];

    // Splendid explosion builder
    const spawnExplosion = (x: number, y: number) => {
      // Spawn standard burst particles
      const count = Math.floor(Math.random() * 12) + 16;
      for (let i = 0; i < count; i++) {
        const speed = Math.random() * 4.2 + 1.2;
        const angle = Math.random() * Math.PI * 2;
        const size = Math.random() * 6 + 3;
        const color = magicColors[Math.floor(Math.random() * magicColors.length)];
        const shapeRand = Math.random();
        let shape: "spark" | "cross" | "star" | "bubble" = "spark";
        if (shapeRand > 0.75) shape = "star";
        else if (shapeRand > 0.5) shape = "cross";
        else if (shapeRand > 0.25) shape = "bubble";

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (Math.random() * 1.5), // subtle upwards float
          size,
          color,
          alpha: 1.0,
          decay: Math.random() * 0.02 + 0.015,
          spin: (Math.random() - 0.5) * 0.1,
          angle: Math.random() * Math.PI * 2,
          shape,
        });
      }

      // Spawn concentric sound waves
      for (let w = 0; w < 2; w++) {
        particles.push({
          x,
          y,
          vx: 0,
          vy: 0,
          size: 15 + w * 20,
          color: "rgba(168, 85, 247, 0.4)",
          alpha: 0.6,
          decay: 0.04,
          spin: 0,
          angle: 0,
          shape: "bubble",
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      spawnExplosion(e.clientX, e.clientY);
    };

    window.addEventListener("mousedown", handleClick);

    // Helpers to draw specific shapes
    const drawSparkle = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      color: string,
      alpha: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      c.save();
      c.globalAlpha = alpha;
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c.lineTo(x, y);
        rot += step;
      }
      c.lineTo(cx, cy - outerRadius);
      c.closePath();
      c.fill();
      c.restore();
    };

    const drawCross = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      length: number,
      width: number,
      color: string,
      alpha: number,
      angle: number
    ) => {
      c.save();
      c.globalAlpha = alpha;
      c.fillStyle = color;
      c.translate(cx, cy);
      c.rotate(angle);

      // Horizontal bar
      c.fillRect(-length / 2, -width / 2, length, width);
      // Vertical bar
      c.fillRect(-width / 2, -length / 2, width, length);

      c.restore();
    };

    // Frame loops
    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.alpha -= p.decay;

        // Subtle friction and gravitational lift
        p.vx *= 0.98;
        p.vy += p.shape === "bubble" ? -0.05 : 0.02; // bubbles float up, sparks drift down

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle based on custom shape
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        if (p.shape === "spark") {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else if (p.shape === "bubble") {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          // Growing ring size for bubbles
          const activeRadius = p.vx === 0 ? p.size + (1 - p.alpha) * 80 : p.size;
          ctx.arc(p.x, p.y, activeRadius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        } else if (p.shape === "cross") {
          drawCross(ctx, p.x, p.y, p.size * 3.5, p.size * 0.7, p.color, p.alpha, p.angle);
        } else if (p.shape === "star") {
          drawSparkle(ctx, p.x, p.y, 4, p.size * 2, p.size * 0.5, p.color, p.alpha);
        }

        ctx.shadowBlur = 0; // Reset shadow for next particles
      }

      animationFrameId = requestAnimationFrame(step);
    };

    step();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="click-magic-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-50 pointer-events-none"
    />
  );
}
