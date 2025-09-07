# 🚀 Portfolio
Portfolio website modern untuk IT professional yang dibangun dengan Astro dan Tailwind CSS.

## ✨ Fitur

- **🎨 Modern Design** - Dark theme dengan aksen biru yang elegan
- **📱 Responsive** - Mobile-first design yang works di semua device
- **⚡ Fast Performance** - Built with Astro untuk loading yang super cepat
- **🎭 Interactive** - Smooth animations dan hover effects
- **📧 Contact Form** - Form kontak yang functional
- **🔍 SEO Optimized** - Meta tags dan semantic HTML

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [TypeScript](https://www.typescriptlang.org/) - Type safety (opsional)

## 🏗️ Struktur Proyek

```
portfolio-astro/
├── public/
│   └── favicon.ico
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout utama (navbar, hero, footer)
│   ├── pages/
│   │   └── index.astro           # Halaman utama
│   └── styles/
│       └── global.css            # Global styles (opsional)
├── astro.config.mjs              # Konfigurasi Astro
├── tailwind.config.mjs           # Konfigurasi Tailwind
├── tsconfig.json                 # Konfigurasi TypeScript
└── package.json                  # Dependencies
```

## 🚀 Quick Start

### 1. Clone atau Download

Download semua file dan letakkan sesuai struktur folder di atas.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser Anda.

### 4. Build untuk Production

```bash
npm run build
```

## 🎨 Kustomisasi

### Mengubah Informasi Pribadi

1. **Layout.astro** - Edit navbar brand dan hero section
2. **index.astro** - Update semua sections dengan info pribadi Anda

### Mengubah Colors

Edit `tailwind.config.mjs` untuk mengubah color scheme:

```javascript
colors: {
  primary: {
    500: '#your-color', // Ubah warna utama
  }
}
```

### Menambah Sections

Buat components baru di `src/components/` dan import ke `index.astro`.

## 📱 Sections

- **Hero** - Introduction dengan typewriter effect
- **About** - Profil dan deskripsi singkat
- **Skills** - Teknologi dan keahlian
- **Projects** - Portfolio projects dengan preview
- **Contact** - Form kontak dan informasi kontak

## 🔧 Scripts Available

- `npm run dev` - Start development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build hasil
- `npm run check` - Check Astro dan TypeScript

## 📝 Customization Tips

1. **Images**: Ganti placeholder images dengan foto asli Anda
2. **Content**: Update semua text content dengan informasi Anda
3. **Links**: Ubah semua social media dan project links
4. **Colors**: Sesuaikan color scheme di Tailwind config
5. **Fonts**: Import Google Fonts atau custom fonts di Layout.astro

## 🌐 Deployment

Portfolio ini dapat di-deploy ke:

- [Vercel](https://vercel.com/) - `npm run build` kemudian upload dist folder
- [Netlify](https://netlify.com/) - Connect repository atau drag & drop
- [GitHub Pages](https://pages.github.com/) - Set output ke 'static' di astro.config.mjs

## 📄 License

MIT License - Bebas untuk digunakan dan dimodifikasi.

## 🤝 Contributing

Pull requests welcome! Untuk perubahan major, mohon open issue dulu.

---

**Happy coding!** 🚀