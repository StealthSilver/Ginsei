"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Particle = {
  id: string;
  dx: number;
  dy: number;
  size: number;
  delayMs: number;
  opacity: number;
};

type Burst = {
  id: string;
  x: number;
  y: number;
  particles: Particle[];
};

function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
}

export default function CreativeCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const textHoverSelector = useMemo(
    () =>
      [
        // interactive
        "a",
        "button",
        "label",
        "summary",
        "[role='button']",
        "input",
        "textarea",
        "select",
        "[data-cursor='magnify']",
        // common text
        "p",
        "span",
        "li",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
      ].join(","),
    [],
  );

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const shouldEnable = finePointer && canHover && !reduceMotion;
    setEnabled(shouldEnable);

    if (shouldEnable) {
      document.body.classList.add("has-creative-cursor");
    }

    return () => {
      document.body.classList.remove("has-creative-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const el = cursorRef.current;
      if (!el) return;

      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.18;
      currentPos.current.y += dy * 0.18;

      el.style.setProperty("--cursor-x", `${currentPos.current.x}px`);
      el.style.setProperty("--cursor-y", `${currentPos.current.y}px`);

      rafRef.current = window.requestAnimationFrame(update);
    };

    rafRef.current = window.requestAnimationFrame(update);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      const hovered = (e.target as Element | null)?.closest?.(
        textHoverSelector,
      );
      setIsTextHover(Boolean(hovered));
    };

    const onDown = (e: PointerEvent) => {
      // sparkle powder burst
      const x = e.clientX;
      const y = e.clientY;

      const particleCount = 18;
      const particles: Particle[] = Array.from({ length: particleCount }).map(
        () => {
          const angle = Math.random() * Math.PI * 2;
          const dist = 18 + Math.random() * 56;
          const dx = Math.cos(angle) * dist;
          const dy = Math.sin(angle) * dist;
          const size = 2 + Math.random() * 4.5;
          const delayMs = Math.floor(Math.random() * 70);
          const opacity = 0.55 + Math.random() * 0.45;

          return {
            id: uid("p"),
            dx,
            dy,
            size,
            delayMs,
            opacity,
          };
        },
      );

      const burst: Burst = { id: uid("burst"), x, y, particles };
      setBursts((prev) => [...prev, burst]);

      window.setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== burst.id));
      }, 900);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [enabled, textHoverSelector]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`creative-cursor ${isTextHover ? "is-text" : ""}`}
        style={{
          // initial values so it doesn't snap from (0,0)
          ["--cursor-x" as any]: "50vw",
          ["--cursor-y" as any]: "50vh",
        }}
      >
        <div className="creative-cursor__ring" />
        <div className="creative-cursor__dot" />
      </div>

      {bursts.map((burst) => (
        <div
          key={burst.id}
          aria-hidden="true"
          className="creative-cursor__burst"
          style={{ left: burst.x, top: burst.y }}
        >
          {burst.particles.map((p) => (
            <span
              key={p.id}
              className="creative-cursor__particle"
              style={{
                ["--dx" as any]: `${p.dx}px`,
                ["--dy" as any]: `${p.dy}px`,
                ["--sz" as any]: `${p.size}px`,
                ["--delay" as any]: `${p.delayMs}ms`,
                ["--op" as any]: p.opacity,
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
}
