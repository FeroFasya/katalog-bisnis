// Data portofolio & proof of work Fero (Modular & mudah di-maintain)
export const categories = [
  { id: 'all', label: 'SEMUA' },
  { id: 'client', label: 'WEBSITE KLIEN' },
  { id: 'pitch', label: 'KONSEP DESAIN' },
  { id: 'system', label: 'SISTEM & APLIKASI' },
  { id: 'labs', label: 'AI & EKSPERIMEN' },
]

export const projects = [
  // ================= WEBSITE KLIEN =================
  {
    id: 'artedesto',
    indexNum: '01',
    title: 'Studio Artedesto',
    category: 'client',
    categoryLabel: 'WEBSITE KLIEN',
    status: 'SUDAH TAYANG',
    tagBadge: 'HIGH-TICKET',
    year: '2026',
    domainPreview: 'artedesto.com — website klien',
    liveUrl: 'https://artedesto.com',
    thumbnail: '/projects/artedesto/cover.webp',
    fullMockup: '/projects/artedesto/full.webp',
    shortDesc: 'Platform portofolio studio kreasi visual dengan tipografi tajam dan arsitektur berperforma tinggi.',
    fullDesc: 'Klien high-ticket untuk studio kreasi visual. Fokus pada presentasi portofolio bernilai tinggi dengan tipografi tajam, transisi layout asimetris, dan optimasi performa tinggi untuk pasar kreatif internasional.',
    stack: ['Vue.js', 'Tailwind CSS', 'Vercel', 'Cloudflare DNS'],
    gradient: 'from-zinc-900 via-[#18181b] to-black',
    accentColor: '#ffffff',
    sections: [
      { title: 'Header & Showcase Utama', height: 'h-64 sm:h-96', color: 'from-zinc-900 to-black' },
      { title: 'Galeri Karya Pilihan (Visual Heavy)', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 via-zinc-900 to-black' },
      { title: 'Formulir Booking & Inquiry Klien', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },
  {
    id: 'gaweoemah',
    indexNum: '02',
    title: 'GaweOemah Studio',
    category: 'client',
    categoryLabel: 'WEBSITE KLIEN',
    status: 'SUDAH TAYANG',
    tagBadge: 'ARCHITECTURE',
    year: '2026',
    domainPreview: 'gaweoemah.studio — website klien',
    liveUrl: 'https://gaweoemah.studio',
    thumbnail: '/projects/gaweoemah/cover.webp',
    fullMockup: '/projects/gaweoemah/full.webp',
    shortDesc: 'Katalog minimalis portofolio arsitektur hunian, denah proyek, dan material finishing.',
    fullDesc: 'Platform portofolio studio arsitektur dan katalog denah/konstruksi rumah tinggal. Didesain dengan estetika arsitektural monokromatis untuk menonjolkan foto rancangan bangunan dan spesifikasi material.',
    stack: ['Vue.js', 'Tailwind CSS', 'Interactive Blueprints'],
    gradient: 'from-[#1c1d1a] via-[#121311] to-black',
    accentColor: '#fde047',
    sections: [
      { title: 'Tampilan Utama & Konsep Arsitektur', height: 'h-64 sm:h-96', color: 'from-stone-900 to-black' },
      { title: 'Katalog Proyek Hunian & Spesifikasi Material', height: 'h-80 sm:h-[450px]', color: 'from-stone-950 to-stone-900' },
      { title: 'Alur Konsultasi & Kontak WhatsApp', height: 'h-48 sm:h-64', color: 'from-black to-stone-950' }
    ]
  },
  {
    id: 'udien',
    indexNum: '03',
    title: 'Udien Barang Antique',
    category: 'client',
    categoryLabel: 'WEBSITE KLIEN',
    status: 'SUDAH TAYANG',
    tagBadge: 'COLLECTIBLE',
    year: '2026',
    domainPreview: 'udien-antique.catalog — website klien',
    liveUrl: 'https://udien-antique.catalog',
    thumbnail: '/projects/udien/cover.webp',
    fullMockup: '/projects/udien/full.webp',
    shortDesc: 'Etalase digital inventaris koleksi barang antik langka langsung terhubung ke WhatsApp.',
    fullDesc: 'Sistem etalase digital katalog barang antik dan benda koleksi langka. Menggantikan proses manual dengan antarmuka foto detail resolusi tinggi dan tombol inquiry langsung ke WhatsApp pemilik.',
    stack: ['Katalog Bisnis', 'WhatsApp Direct', 'Responsive Grid', 'Vercel'],
    gradient: 'from-[#241c14] via-[#14110e] to-black',
    accentColor: '#f59e0b',
    sections: [
      { title: 'Header Koleksi Benda Antik Pilihan', height: 'h-64 sm:h-96', color: 'from-amber-950/60 to-black' },
      { title: 'Detail Kondisi Benda & Kartu Inventaris', height: 'h-80 sm:h-[450px]', color: 'from-zinc-900 to-amber-950/40' },
      { title: 'Tombol Hubungi Langsung via WhatsApp', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },
  {
    id: 'tanari',
    indexNum: '04',
    title: 'Tanari Kitchenset',
    category: 'client',
    categoryLabel: 'WEBSITE KLIEN',
    status: 'SUDAH TAYANG',
    tagBadge: 'CUSTOM FURNITURE',
    year: '2026',
    domainPreview: 'tanari-kitchenset.netlify.app — website klien',
    liveUrl: 'https://tanari-kitchenset.netlify.app',
    thumbnail: '/projects/tanari/cover.webp',
    fullMockup: '/projects/tanari/full.webp',
    shortDesc: 'Landing page konversi tinggi untuk estimasi biaya dan portofolio custom cabinetry.',
    fullDesc: 'Landing page dan katalog digital UMKM custom kitchen set Bandung. Dibuat dengan struktur orientasi konversi, simulasi estimasi harga cepat, dan galeri sebelum-sesudah pemasangan.',
    stack: ['Tailwind CSS', 'High-Converting Flow', 'Netlify'],
    gradient: 'from-[#1f1d19] via-[#141311] to-black',
    accentColor: '#ea580c',
    sections: [
      { title: 'Hero Konversi Cepat & Simulasi Estimasi Biaya', height: 'h-64 sm:h-96', color: 'from-zinc-900 to-black' },
      { title: 'Pilihan Material & Galeri Sebelum-Sesudah', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 to-zinc-900' },
      { title: 'Cakupan Wilayah Bandung & Kontak Order', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },
  {
    id: 'bangunrumah',
    indexNum: '05',
    title: 'BangunRumahBandung',
    category: 'client',
    categoryLabel: 'WEBSITE KLIEN',
    status: 'SUDAH TAYANG',
    tagBadge: 'CONTRACTOR',
    year: '2026',
    domainPreview: 'bangunrumahbdg.com — website klien',
    liveUrl: null,
    thumbnail: '/projects/bangunrumah/cover.webp',
    fullMockup: '/projects/bangunrumah/full.webp',
    shortDesc: 'Landing page jasa kontraktor konstruksi & renovasi rumah berfokus pada trust and leads.',
    fullDesc: 'Website landing page jasa kontraktor dan renovasi rumah tinggal area Bandung. Menonjolkan estimasi transparan, tahapan pengerjaan bangunan, serta testimoni klien dengan alur direct WhatsApp.',
    stack: ['Vue.js', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-[#292524] via-[#1c1917] to-black',
    accentColor: '#fb923c',
    sections: [
      { title: 'Header Layanan Bangun & Renovasi Rumah', height: 'h-64 sm:h-96', color: 'from-stone-900 to-black' },
      { title: 'Galeri Proyek Selesai & Simulasi RAB Singkat', height: 'h-80 sm:h-[450px]', color: 'from-stone-950 to-stone-900' },
      { title: 'Kontak Survei Lokasi Gratis via WhatsApp', height: 'h-48 sm:h-64', color: 'from-black to-stone-950' }
    ]
  },
  {
    id: 'weddingbandungku',
    indexNum: '06',
    title: 'Wedding Bandungku',
    category: 'client',
    categoryLabel: 'WEBSITE KLIEN',
    status: 'SUDAH TAYANG',
    tagBadge: 'WEDDING PLATFORM',
    year: '2026',
    domainPreview: 'weddingbandungku.com — website klien',
    liveUrl: null,
    thumbnail: '/projects/weddingbandungku/cover.webp',
    fullMockup: '/projects/weddingbandungku/full.webp',
    shortDesc: 'Platform wedding organizer dan portal paket pernikahan elegan bernuansa modern romantis.',
    fullDesc: 'Website layanan wedding organizer di Bandung. Memuat paket pernikahan all-in, galeri dokumentasi venue, dan fitur konsultasi tanggal pernikahan secara interaktif.',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    gradient: 'from-[#3b1d28] via-[#1a0f14] to-black',
    accentColor: '#f472b6',
    sections: [
      { title: 'Romantic Hero Header & Video Background', height: 'h-64 sm:h-96', color: 'from-rose-950 to-black' },
      { title: 'Pilihan Paket Gedung, Rias & Catering', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 to-rose-950/40' },
      { title: 'Form Reservasi Jadwal Temu & Konsultasi', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },

  // ================= KONSEP DESAIN (PROYEK BARU) =================
  {
    id: 'aruvia',
    indexNum: '07',
    title: 'Aruvia Atelier',
    category: 'pitch',
    categoryLabel: 'KONSEP DESAIN',
    status: 'KONSEP PILIHAN',
    tagBadge: 'MODERN ARCHITECTURE',
    year: '2026',
    domainPreview: 'aruvia-atelier.preview — konsep desain',
    liveUrl: null,
    thumbnail: '/projects/aruvia/cover.webp',
    fullMockup: '/projects/aruvia/full.webp',
    shortDesc: 'Konsep antarmuka modern sleek untuk studio arsitektur & interior dengan floating card dan visual kontemporer.',
    fullDesc: 'Eksplorasi antarmuka bernuansa modern sleek untuk studio arsitektur dan konstruksi kontemporer ("Redefining Modern Spaces"). Menonjolkan estetika minimalis modern, floating card interaktif, dan galeri karya seperti Casa Senja dan Ruang Sora yang memaksimalkan pencahayaan natural serta tata ruang hidup modern.',
    stack: ['Vue.js', 'Tailwind CSS', 'Glassmorphism', 'Modern Grid'],
    gradient: 'from-[#1e1e24] via-[#111116] to-black',
    accentColor: '#38bdf8',
    sections: [
      { title: 'Header & Floating Showcase ("Redefining Modern Spaces")', height: 'h-64 sm:h-96', color: 'from-zinc-900 to-black' },
      { title: 'Modern Living Manifesto & Selected Works (Casa Senja, Ruang Sora)', height: 'h-80 sm:h-[450px]', color: 'from-stone-950 via-zinc-900 to-black' },
      { title: 'Dynamic Category Filter (Architecture, Interior, Construction)', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },
  {
    id: 'ruangreka',
    indexNum: '08',
    title: 'Ruang Reka Studio',
    category: 'pitch',
    categoryLabel: 'KONSEP DESAIN',
    status: 'KONSEP PILIHAN',
    tagBadge: 'DESIGN & BUILD',
    year: '2026',
    domainPreview: 'ruangreka.studio — konsep desain',
    liveUrl: null,
    thumbnail: '/projects/ruangreka/cover.webp',
    fullMockup: '/projects/ruangreka/full.webp',
    shortDesc: 'Konsep desain studio arsitektur & interior berkarakter editorial dengan tipografi blend-mode dan alur kolaborasi humanis.',
    fullDesc: 'Eksplorasi desain web studio arsitektur & build bertema "setiap hunian punya ceritanya masing-masing". Menghadirkan eksperimen tipografi raksasa interaktif dengan mode difference/cutout/outline yang membelah maket denah 3D Rumah Embun, dilengkapi alur kerja bertahap dan area layanan Jabodetabek-Bandung-Bali.',
    stack: ['Interactive Typography', 'CSS Blend Modes', 'Vue.js', 'Tailwind CSS'],
    gradient: 'from-[#232323] via-[#121212] to-black',
    accentColor: '#ffffff',
    sections: [
      { title: 'Brutalist Typography Hero dengan Blend Modes Interaktif', height: 'h-64 sm:h-96', color: 'from-zinc-900 to-black' },
      { title: 'Pendekatan Humanis & Galeri Proyek (Rumah Embun, Ruang Rapat Sora)', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 via-zinc-900 to-black' },
      { title: 'Tiga Tahap Alur Kolaborasi & Form Ngobrol Ruang', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },
  {
    id: 'whitespace',
    indexNum: '09',
    title: 'White Space Studio',
    category: 'pitch',
    categoryLabel: 'KONSEP DESAIN',
    status: 'KONSEP PILIHAN',
    tagBadge: 'SPATIAL SHOWCASE',
    year: '2026',
    domainPreview: 'whitespace-studio.preview — konsep desain',
    liveUrl: null,
    thumbnail: '/projects/whitespace/cover.webp',
    fullMockup: '/projects/whitespace/full.webp',
    shortDesc: 'Showcase visual arsitektur & fotografi ruang bergaya galeri horizontal dengan proporsi ruang putih bernilai tinggi.',
    fullDesc: 'Eksplorasi desain platform portofolio berbasis galeri visual spasial. Menonjolkan komposisi multi-panel fotografi arsitektur dan interior modern yang dibingkai oleh tipografi condensed sans tegas, memanfaatkan konsep negative space untuk menghadirkan fokus penuh pada detail pencahayaan dan material ruang.',
    stack: ['Multi-Panel Grid', 'Minimalist Editorial', 'Vue.js', 'Tailwind CSS'],
    gradient: 'from-[#1c1c1c] via-[#0f0f0f] to-black',
    accentColor: '#f4f4f5',
    sections: [
      { title: 'Horizontal Architectural Horizon Multi-Panel Grid', height: 'h-64 sm:h-96', color: 'from-zinc-900 to-black' },
      { title: 'Condensed Typography Anchor ("WHITE SPACE STUDIO")', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 via-zinc-900 to-black' },
      { title: 'Dark/Light Theme Toggle & Interactive Project Archive', height: 'h-48 sm:h-64', color: 'from-black to-zinc-950' }
    ]
  },

  // ================= SISTEM & APLIKASI =================
  {
    id: 'pitodo',
    indexNum: '10',
    title: 'PITO\'DO Kanban Board',
    category: 'system',
    categoryLabel: 'SISTEM & APLIKASI',
    status: 'MAGANG BTS.ID',
    tagBadge: 'WORKFLOW TOOL',
    year: '2026',
    domainPreview: 'pitodo — aplikasi internal',
    liveUrl: null,
    thumbnail: '/projects/pitodo/cover.webp',
    fullMockup: '/projects/pitodo/full.webp',
    shortDesc: 'Sistem manajemen tugas drag-and-drop yang dikembangkan saat magang di PT Intersolusi Teknologi Asia.',
    fullDesc: 'Aplikasi produktivitas berbasis Kanban board yang dikembangkan selama magang di tim frontend PT Intersolusi Teknologi Asia (BTS.ID). Menangani drag-and-drop tugas, filter status, dan kolaborasi tim.',
    stack: ['Vue.js', 'Frontend Architecture', 'State Management', 'Tailwind'],
    gradient: 'from-[#101b2b] via-[#09111c] to-black',
    accentColor: '#38bdf8',
    sections: [
      { title: 'Alur Multi-Kolom Kanban (Backlog, In Progress, QA, Done)', height: 'h-64 sm:h-96', color: 'from-blue-950 to-slate-950' },
      { title: 'Modal Kartu Tugas & Progress Sub-tugas', height: 'h-80 sm:h-[450px]', color: 'from-slate-900 to-blue-950/60' },
      { title: 'Catatan Aktivitas Tim & Riwayat Status', height: 'h-48 sm:h-64', color: 'from-black to-slate-900' }
    ]
  },
  {
    id: 'playverse',
    indexNum: '11',
    title: 'PlayVerse Storefront',
    category: 'system',
    categoryLabel: 'SISTEM & APLIKASI',
    status: 'PROYEK KREASI',
    tagBadge: 'SCI-FI STOREFRONT',
    year: '2026',
    domainPreview: 'playverse.app — digital storefront',
    liveUrl: null,
    thumbnail: '/projects/playverse/cover.webp',
    fullMockup: '/projects/playverse/full.webp',
    shortDesc: 'Platform storefront distribusi game digital dengan konsep Sci-Fi futuristik dan Glassmorphism.',
    fullDesc: 'Platform storefront untuk distribusi game digital dengan konsep Sci-Fi futuristik dan desain Glassmorphism. Mendukung sinkronisasi katalog cloud secara real-time, keranjang belanja personal, dan simulasi transaksi.',
    stack: ['Cordova', 'Firebase', 'Local Storage', 'Glassmorphism UI'],
    gradient: 'from-[#1e1b4b] via-[#0f172a] to-black',
    accentColor: '#818cf8',
    sections: [
      { title: 'Sci-Fi Hero Grid & Featured Game Carousel', height: 'h-64 sm:h-96', color: 'from-indigo-950 to-black' },
      { title: 'Real-time Catalog Sync & Filtering Panel', height: 'h-80 sm:h-[450px]', color: 'from-slate-900 to-indigo-950/60' },
      { title: 'Shopping Cart & Checkout Simulation Flow', height: 'h-48 sm:h-64', color: 'from-black to-slate-900' }
    ]
  },
  {
    id: 'semantic',
    indexNum: '12',
    title: 'Kuliner Nusantara Semantic',
    category: 'system',
    categoryLabel: 'SISTEM & APLIKASI',
    status: 'RISET AKADEMIK',
    tagBadge: 'KNOWLEDGE GRAPH',
    year: '2025',
    domainPreview: 'semantic-kuliner — web sains data',
    liveUrl: null,
    thumbnail: '/projects/semantic/cover.webp',
    fullMockup: '/projects/semantic/full.webp',
    shortDesc: 'Aplikasi pencarian semantik kuliner Indonesia berbasis Knowledge Graph & Apache Jena Fuseki.',
    fullDesc: 'Aplikasi sistem informasi dan pencarian semantik berbasis Knowledge Graph (OWL/RDF, Protégé, SPARQL, Apache Jena Fuseki). Mendukung relasi cerdas berdasarkan nutrisi gizi, asal daerah, dan cita rasa dengan antarmuka modern.',
    stack: ['OWL / RDF', 'Apache Jena Fuseki', 'SPARQL', 'PHP / Tailwind'],
    gradient: 'from-[#14231f] via-[#0b1412] to-black',
    accentColor: '#2dd4bf',
    sections: [
      { title: 'Knowledge Graph Semantic Query Engine', height: 'h-64 sm:h-96', color: 'from-teal-950 to-black' },
      { title: 'Graf Relasi Ontologi Kuliner & Kandungan Gizi', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 via-teal-950/50 to-black' },
      { title: 'Hasil Agregasi Data & SPARQL Endpoint Explorer', height: 'h-48 sm:h-64', color: 'from-black to-teal-950' }
    ]
  },

  // ================= AI & EKSPERIMEN =================
  {
    id: 'aika',
    indexNum: '13',
    title: 'AIKA System',
    category: 'labs',
    categoryLabel: 'AI & EKSPERIMEN',
    status: 'RISET AI',
    tagBadge: '3D VRM COMPANION',
    year: '2026',
    domainPreview: 'aika-ai.system — riset ai',
    liveUrl: null,
    thumbnail: '/projects/aika/cover.webp',
    fullMockup: '/projects/aika/full.webp',
    shortDesc: 'Integrasi LLM real-time dengan TTS, chunking latensi rendah, sistem memori, dan render 3D VRM.',
    fullDesc: 'Sistem dialog AI interaktif berbasis karakter 3D anime VRM yang dikembangkan bersama Miki. Dilengkapi integrasi LLM stream, response chunking untuk mengurangi latensi suara TTS, serta memori percakapan berlanjut.',
    stack: ['Large Language Model', '3D VRM Runtime', 'TTS Chunking', 'Sistem Memori'],
    gradient: 'from-[#23132e] via-[#120b18] to-black',
    accentColor: '#c084fc',
    sections: [
      { title: 'Kanvas Karakter 3D VRM & Ekspresi Wajah', height: 'h-64 sm:h-96', color: 'from-purple-950 to-black' },
      { title: 'Streaming Respon AI & Visualizer Audio Realtime', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 via-purple-950/50 to-black' },
      { title: 'Panel Pengaturan Persona & Memori Obrolan', height: 'h-48 sm:h-64', color: 'from-black to-purple-950' }
    ]
  },
  {
    id: 'kira',
    indexNum: '14',
    title: 'KIRA AI Trainer',
    category: 'labs',
    categoryLabel: 'AI & EKSPERIMEN',
    status: 'PROYEK HACKATHON',
    tagBadge: 'GAME × WORKOUT',
    year: '2026',
    domainPreview: 'kira.app — #juaravibecoding',
    liveUrl: null,
    thumbnail: '/projects/kira/cover.webp',
    fullMockup: '/projects/kira/full.webp',
    shortDesc: 'Aplikasi visual novel companion menggabungkan kultur anime, workout tracker, dan dialog AI.',
    fullDesc: 'Proyek Game × Productivity × AI berupa workout companion visual novel. Menggabungkan kultur olahraga, anime aesthetic, dan sistem persona AI untuk memotivasi sesi latihan fisik harian.',
    stack: ['LLM Companion', 'Visual Novel Engine', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-[#0c2419] via-[#08150f] to-black',
    accentColor: '#34d399',
    sections: [
      { title: 'Layar Dialog Visual Novel & Ekspresi Karakter', height: 'h-64 sm:h-96', color: 'from-emerald-950 to-black' },
      { title: 'Jurnal Latihan Harian & Pemisahan Otot Latihan', height: 'h-80 sm:h-[450px]', color: 'from-zinc-950 via-emerald-950/50 to-black' },
      { title: 'Evaluasi Pelatih AI & Motivasi Sesi Workout', height: 'h-48 sm:h-64', color: 'from-black to-emerald-950' }
    ]
  }
]
