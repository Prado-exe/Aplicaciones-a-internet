import { useRef, useState } from "react";

export default function useCarouselrag({ gap = 60 }) {
  const stageRef = useRef(null);
  const [dragUnits, setDragUnits] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({
    startX: 0,
    lastX: 0,
    lastT: 0,
    vx: 0,
    active: false,
    pointerId: null,
  });

  const pxToUnits = (dxPx) => {
    const w = stageRef.current?.offsetWidth || 1;
    return (dxPx / w) * (100 / gap);
  };

  const onPointerDown = (e) => {
    stageRef.current?.setPointerCapture?.(e.pointerId);
    dragRef.current.active = true;
    dragRef.current.pointerId = e.pointerId;
    dragRef.current.startX = e.clientX;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastT = performance.now();
    dragRef.current.vx = 0;
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const now = performance.now();
    const dx = e.clientX - dragRef.current.startX;

    const dt = Math.max(1, now - dragRef.current.lastT);
    const instVx = (e.clientX - dragRef.current.lastX) / dt;
    dragRef.current.vx = 0.8 * dragRef.current.vx + 0.2 * instVx;

    dragRef.current.lastX = e.clientX;
    dragRef.current.lastT = now;

    setDragUnits(pxToUnits(dx));
  };

  const onPointerUp = (e, decideIndexChange, pxToUnitsArg = pxToUnits) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setIsDragging(false);

    const dx = e.clientX - dragRef.current.startX;
    const units = pxToUnitsArg(dx);
    const speed = dragRef.current.vx;

    decideIndexChange?.({ units, speed });

    // reset visual
    setDragUnits(0);

    try {
      stageRef.current?.releasePointerCapture?.(dragRef.current.pointerId);
    } catch {}
    dragRef.current.pointerId = null;
  };

  const onPointerCancel = () => {
    dragRef.current.active = false;
    setIsDragging(false);
    setDragUnits(0);
    try {
      stageRef.current?.releasePointerCapture?.(dragRef.current.pointerId);
    } catch {}
    dragRef.current.pointerId = null;
  };

  return {
    stageRef,
    dragUnits,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    pxToUnits,
  };
}
