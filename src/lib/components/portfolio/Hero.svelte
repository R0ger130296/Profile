<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;
  let codeLines = [
    'const developer = {',
    '  name: "Roger Cedeño",',
    '  role: "Full Stack Developer",',
    '  skills: ["React", "NestJS", "Python"]',
    '};'
  ];
  let displayedCode = '';
  let currentLine = 0;
  let currentChar = 0;
  let showCursor = true;

  onMount(() => {
    mounted = true;
    typeCode();
    
    // Animación del cursor parpadeante
    const cursorInterval = setInterval(() => {
      showCursor = !showCursor;
    }, 530);
    
    return () => clearInterval(cursorInterval);
  });

  function typeCode() {
    if (currentLine >= codeLines.length) {
      // Reiniciar después de un delay
      setTimeout(() => {
        displayedCode = '';
        currentLine = 0;
        currentChar = 0;
        typeCode();
      }, 3000);
      return;
    }

    const line = codeLines[currentLine];
    if (currentChar < line.length) {
      displayedCode += line[currentChar];
      currentChar++;
      setTimeout(typeCode, 80);
    } else {
      displayedCode += '\n';
      currentLine++;
      currentChar = 0;
      setTimeout(typeCode, 300);
    }
  }
</script>

<section class="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 sm:pt-20">
  <div class="absolute inset-0 flex items-center justify-center">
    {#if mounted}
      <div class="relative w-full max-w-4xl px-4" transition:fade={{ duration: 600 }}>
        <!-- Laptop con pantalla animada -->
        <div class="relative mx-auto laptop-container" style="width: min(90vw, 600px);">
          <!-- Pantalla de la laptop -->
          <div 
            class="relative bg-gray-900 rounded-t-lg border-4 border-gray-700 shadow-2xl laptop-screen"
            style="padding-top: 60%;"
            transition:fly={{ y: -20, duration: 800, delay: 200 }}
          >
            <div class="absolute inset-0 p-4 sm:p-6">
              <!-- Barra de título del editor -->
              <div class="flex items-center gap-2 mb-3">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1 h-4 bg-gray-800 rounded text-xs text-gray-500 px-2 flex items-center">
                  portfolio.js
                </div>
              </div>
              
              <!-- Código escribiéndose -->
              <div class="font-mono text-xs sm:text-sm text-green-400 leading-relaxed">
                <pre class="whitespace-pre-wrap">{displayedCode}<span class="inline-block w-2 h-4 bg-green-400 ml-1" style="opacity: {showCursor ? 1 : 0};"></span></pre>
              </div>
            </div>
            
            <!-- Brillo de la pantalla -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-t-lg"></div>
          </div>
          
          <!-- Base de la laptop -->
          <div 
            class="relative bg-gray-800 rounded-b-lg border-4 border-gray-700 border-t-0 h-2 shadow-xl laptop-base"
            transition:fly={{ y: 20, duration: 800, delay: 400 }}
          >
            <!-- Trackpad -->
            <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <!-- Efectos de fondo -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
    <div class="absolute top-20 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute bottom-20 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse" style="animation-delay: 1s;"></div>
  </div>

  <!-- Gradiente de transición hacia abajo -->
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</section>

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
  @keyframes laptopFloat {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-8px) rotate(1deg);
    }
    50% {
      transform: translateY(-12px) rotate(0deg);
    }
    75% {
      transform: translateY(-8px) rotate(-1deg);
    }
  }
  
  @keyframes screenGlow {
    0%, 100% {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75);
    }
    50% {
      box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.3), 0 0 30px rgba(34, 197, 94, 0.2);
    }
  }
  
  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .laptop-container {
    animation: laptopFloat 4s ease-in-out infinite;
  }
  
  .laptop-screen {
    animation: screenGlow 3s ease-in-out infinite;
  }
</style>
