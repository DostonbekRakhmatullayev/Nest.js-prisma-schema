import { registerAs } from '@nestjs/config';

interface IDatabaseConfig {
  readonly url: string;
}

export const databaseConfig = registerAs(
  'database',
  (): IDatabaseConfig => ({
    url: process.env.DATABASE_URL
      ? String(process.env.DATABASE_URL)
      : undefined,
  }),
);
