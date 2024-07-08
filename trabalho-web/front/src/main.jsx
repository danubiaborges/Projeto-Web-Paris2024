import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './api/AuthProvider'; 

import App from './App';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/modalidades" element={<App />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
