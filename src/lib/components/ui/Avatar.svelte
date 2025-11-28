<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let name: string;
  export let image: string | undefined = undefined;
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let className: string = '';

  const sizes = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-20 h-20 text-2xl',
    lg: 'w-24 h-24 text-3xl',
    xl: 'w-32 h-32 text-4xl'
  };

  const baseStyles =
    'rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 shadow-2xl ring-4 ring-white/20';

  $: avatarClass = cn(baseStyles, sizes[size], className);
  $: initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
</script>

<div class={avatarClass} role="img" aria-label={name}>
  {#if image}
    <img src={image} alt={name} class="w-full h-full rounded-full object-cover" />
  {:else}
    <span class="drop-shadow-lg">{initials}</span>
  {/if}
</div>
