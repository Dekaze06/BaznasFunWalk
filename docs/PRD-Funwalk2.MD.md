# Product Requirements Document (PRD) — Versi 2.1
## Website BAZNAS FUN WALK 2026
### "Healthy and Charity" — BAZNAS Kabupaten Bandung

| Item | Keterangan |
|---|---|
| **Nama Event** | BAZNAS FUN WALK 2026 |
| **Tagline** | Healthy and Charity |
| **Hari-H** | **Minggu, 11 Oktober 2026** — TERKUNCI |
| **Penyelenggara** | BAZNAS Kabupaten Bandung |
| **Versi Dokumen** | 2.1 — tanggal & harga terkonfirmasi, sprint dipetakan ke kalender |
| **Tanggal dokumen** | 16 September 2026 |
| **Menggantikan** | PRD v2.0 |
| **Status** | Siap eksekusi. Dua item masih menahan pekerjaan — lihat Bagian 0.2 |

---

# BAGIAN 0 — RINGKASAN KEPUTUSAN

Dua hal yang sebelumnya berstatus `[TBD]` sekarang terkunci:

| Sebelumnya | Sekarang |
|---|---|
| Tanggal event `[TBD]`, dua skenario ditawarkan | **Hari-H: Minggu, 11 Oktober 2026.** Skenario A (geser tanggal) tidak diambil. Dokumen ini sepenuhnya beroperasi dalam mode Skenario B — rencana kerja terkompresi |
| Struktur harga Rp 150.000 belum jelas | **Terkonfirmasi: Charity Pack** — seluruh benefit Reguler + donasi Rp 50.000 tercatat atas nama peserta |

### 0.1 Realitas kalender per hari ini (16 September 2026)

```
16 Sep ─────────────────┬────────── 30 Sep ────┬──── 5 Okt ──┬─ 8–10 Okt ─┬─ 11 Okt
   HARI INI              │      EARLY BIRD        │  NORMAL     │    RPC      │  HARI-H
   Mulai kerja            │      Rp 50.000         │  Rp 100.000 │             │
                          │      berakhir           │  tutup      │             │
   ← 25 hari total sampai hari-H →
   ← 14 hari sampai early bird tutup →
```

| Milestone | Tanggal | Hari | H-minus |
|---|---|---|---|
| Hari ini — mulai kerja | 16 September 2026 | Rabu | H-25 |
| **Target website live** | **22 September 2026** | Selasa | H-19 |
| Early bird berakhir | 30 September 2026 | Rabu | H-11 |
| Harga normal berlaku | 1 Oktober 2026 | Kamis | H-10 |
| Rekomendasi tutup pendaftaran | 5 Oktober 2026 | Senin | H-6 |
| Rekomendasi mulai RPC | 8 Oktober 2026 | Kamis | H-3 |
| Rekomendasi akhir RPC | 10 Oktober 2026 | Sabtu | H-1 |
| **Hari-H** | **11 Oktober 2026** | **Minggu** | H-0 |

**Baca angka ini dengan jujur:** jika website live tepat waktu di 22 September, masa promosi early bird yang tersisa hanya **8 hari**. Ini bukan masalah teknis — ini masalah jumlah waktu yang tersedia untuk menjangkau 1.000 orang. Prioritaskan kanal yang paling cepat menjangkau massa (blast WA komunitas, kolektif OPD/sekolah, story Instagram berantai) di atas kanal yang butuh waktu membangun momentum (iklan berbayar, konten organik bertahap).

### 0.2 Yang masih menahan pekerjaan hari ini

Semua pertanyaan tanggal & harga di v2.0 sudah terjawab. Yang tersisa dan **paling mendesak**:

