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
    <Card {padding} className="border border-gray-200 bg-white">
      {#if title}
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-100">
          {title}
        </h2>
      {/if}
      <slot />
    </Card>
  {:else}
    {#if title}
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-100">
        {title}
      </h2>
    {/if}
    <slot />
  {/if}
</section>
