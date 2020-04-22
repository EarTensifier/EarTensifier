/* eslint-disable no-unused-vars */
module.exports = async (client, channelID: String, message) => {
    client.shard.broadcastEval(`
	(async () => {
		let channel = this.channels.cache.get('${channelID}');
		if (channel) {
			channel.send({ embed: ${JSON.stringify(message.toJSON(), null, 4)} });
		}
	})();
    `);
};