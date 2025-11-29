<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import { Icon } from './index';

  export let src: string | undefined = undefined;
  export let alt: string = '';
  export let className: string = '';
  export let width: number = 400;
  export let height: number = 300;
  export let objectFit: 'cover' | 'contain' | 'fill' = 'cover';

  // Placeholder service for sample images
  const placeholderUrl = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=${width}&h=${height}&fit=crop&auto=format&q=80`;

  $: imageUrl = src || placeholderUrl;
  $: imageClass = cn(
    'rounded-lg transition-transform duration-300 hover:scale-105',
    `object-${objectFit}`,
    className
  );
</script>

<div class="relative overflow-hidden rounded-lg bg-linear-to-br from-gray-200 to-gray-300">
  {#if src}
    <img src={imageUrl} alt={alt} class={imageClass} width={width} height={height} loading="lazy" />
  {:else}
    <div class="flex items-center justify-center h-full min-h-[200px] bg-linear-to-br from-primary-100 to-secondary-100">
      <div class="text-center p-8">
        <Icon name="Code" size={64} color="#64748b" className="mx-auto mb-4" />
        <p class="text-sm text-gray-500">{alt || 'Imagen'}</p>
      </div>
    </div>
  {/if}
</div>
