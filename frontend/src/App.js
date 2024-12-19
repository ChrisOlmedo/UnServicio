import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Realizar la solicitud al backend
    fetch('/api/test')
      .then((response) => response.json()) // Convertir la respuesta a JSON
      .then((data) => {
        setMessage(data.message); // Almacenar el mensaje en el estado
      })
      .catch((error) => {
        console.error('Error al conectar con el backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Mensaje desde el backend: {message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
