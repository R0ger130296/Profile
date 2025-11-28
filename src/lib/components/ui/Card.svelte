<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let className: string = '';
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let elevation: 'none' | 'sm' | 'md' | 'lg' = 'md';

  const baseStyles = 'bg-white rounded-xl';

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const elevations = {
    none: '',
    sm: 'shadow-soft',
    md: 'shadow-medium',
    lg: 'shadow-large'
  };

  $: cardClass = cn(baseStyles, paddings[padding], elevations[elevation], className);
</script>

<div class={cardClass}>
  <slot />
</div>
