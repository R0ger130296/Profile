<script lang="ts">
  import { references } from '$lib/data/portfolio';
  import { Section, Card, ContactLink } from '$lib/components/ui';
</script>

<Section title="Referencias">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each references as ref (ref.id)}
      <Card
        padding="lg"
        elevation="sm"
        className="border-t-4 border-primary transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{ref.name}</h3>
        <p class="text-primary font-medium mb-1">{ref.position}</p>
        <p class="text-sm text-gray-500 mb-4">{ref.company}</p>
        <div class="flex flex-col gap-2">
          <ContactLink type="email" value={ref.email} href="mailto:{ref.email}" />
          <ContactLink type="phone" value={ref.phone} href="tel:{ref.phone}" />
        </div>
      </Card>
    {/each}
  </div>
</Section>
