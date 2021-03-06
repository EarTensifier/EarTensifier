const users = require('../../models/user.js');

module.exports = async (user, pledge) => {
	switch (pledge) {
		case 'Premium': {
			const u = await users.findOne({ authorID: user });
			return u.premium;
		}
		case 'Pro': {
			const u = await users.findOne({ authorID: user });
			return u.pro;
		}
	}
};