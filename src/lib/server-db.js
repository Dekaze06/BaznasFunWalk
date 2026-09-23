import fs from 'node:fs';
import path from 'node:path';
import { JERSEY_SIZES } from './utils.js';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const PARTICIPANTS_FILE = path.join(DATA_DIR, 'participants.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

// Initial seed data jika database masih baru
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
    paketNama: 'Charity Pack 5K (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'L',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'Midtrans (QRIS)',
    status: 'PAID',
    waktuDaftar: '2026-09-16T08:12:00.000Z',
    waktuBayar: '2026-09-16T08:15:30.000Z',
    racepackClaimed: true,
    claimedAt: '2026-10-08T10:14:00.000Z',
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
    metodeBayar: 'Midtrans (BSI Virtual Account)',
    status: 'PAID',
    waktuDaftar: '2026-09-16T08:45:00.000Z',
    waktuBayar: '2026-09-16T09:00:00.000Z',
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
    paketNama: 'Charity Pack 5K (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'XL',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'Midtrans (BSI Virtual Account)',
    status: 'PAID',
    waktuDaftar: '2026-09-16T09:30:00.000Z',
    waktuBayar: '2026-09-16T09:32:00.000Z',
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
    metodeBayar: 'Midtrans (QRIS)',
    status: 'PENDING',
    waktuDaftar: '2026-09-16T10:15:00.000Z',
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
    paketNama: 'Charity Pack 5K (Termasuk Donasi Rp 50.000)',
    ukuranJersey: 'XXL',
    nominalRegistrasi: 50000,
    nominalDonasi: 50000,
    totalBayar: 100000,
    metodeBayar: 'Midtrans (QRIS)',
    status: 'PAID',
    waktuDaftar: '2026-09-16T10:40:00.000Z',
    waktuBayar: '2026-09-16T10:42:00.000Z',
    racepackClaimed: true,
    claimedAt: '2026-10-08T11:20:00.000Z',
    claimedBy: 'Panitia Meja 2'
  }
];

const DEFAULT_SETTINGS = {
  statusEvent: 'DIBUKA',
  tierHarga: 'EARLY_BIRD',
  hargaReguler: 50000,
  hargaCharity: 100000,
  targetPeserta: 1000,
  rekeningBank: 'BSI Virtual Account via Midtrans Payment Gateway (Otomatis 24 Jam)'
};

// Pastikan direktori data/ tersedia
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Baca data peserta dari file
export function readParticipantsFromFile() {
  ensureDataDir();
  if (!fs.existsSync(PARTICIPANTS_FILE)) {
    fs.writeFileSync(PARTICIPANTS_FILE, JSON.stringify(SEED_PARTICIPANTS, null, 2), 'utf-8');
    return SEED_PARTICIPANTS;
  }

  try {
    const raw = fs.readFileSync(PARTICIPANTS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('[Server DB Error] Gagal membaca data peserta:', error);
    return SEED_PARTICIPANTS;
  }
}

// Tulis data peserta ke file secara aman
export function writeParticipantsToFile(participants) {
  ensureDataDir();
  try {
    const jsonStr = JSON.stringify(participants, null, 2);
    fs.writeFileSync(PARTICIPANTS_FILE, jsonStr, 'utf-8');
    return true;
  } catch (error) {
    console.error('[Server DB Error] Gagal menyimpan data peserta:', error);
    return false;
  }
}

// Baca konfigurasi settings
export function readSettingsFromFile() {
  ensureDataDir();
  if (!fs.existsSync(SETTINGS_FILE)) {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2), 'utf-8');
    return DEFAULT_SETTINGS;
  }

  try {
    const raw = fs.readFileSync(SETTINGS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    return DEFAULT_SETTINGS;
  }
}

