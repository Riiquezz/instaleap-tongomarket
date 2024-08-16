import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.xandar.instaleap.io';
const API_KEY = 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi';

const mockedSlots = [
  {
    id: 'slot1',
    start_time: '2024-08-17T09:00:00Z',
    end_time: '2024-08-17T11:00:00Z',
  },
  {
    id: 'slot2',
    start_time: '2024-08-17T13:00:00Z',
    end_time: '2024-08-17T15:00:00Z',
  },
  {
    id: 'slot3',
    start_time: '2024-08-17T16:00:00Z',
    end_time: '2024-08-17T18:00:00Z',
  },
];

const Availability = ({ onSelectSlot }) => {
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState(null);
  const [useMock, setUseMock] = useState(true);
  const [selectedMockSlot, setSelectedMockSlot] = useState(null);

  const handleCheckAvailability = async () => {
    try {
      if (useMock) {
        setSlots(mockedSlots);
        setUseMock(false); // After using mock, set to use API request next time
      } else if (selectedMockSlot) {
        const response = await axios.post(`${API_URL}/jobs/availability/v2`, {
          currency_code: 'USD',
          start: selectedMockSlot.start_time,
          end: selectedMockSlot.end_time,
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

        if (response.data && response.data.slots) {
          setSlots(response.data.slots);
        } else {
          setError('No slots available.');
        }
      }
    } catch (err) {
      setError('Failed to fetch availability slots');
      console.error(err);
    }
  };

  const handleSlotSelect = (slot) => {
    setSelectedMockSlot(slot); // Save the selected mock slot
    onSelectSlot(slot); // Proceed with the flow as before
  };

  return (
    <div>
      <button onClick={handleCheckAvailability}>Check Time Slots</button>
      {error && <p>{error}</p>}
      <div>
        {slots.map((slot, index) => (
          <button key={index} onClick={() => handleSlotSelect(slot)}>
            {new Date(slot.start_time).toLocaleString()} - {new Date(slot.end_time).toLocaleString()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Availability;
