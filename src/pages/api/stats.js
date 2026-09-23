export const prerender = false;

import { getDashboardStats } from '../../lib/server-db.js';

// GET: Ambil statistik dashboard terpusat dari server
export async function GET() {
  try {
    const stats = getDashboardStats();

    return new Response(
      JSON.stringify({
        success: true,
        data: stats
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
