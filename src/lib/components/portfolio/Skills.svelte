<script lang="ts">
  import { skills, softSkills } from '$lib/data/portfolio';
  import { Section, Badge } from '$lib/components/ui';
  import { fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Habilidades Técnicas">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
    {#each Object.entries(skills) as [category, skillList], categoryIndex}
      {#if visible}
        <div
          class="flex flex-col"
          transition:fly={{ y: 20, duration: 600, delay: categoryIndex * 100 }}
        >
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
            {category === 'frontend'
              ? 'Frontend'
              : category === 'backend'
                ? 'Backend'
                : category === 'mobile'
                  ? 'Mobile'
                  : category === 'tools'
                    ? 'Herramientas'
                    : 'Metodologías'}
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skillList as skill, skillIndex}
              <Badge
                variant={categoryIndex % 2 === 0 ? 'primary' : 'secondary'}
                className="transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
                transition:scale={{ duration: 300, delay: (categoryIndex * 100) + (skillIndex * 30) }}
              >
                {skill}
              </Badge>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  {#if visible}
    <div
      class="mt-10 pt-10 border-t-2 border-gradient-to-r from-primary-200 to-secondary-200 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 rounded-2xl p-8"
      transition:fade={{ duration: 600, delay: 500 }}
    >
      <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span class="text-3xl">🌟</span>
        Habilidades Blandas
      </h3>
      <div class="flex flex-wrap gap-3">
        {#each softSkills as skill, index}
          <div
            class="px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            transition:fly={{ x: -20, duration: 400, delay: 600 + (index * 50) }}
          >
            {skill}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</Section>
