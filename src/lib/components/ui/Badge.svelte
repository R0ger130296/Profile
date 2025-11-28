<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { BadgeVariant } from './types';

  export let variant: BadgeVariant = 'primary';
  export let className: string = '';

  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  $: badgeClass = cn(baseStyles, variants[variant], className);
</script>

<span class={badgeClass}>
  <slot />
</span>
