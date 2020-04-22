const Command = require('../../structures/Command');

const { earrape } = require('../../../config/volume.js');

module.exports = class Earrape extends Command {
	constructor(client) {
		super(client, {
			name: 'earrape',
			description: 'Earrapes a song.',
			aliases: ['veryloud', 'hell', 'loud'],
			cooldown: '10',
			inVoiceChannel: true,
			sameVoiceChannel: true,
			playing: true,
		});
	}
	async run(client, message) {
		const player = client.music.players.get(message.guild.id);

		// player.setVolume(earrape);
		// player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.5 })));
		player.setTimescale(10, 10, 10);
		return message.channel.send('Tensity set to **earrape**');
	}
};
