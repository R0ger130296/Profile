<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let src: string | undefined = undefined;
  export let alt: string = '';
  export let className: string = '';
  export let width: number = 400;
  export let height: number = 300;
  export let objectFit: 'cover' | 'contain' | 'fill' = 'cover';

  // Placeholder service para imágenes de ejemplo
  const placeholderUrl = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=${width}&h=${height}&fit=crop&auto=format&q=80`;

  $: imageUrl = src || placeholderUrl;
  $: imageClass = cn(
    'rounded-lg transition-transform duration-300 hover:scale-105',
    `object-${objectFit}`,
    className
  );
</script>

<div class="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300">
  {#if src}
    <img src={imageUrl} alt={alt} class={imageClass} width={width} height={height} loading="lazy" />
  {:else}
    <div class="flex items-center justify-center h-full min-h-[200px] bg-gradient-to-br from-primary-100 to-secondary-100">
      <div class="text-center p-8">
        <svg
          class="w-16 h-16 mx-auto mb-4 text-primary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p class="text-sm text-gray-500">{alt || 'Imagen'}</p>
      </div>
    </div>
  {/if}
</div>

