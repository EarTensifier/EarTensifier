const Command = require('../../structures/Command');

module.exports = class Skip extends Command {
	constructor(client) {
		super(client, {
			name: 'skip',
			description: 'Skips the current song',
			aliases: ['s'],
			inVoiceChannel: true,
			sameVoiceChannel: true,
			playing: true,
		});
	}
	async run(client, message) {
		const player = client.music.players.get(message.guild.id);

		if(player) player.stop();
		return message.channel.send('Skipped...');
	}
};