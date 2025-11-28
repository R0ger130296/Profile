<script lang="ts">
  import { languages } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
</script>

<Section title="Idiomas">
  <div class="flex flex-col gap-4">
    {#each languages as lang}
      <Card padding="md" elevation="sm" className="border-l-4 border-primary">
        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold text-gray-900">{lang.name}</span>
          <Badge variant="info">{lang.level}</Badge>
        </div>
      </Card>
    {/each}
  </div>
</Section>
