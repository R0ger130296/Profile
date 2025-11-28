<script lang="ts">
  import { education } from '$lib/data/portfolio';
  import { Section, Card, Badge, Icon } from '$lib/components/ui';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Educación">
  <div class="space-y-4 sm:space-y-6">
    {#each education as edu, index (edu.id)}
      {#if visible}
        <div
          class="pb-4 sm:pb-6 border-b border-gray-100 last:border-0"
          transition:fade={{ duration: 300, delay: index * 50 }}
        >
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
          <p class="text-sm sm:text-base text-gray-600 mb-1">{edu.institution}</p>
          <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
            {#if edu.location}
              <span>{edu.location}</span>
              <span>•</span>
            {/if}
            <span>{edu.startDate} - {edu.endDate}</span>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</Section>
