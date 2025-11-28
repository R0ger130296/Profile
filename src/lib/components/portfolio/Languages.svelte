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
  <div class="flex flex-col gap-4">
    {#each languages as lang, index}
      {#if visible}
        <div
          transition:fly={{ x: -30, duration: 600, delay: index * 150 }}
        >
          <Card
            padding="md"
            elevation="sm"
            className="border-l-4 border-primary-500 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-white to-primary-50/30"
          >
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
              <div class="flex items-center gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg"
                >
                  {lang.name.charAt(0)}
                </div>
                <span class="text-base sm:text-lg font-bold text-gray-900">{lang.name}</span>
              </div>
              <Badge variant="info" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 w-fit">{lang.level}</Badge>
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
</Section>
