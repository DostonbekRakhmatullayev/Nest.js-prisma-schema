import { ConfigModuleOptions } from '@nestjs/config';
import { AppConfig } from './app';
import { databaseConfig } from './database';

export const config: ConfigModuleOptions = {
  load: [AppConfig, databaseConfig],
  cache: true,
  isGlobal: true,
};
