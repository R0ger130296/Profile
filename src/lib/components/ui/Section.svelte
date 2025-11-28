<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import Card from './Card.svelte';

  export let title: string | undefined = undefined;
  export let className: string = '';
  export let card: boolean = true;
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  $: sectionClass = cn('mb-12', className);
</script>

<section class={sectionClass}>
  {#if card}
    <Card {padding} className="border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow duration-300">
      {#if title}
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 pb-4 border-b border-gray-200 relative">
          <span class="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
          {title}
        </h2>
      {/if}
      <slot />
    </Card>
  {:else}
    {#if title}
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 pb-4 border-b border-gray-200 relative">
        <span class="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
        {title}
      </h2>
    {/if}
    <slot />
  {/if}
</section>
