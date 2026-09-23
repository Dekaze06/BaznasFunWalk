export const prerender = false;

import { getParticipantById, updateParticipant } from '../../../lib/server-db.js';

// GET: Cari peserta berdasarkan ID, NIK, atau WhatsApp
export async function GET({ params }) {
  try {
    const { id } = params;
    const participant = getParticipantById(id);

    if (!participant) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Data peserta tidak ditemukan pada database server.'
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: participant
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// PATCH: Update data peserta atau status pembayaran
export async function PATCH({ params, request }) {
  try {
    const { id } = params;
    const updates = await request.json();

    const updated = updateParticipant(id, updates);

    if (!updated) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Peserta dengan ID tersebut tidak ditemukan.'
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Data peserta berhasil diperbarui!',
        data: updated
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
