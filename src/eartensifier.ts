import * as Sentry from '@sentry/node';
import { Client } from './structures/Client';

const client = new Client();
['commands', 'events'].forEach(handler => require(`./handlers/${handler}`)(client));

Sentry.init({
	dsn: process.env.SENTRY_URL,
	environment: process.env.SENTRY_ENVIRONMENT,
});

client.login(process.env.DISCORD_TOKEN);