<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
  counts: {
    type: Object,
    required: true,
  },
})

defineEmits(['change-category'])
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-6 lg:px-12 pb-10 w-full flex flex-wrap items-center justify-between gap-4">
    <!-- Filter Buttons Bar -->
    <div class="flex flex-wrap items-center gap-1.5 p-1 bg-surface-900 border editorial-border rounded-xl font-mono text-xs">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="$emit('change-category', cat.id)"
        :class="[
          'px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer',
          activeCategory === cat.id
            ? 'bg-white text-black font-semibold shadow-sm'
            : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
        ]"
      >
        {{ cat.label }} [{{ counts[cat.id] || 0 }}]
      </button>
    </div>

    <!-- Quick Hint -->
    <div class="text-xs font-mono text-zinc-500 hidden sm:block">
      KLIK KARTU UNTUK LIHAT MOCKUP LENGKAP & SPESIFIKASI
    </div>
  </div>
</template>
