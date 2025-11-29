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

<header class="relative bg-transparent py-3 sm:py-4 px-4 sm:px-6 lg:px-8 xl:px-12">
  <div class="max-w-7xl mx-auto">
    {#if mounted && personalInfo}
      <div
        class="flex flex-row items-center justify-between gap-3 sm:gap-6"
        transition:fade={{ duration: 400 }}
      >
        <!-- Left: Name & Title -->
        <div class="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <!-- Accent dot -->
          <div class="hidden sm:block w-2 h-2 rounded-full bg-linear-to-br from-secondary-400 to-secondary-600 shrink-0"></div>
          
          <div class="flex items-center gap-2 sm:gap-3 min-w-0">
            <h1
              class="text-base sm:text-lg lg:text-xl font-semibold text-primary-800 tracking-tight truncate"
              transition:fade={{ duration: 400, delay: 200 }}
            >
              {personalInfo.name}
            </h1>
            <span class="hidden md:inline-block w-px h-4 bg-primary-300"></span>
            <p
              class="hidden md:block text-sm lg:text-base text-primary-500 font-medium truncate"
              transition:fade={{ duration: 400, delay: 300 }}
            >
              {personalInfo.title}
            </p>
          </div>
        </div>

        <!-- Right: Contact Links -->
        <div
          class="flex items-center gap-1 sm:gap-2 shrink-0"
          transition:fade={{ duration: 400, delay: 400 }}
        >
          <ContactLink
            type="email"
            value={personalInfo.email}
            className="text-primary-600 hover:text-secondary-600 text-xs sm:text-sm px-2.5 py-1.5 rounded-lg hover:bg-secondary-50 transition-all duration-200 font-medium"
          />
          <span class="hidden sm:inline-block w-px h-4 bg-primary-200"></span>
          <ContactLink
            type="phone"
            value={personalInfo.phone}
            className="hidden sm:inline-flex text-primary-600 hover:text-secondary-600 text-xs sm:text-sm px-2.5 py-1.5 rounded-lg hover:bg-secondary-50 transition-all duration-200 font-medium"
          />
          <span class="hidden lg:inline-block w-px h-4 bg-primary-200"></span>
          <ContactLink
            type="location"
            value={personalInfo.location}
            className="hidden lg:inline-flex text-primary-500 hover:text-secondary-600 text-xs sm:text-sm px-2.5 py-1.5 rounded-lg hover:bg-secondary-50 transition-all duration-200"
          />
        </div>
      </div>
    {/if}
  </div>
</header>
