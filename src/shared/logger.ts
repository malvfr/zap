import { createLogger, format, transports } from 'winston';
const { combine, timestamp } = format;

const baseLogFormat = (extra: transports.FileTransportOptions) => {
  const baselog = {
    dirname: 'logs',
    format: combine(timestamp(), format.simple())
  };

  return { ...baselog, ...extra };
};

const logger = createLogger({
  level: 'debug',
  format: format.json(),
  defaultMeta: { service: 'application' },
  transports: [
    new transports.File(
      baseLogFormat({
        filename: 'error.log',
        level: 'error'
      })
    ),
    new transports.File(
      baseLogFormat({
        filename: 'combined.log'
      })
    )
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(format.colorize(), format.simple())
    })
  );
}

export default logger;
