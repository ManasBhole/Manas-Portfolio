'use client';

import { useEffect, useCallback } from 'react';

export default function CursorGlow() {
  const updateCursorPosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;
  
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
  
      if (Math.abs(e.clientX - lastX) > 1 || Math.abs(e.clientY - lastY) > 1) {
        lastX = e.clientX;
        lastY = e.clientY;
        rafId = requestAnimationFrame(() => updateCursorPosition(e));
      }
    };
  
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [updateCursorPosition]);  

  return null;
}
