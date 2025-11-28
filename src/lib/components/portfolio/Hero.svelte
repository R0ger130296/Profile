<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <!-- Animated background grid -->
  <div class="absolute inset-0 opacity-20">
    <div
      class="absolute inset-0"
      style="background-image: linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px); background-size: 50px 50px;"
    ></div>
  </div>

  <!-- Animated gradient orbs -->
  <div
    class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"
  ></div>
  <div
    class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse"
    style="animation-delay: 1s;"
  ></div>

  <!-- Animated lines/graph -->
  <svg
    class="absolute inset-0 w-full h-full opacity-30"
    viewBox="0 0 1200 600"
    preserveAspectRatio="none"
  >
    <!-- Animated line graph -->
    <path
      d="M 0 400 Q 200 300 400 250 T 800 200 T 1200 150"
      fill="none"
      stroke="url(#gradient1)"
      stroke-width="3"
      class="animate-draw"
    />
    <path
      d="M 0 450 Q 200 350 400 300 T 800 250 T 1200 200"
      fill="none"
      stroke="url(#gradient2)"
      stroke-width="2"
      class="animate-draw"
      style="animation-delay: 0.5s;"
    />
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#6366F1;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>

  <!-- PC/Laptop illustration -->
  <div class="absolute inset-0 flex items-center justify-center">
    {#if mounted}
      <div
        class="relative w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72"
        transition:fade={{ duration: 1000, delay: 300 }}
      >
        <!-- Laptop base -->
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-2xl border-2 border-gray-600"
        >
          <!-- Screen -->
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[85%] bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-lg border-2 border-gray-600 shadow-inner overflow-hidden"
          >
            <!-- Screen content - code lines -->
            <div class="p-4 space-y-2">
              <div class="flex gap-2">
                <div class="w-2 h-2 rounded-full bg-red-500"></div>
                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div class="space-y-1.5 mt-3">
                <div class="h-2 bg-primary-500/30 rounded w-3/4 animate-pulse"></div>
                <div class="h-2 bg-secondary-500/30 rounded w-1/2 animate-pulse" style="animation-delay: 0.2s;"></div>
                <div class="h-2 bg-accent-500/30 rounded w-5/6 animate-pulse" style="animation-delay: 0.4s;"></div>
                <div class="h-2 bg-primary-500/30 rounded w-2/3 animate-pulse" style="animation-delay: 0.6s;"></div>
              </div>
            </div>
          </div>
          <!-- Keyboard area -->
          <div
            class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] h-8 bg-gray-800 rounded border border-gray-700"
          ></div>
        </div>

        <!-- Glow effect -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-500/10 rounded-full blur-2xl animate-pulse"
        ></div>
      </div>
    {/if}
  </div>

  <!-- Floating particles -->
  {#if mounted}
    {#each Array(15) as _, i}
      <div
        class="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60"
        style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation: float {3 + Math.random() * 2}s ease-in-out infinite; animation-delay: {Math.random() * 2}s;"
        transition:fade={{ duration: 500, delay: i * 50 }}
      ></div>
    {/each}
  {/if}
</div>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-20px) translateX(10px);
      opacity: 1;
    }
  }

  @keyframes draw {
    from {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dasharray: 1000;
      stroke-dashoffset: 0;
    }
  }

  .animate-draw {
    animation: draw 3s ease-in-out infinite;
  }
</style>
