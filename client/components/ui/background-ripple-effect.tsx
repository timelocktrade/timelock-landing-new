"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Network Node (representing blockchain/protocol connections)
    class NetworkNode {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      pulsePhase: number;
      pulseSpeed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.targetX = this.x;
        this.targetY = this.y;
        this.size = Math.random() * 2 + 1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.01 + 0.005;
        this.opacity = Math.random() * 0.15 + 0.1;

        // Set new target periodically
        setInterval(
          () => {
            this.targetX = Math.random() * canvas.width;
            this.targetY = Math.random() * canvas.height;
          },
          Math.random() * 10000 + 8000,
        );
      }

      update() {
        // Smooth movement towards target
        this.x += (this.targetX - this.x) * 0.001;
        this.y += (this.targetY - this.y) * 0.001;
        this.pulsePhase += this.pulseSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);

        // Core node - more subtle blue-gray tones
        ctx.fillStyle = `rgba(148, 163, 184, ${this.opacity * pulse * 0.6})`;
        ctx.fill();

        // Outer glow - minimal
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2,
        );
        gradient.addColorStop(0, `rgba(148, 163, 184, ${this.opacity * 0.2})`);
        gradient.addColorStop(1, "rgba(148, 163, 184, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Liquidity Wave (representing Uniswap V3 liquidity pools)
    class LiquidityWave {
      y: number;
      amplitude: number;
      frequency: number;
      speed: number;
      phase: number;
      opacity: number;
      color: [number, number, number];

      constructor(startY: number, color: [number, number, number]) {
        this.y = startY;
        this.amplitude = Math.random() * 20 + 15;
        this.frequency = Math.random() * 0.0015 + 0.0008;
        this.speed = Math.random() * 0.002 + 0.001;
        this.phase = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.03 + 0.02;
        this.color = color;
      }

      update() {
        this.phase += this.speed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        // Draw wave
        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            this.y +
            Math.sin(x * this.frequency + this.phase) * this.amplitude +
            Math.sin(x * this.frequency * 2 + this.phase * 1.5) *
              (this.amplitude * 0.5);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        // Gradient fill
        const gradient = ctx.createLinearGradient(
          0,
          this.y - 100,
          0,
          canvas.height,
        );
        gradient.addColorStop(
          0,
          `rgba(${this.color.join(",")}, ${this.opacity})`,
        );
        gradient.addColorStop(
          0.5,
          `rgba(${this.color.join(",")}, ${this.opacity * 0.5})`,
        );
        gradient.addColorStop(1, "rgba(14, 14, 14, 0)");

        ctx.fillStyle = gradient;
        ctx.fill();

        // Wave line - very subtle
        ctx.strokeStyle = `rgba(${this.color.join(",")}, ${this.opacity * 1.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            this.y +
            Math.sin(x * this.frequency + this.phase) * this.amplitude +
            Math.sin(x * this.frequency * 2 + this.phase * 1.5) *
              (this.amplitude * 0.5);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    }

    // Data Stream (representing trading data/transactions)
    class DataStream {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.speed = Math.random() * 1.5 + 0.8;
        this.length = Math.random() * 40 + 25;
        this.opacity = Math.random() * 0.15 + 0.1;
      }

      update() {
        this.y += this.speed;

        // Reset when off screen
        if (this.y > canvas.height + 50) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
          this.speed = Math.random() * 2 + 1;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y - this.length,
          this.x,
          this.y,
        );
        gradient.addColorStop(0, "rgba(148, 163, 184, 0)");
        gradient.addColorStop(0.5, `rgba(148, 163, 184, ${this.opacity})`);
        gradient.addColorStop(1, "rgba(148, 163, 184, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.length);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Minimal glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(148, 163, 184, 0.3)";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize elements
    const nodes: NetworkNode[] = [];
    const waves: LiquidityWave[] = [];
    const streams: DataStream[] = [];

    // Create network nodes - fewer for cleaner look
    for (let i = 0; i < 25; i++) {
      nodes.push(new NetworkNode());
    }

    // Create liquidity waves with subtle muted colors
    waves.push(new LiquidityWave(canvas.height * 0.65, [148, 163, 184])); // Slate gray
    waves.push(new LiquidityWave(canvas.height * 0.75, [100, 116, 139])); // Darker slate

    // Create data streams - fewer for subtlety
    for (let i = 0; i < 8; i++) {
      streams.push(new DataStream());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear with crisp transitions
      ctx.fillStyle = "rgba(14, 14, 14, 0.98)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw liquidity waves
      waves.forEach((wave) => {
        wave.update();
        wave.draw(ctx);
      });

      // Draw data streams
      streams.forEach((stream) => {
        stream.update();
        stream.draw(ctx);
      });

      // Update and draw network nodes
      nodes.forEach((node) => {
        node.update();
        node.draw(ctx);
      });

      // Draw connections between nearby nodes
      ctx.lineWidth = 1;
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach((node2) => {
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.08;
            const gradient = ctx.createLinearGradient(
              node1.x,
              node1.y,
              node2.x,
              node2.y,
            );
            gradient.addColorStop(0, `rgba(148, 163, 184, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(100, 116, 139, ${opacity * 0.7})`);
            gradient.addColorStop(1, `rgba(148, 163, 184, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        });
      });

      // Very subtle grid overlay - more professional
      ctx.strokeStyle = "rgba(148, 163, 184, 0.015)";
      ctx.lineWidth = 0.5;
      const gridSize = 120;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Subtle vignette overlay for professional depth
      const vignette = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 3,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8,
      );
      vignette.addColorStop(0, "rgba(14, 14, 14, 0)");
      vignette.addColorStop(0.7, "rgba(14, 14, 14, 0.2)");
      vignette.addColorStop(1, "rgba(14, 14, 14, 0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle static accent gradients */}
      <div
        className={cn(
          "absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-5",
          "bg-gradient-to-br from-primary/20 to-transparent",
          "blur-[120px] animate-pulse-slow pointer-events-none",
        )}
        style={{ animationDuration: "12s" }}
      />

      <div
        className={cn(
          "absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full opacity-4",
          "bg-gradient-to-tl from-accent-foreground/15 to-transparent",
          "blur-[100px] animate-pulse-slow pointer-events-none",
        )}
        style={{ animationDuration: "14s", animationDelay: "4s" }}
      />
    </div>
  );
};
