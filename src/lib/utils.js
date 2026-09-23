export function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function formatDateTime(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) + ' WIB';
}

export const JERSEY_SIZES = [
  { size: 'Anak S', category: 'Anak', chest: '72 cm', length: '48 cm', total: 100, desc: 'Usia 4–6 Thn' },
  { size: 'Anak M', category: 'Anak', chest: '80 cm', length: '54 cm', total: 150, desc: 'Usia 7–9 Thn' },
  { size: 'Anak L', category: 'Anak', chest: '88 cm', length: '60 cm', total: 150, desc: 'Usia 10–12 Thn' },
  { size: 'S', category: 'Dewasa', chest: '96 cm', length: '66 cm', total: 200, desc: 'Dewasa S' },
  { size: 'M', category: 'Dewasa', chest: '100 cm', length: '68 cm', total: 400, desc: 'Dewasa M' },
  { size: 'L', category: 'Dewasa', chest: '104 cm', length: '70 cm', total: 500, desc: 'Dewasa L' },
  { size: 'XL', category: 'Dewasa', chest: '108 cm', length: '72 cm', total: 350, desc: 'Dewasa XL' },
  { size: 'XXL', category: 'Dewasa', chest: '114 cm', length: '74 cm', total: 100, desc: 'Dewasa XXL' },
  { size: 'XXXL', category: 'Dewasa', chest: '120 cm', length: '76 cm', total: 50, desc: 'Dewasa XXXL' }
];

export const ROUTE_CHECKPOINTS = [
  { id: 1, name: 'Garis Start & Panggung Utama', loc: 'DOME Bale Rame Soreang', type: 'start', desc: 'Flag-off pukul 06.00 WIB. Area drop off, panggung tausiyah, dan tenda medis utama.' },
  { id: 2, name: 'Simpang Jl. Al Fathu & Samsat (Km 1.0)', loc: 'Kawasan Perkantoran Soreang', type: 'info', desc: 'Petugas Dishub mengawal arus pejalan kaki menuju jalur lingkar asri.' },
  { id: 3, name: 'Water Station 1 (Km 2.0)', loc: 'Depan Kawasan Pendidikan Yadika Soreang', type: 'water', desc: 'Penyediaan air mineral higienis, isotonic, dan tim marshal pengarah peserta.' },
  { id: 4, name: 'Cheering Zone & Pos Medis 1 (Km 3.0)', loc: 'Kawasan Simpang Gading Tutuka', type: 'cheer', desc: 'Musik perkusi tradisional rampak kendang & tim relawan medis BAZNAS Tanggap Bencana.' },
  { id: 5, name: 'Water Station 2 (Km 4.0)', loc: 'Jalur Menuju Soreang Centre', type: 'water', desc: 'Distribusi buah semangka segar, refreshment air minum, dan spons pendingin.' },
  { id: 6, name: 'Lajur Steril Putaran Balik (Km 4.5)', loc: 'Kawasan Jl. Raya Soreang', type: 'turn', desc: 'Pengawalan lantas Polres Bandung, lajur pejalan kaki khusus steril dari kendaraan.' },
  { id: 7, name: 'Pos Medis 2 & Titik Foto', loc: 'Gerbang Masuk Kawasan DOME Bale Rame', type: 'photo', desc: 'Booth foto resmi dengan fotografer panitia & ambulans siaga.' },
  { id: 8, name: 'Garis Finish & Panggung Utama', loc: 'DOME Bale Rame Soreang', type: 'finish', desc: 'Pengambilan refreshment, sarapan khas UMKM binaan BAZNAS, dan pengundian Doorprize Hadiah Utama Umroh serta puluhan hadiah menarik lainnya.' }
];
