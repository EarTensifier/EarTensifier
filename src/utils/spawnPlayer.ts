module.exports = async (client, message) => {
    const player = client.music.players.spawn({
        guild: message.guild,
        textChannel: message.channel,
        voiceChannel: message.member.voice.channel,
        selfDeaf: true,
    });

    return player;
};