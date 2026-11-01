import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const dotConfig = { damping: 40, stiffness: 800, mass: 0.05 };
  const dotX = useSpring(cursorX, dotConfig);
  const dotY = useSpring(cursorY, dotConfig);

  useEffect(() => {
    // Check if touch device or screen width is mobile/tablet
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                      'ontouchstart' in window || 
                      window.innerWidth < 1024;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (window.innerWidth >= 1024) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .clickable');
      setIsHovered(Boolean(isClickable));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden lg:block">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-400/50 bg-indigo-500/10 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : isClicking ? 28 : 34,
          height: isHovered ? 48 : isClicking ? 28 : 34,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(99, 102, 241, 0.45)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.12)' : 'rgba(99, 102, 241, 0.05)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.5 : isClicking ? 1.5 : 1,
        }}
      />
    </div>
  );
};
