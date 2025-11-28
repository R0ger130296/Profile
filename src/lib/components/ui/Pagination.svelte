<script lang="ts">
  import { Icon } from './index';
  import { createEventDispatcher } from 'svelte';

  export let currentPage = 1;
  export let totalPages = 1;
  export let itemsPerPage = 6;
  export let totalItems = 0;

  const dispatch = createEventDispatcher();

  $: startItem = (currentPage - 1) * itemsPerPage + 1;
  $: endItem = Math.min(currentPage * itemsPerPage, totalItems);
  $: showPagination = totalPages > 1;

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      currentPage = page;
      dispatch('pageChange', { page, startIndex: (page - 1) * itemsPerPage });
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }

  function getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  }
</script>

{#if showPagination}
  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 pt-6 border-t border-gray-200">
    <!-- Información de items -->
    <div class="text-sm text-gray-600">
      Mostrando <span class="font-medium text-gray-900">{startItem}</span> - <span class="font-medium text-gray-900">{endItem}</span> de <span class="font-medium text-gray-900">{totalItems}</span>
    </div>

    <!-- Controles de paginación -->
    <div class="flex items-center gap-2">
      <!-- Botón anterior -->
      <button
        on:click={prevPage}
        disabled={currentPage === 1}
        class="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-1"
        aria-label="Página anterior"
      >
        <span class="rotate-180 inline-block">
          <Icon name="ChevronRight" size={16} color="currentColor" />
        </span>
        <span class="hidden sm:inline">Anterior</span>
      </button>

      <!-- Números de página -->
      <div class="flex items-center gap-1">
        {#each getPageNumbers() as page}
          {#if typeof page === 'number'}
            <button
              on:click={() => goToPage(page)}
              class="min-w-[40px] px-3 py-2 rounded-lg border transition-all duration-200 {currentPage === page
                ? 'border-primary-500 bg-primary-50 text-primary-700 font-semibold'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'}"
              aria-label="Ir a página {page}"
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          {:else}
            <span class="px-2 text-gray-400">...</span>
          {/if}
        {/each}
      </div>

      <!-- Botón siguiente -->
      <button
        on:click={nextPage}
        disabled={currentPage === totalPages}
        class="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-1"
        aria-label="Página siguiente"
      >
        <span class="hidden sm:inline">Siguiente</span>
        <Icon name="ChevronRight" size={16} color="currentColor" />
      </button>
    </div>
  </div>
{/if}

