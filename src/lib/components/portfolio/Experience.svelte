<script lang="ts">
  import { experiences } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Experiencia Profesional">
  <div class="space-y-6 sm:space-y-8">
    {#each experiences as experience, index (experience.id)}
      {#if visible}
        <div
          class="pb-6 sm:pb-8 border-b border-gray-100 last:border-0"
          transition:fade={{ duration: 300, delay: index * 50 }}
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div class="flex-1">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{experience.title}</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-1">{experience.company}</p>
              <p class="text-xs sm:text-sm text-gray-500">{experience.location}</p>
            </div>
            <div class="text-xs sm:text-sm text-gray-500 font-medium">
              {experience.startDate} - {experience.endDate}
            </div>
          </div>

          <ul class="space-y-1.5 sm:space-y-2">
            {#each experience.responsibilities as responsibility}
              <li class="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                <span class="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                <span>{responsibility}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    {/each}
  </div>
</Section>
