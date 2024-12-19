const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/api/test', (req, res) => {

    console.log('Solicitud recibida en /api/test');
    res.json({ message: '¡Comunicación exitosa entre frontend y backend!' });
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend/build')));


// Manejar rutas no coincidentes (React)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));



