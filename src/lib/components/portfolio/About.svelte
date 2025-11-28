<script lang="ts">
  import { usePersonalInfo } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon } from '$lib/components/ui';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { PersonalInfo } from '$lib/domain/entities';

  let visible = false;
  let personalInfo: PersonalInfo | null = null;

  onMount(async () => {
    visible = true;
    personalInfo = await usePersonalInfo();
  });
</script>

<Section title="Sobre Mí">
  {#if visible && personalInfo}
    <div transition:fade={{ duration: 600 }}>
      <div class="prose prose-lg max-w-none">
        <p class="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">{personalInfo.summary}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div
            class="bg-gradient-to-br from-primary-50 to-primary-100 p-4 sm:p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Briefcase" size={24} color="white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Experiencia</h3>
            <p class="text-xs sm:text-sm text-gray-600">Más de 4 años desarrollando soluciones innovadoras</p>
          </div>
          <div
            class="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 sm:p-6 rounded-xl border border-secondary-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Rocket" size={24} color="white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Tecnologías</h3>
            <p class="text-xs sm:text-sm text-gray-600">Stack moderno: React, Next.js, NestJS, Svelte</p>
          </div>
          <div
            class="bg-gradient-to-br from-accent-50 to-accent-100 p-4 sm:p-6 rounded-xl border border-accent-200 hover:shadow-lg transition-all duration-300 group sm:col-span-2 lg:col-span-1"
          >
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Target" size={24} color="white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Enfoque</h3>
            <p class="text-xs sm:text-sm text-gray-600">Código limpio, arquitectura escalable y buenas prácticas</p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</Section>
