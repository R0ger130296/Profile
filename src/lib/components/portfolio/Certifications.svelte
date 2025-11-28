<script lang="ts">
  import { useCertifications } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Certification } from '$lib/domain/entities';

  let visible = false;
  let certifications: Certification[] = [];
  let selectedCert: Certification | null = null;
  let showModal = false;

  onMount(async () => {
    visible = true;
    certifications = await useCertifications();
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
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
    {#each certifications as cert, index (cert.id)}
      {#if visible}
        <div
          transition:fly={{ y: 20, duration: 400, delay: index * 40 }}
          class="group cursor-pointer"
          on:click={() => openModal(cert)}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && openModal(cert)}
        >
          <div
            class="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <!-- Imagen del certificado -->
            <div class="relative aspect-[4/3] bg-gray-50 overflow-hidden">
              {#if cert.image}
                <img
                  src={cert.image}
                  alt={cert.name}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              {:else}
                <!-- Placeholder si no hay imagen -->
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <Icon name="Award" size={48} color="#9CA3AF" />
                </div>
              {/if}
              
              <!-- Overlay con efecto hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3"
              >
                <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div class="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p class="text-sm font-semibold text-gray-900">Ver certificado</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Información del certificado -->
            <div class="p-4">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
                {cert.name}
              </h3>
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
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    on:click={closeModal}
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
  >
    <div
      class="relative max-w-6xl w-full max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
      on:click|stopPropagation
      role="document"
      transition:fly={{ y: 20, duration: 300 }}
    >
      <!-- Header del modal -->
      <div class="flex items-center justify-between p-5 border-b border-gray-200 bg-white">
        <h3 id="modal-title" class="text-lg sm:text-xl font-semibold text-gray-900 pr-4 line-clamp-2">
          {selectedCert.name}
        </h3>
        <button
          on:click={closeModal}
          class="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          aria-label="Cerrar modal"
        >
          <Icon name="X" size={18} color="#374151" />
        </button>
      </div>

      <!-- Contenido del modal -->
      <div class="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-80px)] bg-gray-50">
        {#if selectedCert.image}
          <div class="flex justify-center">
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              class="max-w-full h-auto rounded-lg shadow-lg bg-white"
            />
          </div>
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
