// src/components/ANPR.js

import React, { useState } from 'react';
import './ANPR.css';

const ANPR = () => {
  const [image, setImage] = useState(null);
  const [plateNumber, setPlateNumber] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState(null);

  const mockPlateDatabase = {
    "MH12AB1234": { owner: "John Doe", vehicleType: "Car" },
    "KA05CD6789": { owner: "Jane Smith", vehicleType: "Truck" },
  };

  const handleFileUpload = (e) => {
    const uploadedImage = e.target.files[0];
    setImage(URL.createObjectURL(uploadedImage));
    // Simulate ANPR processing
    setTimeout(() => {
      const detectedPlate = "MH12AB1234"; // Mock detected plate
      setPlateNumber(detectedPlate);
      setVehicleDetails(mockPlateDatabase[detectedPlate] || null);
    }, 2000);
  };

  return (
    <div className="anpr-container">
      <h2>ANPR Vehicle Identification</h2>
      <input type="file" onChange={handleFileUpload} />
      {image && <img src={image} alt="Uploaded Plate" className="uploaded-image" />}
      {plateNumber && <p><strong>Detected Plate:</strong> {plateNumber}</p>}
      {vehicleDetails ? (
        <div className="vehicle-info">
          <p><strong>Owner:</strong> {vehicleDetails.owner}</p>
          <p><strong>Vehicle Type:</strong> {vehicleDetails.vehicleType}</p>
        </div>
      ) : (
        plateNumber && <p className="error-message">Vehicle not found in the database.</p>
      )}
    </div>
  );
};

export default ANPR;
