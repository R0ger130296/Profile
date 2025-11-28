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
    <div transition:fade={{ duration: 600 }} class="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
      <!-- Foto circular -->
      <div 
        class="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0"
        transition:fly={{ x: -20, duration: 600, delay: 200 }}
      >
        <div class="relative w-full h-full">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full transform rotate-6 animate-float"></div>
          <img
            src="/me/roger.jpg"
            alt="Roger Cedeño"
            class="relative w-full h-full rounded-full shadow-xl object-cover border-4 border-white"
          />
        </div>
      </div>

      <!-- Texto -->
      <div 
        class="flex-1 text-center md:text-left"
        transition:fly={{ x: 20, duration: 600, delay: 300 }}
      >
        <div class="prose prose-lg max-w-none">
          <p class="text-sm sm:text-base leading-relaxed text-gray-700">{personalInfo.summary}</p>
        </div>
      </div>
    </div>
  {/if}
</Section>

<style>
  @keyframes float {
    0%, 100% {
      transform: rotate(6deg) translateY(0px);
    }
    50% {
      transform: rotate(6deg) translateY(-10px);
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>
