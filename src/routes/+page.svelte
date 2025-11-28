<script lang="ts">
  import Header from '$lib/components/portfolio/Header.svelte';
  import About from '$lib/components/portfolio/About.svelte';
  import Experience from '$lib/components/portfolio/Experience.svelte';
  import Education from '$lib/components/portfolio/Education.svelte';
  import Skills from '$lib/components/portfolio/Skills.svelte';
  import Certifications from '$lib/components/portfolio/Certifications.svelte';
  import Languages from '$lib/components/portfolio/Languages.svelte';
  import References from '$lib/components/portfolio/References.svelte';
</script>

<svelte:head>
  <title>Roger Cedeño - Portafolio Profesional</title>
  <meta name="description" content="Portafolio profesional de Roger Cedeño - Software Engineer | Full Stack Developer" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <Header />
  <div class="max-w-6xl mx-auto px-4 md:px-8 pb-8">
    <About />
    <Experience />
    <Education />
    <Skills />
    <Certifications />
    <Languages />
    <References />
  </div>
</div>
