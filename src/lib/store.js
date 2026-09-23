// Store client-side state in localStorage with full CRUD and realistic seed data
import { JERSEY_SIZES } from './utils.js';

const STORAGE_KEY = 'baznas_funwalk_data_v2';
const SETTINGS_KEY = 'baznas_funwalk_settings_v2';

const SEED_PARTICIPANTS = [
  {
    id: 'BFW26-0001',
    nama: 'Ahmad Fauzi Ridwan',
    email: 'ahmad.fauzi@gmail.com',
    whatsapp: '081223456781',
    nik: '3204123456780001',
    gender: 'Laki-laki',
    alamat: 'Jl. Raya Soreang No. 45, Soreang, Kab. Bandung',
    golDarah: 'O',
    kontakDaruratNama: 'Siti Maryam (Istri)',
    kontakDaruratHp: '081298765432',
    paket: 'charity',
    paketNama: 'Charity Pack (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'L',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'QRIS',
    status: 'PAID', // PAID, PENDING, CANCELLED
    waktuDaftar: '2026-09-16T08:12:00',
    waktuBayar: '2026-09-16T08:15:30',
    racepackClaimed: true,
    claimedAt: '2026-10-08T10:14:00',
    claimedBy: 'Panitia Meja 1'
  },
  {
    id: 'BFW26-0002',
    nama: 'Dewi Lestari Kartika',
    email: 'dewi.lestari@gmail.com',
    whatsapp: '081345678902',
    nik: '3204123456780002',
    gender: 'Perempuan',
    alamat: 'Perum Gading Tutuka 2 Blok E1 No. 12, Soreang',
    golDarah: 'A',
    kontakDaruratNama: 'Budi Santoso (Suami)',
    kontakDaruratHp: '081399887766',
    paket: 'reguler',
    paketNama: 'Paket Reguler 5K Early Bird',
    ukuranJersey: 'M',
    nominalRegistrasi: 50000,
    nominalDonasi: 0,
    totalBayar: 50000,
    metodeBayar: 'Transfer Bank Mandiri',
    status: 'PAID',
    waktuDaftar: '2026-09-16T08:45:00',
    waktuBayar: '2026-09-16T09:00:00',
    racepackClaimed: false,
    claimedAt: null,
    claimedBy: null
  },
  {
    id: 'BFW26-0003',
    nama: 'Drs. H. Maman Suryaman, M.Si',
    email: 'maman.suryaman@bandungkab.go.id',
    whatsapp: '081122334455',
    nik: '3204123456780003',
    gender: 'Laki-laki',
    alamat: 'Komplek Pemkab Bandung Blok C No. 4, Soreang',
    golDarah: 'B',
    kontakDaruratNama: 'Neneng (Keluarga)',
    kontakDaruratHp: '081199887766',
    paket: 'charity',
    paketNama: 'Charity Pack (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'XL',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'BSI Virtual Account',
    status: 'PAID',
    waktuDaftar: '2026-09-16T09:30:00',
    waktuBayar: '2026-09-16T09:32:00',
    racepackClaimed: false,
    claimedAt: null,
    claimedBy: null
  },
  {
    id: 'BFW26-0004',
    nama: 'Rina Anggraeni',
    email: 'rina.anggraeni@gmail.com',
    whatsapp: '085712345678',
    nik: '3204123456780004',
    gender: 'Perempuan',
    alamat: 'Jl. Raya Katapang No. 88, Katapang',
    golDarah: 'AB',
    kontakDaruratNama: 'Andri (Adik)',
    kontakDaruratHp: '085799887766',
    paket: 'reguler',
    paketNama: 'Paket Reguler 5K Early Bird',
    ukuranJersey: 'S',
    nominalRegistrasi: 50000,
    nominalDonasi: 0,
    totalBayar: 50000,
    metodeBayar: 'Transfer Manual BCA',
    status: 'PENDING',
    waktuDaftar: '2026-09-16T10:15:00',
    waktuBayar: null,
    racepackClaimed: false,
    claimedAt: null,
    claimedBy: null
  },
  {
    id: 'BFW26-0005',
    nama: 'Bambang Trihatmodjo S.',
    email: 'bambang.tri@gmail.com',
    whatsapp: '081299334411',
    nik: '3204123456780005',
    gender: 'Laki-laki',
    alamat: 'Jl. Al-Fathu No. 20, Soreang',
    golDarah: 'O',
    kontakDaruratNama: 'Endang (Kakak)',
    kontakDaruratHp: '081299882233',
    paket: 'charity',
    paketNama: 'Charity Pack (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'XXL',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'QRIS',
    status: 'PAID',
    waktuDaftar: '2026-09-16T10:40:00',
    waktuBayar: '2026-09-16T10:42:00',
    racepackClaimed: true,
    claimedAt: '2026-10-08T11:20:00',
    claimedBy: 'Panitia Meja 2'
  },
  {
    id: 'BFW26-0006',
    nama: 'Farhan Maulana',
    email: 'farhan.m@gmail.com',
    whatsapp: '082123456789',
    nik: '3204123456780006',
    gender: 'Laki-laki',
    alamat: 'Banjaran Asri Regency Blok B3, Banjaran',
    golDarah: 'B',
    kontakDaruratNama: 'Ibu Euis',
    kontakDaruratHp: '082199887766',
    paket: 'reguler',
    paketNama: 'Paket Reguler 5K Early Bird',
    ukuranJersey: 'M',
    nominalRegistrasi: 50000,
    nominalDonasi: 0,
    totalBayar: 50000,
    metodeBayar: 'QRIS',
    status: 'PAID',
    waktuDaftar: '2026-09-16T11:05:00',
    waktuBayar: '2026-09-16T11:08:00',
    racepackClaimed: false,
    claimedAt: null,
    claimedBy: null
  },
  {
    id: 'BFW26-0007',
    nama: 'Hj. Nuraeni Syamsuddin',
    email: 'nuraeni.sy@gmail.com',
    whatsapp: '081322446688',
    nik: '3204123456780007',
    gender: 'Perempuan',
    alamat: 'Jl. Ciwidey Km 4, Pasirjambu',
    golDarah: 'O',
    kontakDaruratNama: 'H. Syamsuddin',
    kontakDaruratHp: '081311223344',
    paket: 'charity',
    paketNama: 'Charity Pack (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'L',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'BSI Virtual Account',
    status: 'PAID',
    waktuDaftar: '2026-09-16T11:30:00',
    waktuBayar: '2026-09-16T11:35:00',
    racepackClaimed: false,
    claimedAt: null,
    claimedBy: null
  },
  {
    id: 'BFW26-0008',
    nama: 'Gilang Ramadhan',
    email: 'gilang.ramadhan@gmail.com',
    whatsapp: '087812345678',
    nik: '3204123456780008',
    gender: 'Laki-laki',
    alamat: 'Jl. Kopo Sayati No. 112, Margahayu',
    golDarah: 'A',
    kontakDaruratNama: 'Faisal (Teman)',
    kontakDaruratHp: '087899887766',
    paket: 'reguler',
    paketNama: 'Paket Reguler 5K Early Bird',
    ukuranJersey: 'XXXL',
    nominalRegistrasi: 50000,
    nominalDonasi: 0,
    totalBayar: 50000,
    metodeBayar: 'Transfer Manual Mandiri',
    status: 'PENDING',
    waktuDaftar: '2026-09-16T12:10:00',
    waktuBayar: null,
    racepackClaimed: false,
    claimedAt: null,
    claimedBy: null
  }
];

