<script lang="ts">
  import { usePersonalInfo } from '$lib/presentation/hooks/usePortfolio';
  import { ContactLink } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { PersonalInfo } from '$lib/domain/entities';

  let mounted = false;
  let personalInfo: PersonalInfo | null = null;

  onMount(async () => {
    mounted = true;
    personalInfo = await usePersonalInfo();
  });
</script>

<header class="relative bg-transparent py-2 sm:py-3 px-4 sm:px-6">
  <div class="max-w-7xl mx-auto">
    {#if mounted && personalInfo}
      <div
        class="flex flex-row items-center justify-between gap-2 sm:gap-4"
        transition:fade={{ duration: 400 }}
      >
        <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <h1
            class="text-base sm:text-lg md:text-xl font-bold text-gray-900 tracking-tight truncate"
            transition:fade={{ duration: 400, delay: 200 }}
          >
            {personalInfo.name}
          </h1>
          <span class="hidden md:inline text-gray-300 text-sm">|</span>
          <p
            class="hidden md:block text-xs sm:text-sm text-gray-600 font-medium truncate"
            transition:fade={{ duration: 400, delay: 300 }}
          >
            {personalInfo.title}
          </p>
        </div>

        <div
          class="flex items-center gap-1 sm:gap-1.5 flex-shrink-0"
          transition:fade={{ duration: 400, delay: 400 }}
        >
          <ContactLink
            type="email"
            value={personalInfo.email}
            className="text-gray-600 hover:text-primary-600 text-xs px-2 py-1 rounded-md hover:bg-primary-50 transition-all duration-200 whitespace-nowrap"
          />
          <ContactLink
            type="phone"
            value={personalInfo.phone}
            className="hidden sm:inline-flex text-gray-600 hover:text-primary-600 text-xs px-2 py-1 rounded-md hover:bg-primary-50 transition-all duration-200 whitespace-nowrap"
          />
          <ContactLink
            type="location"
            value={personalInfo.location}
            className="hidden md:inline-flex text-gray-600 hover:text-primary-600 text-xs px-2 py-1 rounded-md hover:bg-primary-50 transition-all duration-200 whitespace-nowrap"
          />
        </div>
      </div>
    {/if}
  </div>
</header>
