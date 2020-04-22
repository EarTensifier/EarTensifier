import users = require('../../models/user.js');

module.exports = async (user, pledge: string) => {
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