# NovaTech Digital

Company profile demonstrasi untuk agensi teknologi fiktif NovaTech Digital. Website ini menampilkan layanan pembuatan website dan solusi digital dengan antarmuka modern, responsif, dan aksesibel.

Identitas visual menggunakan gradasi ungu-biru pada hero, latar putih pada bagian tentang, kartu layanan minimalis, dan footer gelap. Nama perusahaan, metrik, proyek, dan testimoni disajikan sebagai materi demonstrasi, bukan klaim bisnis nyata.

## Fitur

- Navigasi responsif dengan menu mobile, tautan bagian halaman, dan navbar sticky.
- Hero, tentang, visi-misi, angka ilustratif, layanan, portofolio demo, keunggulan, testimoni placeholder, kontak, dan footer.
- Ilustrasi SVG lokal buatan khusus untuk hero dan tiga contoh proyek; tidak memerlukan file gambar tambahan.
- Animasi masuk viewport yang menghormati preferensi `prefers-reduced-motion`.
- Validasi nama, email, subjek, dan pesan di sisi browser. Formulir **belum mengirim pesan** karena belum terhubung ke backend atau layanan formulir.
- Tombol WhatsApp, email, dan profil sosial berisi konfigurasi demonstrasi yang harus diganti sebelum publikasi.
- Meta description, favicon SVG, alt text, skip link, status formulir yang diumumkan teknologi bantu, dan kontrol keyboard dasar.

## Teknologi

- HTML5, CSS3, dan JavaScript.
- Bootstrap 5.3.3 untuk grid responsif.
- Bootstrap Icons 1.11.3.
- Google Fonts: DM Sans dan Manrope.

Bootstrap, Bootstrap Icons, dan font dimuat dari CDN; koneksi internet diperlukan untuk menampilkan dependensi tersebut. Tidak ada API key atau kredensial di dalam proyek.

## Struktur folder

```text
novatech-digital/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       ├── hero-dashboard.svg
│       ├── project-alur.svg
│       ├── project-kopi.svg
│       └── project-nusantara.svg
└── README.md
```

## Menjalankan secara lokal

1. Buka folder proyek.
2. Jalankan server statis lokal (disarankan) atau buka `index.html` langsung di browser.
3. Contoh menggunakan ekstensi **Live Server** di VS Code: klik kanan `index.html`, lalu pilih **Open with Live Server**.
4. Uji tautan navigasi, menu pada viewport mobile, tombol kembali ke atas, dan validasi formulir. Formulir tidak mengirim data.

## Konfigurasi sebelum publikasi

- Ganti `halo@novatech.digital` dengan alamat email yang benar.
- Ganti atribut `data-whatsapp-number` pada tautan WhatsApp dengan nomor berformat internasional tanpa tanda `+`, spasi, atau tanda baca.
- Ganti tautan Instagram, LinkedIn, dan Behance placeholder dengan profil resmi.
- Hubungkan formulir ke backend atau layanan formulir tepercaya sebelum menerima pengiriman. Tanpa integrasi, formulir hanya memvalidasi input di browser.
- Ganti konten demo dengan proyek dan testimoni yang memang telah mendapat izin untuk dipublikasikan. Angka pada bagian tentang adalah ilustrasi, bukan klaim bisnis.
- Periksa kembali judul, metadata, identitas, serta semua tautan dan kontak.

## Deployment ke GitHub Pages

1. Buat repository GitHub dan unggah seluruh isi folder proyek.
2. Di repository, buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch publikasi (misalnya `main`) dan folder `/ (root)`, lalu klik **Save**.
5. Setelah workflow selesai, buka URL GitHub Pages yang ditampilkan di bagian Pages.

Website ini statis dan tidak memerlukan proses build. Pastikan semua referensi file menggunakan path relatif seperti pada proyek agar aset tetap dimuat di GitHub Pages.
