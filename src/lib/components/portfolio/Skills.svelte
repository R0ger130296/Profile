<script lang="ts">
  import { skills, softSkills } from '$lib/data/portfolio';
  import { Section } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });

  function getLevelColor(level: number): string {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-gray-400';
  }

  function getLevelLabel(level: number): string {
    if (level >= 80) return 'Avanzado';
    if (level >= 60) return 'Intermedio';
    if (level >= 40) return 'Básico';
    return 'Principiante';
  }
</script>

<Section title="Habilidades Técnicas">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
    {#each Object.entries(skills) as [category, skillList], categoryIndex}
      {#if visible}
        <div class="flex flex-col" transition:fade={{ duration: 300, delay: categoryIndex * 50 }}>
          <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-4">
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
          <div class="space-y-3">
            {#each skillList as skill, skillIndex}
              <div
                transition:fly={{ x: -20, duration: 400, delay: categoryIndex * 50 + skillIndex * 30 }}
              >
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</span>
                  <span class="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden group">
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out {getLevelColor(skill.level)} group-hover:shadow-lg"
                    style="width: {skill.level}%"
                  ></div>
                </div>
                <p class="text-xs text-gray-500 mt-0.5">{getLevelLabel(skill.level)}</p>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  {#if visible}
    <div class="pt-6 sm:pt-8 border-t border-gray-100" transition:fade={{ duration: 300, delay: 400 }}>
      <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-4">Habilidades Blandas</h3>
      <div class="flex flex-wrap gap-1.5 sm:gap-2">
        {#each softSkills as skill}
          <span class="text-xs sm:text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
            {skill}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</Section>
