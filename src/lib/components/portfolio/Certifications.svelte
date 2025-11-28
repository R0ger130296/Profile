<script lang="ts">
  import { certifications } from '$lib/data/portfolio';
  import { Section, Icon } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  let selectedCert: typeof certifications[0] | null = null;
  let showModal = false;

  onMount(() => {
    visible = true;
  });

  function openModal(cert: typeof certifications[0]) {
    selectedCert = cert;
    showModal = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    showModal = false;
    selectedCert = null;
    document.body.style.overflow = '';
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && showModal) {
      closeModal();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<Section title="Certificaciones">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
    {#each certifications as cert, index (cert.id)}
      {#if visible}
        <div
          transition:fly={{ y: 20, duration: 500, delay: index * 50 }}
          class="group cursor-pointer"
          on:click={() => openModal(cert)}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && openModal(cert)}
        >
          <div
            class="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <!-- Imagen del certificado -->
            <div class="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              {#if cert.image}
                {#if cert.image.endsWith('.pdf')}
                  <!-- Para PDFs, mostrar un preview con icono -->
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
                    <div class="text-center p-4">
                      <div
                        class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      >
                        <Icon name="Award" size={32} color="white" />
                      </div>
                      <p class="text-xs text-gray-600 font-medium">PDF</p>
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
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <Icon name="Award" size={48} color="#9CA3AF" />
                </div>
              {/if}
              
              <!-- Overlay con efecto hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              >
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div class="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p class="text-sm font-semibold text-gray-900 text-center">Ver certificado</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Información del certificado -->
            <div class="p-4">
              <h3
                class="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200"
              >
                {cert.name}
              </h3>
              {#if cert.issuer}
                <p class="text-xs text-gray-500 mt-1">{cert.issuer}</p>
              {/if}
            </div>

            <!-- Badge de certificado -->
            <div
              class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md group-hover:scale-110 transition-transform duration-300"
            >
              <Icon name="Award" size={16} color="#6366F1" />
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</Section>

<!-- Modal para ver certificado en tamaño completo -->
{#if showModal && selectedCert}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    on:click={closeModal}
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
  >
    <div
      class="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
      on:click|stopPropagation
      role="document"
      transition:fly={{ y: 20, duration: 300 }}
    >
      <!-- Header del modal -->
      <div class="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50">
        <h3 id="modal-title" class="text-lg md:text-xl font-bold text-gray-900 pr-4">
          {selectedCert.name}
        </h3>
        <button
          on:click={closeModal}
          class="flex-shrink-0 w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
          aria-label="Cerrar modal"
        >
          <Icon name="X" size={20} color="#374151" />
        </button>
      </div>

      <!-- Contenido del modal -->
      <div class="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
        {#if selectedCert.image}
          {#if selectedCert.image.endsWith('.pdf')}
            <!-- Para PDFs, mostrar un iframe o enlace de descarga -->
            <div class="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 rounded-lg p-8">
              <div class="text-center mb-6">
                <div
                  class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Icon name="Award" size={48} color="white" />
                </div>
                <p class="text-gray-600 mb-4">Certificado en formato PDF</p>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Icon name="Download" size={20} color="white" />
                  Abrir PDF
                </a>
              </div>
              <iframe
                src={selectedCert.image}
                class="w-full h-[600px] border-0 rounded-lg shadow-lg"
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
      </div>
    </div>
  </div>
{/if}

<style>
  :global(.line-clamp-2) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>