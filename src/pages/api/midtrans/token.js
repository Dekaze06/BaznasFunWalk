export const prerender = false;

import { createMidtransTransaction, midtransConfig } from '../../../lib/midtrans.js';
import { createParticipant } from '../../../lib/server-db.js';

export async function POST({ request }) {
  try {
    const data = await request.json();

    const {
      id,
      nama,
      email,
      whatsapp,
      paket,
      paketNama,
      ukuranJersey,
      nominalRegistrasi,
      nominalDonasi,
      totalBayar,
      preferredPayment
    } = data;

    if (!id || !nama || !email || !whatsapp || !totalBayar) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Data registrasi tidak lengkap untuk pembuatan transaksi pembayaran.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Simpan ke database server secara persisten
    createParticipant({
      ...data,
      status: data.status || 'PENDING',
      waktuDaftar: data.waktuDaftar || new Date().toISOString()
    });

    // Detail item untuk invoice Midtrans
    const items = [];
    const regAmount = Number(nominalRegistrasi);
    const donasiAmount = Number(nominalDonasi);

    if (regAmount > 0) {
      items.push({
        id: `REG-${paket || '5K'}`,
        price: regAmount,
        quantity: 1,
        name: `Tiket ${paketNama || 'BAZNAS Fun Walk'}${ukuranJersey ? ` (${ukuranJersey})` : ''}`.substring(0, 50)
      });
    }

    if (donasiAmount > 0) {
      items.push({
        id: 'DONASI-ZIS',
        price: donasiAmount,
        quantity: 1,
        name: 'Infaq / Donasi ZIS BAZNAS'
      });
    }

    // Jika items kosong (fallback aman ke totalBayar)
    if (items.length === 0) {
      items.push({
        id: 'TOTAL-PAYMENT',
        price: Number(totalBayar) || 50000,
        quantity: 1,
        name: `Pembayaran ${paketNama || 'BAZNAS Fun Walk'}`.substring(0, 50)
      });
    }

    const calculatedTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Konfigurasi parameter Snap Midtrans
    const parameter = {
      transaction_details: {
        order_id: id,
        gross_amount: calculatedTotal
      },
      customer_details: {
        first_name: nama,
        email: email,
        phone: whatsapp
      },
      item_details: items,
      callbacks: {
        finish: `${new URL(request.url).origin}/cek-tiket?id=${id}`
      }
    };

    // Filter payment method jika ada pilihan spesifik dari user
    if (preferredPayment === 'muamalat_va' || preferredPayment === 'bsi_va') {
      parameter.enabled_payments = ['bca_va', 'bni_va', 'bri_va', 'permata_va', 'other_va', 'gopay', 'shopeepay', 'qris'];
    }

    const result = await createMidtransTransaction(parameter);

    return new Response(
      JSON.stringify({
        success: true,
        token: result.token,
        redirect_url: result.redirect_url,
        isMock: result.isMock,
        clientKey: midtransConfig.clientKey,
        isProduction: midtransConfig.isProduction,
        orderId: id,
        total: calculatedTotal
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[API /api/midtrans/token Error]', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || 'Gagal memproses transaksi Midtrans.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
