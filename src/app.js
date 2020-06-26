import express from 'express';
import Youch from 'youch';
import path from 'path';
import * as Sentry from '@Sentry/node';
import sentryConfig from './config/sentry';

import 'express-async-errors';
import routes from './routes';

import './database';
class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }
  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON();
      const { message, frames } = errors.error;
      const { method, filePath } = frames[0];
      return res.status(500).json({
        message,
        method,
        filePath,
      });
    });
  }
}

export default new App().server;
