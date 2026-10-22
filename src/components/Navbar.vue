<script setup>
defineProps({
  totalCount: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <header class="border-b editorial-border sticky top-0 z-40 bg-[#0b0c0e]/85 backdrop-blur-md">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
      
      <!-- Brand & Status -->
      <div class="flex items-center gap-4">
        <a href="#" class="font-mono text-base tracking-widest uppercase font-bold text-white hover:opacity-85 transition-opacity flex items-center gap-1.5">
          <span>FERO</span>
          <span class="text-zinc-500 font-light">/ARCHIVE</span>
        </a>
        <div class="hidden sm:flex items-center gap-2 pl-4 border-l editorial-border text-xs font-mono text-zinc-400">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>BUKTI KARYA NYATA</span>
        </div>
      </div>

      <!-- Quick Metrics / Meta -->
      <div class="flex items-center gap-6 text-xs font-mono text-zinc-400">
        <span class="hidden md:inline text-zinc-500">BANDUNG, ID [GMT+7]</span>
        <div class="px-3.5 py-1.5 rounded-full border editorial-border bg-white/[0.03] text-zinc-300">
          <span>TOTAL: <strong class="text-white font-semibold">{{ totalCount }} KARYA</strong></span>
        </div>
      </div>

    </div>
  </header>
</template>
