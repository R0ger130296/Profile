<script lang="ts">
  import { languages } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Idiomas">
  <div class="space-y-3 sm:space-y-4">
    {#each languages as lang, index}
      {#if visible}
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 sm:pb-4 border-b border-gray-100 last:border-0"
          transition:fade={{ duration: 300, delay: index * 50 }}
        >
          <span class="text-sm sm:text-base font-medium text-gray-900">{lang.name}</span>
          <span class="text-xs sm:text-sm text-gray-600">{lang.level}</span>
        </div>
      {/if}
    {/each}
  </div>
</Section>
