import axios from 'axios';

// Axios-Instanz mit der Basis-URL und Timeout
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080',
  timeout: 5000,
});

// Interceptor für die Fehlerbehandlung
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Funktionen für die Shopping List API

// Alle Items abrufen
export const getShoppingItems = async () => {
  const response = await api.get('/api/shopping-list/items');
  return response.data;
};

// Einzelnes Item nach Namen abrufen
export const getShoppingItemByName = async (name) => {
  const response = await api.get(`/api/shopping-list/items/${name}`);
  return response.data;
};

// Ein Item hinzufügen
export const addShoppingItem = async (item) => {
  const response = await api.post('/api/shopping-list/items', item);
  return response.data;
};

// Ein Item aktualisieren
export const updateShoppingItem = async (id, item) => {
  const response = await api.put(`/api/shopping-list/items/${id}`, item);
  return response.data;
};

// Ein Item löschen
export const deleteShoppingItem = async (id) => {
  await api.delete(`/api/shopping-list/items/${id}`);
};
