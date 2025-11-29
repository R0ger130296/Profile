<script lang="ts">
  import { useReferences } from '$lib/presentation/hooks/usePortfolio';
  import { Section, Icon, Card } from '$lib/components/ui';
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Reference } from '$lib/domain/entities';

  let visible = false;
  let references: Reference[] = [];

  onMount(async () => {
    visible = true;
    references = await useReferences();
  });
</script>

<Section title="Referencias Profesionales">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each references as ref, index (ref.id)}
      {#if visible}
        <div transition:fly={{ y: 20, duration: 400, delay: index * 100 }}>
          <Card
            padding="md"
            elevation="sm"
            className="hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex items-start gap-4">
              <!-- Avatar con iniciales -->
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                {ref.initials}
              </div>

              <!-- Información -->
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">{ref.name}</h3>
                <p class="text-sm font-medium text-gray-700 mb-0.5">{ref.position}</p>
                <p class="text-xs sm:text-sm text-gray-500 mb-3">{ref.company}</p>

                {#if ref.testimonial}
                  <blockquote class="text-sm text-gray-600 italic border-l-4 border-primary-200 pl-3 mb-3">
                    "{ref.testimonial}"
                  </blockquote>
                {/if}

                <!-- Contacto -->
                <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
                  <a
                    href="mailto:{ref.email}"
                    class="flex items-center gap-1.5 text-xs text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label="Enviar email a {ref.name}"
                  >
                    <Icon name="Mail" size={14} color="currentColor" />
                    <span class="hidden sm:inline">Email</span>
                  </a>
                  <a
                    href="tel:{ref.phone}"
                    class="flex items-center gap-1.5 text-xs text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label="Llamar a {ref.name}"
                  >
                    <Icon name="Phone" size={14} color="currentColor" />
                    <span class="hidden sm:inline">Teléfono</span>
                  </a>
                  {#if ref.linkedinUrl}
                    <a
                      href={ref.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-1.5 text-xs text-primary-600 hover:text-primary-700 transition-colors"
                      aria-label="LinkedIn de {ref.name}"
                    >
                      <Icon name="Linkedin" size={14} color="currentColor" />
                      <span class="hidden sm:inline">LinkedIn</span>
                    </a>
                  {/if}
                </div>
              </div>
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
</Section>
