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
      showButton = window.scrollY > 400;
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
    class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-white text-primary-600 rounded-xl shadow-md hover:shadow-lg border border-primary-200 hover:border-secondary-300 hover:text-secondary-600 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center group"
    aria-label="Scroll to top"
    transition:fly={{ y: 16, duration: 250 }}
  >
    <span class="rotate-[-90deg] inline-block group-hover:-translate-y-0.5 transition-transform">
      <Icon name="ChevronRight" size={20} color="currentColor" />
    </span>
  </button>
{/if}
