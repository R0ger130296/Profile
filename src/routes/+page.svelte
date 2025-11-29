<script lang="ts">
  import Header from '$lib/components/portfolio/Header.svelte';
  import Hero from '$lib/components/portfolio/Hero.svelte';
  import About from '$lib/components/portfolio/About.svelte';
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

    // Add scroll interactions with IntersectionObserver
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

      // Observe all sections after a small delay to ensure they exist
      setTimeout(() => {
        if (observer && browser) {
          document.querySelectorAll('section, .section-content').forEach((el) => {
            // Remove initial class if exists to allow animation
            el.classList.remove('initially-visible');
            observer!.observe(el);
          });
        }
      }, 100);
    } else {
      // Fallback: if no IntersectionObserver, show all sections
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
  <title>Roger Cedeño - Software Engineer | Full Stack Developer</title>
  <meta name="description" content="Portafolio profesional de Roger Cedeño - Desarrollador Full Stack con experiencia en React, Next.js, NestJS, Spring Boot y más. Especializado en desarrollo de aplicaciones web y móviles escalables." />
  <meta name="keywords" content="Roger Cedeño, Full Stack Developer, Software Engineer, React, Next.js, NestJS, Spring Boot, TypeScript, Portfolio" />
  <meta name="author" content="Roger Cedeño" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Google Fonts - Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Roger Cedeño - Software Engineer | Full Stack Developer" />
  <meta property="og:description" content="Portafolio profesional de Roger Cedeño - Desarrollador Full Stack especializado en tecnologías modernas" />
  <meta property="og:image" content="/me/roger.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Roger Cedeño - Software Engineer | Full Stack Developer" />
  <meta name="twitter:description" content="Portafolio profesional de Roger Cedeño - Desarrollador Full Stack" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://rogercedeno.dev" />
</svelte:head>

<div class="min-h-screen bg-linear-to-b from-white via-primary-50/30 to-white">
  <!-- Fixed Header -->
  <nav class="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-primary-200/50 shadow-xs">
    <Header />
  </nav>

  <!-- Hero Section -->
  <Hero />

  <!-- Main Content with Side Accent Line -->
  <main class="relative">
    <!-- Decorative side line for large screens -->
    <div class="hidden xl:block absolute left-8 2xl:left-16 top-0 bottom-0 w-px bg-linear-to-b from-secondary-300 via-primary-200 to-transparent"></div>
    
    <!-- Content Container -->
    <div class="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pb-16 sm:pb-20 lg:pb-24 space-y-8 sm:space-y-12 lg:space-y-16 xl:space-y-20 pt-16 sm:pt-20 lg:pt-24 relative z-10">
      
      <!-- About Section -->
      <div class="section-content initially-visible">
        <About />
      </div>

      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Experience Section -->
      <div class="section-content initially-visible">
        <Experience />
      </div>

      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Education Section -->
      <div class="section-content initially-visible">
        <Education />
      </div>

      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Skills Section -->
      <div class="section-content initially-visible">
        <Skills />
      </div>

      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Certifications Section -->
      <div class="section-content initially-visible">
        <Certifications />
      </div>

      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Languages Section -->
      <div class="section-content initially-visible">
        <Languages />
      </div>

      <!-- Divider -->
      <div class="divider"></div>
      
    </div>
  </main>

  <!-- Footer -->
  <footer class="relative border-t border-primary-200/60 bg-linear-to-b from-primary-50/50 to-primary-100/30 py-10 sm:py-14 lg:py-16 mt-12 sm:mt-16 lg:mt-20">
    <div class="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p class="text-primary-600 text-sm sm:text-base font-medium">
          © {new Date().getFullYear()} Roger Cedeño
        </p>
        <span class="hidden sm:inline-block w-1 h-1 rounded-full bg-primary-300"></span>
        <p class="text-primary-500 text-sm">
          Desarrollado con <span class="font-semibold text-primary-700">Svelte</span> y <span class="font-semibold text-secondary-600">Tailwind CSS</span>
        </p>
      </div>
      
      <!-- Subtle accent line -->
      <div class="mt-6 flex justify-center">
        <div class="w-20 h-0.5 rounded-full bg-linear-to-r from-secondary-400 to-primary-400"></div>
      </div>
    </div>
  </footer>

  <!-- Scroll to Top Button -->
  <ScrollToTop />
</div>

<style>
  .section-content {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  /* Apply animation only if browser supports IntersectionObserver */
  @media (prefers-reduced-motion: no-preference) {
    .section-content:not(.animate-in):not(.initially-visible) {
      opacity: 0;
      transform: translateY(16px);
    }

    /* Used by JavaScript - do not remove */
    :global(.section-content.animate-in) {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Enhanced hover effects */
  :global(.hover-lift:hover) {
    transform: translateY(-2px);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  :global(.hover-glow:hover) {
    box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s ease;
  }

  /* Divider styling */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-primary-200), transparent);
    margin: 0 auto;
    max-width: 80%;
  }

  @media (min-width: 1280px) {
    .divider {
      max-width: 60%;
    }
  }
</style>
