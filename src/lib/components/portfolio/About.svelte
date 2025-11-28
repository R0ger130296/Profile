<script lang="ts">
  import { personalInfo } from '$lib/data/portfolio';
  import { Section, Icon } from '$lib/components/ui';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Sobre Mí">
  {#if visible}
    <div transition:fade={{ duration: 600 }}>
      <div class="prose prose-lg max-w-none">
        <p class="text-lg leading-relaxed text-gray-700 mb-6">{personalInfo.summary}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div
            class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Briefcase" size={28} color="white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Experiencia</h3>
            <p class="text-sm text-gray-600">Más de 4 años desarrollando soluciones innovadoras</p>
          </div>
          <div
            class="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Rocket" size={28} color="white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Tecnologías</h3>
            <p class="text-sm text-gray-600">Stack moderno: React, Next.js, NestJS, Svelte</p>
          </div>
          <div
            class="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl border border-accent-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Target" size={28} color="white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Enfoque</h3>
            <p class="text-sm text-gray-600">Código limpio, arquitectura escalable y buenas prácticas</p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</Section>
