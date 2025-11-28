<script lang="ts">
  // Importar iconos individuales de lucide-svelte (mejor para tree-shaking)
  import Mail from 'lucide-svelte/icons/mail';
  import Phone from 'lucide-svelte/icons/phone';
  import MapPin from 'lucide-svelte/icons/map-pin';
  import Linkedin from 'lucide-svelte/icons/linkedin';
  import Github from 'lucide-svelte/icons/github';
  import Globe from 'lucide-svelte/icons/globe';
  import Award from 'lucide-svelte/icons/award';
  import User from 'lucide-svelte/icons/user';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import GraduationCap from 'lucide-svelte/icons/graduation-cap';
  import Code from 'lucide-svelte/icons/code';
  import Check from 'lucide-svelte/icons/check';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Calendar from 'lucide-svelte/icons/calendar';
  import Rocket from 'lucide-svelte/icons/rocket';
  import Target from 'lucide-svelte/icons/target';
  import Star from 'lucide-svelte/icons/star';
  import Sparkles from 'lucide-svelte/icons/sparkles';

  // Mapeo de nombres a componentes
  const iconMap: Record<string, any> = {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Globe,
    Award,
    User,
    Briefcase,
    GraduationCap,
    Code,
    Check,
    ChevronRight,
    Calendar,
    Rocket,
    Target,
    Star,
    Sparkles
  };

  export let name: string;
  export let size: number | string = 20;
  export let className: string = '';
  export let color: string | undefined = undefined;

  $: IconComponent = iconMap[name];
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} size={size} class={className} {color} />
{:else}
  <span class="text-red-500 text-xs">Icon "{name}" not found</span>
{/if}
