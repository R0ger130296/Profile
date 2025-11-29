<script lang="ts">
  import { useCertifications } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon, Pagination, Modal } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import type { Certification } from '$lib/domain/entities';

  let visible = false;
  let certifications: Certification[] = [];
  let selectedCert: Certification | null = null;
  let showModal = false;
  let currentPage = 1;
  const itemsPerPage = 8; // 8 certificados por página

  onMount(async () => {
    visible = true;
    certifications = await useCertifications();
  });

  function openModal(cert: typeof certifications[0]) {
    selectedCert = cert;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedCert = null;
  }

  function handlePageChange(event: CustomEvent<{ page: number; startIndex: number }>) {
    currentPage = event.detail.page;
    // Smooth scroll to the top of the section
    if (browser) {
      const section = document.querySelector('[data-section="certifications"]');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  $: totalPages = Math.ceil(certifications.length / itemsPerPage);
  $: startIndex = (currentPage - 1) * itemsPerPage;
  $: endIndex = startIndex + itemsPerPage;
  $: paginatedCertifications = certifications.slice(startIndex, endIndex);
</script>


<Section title="Certificaciones">
  <div data-section="certifications" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
    {#each paginatedCertifications as cert, index (cert.id)}
      {#if visible}
        <div
          transition:fly={{ y: 20, duration: 500, delay: index * 30 }}
          class="group cursor-pointer"
          on:click={() => openModal(cert)}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && openModal(cert)}
        >
          <div
            class="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-200 hover:shadow-lg hover-lift transition-all duration-300 group"
          >
            <!-- Imagen del certificado -->
            <div class="relative aspect-[4/3] sm:aspect-[4/3] bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden max-h-[200px] sm:max-h-none">
              {#if cert.image}
                {#if cert.image.endsWith('.pdf')}
                  <!-- Para PDFs, mostrar preview usando object -->
                  <div class="w-full h-full relative bg-white">
                    <object
                      data="{cert.image}#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
                      type="application/pdf"
                      class="w-full h-full pointer-events-none"
                      aria-label="Vista previa del certificado {cert.name}"
                      title="Vista previa del certificado {cert.name}"
                    >
                      <!-- Fallback si el PDF no se puede mostrar -->
                      <div class="w-full h-full flex items-center justify-center bg-linear-to-br from-primary-50 via-secondary-50 to-accent-50">
                        <div class="text-center p-4">
                          <div
                            class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-linear-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg"
                          >
                            <Icon name="Award" size={24} color="white" />
                          </div>
                          <p class="text-[10px] sm:text-xs text-gray-600 font-medium">PDF</p>
                        </div>
                      </div>
                    </object>
                    <!-- Overlay con gradiente para mejor visualización -->
                    <div class="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none"></div>
                    <!-- Badge PDF -->
                    <div class="absolute top-2 left-2 bg-primary-500/90 text-white text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md font-semibold backdrop-blur-sm shadow-md">
                      PDF
                    </div>
                  </div>
                {:else}
                  <!-- Para imágenes JPG -->
                  <img
                    src={cert.image}
                    alt={cert.name}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                {/if}
              {:else}
                <!-- Placeholder si no hay imagen -->
                <div class="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                  <Icon name="Award" size={48} color="#9CA3AF" />
                </div>
              {/if}
              
              <!-- Overlay con efecto hover -->
              <div
                class="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              >
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div class="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p class="text-sm font-semibold text-gray-900 text-center">Ver certificado</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Información del certificado -->
            <div class="p-3 sm:p-4">
              <h3 class="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
                {cert.name}
              </h3>
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
    totalItems={certifications.length}
    on:pageChange={handlePageChange}
  />
</Section>

<!-- Modal para ver certificado en tamaño completo -->
<Modal
  bind:isOpen={showModal}
  title={selectedCert?.name || ''}
  maxWidth="max-w-5xl"
  on:close={closeModal}
>
  {#if selectedCert?.image}
    {#if selectedCert.image.endsWith('.pdf')}
      <!-- Para PDFs, mostrar un iframe o enlace de descarga -->
      <div class="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
        <div class="text-center mb-4 sm:mb-6">
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 bg-linear-to-br from-primary-500 to-secondary-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl"
          >
            <Icon name="Award" size={32} color="white" />
          </div>
          <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Certificado en formato PDF</p>
          <a
            href={selectedCert.image}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-linear-to-r from-primary-600 to-secondary-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Icon name="Download" size={18} color="white" />
            Abrir PDF
          </a>
        </div>
        <iframe
          src={selectedCert.image}
          class="w-full h-[400px] sm:h-[500px] md:h-[600px] border-0 rounded-lg shadow-lg"
          title={selectedCert.name}
        ></iframe>
      </div>
    {:else}
      <!-- Para imágenes -->
      <div class="flex justify-center">
        <img
          src={selectedCert.image}
          alt={selectedCert.name}
          class="max-w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    {/if}
  {:else}
    <div class="flex items-center justify-center min-h-[400px]">
      <p class="text-gray-500">No hay imagen disponible para este certificado</p>
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
