import * as Discord from "discord.js";

export class Event {
	private client: Discord.Client;
	private name: string;
	private file: File;

	constructor(client, file) {
		this.client = client;
		this.name = file.name;
		this.file = file;
	}

	async _run(...args) {
		try {
			await this.run(args);
		}
		catch (err) {
			console.error(err);
		}
	}
	
	run(arg0: any) {
		throw new Error("Method not implemented.");
	}

	reload() {
		const path = `../events/${this.name}.js`;
		delete require.cache[path];
		require(`../events/${this.name}.js`);
	}
}