<script lang="ts">
  import { certifications } from '$lib/data/portfolio';
  import { Section, Card, Icon } from '$lib/components/ui';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<Section title="Certificaciones">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each certifications as cert, index (cert.id)}
      {#if visible}
        <div transition:fly={{ y: 20, duration: 500, delay: index * 50 }}>
          <Card
            padding="md"
            elevation="sm"
            className="border-l-4 border-secondary-500 transition-all duration-300 hover:shadow-2xl hover:-translate-x-1 hover:border-secondary-600 group cursor-pointer bg-gradient-to-br from-white to-secondary-50/20"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg"
              >
                <Icon name="Award" size={24} />
              </div>
              <p
                class="text-base leading-snug text-gray-700 m-0 group-hover:text-secondary-700 transition-colors font-medium"
              >
                {cert.name}
              </p>
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
</Section>
