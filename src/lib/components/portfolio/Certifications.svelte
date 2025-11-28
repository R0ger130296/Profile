<script lang="ts">
  import { certifications } from '$lib/data/portfolio';
  import { Section, Card, Icon } from '$lib/components/ui';
</script>

<Section title="Certificaciones">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each certifications as cert (cert.id)}
      <Card
        padding="md"
        elevation="sm"
        className="border-l-4 border-secondary transition-transform hover:translate-x-1 hover:shadow-lg"
      >
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0">
            <Icon name="Award" size={24} />
          </div>
          <p class="text-base leading-snug text-gray-700 m-0">{cert.name}</p>
        </div>
      </Card>
    {/each}
  </div>
</Section>
