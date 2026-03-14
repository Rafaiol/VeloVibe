import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'SELECT' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') || 
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        target.onclick !== null;
      
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Star Cursor */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9999] text-orange select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.span 
          className="text-2xl drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          ✦
        </motion.span>
      </motion.div>
      
      {/* Outer circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-orange/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? 'rgba(249, 115, 22, 0.05)' : 'rgba(249, 115, 22, 0)',
          borderColor: isHovering ? 'rgba(249, 115, 22, 0.5)' : 'rgba(249, 115, 22, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
