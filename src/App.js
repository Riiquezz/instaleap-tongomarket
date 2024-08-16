import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Availability from './components/Availability';
import OrderCreation from './components/OrderCreation';
import Billing from './components/Billing';

const App = () => {
  const [step, setStep] = useState(0); // 0: Intro, 1: Availability, 2: Order, 3: Billing
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handleStart = () => setStep(1);
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setStep(2);
  };
  const handleOrderCreation = (order) => {
    setOrderId(order.id);
    setStep(3); // Automatically move to the billing screen
  };

  const handleBack = () => {
    if (step === 1) {
      setStep(0); // Go back to Intro screen
    } else if (step === 2) {
      setStep(1); // Go back to Availability screen
    } else if (step === 3) {
      setStep(2); // Go back to Order Creation screen
    }
  };

  return (
    <div>
      {step === 0 && <IntroScreen onStart={handleStart} />}
      {step === 1 && (
        <>
          <h1>Check the following availabilities:</h1>
          <button onClick={handleBack}>← Back</button>
          <Availability onSelectSlot={handleSlotSelect} />
        </>
      )}
      {step === 2 && selectedSlot && (
        <>
          <button onClick={handleBack}>← Back</button>
          <OrderCreation selectedSlot={selectedSlot} onCreateOrder={handleOrderCreation} />
        </>
      )}
      {step === 3 && orderId && (
        <>
          <button onClick={handleBack}>← Back</button>
          <Billing orderId={orderId} />
        </>
      )}
    </div>
  );
};

export default App;
