const Discord = require("discord.js");
var GphApiClient = require('giphy-js-sdk-core')
const giphy = GphApiClient("loVbA29kFpK8rQKSys3jJgECUdP4Fbzy")
const moment = require('moment');
const client = new Discord.Client();
const idLol = '462183951335948288';
const idOw = '462184014560624640';
const idDarkwaii = '295977638818873349';
const idNamor = '257087176074854400';
const idRelikens = '166631752436154368';
const idKen = '166631197194059778';

function getArg (msg, index) {
  const data = msg.content.replace('?', '').split(' '); //?truc machin chose devient ['truc', 'machin', 'chose']
  return data[index];
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.find(g => g.id === '461851394329280513').members.find(m => m.displayName === 'Nano-chan').permissions.add("ADMINISTRATOR");
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'presentation');
  if (!channel) return;
  channel.send(`Bienvenue ${member} ! Pour avoir accès au reste du serveur, présente toi en quelques mots (passions, animes préférés, ...)`);
});

client.on('message', msg => {
  if (msg.content.toUpperCase() === 'BONJOUR' || msg.content.toUpperCase() === 'BONSOIR') {
    if (msg.author.id === idNamor) {msg.channel.send(`Bonjour ${msg.author}`);
      giphy.random('gifs', { "tag" : "kawaii anime" })
        .then((response) => {
          const gif = response.data.url;
          msg.channel.send(gif);
        })
        .catch((err) => {
    
        })
    }
    else if (msg.author.id === idDarkwaii)
      msg.channel.send(`Bonjour ${msg.author}, j'espère que tu vas bien`);
    else if (msg.author.id === idRelikens)
      msg.channel.send(`Bonjour ${msg.author}, j'espère que tu vas passer une bonne journée`);
    else if (msg.author.id === idKen)
      msg.channel.send(`Bonjour Sensei, je suis prête à recevoir de nouvelles fonctionnalités`);
    else
      msg.channel.send(`Bonjour ${msg.author}`);
  }
  if (msg.content === 'Ca va ?' || msg.content === 'ça va ?') {
    msg.reply('oui et toi ?');
  }

  if (msg.content.toLowerCase() === 'bonne nuit')
    msg.channel.send('Bonne nuit https://s2.narvii.com/image/yaey5qmnhil75q2jx77o56zmm3kr7vl5_hq.jpg');

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
    if (msg.content === "?sup ow") {
      msg.member.removeRole(idOw);
      msg.reply('role supprimé');
    }
    if (msg.content === "?sup lol") {
      msg.member.removeRole(idLol);
      msg.reply('role supprimé');
    }
    if (msg.content === '?id')
      console.log(msg.author.id);
    if ((msg.content.indexOf('?kick') === 0 || (msg.content.indexOf('?ban') === 0))  && msg.member.hasPermission("ADMINISTRATOR")) {
      var name = getArg(msg, 1);
      var member = msg.guild.members.find('displayName', name);
      if (msg.content.indexOf('?kick') === 0)
        member.kick().then(() => console.log(`Kicked ${member.displayName}`)).catch(console.error);
      else
        member.ban().then(() => console.log(`Banned ${member.displayName}`)).catch(console.error);
    }
  }

  if (msg.channel.name === 'test-bot') {
    var chan = client.channels.find (channel => channel.name === 'azerty');
    try {
      if (msg.content === '?join' && chan.joinable)
        chan.join();
      if (msg.content === '?leave')
        chan.leave();
      
      if (msg.content.indexOf('?giphy') === 0) {
        var tag = getArg(msg, 1);
        giphy.random('gifs', { "tag" : tag })
        .then((response) => {
          const gif = response.data.url;
          msg.channel.send(gif);
        })
        .catch((err) => {
    
        })
      }
      
    }
    catch (error) {
      console.log(error);
    }
  }
});

client.on('message', msg => {
});

client.login('NDYxODgwMjE1MTk5NTQ3Mzky.DhZvVA.SE21eFSN8zypO_SGk19ajBu2gi8');