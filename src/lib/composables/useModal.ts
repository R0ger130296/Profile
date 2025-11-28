/**
 * Composable para manejo de modales
 * Aplica principios SOLID:
 * - Single Responsibility: Solo maneja el estado del modal
 * - Open/Closed: Extensible sin modificar
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

  // Guardar valores originales
  originalOverflow = document.body.style.overflow || '';
  originalPaddingRight = document.body.style.paddingRight || '';

  // Calcular ancho del scrollbar antes de ocultarlo
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  // Bloquear scroll
  document.body.style.overflow = 'hidden';
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
}

function unlockBodyScroll(): void {
  if (!browser) return;

  // Restaurar valores originales
  document.body.style.overflow = originalOverflow;
  document.body.style.paddingRight = originalPaddingRight;
}

// Exportar instancia única (Singleton pattern)
export const modalStore = createModalStore();

