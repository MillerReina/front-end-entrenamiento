import { Config } from './config.model';

export const environment: Config = {
  production: false,
  localhost: 'http://localhost:8099',
  deployment: '',
} as Config;
