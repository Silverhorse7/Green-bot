const KongouCommand=require("../../abstract/KongouCommand.js"),userData=require("../../models/user");class Queue extends KongouCommand{get name(){return"pl-view"}get description(){return"Shows informations about a specific playlist!"}get aliases(){return["pl-v","view-pl"]}get category(){return"Everyone Commands"}get arguments(){return[{name:"playlist_name",description:"The name of the playlist you want to play",required:!0}]}async run({ctx:e}){const t=e.args.join(" "),n=await userData.findOne({userID:e.author.id});if("liked-songs"===t){if(!n.songs.length)return e.errorMessage("You don't have any liked song yet!");if(n.songs.length>6){let t=0,o=6,s=1;const i=await e.channel.send({embeds:[{description:"You can like a song by clicking the button behing the song.\nYou can play your liked songs using the `"+e.guildDB.prefix+"pl-p liked-songs` command",author:{name:"Your liked songs",icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+n.songs.length+" / 10)",value:n.songs.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(0,6).join("\n")}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]}),a=e=>"back_queue"===e.customId||"next_queue"===e.customId,u=i.createMessageComponentCollector({filter:a,time:12e4});u.on("collect",async a=>{if(a.user.id!==e.author.id)return a.deleteReply();if("back_queue"===a.customId){if(o-=6,s-=1,(t-=6)<0)return;if(s<1)return;let a=n.songs.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(t,o).join("\n");i.edit({embeds:[{description:"You can like a song by clicking the button behing the song.",author:{name:"Your liked songs",icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+n.songs.length+" songs)",value:a}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]})}if("next_queue"===a.customId){if(t+=6,s+=1,(o+=6)>n.songs.length+6)return;if(t<0)return;let a=n.songs.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(t,o).join("\n");i.edit({embeds:[{description:"You can like a song by clicking the button behing the song.",author:{name:"Your liked songs",icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+n.songs.length+" songs)",value:a}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]})}a.deleteReply()}),u.on("end",async t=>{i.edit({embeds:[{description:"You can like a song by clicking the button behing the song.",author:{name:"Your liked songs",icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+n.songs.length+" songs)",value:n.songs.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(0,6).join("\n")}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",disabled:!0,customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",disabled:!0,customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]})})}else e.channel.send({embeds:[{description:"You can like a song by clicking the button behing the song.\nYou can play your liked songs using the `"+e.guildDB.prefix+"pl-p liked-songs` command",author:{name:"Your liked songs",icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+n.songs.length+" songs)",value:"Songs:\n"+n.songs.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).join("\n")}],color:"#3A871F"}]})}else{if(!n||!n.playlists.find(e=>e.name===t))return e.errorMessage("You don't have any playlist with this name!");const o=n.playlists.find(e=>e.name===t),s=o.tracks;if(s.length>6){let t=0,n=6,i=1;const a=await e.channel.send({embeds:[{description:"You can play your playlist using the `"+e.guildDB.prefix+"pl-p "+o.name+"` command",author:{name:o.name,icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+s.length+" songs)",value:s.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(0,6).join("\n")}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]}),u=e=>"back_queue"===e.customId||"next_queue"===e.customId,l=a.createMessageComponentCollector({filter:u,time:12e4});l.on("collect",async u=>{if(u.user.id!==e.author.id)return u.deleteReply();if("back_queue"===u.customId){if(console.log("got back"),n-=6,i-=1,(t-=6)<0)return;if(i<1)return;let u=s.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(t,n).join("\n");a.edit({embeds:[{description:"You can play your playlist using the `"+e.guildDB.prefix+"pl-p "+o.name+"` command",author:{name:o.name,icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+s.length+" songs)",value:u}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]})}if("next_queue"===u.customId){if(console.log("got next"),t+=6,i+=1,(n+=6)>s.length+6)return console.log(n),console.log(s.length+6);if(t<0)return;let u=s.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).slice(t,n).join("\n");a.edit({embeds:[{description:"You can play your playlist using the `"+e.guildDB.prefix+"pl-p "+o.name+"` command",author:{name:o.name,icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+s.length+" songs)",value:u}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]})}u.deleteReply()}),l.on("end",async t=>{a.edit({embeds:[{description:"You can play your playlist using the `"+e.guildDB.prefix+"pl-p "+o.name+"` command",author:{name:o.name,icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+s.length+" songs)",value:s.slice(0,6).map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).join("\n")}],color:"#3A871F"}],components:[{components:[{emoji:"⏮",disabled:!0,customId:"back_queue",style:2,type:"BUTTON"},{emoji:"⏭",disabled:!0,customId:"next_queue",style:2,type:"BUTTON"}],type:"ACTION_ROW"}]})})}else e.channel.send({embeds:[{description:"You can play your playlist using the `"+e.guildDB.prefix+"pl-p "+o.name+"` command",author:{name:o.name,icon_url:e.author.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• List ("+s.length+" songs)",value:"Songs:\n"+s.map((e,t)=>`**${t+1})** [${e.info.title}](https://green-bot.app) by [${e.info.author?e.info.author:"Unknow artist"}](https://green-bot.app)`).join("\n").slice(0,6)}],color:"#3A871F"}]})}}}module.exports=Queue;