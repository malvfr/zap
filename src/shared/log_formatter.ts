export const logInfo = (data: string): void => {
  log('\x1b[33m')(data);
};

export const logData = (data: string): void => {
  log('\x1b[36m')(data);
};

export const logSuccess = (data: string): void => {
  log('\x1b[32m')(data);
};

export const logDebug = (data: string): void => {
  log('\x1b[35m')(data);
};

const log = (type: string) => (data: string) => console.log(type, data, '\x1b[0m');
