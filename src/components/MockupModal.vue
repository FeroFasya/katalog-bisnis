<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const fullImageError = ref(false)

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

watch(
  () => props.project,
  (val) => {
    fullImageError.value = false
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="project"
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10"
      @click.self="$emit('close')"
    >
      <div
        class="bg-[#121316] border editorial-border rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        <!-- Modal Chrome Header -->
        <div class="h-14 px-6 border-b editorial-border flex items-center justify-between bg-[#16171b] shrink-0">
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1.5">
              <button
                @click="$emit('close')"
                class="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
                title="Tutup Modal"
              ></button>
              <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span class="text-xs font-mono text-zinc-400 pl-4 border-l editorial-border truncate max-w-xs sm:max-w-md">
              fero.archive // {{ project.id }} [DETAIL & MOCKUP SPEC]
            </span>
          </div>

          <div class="flex items-center gap-4">
            <span class="px-2.5 py-1 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border editorial-border hidden sm:inline-block">
              {{ project.status }}
            </span>
            <button
              @click="$emit('close')"
              class="font-mono text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
            >
              TUTUP (ESC) ✕
            </button>
          </div>
        </div>

        <!-- Modal Body (Scrollable Mockup View) -->
        <div class="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0d0e11]">
          <!-- Overview Header -->
          <div class="space-y-4 border-b editorial-border pb-6">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span class="font-mono text-xs text-zinc-500">
                  {{ project.categoryLabel }} • TAHUN {{ project.year }}
                </span>
                <h2 class="text-3xl font-light text-white tracking-tight mt-1">
                  {{ project.title }}
                </h2>
              </div>

              <!-- Live URL Button if Available -->
              <div>
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5 shadow"
                >
                  <span>BUKA WEBSITE LANGSUNG</span>
                  <span>↗</span>
                </a>
                <span
                  v-else
                  class="px-3.5 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-400 font-mono text-xs border editorial-border"
                >
                  DEMO INTERNAL / LOKAL
                </span>
              </div>
            </div>

            <!-- Full Description -->
            <p class="text-sm text-zinc-300 max-w-3xl leading-relaxed">
              {{ project.fullDesc }}
            </p>

            <!-- Tech Stack List -->
            <div class="flex flex-wrap items-center gap-2 pt-2">
              <span class="text-xs font-mono text-zinc-500 mr-2">TEKNOLOGI & ARSITEKTUR:</span>
              <span
                v-for="st in project.stack"
                :key="st"
                class="px-3 py-1 rounded bg-zinc-800 border editorial-border text-zinc-300 font-mono text-xs"
              >
                {{ st }}
              </span>
            </div>
          </div>

          <!-- Mockup Visual Display (Real Full Image or Section Simulation) -->
          <div class="space-y-6 pt-2">
            <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>TAMPILAN MOCKUP LENGKAP (GULIR KE BAWAH)</span>
              <span>100% VISUAL ACCURATE</span>
            </div>

            <!-- Real Full Screenshot (if provided) -->
            <div
              v-if="project.fullMockup && !fullImageError"
              class="w-full rounded-xl overflow-hidden border editorial-border bg-black shadow-2xl"
            >
              <img
                :src="project.fullMockup"
                :alt="project.title + ' Full Mockup'"
                @error="fullImageError = true"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <!-- Fallback Section-by-Section Wireframe Flow -->
            <div v-else class="space-y-6">
              <div
                v-for="(sec, idx) in project.sections"
                :key="idx"
                :class="[
                  'border editorial-border rounded-xl bg-gradient-to-b p-6 flex flex-col justify-between relative overflow-hidden shadow-inner',
                  sec.color,
                  sec.height
                ]"
              >
                <div class="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span class="bg-black/60 px-3 py-1 rounded backdrop-blur border editorial-border">
                    BAGIAN 0{{ idx + 1 }}: {{ sec.title }}
                  </span>
                  <span class="text-zinc-500">MOCKUP PREVIEW</span>
                </div>

                <!-- Wireframe Aesthetic Lines -->
                <div class="space-y-2 max-w-lg">
                  <div class="h-2 w-32 bg-white/20 rounded"></div>
                  <div class="h-2 w-48 bg-white/10 rounded"></div>
                </div>

                <div class="text-[10px] font-mono text-zinc-600 flex justify-between">
                  <span>TAMPILAN STRUKTUR & TATA LETAK</span>
                  <span>PIXEL ACCURATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
