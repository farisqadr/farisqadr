export const navLinks = [
  { label: "Fitur", href: "#features" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export const audiences = [
  {
    label: "Keluarga",
    description:
      "Kelola pengeluaran rumah tangga bersama pasangan dan anak dalam satu tempat.",
    highlight: "💰",
  },
  {
    label: "Bisnis",
    description:
      "Pisahkan keuangan bisnis, awasi arus kas, dan kirim laporan otomatis ke tim.",
    highlight: "💼",
  },
  {
    label: "Mahasiswa",
    description:
      "Catat pemasukan dan pengeluaran harian, pantau uang jajan, dan tetap on track.",
    highlight: "📚",
  },
  {
    label: "Karyawan",
    description:
      "Kelola gaji bulanan, cicilan, dan kebutuhan harian tanpa spreadsheet ribet.",
    highlight: "👨‍💼",
  },
];

export const featureCards = [
  {
    title: "Multi Grup & Member",
    description:
      "Pisahkan uang pribadi, keluarga, dan bisnis. Undang partner atau tim untuk kolaborasi real-time.",
    image: "/hemat/landing/hematai_cat_groups.png",
    accent: "from-emerald-200/70 to-emerald-400/50",
  },
  {
    title: "Integrasi WhatsApp & Telegram",
    description:
      "Kirimi chat ke hemat.ai dari WhatsApp atau Telegram, transaksi langsung tercatat otomatis.",
    image: "/hemat/landing/hematai_cat_phone.png",
    accent: "from-sky-200/70 to-sky-300/40",
  },
  {
    title: "Ga Perlu Format Ribet",
    description:
      "Ketik bebas: 'gojek 20rb', 'gaji 2jt'. AI hemat.ai paham konteks dan memasukkannya ke laporan.",
    image: "/hemat/landing/hematai_cat_hello.png",
    accent: "from-fuchsia-200/80 to-pink-200/50",
  },
  {
    title: "Scan Struk Otomatis",
    description:
      "Foto struk minimarket, hemat.ai langsung membaca nominal, kategori, dan mencatat ke pengeluaran.",
    image: "/hemat/landing/hematai_cat_receipt.png",
    accent: "from-amber-200/80 to-amber-300/40",
  },
  {
    title: "Laporan Bulanan",
    description:
      "Dapatkan rangkuman pemasukan, pengeluaran, hingga kategori terbesar—otomatis setiap akhir bulan.",
    image: "/hemat/landing/hematai_cat_money.png",
    accent: "from-green-200/80 to-lime-200/50",
  },
  {
    title: "Voice Note Support",
    description:
      "Lagi di jalan? Tinggal kirim voice note dan AI akan menyalin, memberi kategori, dan menyimpan data.",
    image: "/hemat/landing/hematai_cat_singing.png",
    accent: "from-purple-200/90 to-indigo-200/60",
  },
];

export const pricingPlans = [
  {
    name: "Gratis",
    slogan: "Free/akun",
    subheading: "Coba semua fitur gratis.",
    price: "Free",
    billing: "Free/akun",
    cta: "Mulai Sekarang",
    highlight: "Z z z",
    image: "/hemat/landing/hematai_cat_sleeping.png",
    popularLabel: "",
    benefits: ["20× chat per akun", "12 kategori kustom", "Dashboard web"],
  },
  {
    name: "Hemat",
    slogan: "Rp49rb/bulan",
    subheading: "Ideal untuk keuangan pribadi atau bisnis kecil.",
    price: "Rp49rb",
    billing: "Per bulan",
    cta: "Mulai Sekarang",
    highlight: "Paling Laris",
    image: "/hemat/landing/hematai_cat_groups.png",
    popularLabel: "Paling Laris",
    benefits: ["500× chat per bulan", "Integrasi Telegram", "3 pengguna kolaborasi"],
  },
  {
    name: "Untung",
    slogan: "Rp99rb/bulan",
    subheading: "Untuk keluarga, bisnis, atau yang butuh integrasi WhatsApp.",
    price: "Rp99rb",
    billing: "Per bulan",
    cta: "Mulai Sekarang",
    highlight: "Pilihan Terbaik",
    image: "/hemat/landing/hematai_cat_money.png",
    popularLabel: "Pilihan Terbaik",
    benefits: [
      "2.000× chat per bulan",
      "Integrasi Telegram & WhatsApp",
      "100 pengguna kolaborasi",
    ],
  },
];

export const comparisonTable = {
  headers: ["Fitur", "Gratis", "Hemat", "Untung"],
  rows: [
    ["Kuota Chat AI", "20×/akun", "500×/bulan", "2.000×/bulan"],
    ["Kustomisasi Kategori", "12 kategori", "12 kategori", "24 kategori"],
    ["Integrasi", "Tidak tersedia", "Telegram", "Telegram & WhatsApp"],
    ["Kolaborasi Grup", "Tidak tersedia", "3 pengguna", "100 pengguna"],
  ],
};

export const testimonials = [
  {
    quote:
      "Gue suka banget pake hemat.ai! Sekarang ngatur keuangan jadi gampang banget, tinggal chat aja di WhatsApp. Worth it banget langganannya!",
    name: "Sarah Amalia",
    role: "Food Blogger",
  },
  {
    quote:
      "Sebagai owner UMKM, hemat.ai ngebantu banget buat ngatur cash flow. Laporan keuangan jadi lebih rapi dan gampang dimonitor.",
    name: "Budi Santoso",
    role: "Pemilik Coffee Shop",
  },
  {
    quote:
      "Akhirnya nemu aplikasi yang cocok buat anak kosan! Simpel, ga ribet, dan harganya worth it banget.",
    name: "Dian Pratiwi",
    role: "Mahasiswa",
  },
  {
    quote:
      "Suka banget sama fitur scan struk! AI-nya langsung kategoriin sendiri. Tinggal foto terus kirim, beres deh!",
    name: "Reza Firmansyah",
    role: "Karyawan Swasta",
  },
  {
    quote:
      "Bikin grup bareng keluarga jadi gampang banget ngatur keuangan rumah tangga. Integrasi WhatsApp-nya juara!",
    name: "Ahmad Hidayat",
    role: "Kepala Keluarga",
  },
];

export const faqItems = [
  {
    question: "Kuota chat itu maksudnya gimana?",
    answer:
      "Satu kuota chat dihitung setiap kali kamu mengirim satu pesan ke hemat.ai. Dalam satu pesan kamu bisa menyebut beberapa transaksi sekaligus, semuanya tetap terhitung satu kuota.",
  },
  {
    question: "Bisa export data keuangannya ga?",
    answer:
      "Semua paket berbayar bisa export laporan ke Excel dan PDF kapan pun. Pengguna gratis dapat export bulanan dari dashboard web.",
  },
  {
    question: "Gimana sih cara kerja hemat.ai di WhatsApp?",
    answer:
      "Hubungkan nomor WhatsApp kamu, lalu tinggal kirim chat atau foto struk ke bot hemat.ai. Dalam hitungan detik transaksi muncul di dashboard.",
  },
  {
    question: "hemat.ai support bahasa apa aja?",
    answer:
      "Saat ini hemat.ai mendukung Bahasa Indonesia dan Bahasa Inggris, lengkap dengan pengenalan istilah sehari-hari.",
  },
  {
    question: "Berapa banyak transaksi yang bisa diproses dalam sehari?",
    answer:
      "Tidak ada limit harian selama kuota chat masih tersedia. Kami memproses ribuan transaksi per akun tanpa hambatan.",
  },
  {
    question: "Apa bedanya paket Hemat dan Untung?",
    answer:
      "Paket Hemat cocok untuk individu atau tim kecil dengan integrasi Telegram. Paket Untung menambahkan WhatsApp, kuota lebih besar, dan tim besar.",
  },
  {
    question: "Bisa dipake buat bisnis dengan banyak transaksi ga?",
    answer:
      "Bisa banget. Paket Untung dirancang untuk bisnis dengan volume transaksi tinggi, dukungan banyak pengguna, dan integrasi multi-platform.",
  },
];

export const stats = [
  {
    icon: "😭",
    title: "Tanpa hemat.ai",
    value: "Boncos 10 Juta",
    description: "pengeluaran tak terkontrol",
    palette: "from-rose-100 to-rose-200",
  },
  {
    icon: "💰",
    title: "Bulan Ini",
    value: "Hemat 5 Juta",
    description: "dari pengeluaran bulanan",
    palette: "from-emerald-100 to-emerald-200",
  },
  {
    icon: "💸",
    title: "Tanpa hemat.ai",
    value: "Boncos 5 Juta",
    description: "pengeluaran tak terkontrol",
    palette: "from-violet-100 to-violet-200",
  },
  {
    icon: "🎯",
    title: "Target",
    value: "Hemat 3 Juta",
    description: "tercapai! 🎉",
    palette: "from-amber-100 to-amber-200",
  },
];
