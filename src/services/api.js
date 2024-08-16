import axios from 'axios';

const API_URL = 'https://api.xandar.instaleap.io';
const API_KEY = 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi';

export const checkAvailability = async () => {
  try {
    const response = await axios.post(`${API_URL}/jobs/availability/v2`, {
      currency_code: 'USD',
      start: new Date().toISOString(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // 1 hour from now
      slot_size: 30,
      minimum_slot_size: 15,
      operational_models_priority: ['FULL_SERVICE'],
      fallback: true,
      store_reference: '101_FS',
      origin: {
        name: 'TongoMart',
        address: 'Main Street',
        address_two: 'Building A',
        description: 'Supermarket',
        country: 'UG',
        city: 'Kampala',
        state: 'Central',
        zip_code: '256',
        latitude: 0.3476,
        longitude: 32.5825,
      },
      destination: {
        name: 'Customer',
        address: 'Customer Address',
        address_two: '',
        description: 'Home',
        country: 'UG',
        city: 'Kampala',
        state: 'Central',
        zip_code: '256',
        latitude: 0.3476,
        longitude: 32.5825,
      },
      job_items: [
        {
          id: '1',
          name: 'Apples',
          photo_url: 'https://example.com/apple.jpg',
          unit: 'kg',
          sub_unit: 'g',
          quantity: 2,
          sub_quantity: 0,
          quantity_found_limits: { max: 3, min: 1 },
          weight: 2.0,
          volume: 0.002,
          price: 10,
          comment: 'Fresh apples',
          attributes: {
            category: 'Fruit',
            plu: '123456',
            ean: '1234567890123',
            location: 'Aisle 1',
            picking_index: '1',
          },
        },
      ],
    }, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-api-key': API_KEY
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createJob = async (jobData) => {
  try {
    const response = await axios.post(`${API_URL}/jobs`, jobData, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-api-key': API_KEY
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updatePaymentInfo = async (jobId, paymentInfo) => {
  try {
    const response = await axios.put(`${API_URL}/jobs/${jobId}/payment_info`, paymentInfo, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-api-key': API_KEY
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
