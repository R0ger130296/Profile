<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  export let delay: number = 0;
  export let direction: 'up' | 'left' | 'right' | 'fade' = 'up';
  export let duration: number = 600;

  let visible = false;

  onMount(() => {
    const timer = setTimeout(() => {
      visible = true;
    }, delay);
    return () => clearTimeout(timer);
  });

  $: transitionConfig = {
    duration,
    delay: 0
  };

  $: flyConfig = {
    y: direction === 'up' ? 20 : 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    ...transitionConfig
  };
</script>

{#if visible}
  {#if direction === 'fade'}
    <div transition:fade={transitionConfig}>
      <slot />
    </div>
  {:else}
    <div transition:fly={flyConfig}>
      <slot />
    </div>
  {/if}
{/if}
