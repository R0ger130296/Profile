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
    <Card {padding} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      {#if title}
        <h2
          class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-8 pb-4 border-b-4 border-gradient-to-r from-primary-200 to-secondary-200 relative"
        >
          <span class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
          {title}
        </h2>
      {/if}
      <slot />
    </Card>
  {:else}
    {#if title}
      <h2
        class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-8 pb-4 border-b-4 border-gradient-to-r from-primary-200 to-secondary-200"
      >
        {title}
      </h2>
    {/if}
    <slot />
  {/if}
</section>
