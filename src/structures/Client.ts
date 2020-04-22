import * as Discord from "discord.js";
import DBL = require('dblapi.js');

export class Client {
    public client: Discord.Client;
	public colors: any;
	public commands: Discord.Collection<any, any>;
	public aliases: Discord.Collection<any, any>;
	public settings: any;
	public channelList: any;
	public filters: any;
	public emojiList: any;
	public shardMessage: any;
	public responses: any;
	public errors: any;
	public environment: string;
	public dbl: DBL;

    constructor() {
        this.client = new Discord.Client();

		this.commands = new Discord.Collection();
		this.aliases = new Discord.Collection();

		this.settings = require('../config/settings.js');
		this.channelList = require('../config/channels.js');
		this.filters = require('../config/filters.js');
		this.colors = require('../config/colors.js');
		this.emojiList = require('../config/emojis.js');

		this.shardMessage = require('./utils/shardMessage.js');
		this.responses = require('./utils/responses.js');
		this.errors = require('./utils/errors.js');

		this.environment = process.env.NODE_ENV;
        this.dbl = new DBL(process.env.TOPGG_TOKEN, this);
    }

	log(msg: string) {
		console.log(`[${new Date().toLocaleString()}] > ${msg}`);
    }
    
    login(token: string) {
        this.client.login(token);
    }
}