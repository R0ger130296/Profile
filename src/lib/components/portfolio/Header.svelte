<script lang="ts">
  import { personalInfo } from '$lib/data/portfolio';
  import { Avatar, ContactLink } from '$lib/components/ui';
  import { fly, fade, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<header
  class="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 px-8 mb-12 shadow-2xl"
>
  <!-- Background decorative elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400 opacity-10 rounded-full blur-3xl"
    ></div>
    <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMyMCAwIDM2LTE2IDM2LTM2SDBjMCAyMCAxNiAzNiAzNiAzNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"
    ></div>
  </div>

  <div class="relative max-w-6xl mx-auto z-10">
    {#if mounted}
      <div
        class="flex items-center gap-8 mb-10 md:flex-col md:text-center"
        transition:fly={{ y: 30, duration: 800 }}
      >
        <div transition:scale={{ duration: 600, delay: 200 }}>
          <Avatar name={personalInfo.name} size="xl" className="ring-4 ring-white/30 shadow-2xl" />
        </div>
        <div class="flex-1">
          <h1
            class="text-5xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
            transition:fade={{ duration: 600, delay: 300 }}
          >
            {personalInfo.name}
          </h1>
          <p
            class="text-2xl md:text-xl font-medium opacity-95 text-white/90"
            transition:fade={{ duration: 600, delay: 400 }}
          >
            {personalInfo.title}
          </p>
        </div>
      </div>

      <div
        class="flex flex-wrap gap-6 md:flex-col md:gap-4"
        transition:fly={{ y: 20, duration: 800, delay: 500 }}
      >
        <ContactLink
          type="email"
          value={personalInfo.email}
          className="text-white hover:text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
        />
        <ContactLink
          type="phone"
          value={personalInfo.phone}
          className="text-white hover:text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
        />
        <ContactLink
          type="location"
          value={personalInfo.location}
          className="text-white hover:text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
        />
      </div>
    {/if}
  </div>
</header>
