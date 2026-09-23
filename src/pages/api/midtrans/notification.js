export const prerender = false;

import { verifyMidtransNotification } from '../../../lib/midtrans.js';
import { updateParticipantStatus } from '../../../lib/server-db.js';

export async function POST({ request }) {
  try {
    const notificationPayload = await request.json();
    console.info('[Midtrans Webhook Received]', JSON.stringify(notificationPayload));

    const statusResponse = await verifyMidtransNotification(notificationPayload);

    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;
    const paymentType = statusResponse.payment_type;

    let orderStatus = 'PENDING';

    if (transactionStatus === 'capture') {
      if (fraudStatus === 'challenge') {
        orderStatus = 'CHALLENGE';
      } else if (fraudStatus === 'accept') {
        orderStatus = 'PAID';
      }
    } else if (transactionStatus === 'settlement') {
      orderStatus = 'PAID';
    } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
      orderStatus = 'CANCELLED';
    } else if (transactionStatus === 'pending') {
      orderStatus = 'PENDING';
    }

    // Perbarui status langsung di database server
    const paymentMethodLabel = paymentType ? `Midtrans (${String(paymentType).toUpperCase()})` : 'Midtrans Gateway';
    const updated = updateParticipantStatus(orderId, orderStatus, paymentMethodLabel, statusResponse.transaction_id);

    console.info(`[Midtrans Webhook Processed] Order: ${orderId} -> Status: ${orderStatus} (Payment: ${paymentType})`);

    return new Response(
      JSON.stringify({
        status: 'OK',
        orderId,
        orderStatus,
        transactionStatus,
        recordFound: Boolean(updated)
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('[Midtrans Webhook Handler Error]', error);
    return new Response(
      JSON.stringify({
        status: 'ERROR',
        message: error.message || 'Webhook verification error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
