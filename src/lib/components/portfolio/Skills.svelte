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
    if (level >= 85) return 'bg-linear-to-r from-secondary-500 to-secondary-600';
    if (level >= 70) return 'bg-linear-to-r from-primary-500 to-primary-600';
    if (level >= 50) return 'bg-linear-to-r from-primary-400 to-primary-500';
    return 'bg-linear-to-r from-primary-300 to-primary-400';
  }

  function getLevelLabel(level: number): string {
    if (level >= 85) return 'Experto';
    if (level >= 70) return 'Avanzado';
    if (level >= 50) return 'Intermedio';
    return 'En progreso';
  }

  function getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      frontend: '🎨',
      backend: '⚙️',
      mobile: '📱',
      tools: '🛠️',
      methodologies: '📋'
    };
    return icons[category] || '💡';
  }

  function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      tools: 'Herramientas',
      methodologies: 'Metodologías'
    };
    return labels[category] || category;
  }
</script>

<Section title="Habilidades Técnicas">
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 lg:mb-10">
    {#each Object.entries(skills) as [category, skillList], categoryIndex}
      {#if visible}
        <div 
          class="flex flex-col bg-primary-50/50 border border-primary-100 rounded-xl lg:rounded-2xl p-5 lg:p-6 hover:bg-white hover:border-primary-200 hover:shadow-md transition-all duration-300" 
          transition:fade={{ duration: 300, delay: categoryIndex * 50 }}
        >
          <!-- Category Header -->
          <div class="flex items-center gap-2.5 mb-5 pb-3 border-b border-primary-200/60">
            <span class="text-lg">{getCategoryIcon(category)}</span>
            <h3 class="text-base lg:text-lg font-semibold text-primary-800">
              {getCategoryLabel(category)}
            </h3>
          </div>
          
          <!-- Skills List -->
          <div class="space-y-4 lg:space-y-5">
            {#each skillList as skill, skillIndex}
              <div
                transition:fly={{ x: -20, duration: 400, delay: categoryIndex * 50 + skillIndex * 30 }}
                class="group"
              >
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm lg:text-base font-medium text-primary-700">{skill.name}</span>
                  <span class="text-xs font-semibold text-primary-500 bg-primary-100 px-2 py-0.5 rounded-md">{skill.level}%</span>
                </div>
                <div class="w-full bg-primary-100 rounded-full h-2 overflow-hidden">
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out {getLevelColor(skill.level)} group-hover:shadow-sm"
                    style="width: {skill.level}%"
                  ></div>
                </div>
                <p class="text-xs font-medium text-primary-400 mt-1.5">{getLevelLabel(skill.level)}</p>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <!-- Soft Skills -->
  {#if visible}
    <div class="pt-6 lg:pt-8 border-t border-primary-100" transition:fade={{ duration: 300, delay: 400 }}>
      <div class="flex items-center gap-2.5 mb-5">
        <span class="text-lg">💡</span>
        <h3 class="text-base lg:text-lg font-semibold text-primary-800">Habilidades Blandas</h3>
      </div>
      <div class="flex flex-wrap gap-2.5 lg:gap-3">
        {#each softSkills as skill, index}
          <span 
            class="text-sm lg:text-base px-4 py-2 lg:px-5 lg:py-2.5 bg-white text-primary-700 font-medium rounded-lg border border-primary-200 hover:border-secondary-300 hover:bg-secondary-50 hover:text-secondary-700 transition-all duration-200 cursor-default shadow-xs"
            transition:fly={{ y: 10, duration: 300, delay: 450 + index * 30 }}
          >
            {typeof skill === 'string' ? skill : skill.name}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</Section>
