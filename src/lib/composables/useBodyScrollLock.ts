/**
 * Composable para manejo de scroll del body
 * Single Responsibility: Solo maneja el bloqueo/desbloqueo del scroll
 * Mejorado para Svelte 5 con runes
 */
import { onDestroy } from 'svelte';
import { browser } from '$app/environment';

// Estado global compartido para manejar múltiples locks
let activeLocks = 0;
let originalOverflow = '';
let originalPaddingRight = '';
let scrollbarWidth = 0;

function lockBodyScroll(): void {
  if (!browser) return;

  activeLocks++;

  // Solo aplicar el lock la primera vez
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

  // Solo desbloquear cuando no hay más locks activos
  if (activeLocks === 0) {
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = originalPaddingRight;
  }
}

export function useBodyScrollLock() {
  // Auto-unlock al desmontar
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
