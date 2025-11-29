/**
 * Composable for body scroll management
 * Single Responsibility: Only handles scroll lock/unlock
 * Enhanced for Svelte 5 with runes
 */
import { onDestroy } from 'svelte';
import { browser } from '$app/environment';

// Shared global state to handle multiple locks
let activeLocks = 0;
let originalOverflow = '';
let originalPaddingRight = '';
let scrollbarWidth = 0;

function lockBodyScroll(): void {
  if (!browser) return;

  activeLocks++;

  // Only apply the lock the first time
  if (activeLocks === 1) {
    originalOverflow = document.body.style.overflow || '';
    originalPaddingRight = document.body.style.paddingRight || '';
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
}

function unlockBodyScroll(): void {
  if (!browser) return;

  activeLocks = Math.max(0, activeLocks - 1);

  // Only unlock when there are no more active locks
  if (activeLocks === 0) {
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = originalPaddingRight;
  }
}

export function useBodyScrollLock() {
  // Auto-unlock on unmount
  onDestroy(() => {
    if (activeLocks > 0) {
      unlockBodyScroll();
    }
  });

  return {
    lock: lockBodyScroll,
    unlock: unlockBodyScroll
  };
}
