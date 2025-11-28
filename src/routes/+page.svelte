<script lang="ts">
  import Header from '$lib/components/portfolio/Header.svelte';
  import Hero from '$lib/components/portfolio/Hero.svelte';
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

<div class="min-h-screen bg-white">
  <Header />
  <div class="relative">
    <Hero />
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
  </div>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8 sm:space-y-12 -mt-12 sm:-mt-16 relative z-10">
    <About />
    <Experience />
    <Education />
    <Skills />
    <Certifications />
    <Languages />
    <References />
  </main>

  <!-- Footer -->
  <footer class="border-t border-gray-100 py-6 sm:py-8 mt-12 sm:mt-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Roger Cedeño. Desarrollado con Svelte y Tailwind CSS
      </p>
    </div>
  </footer>
</div>
