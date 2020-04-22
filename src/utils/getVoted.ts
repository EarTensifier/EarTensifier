import users = require('../models/user.js');

module.exports = async (client, author) => {
	const u = await users.findOne({ authorID: author.id });
	if (!u) return false;
	if (!u.voted) return false;
	if (u.voted) {
		if (client.settings.voteCooldown - (Date.now() - u.lastVoted) > 0) {
			u.voted = false;
			await u.save().catch(e => console.log(e));
			return await u.voted;
		}
		else {
			return await u.voted;
		}
	}
};