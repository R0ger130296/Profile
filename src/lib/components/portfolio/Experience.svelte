<script lang="ts">
  import { experiences } from '$lib/data/portfolio';
  import { Section, Card, Badge } from '$lib/components/ui';
</script>

<Section title="Experiencia Profesional">
  <div class="flex flex-col gap-8">
    {#each experiences as experience (experience.id)}
      <Card padding="lg" elevation="sm" className="border-l-4 border-primary relative pl-6">
        <div class="absolute -left-2 top-0 w-3 h-3 rounded-full bg-primary"></div>
        <div class="mb-4">
          <div class="mb-2">
            <h3 class="text-2xl font-semibold text-gray-900 mb-1">{experience.title}</h3>
            <p class="text-lg text-primary font-medium">{experience.company}</p>
          </div>
          <div class="flex gap-4 flex-wrap items-center mt-2 md:flex-col md:items-start md:gap-1">
            <Badge variant="info">{experience.location}</Badge>
            <span class="text-sm text-gray-500">{experience.startDate} - {experience.endDate}</span>
          </div>
        </div>
        <ul class="list-none p-0 m-0">
          {#each experience.responsibilities as responsibility}
            <li class="py-2 pl-6 relative text-gray-700 leading-relaxed">
              <span class="absolute left-0 text-primary font-bold">▸</span>
              {responsibility}
            </li>
          {/each}
        </ul>
      </Card>
    {/each}
  </div>
</Section>
