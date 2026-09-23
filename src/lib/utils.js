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
  { id: 1, name: 'Pos 1: Start & Panggung Utama', loc: 'DOME Bale Rame Soreang', type: 'start', desc: 'Flag-off pukul 06.00 WIB. Area kumpul peserta, senam pemanasan bersama, dan panggung pembukaan.' },
  { id: 2, name: 'Pos 2 (KM 1): Jl. Raya Soreang', loc: 'Sebelum Gapura / Kawasan Samsat Soreang', type: 'water', desc: 'Pos hidrasi Water Station 1, tim medis lapangan siaga, dan pengawalan petugas Dishub.' },
  { id: 3, name: 'Pos 3 (KM 2): Jl. Raya Gading Tutuka', loc: 'Sebelum Kawasan Geo Dipa / Simpang RM Dadakan Sunda', type: 'cheer', desc: 'Pos hidrasi Water Station 2 & cheering zone di koridor asri dan sejuk.' },
  { id: 4, name: 'Pos 4 (KM 3 & Finish): DOME Bale Rame', loc: 'Koridor Jl. Tol Soroja menuju Finish DOME Bale Rame', type: 'finish', desc: 'Garis finish resmi, penukaran sarapan UMKM binaan BAZNAS, dan pengundian Doorprize Utama Umroh.' }
];
