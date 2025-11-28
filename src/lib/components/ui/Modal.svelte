<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { createEventDispatcher, onMount } from 'svelte';
  import { Icon } from './index';

  export let isOpen = false;
  export let title = '';
  export let subtitle: string | undefined = undefined;
  export let maxWidth = 'max-w-3xl';

  const dispatch = createEventDispatcher();

  function handleClose() {
    isOpen = false;
    dispatch('close');
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isOpen) {
      handleClose();
    }
  }

  $: if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    on:click={handleClose}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
  >
    <div
      class="relative {maxWidth} w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
      on:click|stopPropagation
      role="document"
      transition:fly={{ y: 20, duration: 300 }}
    >
      <!-- Header del modal -->
      <div class="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div class="flex-1 pr-4">
          <h3 id="modal-title" class="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            {title}
          </h3>
          {#if subtitle}
            <p class="text-sm sm:text-base text-gray-600">{subtitle}</p>
          {/if}
        </div>
        <button
          on:click={handleClose}
          class="flex-shrink-0 w-9 h-9 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
          aria-label="Cerrar modal"
        >
          <Icon name="X" size={18} color="#374151" />
        </button>
      </div>

      <!-- Contenido del modal -->
      <div class="p-5 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
        <slot />
      </div>
    </div>
  </div>
{/if}

