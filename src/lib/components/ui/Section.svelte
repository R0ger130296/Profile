<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import Card from './Card.svelte';

  export let title: string | undefined = undefined;
  export let className: string = '';
  export let card: boolean = true;
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  $: sectionClass = cn('mb-8 lg:mb-12', className);
</script>

<section class={sectionClass}>
  {#if card}
    <Card {padding} className="border border-primary-200/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary-300/60 transition-all duration-300">
      {#if title}
        <div class="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-primary-100">
          <!-- Accent line -->
          <div class="w-1 h-6 sm:h-7 rounded-full bg-linear-to-b from-secondary-400 to-secondary-600"></div>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-800 tracking-tight">
            {title}
          </h2>
        </div>
      {/if}
      <slot />
    </Card>
  {:else}
    {#if title}
      <div class="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-primary-100">
        <!-- Accent line -->
        <div class="w-1 h-6 sm:h-7 rounded-full bg-linear-to-b from-secondary-400 to-secondary-600"></div>
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-800 tracking-tight">
          {title}
        </h2>
      </div>
    {/if}
    <slot />
  {/if}
</section>
