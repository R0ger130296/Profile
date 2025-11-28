<script lang="ts">
  import Icon from './Icon.svelte';
  import { cn } from '$lib/utils/cn';
  import type { ContactType } from './types';

  export let type: ContactType;
  export let value: string;
  export let href: string | undefined = undefined;
  export let className: string = '';
  export let iconSize: number = 20;

  const iconMap: Record<ContactType, string> = {
    email: 'Mail',
    phone: 'Phone',
    location: 'MapPin',
    linkedin: 'Linkedin',
    github: 'Github',
    website: 'Globe'
  };

  const defaultHrefs: Record<ContactType, (val: string) => string> = {
    email: (val) => `mailto:${val}`,
    phone: (val) => `tel:${val}`,
    location: () => '#',
    linkedin: (val) => val.startsWith('http') ? val : `https://linkedin.com/in/${val}`,
    github: (val) => val.startsWith('http') ? val : `https://github.com/${val}`,
    website: (val) => val.startsWith('http') ? val : `https://${val}`
  };

  $: finalHref = href || defaultHrefs[type](value);
  $: isLink = type !== 'location';
  $: linkClass = cn(
    'flex items-center gap-2 transition-opacity',
    isLink ? 'hover:opacity-80' : '',
    className
  );
</script>

{#if isLink}
  <a href={finalHref} class={linkClass} aria-label={type}>
    <Icon name={iconMap[type]} size={iconSize} />
    <span><slot>{value}</slot></span>
  </a>
{:else}
  <div class={linkClass}>
    <Icon name={iconMap[type]} size={iconSize} />
    <span><slot>{value}</slot></span>
  </div>
{/if}
