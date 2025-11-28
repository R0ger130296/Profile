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
        <p class="text-sm sm:text-base leading-relaxed text-gray-700">{personalInfo.summary}</p>
      </div>
    </div>
  {/if}
</Section>