| # | Yang ditahan | Batas realistis |
|---|---|---|
| 1 | **Pemesanan jersey ke vendor** dengan alokasi ukuran tetap | **Hari ini juga.** Produksi 10–14 hari; dipesan hari ini selesai 26–30 Sept, pas untuk RPC 8 Okt. Mundur 3 hari dari sekarang → RPC terancam |
| 2 | **Pengajuan akun Midtrans** | Hari ini. Verifikasi 3–10 hari kerja, dan Midtrans mensyaratkan website aktif — naikkan halaman *coming soon* hari ini juga |
| 3 | Domain/subdomain resmi | 1–2 hari — menahan setup email & pendaftaran Midtrans |
| 4 | Size chart jersey (cm) dari vendor | 1–2 hari — menahan form pendaftaran |
| 5 | Rekening penampung atas nama lembaga | 1–2 hari — menahan jalur transfer manual |
| 6 | Koordinasi Polres/Dishub untuk rute (melewati Jl. Raya Soreang–Banjaran) | Sebelum tanggal & rute dipublikasikan secara luas |

Rincian lengkap ada di Bagian 10.

---

## 1. Konteks Event (Terkonfirmasi Penuh)

| Aspek | Nilai |
|---|---|
| Nama | BAZNAS FUN WALK 2026 |
| Tagline | Healthy and Charity |
| Aktivitas | Jalan sehat 5K, non-kompetitif, tanpa pencatatan waktu |
| Lokasi | Kawasan Soreang, Kabupaten Bandung |
| **Tanggal** | **Minggu, 11 Oktober 2026** |
| Jam mulai | `[TBD]` — sarankan 06.00 WIB, kumpul 05.30 |
| Kuota | 1.000 peserta (dibatasi produksi jersey, bukan keputusan sepihak) |

---

## 2. Kategori, Harga & Kuota — FINAL

### 2.1 Struktur harga (terkunci)

| Paket | Early Bird (s.d. 30 Sep) | Normal (mulai 1 Okt) | Benefit |
|---|---|---|---|
| **Reguler** | Rp 50.000 | Rp 100.000 | Jersey, tote bag, wristband, nomor peserta & e-ticket, refreshment, ikut doorprize |
| **Charity Pack** | Rp 150.000 (berlaku sepanjang periode, tidak ikut skema early bird) | Rp 150.000 | Semua benefit Reguler **+ donasi Rp 50.000 tercatat atas nama peserta** + nama tercantum di halaman donatur + bukti setor digital |

**Catatan penting yang mengikat desain sistem:**
- Charity Pack **tidak naik harga** setelah early bird berakhir — nilainya sudah termasuk komponen donasi tetap, bukan diskon waktu. Ini harus jelas di UI supaya peserta tidak menunggu "harga turun" yang tidak akan terjadi.
- Donasi Rp 50.000 di dalam Charity Pack **dicatat terpisah** dari biaya penyelenggaraan dalam pembukuan (lihat model data 2.4) — ini menyangkut kepatuhan akuntansi ZIS, bukan sekadar UI.
- Biaya layanan pembayaran **ditanggung panitia** (terkonfirmasi sebelumnya) — nominal yang tertera adalah nominal final.

### 2.2 Skema waktu harga

```
Early Bird : Rp 50.000   → 16 (atau tanggal live) s.d. 30 September 2026, 23.59 WIB
Normal     : Rp 100.000  → 1 Oktober 2026 s.d. penutupan
Charity    : Rp 150.000  → berlaku sepanjang periode, tidak berubah
Penutupan  : direkomendasikan 5 Oktober 2026 (H-6) — [TBD, perlu konfirmasi panitia]
```
Perpindahan tier **otomatis berbasis waktu server** (Asia/Jakarta). Countdown yang ditampilkan di hero mengarah ke **30 September 23.59 WIB**, karena itu titik konversi tertinggi mengingat sisa waktu yang pendek.

### 2.3 Kuota per ukuran jersey (tidak berubah dari v2.0, dikonfirmasi ulang sebagai P0)

| Ukuran | % | Jumlah (dari 1.000) |
|---|---|---|
| S | 8% | 80 |
| M | 22% | 220 |
| L | 28% | 280 |
| XL | 22% | 220 |
| XXL | 13% | 130 |
| XXXL | 7% | 70 |

Form pendaftaran **wajib** menampilkan stok tersisa per ukuran dan menonaktifkan ukuran yang habis. Ini sudah didemonstrasikan pada prototipe landing page yang diserahkan sebelumnya.

