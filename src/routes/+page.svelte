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
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
  <Header />
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-12 md:space-y-16">
    <About />
    <Experience />
    <Education />
    <Skills />
    <Certifications />
    <Languages />
    <References />
  </main>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12 mt-16 md:mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-gray-400 text-sm md:text-base">
        © {new Date().getFullYear()} Roger Cedeño. Desarrollado con ❤️ usando Svelte y Tailwind CSS
      </p>
    </div>
  </footer>
</div>
