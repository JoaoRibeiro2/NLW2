import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes)

//Request body: Criar ou atualizar registros
//Route params: Identificar qual recurso eu quero atualizar de um registro 
//Query params: Paginação, Filtros, ordenação
//Knex: Serve para escrever codigos em js


app.listen(3333);