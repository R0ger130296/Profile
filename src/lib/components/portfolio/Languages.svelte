<script lang="ts">
  import { languages } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = $state(false);

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
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {lang.name.charAt(0)}
                </div>
                <span class="text-lg font-bold text-gray-900">{lang.name}</span>
              </div>
              <Badge variant="info" className="text-sm px-4 py-2">{lang.level}</Badge>
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
</Section>
