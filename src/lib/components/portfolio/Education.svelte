<script lang="ts">
  import { education } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
  import { fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Educación">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each education as edu, index (edu.id)}
      {#if visible}
        <div
          transition:fly={{ y: 30, duration: 600, delay: index * 150 }}
          transition:scale={{ duration: 400, delay: index * 150 }}
        >
          <Card
            padding="lg"
            elevation="sm"
            className="border-l-4 border-secondary-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white via-white to-secondary-50/30 group"
          >
            <div class="mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">🎓</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-600 transition-colors">
                {edu.degree}
              </h3>
              <p class="text-primary-600 font-semibold mb-3">{edu.institution}</p>
              {#if edu.location}
                <Badge variant="secondary" className="mb-3">{edu.location}</Badge>
              {/if}
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="font-medium">{edu.startDate} - {edu.endDate}</span>
              </div>
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
</Section>
