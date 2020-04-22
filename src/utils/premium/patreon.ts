import users = require('../../models/user.js');

module.exports = async (user: any, pledge: string) => {
	switch (pledge) {
		case 'Remove': {
			users.findOne({
				authorID: user.id,
			}, async (err, u) => {
				if (err) console.log(err);
				if (!u) {
					const newUser = new users({
						authorID: user.id,
						bio: '',
						songsPlayed: 0,
						commandsUsed: 0,
						blocked: false,
						premium: false,
						pro: false,
						developer: false,
					});
					await newUser.save().catch(e => console.log(e));
				}
				else {
					u.premium = false;
					u.pro = false;
				}
				await u.save().catch(e => console.log(e));
			});
			break;
		}
		case 'Premium': {
			users.findOne({
				authorID: user.id,
			}, async (err, u) => {
				if (err) console.log(err);
				if (!u) {
					const newUser = new users({
						authorID: user.id,
						bio: '',
						songsPlayed: 0,
						commandsUsed: 0,
						blocked: false,
						premium: true,
						pro: false,
						developer: false,
					});
					await newUser.save().catch(e => console.log(e));
				}
				else {
					u.premium = true;
					u.pro = false;
				}
				await u.save().catch(e => console.log(e));
			});
			break;
		}
		case 'Pro': {
			users.findOne({
				authorID: user.id,
			}, async (err, u) => {
				if (err) console.log(err);
				if (!u) {
					const newUser = new users({
						authorID: user.id,
						bio: '',
						songsPlayed: 0,
						commandsUsed: 0,
						blocked: false,
						premium: true,
						pro: true,
						developer: false,
					});
					await newUser.save().catch(e => console.log(e));
				}
				else {
					u.premium = true;
					u.pro = true;
				}
				await u.save().catch(e => console.log(e));
			});
			break;
		}
	}
};