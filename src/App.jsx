import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Client from './Pages/Client';
import Product from './Pages/ProductProduct';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div id="home" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <About />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <hr />
      <div id="client" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Client />
      </div>
      <div id="product" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Product />
      </div>
    </>
  );
}

export default App;
