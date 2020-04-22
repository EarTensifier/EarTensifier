import BotList from 'botlist.space';
const botListClient = new BotList.Client({ id: process.env.DISCORD_ID, botToken: process.env.BOTLISTSPACE_TOKEN });

module.exports = async (client) => {
	const shardInfo = await client.shard.broadcastEval(`[
        this.guilds.cache.size,
      ]`);

	const shardArray = [];
	shardInfo.forEach(i => {
		shardArray.push(i[0]);
	});

	botListClient.postServerCount(shardArray).then(() => {
		client.log('Posted bot stats to botlist.api');
	}).catch((error) => client.log('An error occured while posting bot stats to botlist.space: ' + error));
};