const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); // desaclopando o módulo de rotas do express em uma var

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); // rota abstraida na entidade OngController 

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create); // login

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;