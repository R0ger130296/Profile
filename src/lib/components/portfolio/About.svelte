<script lang="ts">
  import { usePersonalInfo } from '$lib/presentation/hooks/usePortfolio';
  import { Section } from '$lib/components/ui';
  import { fade, fly } from 'svelte/transition';
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
    <div transition:fade={{ duration: 600 }} class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start">
      <!-- Profile Photo -->
      <div 
        class="shrink-0 w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto lg:mx-0"
        transition:fly={{ x: -20, duration: 600, delay: 200 }}
      >
        <div class="relative w-full h-full group">
          <!-- Decorative background -->
          <div class="absolute inset-0 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
          
          <!-- Photo -->
          <img
            src="/me/roger.jpg"
            alt="Roger Cedeño"
            class="relative w-full h-full rounded-2xl shadow-lg object-cover border-4 border-white"
          />
          
          <!-- Status indicator -->
          <div class="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
            <div class="w-4 h-4 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full animate-pulse-subtle"></div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div 
        class="flex-1 text-center lg:text-left"
        transition:fly={{ x: 20, duration: 600, delay: 300 }}
      >
        <div class="max-w-2xl mx-auto lg:mx-0">
          <p class="text-base sm:text-lg lg:text-xl leading-relaxed text-primary-600 mb-6">
            {personalInfo.summary}
          </p>
          
          <!-- Quick stats -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
            <div class="flex items-center gap-2 text-sm lg:text-base text-primary-500">
              <span class="w-2 h-2 rounded-full bg-secondary-400"></span>
              <span class="font-medium">+4 años de experiencia</span>
            </div>
            <div class="flex items-center gap-2 text-sm lg:text-base text-primary-500">
              <span class="w-2 h-2 rounded-full bg-secondary-400"></span>
              <span class="font-medium">Full Stack Developer</span>
            </div>
            <div class="flex items-center gap-2 text-sm lg:text-base text-primary-500">
              <span class="w-2 h-2 rounded-full bg-secondary-400"></span>
              <span class="font-medium">Consultor Técnico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</Section>
