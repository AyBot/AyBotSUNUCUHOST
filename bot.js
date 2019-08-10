
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')
const Client = new Discord.Client()


client.on('ready', () => {
  console.log(`Botun Olan ${client.user.tag}Aktifleştrildi :))`);
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('Selam! Nasılsın');
  }
  if (msg.content.toLowerCase() === '!davetlinki') {
        msg.channel.sendMessage('**https://discordapp.com/oauth2/authorize?client_id=605778135069229067&scope=bot&permissions=2146958591**');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('as');
  }
  if (msg.content.toLowerCase() === 'iyi') {
    msg.reply('Çok iyi o zaman!');
  }
  if (msg.content.toLowerCase() === 'kötü') {
    msg.reply('Ne Oldu Dostum Söylede Bi Çare Bulalım');
  }
  if (msg.content.toLowerCase() === 'napıyonuz') {
    msg.reply('Ne yapalım bazı **ARKADAŞLAR** çevrim içi **BAZILARI** ise çevrim dışı :grinning:');
  }
  if (msg.content.toLowerCase() === 'napıyonuz gençler') {
    msg.reply('Ne yapalım bazı **ARKADAŞLAR** çevrim içi **BAZILARI** ise çevrim dışı :grinning:');
  }
  if (msg.content.toLowerCase() === '!moderator') {
    msg.reply('!yardımcı botlar');
  }
  if (msg.content.toLowerCase() === '!yardımcı botlar') {
    msg.channel.sendMessage('**1-MC-AT //Küfür Engel//Link Engel//Ban Koruması//                                                                                                                                 2-FredBot //Müzik//                                                                                                                                                                                                                                      3-MEE6 Bot //Kısaca Bir Çok Şey//**');
  }
  if (msg.content.toLowerCase() === 'sıkıldım') {
    msg.reply('**Neden birisine mi canın sıkkın ??** ----**!evet**----- / -----**!hayir**----');
  }
  if (msg.content.toLowerCase() === '!hayir') {
    msg.reply('**TAMAM OZAMAN**');
  }
  if (msg.content.toLowerCase() === '!aysil 1') {
      msg.channel.bulkDelete(1);
      msg.channel.sendMessage('1 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 2') {
      msg.channel.bulkDelete(2);
      msg.channel.sendMessage('2 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 3') {
      msg.channel.bulkDelete(3);
      msg.channel.sendMessage('3 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 4') {
      msg.channel.bulkDelete(4);
      msg.channel.sendMessage('4 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 5') {
      msg.channel.bulkDelete(5);
      msg.channel.sendMessage('5 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 6') {
      msg.channel.bulkDelete(6);
      msg.channel.sendMessage('6 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 7') {
      msg.channel.bulkDelete(7);
      msg.channel.sendMessage('7 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 8') {
      msg.channel.bulkDelete(8);
      msg.channel.sendMessage('8 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 9') {
      msg.channel.bulkDelete(9);
      msg.channel.sendMessage('9 Adet Mesaj Sildim Sildiren')


  }
  if (msg.content.toLowerCase() === '!aysil 10') {
      msg.channel.bulkDelete(10);
      msg.channel.sendMessage('10 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 20') {
      msg.channel.bulkDelete(20);
      msg.channel.sendMessage('20 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 30') {
      msg.channel.bulkDelete(30);
      msg.channel.sendMessage('30 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 40') {
      msg.channel.bulkDelete(40);
      msg.channel.sendMessage('40 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 50') {
      msg.channel.bulkDelete(50);
      msg.channel.sendMessage('50 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 60') {
      msg.channel.bulkDelete(60);
      msg.channel.sendMessage('60 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 70') {
      msg.channel.bulkDelete(70);
      msg.channel.sendMessage('70 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 80') {
      msg.channel.bulkDelete(80);
      msg.channel.sendMessage('80 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 90') {
      msg.channel.bulkDelete(90);
      msg.channel.sendMessage('90 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!aysil 100') {
      msg.channel.bulkDelete(100);
      msg.channel.sendMessage('100 Adet Mesaj Sildim')


  }
  if (msg.content.toLowerCase() === '!hayır') {
    msg.reply('**TAMAM OZAMAN**');
  }
  if (msg.content.toLowerCase() === '!aysil') {
    msg.reply('**Silmem İçin Bir Sayı Girmelisin Örnek:: !aysil 100**');
  }
  if (msg.content.toLowerCase() === '!moderator') {
    msg.channel.sendMessage('**!at @Kişi**');
  }
  if (msg.content.toLowerCase() === '!moderator') {
    msg.channel.sendMessage('**!botbilgi**');
  }
  if (msg.content.toLowerCase() === '!moderator') {
        msg.channel.sendMessage('**!aysil 100**');
  }
  if (msg.content.toLowerCase() === '!moderator') {
        msg.channel.sendMessage('**!aysil yardımı**');
  }
  if (msg.content.toLowerCase() === 'https://discord.gg') {
    msg.channel.bulkDelete(1);
        msg.reply('**Reklam Vermek Yasak Kurallarda Reklam Vermek Yasak Yazıyor Okumadınmı!!:rage::rage:*');
  }
  if (msg.content.toLowerCase() === '!evet') {
    msg.reply('**Ne olduysa üzüldüm :confounded:**');
  }
  if (msg.content.toLowerCase() === 'aybot') {
    msg.reply('**Efendim!**');
  }
  if (msg.content.toLowerCase() === 'hmm') {
    msg.reply('**Aklında Ne Var Çok Merak Ediyorum Doğrusu**');
  }
  if (msg.content.toLowerCase() === 'hm') {
    msg.reply('**Aklında Ne Var Çok Merak Ediyorum Doğrusu**');
  }
  if (msg.content.toLowerCase() === 'hmmm') {
    msg.reply('**Aklında Ne Var Çok Merak Ediyorum Doğrusu**');
  }
  if (msg.content.toLowerCase() === 'hmm...') {
    msg.reply('**Aklında Ne Var Çok Merak Ediyorum Doğrusu**');
  }
  if (msg.content.toLowerCase() === 'bende iyiyim') {
    msg.reply('**Oldu o zaman ben kaçar! :joy:**');
  }
  if (msg.content.toLowerCase() === '!aysitesi') {
    msg.reply("**Sitemiz Bazı Tarayıcılarda Açmıyor Bilginiz Olsun**);                                                                           1.Yöntem https://www.aymerkez.weebly.com                                                                                                       ------- 2.Yöntem www.aymerkez.weebly.com");
  }
  if (msg.content.toLowerCase() === '!aysil yardımı') {
    msg.reply('**!aysil Komutunu Bu Şekillerde Kullanabilirsin Örnek: !aysil 5 Bu 5 mesaj siler en fazla da 100 mesaj silebilirim örnek:!aysil 100**');
  }
  if (msg.content.toLowerCase() === '!aykomut') {
    msg.reply('**Ben Komutları Geç Yazarsam Lütfen Beni Silme: Bazen DİSCORD sunucularında LAG oluyor**');
  }
  if (msg.content.toLowerCase() === '!aykomut') {
    msg.channel.sendMessage('**__KOMUTLAR__**                                                                                                                                                                         **!ayeylence😂**                                                                                                                                                                                                                                                                                                                                   **!ayküfür @ensonkavgaettiğimkişi:middle_finger:**                                                                                                                                                                                                   **!aysitesi🌐**                                                                                                                                                                                  **!ayhazırsunucu🖥️**                                                                                                                                                                     **!aysunucutavsiye🤟**                                                                                                                                                                                          **!ayyapımcı🏴󠁭󠁹󠀰󠀹󠁿󠁭󠁹󠀰**                                                                                                                                                                         **!ayabitamamsakin:pensive:**                                                                                                                                                                                 **Banlayınca Mesaj Gelmesi İçin Lütfen kanallarınıza     modlog         kanalı ekleyin**');
}
if (msg.content.toLowerCase() === '!aykomut') {
      msg.channel.sendMessage('**!moderator**');
}
if (msg.content.toLowerCase() === '!aykomut') {
  msg.channel.sendMessage('**!davetlinki**');
}
if (msg.content.toLowerCase() === '!ayeylence') {
      msg.reply('__**EYLENCE KOMUTLARI**__                                                                                                                                                  !kandırdımxd                                                                                                                                                                                  !yanıyosunfuatabi                                                                                                                                                                 !uzunespri                                                                                                                                                                                        !lantikerim');
}
if (msg.content.toLowerCase() === '!kandırdımxd') {
  msg.reply('**--------------------- KANDIRDIM TATLI CANİKOM -----------------------------**                                                                                                          :joy: :joy: :joy:                                                                                                                                                            https://www.youtube.com/watch?v=GxKyAuxUpkA');
}
if (msg.content.toLowerCase() === '!yanıyosunfuatabi') {
  msg.reply('**------------------------- YANIYOSUN FUAT ABEYYYYY -----------------------                                                                                                              :joy: :joy: :joy: :joy:                                                                                                                                                      https://www.youtube.com/watch?v=roq4cgowuSs**');
}
if (msg.content.toLowerCase() === '!uzunespri') {
  msg.reply('**ALMANYADA ALMANLAR YAŞIYOSA SAKARYADA DA SAKARLARMI YAŞIYO**                                                 -------------------------------------------------XD-----------------------------------------------------                                                                                              :joy: :joy: :joy: :joy:                                                                                                                                                      https://www.youtube.com/watch?v=kxgsEnoxfWc');
}
if (msg.content.toLowerCase() === '!lantikerim') {
  msg.reply('**-----------LAN SİKERİM KEKERE MEKERENİ PARAMI GERİ VER------------                                                                                                                     :joy: :joy: :joy: :joy:                                                                                                                                                      https://www.youtube.com/watch?v=csKaPJXi86U');
}
if (msg.channel.sendMessage() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.reply('**Ben Senin gelmişini geçmişini geleceğini sülaleni ananı babanı teyzeni 7 sülalenin ELLERİNDEN sikerim AMKODUĞMUN ÇOCUĞU**');
}
if (msg.channel.sendMessage() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.reply('');
}
if (msg.content.toLowerCase() === '!ayhazırsunucu') {
  msg.reply('**Hazır sunucu yapmak için önce CLYDE botunu davet etmen gerekiyor davet linki bu >>https://discordapp.com/oauth2/authorize?client_id=536953835361665024&scope=bot&permissions=805314618<< bu botu davet ettikten sonra şu komutları yaz                <sunucukur                            sonra   da                     evet                            yazın ve hazır sunucunuz oluşmuştur**');
}
if (msg.content.toLowerCase() === '!aysunucutavsiye') {
  msg.reply('**Bence sunucuna daha da içerikler ve şekiller eklemelisin sunucu örneği için şu linke git hemde bu linkte sende yer alabilirsin BENİM YAPIMCIMIN SUNUCUSU :white_check_mark: >>https://discord.gg/TU87PnN<<     >>https://discord.gg/2NhKGMJ<<**');
}
if (msg.content.toLowerCase() === '!ayyapımcı') {
  msg.reply('**YAPIMCIM**                                                                                                                                           kullanıcı adı   ⚠Arda77ay⚠ dır. Esas adı ARDA dır.//// kullanıcı adı ! 𝔼𝕄ℙ ☜☯☞qRowlinq☜☯☞ dir. Esas adı MUSTAFA dır.');
}
if (msg.content.toLowerCase() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.channel.sendMessage('**seni bi sikerim bluetooh un hata verir kapsama alanın genişler.**');
}
if (msg.content.toLowerCase() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.channel.sendMessage('**ananın amını keserim cebime koyarım sıkıldıkça sikerim.**');
}
if (msg.content.toLowerCase() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.channel.sendMessage('**o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin.**');
}
if (msg.channel.sendMessage() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.channel.sendMessage('**ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü.**');
}
if (msg.content.toLowerCase() === '!ayküfür @ensonkavgaettiğimkişi') {
  msg.channel.sendMessage('**ananın amını önce yalar sonra da   SİKERİM!**');
}
if (msg.content.toLowerCase() === '!ayabitamamsakin') {
  msg.reply('**Abi tamam sinirlenme yaa sakin ol yaptık bi hata affet işte ne olcak bi daha yapmam söz abi lütfen affet beni yaptım işte bi hata biliyorum malım affet nolur abi :tired_face: **');
}
if (msg.content.toLowerCase() === 'lan') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'yavşak') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'yavsak') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'amk') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'amına') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'amınakoduğumun') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'ananısikim') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'ananınamı') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'ananısikerim') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'ananıyatakta') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'ananıyataktasikerim') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'amınakoyim') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'ananısıkım') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senin amına korum') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senin amına korum çocuk') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senin amına korum cocuk') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'snn amına korum') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senn amına korum') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senin amina korum') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senin amina korum cocuk') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'senin amina korum çocuk') {
  msg.channel.bulkDelete(1);
  msg.reply('**Küfür yasak bunu bilmiyormusun :speaking_head: **');
}
if (msg.content.toLowerCase() === 'sıkıldım yaa') {
  msg.reply('**Neden birisine mi canın sıkkın ??** ----**!evet**----- / -----**!hayir**----');
}
if (msg.content.toLowerCase() === 'sıkıldım yaaa') {
  msg.reply('**Neden birisine mi canın sıkkın ??** ----**!evet**----- / -----**!hayir**----');
}
if (msg.content.toLowerCase() === 'sıkıldım ya') {
  msg.reply('**Neden birisine mi canın sıkkın ??** ----**!evet**----- / -----**!hayir**----');
}
if (msg.content.toLowerCase() === '!at') {
  msg.reply('**Üyeyi Atmam İçin Bir Kişi Etiketle ÖRNEK: !at @Kişi **');
}
if (msg.content.toLowerCase() === '!botbilgi') {
  msg.reply('**Beni Esas Yapan Kişi ARDA adlı kişidir discord da nicki:Arda77ay dır VE SON OLARAK --BENİ EKLEDİĞİN İÇİN SANA TEŞEKKÜR EDERİM-- **');
}
if (msg.content.toLowerCase() === 'https://dis') {
  msg.reply('**reklamyasakkk**');
}

const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Tamamdır!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!at')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Attım Bu Kişiyi! ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Üyeyi Atamadım Ya Benim Rütbeme YÖNET eklemelisin Ya da atacağım kişinin rütbesini benden alt rütbeye koymalısın');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('ATMAK İÇİN BİR KULLANICI ETİKETLEMELİSİN   ÖRNEK: !at @clyde');
    }
  }
});

