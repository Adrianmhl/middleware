'use client';

import { useState } from 'react';
import api from '../../utils/api'; 

export default function TestEndpoint() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await api.get('/testEndpoint'); // Backend-Endpunkt
      if (res.status === 200) {
        setResponse(res.data);
      } else {
        console.warn('Unexpected status code:', res.status);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Daten abrufen</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
