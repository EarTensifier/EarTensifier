import { Client } from "discord.js";

module.exports = class Command {
  public client: Client;
  public name: string;
  public args: any;
  public usage: string;
  public description: string;
  public aliases: any;
  public enabled: boolean;
  public cooldown: number;
  public permission: string;
  public voteLocked: boolean;
  public inVoiceChannel: boolean;
  public sameVoiceChannel: boolean;
  public playing: boolean;

  constructor(client, options) {
    this.client = client;
    this.name = options.name;
    this.args = options.args || false;
    this.usage = options.usage || 'No usage provided';
    this.description = options.description || 'No description provided';
    this.aliases = options.aliases || 'No aliases for this certain command';
    this.enabled = options.enabled || true;
    this.cooldown = options.cooldown || 3;
    this.permission = options.permission || 'user';
    this.voteLocked = options.voteLocked || false;
    this.inVoiceChannel = options.inVoiceChannel || false;
    this.sameVoiceChannel = options.sameVoiceChannel || false;
    this.playing = options.playing || false;
  }
};