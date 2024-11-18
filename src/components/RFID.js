// src/components/RFID.js

import React, { useState } from 'react';
import './RFID.css';

const RFID = () => {
  const [rfidTag, setRfidTag] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const mockDatabase = {
    "RFID12345": { vehicleNumber: "MH12AB1234", owner: "John Doe", vehicleType: "Car" },
    "RFID67890": { vehicleNumber: "KA05CD6789", owner: "Jane Smith", vehicleType: "Truck" },
  };

  const handleRFIDScan = () => {
    if (mockDatabase[rfidTag]) {
      setVehicleInfo(mockDatabase[rfidTag]);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid RFID tag.');
      setVehicleInfo(null);
    }
  };

  return (
    <div className='rfid-container '>
    <h2>RFID Vehicle Identification</h2>
      <input
        type="text"
        placeholder="Enter RFID Tag"
        value={rfidTag}
        onChange={(e) => setRfidTag(e.target.value)}
      />
      <button onClick={handleRFIDScan}>Identify Vehicle</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {vehicleInfo && (
        <div className="vehicle-info">
          <p><strong>Vehicle Number:</strong> {vehicleInfo.vehicleNumber}</p>
          <p><strong>Owner:</strong> {vehicleInfo.owner}</p>
          <p><strong>Vehicle Type:</strong> {vehicleInfo.vehicleType}</p>
        </div>
      )}

    </div>

  );
};

export default RFID;
