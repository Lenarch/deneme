const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require ('./ayarlar.json');


client.on('ready', () => {
    console.log(`Aktif olan yazılım deneme ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(`LOG S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.user}`);
    if (msg.author.id === ayarlar.id) return;
    if (msg.author.bot) return;

  if (msg.content === '<ping') {
      msg.reply('```Bot pingi**'+Client.ping+'**ms```');
  }

  if (msg.content === `${client.user.tag}`) {
      msg.reply('buyur ne vardı');
  }

  if (msg.content === '<sen ne botusun') {
      msg.reply ('berkay söyler');
  }

  if (msg.content === '<temizle şuraları') {
      
  }

  if (msg.content ==='<temizle') {
      msg.channel.bulkDelete(100)
      msg.channel.sendMessage('100 mesaj silindi');
  }

  if (msg.content === 'reboot') {
      if (msg.author.id !== ayarlar.sahip) {
          msg.reply('sen beni yapmadın');
      } else {
          process.exit(0);
      }
  }
});