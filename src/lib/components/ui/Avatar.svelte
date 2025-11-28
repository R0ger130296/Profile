<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import { onMount } from 'svelte';

  export let name: string;
  export let image: string | undefined = undefined;
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let className: string = '';

  let imageError = false;

  const sizes = {
    sm: 'w-12 h-12 text-base',
    md: 'w-16 h-16 text-lg',
    lg: 'w-20 h-20 text-xl',
    xl: 'w-24 h-24 sm:w-28 sm:h-28 text-2xl'
  };

  const baseStyles =
    'rounded-full flex items-center justify-center font-medium text-gray-700 bg-gray-100 border-2 border-gray-200 overflow-hidden';

  $: avatarClass = cn(baseStyles, sizes[size], className);
  $: initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  function handleImageError() {
    imageError = true;
  }
</script>

<div class={avatarClass} role="img" aria-label={name}>
  {#if image && !imageError}
    <img
      src={image}
      alt={name}
      class="w-full h-full rounded-full object-cover"
      on:error={handleImageError}
    />
  {:else}
    <span class="drop-shadow-lg">{initials}</span>
  {/if}
</div>
