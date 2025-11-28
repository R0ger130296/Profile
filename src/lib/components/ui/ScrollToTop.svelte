<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { Icon } from './index';
  import { fly } from 'svelte/transition';

  let showButton = false;

  function scrollToTop() {
    if (browser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleScroll() {
    if (browser) {
      showButton = window.scrollY > 300;
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

{#if showButton}
  <button
    on:click={scrollToTop}
    class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    aria-label="Volver arriba"
    transition:fly={{ y: 20, duration: 300 }}
  >
    <span class="rotate-[-90deg] inline-block group-hover:translate-y-[-2px] transition-transform">
      <Icon name="ChevronRight" size={20} color="white" />
    </span>
  </button>
{/if}

