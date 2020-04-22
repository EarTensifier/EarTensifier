import mongoose from 'mongoose';
import { ShardingManager } from 'discord.js';
import Sentry = require('@sentry/node');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const manager = new ShardingManager('./src/eartensifier.js', {
  token: process.env.DISCORD_TOKEN,
  totalShards: 'auto',
  shardList: 'auto',
  mode: 'process',
  respawn: true,
});

Sentry.init({
  dsn: process.env.SENTRY_URL,
  environment: process.env.SENTRY_ENVIRONMENT,
});

manager.spawn().catch((err) => console.log(err));