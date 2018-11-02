const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '466760649632907266') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`**Welcome To Panorama Server   (:   :dancer::skin-tone-3: 

نورنا ي قلبي   :fire: :heart: 
 

https://discord.gg/HYXE6E**`,`**أهلآ وٰ سهلآ فيك يسعدنآ تواجدك وٰ نتمنى لك أجمل ‏الأوقات في السيرڤر‏ ✯♔
-
سيزداد سيرفرنا بالجّمال عند أنضمامك لقروبنـا حيـاك :heart:️. 

https://discord.gg/HYXE6E**`,`**سلام :hugging:
اتمنا تنوورنا بوجودك ي حلو ⚘:heart:
والله يسعدك :heart:
https://discord.gg/HYXE6E**`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
    
    client.login(process.env.BOT_TOKEN);
