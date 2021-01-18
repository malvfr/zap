const manifest = require('../../package.json'); // eslint-disable-line

export const getVersion = (): string => manifest.version;
