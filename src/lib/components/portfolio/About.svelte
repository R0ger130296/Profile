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
    <div transition:fade={{ duration: 600 }} class="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      <!-- Foto -->
      <div 
        class="flex-shrink-0 w-full md:w-64 mx-auto md:mx-0"
        transition:fly={{ x: -20, duration: 600, delay: 200 }}
      >
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl transform rotate-3"></div>
          <img
            src="/me/roger.jpg"
            alt="Roger Cedeño"
            class="relative w-full rounded-2xl shadow-xl object-cover aspect-[3/4]"
          />
        </div>
      </div>

      <!-- Texto -->
      <div 
        class="flex-1"
        transition:fly={{ x: 20, duration: 600, delay: 300 }}
      >
        <div class="prose prose-lg max-w-none">
          <p class="text-sm sm:text-base leading-relaxed text-gray-700">{personalInfo.summary}</p>
        </div>
      </div>
    </div>
  {/if}
</Section>
