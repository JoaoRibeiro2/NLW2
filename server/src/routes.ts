import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/classes', async (request, response) => {
  const { name, avatar, whatsapp, bio } = request.body;

  await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  return response.send();
});

routes.get('/classes', async (request, response) => {
  const users = await db('users').select('*');

  return response.json(users);
});

export default routes;