let lastServerSync = 0;
const SYNC_INTERVAL = 10000; // 10 detik

// Ambil data peserta (sinkron dengan cache lokal & server)
export function getStore() {
  if (typeof window === 'undefined') return SEED_PARTICIPANTS;

  // Trigger background sync dengan server jika interval terpenuhi
  const now = Date.now();
  if (now - lastServerSync > SYNC_INTERVAL) {
    lastServerSync = now;
    fetchParticipantsFromServer().catch(() => {});
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PARTICIPANTS));
    // Tarik data resmi dari server di awal
    fetchParticipantsFromServer().catch(() => {});
    return SEED_PARTICIPANTS;
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    return SEED_PARTICIPANTS;
  }
}

// Fetch data terbaru dari backend server
export async function fetchParticipantsFromServer() {
  if (typeof window === 'undefined') return SEED_PARTICIPANTS;
  try {
    const res = await fetch('/api/participants');
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(json.data));
        window.dispatchEvent(new CustomEvent('baznas:store_updated', { detail: json.data }));
        return json.data;
      }
    }
  } catch (e) {
    // Mode offline / fallback ke local cache
  }
  return getStore();
}

// Cari satu peserta langsung dari server (atau fallback ke cache)
export async function fetchParticipantById(query) {
  if (!query) return null;
  try {
    const res = await fetch(`/api/participants/${encodeURIComponent(query)}`);
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data;
      }
    }
  } catch (e) {
    // fallback ke local
  }

  const localList = getStore();
  const q = String(query).trim().toLowerCase();
  return localList.find(p =>
    (p.id && p.id.toLowerCase() === q) ||
    (p.nik && p.nik.trim() === query.trim()) ||
    (p.whatsapp && p.whatsapp.replace(/\D/g, '') === query.replace(/\D/g, ''))
  ) || null;
}

