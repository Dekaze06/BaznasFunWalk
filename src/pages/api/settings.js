export const prerender = false;

import { readSettingsFromFile, writeSettingsToFile } from '../../lib/server-db.js';

// GET: Ambil pengaturan event dari server
export async function GET() {
  try {
    const settings = readSettingsFromFile();
    return new Response(
      JSON.stringify({ success: true, data: settings }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// POST: Simpan pembaruan pengaturan event ke server
export async function POST({ request }) {
  try {
    const body = await request.json();
    const updated = writeSettingsToFile(body);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Pengaturan event di server berhasil disimpan!',
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
