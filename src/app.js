const express = require('express');
const initModels = require('./models/initModels');

const db = require('./utils/database');

const userRoutes = require('./routes/users.routes');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

db.authenticate()
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log('Base sincronizada'))
    .catch((error) => console.log(error));

initModels();    

app.get('/', (req, res) => {
    res.status(200).json('Todo bien');
})

app.use('/api/v1', userRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));