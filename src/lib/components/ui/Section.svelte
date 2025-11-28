<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import Card from './Card.svelte';

  export let title: string | undefined = undefined;
  export let className: string = '';
  export let card: boolean = true;
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  $: sectionClass = cn('mb-8', className);
</script>

<section class={sectionClass}>
  {#if card}
    <Card {padding}>
      {#if title}
        <h2 class="text-2xl font-semibold text-primary mb-6 pb-2 border-b-4 border-primary">
          {title}
        </h2>
      {/if}
      <slot />
    </Card>
  {:else}
    {#if title}
      <h2 class="text-2xl font-semibold text-primary mb-6 pb-2 border-b-4 border-primary">
        {title}
      </h2>
    {/if}
    <slot />
  {/if}
</section>
