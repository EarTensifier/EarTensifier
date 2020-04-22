module.exports = async (type: String, message, args: String) => {
	switch (type) {
	case 'reloadError': {
		message.channel.send(`An error occured while reloading \`${args}\`.`);
		break;
	}
	case 'sameVoiceChannel': {
		message.channel.send('You are not in the same voice channel as the bot.');
		break;
	}
	case 'noVoiceChannel': {
		message.channel.send('You need to be in a voice channel to use this command');
		break;
	}
	case 'noSongsPlaying': {
		message.channel.send('There are no songs currently playing, please play a song to use the command.');
		break;
	}
	case 'noPremium': {
		message.channel.send('This command is only available to **Premium** users. Click here to get premium: https://www.patreon.com/eartensifier');
		break;
	}
	case 'noPro': {
		message.channel.send('This command is only available to **Pro** users. Click here to get premium: https://www.patreon.com/eartensifier');
		break;
	}
	case 'botVoiceChannel': {
		message.channel.send('The bot is not currently in a vc.');
		break;
	}
	case 'noPermissionConnect': {
		message.channel.send('I do not have permission to join your voice channel.');
		break;
	}
	case 'noPermissionSpeak': {
		message.channel.send('I do not have permission to speak in your voice channel.');
		break;
	}
	default: {
		message.channel.send(this.client.error());
	}
	}
};