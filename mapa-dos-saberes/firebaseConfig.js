// src/config/firebaseConfig.js

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB7Y0Vcc-rQNM-iDOHciYGzLARcorQBgxQ',
  authDomain: 'YOUR_AUTH_DOMAIN', // Adicione este campo se necessário
  projectId: 'enfor-f8da5',
  storageBucket: 'YOUR_STORAGE_BUCKET', // Adicione este campo se necessário
  messagingSenderId: '723893459026',
  appId: '1:723893459026:android:3e1245569833b4929be78b',
  measurementId: 'YOUR_MEASUREMENT_ID' // Adicione este campo se necessário
};

// Função para inicializar o Firebase
export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase;
};

// Exporta o Firebase inicializado
export default initializeFirebase;
