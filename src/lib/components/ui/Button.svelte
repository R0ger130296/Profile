<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { ButtonVariant, ButtonSize } from './types';

  export let variant: ButtonVariant = 'primary';
  export let size: ButtonSize = 'md';
  export let className: string = '';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-gray-900 hover:bg-gray-100',
    danger: 'bg-red-500 text-white hover:opacity-90 focus-visible:ring-red-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  $: buttonClass = cn(baseStyles, variants[variant], sizes[size], className);
</script>

{#if href}
  <a {href} class={buttonClass} role="button" tabindex="0">
    <slot />
  </a>
{:else}
  <button {type} class={buttonClass} {disabled}>
    <slot />
  </button>
{/if}
