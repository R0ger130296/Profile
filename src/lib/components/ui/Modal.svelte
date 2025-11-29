<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { Icon } from './index';
  import { useBodyScrollLock } from '$lib/composables';

  // Props - For Svelte 5, use traditional props with bind:isOpen in parent
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
      // Update the prop so the binding works
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

  // Handle scroll lock when opening/closing
  $: if (browser) {
    if (isOpen) {
      lock();
      // Focus on modal after animation
      setTimeout(() => {
        modalElement?.focus();
      }, 100);
    } else {
      unlock();
    }
  }

  // Event listener for Escape
  onMount(() => {
    if (browser) {
      window.addEventListener('keydown', handleKeydown);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('keydown', handleKeydown);
      // Ensure unlock on unmount
      unlock();
    }
  });
</script>

{#if isOpen}
  <!-- Backdrop -->
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-primary-900/60 backdrop-blur-sm"
    on:click={handleBackdropClick}
    on:keydown={handleBackdropKeydown}
    role="presentation"
    tabindex="-1"
    aria-hidden="true"
  >
    <!-- Modal Content -->
    <div
      bind:this={modalElement}
      class="relative {maxWidth} w-full max-h-[90vh] bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden focus:outline-none border border-primary-100"
      on:click={handleContentClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
      transition:fly={{ y: 16, duration: 250 }}
    >
      <!-- Modal Header -->
      <div class="flex items-start justify-between p-5 sm:p-6 lg:p-8 border-b border-primary-100 bg-gradient-to-r from-primary-50/80 to-white">
        <div class="flex-1 pr-4 min-w-0">
          <h3 id="modal-title" class="text-lg sm:text-xl lg:text-2xl font-semibold text-primary-800 mb-1 truncate">
            {title}
          </h3>
          {#if subtitle}
            <p class="text-sm sm:text-base text-primary-500 truncate">{subtitle}</p>
          {/if}
        </div>
        <button
          on:click={handleClose}
          class="shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-white hover:bg-primary-50 active:bg-primary-100 flex items-center justify-center transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 border border-primary-200"
          aria-label="Close modal"
          type="button"
        >
          <Icon name="X" size={18} color="#64748b" />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-120px)] scrollbar-thin">
        <slot />
      </div>
    </div>
  </div>
{/if}
