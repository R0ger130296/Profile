<script lang="ts">
  import { useExperiences } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon, Modal } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Experience } from '$lib/domain/entities';

  let visible = false;
  let experiences: Experience[] = [];
  let selectedExperience: Experience | null = null;
  let showModal = false;

  onMount(async () => {
    visible = true;
    experiences = await useExperiences();
  });

  function openModal(experience: Experience) {
    selectedExperience = experience;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedExperience = null;
  }

  function getMainResponsibilities(responsibilities: string[]): string[] {
    return responsibilities.slice(0, 3);
  }

  function getModalTitle(): string {
    return selectedExperience?.title || '';
  }

  function getModalSubtitle(): string {
    if (!selectedExperience) return '';
    return `${selectedExperience.company} • ${selectedExperience.location} • ${selectedExperience.startDate} - ${selectedExperience.endDate}`;
  }
</script>

<Section title="Experiencia Profesional">
  <div class="space-y-4 sm:space-y-6">
    {#each experiences as experience, index (experience.id)}
      {#if visible}
        <div
          transition:fade={{ duration: 300, delay: index * 50 }}
          class="group cursor-pointer"
          on:click={() => openModal(experience)}
          on:keydown={(e) => e.key === 'Enter' && openModal(experience)}
          role="button"
          tabindex="0"
        >
          <div class="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg hover-lift transition-all duration-300">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
              <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {experience.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mb-1">{experience.company}</p>
                <p class="text-xs sm:text-sm text-gray-500">{experience.location}</p>
              </div>
              <div class="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
                {experience.startDate} - {experience.endDate}
              </div>
            </div>

            <ul class="space-y-1.5 mb-3">
              {#each getMainResponsibilities(experience.responsibilities) as responsibility}
                <li class="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                  <span class="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>{responsibility}</span>
                </li>
              {/each}
            </ul>

            {#if experience.responsibilities.length > 3}
              <div class="flex items-center gap-2 text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                <span>Ver más detalles</span>
                <Icon name="ChevronRight" size={16} color="currentColor" />
              </div>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</Section>

<!-- Modal para ver detalles completos -->
<Modal
  bind:isOpen={showModal}
  title={getModalTitle()}
  subtitle={getModalSubtitle()}
  maxWidth="max-w-3xl"
  on:close={closeModal}
>
  {#if selectedExperience}
    <div>
      <h4 class="text-base font-semibold text-gray-900 mb-4">Responsabilidades y Logros:</h4>
      <ul class="space-y-2.5">
        {#each selectedExperience.responsibilities as responsibility}
          <li class="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <span class="text-primary-500 mt-1.5 flex-shrink-0">
              <Icon name="CheckCircle" size={18} color="currentColor" />
            </span>
            <span>{responsibility}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</Modal>
