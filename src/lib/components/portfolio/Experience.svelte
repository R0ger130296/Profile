<script lang="ts">
  import { useExperiences } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon, Modal, Pagination } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import type { Experience } from '$lib/domain/entities';

  let visible = false;
  let experiences: Experience[] = [];
  let selectedExperience: Experience | null = null;
  let showModal = false;
  let currentPage = 1;
  const itemsPerPage = 3;

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

  function handlePageChange(event: CustomEvent<{ page: number; startIndex: number }>) {
    currentPage = event.detail.page;
    // Smooth scroll to the top of the section
    if (browser) {
      const section = document.querySelector('[data-section="experience"]');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  $: totalPages = Math.ceil(experiences.length / itemsPerPage);
  $: startIndex = (currentPage - 1) * itemsPerPage;
  $: endIndex = startIndex + itemsPerPage;
  $: paginatedExperiences = experiences.slice(startIndex, endIndex);
</script>

<Section title="Experiencia Profesional">
  <div data-section="experience" class="space-y-4 sm:space-y-5 lg:space-y-6">
    {#each paginatedExperiences as experience, index (experience.id)}
      {#if visible}
        <div
          transition:fade={{ duration: 300, delay: index * 50 }}
          class="group cursor-pointer"
          on:click={() => openModal(experience)}
          on:keydown={(e) => e.key === 'Enter' && openModal(experience)}
          role="button"
          tabindex="0"
        >
          <div class="relative bg-white border border-primary-200/60 rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-7 xl:p-8 hover:border-secondary-300 hover:shadow-md hover-lift transition-all duration-200 group overflow-hidden">
            <!-- Subtle accent on left -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-secondary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-xl"></div>
            
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-6 mb-4">
              <div class="flex-1 min-w-0">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-primary-800 mb-2 group-hover:text-secondary-700 transition-colors truncate">
                  {experience.title}
                </h3>
                <div class="flex flex-wrap items-center gap-2 text-sm lg:text-base">
                  <span class="font-medium text-primary-700">{experience.company}</span>
                  <span class="w-1 h-1 rounded-full bg-primary-300"></span>
                  <span class="text-primary-500">{experience.location}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 text-sm lg:text-base text-primary-500 font-medium whitespace-nowrap bg-primary-50 px-3 py-1.5 rounded-lg">
                <Icon name="Calendar" size={14} color="currentColor" />
                <span>{experience.startDate} - {experience.endDate}</span>
              </div>
            </div>

            <ul class="space-y-2 mb-4">
              {#each getMainResponsibilities(experience.responsibilities) as responsibility}
                <li class="flex items-start gap-3 text-sm lg:text-base text-primary-600 leading-relaxed">
                  <span class="text-secondary-500 mt-1 shrink-0">
                    <Icon name="ChevronRight" size={14} color="currentColor" />
                  </span>
                  <span>{responsibility}</span>
                </li>
              {/each}
            </ul>

            {#if experience.responsibilities.length > 3}
              <div class="flex items-center gap-2 text-sm font-medium text-secondary-600 group-hover:text-secondary-700 transition-colors">
                <span>Ver más detalles</span>
                <Icon name="ChevronRight" size={16} color="currentColor" />
              </div>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <Pagination
    bind:currentPage={currentPage}
    {totalPages}
    {itemsPerPage}
    totalItems={experiences.length}
    on:pageChange={handlePageChange}
  />
</Section>

<Modal
  bind:isOpen={showModal}
  title={getModalTitle()}
  subtitle={getModalSubtitle()}
  maxWidth="max-w-3xl lg:max-w-4xl"
  on:close={closeModal}
>
  {#if selectedExperience}
    <div>
      <h4 class="text-base lg:text-lg font-semibold text-primary-800 mb-5">Responsabilidades y Logros:</h4>
      <ul class="space-y-3">
        {#each selectedExperience.responsibilities as responsibility}
          <li class="flex items-start gap-3 text-sm sm:text-base lg:text-lg text-primary-700 leading-relaxed">
            <span class="text-secondary-500 mt-1 shrink-0">
              <Icon name="CheckCircle" size={18} color="currentColor" />
            </span>
            <span>{responsibility}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</Modal>
