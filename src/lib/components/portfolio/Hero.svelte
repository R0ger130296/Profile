<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Icon } from '$lib/components/ui';

  let mounted = false;
  
  // Frontend-focused code animation
  let codeLines = [
    'const Portfolio = () => {',
    '  return (',
    '    <div className="container">',
    '      <Hero />',
    '      <About />',
    '      <Experience />',
    '    </div>',
    '  );',
    '};'
  ];
  
  let displayedCode = '';
  let currentLine = 0;
  let currentChar = 0;
  let showCursor = true;
  let typingSpeed = 60;
  const arrowSymbol = '=>';
  const openBrace = '{';

  onMount(() => {
    mounted = true;
    typeCode();
    
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      showCursor = !showCursor;
    }, 530);
    
    return () => clearInterval(cursorInterval);
  });

  function typeCode() {
    if (currentLine >= codeLines.length) {
      // Restart after a delay
      setTimeout(() => {
        displayedCode = '';
        currentLine = 0;
        currentChar = 0;
        typeCode();
      }, 4000);
      return;
    }

    const line = codeLines[currentLine];
    if (currentChar < line.length) {
      displayedCode += line[currentChar];
      currentChar++;
      setTimeout(typeCode, typingSpeed);
    } else {
      displayedCode += '\n';
      currentLine++;
      currentChar = 0;
      setTimeout(typeCode, 400);
    }
  }
</script>

<section class="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 pt-20 sm:pt-24">
  <!-- Animated background grid -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
  </div>

  <!-- Floating tech icons -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    {#if mounted}
      <div class="absolute top-20 left-10 text-secondary-400/20" transition:fly={{ x: -50, y: -20, duration: 2000, delay: 500 }}>
        <Icon name="Code" size={40} />
      </div>
      <div class="absolute top-40 right-20 text-secondary-400/20" transition:fly={{ x: 50, y: -30, duration: 2000, delay: 1000 }}>
        <Icon name="Rocket" size={32} />
      </div>
      <div class="absolute bottom-32 left-1/4 text-secondary-400/20" transition:fly={{ x: -30, y: 20, duration: 2000, delay: 1500 }}>
        <Icon name="Sparkles" size={36} />
      </div>
      <div class="absolute bottom-20 right-1/3 text-secondary-400/20" transition:fly={{ x: 40, y: 15, duration: 2000, delay: 2000 }}>
        <Icon name="Star" size={28} />
      </div>
    {/if}
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
    {#if mounted}
      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" transition:fade={{ duration: 600 }}>
        
        <!-- Left: Text Content -->
        <div class="text-center lg:text-left" transition:fly={{ x: -30, duration: 800, delay: 200 }}>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-500/20 rounded-full mb-6 border border-secondary-400/30">
            <Icon name="Code" size={16} color="#14b8a6" />
            <span class="text-sm font-medium text-secondary-300">Frontend Developer</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span class="bg-gradient-to-r from-white via-secondary-200 to-white bg-clip-text text-transparent">
              Creando Experiencias
            </span>
            <br />
            <span class="text-secondary-400">Digitales</span>
          </h1>
          
          <p class="text-lg sm:text-xl text-primary-200 mb-8 leading-relaxed">
            Transformando ideas en interfaces interactivas y funcionales con React, Svelte y tecnologías modernas.
          </p>
          
          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-3">
            {#each ['React', 'Svelte', 'TypeScript', 'Tailwind'] as tech}
              <div class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                {tech}
              </div>
            {/each}
          </div>
        </div>

        <!-- Right: Code Editor -->
        <div class="relative" transition:fly={{ x: 30, duration: 800, delay: 400 }}>
          <div class="relative bg-primary-950 rounded-xl lg:rounded-2xl shadow-2xl border border-primary-700/50 overflow-hidden">
            <!-- Editor Header -->
            <div class="flex items-center justify-between px-4 py-3 bg-primary-900/80 border-b border-primary-700/50">
              <div class="flex items-center gap-2">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="flex items-center gap-2 ml-3">
                  <Icon name="Code" size={14} color="#94a3b8" />
                  <span class="text-xs text-primary-300 font-mono">Portfolio.tsx</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-secondary-400 animate-pulse"></div>
                <span class="text-xs text-primary-400">Live</span>
              </div>
            </div>
            
            <!-- Code Content -->
            <div class="p-5 sm:p-6 bg-primary-950 min-h-[280px]">
              <div class="font-mono text-xs sm:text-sm leading-relaxed text-primary-100">
                <pre class="whitespace-pre-wrap m-0">
<span class="text-primary-500">1</span>  <span class="text-blue-400">const</span> <span class="text-yellow-400">Portfolio</span> = <span class="text-pink-400">()</span> <span class="text-pink-400">{arrowSymbol}</span> <span class="text-green-400">{openBrace}</span>
<span class="text-primary-500">2</span>    <span class="text-blue-400">return</span> <span class="text-green-400">(</span>
<span class="text-primary-500">3</span>      <span class="text-pink-400">&lt;</span><span class="text-yellow-400">div</span> <span class="text-blue-400">className</span>=<span class="text-green-300">"container"</span><span class="text-pink-400">&gt;</span>
{#if displayedCode}
{displayedCode}
{/if}<span class="inline-block w-2 h-4 bg-secondary-400 ml-1" style="opacity: {showCursor ? 1 : 0};"></span>
                </pre>
              </div>
              
              <!-- Code stats -->
              <div class="mt-4 pt-4 border-t border-primary-800 flex items-center justify-between text-xs text-primary-400">
                <div class="flex items-center gap-4">
                  <span class="flex items-center gap-1.5">
                    <Icon name="CheckCircle" size={12} color="#64748b" />
                    <span>No errors</span>
                  </span>
                  <span class="flex items-center gap-1.5">
                    <Icon name="Code" size={12} color="#64748b" />
                    <span>TypeScript</span>
                  </span>
                </div>
                <span class="text-secondary-400">● Ready</span>
              </div>
            </div>
          </div>
          
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-secondary-500/20 via-primary-500/20 to-secondary-500/20 rounded-xl blur-xl -z-10 animate-pulse"></div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Gradient transition -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
</section>






