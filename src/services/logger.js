import winston from 'winston';
import { k } from '../project-env';

const formatter = options => options.meta && options.meta.requestId ?
  `[RQID=${options.meta.requestId}] ${options.message}` :
  `${options.message}`;

export const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: k.LOG_LEVEL,
      formatter,
    }),
  ],
});
