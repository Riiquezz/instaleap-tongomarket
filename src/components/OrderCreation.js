import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.xandar.instaleap.io';
const API_KEY = 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi';

// Mocked order creation response
const mockedOrder = {
  id: 'mockedOrder123',
  slot_id: 'slot1',
  status: 'CREATED',
  recipient: {
    name: 'Customer Name',
    email: 'customer@example.com',
  },
  items: [
    {
      name: 'Apples',
      quantity: 2,
      price: 10,
    },
  ],
  total_price: 20,
};

const OrderCreation = ({ selectedSlot, onCreateOrder }) => {
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [useMock, setUseMock] = useState(true);

  const handleCreateOrder = async () => {
    try {
      if (useMock) {
        // Use mocked order data
        const createdOrder = { ...mockedOrder, slot_id: selectedSlot.id };
        setOrder(createdOrder);
        setUseMock(false); // After using mock, set to use API request next time
      } else {
        // Send actual order creation request to the API
        const jobData = {
          slot_id: selectedSlot.id,
          client_reference: 'your-client-reference', // Replace with actual client reference
          recipient: {
            name: 'Customer Name',
            email: 'customer@example.com',
            phone_number: '1234567890',
            identification: {
              number: 'ID123456',
              type: 'passport',
            },
          },
          payment_info: {
            currency_code: 'USD',
            prices: {
              subtotal: 100,
              shipping_fee: 10,
              discounts: 5,
              taxes: 8,
              order_value: 113,
              attributes: [
                { type: 'ORDER_VALUE', name: 'Total', value: 113 },
              ],
              additional_info: [
                { type: 'NOTE', name: 'Customer Note', value: 0 },
              ],
            },
            payment: {
              id: 'payment123',
              payment_status: 'PENDING',
              method: 'CASH',
              reference: 'ref123',
              value: 113,
              payment_status_details: 'Awaiting payment',
              method_details: 'Cash on delivery',
              blocking_policy: 'CHECKOUT',
            },
          },
          add_delivery_code: true,
          job_comment: 'Handle with care',
          contact_less: {
            comment: 'Leave at the door',
            cash_receiver: 'John Doe',
            phone_number: '0987654321',
          },
        };

        const response = await axios.post(`${API_URL}/jobs`, jobData, {
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'x-api-key': API_KEY
          }
        });

        setOrder(response.data);
      }
    } catch (err) {
      setError('Failed to create order');
      console.error(err);
    }
  };

  const handleProceedToBilling = () => {
    if (order) {
      onCreateOrder(order); // Navigate to billing screen with the order details
    }
  };

  return (
    <div>
      <h2>Create Order</h2>
      {selectedSlot && !order && (
        <div>
          <p>Selected Slot: {new Date(selectedSlot.start_time).toLocaleString()} - {new Date(selectedSlot.end_time).toLocaleString()}</p>
          <button onClick={handleCreateOrder}>Create Order</button>
        </div>
      )}
      {error && <p>{error}</p>}
      {order && (
        <div>
          <h3>Order Details</h3>
          <pre>{JSON.stringify(order, null, 2)}</pre>
          <button onClick={handleProceedToBilling}>Proceed to Billing</button>
        </div>
      )}
    </div>
  );
};

export default OrderCreation;
