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
    if (level >= 80) return 'bg-gradient-to-r from-green-500 to-green-600';
    if (level >= 60) return 'bg-gradient-to-r from-blue-500 to-blue-600';
    if (level >= 40) return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
    return 'bg-gradient-to-r from-gray-400 to-gray-500';
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
        <div class="flex flex-col bg-gray-50 rounded-xl p-5 hover:bg-white transition-colors duration-300" transition:fade={{ duration: 300, delay: categoryIndex * 50 }}>
          <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
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
          <div class="space-y-4">
            {#each skillList as skill, skillIndex}
              <div
                transition:fly={{ x: -20, duration: 400, delay: categoryIndex * 50 + skillIndex * 30 }}
                class="group"
              >
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm sm:text-base font-semibold text-gray-800">{skill.name}</span>
                  <span class="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out {getLevelColor(skill.level)} group-hover:shadow-lg relative overflow-hidden"
                    style="width: {skill.level}%"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <p class="text-xs font-medium text-gray-500 mt-1.5">{getLevelLabel(skill.level)}</p>
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
      <div class="flex flex-wrap gap-2 sm:gap-3">
        {#each softSkills as skill}
          <span class="text-xs sm:text-sm px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 text-gray-700 font-medium rounded-full border border-primary-100 hover:border-primary-300 hover:shadow-soft transition-all duration-200 cursor-default">
            {typeof skill === 'string' ? skill : skill.name}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</Section>
