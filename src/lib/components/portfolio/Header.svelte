<script lang="ts">
  import { personalInfo } from '$lib/data/portfolio';
  import { Avatar, ContactLink } from '$lib/components/ui';
</script>

<header class="bg-gradient-to-br from-primary to-primary-dark text-white py-12 px-8 mb-8">
  <div class="max-w-6xl mx-auto">
    <div class="flex items-center gap-6 mb-8 md:flex-col md:text-center">
      <Avatar name={personalInfo.name} size="lg" />
      <div class="flex-1">
        <h1 class="text-4xl font-bold mb-2">{personalInfo.name}</h1>
        <p class="text-xl opacity-90">{personalInfo.title}</p>
      </div>
    </div>
    <div class="flex flex-wrap gap-8 md:flex-col md:gap-4">
      <ContactLink type="email" value={personalInfo.email} className="text-white" />
      <ContactLink type="phone" value={personalInfo.phone} className="text-white" />
      <ContactLink type="location" value={personalInfo.location} className="text-white" />
    </div>
  </div>
</header>
