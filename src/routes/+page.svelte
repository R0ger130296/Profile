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
  import { ScrollToTop } from '$lib/components/ui';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  let observer: IntersectionObserver | null = null;

  onMount(() => {
    if (!browser) return;

    // Agregar interacciones de scroll con IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined') {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observar todas las secciones después de un pequeño delay para asegurar que existan
      setTimeout(() => {
        if (observer && browser) {
          document.querySelectorAll('section, .section-content').forEach((el) => {
            // Remover clase inicial si existe para permitir animación
            el.classList.remove('initially-visible');
            observer!.observe(el);
          });
        }
      }, 100);
    } else {
      // Fallback: si no hay IntersectionObserver, mostrar todas las secciones
      document.querySelectorAll('.section-content').forEach((el) => {
        el.classList.add('animate-in');
      });
    }
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<svelte:head>
  <title>Roger Cedeño - Portafolio Profesional</title>
  <meta name="description" content="Portafolio profesional de Roger Cedeño - Software Engineer | Full Stack Developer" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Header fijo sobre el Hero -->
  <nav class="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <Header />
  </nav>

  <!-- Hero como sección completa -->
  <Hero />

  <!-- Contenido principal -->
  <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 space-y-12 sm:space-y-16 pt-20 sm:pt-24 relative z-10">
    <div class="section-content initially-visible">
      <About />
    </div>
    <div class="section-content initially-visible">
      <Experience />
    </div>
    <div class="section-content initially-visible">
      <Education />
    </div>
    <div class="section-content initially-visible">
      <Skills />
    </div>
    <div class="section-content initially-visible">
      <Certifications />
    </div>
    <div class="section-content initially-visible">
      <Languages />
    </div>
    <div class="section-content initially-visible">
      <References />
    </div>
  </main>

  <!-- Footer -->
  <footer class="border-t border-gray-200 bg-gray-50 py-8 sm:py-12 mt-16 sm:mt-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-gray-600 text-sm sm:text-base">
        © {new Date().getFullYear()} Roger Cedeño. Desarrollado con <span class="font-semibold text-primary-600">Svelte</span> y <span class="font-semibold text-secondary-600">Tailwind CSS</span>
      </p>
    </div>
  </footer>

  <!-- Botón Scroll to Top -->
  <ScrollToTop />
</div>

<style>
  .section-content {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  /* Solo aplicar animación si el navegador soporta IntersectionObserver */
  @media (prefers-reduced-motion: no-preference) {
    .section-content:not(.animate-in):not(.initially-visible) {
      opacity: 0;
      transform: translateY(20px);
    }

    .section-content.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Interacciones hover mejoradas */
  :global(.hover-lift:hover) {
    transform: translateY(-4px);
    transition: transform 0.3s ease;
  }

  :global(.hover-glow:hover) {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.3s ease;
  }
</style>
