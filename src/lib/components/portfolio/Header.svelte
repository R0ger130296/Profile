<script lang="ts">
  import { usePersonalInfo } from '$lib/presentation/hooks/usePortfolio';
  import { Avatar, ContactLink } from '$lib/components/ui';
  import { fly, fade, scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { PersonalInfo } from '$lib/domain/entities';

  let mounted = false;
  let personalInfo: PersonalInfo | null = null;

  onMount(async () => {
    mounted = true;
    personalInfo = await usePersonalInfo();
  });
</script>

<header class="relative bg-white border-b border-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    {#if mounted && personalInfo}
      <div
        class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left"
        transition:fade={{ duration: 400 }}
      >
        <div transition:scale={{ duration: 400, delay: 100 }}>
          <Avatar
            name={personalInfo.name}
            image="/profile.jpg"
            size="xl"
            className="ring-2 ring-gray-200 shadow-sm"
          />
        </div>
        <div class="flex-1">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1 sm:mb-2 text-gray-900"
            transition:fade={{ duration: 400, delay: 200 }}
          >
            {personalInfo.name}
          </h1>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 font-normal"
            transition:fade={{ duration: 400, delay: 300 }}
          >
            {personalInfo.title}
          </p>
        </div>
      </div>

      <div
        class="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6"
        transition:fade={{ duration: 400, delay: 400 }}
      >
        <ContactLink
          type="email"
          value={personalInfo.email}
          className="text-gray-700 hover:text-gray-900 text-sm px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
        />
        <ContactLink
          type="phone"
          value={personalInfo.phone}
          className="text-gray-700 hover:text-gray-900 text-sm px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
        />
        <ContactLink
          type="location"
          value={personalInfo.location}
          className="text-gray-700 hover:text-gray-900 text-sm px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
        />
      </div>
    {/if}
  </div>
</header>
