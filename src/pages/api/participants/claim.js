export const prerender = false;

import { claimRacepack } from '../../../lib/server-db.js';

// POST: Verifikasi pengambilan race pack (Scanner)
export async function POST({ request }) {
  try {
    const { id, adminName } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Nomor ID registrasi / kode tiket wajib disertakan!'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = claimRacepack(id, adminName || 'Petugas Scanner Meja');

    return new Response(
      JSON.stringify(result),
      {
        status: result.success ? 200 : 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
