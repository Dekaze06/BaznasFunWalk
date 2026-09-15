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
  { size: 'S', chest: '96 cm', length: '66 cm', total: 80, desc: 'Ramping' },
  { size: 'M', chest: '100 cm', length: '68 cm', total: 220, desc: 'Standar' },
  { size: 'L', chest: '104 cm', length: '70 cm', total: 280, desc: 'Sedang' },
  { size: 'XL', chest: '108 cm', length: '72 cm', total: 220, desc: 'Besar' },
  { size: 'XXL', chest: '114 cm', length: '74 cm', total: 130, desc: 'Ekstra Besar' },
  { size: 'XXXL', chest: '120 cm', length: '76 cm', total: 70, desc: 'Super Besar' }
];

export const ROUTE_CHECKPOINTS = [
  { id: 1, name: 'Garis Start & Panggung Utama', loc: 'Depan Gedung Budaya Sabilulungan / Jl. Al Fathu', type: 'start', desc: 'Flag-off pukul 06.00 WIB. Area drop off, panggung tausiyah, dan tenda medis utama.' },
  { id: 2, name: 'Pertigaan Kantor Samsat & RSUD', loc: 'Jl. Raya Soreang Km 1.2', type: 'info', desc: 'Petugas Dishub mengawal arus putaran arah menuju kawasan timur.' },
  { id: 3, name: 'Water Station 1 (Km 2.0)', loc: 'Depan SMA Yadika Soreang', type: 'water', desc: 'Penyediaan air mineral higienis, isotonic, dan tim marshal pengarah peserta.' },
  { id: 4, name: 'Cheering Zone & Pos Medis 1', loc: 'Kawasan Simpang Gading Tutuka', type: 'cheer', desc: 'Musik perkusi tradisional rampak kendang & tim relawan medis BAZNAS Tanggap Bencana.' },
  { id: 5, name: 'Water Station 2 (Km 3.8)', loc: 'Dekat Pasar Ikan Modern Soreang', type: 'water', desc: 'Distribusi buah semangka segar, refreshment air minum, dan spons pendingin.' },
  { id: 6, name: 'Putaran Balik Bundaran Warung Lobak', loc: 'Jl. Raya Soreang - Banjaran', type: 'turn', desc: 'Pengawalan lantas Polres Bandung, lajur pejalan kaki khusus steril dari kendaraan.' },
  { id: 7, name: 'Pos Medis 2 & Titik Foto', loc: 'Kawasan Sarajiwa Beach Land Soreang', type: 'photo', desc: 'Booth foto resmi dengan fotografer panitia & ambulans siaga.' },
  { id: 8, name: 'Garis Finish & Area Doorprize', loc: 'Plaza Gedung Budaya Sabilulungan', type: 'finish', desc: 'Pengambilan medali/refreshment, sarapan khas UMKM binaan BAZNAS, dan pengundian doorprize umroh.' }
];
