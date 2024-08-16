import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.xandar.instaleap.io';
const API_KEY = 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi';

const Billing = ({ orderId }) => {
  const [billingStatus, setBillingStatus] = useState('');
  const [error, setError] = useState(null);

  const handleBilling = async () => {
    try {
      const paymentInfo = {
        prices: {
          subtotal: 100.0,
          shipping_fee: 10.0,
          discounts: 5.0,
          taxes: 8.0,
          order_value: 113.0,
          attributes: [
            {
              type: 'ORDER_VALUE',
              name: 'Total Order Value',
              value: 113.0
            }
          ],
          additional_info: [
            {
              type: 'NOTE',
              name: 'Customer Note',
              value: 0
            }
          ]
        },
        payment: {
          id: 'payment123',
          payment_status: 'PAID',
          method: 'CASH',
          reference: 'ref123',
          value: 113.0,
          payment_status_details: 'Payment received successfully',
          method_details: 'Cash on delivery',
          blocking_policy: 'CHECKOUT'
        },
        invoice: {
          reference: 'INV123',
          attachments: [
            'https://example.com/invoice.pdf'
          ]
        }
      };

      await axios.put(`${API_URL}/jobs/${orderId}/payment_info`, paymentInfo, {
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'x-api-key': API_KEY
        }
      });

      setBillingStatus('Billing updated successfully');
    } catch (err) {
      setError('Failed to update billing');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Billing</h2>
      <button onClick={handleBilling}>Process Billing</button>
      {error && <p>{error}</p>}
      {billingStatus && <p>{billingStatus}</p>}
    </div>
  );
};

export default Billing;
