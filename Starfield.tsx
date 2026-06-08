import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with easing
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Star Object definitions
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
      phase: number;
      color: string;
    }

    const stars: Star[] = [];
    const numStars = Math.floor((width * height) / 4000); // Scale stars with screen size

    const colors = [
      "rgba(168, 85, 247, 0.8)", // Purple
      "rgba(59, 130, 246, 0.8)",  // Blue
      "rgba(6, 182, 212, 0.8)",   // Cyan
      "rgba(255, 255, 255, 0.9)", // White
      "rgba(129, 140, 248, 0.8)"  // Indigo
    ];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Draw Loop
    const draw = () => {
      // Clear Canvas with a semi-opaque background for a subtle movement smear
      ctx.fillStyle = "rgba(10, 8, 20, 0.2)"; // Deep space violet-black
      ctx.fillRect(0, 0, width, height);

      // Spring mouse coordinate
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw dynamic glowing nebula backdrops
      const pGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.5
      );
      pGlow.addColorStop(0, "rgba(88, 28, 135, 0.15)"); // Deep purple twilight
      pGlow.addColorStop(0.5, "rgba(30, 58, 138, 0.05)");  // Midnight blue
      pGlow.addColorStop(1, "transparent");

      ctx.fillStyle = pGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw Twinkling Stars
      stars.forEach((star) => {
        star.phase += star.speed;
        const currentAlpha = Math.abs(Math.sin(star.phase)) * star.alpha;

        ctx.beginPath();
        ctx.fillStyle = star.color.replace("0.8", currentAlpha.toFixed(2));
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slowly drift stars downward
        star.y += star.speed * 8;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      // Subtle constellation linkage lines for close stars
      ctx.strokeStyle = "rgba(139, 92, 246, 0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cosmic-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#06040d]"
    />
  );
}