client.login('NjA1Nzc4MTM1MDY5MjI5MDY3.XUBdEA.MLkULnGEKwpvOh7ZY59zsyrP8QE');



client.on('ready', () => {
  console.log('Tamamlandı/Succesfull!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'ortak');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`**Hoşgeldin,** ${member} **Umarım İyi Vakit Geçirirsin Kurallara Bakmayı Unutma Lazım Olucak :smiley:** `);
  msg.channel.bulkDelete(1);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NjA1Nzc4MTM1MDY5MjI5MDY3.XUBdEA.MLkULnGEKwpvOh7ZY59zsyrP8QE');





if (msg.content.toLowerCase() === `https:${msg.content}`) {
  msg.channel.bulkDelete(1);
  msg.reply('**Reklamlar SHOW TV**');
}








});
client.on('guildBanAdd' , (guild, user) => {
  let modlog = guild.channels.find('name', 'modlog');
  if (!modlog) return;
  modlog.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!**           '+ user.username +'**Bakıyorumda Yasaklanan Kişi Bir Daha Yapmayacak Gibi Ama Suçunun Cezasını Çekmeli** :fist: :writing_hand:  :spy:' );

});
client.login('NjA1Nzc4MTM1MDY5MjI5MDY3.XUBdEA.MLkULnGEKwpvOh7ZY59zsyrP8QE');
