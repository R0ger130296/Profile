<script lang="ts">
  import { references } from '$lib/data/portfolio';
  import { Section, Card, ContactLink } from '$lib/components/ui';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Referencias">
  <div class="space-y-4 sm:space-y-6">
    {#each references as ref, index (ref.id)}
      {#if visible}
        <div
          class="pb-4 sm:pb-6 border-b border-gray-100 last:border-0"
          transition:fade={{ duration: 300, delay: index * 50 }}
        >
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">{ref.name}</h3>
          <p class="text-sm sm:text-base text-gray-600 mb-1">{ref.position}</p>
          <p class="text-xs sm:text-sm text-gray-500 mb-2">{ref.company}</p>
          <div class="flex flex-col gap-1 text-xs sm:text-sm text-gray-600">
            <ContactLink
              type="email"
              value={ref.email}
              href="mailto:{ref.email}"
              className="text-gray-600 hover:text-gray-900"
            />
            <ContactLink
              type="phone"
              value={ref.phone}
              href="tel:{ref.phone}"
              className="text-gray-600 hover:text-gray-900"
            />
          </div>
        </div>
      {/if}
    {/each}
  </div>
</Section>
