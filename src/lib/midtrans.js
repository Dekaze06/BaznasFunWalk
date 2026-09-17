import midtransClient from 'midtrans-client';

// Ambil konfigurasi dari environment variables
const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || import.meta.env?.MIDTRANS_SERVER_KEY || 'SB-Mid-server-sandbox-demo-key';
const CLIENT_KEY = process.env.PUBLIC_MIDTRANS_CLIENT_KEY || import.meta.env?.PUBLIC_MIDTRANS_CLIENT_KEY || 'SB-Mid-client-sandbox-demo-key';
const IS_PRODUCTION = (process.env.MIDTRANS_IS_PRODUCTION || import.meta.env?.MIDTRANS_IS_PRODUCTION) === 'true';

// Inisialisasi Midtrans Snap instance
export const snap = new midtransClient.Snap({
  isProduction: IS_PRODUCTION,
  serverKey: SERVER_KEY,
  clientKey: CLIENT_KEY
});

export const midtransConfig = {
  clientKey: CLIENT_KEY,
  isProduction: IS_PRODUCTION,
  isMockKey: !SERVER_KEY || SERVER_KEY.includes('demo-key') || SERVER_KEY.includes('sandbox-key-here')
};

/**
 * Membuat transaksi Midtrans Snap
 * @param {Object} params - Detail transaksi (transaction_details, customer_details, item_details, dll.)
 */
export async function createMidtransTransaction(params) {
  // Jika masih menggunakan mock/demo key, berikan mock token agar alur flow tetap bisa dites
  if (midtransConfig.isMockKey) {
    console.info('[Midtrans] Menggunakan Mock Token untuk pengetesan alur (Server Key belum diganti).');
    const mockToken = `mock-snap-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    return {
      token: mockToken,
      redirect_url: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${mockToken}`,
      isMock: true
    };
  }

  try {
    const transaction = await snap.createTransaction(params);
    return {
      token: transaction.token,
      redirect_url: transaction.redirect_url,
      isMock: false
    };
  } catch (error) {
    console.warn('[Midtrans API Error]', error?.message || error);
    // Jika key Midtrans tidak valid / ditolak oleh Midtrans Sandbox API, fallback ke mock token
    if (error?.httpStatusCode === 401 || error?.message?.includes('Access denied') || error?.message?.includes('Unauthorized')) {
      console.info('[Midtrans Fallback] Kredensial belum valid di Midtrans API, beralih ke Mock Token agar pendaftaran tidak error.');
      const mockToken = `mock-snap-${Date.now()}`;
      return {
        token: mockToken,
        redirect_url: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${mockToken}`,
        isMock: true,
        notice: 'Server Key Midtrans belum valid pada dashboard sandbox. Menggunakan mode simulasi lokal.'
      };
    }
    throw error;
  }
}

/**
 * Memvalidasi dan mengekstrak notifikasi webhook Midtrans
 * @param {Object|string} notificationPayload - Payload body yang diterima dari Midtrans
 */
export async function verifyMidtransNotification(notificationPayload) {
  if (midtransConfig.isMockKey) {
    return {
      order_id: notificationPayload?.order_id || 'MOCK-ORDER',
      transaction_status: notificationPayload?.transaction_status || 'settlement',
      fraud_status: 'accept',
      payment_type: notificationPayload?.payment_type || 'bank_transfer',
      isMock: true
    };
  }

  try {
    const statusResponse = await snap.transaction.notification(notificationPayload);
    return statusResponse;
  } catch (error) {
    console.error('[Midtrans Webhook Error]', error);
    throw error;
  }
}
