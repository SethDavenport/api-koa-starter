import winston from 'winston';

const UNKNOWN_ERROR_CODE = 500;

export async function errorResponder(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || UNKNOWN_ERROR_CODE;
    ctx.body = err.message || '';

    winston.error(`${ctx.status} response: ${ctx.body}`);
    if (ctx.status === UNKNOWN_ERROR_CODE) {
      winston.error(`${err.stack}`);
    }
  }
}