// Simpan peserta baru ke cache lokal dan langsung kirim ke server backend
export function saveParticipant(data) {
  if (typeof window === 'undefined') return data;
  const list = getStore();
  
  // Hapus jika sudah ada ID yang sama lalu unshift
  const filtered = list.filter(p => p.id !== data.id);
  filtered.unshift(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

  // Simpan secara asinkron ke server backend
  fetch('/api/participants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).catch(err => console.warn('[Store] Gagal sync ke server backend:', err));

  return data;
}

// Update status peserta di server backend & cache lokal
export function updateParticipantStatus(id, newStatus) {
  if (typeof window === 'undefined') return;
  const list = getStore();
  const index = list.findIndex(p => p.id === id);
  if (index !== -1) {
    list[index].status = newStatus;
    if (newStatus === 'PAID' && !list[index].waktuBayar) {
      list[index].waktuBayar = new Date().toISOString();
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  // Sync ke server backend
  fetch(`/api/participants/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus })
  }).catch(err => console.warn('[Store] Gagal update status ke server backend:', err));
}

// Klaim racepack ke server backend
export function markClaimed(id, adminName = 'Petugas Scanner') {
  if (typeof window === 'undefined') return { success: false };
  const list = getStore();
  const index = list.findIndex(p => p.id === id);

  if (index !== -1) {
    if (list[index].racepackClaimed) {
      return { success: false, message: 'Race pack sudah pernah diambil sebelumnya!', data: list[index] };
    }
    list[index].racepackClaimed = true;
    list[index].claimedAt = new Date().toISOString();
    list[index].claimedBy = adminName;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

    // Kirim konfirmasi klaim ke server backend
    fetch('/api/participants/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, adminName })
    }).catch(err => console.warn('[Store] Gagal klaim racepack ke server:', err));

    return { success: true, message: 'Berhasil verifikasi pengambilan race pack!', data: list[index] };
  }
  return { success: false, message: 'Data peserta tidak ditemukan!' };
}

export function getStockSummary() {
  const participants = getStore();
  const paidOrPending = participants.filter(p => p.status !== 'CANCELLED');
  
  return JERSEY_SIZES.map(item => {
    const used = paidOrPending.filter(p => p.ukuranJersey === item.size).length;
    const remaining = Math.max(0, item.total - used);
    return {
      size: item.size,
      chest: item.chest,
      length: item.length,
      total: item.total,
      used,
      remaining,
      percent: Math.round((used / item.total) * 100)
    };
  });
}

export function getSettings() {
  const defaults = {
    statusEvent: 'DIBUKA',
    tierHarga: 'EARLY_BIRD',
    hargaReguler: 50000,
    hargaCharity: 100000,
    targetPeserta: 1000,
    rekeningBank: 'BSI Virtual Account via Midtrans Payment Gateway (Otomatis 24 Jam)'
  };

  if (typeof window === 'undefined') return defaults;

  const stored = localStorage.getItem(SETTINGS_KEY);
  if (!stored) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaults));
    // Ambil dari server
    fetch('/api/settings').then(r => r.json()).then(j => {
      if (j.success && j.data) localStorage.setItem(SETTINGS_KEY, JSON.stringify(j.data));
    }).catch(() => {});
    return defaults;
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    return defaults;
  }
}

export function saveSettings(newSettings) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));

  // Sync ke server
  fetch('/api/settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newSettings)
  }).catch(err => console.warn('[Store] Gagal simpan settings ke server:', err));
}
