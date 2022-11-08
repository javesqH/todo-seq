const db = require('../utils/database');
const initModels = require('../models/initModels');
const Users = require('../models/users.models');
const Address = require('../models/addresses.models');
const Tasks = require('../models/tasks.models');
const Categories = require('../models/categories.models');  

initModels();

const users = [
    {username: 'Ian Rosas', email: 'ian@gmail.com', password: "1234"},
    {username: 'Alvis Echeverria', email: 'alvis@gmail.com', password: "1234"},
    {username: 'Carlos Tineo', email: 'carlos@gmail.com', password: "1234"},
];

const addresses = [
    { street: 'Buena Vista', number: 157, userId: 1 },
    { street: 'Benito Juarez', number: 57, userId: 2 },
    { street: 'Madero', number: 157, userId: 3 },

];

const tasks = [
    { 
        title: 'Crear seeders', 
        description: 'Terminar el archivo para los seeders', 
        userId: 1,
    },
    { 
        title: 'Pasear al perro', 
        description: 'Darle la vuelta por el barrio', 
        userId: 2,
    },
    { 
        title: 'Tomar 2 litros de agua', 
        userId: 3,
    },
];

const categories = [
    {name: 'personal'},
    {name: 'escuela'},
    {name: 'salud'},
    {name: 'trabajo'},
    {name: 'hogar'},
    {name: 'deporte'},
    {name: 'ocio'},
    {name: 'financiero'},
  ];

db.sync({ force: false })
    .then(async() => {
        console.log('Iniciando plantacion');
        users.forEach((user) => Users.create(user));
    })
    .then(() => {
        categories.forEach((category) => Categories.create(category));
    })
    .then(() => {
        tasks.forEach((task) => Tasks.create(task));
    })
    .then(() => {
        addresses.forEach((address) => Address.create(address));
    });
   
   