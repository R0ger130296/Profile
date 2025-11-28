<script lang="ts">
  import { personalInfo } from '$lib/data/portfolio';
  import { Section } from '$lib/components/ui';
</script>

<Section title="Sobre Mí">
  <p class="text-lg leading-relaxed text-gray-700">{personalInfo.summary}</p>
</Section>