// Simpan konfigurasi settings
export function writeSettingsToFile(newSettings) {
  ensureDataDir();
  try {
    const current = readSettingsFromFile();
    const updated = { ...current, ...newSettings };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (error) {
    console.error('[Server DB Error] Gagal menyimpan settings:', error);
    return DEFAULT_SETTINGS;
  }
}

// -------------------------------------------------------------
// CRUD Operations untuk REST API
// -------------------------------------------------------------

export function getAllParticipants(filters = {}) {
  let list = readParticipantsFromFile();

  if (filters.search) {
    const q = String(filters.search).toLowerCase().trim();
    list = list.filter(p =>
      (p.nama && p.nama.toLowerCase().includes(q)) ||
      (p.id && p.id.toLowerCase().includes(q)) ||
      (p.nik && p.nik.includes(q)) ||
      (p.whatsapp && p.whatsapp.includes(q)) ||
      (p.email && p.email.toLowerCase().includes(q))
    );
  }

  if (filters.status && filters.status !== 'SEMUA') {
    list = list.filter(p => p.status === filters.status);
  }

  if (filters.paket && filters.paket !== 'SEMUA') {
    list = list.filter(p => p.paket === filters.paket);
  }

  if (filters.racepackClaimed !== undefined) {
    const claimed = filters.racepackClaimed === 'true' || filters.racepackClaimed === true;
    list = list.filter(p => p.racepackClaimed === claimed);
  }

  return list;
}

export function getParticipantById(query) {
  if (!query) return null;
  const list = readParticipantsFromFile();
  const q = String(query).trim().toLowerCase();

  return list.find(p =>
    (p.id && p.id.toLowerCase() === q) ||
    (p.nik && p.nik.trim() === query.trim()) ||
    (p.whatsapp && p.whatsapp.replace(/\D/g, '') === query.replace(/\D/g, ''))
  ) || null;
}

export function createParticipant(data) {
  const list = readParticipantsFromFile();

  // Cek duplikasi ID
  const existing = list.find(p => p.id === data.id);
  if (existing) {
    // Jika sudah ada (misal inisiasi transaksi ulang), update datanya
    return updateParticipant(data.id, data);
  }

  const newRecord = {
    ...data,
    waktuDaftar: data.waktuDaftar || new Date().toISOString(),
    status: data.status || 'PENDING',
    racepackClaimed: Boolean(data.racepackClaimed),
    claimedAt: data.claimedAt || null,
    claimedBy: data.claimedBy || null
  };

  list.unshift(newRecord);
  writeParticipantsToFile(list);
  return newRecord;
}

export function updateParticipant(id, updates) {
  const list = readParticipantsFromFile();
  const index = list.findIndex(p => p.id.toLowerCase() === String(id).toLowerCase());

  if (index === -1) {
    return null;
  }

  const current = list[index];
  const updated = {
    ...current,
    ...updates,
    id: current.id // ID tidak boleh berubah
  };

  if (updates.status === 'PAID' && !updated.waktuBayar) {
    updated.waktuBayar = new Date().toISOString();
  }

  list[index] = updated;
  writeParticipantsToFile(list);
  return updated;
}

export function updateParticipantStatus(id, newStatus, paymentMethod, midtransOrderId) {
  const updates = { status: newStatus };
  if (paymentMethod) updates.metodeBayar = paymentMethod;
  if (midtransOrderId) updates.midtransOrderId = midtransOrderId;
  if (newStatus === 'PAID') updates.waktuBayar = new Date().toISOString();

  return updateParticipant(id, updates);
}

export function claimRacepack(id, adminName = 'Petugas Scanner') {
  const list = readParticipantsFromFile();
  const index = list.findIndex(p => p.id.toLowerCase() === String(id).toLowerCase());

  if (index === -1) {
    return { success: false, message: 'Data peserta tidak ditemukan pada database server!' };
  }

  const participant = list[index];

  if (participant.status !== 'PAID') {
    return {
      success: false,
      message: `Status peserta masih ${participant.status}. Hanya peserta berstatus LUNAS (PAID) yang dapat mengambil race pack!`,
      data: participant
    };
  }

  if (participant.racepackClaimed) {
    return {
      success: false,
      message: `Race pack sudah pernah diambil pada ${new Date(participant.claimedAt).toLocaleString('id-ID')} oleh ${participant.claimedBy || 'Petugas'}!`,
      data: participant
    };
  }

  participant.racepackClaimed = true;
  participant.claimedAt = new Date().toISOString();
  participant.claimedBy = adminName;

  list[index] = participant;
  writeParticipantsToFile(list);

  return {
    success: true,
    message: 'Verifikasi sukses! Race pack, Jersey, dan Nomor BIB resmi diserahkan ke peserta.',
    data: participant
  };
}

export function getDashboardStats() {
  const list = readParticipantsFromFile();
  const activeParticipants = list.filter(p => p.status !== 'CANCELLED');
  const paidParticipants = list.filter(p => p.status === 'PAID');
  const pendingParticipants = list.filter(p => p.status === 'PENDING');
  const claimedCount = list.filter(p => p.racepackClaimed).length;

  const totalDana = paidParticipants.reduce((sum, p) => sum + (Number(p.totalBayar) || 0), 0);
  const totalDonasi = paidParticipants.reduce((sum, p) => sum + (Number(p.nominalDonasi) || 0), 0);
  const totalRegistrasi = paidParticipants.reduce((sum, p) => sum + (Number(p.nominalRegistrasi) || 0), 0);

  const stockSummary = JERSEY_SIZES.map(item => {
    const used = activeParticipants.filter(p => p.ukuranJersey === item.size).length;
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

  return {
    totalPeserta: list.length,
    activeCount: activeParticipants.length,
    paidCount: paidParticipants.length,
    pendingCount: pendingParticipants.length,
    claimedCount,
    unclaimedPaidCount: paidParticipants.length - claimedCount,
    totalDana,
    totalDonasi,
    totalRegistrasi,
    stockSummary
  };
}
