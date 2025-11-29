<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let elevation: 'none' | 'sm' | 'md' | 'lg' = 'md';

  const baseStyles = 'bg-white rounded-xl lg:rounded-2xl';

  const paddings = {
    none: '',
    sm: 'p-4 lg:p-5',
    md: 'p-5 sm:p-6 lg:p-8 xl:p-10',
    lg: 'p-6 sm:p-8 lg:p-10 xl:p-12'
  };

  const elevations = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  $: cardClass = cn(baseStyles, paddings[padding], elevations[elevation], className);
</script>

<div class={cardClass}>
  <slot />
</div>