### 2.4 Perubahan model data (pemisahan donasi dalam Charity Pack)

```
payments
  id, registration_id, gateway, gateway_ref_id, metode,
  nominal_registrasi   -- Rp 100.000 atau Rp 50.000 (EB), porsi biaya event
  nominal_donasi        -- Rp 0 (Reguler) atau Rp 50.000 (Charity Pack)
  total, status, expired_at, paid_at, raw_payload_json

donations  -- terisi otomatis saat Charity Pack terbayar
  id, registration_id, nominal (=50000), sumber ('charity_pack'),
  tampil_di_halaman_donatur (bool, default true, peserta bisa opt-out), created_at
```
Pemisahan ini memungkinkan laporan keuangan menunjukkan dua angka berbeda ke pimpinan: **total biaya penyelenggaraan terkumpul** vs **total dana ZIS terkumpul** — dua hal yang secara akuntansi tidak boleh dicampur di lembaga zakat.

---

## 3. Rencana Sprint — Dipetakan ke Kalender Riil

Menggantikan tabel "Hari 1–7" generik di v2.0 dengan tanggal kalender sesungguhnya, termasuk akhir pekan.

| Tanggal | Hari | Developer | Panitia (paralel, sama kritisnya) |
|---|---|---|---|
| **Rab, 16 Sep** *(hari ini)* | H-25 | Setup repo, hosting, domain sementara, SSL, Cloudflare. Naikkan halaman **coming soon** | **Pesan jersey ke vendor hari ini.** Ajukan Midtrans hari ini. Putuskan domain final |
| Kam, 17 Sep | H-24 | Skema database (termasuk stok per ukuran & pemisahan donasi), setup email + SPF/DKIM/DMARC | Kirim size chart, rekening lembaga, peta rute final, logo SVG |
| Jum, 18 Sep | H-23 | Landing page lengkap dengan aset & palet asli (acuan: prototipe yang sudah diserahkan) | Finalisasi FAQ, benefit yang dipastikan, draf S&K/Privasi/Waiver |
| Sab–Min, 19–20 Sep | H-22/21 | *Buffer* — lanjutkan form pendaftaran bila developer tersedia akhir pekan | Siapkan materi promosi Instagram & daftar kontak OPD/sekolah untuk jalur kolektif |
| Sen, 21 Sep | H-20 | Form pendaftaran + validasi + stok ukuran + tier harga + jalur transfer manual | Latihan dashboard admin (minimal 2 orang) |
| Sel, 22 Sep | H-19 | Dashboard admin (Filament): verifikasi, export, impor Excel. E-ticket PDF + QR. Notifikasi WA/email | **Target LIVE.** UAT: panitia mendaftar sungguhan dari HP masing-masing |
| Rab, 23 Sep | H-18 | Perbaikan temuan UAT. Scanner QR RPC. Checklist go-live | Mulai promosi masif — **8 hari early bird tersisa** |
| Kam 24 Sep – Rab 30 Sep | H-17 s.d. H-11 | Monitoring harian, aktifkan Midtrans via flag begitu akun disetujui, pantau stok ukuran per hari | Promosi intensif, jalur kolektif OPD/sekolah diprioritaskan (efek pengali tercepat) |
| Kam, 1 Okt | H-10 | — | Harga otomatis berpindah ke Normal Rp 100.000 |
| Sen, 5 Okt *(rekomendasi)* | H-6 | Tutup pendaftaran, mulai rekap final untuk cetak race pack | Konfirmasi tanggal tutup final |
| Kam–Sab, 8–10 Okt | H-3 s.d H-1 | Siaga teknis untuk scanner QR RPC | Pengambilan race pack |
| **Min, 11 Okt** | **H-0** | Siaga teknis hari-H | **Hari-H** |

**Jalur kritis tetap bukan koding.** Baris berwarna di atas (jersey, Midtrans, domain, size chart, rekening) semua jatuh di H-25 dan H-24 — dua hari pertama. Jika salah satu meleset lebih dari 2 hari, seluruh jadwal di bawahnya bergeser satu-satu, karena RPC dan hari-H tidak bisa digeser lagi.

