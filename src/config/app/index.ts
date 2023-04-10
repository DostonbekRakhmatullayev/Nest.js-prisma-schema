import { registerAs } from '@nestjs/config';

interface IAppConfig {
  readonly host?: string;
  readonly port?: number;
}

export const AppConfig = registerAs(
  'app',
  (): IAppConfig => ({
    host: process.env.DATABASE_HOST
      ? String(process.env.DATABASE_HOST)
      : undefined,
    port: process.env.DATABASE_PORT
      ? Number(process.env.DATABASE_PORT)
      : undefined,
  }),
);
