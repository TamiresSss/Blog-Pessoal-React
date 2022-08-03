import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import { Grid } from '@material-ui/core';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={< CadastroUsuario />} />
            <Route path="/temas" element={< ListaTema />} />
            <Route path="/listapostagem" element={< ListaPostagem />} />
            {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
