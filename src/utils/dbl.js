const Discord = require('discord.js');
const DBL = require('dblapi.js');

const users = require('../models/user.js');

module.exports.startUp = async (client) => {
	const dblWebhook = new DBL(process.env.TOPGG_TOKEN, {
		webhookPort: process.env.TOPGG_PORT,
		webhookAuth: process.env.TOPGG_PASSWORD,
	}, client);

	dblWebhook.webhook.on('ready', async (hook) => {
		client.log(`Top.gg webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
	});

	dblWebhook.webhook.on('vote', async (voter) => {
		try {
			const votedUser = await client.users.fetch(voter.user);
			const embed = new Discord.MessageEmbed()
				.setAuthor(`${votedUser.tag} - (${votedUser.id})`, votedUser.displayAvatarURL())
				.setDescription(`**${votedUser.username}** voted for the bot!`)
				.setThumbnail(votedUser.displayAvatarURL())
				.setColor(client.colors.main)
				.setTimestamp();

			client.shardMessage(client, client.channelList.dblChannel, embed);

			users.findOne({
				authorID: votedUser.id,
			}, async (err, u) => {
				if (err) console.log(err);
				if (!u) {
					const newUser = new users({
						authorID: votedUser.id,
						bio: '',
						songsPlayed: 0,
						commandsUsed: 0,
						blocked: false,
						premium: false,
						pro: false,
						developer: false,
						voted: true,
						votedConst: true,
						lastVoted: Date.now(),
					});
					await newUser.save().catch(e => console.log(e));
				}
				else {
					u.voted = true;
					u.votedConst = true;
					u.lastVoted = Date.now();
					await u.save().catch(e => console.log(e));
				}
			});
		}
		catch (e) {
			client.log(e);
		}
	});
};