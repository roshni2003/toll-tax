// src/pages/VehicleIdentification.js

import React from 'react';
import RFID from '../components/RFID';
import ANPR from '../components/ANPR';

const VehicleIdentification = () => {
  return (
    <div>
      <RFID />
      <ANPR />
    </div>
  );
};

export default VehicleIdentification;
