
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';
import { createStorage } from './storage';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  storage: createStorage('mastra-storage'),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
