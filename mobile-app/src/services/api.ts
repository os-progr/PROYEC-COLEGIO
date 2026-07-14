import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

// Cuando subas a Vercel, debes configurar EXPO_PUBLIC_API_URL con tu dominio de backend
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  let token = null;
  
  if (Platform.OS !== 'web') {
    token = await SecureStore.getItemAsync('token');
  } else {
    token = localStorage.getItem('token');
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});
