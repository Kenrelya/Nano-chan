const Discord = require("discord.js");
const client = new Discord.Client();
const idLol = '462183951335948288';
const idOw = '462184014560624640';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toUpperCase() === 'BONJOUR') {
    msg.reply('bonjour');
  }
  if (msg.content === 'Ca va ?' || msg.content === 'ça va ?') {
    msg.reply('oui et toi ?');
  }

  if (msg.channel.name === 'command-bot') {
      if (msg.content === "?help")
        msg.reply("Commandes : \n ?lol : role lol \n ?ow : role ow \n ?sup lol : supprimer role lol\n ?sup ow : supprimer role ow");
      if (msg.content === "?lol") {
        msg.member.addRole(idLol)
        .then(msg.reply('role ajouté'));
      }
      if (msg.content === "?ow") {
        msg.member.addRole(idOw);
        msg.reply('role ajouté');
      }
      if ((msg.content === "?sup ow")) {
        msg.member.removeRole(idOw);
        msg.reply('role supprimé');
      }
      if ((msg.content === "?sup lol")) {
        msg.member.removeRole(idLol);
        msg.reply('role supprimé');
      }
  }
});

client.on('message', msg => {
});

client.login('NDYxODgwMjE1MTk5NTQ3Mzky.DhZvVA.SE21eFSN8zypO_SGk19ajBu2gi8');