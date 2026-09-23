export const prerender = false;

import { getAllParticipants, createParticipant } from '../../../lib/server-db.js';

// GET: Ambil daftar peserta (dengan filter query param: search, status, paket, racepackClaimed)
export async function GET({ url }) {
  try {
    const search = url.searchParams.get('search') || url.searchParams.get('q') || '';
    const status = url.searchParams.get('status') || '';
    const paket = url.searchParams.get('paket') || '';
    const racepackClaimed = url.searchParams.get('racepackClaimed');

    const participants = getAllParticipants({
      search,
      status,
      paket,
      racepackClaimed: racepackClaimed !== null ? racepackClaimed : undefined
    });

    return new Response(
      JSON.stringify({
        success: true,
        count: participants.length,
        data: participants
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('[API /api/participants GET Error]', error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// POST: Daftarkan peserta baru ke server database
export async function POST({ request }) {
  try {
    const data = await request.json();

    if (!data.nama || !data.whatsapp || !data.email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Kolom Nama, WhatsApp, dan Email wajib diisi!'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate ID jika belum ada
    if (!data.id) {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      data.id = `BFW26-${randomNum}`;
    }

    const saved = createParticipant(data);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Peserta berhasil disimpan di database server!',
        data: saved
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('[API /api/participants POST Error]', error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
