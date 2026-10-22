<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

defineEmits(['inspect'])

const imageError = ref(false)
const onImageError = () => {
  imageError.value = true
}
</script>

<template>
  <article
    class="group flex flex-col bg-surface-900 border editorial-border rounded-2xl overflow-hidden hover:border-zinc-500/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
  >
    <!-- Mockup Display Frame (Clickable) -->
    <div
      class="relative bg-[#141519] p-4 sm:p-6 border-b editorial-border cursor-pointer overflow-hidden"
      @click="$emit('inspect', project)"
    >
      <!-- Browser Top Chrome Mockup -->
      <div class="flex items-center justify-between pb-3 text-zinc-600 font-mono text-[10px]">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
        </div>
        <span class="text-zinc-500 truncate max-w-[200px] sm:max-w-xs">{{ project.domainPreview }}</span>
        <span
          :class="[
            'text-[10px] font-mono tracking-wider',
            project.status === 'SUDAH TAYANG' ? 'text-emerald-400' :
            project.status === 'KONSEP PILIHAN' ? 'text-amber-400' :
            project.status === 'MAGANG BTS.ID' ? 'text-sky-400' :
            project.status === 'RISET AI' ? 'text-purple-400' : 'text-zinc-400'
          ]"
        >
          {{ project.status }}
        </span>
      </div>

      <!-- Preview Canvas: Real Screenshot or Gradient Fallback -->
      <div
        class="aspect-[16/10] w-full rounded-lg overflow-hidden border editorial-border relative group-hover:scale-[1.015] transition-transform duration-500 shadow-inner bg-black"
      >
        <!-- Actual Screenshot Image (If Available & Not Error) -->
        <template v-if="project.thumbnail && !imageError">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            @error="onImageError"
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <!-- Subtle Dark Gradient Overlay for Readability & Cinematic Look -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-5 pointer-events-none">
            <div class="flex justify-between items-start">
              <span class="text-[11px] font-mono tracking-widest text-zinc-300 uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur border editorial-border">
                {{ project.title }}
              </span>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/20 text-white backdrop-blur-md border border-white/20">
                {{ project.tagBadge }}
              </span>
            </div>
            <div class="flex items-center justify-between text-[11px] font-mono text-zinc-300">
              <span class="text-zinc-400">HERO MOCKUP</span>
              <span class="underline underline-offset-4 text-white group-hover:text-emerald-300 transition-colors">
                Lihat tampilan penuh →
              </span>
            </div>
          </div>
        </template>

        <!-- Aesthetic Gradient Wireframe Fallback (When No Image Yet) -->
        <div
          v-else
          :class="[
            'w-full h-full bg-gradient-to-br flex flex-col justify-between p-6',
            project.gradient
          ]"
        >
          <!-- Canvas Top Row -->
          <div class="flex justify-between items-start gap-2">
            <span class="text-[11px] font-mono tracking-widest text-zinc-300 uppercase truncate">
              {{ project.title }}
            </span>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/10 text-white backdrop-blur-md shrink-0 border border-white/10">
              {{ project.tagBadge }}
            </span>
          </div>

          <!-- Canvas Center Info -->
          <div class="space-y-1.5 my-auto">
            <h4 class="text-2xl font-light text-white tracking-tight">
              {{ project.title }}
            </h4>
            <p class="text-xs text-zinc-300/80 line-clamp-2 leading-relaxed">
              {{ project.shortDesc }}
            </p>
          </div>

          <!-- Canvas Bottom Row -->
          <div class="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
            <span>DESKTOP / RESPONSIVE</span>
            <span class="text-zinc-200 underline underline-offset-4 group-hover:text-white transition-colors">
              Lihat tampilan penuh →
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Card Metadata & Specs -->
    <div class="p-6 flex flex-col justify-between flex-1 gap-4">
      <div class="flex items-start justify-between gap-4">
        <div>
          <span class="font-mono text-xs text-zinc-500">
            [ {{ project.indexNum }} ] // {{ project.categoryLabel }}
          </span>
          <h3 class="text-lg font-medium text-white mt-1">
            {{ project.title }}
          </h3>
        </div>
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50 shrink-0">
          {{ project.year }}
        </span>
      </div>

      <!-- Tech Stack & Action Button -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div class="flex flex-wrap gap-1.5 font-mono text-[11px] text-zinc-400">
          <span
            v-for="st in project.stack"
            :key="st"
            class="px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-300 border border-white/[0.04]"
          >
            {{ st }}
          </span>
        </div>
        
        <button
          @click="$emit('inspect', project)"
          class="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/[0.05]"
        >
          <span>LIHAT</span>
          <span>↗</span>
        </button>
      </div>
    </div>
  </article>
</template>
