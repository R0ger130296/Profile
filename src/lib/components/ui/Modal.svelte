<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { Icon } from './index';
  import { useBodyScrollLock } from '$lib/composables';

  // Props - Para Svelte 5, usar props tradicionales con bind:isOpen en el padre
  export let isOpen = false;
  export let title = '';
  export let subtitle: string | undefined = undefined;
  export let maxWidth = 'max-w-3xl';
  export let closeOnBackdropClick = true;
  export let closeOnEscape = true;

  const dispatch = createEventDispatcher();
  let modalElement: HTMLDivElement;
  const { lock, unlock } = useBodyScrollLock();

  function handleClose(): void {
    if (isOpen) {
      unlock();
      dispatch('close');
      // Actualizar el prop para que el binding funcione
      isOpen = false;
    }
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (closeOnEscape && event.key === 'Escape' && isOpen) {
      event.preventDefault();
      event.stopPropagation();
      handleClose();
    }
  }

  function handleBackdropClick(event: MouseEvent): void {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      handleClose();
    }
  }

  function handleBackdropKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClose();
    }
  }

  function handleContentClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  // Manejar scroll lock cuando se abre/cierra
  $: if (browser) {
    if (isOpen) {
      lock();
      // Focus en el modal después de la animación
      setTimeout(() => {
        modalElement?.focus();
      }, 100);
    } else {
      unlock();
    }
  }

  // Event listener para Escape
  onMount(() => {
    if (browser) {
      window.addEventListener('keydown', handleKeydown);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('keydown', handleKeydown);
      // Asegurar unlock al desmontar
      unlock();
    }
  });
</script>

{#if isOpen}
  <!-- Backdrop -->
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    on:click={handleBackdropClick}
    on:keydown={handleBackdropKeydown}
    role="button"
    tabindex="0"
    aria-label="Cerrar modal"
    aria-modal="true"
  >
    <!-- Contenido del modal -->
    <div
      bind:this={modalElement}
      class="relative {maxWidth} w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden focus:outline-none"
      on:click={handleContentClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
      transition:fly={{ y: 20, duration: 300 }}
    >
      <!-- Header del modal -->
      <div class="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div class="flex-1 pr-4 min-w-0">
          <h3 id="modal-title" class="text-lg sm:text-xl font-bold text-gray-900 mb-1 truncate">
            {title}
          </h3>
          {#if subtitle}
            <p class="text-sm sm:text-base text-gray-600 truncate">{subtitle}</p>
          {/if}
        </div>
        <button
          on:click={handleClose}
          class="flex-shrink-0 w-9 h-9 rounded-full bg-white hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Cerrar modal"
          type="button"
        >
          <Icon name="X" size={18} color="#374151" />
        </button>
      </div>

      <!-- Contenido del modal -->
      <div class="p-5 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)] scrollbar-thin">
        <slot />
      </div>
    </div>
  </div>
{/if}
