/* eslint-disable no-shadow */
import discordbots from 'discord.bots.gg';
const dbots = new discordbots(process.env.DISCORD_ID, process.env.DISCORDBOTSGG_TOKEN);

module.exports = async (client, servers, shards, shardID) => {
	// eslint-disable-next-line no-unused-vars
	dbots.postStats(servers, shards, shardID).then(() => {
		client.log('Posted bot stats to discordbots.gg');
	}).catch((error) => client.log('An error occured while posting bot stats to discordbots.gg: ' + error));
};