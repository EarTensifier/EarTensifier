module.exports = async (client, servers, shards, shardID) => {
	client.dbl.postStats(servers, shardID, shards);
};