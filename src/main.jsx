import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './components/ItemListContainer/CartWidget/Context.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyBwD_b630H8SgIcdWYUquq-KjVat2QlGMI",
  authDomain: "luz-de-oro.firebaseapp.com",
  projectId: "luz-de-oro",
  storageBucket: "luz-de-oro.firebasestorage.app",
  messagingSenderId: "373195048525",
  appId: "1:373195048525:web:716aa9574de8457331be04"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CarritoProvider>
    <App />
  </CarritoProvider>
  </StrictMode>,
)
