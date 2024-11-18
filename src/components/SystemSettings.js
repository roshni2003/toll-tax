// src/components/SystemSettings.js

import React, { useState, useEffect } from 'react';

const SystemSettings = () => {
  const [tollRate, setTollRate] = useState('');
  const [operationalHours, setOperationalHours] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    // Check if settings exist in localStorage
    const savedTollRate = localStorage.getItem('tollRate');
    const savedOperationalHours = localStorage.getItem('operationalHours');
    if (savedTollRate) setTollRate(savedTollRate);
    if (savedOperationalHours) setOperationalHours(savedOperationalHours);
  }, []);

  const handleSaveSettings = () => {
    if (tollRate && operationalHours) {
      localStorage.setItem('tollRate', tollRate);
      localStorage.setItem('operationalHours', operationalHours);
      setIsUpdated(true);
    } else {
      alert("Please provide valid settings.");
    }
  };

  return (
    <div>
      <h3>System Settings</h3>
      <div>
        <label>Toll Rate ($): </label>
        <input
          type="number"
          value={tollRate}
          onChange={(e) => setTollRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Operational Hours: </label>
        <input
          type="text"
          value={operationalHours}
          onChange={(e) => setOperationalHours(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
      {isUpdated && <p>Settings saved successfully!</p>}
    </div>
  );
};

export default SystemSettings;
