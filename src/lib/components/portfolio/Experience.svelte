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
  <div class="relative">
    <!-- Timeline line -->
    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-transparent hidden md:block"></div>

    <div class="flex flex-col gap-8">
      {#each experiences as experience, index (experience.id)}
        {#if visible}
          <div
            class="relative pl-0 md:pl-16"
            transition:fly={{ y: 30, duration: 600, delay: index * 100 }}
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg hidden md:block z-10"
            ></div>

            <Card
              padding="lg"
              elevation="sm"
              className="border-l-4 border-primary-500 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
            >
              <div class="mb-4 sm:mb-6">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div class="flex-1">
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      <p class="text-lg sm:text-xl text-primary-600 font-semibold">{experience.company}</p>
                      <Badge variant="info" className="animate-pulse-slow text-xs sm:text-sm">{experience.location}</Badge>
                    </div>
                  </div>
                  <div
                    class="px-3 sm:px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg text-sm sm:text-base whitespace-nowrap"
                  >
                    {experience.startDate} - {experience.endDate}
                  </div>
                </div>
              </div>

              <ul class="space-y-2 sm:space-y-3">
                {#each experience.responsibilities as responsibility, i}
                  <li
                    class="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 leading-relaxed"
                    transition:fade={{ duration: 400, delay: (index * 100) + (i * 50) }}
                  >
                    <span class="text-primary-500 font-bold mt-1 flex-shrink-0">▸</span>
                    <span>{responsibility}</span>
                  </li>
                {/each}
              </ul>
            </Card>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</Section>
