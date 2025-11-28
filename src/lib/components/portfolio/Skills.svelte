<script lang="ts">
  import { skills, softSkills } from '$lib/data/portfolio';
  import { Section, Badge } from '$lib/components/ui';
</script>

<Section title="Habilidades Técnicas">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
    <div class="flex flex-col">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.frontend as skill}
          <Badge variant="primary">{skill}</Badge>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.backend as skill}
          <Badge variant="primary">{skill}</Badge>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.mobile as skill}
          <Badge variant="primary">{skill}</Badge>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Herramientas</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.tools as skill}
          <Badge variant="info">{skill}</Badge>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Metodologías</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.methodologies as skill}
          <Badge variant="secondary">{skill}</Badge>
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-8 pt-8 border-t-2 border-gray-200">
    <h3 class="text-xl font-semibold text-gray-900 mb-4">Habilidades Blandas</h3>
    <div class="flex flex-wrap gap-2">
      {#each softSkills as skill}
        <Badge variant="success">{skill}</Badge>
      {/each}
    </div>
  </div>
</Section>
