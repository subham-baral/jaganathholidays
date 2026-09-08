"use client";

import { useEffect } from 'react';

export default function CopyProtection() {
  useEffect(() => {
    // Disable right click / context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable copy
    const handleCopy = (e) => {
      const tag = e.target?.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target?.isContentEditable) {
        e.preventDefault();
        return false;
      }
    };

    // Disable cut
    const handleCut = (e) => {
      const tag = e.target?.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target?.isContentEditable) {
        e.preventDefault();
        return false;
      }
    };

    // Disable image/text dragging
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable key combinations: Ctrl+C, Ctrl+U, Ctrl+Shift+I, F12, etc.
    const handleKeyDown = (e) => {
      const isInput =
        e.target?.tagName === 'INPUT' ||
        e.target?.tagName === 'TEXTAREA' ||
        e.target?.isContentEditable;

      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Disable F12 (Developer tools)
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools)
      if (isCtrlOrCmd && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (isCtrlOrCmd && ['u', 'U'].includes(e.key)) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (isCtrlOrCmd && ['s', 'S'].includes(e.key)) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+C, Ctrl+A outside input fields
      if (!isInput && isCtrlOrCmd && ['c', 'C', 'a', 'A', 'x', 'X'].includes(e.key)) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
