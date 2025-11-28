<script lang="ts">
  import { education } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
</script>

<Section title="Educación">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each education as edu (edu.id)}
      <Card
        padding="lg"
        elevation="sm"
        className="border-l-4 border-secondary transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
        <p class="text-primary font-medium mb-2">{edu.institution}</p>
        {#if edu.location}
          <Badge variant="secondary" className="mb-2">{edu.location}</Badge>
        {/if}
        <p class="text-sm text-gray-500 italic">{edu.startDate} - {edu.endDate}</p>
      </Card>
    {/each}
  </div>
</Section>
