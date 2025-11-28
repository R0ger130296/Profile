<script lang="ts">
  import { useProjects } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon, Modal, Pagination } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Project } from '$lib/domain/entities';

  let visible = false;
  let projects: Project[] = [];
  let selectedProject: Project | null = null;
  let showModal = false;
  let currentPage = 1;
  const itemsPerPage = 6;

  onMount(async () => {
    visible = true;
    projects = await useProjects();
  });

  function openModal(project: Project) {
    selectedProject = project;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedProject = null;
  }

  function handlePageChange(event: CustomEvent<{ page: number; startIndex: number }>) {
    currentPage = event.detail.page;
  }

  $: totalPages = Math.ceil(projects.length / itemsPerPage);
  $: startIndex = (currentPage - 1) * itemsPerPage;
  $: endIndex = startIndex + itemsPerPage;
  $: paginatedProjects = projects.slice(startIndex, endIndex);
</script>

<Section title="Proyectos">
  <div data-section="projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each paginatedProjects as project, index (project.id)}
      {#if visible}
        <div
          transition:fly={{ y: 20, duration: 500, delay: index * 50 }}
          class="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary-200 hover:shadow-large hover-lift transition-all duration-300"
          on:click={() => openModal(project)}
          on:keydown={(e) => e.key === 'Enter' && openModal(project)}
          role="button"
          tabindex="0"
        >
          <!-- Imagen del proyecto -->
          {#if project.image}
            <div class="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {#if project.featured}
                <div class="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Destacado
                </div>
              {/if}
            </div>
          {:else}
            <div class="relative aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <Icon name="Code" size={48} color="#64748b" />
            </div>
          {/if}

          <!-- Información del proyecto -->
          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {project.name}
            </h3>
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

            <!-- Tecnologías -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              {#each project.technologies.slice(0, 3) as tech}
                <span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium">
                  {tech}
                </span>
              {/each}
              {#if project.technologies.length > 3}
                <span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium">
                  +{project.technologies.length - 3}
                </span>
              {/if}
            </div>

            <!-- Links -->
            <div class="flex items-center gap-3">
              {#if project.githubUrl}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click|stopPropagation
                  class="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Icon name="Github" size={16} color="currentColor" />
                  <span>Code</span>
                </a>
              {/if}
              {#if project.liveUrl}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click|stopPropagation
                  class="flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <Icon name="Globe" size={16} color="currentColor" />
                  <span>Live</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <!-- Paginación -->
  <Pagination
    bind:currentPage={currentPage}
    {totalPages}
    {itemsPerPage}
    totalItems={projects.length}
    on:pageChange={handlePageChange}
  />
</Section>

<!-- Modal para ver detalles del proyecto -->
<Modal
  bind:isOpen={showModal}
  title={selectedProject?.name || ''}
  subtitle={selectedProject ? `${selectedProject.startDate || ''} - ${selectedProject.endDate || 'Presente'}` : ''}
  maxWidth="max-w-4xl"
  on:close={closeModal}
>
  {#if selectedProject}
    <div class="space-y-6">
      {#if selectedProject.image}
        <div class="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            class="w-full h-full object-cover"
          />
        </div>
      {/if}

      <div>
        <h4 class="text-lg font-semibold text-gray-900 mb-3">Descripción</h4>
        <p class="text-gray-700 leading-relaxed">
          {selectedProject.longDescription || selectedProject.description}
        </p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-gray-900 mb-3">Tecnologías Utilizadas</h4>
        <div class="flex flex-wrap gap-2">
          {#each selectedProject.technologies as tech}
            <span class="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg font-medium text-sm">
              {tech}
            </span>
          {/each}
        </div>
      </div>

      <div class="flex items-center gap-4 pt-4 border-t border-gray-200">
        {#if selectedProject.githubUrl}
          <a
            href={selectedProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <Icon name="Github" size={18} color="white" />
            Ver Código
          </a>
        {/if}
        {#if selectedProject.liveUrl}
          <a
            href={selectedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all font-medium"
          >
            <Icon name="Globe" size={18} color="white" />
            Ver Proyecto
          </a>
        {/if}
      </div>
    </div>
  {/if}
</Modal>

<style>
  :global(.line-clamp-2) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

