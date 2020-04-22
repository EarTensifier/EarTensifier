import fetch from 'node-fetch';

module.exports = async (client, servers, users) => {
	fetch(`https://cloud-botlist.xyz/api/bots/${client.user.id}`, {
		method: 'POST',
		headers: {
			Authorization: process.env.CLOUDBOTLISTXYZ_TOKEN,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ guilds: servers, users: users }),
	}).then(() => {
		client.log('Posted bot stats to cloud-botlist.xyz');
	});
};