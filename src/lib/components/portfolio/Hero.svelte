<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="relative w-full h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden bg-gray-50 border-b border-gray-100">
  <div class="absolute inset-0 flex items-center justify-center opacity-20">
    {#if mounted}
      <div class="relative w-48 h-36 sm:w-56 sm:h-42 md:w-64 md:h-48" transition:fade={{ duration: 400 }}>
        <!-- Minimalist laptop -->
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 bg-gray-300 rounded border border-gray-400">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[85%] bg-gray-200 rounded-t border border-gray-400">
            <div class="p-3 space-y-1.5 mt-2">
              <div class="h-1 bg-gray-400 rounded w-3/4"></div>
              <div class="h-1 bg-gray-400 rounded w-1/2"></div>
              <div class="h-1 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
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
