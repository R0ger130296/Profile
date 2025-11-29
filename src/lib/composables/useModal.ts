/**
 * Composable for modal management
 * Applies SOLID principles:
 * - Single Responsibility: Only manages modal state
 * - Open/Closed: Extensible without modification
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface ModalState {
  isOpen: boolean;
  data: unknown | null;
}

function createModalStore() {
  const { subscribe, set, update } = writable<ModalState>({
    isOpen: false,
    data: null
  });

  return {
    subscribe,
    open: (data?: unknown) => {
      set({ isOpen: true, data: data || null });
      if (browser) {
        lockBodyScroll();
      }
    },
    close: () => {
      set({ isOpen: false, data: null });
      if (browser) {
        unlockBodyScroll();
      }
    },
    toggle: (data?: unknown) => {
      update((state) => {
        const newState = !state.isOpen;
        if (browser) {
          if (newState) {
            lockBodyScroll();
          } else {
            unlockBodyScroll();
          }
        }
        return { isOpen: newState, data: newState ? (data || null) : null };
      });
    }
  };
}

let scrollbarWidth = 0;
let originalOverflow = '';
let originalPaddingRight = '';

function lockBodyScroll(): void {
  if (!browser) return;

  // Save original values
  originalOverflow = document.body.style.overflow || '';
  originalPaddingRight = document.body.style.paddingRight || '';

  // Calculate scrollbar width before hiding it
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  // Lock scroll
  document.body.style.overflow = 'hidden';
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
}

function unlockBodyScroll(): void {
  if (!browser) return;

  // Restore original values
  document.body.style.overflow = originalOverflow;
  document.body.style.paddingRight = originalPaddingRight;
}

// Export single instance (Singleton pattern)
export const modalStore = createModalStore();

