import { LibSQLStore } from '@mastra/libsql';

const isDevelopment = process.env.NODE_ENV === 'development';

function requireEnvironmentVariable(name: 'TURSO_DATABASE_URL' | 'TURSO_AUTH_TOKEN') {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is required outside development.`);
  }

  return value;
}

export function createStorage(id: string) {
  if (isDevelopment) {
    return new LibSQLStore({
      id,
      url: 'file:../mastra.db',
    });
  }

  return new LibSQLStore({
    id,
    url: requireEnvironmentVariable('TURSO_DATABASE_URL'),
    authToken: requireEnvironmentVariable('TURSO_AUTH_TOKEN'),
  });
}
