// src/components/Coverflow/CoverflowLite.jsx
import React, { useEffect, useState } from "react";
import useCarouselDrag from "./useCarouselDrag";
import "../styles/Carousel.css";

export default function CoverflowLite({
  images = [
    "https://picsum.photos/id/1015/1000/600",
    "https://picsum.photos/id/1016/1000/600",
    "https://picsum.photos/id/1018/1000/600",
    "https://picsum.photos/id/1020/1000/600",
    "https://picsum.photos/id/1024/1000/600",
    "https://picsum.photos/id/1025/1000/600",
    "https://picsum.photos/id/1035/1000/600",
    "https://picsum.photos/id/1037/1000/600",
    "https://picsum.photos/id/1040/1000/600",
    "https://picsum.photos/id/1050/1000/600",
    "https://picsum.photos/id/1060/1000/600",
    "https://picsum.photos/id/1070/1000/600",
  ],
  gap = 60,
  scaleSide = 0.82,
  rotateSide = 12,
  windowSize = 3,
}) {
  const [i, setI] = useState(0);

  const {
    stageRef,
    dragUnits,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    pxToUnits,
  } = useCarouselDrag({ gap });

  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const soft = (x, k = 0.9) => {
    const t = Math.tanh(k * x);
    return t / Math.tanh(k);
  };

  return (
    <div className="coverflow" style={{ touchAction: "pan-y" }}>
      <div
        className="stage"
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) =>
          onPointerUp(
            e,
            ({ units, speed }) => {
              const THRESH_UNITS = 0.22;
              const THRESH_SPEED = 0.45; 
              let delta = 0;
              if (Math.abs(units) > THRESH_UNITS || Math.abs(speed) > THRESH_SPEED) {
                delta = units > 0 ? -1 : 1; 
              }
              if (delta) setI((v) => (v + delta + images.length) % images.length);
            },
            pxToUnits
          )
        }
        onPointerCancel={onPointerCancel}
      >
        {images.map((src, idx) => {
          let rel = (idx - i + images.length) % images.length;
          if (rel > images.length / 2) rel -= images.length;
          if (Math.abs(rel) > windowSize) return null;

          const relWithDrag = rel + dragUnits;

          const s = soft(relWithDrag);
          const factor = Math.abs(relWithDrag) < 1 ? Math.abs(s) : Math.abs(relWithDrag);

          const tx = relWithDrag * gap; 
          const rot =
            -relWithDrag * rotateSide * (0.85 + 0.15 * (1 - Math.min(1, Math.abs(s))));
          const sc =
            rel === 0
              ? 1
              : scaleSide + (1 - scaleSide) * (1 - Math.min(1, factor));
          const depth = rel === 0 ? 60 : 20 * (1 - Math.min(1, factor));
          const zIndex = 1000 - Math.round(Math.abs(relWithDrag) * 100);

      
          const d = Math.min(1, Math.abs(relWithDrag)); 
          const MIN_OP_AT_EDGE = 0.8;  
          const gamma = 2.9;          
          const CENTER_FADE = 0.25;   

          let op;
          if (rel === 0) {
            op = 1 - d * CENTER_FADE; 
          } else {
            op = MIN_OP_AT_EDGE + (1 - MIN_OP_AT_EDGE) * Math.pow(1 - d, gamma);
          }

          const blur = 0;

          return (
            <figure
              key={idx}
              className={`card ${rel === 0 ? "active" : ""} ${isDragging ? "dragging" : ""}`}
              style={{
                transform: `translateX(${tx}%) translateZ(${depth}px) rotateY(${rot}deg) scale(${sc})`,
                zIndex,
                opacity: op,
                filter: `grayscale(${rel === 0 ? 0 : 25}%) brightness(${rel === 0 ? 1 : 0.95}) blur(${blur}px)`,
              }}
              onClick={() => !isDragging && setI(idx)}
            >
              <img src={src} alt={`slide-${idx}`} draggable="false" />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
