import React from 'react';

const IntroScreen = ({ onStart }) => (
  <div>
    <h1>Welcome to TongoMart Integration with Instaleap</h1>
    <button onClick={onStart}>Check Availability</button>
  </div>
);

export default IntroScreen;
