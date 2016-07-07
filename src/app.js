import Koa from 'koa';
import koaRouter from 'koa-router';
import helmet from 'koa-helmet';
import winston from 'winston';
import { errorResponder } from './middleware/error-responder';
import { REQUEST_LOGS } from './project-env';
import { healthCheckRouter } from './routes/health-check/health-check.router';
import { demoRouter } from './routes/demo/demo.routes';

// Entry point for all modules.
const api = koaRouter()
  .use('/', healthCheckRouter.routes())
  .use('/demo', demoRouter.routes());

// Top level server configuration.
export const app = new Koa()
  .use(helmet());

if (REQUEST_LOGS) {
  app.use(require('koa-morgan')('combined'));
}

app
  .use(api.routes())
  .use(errorResponder)
  .use(api.allowedMethods());

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  winston.info(`Starting server on port ${PORT}`);
  app.listen(PORT);
}
