const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

  setInterval(async () => {
    client.channels.fetch(process.env.channel)
      .then((channel) => {
        joinVoiceChannel({
          channelId: channel.id,
          guildId: process.env.guild,
          selfMute: true,
          selfDeaf: true,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      })
      .catch(() => { return; });
  }, 1000);
});

client.login(process.env.token);
