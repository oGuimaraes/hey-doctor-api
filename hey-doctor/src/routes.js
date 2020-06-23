import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Otávio Guimarães',
    email: 'otaviovgsrs@gmail.com',
    password_hash: '1283712893',
  });

  return res.json(user);
});

export default routes;