---

## 4. Perubahan Copywriting (Tanggal Final)

**Hero**
> **BAZNAS FUN WALK 2026**
> *Healthy and Charity*
> Jalan sehat 5K · Kawasan Soreang, Kabupaten Bandung
> **Minggu, 11 Oktober 2026**
>
> **[ DAFTAR SEKARANG ]**
> 🎉 Early Bird Rp 50.000 — berakhir 30 September

**Timeline publik**
> - **Sekarang – 30 September:** Pendaftaran Early Bird, Rp 50.000
> - **1 Oktober – `[tanggal tutup]`:** Pendaftaran Normal, Rp 100.000
> - **`[8–10 Oktober]`:** Pengambilan race pack
> - **11 Oktober:** Hari-H — kumpul 05.30, mulai 06.00 WIB

Bagian FAQ, blok anti-penipuan, dan blok kolektif di v2.0 **tidak berubah** — sudah konsisten dengan tanggal ini.

---

## 5. Pertanyaan Terbuka — Diperbarui

Pertanyaan soal tanggal event dan struktur harga di v2.0 **sudah terjawab dan dihapus dari daftar**. Sisa yang menahan pekerjaan:

| Prioritas | Pertanyaan | Menahan apa | Batas |
|---|---|---|---|
| 🔴 Hari ini | Konfirmasi pemesanan jersey ke vendor sudah jalan? | RPC 8 Oktober | 16 Sep |
| 🔴 Hari ini | PIC & dokumen pengajuan Midtrans | Pembayaran online | 16 Sep |
| 🟠 1–2 hari | Domain/subdomain final | Email, Midtrans, materi cetak | 17–18 Sep |
| 🟠 1–2 hari | Size chart jersey (cm) | Form pendaftaran | 17–18 Sep |
| 🟠 1–2 hari | Rekening penampung atas nama lembaga | Jalur transfer manual | 17–18 Sep |
| 🟠 1–2 hari | Jam mulai pasti (06.00 WIB?) | Copywriting hero & jadwal | 18 Sep |
| 🟡 3–5 hari | Tanggal pasti tutup pendaftaran (rekomendasi 5 Okt) | S&K, rekap produksi | 21 Sep |
| 🟡 3–5 hari | Status izin Polres/Dishub untuk rute | Boleh/tidaknya publikasi luas | 21 Sep |
| 🟡 3–5 hari | Lokasi & jadwal pasti RPC (rekomendasi 8–10 Okt) | E-ticket, notifikasi WA | 23 Sep |
| 🟡 3–5 hari | Isi race pack final — ada BIB? ada medali? | Copywriting benefit | 21 Sep |
| 🟢 Sebelum live | PIC teknis pasca-event | Serah terima & pemeliharaan | 22 Sep |
| 🟢 Fase 2 | Angka alokasi dana resmi dari pimpinan | Halaman transparansi | Pasca-event |

---

## 6. Yang Tidak Berubah dari v2.0

Untuk menghindari duplikasi, bagian berikut di PRD v2.0 tetap berlaku sepenuhnya dan tidak diulang di sini:
- Ruang lingkup Rilis 1 & yang dipotong (arsitektur dua jalur pembayaran, impor Excel kolektif, dsb.)
- Sistem desain — palet warna, tipografi, aturan kontras
- Kebijakan transparansi dana (narasi kualitatif publik + halaman lengkap di balik feature flag)
- Kebijakan WhatsApp, domain, dan stack teknis (Laravel + Filament)
- Daftar risiko mode darurat (N1–N9)
- Kebijakan kategori Virtual (Fase 2)

Dokumen v2.1 ini adalah **lapisan pembaruan di atas v2.0** — gunakan keduanya bersama: v2.0 untuk arsitektur & kebijakan, v2.1 untuk tanggal, harga, dan jadwal kerja yang mengikat.

---

*Akhir dokumen v2.1. Dua item di Bagian 0.2 nomor 1 dan 2 adalah tindakan yang perlu dimulai hari ini, bukan setelah membaca dokumen ini sampai selesai.*
