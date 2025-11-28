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
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {#each references as ref, index (ref.id)}
      {#if visible}
        <div transition:fly={{ y: 30, duration: 600, delay: index * 150 }}>
          <Card
            padding="lg"
            elevation="sm"
            className="border-t-4 border-primary-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white via-white to-primary-50/20 group"
          >
            <div class="mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                {ref.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {ref.name}
              </h3>
              <p class="text-sm sm:text-base text-primary-600 font-semibold mb-1">{ref.position}</p>
              <p class="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{ref.company}</p>
            </div>
            <div class="flex flex-col gap-3">
              <ContactLink
                type="email"
                value={ref.email}
                href="mailto:{ref.email}"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              />
              <ContactLink
                type="phone"
                value={ref.phone}
                href="tel:{ref.phone}"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              />
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
</Section>
