import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpEGOiQi9d6qBkNR4uHWaLYCB3Ct_CIK8",
  authDomain: "argen-camaras.firebaseapp.com",
  projectId: "argen-camaras",
  storageBucket: "argen-camaras.appspot.com",
  messagingSenderId: "798559178598",
  appId: "1:798559178598:web:6acb16ecdc288db36a82a7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


