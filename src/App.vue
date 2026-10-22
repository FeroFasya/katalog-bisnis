<script setup>
import { ref, computed } from 'vue'
import { categories, projects } from './data/projects.js'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import FilterTabs from './components/FilterTabs.vue'
import ProjectCard from './components/ProjectCard.vue'
import MockupModal from './components/MockupModal.vue'
import FooterSection from './components/FooterSection.vue'

// Reactive States
const selectedCategory = ref('all')
const activeProject = ref(null)

// Calculate project counts per category dynamically
const categoryCounts = computed(() => {
  const counts = { all: projects.length }
  categories.forEach((cat) => {
    if (cat.id !== 'all') {
      counts[cat.id] = projects.filter((p) => p.category === cat.id).length
    }
  })
  return counts
})

// Filter projects based on active tab
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter((p) => p.category === selectedCategory.value)
})

// Modal Actions
const openModal = (proj) => {
  activeProject.value = proj
}

const closeModal = () => {
  activeProject.value = null
}
</script>

<template>
  <div class="min-h-screen bg-[#0b0c0e] text-[#e4e4e7] antialiased font-sans selection:bg-white selection:text-black flex flex-col justify-between">
    <div>
      <!-- Top Sticky Navbar -->
      <Navbar :total-count="filteredProjects.length" />

      <!-- Hero Section -->
      <HeroSection />

      <!-- Filter Controls -->
      <FilterTabs
        :categories="categories"
        :active-category="selectedCategory"
        :counts="categoryCounts"
        @change-category="(id) => selectedCategory = id"
      />

      <!-- Gallery Archive Grid -->
      <main class="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            @inspect="openModal"
          />
        </div>

        <!-- Empty State Fallback -->
        <div
          v-if="filteredProjects.length === 0"
          class="py-24 text-center border editorial-border rounded-2xl bg-surface-900 mt-4"
        >
          <p class="font-mono text-sm text-zinc-500">
            [ TIDAK ADA KARYA DITEMUKAN PADA KATEGORI INI ]
          </p>
        </div>
      </main>
    </div>

    <!-- Minimalist Editorial Footer -->
    <FooterSection />

    <!-- Interactive Lightbox Modal -->
    <MockupModal
      :project="activeProject"
      @close="closeModal"
    />
  </div>
</template>
