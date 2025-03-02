const {
  cmd,
  commands
} = require("../lib/command");
const scraper = require("../lib/scraperd");
const axios = require("axios");
const fetch = require("node-fetch");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require('../lib/database');
var {
  get_set,
  input_set
} = require('../lib/set_db');
const {
  lookup
} = require("mime-types");
const fs = require('fs');
const path = require('path');
const yts = require("yt-search");
const cheerio = require("cheerio");
const {
  ytsearch,
  ytmp3,
  ytmp4
} = require("@dark-yasiya/yt-dl.js");
const config = require("../settings");
const xml2js = require("xml2js");
const {
  updateEnv,
  readEnv
} = require("../lib/database");
const os = require('os');
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  igdl
} = require("ruhend-scraper");
const si = require("systeminformation");
const g_i_s = require('g-i-s');
let {
  img2url
} = require("@blackamda/telegram-image-url");
const nexara = require("@dark-yasiya/nexara");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const qtoko = {
  'key': {
    'remoteJid': "status@broadcast",
    'participant': "0@s.whatsapp.net"
  },
  'message': {
    'extendedTextMessage': {
      'text': "𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 🍃"
    }
  }
};
cmd({
  'on': "body"
}, async (_0x183e68, _0x32f43d, _0x18ec2d, {
  from: _0x15a2b0,
  body: _0x26024a,
  isGroup: _0x5e8018,
  isAdmins: _0x375bd3,
  isBotAdmins: _0x4374ab,
  reply: _0x43f605,
  sender: _0x408e84
}) => {
  try {
    if (config.AUTO_BIO === "true") {
      await _0x183e68.updateProfileStatus("𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐒𝐦𝐨𝐨𝐭𝐡𝐥𝐲...");
    }
    if (config.AUTO_TYPING === "true") {
      await _0x183e68.sendPresenceUpdate("composing", _0x32f43d.key.remoteJid);
    }
    if (config.RECORDING === "true") {
      await _0x183e68.sendPresenceUpdate("recording", _0x32f43d.key.remoteJid);
    }
    if (config.ALWAYS_ONLINE === "true") {
      await _0x183e68.sendPresenceUpdate("available", _0x32f43d.key.remoteJid);
    } else {
      await _0x183e68.sendPresenceUpdate("unavailable", _0x32f43d.key.remoteJid);
    }
  } catch (_0x490d4e) {
    console.error("Error processing message:", _0x490d4e);
    _0x43f605("An error occurred while processing your message. Please try again later.");
  }
});
cmd({
  'on': "body"
}, async (_0x4402d0, _0x355a99, _0x240b3d, {
  from: _0x4d38e9,
  body: _0x5e11af,
  isOwner: _0x513898
}) => {
  const _0x3ee412 = {
    '.menu': "https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autovoice/PTT-20241110-WA0033.m4a",
    'whois': "https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autovoice/PTT-20241110-WA0033.m4a",
    'hlo': 'https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autovoice/AUD-20241110-WA0009.m4a',
    'hi': 'https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autovoice/AUD-20241110-WA0009.m4a',
    'hello': "https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autovoice/AUD-20241110-WA0009.m4a",
    'molning': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/good_morning.mp3",
    "good morning": "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/good_morning.mp3",
    'night': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/good_night.mp3",
    "good night": 'https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/good_night.mp3',
    'hm': 'https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/hm.mp3',
    'hmm': "https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/hm.mp3",
    'aww': "https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/hm.mp3",
    'oye': "https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/oya_kawada.mp3",
    'ustad': "https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/oya_kawada.mp3",
    'haha': "https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/oya_kawada.mp3",
    'hehe': "https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/Ponnaya(tbg).mp3",
    'oka': 'https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/kawa.mp3',
    'wow': 'https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/kellek%20oni.mp3',
    'geo': "https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/wesi(tbg).mp3",
    "I love you": "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/i_love_you.mp3",
    'love': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/i_love_you.mp3",
    "love you": "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/i_love_you.mp3",
    'ohh': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/i_love_you.mp3",
    'dear': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3",
    'sir': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3",
    'sobx': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3",
    'nice': 'https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3',
    'bye': 'https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3',
    'by': "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3"
  };
  try {
    for (const _0x2679df in _0x3ee412) {
      if (_0x5e11af.toLowerCase() === _0x2679df.toLowerCase()) {
        if (config.AUTO_VOICE === "true") {
          await _0x4402d0.sendPresenceUpdate("recording", _0x4d38e9);
          await _0x4402d0.sendMessage(_0x4d38e9, {
            'audio': {
              'url': _0x3ee412[_0x2679df]
            },
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': qtoko
          });
          break;
        }
      }
    }
  } catch (_0x2c2de7) {
    console.error("Error in auto voice:", _0x2c2de7);
  }
});
cmd({
  'on': "body"
}, async (_0x15a3bf, _0x4f450e, _0x954651, {
  from: _0x254157,
  body: _0x530c87,
  isOwner: _0x1434b4
}) => {
  const _0x3292c6 = {
    'bye': "https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autosticker/STK-20241108-WA0028.webp",
    'love': 'https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autosticker/STK-20241110-WA0007.webp',
    'usman': "https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autosticker/STK-20241110-WA0008.webp",
    'silent': "https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autosticker/STK-20241110-WA0004.webp",
    'hi': 'https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autosticker/STK-20241110-WA0002.webp'
  };
  try {
    for (const _0x3e8893 in _0x3292c6) {
      if (_0x530c87.toLowerCase() === _0x3e8893.toLowerCase()) {
        if (config.AUTO_STICKER === "true") {
          await _0x15a3bf.sendMessage(_0x254157, {
            'sticker': {
              'url': _0x3292c6[_0x3e8893]
            },
            'package': "Didula MD V2"
          }, {
            'quoted': qtoko
          });
          break;
        }
      }
    }
  } catch (_0xa35e6c) {
    console.error("Error in auto sticker:", _0xa35e6c);
  }
});
cmd({
  'on': 'body'
}, async (_0x305548, _0x15c4d2, _0x37efb0, {
  from: _0x52e029,
  body: _0x5c5c4e,
  isOwner: _0x3aaab5
}) => {
  const _0x22bb09 = {
    'hi': "*හායි අලෙහ් 🌝💗*",
    'හුත්තෝ': "*ඇයි හුත්තෝ💗*",
    'hey': "*hey cudu 🌝*",
    'umma': "*ummmmmmmmmmmmmmmmaa🌝😁*",
    'ok': "*HMMM*😊♥️",
    'Okey': "*AHMM*💙🥲",
    "love you": "*LOVE YOU TOO...🥺💙*",
    "good morning": "*MOLNING JAAN...❤️*",
    'sad': "*😪🥺why*",
    'Didula-MD': "Created By Didula Rashmika",
    'hello': "*Hello darling 💫*",
    'hii': "*Hii sweetheart 🌸*",
    'morning': "*Good morning sunshine ☀️*",
    'night': "*Good night sweet dreams 🌙✨*",
    'bye': "*Bye bye take care 💝*",
    "i love you": "*I love you more baby 💘*",
    'ily': "*Love you too cutie 💕*",
    "miss you": "*Miss you more sweetheart 💗*",
    "hate you": "*But I still love you 🥺*",
    "good night": "*Sweet dreams angel 🌟*",
    'gn': "*Nighty night 😴💫*",
    'gm': "*Rise and shine 🌅*",
    "how are you": "*I'm good, how about you? 💖*",
    "what's up": "*Everything's cool, wbu? ✨*",
    'who': "*Your virtual bestie 😊*",
    "thank you": "*You're welcome lovely 🌺*",
    'thanks': "*Anytime dear 🌸*",
    'omg': "*Oh my goodness! 😲*",
    'wow': "*Amazing right? ✨*",
    'lol': "*Hehe funny right? 😄*",
    'nice': "*Indeed! 💫*",
    'cool': "*Super cool! 🌟*",
    'බායි': "*බායි බායි මැණික 💕*",
    'කෝමද': "*හොදින් ඉන්නවා ඔයා කෝමද? 💗*",
    'හා': "*හ්ම්ම්ම් 🌝*",
    'මොකද': "*ඔයා ගැන හිතන්නෙ 💭*",
    'ආදරෙයි': "*මමත් ඔයාට ආදරෙයි 💘*",
    'zzz': "*Sleepy time? 😴*",
    'uwu': "*UwU cutie 🥰*",
    'ofc': "*Of course! 💫*",
    'sure': "*Definitely! ✨*",
    'really': "*Yes really! 💝*",
    'why': "*Why not? 😊*",
    'hru': "*I'm fantastic, you? 🌟*",
    'wassup': "*Chillin like a villain 😎*",
    'sup': "*What's cooking good looking? ✨*",
    'xd': "*Hehehehe 😄*",
    'gtg': "*Take care, see ya! 👋*",
    'brb': "*I'll wait for you! 💕*",
    'afk': "*Come back soon! 🌸*",
    'idk': "*Let's figure it out together! 💭*",
    'bored': "*Let me entertain you! 🎭*",
    'tired': "*Take some rest dear 😴*",
    'hungry': "*Eat something yummy! 🍜*",
    'help': "*I'm here to help! 💫*",
    'busy': "*Take your time! ⌛*",
    'sorry': "*It's okay darling 💝*",
    'cry': "*Don't cry, I'm here 🥺*",
    'happy': "*Yay! Keep smiling! 😊*",
    'mad': "*Take a deep breath 😤*"
  };
  try {
    for (const _0x3825e1 in _0x22bb09) {
      if (_0x5c5c4e.toLowerCase() === _0x3825e1.toLowerCase()) {
        if (config.AUTO_REPLY === "true") {
          await _0x37efb0.reply(_0x22bb09[_0x3825e1]);
          break;
        }
      }
    }
  } catch (_0x47a0ea) {
    console.error("Error in auto reply:", _0x47a0ea);
  }
});
cmd({
  'pattern': "video",
  'alias': ["ytmp4", "play"],
  'react': '🎥',
  'desc': "Download Youtube video",
  'category': "download",
  'use': ".video < Yt url or Name >",
  'filename': __filename
}, async (_0x34aba5, _0x11cdef, _0x3b8e9e, {
  from: _0x2a02e7,
  prefix: _0x29bd37,
  quoted: _0x799d4b,
  q: _0x251e24,
  reply: _0x4f4e5b
}) => {
  try {
    if (!_0x251e24) {
      return await _0x4f4e5b("⚠️ Please provide a YouTube URL or video name!");
    }
    const _0x24cfe0 = await ytsearch(_0x251e24);
    if (_0x24cfe0.results.length < 0x1) {
      return _0x4f4e5b("❌ No results found!");
    }
    let _0x5e9a17 = _0x24cfe0.results[0x0];
    let _0x38fd81 = 'https://api.skyzopedia.us.kg/api/download/ytmp4?url=' + encodeURIComponent(_0x5e9a17.url);
    let _0x2a5d13 = await fetch(_0x38fd81);
    let _0x3493e1 = await _0x2a5d13.json();
    let _0x12cf4a = _0x3493e1.download.video;
    let _0x174b47 = "╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷\n┃▸╭─────────────────\n┃▸┃ 📽️ *VIDEO DOWNLOADER*\n┃▸└─────────────────···\n╰──────────────────────┈⊷\n╭━━❐━⪼\n┇📌 *Title:* " + _0x5e9a17.title + "\n┇⏱️ *Duration:* " + _0x5e9a17.timestamp + "\n┇👀 *Views:* " + _0x5e9a17.views + "\n┇👤 *Author:* " + _0x5e9a17.author.name + "\n┇🔗 *Link:* " + _0x5e9a17.url + "\n╰━━❑━⪼\n\n*💫 Quality Video Downloader By Didula MD V2*";
    await _0x34aba5.sendMessage(_0x2a02e7, {
      'image': {
        'url': _0x5e9a17.thumbnail
      },
      'caption': _0x174b47
    }, {
      'quoted': qtoko
    });
    await _0x34aba5.sendMessage(_0x2a02e7, {
      'video': {
        'url': _0x12cf4a
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': qtoko
    });
    await _0x34aba5.sendMessage(_0x2a02e7, {
      'document': {
        'url': _0x12cf4a
      },
      'mimetype': "video/mp4",
      'fileName': _0x5e9a17.title + ".mp4",
      'caption': "🎥 *" + _0x5e9a17.title + "*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2"
    }, {
      'quoted': qtoko
    });
  } catch (_0x747e31) {
    console.log(_0x747e31);
    _0x4f4e5b("❌ An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "song",
  'alias': ["ytdl3", 'yta'],
  'react': '🎵',
  'desc': "Download Youtube song",
  'category': "download",
  'use': ".song < Yt url or Name >",
  'filename': __filename
}, async (_0x35a91b, _0x48c634, _0x26515f, {
  from: _0x57f98d,
  prefix: _0x2a3886,
  quoted: _0x44fd58,
  q: _0x45fe4b,
  reply: _0x29d90a
}) => {
  try {
    if (!_0x45fe4b) {
      return await _0x29d90a("⚠️ Please provide a YouTube URL or song name!");
    }
    const _0x4ffb45 = await ytsearch(_0x45fe4b);
    if (_0x4ffb45.results.length < 0x1) {
      return _0x29d90a("❌ No results found!");
    }
    let _0x3dc9fd = _0x4ffb45.results[0x0];
    let _0x282def = "https://api.skyzopedia.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x3dc9fd.url);
    let _0x5c247e = await fetch(_0x282def);
    let _0x4d48fd = await _0x5c247e.json();
    let _0x223705 = _0x4d48fd.download.audio;
    let _0x4f7dbd = "╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷\n┃▸╭─────────────────\n┃▸┃ 🎵 *MUSIC DOWNLOADER*\n┃▸└─────────────────···\n╰──────────────────────┈⊷\n╭━━❐━⪼\n┇🎧 *Title:* " + _0x3dc9fd.title + "\n┇⏱️ *Duration:* " + _0x3dc9fd.timestamp + "\n┇👀 *Views:* " + _0x3dc9fd.views + "\n┇👤 *Author:* " + _0x3dc9fd.author.name + "\n┇🔗 *Link:* " + _0x3dc9fd.url + "\n╰━━❑━⪼\n\n*💫 High Quality Audio By Didula MD V2*";
    await _0x35a91b.sendMessage(_0x57f98d, {
      'image': {
        'url': _0x3dc9fd.thumbnail
      },
      'caption': _0x4f7dbd
    }, {
      'quoted': qtoko
    });
    await _0x35a91b.sendMessage(_0x57f98d, {
      'audio': {
        'url': _0x223705
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': qtoko
    });
    await _0x35a91b.sendMessage(_0x57f98d, {
      'document': {
        'url': _0x223705
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x3dc9fd.title + ".mp3",
      'caption': "🎵 *" + _0x3dc9fd.title + "*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2"
    }, {
      'quoted': qtoko
    });
  } catch (_0x1a7811) {
    console.log(_0x1a7811);
    _0x29d90a("❌ An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "songc",
  'alias': ['ytdl3', "yta"],
  'react': '🎵',
  'desc': "Download Youtube song as voice note",
  'category': 'download',
  'use': ".songc < Yt url or Name >",
  'filename': __filename
}, async (_0x3e2370, _0x2e5c5b, _0x30ac55, {
  from: _0x592c10,
  prefix: _0xb98a16,
  quoted: _0x1c881c,
  q: _0x1ec603,
  reply: _0x2ca045
}) => {
  try {
    if (!_0x1ec603) {
      return await _0x2ca045("⚠️ Please provide a YouTube URL or song name!");
    }
    const _0x267c01 = await ytsearch(_0x1ec603);
    if (_0x267c01.results.length < 0x1) {
      return _0x2ca045("❌ No results found!");
    }
    let _0x3ce2df = _0x267c01.results[0x0];
    let _0x321dbb = "https://api.skyzopedia.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x3ce2df.url);
    let _0x240a2a = await fetch(_0x321dbb);
    let _0x2469e4 = await _0x240a2a.json();
    let _0x863357 = _0x2469e4.download.audio;
    let _0x51f3e7 = "╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷\n┃▸╭─────────────────\n┃▸┃ 🎵 *MUSIC DOWNLOADER*\n┃▸└─────────────────···\n╰──────────────────────┈⊷\n╭━━❐━⪼\n┇🎧 *Title:* " + _0x3ce2df.title + "\n┇⏱️ *Duration:* " + _0x3ce2df.timestamp + "\n┇👀 *Views:* " + _0x3ce2df.views + "\n┇👤 *Author:* " + _0x3ce2df.author.name + "\n┇🔗 *Link:* " + _0x3ce2df.url + "\n╰━━❑━⪼\n\n*💫 High Quality Audio By Didula MD V2*";
    await _0x3e2370.sendMessage(_0x592c10, {
      'image': {
        'url': _0x3ce2df.thumbnail
      },
      'caption': _0x51f3e7
    }, {
      'quoted': qtoko
    });
    await _0x3e2370.sendMessage(_0x592c10, {
      'audio': {
        'url': _0x863357
      },
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': qtoko
    });
  } catch (_0x7102e0) {
    console.log(_0x7102e0);
    _0x2ca045("❌ An error occurred. Please try again later.");
  }
});
const createDivider = () => {
  return "┏━━━━━━━━━━━━━━━━━━━━━┓\n┃  Didula MD V2  ┃\n┗━━━━━━━━━━━━━━━━━━━━━┛";
};
const errorMessage = _0x44cb18 => {
  return "❌ *Error Occurred*\n\n" + (_0x44cb18.message || "An unexpected error occurred");
};
cmd({
  'pattern': "zoom",
  'desc': "Search content on zoom.lk",
  'category': "download",
  'react': '🔍',
  'filename': __filename
}, async (_0x4c5f70, _0x5ade04, _0x16f8c4, {
  from: _0x2c5086,
  args: _0x41253a,
  reply: _0x4d724e
}) => {
  try {
    if (!_0x41253a[0x0]) {
      return _0x4d724e("⚠️ *Please provide a search term!*");
    }
    const _0x5f2859 = _0x41253a.join(" ");
    const _0x20841c = "https://zoom.lk/?s=" + _0x5f2859;
    const _0x58f21d = await axios.get(_0x20841c);
    const _0x55344c = cheerio.load(_0x58f21d.data);
    const _0x42a44c = [];
    _0x55344c("div.td-pb-span8.td-main-content > div > div.td_module_16.td_module_wrap.td-animation-stack").each((_0x3f0245, _0x4a50c5) => {
      const _0x1d8e7f = _0x55344c(_0x4a50c5).find("div.item-details > div > span > time").text();
      const _0x350c9d = _0x55344c(_0x4a50c5).find("div.item-details > h3 > a").text();
      const _0x1572e3 = _0x55344c(_0x4a50c5).find("div.item-details > div > span > a").text();
      const _0x25a6b1 = _0x55344c(_0x4a50c5).find("div.item-details > div.td-excerpt").text();
      const _0x54c4fe = _0x55344c(_0x4a50c5).find("div.item-details > div > span.td-module-comments a").text();
      const _0x2df9de = _0x55344c(_0x4a50c5).find("div.td-module-thumb > img").attr("src");
      const _0x5461f5 = _0x55344c(_0x4a50c5).find("div.item-details > h3 > a").attr("href");
      _0x42a44c.push({
        'title': _0x350c9d,
        'link': _0x5461f5,
        'image': _0x2df9de,
        'author': _0x1572e3,
        'desc': _0x25a6b1,
        'comments': _0x54c4fe,
        'time': _0x1d8e7f
      });
    });
    if (_0x42a44c.length === 0x0) {
      return _0x4d724e("📭 *No results found!*");
    }
    let _0x31c202 = "┏━━━━━━━━━━━━━━━━━━━━━┓\n┃  Didula MD V2  ┃\n┗━━━━━━━━━━━━━━━━━━━━━┛\n\n";
    _0x31c202 += "🔍 *ZOOM SEARCH RESULTS*\n\n";
    _0x42a44c.forEach((_0x4ad681, _0x178e2c) => {
      _0x31c202 += _0x178e2c + 0x1 + ". *" + _0x4ad681.title + "* " + (_0x4ad681.time ? "\n⏰ Posted: " + _0x4ad681.time : '') + "\n";
      _0x31c202 += "👤 Author: " + _0x4ad681.author + "\n";
      _0x31c202 += "💭 Description: " + _0x4ad681.desc.trim() + "\n";
      _0x31c202 += "🔗 Link: " + _0x4ad681.link + "\n\n";
    });
    _0x31c202 += "\n💡 *To download, use:* .zoomdl <link>";
    await _0x4d724e(_0x31c202);
  } catch (_0x1ff42b) {
    console.error(_0x1ff42b);
    _0x4d724e("❌ *Error Occurred*\n\n" + (_0x1ff42b.message || "An unexpected error occurred"));
  }
});
cmd({
  'pattern': 'sinhala',
  'desc': "Search on SinhalaSub",
  'category': 'download',
  'react': '🔍',
  'filename': __filename
}, async (_0x4a08bb, _0x6cec43, _0x36fcbb, {
  from: _0x164d1a,
  args: _0x5663ff,
  reply: _0x14e76d
}) => {
  try {
    if (!_0x5663ff[0x0]) {
      return _0x14e76d("⚠️ *Please provide a search term!*");
    }
    const _0x42d0cc = 'https://sinhalasub.lk/?s=' + _0x5663ff.join(" ");
    const _0xec5682 = await axios.get(_0x42d0cc);
    const _0x4127ec = cheerio.load(_0xec5682.data);
    const _0x520cc7 = [];
    _0x4127ec("div.result-item").each((_0xb3299b, _0x3b5ef6) => {
      const _0x151f33 = _0x4127ec(_0x3b5ef6).find("div.title > a").attr("href");
      const _0x414fed = _0x4127ec(_0x3b5ef6).find("div.title > a").text();
      const _0x493779 = _0x4127ec(_0x3b5ef6).find('img').attr('src');
      const _0x5f6a5b = _0x4127ec(_0x3b5ef6).find("span.year").text();
      _0x520cc7.push({
        'title': _0x414fed,
        'link': _0x151f33,
        'image': _0x493779,
        'year': _0x5f6a5b
      });
    });
    if (_0x520cc7.length === 0x0) {
      return _0x14e76d("📭 *No results found!*");
    }
    let _0x50c24c = "┏━━━━━━━━━━━━━━━━━━━━━┓\n┃  Didula MD V2  ┃\n┗━━━━━━━━━━━━━━━━━━━━━┛\n\n";
    _0x50c24c += "🎬 *SINHALA SUB RESULTS*\n\n";
    _0x520cc7.forEach((_0x3cb69d, _0xc44383) => {
      _0x50c24c += _0xc44383 + 0x1 + ". *" + _0x3cb69d.title + "* " + (_0x3cb69d.year ? '(' + _0x3cb69d.year + ')' : '') + "\n";
      _0x50c24c += "🔗 Link: " + _0x3cb69d.link + "\n\n";
    });
    _0x50c24c += "\n💡 *To download, use:* .sinhaladl <link>";
    await _0x14e76d(_0x50c24c);
  } catch (_0x50b388) {
    console.error(_0x50b388);
    _0x14e76d("❌ *Error Occurred*\n\n" + (_0x50b388.message || "An unexpected error occurred"));
  }
});
cmd({
  'pattern': "zoomdl",
  'desc': "Download content from zoom.lk",
  'category': "download",
  'react': '📥',
  'filename': __filename
}, async (_0x37d787, _0x36a35a, _0x2f285b, {
  from: _0x6e3f43,
  args: _0x4ae167,
  reply: _0x11c5bf
}) => {
  async function _0x1e1c49(_0x58f96f) {
    try {
      var _0x37a388 = await axios.get(_0x58f96f);
      const _0x182579 = cheerio.load(_0x37a388.data);
      const _0x18e12e = _0x182579("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_title.tdi_60.tdb-single-title.td-pb-border-top.td_block_template_17 > div > h1").text();
      const _0x5f1e4d = _0x182579("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_64.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > ul > li > a").text();
      const _0x2dfe72 = _0x182579("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_67.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > span").text();
      const _0x413e3 = _0x182579("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_70.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > time").text();
      const _0x755918 = _0x182579("#tdi_81 > div > div.vc_column.tdi_84.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_single_content.tdi_86.td-pb-border-top.td_block_template_17.td-post-content.tagdiv-type > div > p > a > small").text();
      const _0x40ab8b = _0x182579("div.tdb-block-inner.td-fix-index > p > a").attr("href");
      return {
        'data': {
          'title': _0x18e12e,
          'size': _0x755918,
          'date': _0x413e3,
          'author': _0x5f1e4d,
          'view': _0x2dfe72,
          'dl_link': _0x40ab8b
        }
      };
    } catch (_0x32d7c6) {
      throw _0x32d7c6;
    }
  }
  try {
    if (!_0x4ae167[0x0]) {
      return _0x11c5bf("⚠️ *Please provide a zoom.lk link!*");
    }
    const _0x352556 = await _0x1e1c49(_0x4ae167[0x0]);
    if (!_0x352556.data.dl_link) {
      return _0x11c5bf("⚠️ *Download link not found!*");
    }
    let _0x363c48 = "┏━━━━━━━━━━━━━━━━━━━━━┓\n┃  Didula MD V2  ┃\n┗━━━━━━━━━━━━━━━━━━━━━┛\n\n";
    _0x363c48 += "📥 *DOWNLOAD INFORMATION*\n\n";
    _0x363c48 += "📝 *Title:* " + (_0x352556.data.title || "N/A") + "\n";
    _0x363c48 += "📦 *Size:* " + (_0x352556.data.size || 'N/A') + "\n";
    _0x363c48 += "📅 *Date:* " + (_0x352556.data.date || 'N/A') + "\n";
    _0x363c48 += "👤 *Author:* " + (_0x352556.data.author || "N/A") + "\n";
    _0x363c48 += "👁️ *Views:* " + (_0x352556.data.view || "N/A") + "\n\n";
    _0x363c48 += "🔗 *Download Link:*\n" + _0x352556.data.dl_link + "\n\n";
    _0x363c48 += "\n\n*✅ Download film using .dl <film download link>*\n\n*✅ Download film using .mega <film download link>*\n\n💫 _Powered by Didula MD V2_";
    await _0x11c5bf(_0x363c48);
  } catch (_0x1488a1) {
    console.error(_0x1488a1);
    _0x11c5bf("⚠️ *An error occurred while processing your request.*");
  }
});
cmd({
  'pattern': "getpp",
  'desc': "Fetch the profile picture of a tagged or replied user.",
  'category': "owner",
  'filename': __filename
}, async (_0x1c9435, _0x47f775, _0x1e8329, {
  quoted: _0xf01cc5,
  isGroup: _0x5e589a,
  sender: _0x4d62a0,
  participants: _0x47f5e5,
  reply: _0x5955fd
}) => {
  try {
    const _0x551e78 = _0xf01cc5 ? _0xf01cc5.sender : _0x4d62a0;
    if (!_0x551e78) {
      return _0x5955fd("⚠️ Please reply to a message to fetch the profile picture.");
    }
    const _0x419149 = await _0x1c9435.profilePictureUrl(_0x551e78, "image")["catch"](() => null);
    if (!_0x419149) {
      return _0x5955fd("⚠️ No profile picture found for the specified user.");
    }
    await _0x1c9435.sendMessage(_0x1e8329.chat, {
      'image': {
        'url': _0x419149
      },
      'caption': "🖼️ Here is the profile picture of the specified user."
    });
  } catch (_0x11f06d) {
    console.error("Error fetching user profile picture:", _0x11f06d);
    _0x5955fd("❌ An error occurred while fetching the profile picture. Please try again later.");
  }
});
cmd({
  'pattern': "menu",
  'react': '📜',
  'alias': ["list", "help", "commands"],
  'desc': "Get all commands list",
  'category': "general",
  'filename': __filename
}, async (_0x2e98b9, _0x1141e6, _0x23644d, {
  from: _0x2950e5,
  quoted: _0x1fb6fd,
  reply: _0x211a3c
}) => {
  try {
    const _0x8e4cbf = await _0x2e98b9.sendMessage(_0x2950e5, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*[ •  DIDULA-MD-V2 - MENU LIST‎ • ]*\n\n*─────────────────────────────*\n     *🍃ʙᴏᴛ ɴᴀᴍᴇ- ᴅɪᴅᴜʟᴀ ᴍᴅ*\n     *🍃ᴠᴇʀꜱɪᴏɴ - ᴠ2*\n     *🍃ᴏᴡɴᴇʀ - ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ*\n     *🍃ʀᴀᴍ - 32ɢʙ*\n     *🍃ʀᴜɴᴛɪᴍᴇ - 1ᴅᴀʏ, 32ʜ*\n*─────────────────────*\n\n*╭────────────*\n*│1. DOWNLOAD MENU*\n*│2. SEARCH MENU* \n*│3. CONVERTER MENU*\n*│4. OWNER MENU*\n*│5. GROUP MENU*\n*│6. OTHER MENU*\n*│7. MAIN MENU*\n*╰────────────*\n\n*📝 Send number to get the specific menu*\n*📝 Send  .allmenu to get  all commands*\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪᴅᴜʟᴀ ᴍᴅ*"
    }, {
      'quoted': qtoko
    });
    _0x2e98b9.ev.on("messages.upsert", async _0x25d1d9 => {
      const _0x3f4a95 = _0x25d1d9.messages[0x0];
      if (!_0x3f4a95.message || !_0x3f4a95.message.extendedTextMessage) {
        return;
      }
      const _0x1fa2f3 = _0x3f4a95.message.extendedTextMessage.text.trim();
      if (_0x3f4a95.message.extendedTextMessage.contextInfo && _0x3f4a95.message.extendedTextMessage.contextInfo.stanzaId === _0x8e4cbf.key.id) {
        switch (_0x1fa2f3) {
          case '1':
            _0x211a3c(".downloadmenu");
            break;
          case '2':
            _0x211a3c(".searchmenu");
            break;
          case '3':
            _0x211a3c(".convertmenu");
            break;
          case '4':
            _0x211a3c(".ownermenu");
            break;
          case '5':
            _0x211a3c(".groupmenu");
            break;
          case '6':
            _0x211a3c('.othermenu');
            break;
          case '7':
            _0x211a3c(".mainmenu");
            break;
          default:
            _0x211a3c("❌ Invalid option. Please select a number between 1-10.");
        }
      }
    });
  } catch (_0x338c9e) {
    console.error(_0x338c9e);
    await _0x2e98b9.sendMessage(_0x2950e5, {
      'react': {
        'text': '❌',
        'key': _0x1141e6.key
      }
    });
    _0x211a3c("An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "convertmenu",
  'desc': "Get convert commands",
  'category': "menu",
  'filename': __filename
}, async (_0x17ff08, _0x58f7b7, _0x174482, {
  from: _0x8930c3,
  quoted: _0x188f19,
  reply: _0x229c87
}) => {
  try {
    let _0x5749cf = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*CONVERT COMMANDS MENU*\n\n";
    let _0x3b73c1 = '';
    for (let _0x450ab3 = 0x0; _0x450ab3 < commands.length; _0x450ab3++) {
      if (commands[_0x450ab3].category === "convert") {
        if (!commands[_0x450ab3].dontAddCommandList) {
          _0x3b73c1 += "*🌟Command :* " + commands[_0x450ab3].pattern + "\n*⌛Desc :* " + commands[_0x450ab3].desc + "\n*📥Use:* " + commands[_0x450ab3].use + "\n\n";
        }
      }
    }
    if (_0x3b73c1.length === 0x0) {
      _0x229c87("*_No convert commands found._*");
      return;
    }
    _0x5749cf += _0x3b73c1;
    const _0x3b1cee = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x7012e4 = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x3b1cee
    };
    const _0x59fe67 = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x5749cf,
      'contextInfo': _0x7012e4
    };
    await _0x17ff08.sendMessage(_0x8930c3, _0x59fe67, {
      'quoted': qtoko
    });
  } catch (_0x2d062b) {
    console.log(_0x2d062b);
    _0x229c87("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "downloadmenu",
  'desc': "Get download commands",
  'category': "menu",
  'filename': __filename
}, async (_0x41c4b5, _0x3bcaf7, _0x277b8e, {
  from: _0x30cff4,
  quoted: _0x4b9b94,
  reply: _0x1dea38
}) => {
  try {
    let _0x5d1931 = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*DOWNLOAD COMMANDS MENU*\n\n";
    let _0x149e6c = '';
    for (let _0x40275e = 0x0; _0x40275e < commands.length; _0x40275e++) {
      if (commands[_0x40275e].category === "download") {
        if (!commands[_0x40275e].dontAddCommandList) {
          _0x149e6c += "*🌟Command :* " + commands[_0x40275e].pattern + "\n*⌛Desc :* " + commands[_0x40275e].desc + "\n*📥Use:* " + commands[_0x40275e].use + "\n\n";
        }
      }
    }
    if (_0x149e6c.length === 0x0) {
      _0x1dea38("*_No convert commands found._*");
      return;
    }
    _0x5d1931 += _0x149e6c;
    const _0x13d860 = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0xcc6519 = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x13d860
    };
    const _0x19a7e1 = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x5d1931,
      'contextInfo': _0xcc6519
    };
    await _0x41c4b5.sendMessage(_0x30cff4, _0x19a7e1, {
      'quoted': qtoko
    });
  } catch (_0x119da4) {
    console.log(_0x119da4);
    _0x1dea38("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "searchmenu",
  'desc': "Get search commands",
  'category': "menu",
  'filename': __filename
}, async (_0x37e0b1, _0x368a52, _0x582dd5, {
  from: _0x3a824a,
  quoted: _0x240f83,
  reply: _0xabb8b1
}) => {
  try {
    let _0x2e8a01 = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*SEARCH COMMANDS MENU*\n\n";
    let _0x3a9cb8 = '';
    for (let _0x619cbd = 0x0; _0x619cbd < commands.length; _0x619cbd++) {
      if (commands[_0x619cbd].category === 'search') {
        if (!commands[_0x619cbd].dontAddCommandList) {
          _0x3a9cb8 += "*🌟Command :* " + commands[_0x619cbd].pattern + "\n*⌛Desc :* " + commands[_0x619cbd].desc + "\n*📥Use:* " + commands[_0x619cbd].use + "\n\n";
        }
      }
    }
    if (_0x3a9cb8.length === 0x0) {
      _0xabb8b1("*_No search commands found._*");
      return;
    }
    _0x2e8a01 += _0x3a9cb8;
    const _0x353e8f = {
      'newsletterJid': '120363343196447945@newsletter',
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x201ef0 = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x353e8f
    };
    const _0xc70613 = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x2e8a01,
      'contextInfo': _0x201ef0
    };
    await _0x37e0b1.sendMessage(_0x3a824a, _0xc70613, {
      'quoted': qtoko
    });
  } catch (_0x38f6b8) {
    console.log(_0x38f6b8);
    _0xabb8b1("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "othermenu",
  'desc': "Get other commands",
  'category': "menu",
  'filename': __filename
}, async (_0x12a39f, _0x2dd030, _0x543959, {
  from: _0x208a1c,
  quoted: _0x3e19dc,
  reply: _0x31640e
}) => {
  try {
    let _0x25cd10 = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*OTHER COMMANDS MENU*\n\n";
    let _0x4ff82 = '';
    for (let _0x15582a = 0x0; _0x15582a < commands.length; _0x15582a++) {
      if (commands[_0x15582a].category === "other") {
        if (!commands[_0x15582a].dontAddCommandList) {
          _0x4ff82 += "*🌟Command :* " + commands[_0x15582a].pattern + "\n*⌛Desc :* " + commands[_0x15582a].desc + "\n*📥Use:* " + commands[_0x15582a].use + "\n\n";
        }
      }
    }
    if (_0x4ff82.length === 0x0) {
      _0x31640e("*_No other commands found._*");
      return;
    }
    _0x25cd10 += _0x4ff82;
    const _0x1cfb04 = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x1c683f = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x1cfb04
    };
    const _0x14e59e = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x25cd10,
      'contextInfo': _0x1c683f
    };
    await _0x12a39f.sendMessage(_0x208a1c, _0x14e59e, {
      'quoted': qtoko
    });
  } catch (_0x5844ff) {
    console.log(_0x5844ff);
    _0x31640e("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "ownermenu",
  'desc': "Get owner commands",
  'category': 'menu',
  'filename': __filename
}, async (_0x30878e, _0x86b9f9, _0x88924e, {
  from: _0xd2303c,
  quoted: _0xfb86b4,
  reply: _0x28df85
}) => {
  try {
    let _0xfc5ecc = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*OWNER COMMANDS MENU*\n\n";
    let _0x233e81 = '';
    for (let _0x179220 = 0x0; _0x179220 < commands.length; _0x179220++) {
      if (commands[_0x179220].category === 'owner') {
        if (!commands[_0x179220].dontAddCommandList) {
          _0x233e81 += "*🌟Command :* " + commands[_0x179220].pattern + "\n*⌛Desc :* " + commands[_0x179220].desc + "\n*📥Use:* " + commands[_0x179220].use + "\n\n";
        }
      }
    }
    if (_0x233e81.length === 0x0) {
      _0x28df85("*_No owner commands found._*");
      return;
    }
    _0xfc5ecc += _0x233e81;
    const _0x9ec99 = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x46d3d1 = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x9ec99
    };
    const _0x4525a5 = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0xfc5ecc,
      'contextInfo': _0x46d3d1
    };
    await _0x30878e.sendMessage(_0xd2303c, _0x4525a5, {
      'quoted': qtoko
    });
  } catch (_0xf66649) {
    console.log(_0xf66649);
    _0x28df85("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "groupmenu",
  'desc': "Get group commands",
  'category': 'menu',
  'filename': __filename
}, async (_0x2031ef, _0x191801, _0x312ea2, {
  from: _0x45cac8,
  quoted: _0x5e1cf9,
  reply: _0x4b45ae
}) => {
  try {
    let _0x198da8 = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*GROUP COMMANDS MENU*\n\n";
    let _0x225fb4 = '';
    for (let _0x7bd014 = 0x0; _0x7bd014 < commands.length; _0x7bd014++) {
      if (commands[_0x7bd014].category === 'group') {
        if (!commands[_0x7bd014].dontAddCommandList) {
          _0x225fb4 += "*🌟Command :* " + commands[_0x7bd014].pattern + "\n*⌛Desc :* " + commands[_0x7bd014].desc + "\n*📥Use:* " + commands[_0x7bd014].use + "\n\n";
        }
      }
    }
    if (_0x225fb4.length === 0x0) {
      _0x4b45ae("*_No group commands found._*");
      return;
    }
    _0x198da8 += _0x225fb4;
    const _0x5bad2d = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x4599ad = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x5bad2d
    };
    const _0x22912e = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x198da8,
      'contextInfo': _0x4599ad
    };
    await _0x2031ef.sendMessage(_0x45cac8, _0x22912e, {
      'quoted': qtoko
    });
  } catch (_0x282f57) {
    console.log(_0x282f57);
    _0x4b45ae("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': 'mainmenu',
  'desc': "Get main commands",
  'category': 'menu',
  'filename': __filename
}, async (_0x7291c3, _0x2c570f, _0x19e4b9, {
  from: _0x3dc9dd,
  quoted: _0x50a737,
  reply: _0x274b37
}) => {
  try {
    let _0x461251 = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓ \n\n*MAIN COMMANDS MENU*\n\n";
    let _0x1e104d = '';
    for (let _0xef5ba8 = 0x0; _0xef5ba8 < commands.length; _0xef5ba8++) {
      if (commands[_0xef5ba8].category === "main") {
        if (!commands[_0xef5ba8].dontAddCommandList) {
          _0x1e104d += "*🌟Command :* " + commands[_0xef5ba8].pattern + "\n*⌛Desc :* " + commands[_0xef5ba8].desc + "\n*📥Use:* " + commands[_0xef5ba8].use + "\n\n";
        }
      }
    }
    if (_0x1e104d.length === 0x0) {
      _0x274b37("*_No main commands found._*");
      return;
    }
    _0x461251 += _0x1e104d;
    const _0x4b1e33 = {
      'newsletterJid': '120363343196447945@newsletter',
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x531ddc = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x4b1e33
    };
    const _0x7025d1 = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x461251,
      'contextInfo': _0x531ddc
    };
    await _0x7291c3.sendMessage(_0x3dc9dd, _0x7025d1, {
      'quoted': qtoko
    });
  } catch (_0x45af4f) {
    console.log(_0x45af4f);
    _0x274b37("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "allmenu",
  'alias': ['list', "help", "commands"],
  'desc': "Get all commands list",
  'category': "general",
  'filename': __filename
}, async (_0x8503ce, _0x33d3e7, _0xb8b2c1, {
  from: _0x42d5f9,
  quoted: _0x3dee4c,
  reply: _0x341f2a
}) => {
  try {
    let _0x1619f8 = "┏━━━━━━━❏ *⌜ 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃-𝐕𝟐 ⌟* ❏━━━━━━━━┓\n\n";
    const _0x4ec0b8 = ["main", "download", "convert", "search", 'group', "owner", "other"];
    for (const _0x4ee329 of _0x4ec0b8) {
      _0x1619f8 += '*' + _0x4ee329.toUpperCase() + " COMMANDS*\n\n";
      let _0x5f1945 = '';
      for (let _0x56c112 = 0x0; _0x56c112 < commands.length; _0x56c112++) {
        if (commands[_0x56c112].category === _0x4ee329) {
          if (!commands[_0x56c112].dontAddCommandList) {
            _0x5f1945 += "*🌟Command :* " + commands[_0x56c112].pattern + "\n*⌛Desc :* " + commands[_0x56c112].desc + "\n*📥Use:* " + commands[_0x56c112].use + "\n\n";
          }
        }
      }
      if (_0x5f1945) {
        _0x1619f8 += _0x5f1945;
      } else {
        _0x1619f8 += "*No " + _0x4ee329 + " commands available*\n\n";
      }
      _0x1619f8 += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    }
    const _0x349975 = {
      'newsletterJid': '120363343196447945@newsletter',
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x1133ee = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x349975
    };
    const _0x2c3b2e = {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x1619f8,
      'contextInfo': _0x1133ee
    };
    await _0x8503ce.sendMessage(_0x42d5f9, _0x2c3b2e, {
      'quoted': qtoko
    });
  } catch (_0x5c4330) {
    console.log(_0x5c4330);
    _0x341f2a("*_An error occurred while processing your request._*");
  }
});
cmd({
  'pattern': "rcolor",
  'desc': "Generate a random color with name and code.",
  'category': "other",
  'filename': __filename
}, async (_0x179b66, _0x2b1502, _0xf591a3, {
  reply: _0x524832
}) => {
  try {
    const _0x1b26fb = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", 'Black', "White", "Gray", "Cyan", "Magenta", "Violet", "Indigo", 'Teal', "Lavender", 'Turquoise'];
    const _0x1962b5 = '#' + Math.floor(Math.random() * 0xffffff).toString(0x10);
    const _0x40cfee = _0x1b26fb[Math.floor(Math.random() * _0x1b26fb.length)];
    _0x524832("🎨 *Random Color:* \nName: " + _0x40cfee + "\nCode: " + _0x1962b5);
  } catch (_0x171d03) {
    console.error("Error in .randomcolor command:", _0x171d03);
    _0x524832("❌ An error occurred while generating the random color.");
  }
});
cmd({
  'pattern': "binary",
  'desc': "Convert text into binary format.",
  'category': 'other',
  'filename': __filename
}, async (_0x1a8375, _0x158f1d, _0x49374e, {
  args: _0x3248a7,
  reply: _0x5a95c4
}) => {
  try {
    if (!_0x3248a7.length) {
      return _0x5a95c4("❌ Please provide the text to convert to binary.");
    }
    const _0x224fe7 = _0x3248a7.join(" ");
    const _0x4c7fa8 = _0x224fe7.split('').map(_0xf6b7e => {
      return ('00000000' + _0xf6b7e.charCodeAt(0x0).toString(0x2)).slice(-0x8);
    }).join(" ");
    _0x5a95c4("🔑 *Binary Representation:* \n" + _0x4c7fa8);
  } catch (_0x300ec5) {
    console.error("Error in .binary command:", _0x300ec5);
    _0x5a95c4("❌ An error occurred while converting to binary.");
  }
});
cmd({
  'pattern': "dbinary",
  'desc': "Decode binary string into text.",
  'category': 'other',
  'filename': __filename
}, async (_0xfe5512, _0x5d4ee2, _0x297aa3, {
  args: _0xde798,
  reply: _0x456fac
}) => {
  try {
    if (!_0xde798.length) {
      return _0x456fac("❌ Please provide the binary string to decode.");
    }
    const _0x40defc = _0xde798.join(" ");
    const _0x194be1 = _0x40defc.split(" ").map(_0x2dba20 => {
      return String.fromCharCode(parseInt(_0x2dba20, 0x2));
    }).join('');
    _0x456fac("🔓 *Decoded Text:* \n" + _0x194be1);
  } catch (_0x29c953) {
    console.error("Error in .binarydecode command:", _0x29c953);
    _0x456fac("❌ An error occurred while decoding the binary string.");
  }
});
cmd({
  'pattern': "base64",
  'desc': "Encode text into Base64 format.",
  'category': 'other',
  'filename': __filename
}, async (_0xe4d35c, _0x5c2403, _0x18b670, {
  args: _0x10e993,
  reply: _0x5e19ed
}) => {
  try {
    if (!_0x10e993.length) {
      return _0x5e19ed("❌ Please provide the text to encode into Base64.");
    }
    const _0x40fae4 = _0x10e993.join(" ");
    const _0x2c57c6 = Buffer.from(_0x40fae4).toString('base64');
    _0x5e19ed("🔑 *Encoded Base64 Text:* \n" + _0x2c57c6);
  } catch (_0x52c39e) {
    console.error("Error in .base64 command:", _0x52c39e);
    _0x5e19ed("❌ An error occurred while encoding the text into Base64.");
  }
});
cmd({
  'pattern': "unbase64",
  'desc': "Decode Base64 encoded text.",
  'category': "other",
  'filename': __filename
}, async (_0x1a13ca, _0x514edc, _0x85150, {
  args: _0x143605,
  reply: _0x1c08c7
}) => {
  try {
    if (!_0x143605.length) {
      return _0x1c08c7("❌ Please provide the Base64 encoded text to decode.");
    }
    const _0x56364a = _0x143605.join(" ");
    const _0x1de2db = Buffer.from(_0x56364a, "base64").toString("utf-8");
    _0x1c08c7("🔓 *Decoded Text:* \n" + _0x1de2db);
  } catch (_0xe96a75) {
    console.error("Error in .unbase64 command:", _0xe96a75);
    _0x1c08c7("❌ An error occurred while decoding the Base64 text.");
  }
});
cmd({
  'pattern': 'urlencode',
  'desc': "Encode text into URL encoding.",
  'category': "other",
  'filename': __filename
}, async (_0x415da2, _0x442565, _0x490108, {
  args: _0x115d03,
  reply: _0x60fce7
}) => {
  try {
    if (!_0x115d03.length) {
      return _0x60fce7("❌ Please provide the text to encode into URL encoding.");
    }
    const _0x317345 = _0x115d03.join(" ");
    const _0x43f012 = encodeURIComponent(_0x317345);
    _0x60fce7("🔑 *Encoded URL Text:* \n" + _0x43f012);
  } catch (_0xadce6f) {
    console.error("Error in .urlencode command:", _0xadce6f);
    _0x60fce7("❌ An error occurred while encoding the text.");
  }
});
cmd({
  'pattern': 'urldecode',
  'desc': "Decode URL encoded text.",
  'category': "other",
  'filename': __filename
}, async (_0x1f9b23, _0x56f0aa, _0x53b2f4, {
  args: _0x1f7f76,
  reply: _0x48826f
}) => {
  try {
    if (!_0x1f7f76.length) {
      return _0x48826f("❌ Please provide the URL encoded text to decode.");
    }
    const _0x435195 = _0x1f7f76.join(" ");
    const _0x18f6a9 = decodeURIComponent(_0x435195);
    _0x48826f("🔓 *Decoded Text:* \n" + _0x18f6a9);
  } catch (_0x58b307) {
    console.error("Error in .urldecode command:", _0x58b307);
    _0x48826f("❌ An error occurred while decoding the URL encoded text.");
  }
});
cmd({
  'pattern': "roll",
  'desc': "Roll a dice (1-6).",
  'category': "fun",
  'filename': __filename
}, async (_0x1248d0, _0x378435, _0xe93aac, {
  reply: _0x1d98b2
}) => {
  try {
    const _0x5e692e = Math.floor(Math.random() * 0x6) + 0x1;
    _0x1d98b2("🎲 You rolled: *" + _0x5e692e + '*');
  } catch (_0xc34792) {
    console.error("Error in .roll command:", _0xc34792);
    _0x1d98b2("❌ An error occurred while rolling the dice.");
  }
});
cmd({
  'pattern': "coinflip",
  'desc': "Flip a coin and get Heads or Tails.",
  'category': "fun",
  'filename': __filename
}, async (_0x3c3e99, _0x1f3e94, _0x3433a0, {
  reply: _0x153350
}) => {
  try {
    const _0x259bb6 = Math.random() < 0.5 ? "Heads" : "Tails";
    _0x153350("🪙 Coin Flip Result: *" + _0x259bb6 + '*');
  } catch (_0x1a1dd8) {
    console.error("Error in .coinflip command:", _0x1a1dd8);
    _0x153350("❌ An error occurred while flipping the coin.");
  }
});
cmd({
  'pattern': "flip",
  'desc': "Flip the text you provide.",
  'category': "fun",
  'filename': __filename
}, async (_0x12a28d, _0x243e23, _0x4b629a, {
  args: _0x216afc,
  reply: _0xb35401
}) => {
  try {
    if (!_0x216afc.length) {
      return _0xb35401("❌ Please provide the text to flip.");
    }
    const _0x15a787 = _0x216afc.join(" ").split('').reverse().join('');
    _0xb35401("🔄 Flipped Text: *" + _0x15a787 + '*');
  } catch (_0x4be04d) {
    console.error("Error in .flip command:", _0x4be04d);
    _0xb35401("❌ An error occurred while flipping the text.");
  }
});
cmd({
  'pattern': "pick",
  'desc': "Pick between two choices.",
  'category': "fun",
  'filename': __filename
}, async (_0x5cb87c, _0x4707fc, _0x7b7ded, {
  args: _0x3f1783,
  reply: _0x31c703
}) => {
  try {
    if (_0x3f1783.length < 0x2) {
      return _0x31c703("❌ Please provide two choices to pick from. Example: `.pick Ice Cream, Pizza`");
    }
    const _0x20d03f = _0x3f1783.join(" ").split(',')[Math.floor(Math.random() * 0x2)].trim();
    _0x31c703("🎉 Bot picks: *" + _0x20d03f + '*');
  } catch (_0x53b0ae) {
    console.error("Error in .pick command:", _0x53b0ae);
    _0x31c703("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "timenow",
  'desc': "Check the current local time.",
  'category': "other",
  'filename': __filename
}, async (_0x1ff760, _0xd3871e, _0x4f2957, {
  reply: _0x3f9e42
}) => {
  try {
    const _0x480e14 = new Date();
    const _0x180e73 = _0x480e14.toLocaleTimeString("en-US", {
      'hour': "2-digit",
      'minute': "2-digit",
      'second': "2-digit",
      'hour12': true,
      'timeZone': 'Asia/Karachi'
    });
    _0x3f9e42("🕒 Current Local Time in Pakistan: " + _0x180e73);
  } catch (_0x4111f0) {
    console.error("Error in .timenow command:", _0x4111f0);
    _0x3f9e42("❌ An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "date",
  'desc': "Check the current date.",
  'category': 'other',
  'filename': __filename
}, async (_0x1e93d0, _0x29093f, _0xb1ae0d, {
  reply: _0x454046
}) => {
  try {
    const _0x24e7e7 = new Date();
    const _0x5bc6b0 = _0x24e7e7.toLocaleDateString("en-US", {
      'weekday': "long",
      'year': "numeric",
      'month': "long",
      'day': "numeric"
    });
    _0x454046("📅 Current Date: " + _0x5bc6b0);
  } catch (_0x1051e2) {
    console.error("Error in .date command:", _0x1051e2);
    _0x454046("❌ An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': 'shapar',
  'desc': "Send shapar ASCII art with mentions.",
  'category': "fun",
  'filename': __filename
}, async (_0x29c598, _0x32a937, _0x530a75, {
  from: _0x484449,
  isGroup: _0xe23db0,
  reply: _0x170dc1
}) => {
  try {
    if (!_0xe23db0) {
      return _0x170dc1("This command can only be used in groups.");
    }
    const _0xa3f016 = _0x530a75.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"]?.[0x0];
    if (!_0xa3f016) {
      return _0x170dc1("Please mention a user to send the ASCII art to.");
    }
    const _0x45eecc = "😂 @" + _0xa3f016.split('@')[0x0] + "!\n😂 that for you:\n\n" + "\n          _______\n       .-'       '-.\n      /           /|\n     /           / |\n    /___________/  |\n    |   _______ |  |\n    |  |  \\ \\  ||  |\n    |  |   \\ \\ ||  |\n    |  |____\\ \\||  |\n    |  '._  _.'||  |\n    |    .' '.  ||  |\n    |   '.___.' ||  |\n    |___________||  |\n    '------------'  |\n     \\_____________\\|\n";
    await _0x29c598.sendMessage(_0x484449, {
      'text': _0x45eecc,
      'mentions': [_0xa3f016]
    }, {
      'quoted': qtoko
    });
  } catch (_0x3283fa) {
    console.error("Error in .shapar command:", _0x3283fa);
    _0x170dc1("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': 'rate',
  'desc': "Rate someone out of 10.",
  'category': "fun",
  'filename': __filename
}, async (_0x272146, _0x5380af, _0x8d844d, {
  from: _0x44b7d6,
  isGroup: _0x383ea6,
  reply: _0x2b49c5
}) => {
  try {
    if (!_0x383ea6) {
      return _0x2b49c5("This command can only be used in groups.");
    }
    const _0x89f116 = _0x8d844d.message.extendedTextMessage?.['contextInfo']?.['mentionedJid']?.[0x0];
    if (!_0x89f116) {
      return _0x2b49c5("Please mention someone to rate.");
    }
    const _0x4e538f = Math.floor(Math.random() * 0xa) + 0x1;
    const _0x473a24 = '@' + _0x89f116.split('@')[0x0] + " is rated " + _0x4e538f + "/10.";
    await _0x272146.sendMessage(_0x44b7d6, {
      'text': _0x473a24,
      'mentions': [_0x89f116]
    }, {
      'quoted': qtoko
    });
  } catch (_0x37b5f8) {
    console.error("Error in .rate command:", _0x37b5f8);
    _0x2b49c5("An error occurred. Please try again.");
  }
});
cmd({
  'pattern': "countx",
  'desc': "Start a reverse countdown from the specified number to 1.",
  'category': 'owner',
  'filename': __filename
}, async (_0x1abed3, _0x1e95eb, _0x237575, {
  args: _0x43e20d,
  reply: _0x2b9216,
  senderNumber: _0x5a2cc9
}) => {
  try {
    const _0x6256b3 = _0x1abed3.user.id.split(':')[0x0];
    if (_0x5a2cc9 !== _0x6256b3) {
      return _0x2b9216("❎ Only the bot owner can use this command.");
    }
    if (!_0x43e20d[0x0]) {
      return _0x2b9216("✳️ Use this command like:\n *Example:* .countx 10");
    }
    const _0x3dfb84 = parseInt(_0x43e20d[0x0].trim());
    if (isNaN(_0x3dfb84) || _0x3dfb84 <= 0x0 || _0x3dfb84 > 0x32) {
      return _0x2b9216("❎ Please specify a valid number between 1 and 50.");
    }
    _0x2b9216("⏳ Starting reverse countdown from " + _0x3dfb84 + "...");
    for (let _0xff6d30 = _0x3dfb84; _0xff6d30 >= 0x1; _0xff6d30--) {
      await _0x1abed3.sendMessage(_0x237575.chat, {
        'text': '' + _0xff6d30
      }, {
        'quoted': qtoko
      });
      await sleep(0x3e8);
    }
    _0x2b9216("✅ Countdown completed.");
  } catch (_0x22a3e1) {
    console.error(_0x22a3e1);
    _0x2b9216("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "count",
  'desc': "Start a countdown from 1 to the specified number.",
  'category': "owner",
  'filename': __filename
}, async (_0x516e7e, _0x5c5a0f, _0x3903ad, {
  args: _0xd190e5,
  reply: _0x3997d9,
  senderNumber: _0x55989c
}) => {
  try {
    const _0x58eb8c = _0x516e7e.user.id.split(':')[0x0];
    if (_0x55989c !== _0x58eb8c) {
      return _0x3997d9("❎ Only the bot owner can use this command.");
    }
    if (!_0xd190e5[0x0]) {
      return _0x3997d9("✳️ Use this command like:\n *Example:* .count 10");
    }
    const _0x2b80c6 = parseInt(_0xd190e5[0x0].trim());
    if (isNaN(_0x2b80c6) || _0x2b80c6 <= 0x0 || _0x2b80c6 > 0x32) {
      return _0x3997d9("❎ Please specify a valid number between 1 and 50.");
    }
    _0x3997d9("⏳ Starting countdown to " + _0x2b80c6 + "...");
    for (let _0x26deeb = 0x1; _0x26deeb <= _0x2b80c6; _0x26deeb++) {
      await _0x516e7e.sendMessage(_0x3903ad.chat, {
        'text': '' + _0x26deeb
      }, {
        'quoted': qtoko
      });
      await sleep(0x3e8);
    }
    _0x3997d9("✅ Countdown completed.");
  } catch (_0x13b466) {
    console.error(_0x13b466);
    _0x3997d9("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "calculate",
  'alias': ["calc"],
  'desc': "Evaluate a mathematical expression.",
  'category': "utilities",
  'filename': __filename
}, async (_0x185cf6, _0x141a63, _0x4e8b18, {
  args: _0x3e725f,
  reply: _0x522fd3
}) => {
  try {
    if (!_0x3e725f[0x0]) {
      return _0x522fd3("✳️ Use this command like:\n *Example:* .calculate 5+3*2");
    }
    const _0x24e84c = _0x3e725f.join(" ").trim();
    if (!/^[0-9+\-*/().\s]+$/.test(_0x24e84c)) {
      return _0x522fd3("❎ Invalid expression. Only numbers and +, -, *, /, ( ) are allowed.");
    }
    let _0xa227af;
    try {
      _0xa227af = eval(_0x24e84c);
    } catch (_0x522384) {
      return _0x522fd3("❎ Error in calculation. Please check your expression.");
    }
    _0x522fd3("✅ Result of \"" + _0x24e84c + "\" is: " + _0xa227af);
  } catch (_0xe054e) {
    console.error(_0xe054e);
    _0x522fd3("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'trt',
  'alias': ["translate"],
  'desc': "🌍 Translate text between languages",
  'react': '⚡',
  'category': "other",
  'filename': __filename
}, async (_0xf1e771, _0x531e02, _0x299c98, {
  from: _0x64808f,
  q: _0x531a96,
  reply: _0x5805d2
}) => {
  try {
    const _0x56bae5 = _0x531a96.split(" ");
    if (_0x56bae5.length < 0x2) {
      return _0x5805d2("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x29fc7e = _0x56bae5[0x0];
    const _0x22d52c = _0x56bae5.slice(0x1).join(" ");
    const _0x49d098 = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x22d52c) + "&langpair=en|" + _0x29fc7e;
    const _0x4948ab = await axios.get(_0x49d098);
    const _0x2de9c6 = _0x4948ab.data.responseData.translatedText;
    const _0x18fb3b = "> *DIDULA MA TRANSLATION*\n\n> 🔤 *Original*: " + _0x22d52c + "\n\n> 🔠 *Translated*: " + _0x2de9c6 + "\n\n> 🌐 *Language*: " + _0x29fc7e.toUpperCase();
    return _0x5805d2(_0x18fb3b);
  } catch (_0x1287be) {
    console.log(_0x1287be);
    return _0x5805d2("⚠️ An error occurred data while translating the your text. Please try again later🤕");
  }
});
cmd({
  'pattern': 'send',
  'desc': "Send a message multiple times, one by one.",
  'category': "other",
  'filename': __filename
}, async (_0x2638ba, _0x169cb4, _0x11d82f, {
  args: _0x1be1d5,
  reply: _0x529412,
  senderNumber: _0x18770c
}) => {
  try {
    const _0x5c626c = _0x2638ba.user.id.split(':')[0x0];
    if (_0x18770c !== _0x5c626c) {
      return _0x529412("❎ Only the bot owner can use this command.");
    }
    if (!_0x1be1d5[0x0]) {
      return _0x529412("✳️ Use this command like:\n *Example:* .send 10,I love you");
    }
    const [_0x3490c7, ..._0x4e3f30] = _0x1be1d5.join(" ").split(',');
    const _0x2829ab = parseInt(_0x3490c7.trim());
    const _0x486091 = _0x4e3f30.join(',').trim();
    if (isNaN(_0x2829ab) || _0x2829ab <= 0x0 || _0x2829ab > 0x64) {
      return _0x529412("❎ Please specify a valid number between 1 and 100.");
    }
    if (!_0x486091) {
      return _0x529412("❎ Please provide a message to send.");
    }
    _0x529412("⏳ Sending \"" + _0x486091 + "\" " + _0x2829ab + " times. This may take a while...");
    for (let _0x5101eb = 0x0; _0x5101eb < _0x2829ab; _0x5101eb++) {
      await _0x2638ba.sendMessage(_0x169cb4.from, {
        'text': _0x486091
      }, {
        'quoted': qtoko
      });
      await sleep(0x3e8);
    }
    _0x529412("✅ Successfully sent the message " + _0x2829ab + " times.");
  } catch (_0x1b6017) {
    console.error("❌ Error in ask command:", _0x1b6017);
    _0x529412("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "flirt",
  'alias': ['masom', "line"],
  'desc': "Get a random flirt or pickup line.",
  'react': '💘',
  'category': 'fun',
  'filename': __filename
}, async (_0x47b522, _0x3897a4, _0x171f61, {
  from: _0x12559c,
  reply: _0x121544
}) => {
  try {
    const _0x5459b7 = await fetch("https://shizoapi.onrender.com/api/texts/flirt?apikey=shizo");
    if (!_0x5459b7.ok) {
      throw new Error("API error: " + (await _0x5459b7.text()));
    }
    const _0x19418f = await _0x5459b7.json();
    if (!_0x19418f.result) {
      throw new Error("Invalid response from API.");
    }
    const _0xd84d93 = '' + _0x19418f.result;
    await _0x47b522.sendMessage(_0x12559c, {
      'text': _0xd84d93,
      'mentions': [_0x171f61.sender]
    }, {
      'quoted': qtoko
    });
  } catch (_0x5b707d) {
    console.error("Error in flirt command:", _0x5b707d);
    _0x121544("Sorry, something went wrong while fetching the flirt line. Please try again later.");
  }
});
cmd({
  'pattern': 'truth',
  'alias': ["truthquestion"],
  'desc': "Get a random truth question from the API.",
  'react': '❓',
  'category': "other",
  'filename': __filename
}, async (_0x1210c9, _0x451677, _0xed049, {
  from: _0xfaf1c7,
  reply: _0x217d28
}) => {
  try {
    const _0x313cd0 = await fetch("https://shizoapi.onrender.com/api/texts/truth?apikey=shizo");
    if (!_0x313cd0.ok) {
      console.error("API request failed with status " + _0x313cd0.status);
      throw new Error("API request failed with status " + _0x313cd0.status);
    }
    const _0x73a927 = await _0x313cd0.json();
    if (!_0x73a927.result) {
      console.error("Invalid API response: No 'result' field found.");
      throw new Error("Invalid API response: No 'result' field found.");
    }
    const _0x53dc37 = '' + _0x73a927.result;
    await _0x1210c9.sendMessage(_0xfaf1c7, {
      'text': _0x53dc37,
      'mentions': [_0xed049.sender]
    }, {
      'quoted': qtoko
    });
  } catch (_0x57fb78) {
    console.error("Error in truth command:", _0x57fb78);
    _0x217d28("Sorry, something went wrong while fetching the truth question. Please try again later.");
  }
});
cmd({
  'pattern': "dare",
  'alias': ["truthordare"],
  'desc': "Get a random dare from the API.",
  'react': '🎯',
  'category': "othe",
  'filename': __filename
}, async (_0x2de3b2, _0x1afd52, _0x5d3c30, {
  from: _0x1eef96,
  reply: _0x1d72d3
}) => {
  try {
    const _0xb60ef = await fetch("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
    if (!_0xb60ef.ok) {
      console.error("API request failed with status " + _0xb60ef.status);
      throw new Error("API request failed with status " + _0xb60ef.status);
    }
    const _0x38fafe = await _0xb60ef.json();
    if (!_0x38fafe.result) {
      console.error("Invalid API response: No 'result' field found.");
      throw new Error("Invalid API response: No 'result' field found.");
    }
    const _0xd315c7 = '' + _0x38fafe.result;
    await _0x2de3b2.sendMessage(_0x1eef96, {
      'text': _0xd315c7,
      'mentions': [_0x5d3c30.sender]
    }, {
      'quoted': qtoko
    });
  } catch (_0x38ad37) {
    console.error("Error in dare command:", _0x38ad37);
    _0x1d72d3("Sorry, something went wrong while fetching the dare. Please try again later.");
  }
});
cmd({
  'pattern': "bom",
  'alias': ['rp', "rpm"],
  'desc': "Repeat a message a specified number of times.",
  'category': "other",
  'filename': __filename
}, async (_0xf8047d, _0x247647, _0x457d25, {
  args: _0x705d3b,
  reply: _0x4e71b2
}) => {
  try {
    if (!_0x705d3b[0x0]) {
      return _0x4e71b2("✳️ Use this command like:\n*Example:* .boom 10,I love you");
    }
    const [_0x2ba789, ..._0x16efc7] = _0x705d3b.join(" ").split(',');
    const _0x4d3c5a = parseInt(_0x2ba789.trim());
    const _0x237574 = _0x16efc7.join(',').trim();
    if (isNaN(_0x4d3c5a) || _0x4d3c5a <= 0x0 || _0x4d3c5a > 0x12c) {
      return _0x4e71b2("❎ Please specify a valid number between 1 and 300.");
    }
    if (!_0x237574) {
      return _0x4e71b2("❎ Please provide a message to repeat.");
    }
    const _0x492bcd = Array(_0x4d3c5a).fill(_0x237574).join("\n");
    _0x4e71b2("🔄 Repeated " + _0x4d3c5a + " times:\n\n" + _0x492bcd);
  } catch (_0x2b5719) {
    console.error("❌ Error in repeat command:", _0x2b5719);
    _0x4e71b2("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "tiktokstalk",
  'alias': ["tstalk", "ttstalk"],
  'react': '📱',
  'desc': "Fetch TikTok user profile details.",
  'category': "search",
  'filename': __filename
}, async (_0x46cb83, _0x563803, _0x3f28cb, {
  from: _0x2010d2,
  args: _0x563002,
  q: _0x339f4d,
  reply: _0x2a2a60
}) => {
  try {
    if (!_0x339f4d) {
      return _0x2a2a60("❎ Please provide a TikTok username.\n\n*Example:* .tiktokstalk mrbeast");
    }
    const _0x2083ec = "https://api.siputzx.my.id/api/stalk/tiktok?username=" + encodeURIComponent(_0x339f4d);
    const {
      data: _0x259e9c
    } = await axios.get(_0x2083ec);
    if (!_0x259e9c.status) {
      return _0x2a2a60("❌ User not found. Please check the username and try again.");
    }
    const _0x4f0386 = _0x259e9c.data.user;
    const _0x11050c = _0x259e9c.data.stats;
    const _0x129e41 = "🎭 *TikTok Profile Stalker* 🎭\n\n👤 *Username:* @" + _0x4f0386.uniqueId + "\n📛 *Nickname:* " + _0x4f0386.nickname + "\n✅ *Verified:* " + (_0x4f0386.verified ? "Yes ✅" : "No ❌") + "\n📍 *Region:* " + _0x4f0386.region + "\n📝 *Bio:* " + (_0x4f0386.signature || "No bio available.") + "\n🔗 *Bio Link:* " + (_0x4f0386.bioLink?.["link"] || "No link available.") + "\n\n📊 *Statistics:*\n👥 *Followers:* " + _0x11050c.followerCount.toLocaleString() + "\n👤 *Following:* " + _0x11050c.followingCount.toLocaleString() + "\n❤️ *Likes:* " + _0x11050c.heartCount.toLocaleString() + "\n🎥 *Videos:* " + _0x11050c.videoCount.toLocaleString() + "\n\n📅 *Account Created:* " + new Date(_0x4f0386.createTime * 0x3e8).toLocaleDateString() + "\n🔒 *Private Account:* " + (_0x4f0386.privateAccount ? "Yes 🔒" : "No 🌍") + "\n\n🔗 *Profile URL:* https://www.tiktok.com/@" + _0x4f0386.uniqueId + "\n";
    const _0x45404d = {
      'image': {
        'url': _0x4f0386.avatarLarger
      },
      'caption': _0x129e41
    };
    await _0x46cb83.sendMessage(_0x2010d2, _0x45404d, {
      'quoted': qtoko
    });
  } catch (_0x7ed473) {
    console.error("❌ Error in TikTok stalk command:", _0x7ed473);
    _0x2a2a60("⚠️ An error occurred while fetching TikTok profile data.");
  }
});
cmd({
  'pattern': "ytpost",
  'alias': ["ytcommunity", "ytc"],
  'desc': "Download a YouTube community post",
  'category': "download",
  'react': '📩',
  'filename': __filename
}, async (_0x484d1f, _0x2e53c0, _0x5a90fd, {
  from: _0x2b4e0a,
  args: _0x39c7d0,
  q: _0x20c5fa,
  reply: _0x1f5f8a,
  react: _0x228746
}) => {
  try {
    if (!_0x20c5fa) {
      return _0x1f5f8a("Please provide a YouTube community post URL.\nExample: `.ytpost <url>`");
    }
    const _0x55ea8e = "https://api.siputzx.my.id/api/d/ytpost?url=" + encodeURIComponent(_0x20c5fa);
    const {
      data: _0x1558df
    } = await axios.get(_0x55ea8e);
    if (!_0x1558df.status || !_0x1558df.data) {
      await _0x228746('❌');
      return _0x1f5f8a("Failed to fetch the community post. Please check the URL.");
    }
    const _0x208efe = _0x1558df.data;
    let _0x2a40b3 = "📢 *YouTube Community Post* 📢\n\n" + ("📜 *Content:* " + _0x208efe.content);
    if (_0x208efe.images && _0x208efe.images.length > 0x0) {
      for (const _0x474469 of _0x208efe.images) {
        await _0x484d1f.sendMessage(_0x2b4e0a, {
          'image': {
            'url': _0x474469
          },
          'caption': _0x2a40b3
        }, {
          'quoted': qtoko
        });
        _0x2a40b3 = '';
      }
    } else {
      await _0x484d1f.sendMessage(_0x2b4e0a, {
        'text': _0x2a40b3
      }, {
        'quoted': qtoko
      });
    }
    await _0x228746('✅');
  } catch (_0x562c17) {
    console.error("Error in ytpost command:", _0x562c17);
    await _0x228746('❌');
    _0x1f5f8a("An error occurred while fetching the YouTube community post.");
  }
});
cmd({
  'pattern': "mediafire",
  'alias': ['mfire'],
  'desc': "To download MediaFire files.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x54eb48, _0x555536, _0x4a229a, {
  from: _0x40040b,
  quoted: _0x3958aa,
  q: _0x2ec011,
  reply: _0x4754c6
}) => {
  try {
    if (!_0x2ec011) {
      return _0x4754c6("❌ Please provide a valid MediaFire link.");
    }
    await _0x54eb48.sendMessage(_0x40040b, {
      'react': {
        'text': '⏳',
        'key': _0x555536.key
      }
    });
    const _0xf3a8b4 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x2ec011);
    const _0x1225fe = _0xf3a8b4.data;
    if (!_0x1225fe || !_0x1225fe.status || !_0x1225fe.result || !_0x1225fe.result.dl_link) {
      return _0x4754c6("⚠️ Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const {
      dl_link: _0x2dfe74,
      fileName: _0x433df0,
      fileType: _0x2922ca
    } = _0x1225fe.result;
    const _0x44afd0 = _0x433df0 || "mediafire_download";
    const _0x48692b = _0x2922ca || "application/octet-stream";
    await _0x54eb48.sendMessage(_0x40040b, {
      'react': {
        'text': '⬆️',
        'key': _0x555536.key
      }
    });
    const _0x7c31e2 = "╭━━━〔 *MEDIAFIRE DOWNLOADER* 〕━━━⊷\n" + ("┃▸ *File Name:* " + _0x44afd0 + "\n") + ("┃▸ *File Type:* " + _0x48692b + "\n") + "╰━━━⪼\n\n" + "📥 *Downloading your file...*";
    await _0x54eb48.sendMessage(_0x40040b, {
      'document': {
        'url': _0x2dfe74
      },
      'mimetype': _0x48692b,
      'fileName': _0x44afd0,
      'caption': _0x7c31e2
    }, {
      'quoted': qtoko
    });
  } catch (_0x1d42a7) {
    console.error("Error:", _0x1d42a7);
    _0x4754c6("❌ An error occurred while processing your request. Please try again.");
  }
});
cmd({
  'pattern': "define",
  'desc': "📖 Get the definition of a word",
  'react': '🔍',
  'category': "search",
  'filename': __filename
}, async (_0x3624fc, _0x5083cc, _0x17ee8a, {
  from: _0x2f4a25,
  q: _0x5139a7,
  reply: _0x54ce32
}) => {
  try {
    if (!_0x5139a7) {
      return _0x54ce32("Please provide a word to define.\n\n📌 *Usage:* .define [word]");
    }
    const _0x121a2e = _0x5139a7.trim();
    const _0x3b7be9 = "https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x121a2e;
    const _0x24c454 = await axios.get(_0x3b7be9);
    const _0x14ba44 = _0x24c454.data[0x0];
    const _0x42372d = _0x14ba44.meanings[0x0].definitions[0x0].definition;
    const _0x361db8 = _0x14ba44.meanings[0x0].definitions[0x0].example || "❌ No example available";
    const _0xcdc5d1 = _0x14ba44.meanings[0x0].definitions[0x0].synonyms.join(", ") || "❌ No synonyms available";
    const _0x1275d0 = _0x14ba44.phonetics[0x0]?.["text"] || "🔇 No phonetics available";
    const _0x62cf26 = _0x14ba44.phonetics[0x0]?.["audio"] || null;
    const _0x582ce9 = "\n📖 *Word*: *" + _0x14ba44.word + "*  \n🗣️ *Pronunciation*: _" + _0x1275d0 + "_  \n📚 *Definition*: " + _0x42372d + "  \n✍️ *Example*: " + _0x361db8 + "  \n📝 *Synonyms*: " + _0xcdc5d1 + "  \n\n🔗 *Powered By Didula MD V2*";
    if (_0x62cf26) {
      await _0x3624fc.sendMessage(_0x2f4a25, {
        'audio': {
          'url': _0x62cf26
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': qtoko
      });
    }
    return _0x54ce32(_0x582ce9);
  } catch (_0x34f404) {
    console.error("❌ Error:", _0x34f404);
    if (_0x34f404.response && _0x34f404.response.status === 0x194) {
      return _0x54ce32("🚫 *Word not found.* Please check the spelling and try again.");
    }
    return _0x54ce32("⚠️ An error occurred while fetching the definition. Please try again later.");
  }
});
cmd({
  'pattern': 'openai',
  'alias': ["chatgpt", 'gpt3', "open-gpt"],
  'desc': "Chat with OpenAI",
  'category': "main",
  'react': '🧠',
  'filename': __filename
}, async (_0x66aea3, _0x11d6c0, _0x419171, {
  from: _0x48114f,
  args: _0x5a4143,
  q: _0x4fdaf7,
  reply: _0x16fb6b,
  react: _0x1b5d6a
}) => {
  try {
    if (!_0x4fdaf7) {
      return _0x16fb6b("Please provide a message for OpenAI.\nExample: `.openai Hello`");
    }
    const _0x58e9a5 = "https://vapis.my.id/api/openai?q=" + encodeURIComponent(_0x4fdaf7);
    const {
      data: _0x23e0aa
    } = await axios.get(_0x58e9a5);
    if (!_0x23e0aa || !_0x23e0aa.result) {
      await _0x1b5d6a('❌');
      return _0x16fb6b("OpenAI failed to respond. Please try again later.");
    }
    await _0x16fb6b("🧠 *OpenAI Response:*\n\n" + _0x23e0aa.result);
    await _0x1b5d6a('✅');
  } catch (_0x2073b5) {
    console.error("Error in OpenAI command:", _0x2073b5);
    await _0x1b5d6a('❌');
    _0x16fb6b("An error occurred while communicating with OpenAI.");
  }
});
cmd({
  'pattern': 'main',
  'alias': ["bot", 'dj', "gpt", 'gpt4', "bing"],
  'desc': "Chat with an AI model",
  'category': "main",
  'react': '🤖',
  'filename': __filename
}, async (_0x59b654, _0x13829e, _0x13c9de, {
  from: _0x4f68c4,
  args: _0x3189c4,
  q: _0x2bdfa7,
  reply: _0x5146a5,
  react: _0x5b9ec6
}) => {
  try {
    if (!_0x2bdfa7) {
      return _0x5146a5("Please provide a message for the AI.\nExample: `.ai Hello`");
    }
    const _0xedda92 = "https://lance-frank-asta.onrender.com/api/gpt?q=" + encodeURIComponent(_0x2bdfa7);
    const {
      data: _0x375d75
    } = await axios.get(_0xedda92);
    if (!_0x375d75 || !_0x375d75.message) {
      await _0x5b9ec6('❌');
      return _0x5146a5("AI failed to respond. Please try again later.");
    }
    await _0x5146a5("🤖 *AI Response:*\n\n" + _0x375d75.message);
    await _0x5b9ec6('✅');
  } catch (_0x47e14b) {
    console.error("Error in AI command:", _0x47e14b);
    await _0x5b9ec6('❌');
    _0x5146a5("An error occurred while communicating with the AI.");
  }
});
cmd({
  'pattern': "deepseek",
  'alias': ["deep", "seekai"],
  'desc': "Chat with DeepSeek AI",
  'category': 'main',
  'react': '👾',
  'filename': __filename
}, async (_0x5c074a, _0xc3ce44, _0xc1af9, {
  from: _0x88791c,
  args: _0x467361,
  q: _0x3b6d3d,
  reply: _0x5483a4,
  react: _0x345e43
}) => {
  try {
    if (!_0x3b6d3d) {
      return _0x5483a4("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");
    }
    const _0x706654 = "https://api.ryzendesu.vip/api/ai/deepseek?text=" + encodeURIComponent(_0x3b6d3d);
    const {
      data: _0x339519
    } = await axios.get(_0x706654);
    if (!_0x339519 || !_0x339519.answer) {
      await _0x345e43('❌');
      return _0x5483a4("DeepSeek AI failed to respond. Please try again later.");
    }
    await _0x5483a4("👾 *DeepSeek AI Response:*\n\n" + _0x339519.answer);
    await _0x345e43('✅');
  } catch (_0x310ba8) {
    console.error("Error in DeepSeek AI command:", _0x310ba8);
    await _0x345e43('❌');
    _0x5483a4("An error occurred while communicating with DeepSeek AI.");
  }
});
const googleTTS = require("google-tts-api");
cmd({
  'pattern': 'tts',
  'desc': "Text-to-speech",
  'category': "convert",
  'filename': __filename
}, async (_0x5810b4, _0x2681e2, _0x3ea387, {
  from: _0x48448d,
  quoted: _0x50e60e,
  body: _0x45872d,
  isCmd: _0x31fd6f,
  command: _0x1d07c4,
  args: _0x15dd86,
  q: _0x5b762f,
  isGroup: _0x445e7b,
  sender: _0x57c7ee,
  senderNumber: _0x19eeb9,
  botNumber2: _0x270753,
  botNumber: _0x284aed,
  pushname: _0x5564cd,
  isMe: _0x536af8,
  isOwner: _0xfd73ea,
  groupMetadata: _0x3f6693,
  groupName: _0x32a245,
  participants: _0x12e3d8,
  groupAdmins: _0x1ab44a,
  isBotAdmins: _0x49f0f9,
  isAdmins: _0x44470d,
  reply: _0x57159f
}) => {
  try {
    if (!_0x5b762f) {
      return _0x57159f("*_Please give me a text._*");
    }
    const _0x19e785 = googleTTS.getAudioUrl(_0x5b762f, {
      'lang': 'en',
      'slow': false,
      'host': "https://translate.google.com"
    });
    await _0x5810b4.sendMessage(_0x48448d, {
      'audio': {
        'url': _0x19e785
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x2681e2
    });
  } catch (_0x4f2381) {
    console.log(_0x4f2381);
    _0x57159f('' + _0x4f2381);
  }
});
cmd({
  'pattern': "readmore",
  'desc': "Readmore message",
  'category': "convert",
  'react': '📝',
  'filename': __filename
}, async (_0x470c21, _0x1c057e, _0x4110ca, {
  from: _0x289402,
  quoted: _0x5a9157,
  body: _0x197cd2,
  isCmd: _0x331c31,
  command: _0x155894,
  args: _0x51d830,
  q: _0x1b0b7b,
  isGroup: _0x4567ec,
  sender: _0x41b94e
}) => {
  try {
    let _0x1cd765 = _0x1b0b7b ? _0x1b0b7b : "No text provided";
    let _0x1901e0 = '​'.repeat(0xfa0);
    let _0x5b8dc0 = "Didula MD V2\n\n" + _0x1901e0 + _0x1cd765;
    await _0x470c21.sendMessage(_0x289402, {
      'text': _0x5b8dc0
    }, {
      'quoted': qtoko
    });
    await _0x470c21.sendMessage(_0x289402, {
      'react': {
        'text': '',
        'key': _0x1c057e.key
      }
    });
  } catch (_0x272821) {
    console.log(_0x272821);
    reply("Error: " + _0x272821.message);
  }
});
cmd({
  'pattern': "convert",
  'desc': "Convert an amount from one currency to another.",
  'category': "convert",
  'react': '💱',
  'filename': __filename
}, async (_0x16d445, _0x11550d, _0x4bf666, {
  from: _0xce36c4,
  quoted: _0x127a35,
  body: _0x15443f,
  isCmd: _0x5ca126,
  command: _0xa8ac25,
  args: _0x3a7ba6,
  q: _0x64f290,
  isGroup: _0x52e08b,
  sender: _0x34a61b,
  senderNumber: _0x300c3e,
  botNumber2: _0x5dfe13,
  botNumber: _0x3b5e86,
  pushname: _0x1aa4fe,
  isMe: _0x226752,
  isOwner: _0x42d449,
  groupMetadata: _0x480319,
  groupName: _0x20ba1d,
  participants: _0x262056,
  groupAdmins: _0x439378,
  isBotAdmins: _0x176353,
  isAdmins: _0x51d18c,
  reply: _0x55d2d0
}) => {
  try {
    if (_0x3a7ba6.length < 0x3) {
      return _0x55d2d0("Usage: .convert <amount> <from_currency> <to_currency>");
    }
    const _0xbc9d52 = _0x3a7ba6[0x0];
    const _0x37437d = _0x3a7ba6[0x1].toUpperCase();
    const _0x34b132 = _0x3a7ba6[0x2].toUpperCase();
    if (isNaN(_0xbc9d52)) {
      return _0x55d2d0("Please provide a valid amount.");
    }
    const _0x317afc = "https://api.exchangerate-api.com/v4/latest/" + _0x37437d;
    const _0x51ad0a = await axios.get(_0x317afc);
    const _0x314836 = _0x51ad0a.data;
    if (!_0x314836.rates[_0x34b132]) {
      return _0x55d2d0("Conversion rate for " + _0x34b132 + " not found.");
    }
    const _0x4c54f5 = (_0xbc9d52 * _0x314836.rates[_0x34b132]).toFixed(0x2);
    let _0x2d80b9 = "💸_*Currency Conversion*_💸\n\n";
    _0x2d80b9 += "💵 *Amount*: " + _0xbc9d52 + " " + _0x37437d + "\n";
    _0x2d80b9 += "🔄 *Converted Amount*: " + _0x4c54f5 + " " + _0x34b132 + "\n";
    _0x2d80b9 += "📈 *Exchange Rate*: 1 " + _0x37437d + " = " + _0x314836.rates[_0x34b132] + " " + _0x34b132 + "\n\n        \n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌\n        ";
    await _0x16d445.sendMessage(_0xce36c4, {
      'text': _0x2d80b9
    }, {
      'quoted': qtoko
    });
  } catch (_0x47eee6) {
    console.log(_0x47eee6);
    _0x55d2d0("Error fetching data: " + _0x47eee6.message);
  }
});
const {
  image2url
} = require("@dark-yasiya/imgbb.js");
cmd({
  'pattern': "img2url",
  'desc': "Image convert to url",
  'category': "convert",
  'filename': __filename
}, async (_0x4d169a, _0x1d8f90, _0x6a7ac0, {
  from: _0x434b17,
  quoted: _0x1e944d,
  body: _0x3c2a8a,
  isCmd: _0x4e1f7f,
  command: _0xb4209c,
  args: _0x307770,
  q: _0x40ebb4,
  isGroup: _0x51579f,
  sender: _0x1943ab,
  senderNumber: _0x328b65,
  botNumber2: _0x3db183,
  botNumber: _0x4735b0,
  pushname: _0x331d4c,
  isMe: _0x28c39d,
  isOwner: _0x4a4da6,
  groupMetadata: _0x4159aa,
  groupName: _0x7f9df3,
  participants: _0x3f0b51,
  groupAdmins: _0x2cfa8a,
  isBotAdmins: _0x5015a2,
  isAdmins: _0x1a1154,
  reply: _0x3dec87
}) => {
  try {
    const _0x4636ee = _0x6a7ac0.quoted ? _0x6a7ac0.quoted.type === "imageMessage" || (isQuotedViewOnce ? _0x6a7ac0.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x6a7ac0.type === "imageMessage" || _0x4636ee) {
      if (_0x4636ee) {
        await _0x6a7ac0.quoted.download("didulamd");
      } else {
        await _0x6a7ac0.download("didulamd");
      }
      let _0x11b395 = await image2url("didulamd.jpg");
      let _0x2287ec = "*Url :* " + _0x11b395.result.url + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
      _0x3dec87('' + _0x2287ec);
    } else {
      _0x3dec87("*_Please reply an image._*");
    }
  } catch (_0xb7a2e5) {
    console.log(_0xb7a2e5);
    _0x3dec87('' + _0xb7a2e5);
  }
});
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*ස්ටිකරයකට mention දෙන්න !*";
} else {
  imgmsg = "*Reply to a sticker !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ඔබගේ mention දුන් sticker img බවට පරිවර්තනය කරයි.";
} else {
  descg = "It converts your replied sticker to img.";
}
cmd({
  'pattern': "toimg",
  'react': '🔮',
  'alias': ['s', "stic"],
  'desc': descg,
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x1e9a10, _0x519f91, _0x5be87d, {
  from: _0x404450,
  l: _0xf727a6,
  quoted: _0x3b9fc8,
  body: _0x321108,
  isCmd: _0x50483c,
  command: _0x21326b,
  args: _0x41585e,
  q: _0x55203b,
  isGroup: _0x6a87e5,
  sender: _0x553c1b,
  senderNumber: _0x115bdc,
  botNumber2: _0x7f9830,
  botNumber: _0x3fd0ce,
  pushname: _0x388430,
  isMe: _0x5b26bc,
  isOwner: _0x1da140,
  groupMetadata: _0x1d8ed2,
  groupName: _0x4c139e,
  participants: _0x53b395,
  groupAdmins: _0x2b9132,
  isBotAdmins: _0x2bc56b,
  isAdmins: _0x250402,
  reply: _0x5a0a07
}) => {
  try {
    const _0x1ef94e = _0x5be87d.quoted ? _0x5be87d.quoted.type === 'stickerMessage' : false;
    if (_0x1ef94e) {
      var _0x3f894a = getRandom('');
      let _0x549c64 = _0x1ef94e ? await _0x5be87d.quoted.download(_0x3f894a) : await _0x5be87d.download(_0x3f894a);
      let _0x13a371 = await fileType.fromBuffer(_0x549c64);
      await fs.promises.writeFile('./' + _0x13a371.ext, _0x549c64);
      await _0x1e9a10.sendMessage(_0x404450, {
        'image': fs.readFileSync('./' + _0x13a371.ext),
        'caption': config.FOOTER
      }, {
        'quoted': qtoko
      });
    } else {
      return await _0x5a0a07(imgmsg);
    }
  } catch (_0x49405d) {
    _0x5a0a07("*Error !!*");
    _0xf727a6(_0x49405d);
  }
});
cmd({
  'pattern': "sticker",
  'react': '🔮',
  'alias': ['s', 'stic'],
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0xdfdeeb, _0x5c1646, _0x95ca7a, {
  from: _0x2b1f2e,
  l: _0x2f5389,
  quoted: _0x529548,
  body: _0xc7d021,
  isCmd: _0x535364,
  command: _0x1a288e,
  args: _0x11cfd1,
  q: _0x21af98,
  isGroup: _0xcd519d,
  sender: _0x246a0a,
  senderNumber: _0x3ec5f5,
  botNumber2: _0x1d56f4,
  botNumber: _0x3e459e,
  pushname: _0x34b450,
  isMe: _0x43450a,
  isOwner: _0x1ce20a,
  groupMetadata: _0x58dc9b,
  groupName: _0x5b7c30,
  participants: _0x2a005a,
  groupAdmins: _0x528266,
  isBotAdmins: _0x28d870,
  isAdmins: _0x1fe3ec,
  reply: _0x362cd0
}) => {
  try {
    const _0x5bf428 = _0x95ca7a.quoted ? _0x95ca7a.quoted.type === "viewOnceMessage" : false;
    const _0x2193be = _0x95ca7a.quoted ? _0x95ca7a.quoted.type === "imageMessage" || (_0x5bf428 ? _0x95ca7a.quoted.msg.type === "imageMessage" : false) : false;
    const _0x68d5f4 = _0x95ca7a.quoted ? _0x95ca7a.quoted.type === "stickerMessage" : false;
    if (_0x95ca7a.type === "imageMessage" || _0x2193be) {
      var _0x504e77 = getRandom('');
      if (_0x2193be) {
        await _0x95ca7a.quoted.download(_0x504e77);
      } else {
        await _0x95ca7a.download(_0x504e77);
      }
      let _0x15e103 = new Sticker(_0x504e77 + ".jpg", {
        'pack': "Didula Md",
        'author': "Didula Rashmika",
        'type': _0x21af98.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x1dd183 = await _0x15e103.toBuffer();
      return _0xdfdeeb.sendMessage(_0x2b1f2e, {
        'sticker': _0x1dd183
      }, {
        'quoted': qtoko
      });
    } else {
      if (_0x68d5f4) {
        var _0x3f0a92 = getRandom('');
        await _0x95ca7a.quoted.download(_0x3f0a92);
        let _0x1ee4ba = new Sticker(_0x3f0a92 + '.webp', {
          'pack': "Didula Md",
          'author': "Didula Rashmika",
          'type': _0x21af98.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': '12345',
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x58bfb7 = await _0x1ee4ba.toBuffer();
        return _0xdfdeeb.sendMessage(_0x2b1f2e, {
          'sticker': _0x58bfb7
        }, {
          'quoted': qtoko
        });
      } else {
        return await _0x362cd0(imgmsg);
      }
    }
  } catch (_0x58f7ce) {
    _0x362cd0("Error !!");
    console.log(_0x58f7ce);
  }
});
cmd({
  'pattern': "logolist",
  'desc': "Create logos",
  'category': "convert",
  'filename': __filename
}, async (_0x49ad27, _0x25d508, _0x38d914, {
  from: _0x544fbf,
  quoted: _0x1a9369,
  body: _0x4e978a,
  isCmd: _0x116be8,
  command: _0x26bf0a,
  args: _0x55702b,
  q: _0x2b4b89,
  isGroup: _0x40a992,
  sender: _0x2ff171,
  senderNumber: _0x6a7a39,
  botNumber2: _0x162a70,
  botNumber: _0x2750a1,
  pushname: _0x3a1be0,
  isMe: _0xb46a26,
  isOwner: _0x49a1a4,
  groupMetadata: _0x3ba210,
  groupName: _0x563cc8,
  participants: _0x2f5bdc,
  groupAdmins: _0x5463de,
  isBotAdmins: _0x21d82b,
  isAdmins: _0x814ff9,
  reply: _0x1d470b
}) => {
  try {
    if (!_0x2b4b89) {
      return _0x1d470b("*_Please give me a text._*");
    }
    let _0x22c5be = "*_Didula MD V2 💚 LOGO MAKER_*\n\n───────────────────\n*Text :* " + _0x2b4b89 + "\n───────────────────\n\n_🔢 Reply Below Number :_\n\n 1 || Black Pink\n 2 || Black Pink 2\n 3 || Black Pink 3\n 4 || Naruto\n 5 || Digital Glitch\n 6 || Pixel Glitch\n 7 || Comic Style\n 8 || Neon Light\n 9 || Free Bear\n10 || Devil Wings\n11 || Futuristic Technology\n12 || Silver 3D\n13 || 3D Paper Cut\n14 || Pubg 1\n15 || Pubg 2\n16 || Free Fire Cover\n17 || Text On Wet Glass\n18 || Typography\n19 || Modern Gold\n20 || Matrix\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ";
    const _0x284a1b = {
      'newsletterJid': "@newsletter",
      'newsletterName': "Didula MD V2 💚",
      'serverMessageId': 0x3e7
    };
    const _0x483a02 = {
      'mentionedJid': [_0x38d914.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x284a1b
    };
    const _0x1ebac8 = {
      'image': {
        'url': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg"
      },
      'caption': _0x22c5be,
      'contextInfo': _0x483a02
    };
    let _0x58203a = await _0x49ad27.sendMessage(_0x544fbf, _0x1ebac8, {
      'quoted': _0x25d508
    });
    _0x49ad27.ev.on("messages.upsert", async _0x46fed4 => {
      const _0x1f5d89 = _0x46fed4.messages[0x0];
      if (!_0x1f5d89.message || !_0x1f5d89.message.extendedTextMessage) {
        return;
      }
      const _0x31f2dc = _0x1f5d89.message.extendedTextMessage.text.trim();
      if (_0x1f5d89.message.extendedTextMessage.contextInfo && _0x1f5d89.message.extendedTextMessage.contextInfo.stanzaId === _0x58203a.key.id) {
        switch (_0x31f2dc) {
          case '1':
            let _0x3a30dd = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x3a30dd.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '2':
            let _0x205665 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x205665.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '3':
            let _0x5a660d = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x5a660d.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '4':
            let _0x231e1e = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x231e1e.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '5':
            let _0x120e43 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x120e43.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '6':
            let _0x2567f9 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x2567f9.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '7':
            let _0x3dd728 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x3dd728.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '8':
            let _0x4b5e71 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x4b5e71.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '9':
            let _0x2c5177 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x2c5177.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '10':
            let _0x18129d = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x18129d.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '11':
            let _0x48aae0 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x48aae0.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '12':
            let _0x3e3acd = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x3e3acd.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '13':
            let _0xc2f69e = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0xc2f69e.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '14':
            let _0x3f03e5 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-pubg-logo-maker-online-609.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x3f03e5.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '15':
            let _0x4beee1 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x4beee1.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '16':
            let _0x290278 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-free-fire-facebook-cover-online-567.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x290278.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '17':
            let _0x4e58de = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x4e58de.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '18':
            let _0x366290 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x366290.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '19':
            let _0x234fad = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/modern-gold-5-215.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x234fad.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          case '20':
            let _0x1201db = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/matrix-text-effect-154.html&name=" + _0x2b4b89);
            await _0x49ad27.sendMessage(_0x544fbf, {
              'image': {
                'url': '' + _0x1201db.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x25d508
            });
            break;
          default:
            _0x1d470b("*_Invalid number.Please reply a valid number._*");
        }
      }
    });
  } catch (_0x2d9b99) {
    console.log(_0x2d9b99);
    _0x1d470b('' + _0x2d9b99);
  }
});
const checkPermissions = (_0x2a7cd6, _0x39bfb9, _0xd1a508, _0xa9f33b) => {
  if (!_0x2a7cd6) {
    return "This command can only be used in groups.";
  }
  if (!_0x39bfb9 && !_0xd1a508) {
    return "This command can only be used by group admins.";
  }
  if (!_0xa9f33b) {
    return "Bot must be admin to use this command.";
  }
  return null;
};
cmd({
  'pattern': "del",
  'react': '❌',
  'alias': ["del"],
  'desc': "delete message",
  'category': "group",
  'use': '.del',
  'filename': __filename
}, async (_0x1bae58, _0x273be7, _0x3c283d, {
  from: _0x2438f7,
  l: _0x257e41,
  quoted: _0x524561,
  body: _0x476a0f,
  isCmd: _0x2fe01a,
  command: _0x4efc45,
  args: _0x8340e6,
  q: _0x49ad78,
  isGroup: _0x327b36,
  sender: _0x3e3af8,
  senderNumber: _0x33440b,
  botNumber2: _0x24f47f,
  botNumber: _0x28efc4,
  pushname: _0x17a75d,
  isMe: _0x1c7538,
  isOwner: _0x463bdd,
  groupMetadata: _0x53c6e7,
  groupName: _0x3f57f7,
  participants: _0x40cf07,
  isItzcp: _0x5b515b,
  groupAdmins: _0x2fb671,
  isBotAdmins: _0x15e94b,
  isAdmins: _0x391ea4,
  reply: _0x36a8a2
}) => {
  if (!_0x463bdd || !_0x391ea4) {
    return;
  }
  try {
    if (!_0x3c283d.quoted) {
      return _0x36a8a2(mg.notextfordel);
    }
    const _0x262dba = {
      'remoteJid': _0x3c283d.chat,
      'fromMe': false,
      'id': _0x3c283d.quoted.id,
      'participant': _0x3c283d.quoted.sender
    };
    await _0x1bae58.sendMessage(_0x3c283d.chat, {
      'delete': _0x262dba
    });
  } catch (_0xfc997) {
    console.log(_0xfc997);
    _0x36a8a2("successful..👨‍💻✅");
  }
});
cmd({
  'pattern': "join",
  'fromMe': true,
  'desc': "Make the bot join a group using an invite link.",
  'category': "group",
  'react': '🌀',
  'filename': __filename
}, async (_0x531284, _0x5b5d02, _0x54c9bf, {
  from: _0x1cfb4b,
  quoted: _0x93e14c,
  body: _0x3f9e12,
  args: _0x572f85,
  q: _0x4193c7,
  reply: _0x4f2175
}) => {
  try {
    if (!_0x4193c7 || !_0x4193c7.includes("chat.whatsapp.com")) {
      return await _0x4f2175("Please provide a valid WhatsApp group invite link.");
    }
    const _0x48227a = _0x4193c7.split("chat.whatsapp.com/")[0x1];
    const _0x439d01 = await _0x531284.groupAcceptInvite(_0x48227a);
    if (_0x439d01) {
      await _0x4f2175("✅ Successfully joined the group!");
    } else {
      await _0x4f2175("❌ Failed to join the group. Please check the invite link.");
    }
  } catch (_0x5bb4fe) {
    console.error("Error while joining group:", _0x5bb4fe);
    await _0x4f2175("❗ An error occurred while trying to join the group.");
  }
});
cmd({
  'pattern': 'left',
  'fromMe': true,
  'desc': "Make the bot leave the group.",
  'category': 'group',
  'react': '👋',
  'filename': __filename
}, async (_0x3de12c, _0x571679, _0x335f8d, {
  from: _0x531c72,
  isGroup: _0x1a3649,
  reply: _0x2ae418
}) => {
  try {
    if (!_0x1a3649) {
      return await _0x2ae418("❌ This command can only be used in a group.");
    }
    await _0x3de12c.groupLeave(_0x531c72);
    console.log("Bot left the group: " + _0x531c72);
  } catch (_0x415cae) {
    console.error("Error while leaving group:", _0x415cae);
    await _0x2ae418("❗ An error occurred while trying to leave the group.");
  }
});
cmd({
  'pattern': 'hidetag',
  'fromMe': true,
  'desc': "Send a message with hidden tags to all group members.",
  'category': "group",
  'react': '🔍',
  'filename': __filename
}, async (_0x9baf08, _0x3c417d, _0x363c96, {
  from: _0x5351fb,
  isGroup: _0x14aeb0,
  args: _0x3faf63,
  q: _0x4ad66f,
  participants: _0x704aad,
  reply: _0xd3d75a
}) => {
  try {
    if (!_0x14aeb0) {
      return await _0xd3d75a("❌ This command can only be used in a group.");
    }
    if (!_0x4ad66f) {
      return await _0xd3d75a("❗ Please provide a message to send.");
    }
    const _0x3d8319 = _0x704aad.map(_0x507d1e => _0x507d1e.id);
    await _0x9baf08.sendMessage(_0x5351fb, {
      'text': _0x4ad66f,
      'mentions': _0x3d8319
    });
    console.log("Hidetag message sent to all group members.");
  } catch (_0x140b8c) {
    console.error("Error while sending hidetag message:", _0x140b8c);
    await _0xd3d75a("❗ An error occurred while trying to send the hidetag message.");
  }
});
cmd({
  'pattern': "mute",
  'react': '🔇',
  'desc': "close a group",
  'category': "group",
  'use': ".mute",
  'filename': __filename
}, async (_0x321c35, _0x235001, _0x19f236, {
  from: _0x56b58b,
  prefix: _0x5c4213,
  l: _0x19c634,
  quoted: _0x5d2261,
  body: _0x201e97,
  isCmd: _0x8ef065,
  command: _0x1684c1,
  args: _0x3c5ccb,
  q: _0x58d12c,
  isGroup: _0x5074bb,
  sender: _0x40b605,
  senderNumber: _0x57d61b,
  botNumber2: _0x5f236f,
  botNumber: _0x4c1497,
  pushname: _0x50d84d,
  isMe: _0xb3b9eb,
  isOwner: _0x5d4b80,
  groupMetadata: _0x26f491,
  groupName: _0x4d0462,
  participants: _0x3cd79d,
  groupAdmins: _0x26d9c5,
  isBotAdmins: _0x535cc2,
  isAdmins: _0x3210ce,
  reply: _0x457da5
}) => {
  try {
    if (!_0x5074bb) {
      return _0x457da5(ONLGROUP);
    }
    if (!_0x535cc2) {
      return _0x457da5(botAdmin);
    }
    if (!_0x3210ce) {
      return _0x457da5(ADMIN);
    }
    await _0x321c35.groupSettingUpdate(_0x235001.chat, "announcement");
    await _0x321c35.sendMessage(_0x56b58b, {
      'react': {
        'text': '✅',
        'key': _0x235001.key
      }
    });
  } catch (_0x210936) {
    _0x457da5("🛑 GROUP IS CLOSED MY BOT OWNER");
    _0x19c634(_0x210936);
  }
});
cmd({
  'pattern': 'unmute',
  'react': '🔊',
  'desc': "open a group",
  'category': "group",
  'use': ".unmute",
  'filename': __filename
}, async (_0x4d7044, _0x492471, _0x5e3e9a, {
  from: _0x1294b2,
  prefix: _0x34181f,
  l: _0x38d9e8,
  quoted: _0x148abc,
  body: _0x203fa4,
  isCmd: _0x1d1a79,
  command: _0x5ac9ab,
  args: _0xd61e1b,
  q: _0x105de5,
  isGroup: _0x2e8738,
  sender: _0x9e7288,
  senderNumber: _0x43d1cc,
  botNumber2: _0x191b40,
  botNumber: _0x200236,
  pushname: _0x241fc9,
  isMe: _0x2a3f4f,
  isOwner: _0x12c534,
  groupMetadata: _0xc04ff8,
  groupName: _0x2fb825,
  participants: _0x3b098c,
  groupAdmins: _0x481090,
  isBotAdmins: _0x1ecaeb,
  isAdmins: _0xbb3c79,
  reply: _0x7d9f92
}) => {
  try {
    if (!_0x2e8738) {
      return _0x7d9f92(ONLGROUP);
    }
    if (!_0x1ecaeb) {
      return _0x7d9f92(botAdmin);
    }
    if (!_0xbb3c79) {
      return _0x7d9f92(ADMIN);
    }
    await _0x4d7044.groupSettingUpdate(_0x492471.chat, "not_announcement");
    await _0x4d7044.sendMessage(_0x1294b2, {
      'react': {
        'text': '✅',
        'key': _0x492471.key
      }
    });
  } catch (_0x4c65a7) {
    _0x7d9f92("🛑 GROUP IS OPEN MY BOT OWNER");
    _0x38d9e8(_0x4c65a7);
  }
});
cmd({
  'pattern': "promote",
  'react': '📍',
  'desc': "promote admin to a member",
  'category': "group",
  'use': ".promote",
  'filename': __filename
}, async (_0x2facec, _0x4ce76f, _0x4ab2b8, {
  from: _0x157f16,
  prefix: _0x5f1a4a,
  l: _0x268c13,
  quoted: _0x3f4b59,
  body: _0x4c26ef,
  isCmd: _0x1436b4,
  command: _0x389dd5,
  args: _0x49910,
  q: _0x304c2b,
  isGroup: _0x31a97,
  sender: _0x6a9720,
  senderNumber: _0x50317b,
  botNumber2: _0xd27d57,
  botNumber: _0x5d9d31,
  pushname: _0x552652,
  isMe: _0x1aa8b4,
  isOwner: _0x11d2f3,
  groupMetadata: _0x88a03b,
  groupName: _0x224643,
  participants: _0x4916b3,
  groupAdmins: _0x187c07,
  isBotAdmins: _0x417ed3,
  isAdmins: _0x1003d3,
  reply: _0x5f59f6
}) => {
  try {
    if (!_0x31a97) {
      return _0x5f59f6(ONLGROUP);
    }
    if (!_0x417ed3) {
      return _0x5f59f6(botAdmin);
    }
    if (!_0x1003d3) {
      return _0x5f59f6(ADMIN);
    }
    let _0x4b9c3b = _0x4ce76f.mentionedJid ? _0x4ce76f.mentionedJid : _0x4ce76f.quoted ? _0x4ce76f.quoted.sender : _0x304c2b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x2facec.groupParticipantsUpdate(_0x4ce76f.chat, [_0x4b9c3b], "promote").then(_0x557f16 => _0x5f59f6(jsonformat(_0x557f16)))["catch"](_0x155cef => _0x5f59f6(jsonformat(_0x155cef)));
    _0x5f59f6("🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER");
    await _0x2facec.sendMessage(_0x157f16, {
      'react': {
        'text': '✅',
        'key': _0x4ce76f.key
      }
    });
  } catch (_0x4df488) {
    _0x5f59f6("*Done ✓✓*");
    _0x268c13(_0x4df488);
  }
});
cmd({
  'pattern': "demote",
  'react': '📍',
  'desc': "demote admin to a member",
  'category': "group",
  'use': ".demote",
  'filename': __filename
}, async (_0x3f89c2, _0x3d2fb3, _0x22cf08, {
  from: _0x21e677,
  prefix: _0x65f146,
  l: _0x4dfe25,
  quoted: _0x2df0af,
  body: _0x24e73c,
  isCmd: _0x213178,
  command: _0x2301ec,
  args: _0x506f12,
  q: _0x449764,
  isGroup: _0x55b911,
  sender: _0x4f4613,
  senderNumber: _0x30b0d2,
  botNumber2: _0x31b7c5,
  botNumber: _0x3d93aa,
  pushname: _0x50789e,
  isMe: _0x278d29,
  isOwner: _0x2ab632,
  groupMetadata: _0x1fdd55,
  groupName: _0x5d0743,
  participants: _0x33f340,
  groupAdmins: _0x5c07cf,
  isBotAdmins: _0x3f57b0,
  isAdmins: _0x30e560,
  reply: _0x47dbcf
}) => {
  try {
    if (!_0x55b911) {
      return _0x47dbcf(ONLGROUP);
    }
    if (!_0x3f57b0) {
      return _0x47dbcf(botAdmin);
    }
    if (!_0x30e560) {
      return _0x47dbcf(ADMIN);
    }
    let _0x1c6e4a = _0x3d2fb3.mentionedJid ? _0x3d2fb3.mentionedJid : _0x3d2fb3.quoted ? _0x3d2fb3.quoted.sender : _0x449764.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x3f89c2.groupParticipantsUpdate(_0x3d2fb3.chat, [_0x1c6e4a], "demote").then(_0x31bc6f => _0x47dbcf(jsonformat(_0x31bc6f)))["catch"](_0x563e01 => _0x47dbcf(jsonformat(_0x563e01)));
    _0x47dbcf("🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER");
    await _0x3f89c2.sendMessage(_0x21e677, {
      'react': {
        'text': '✅',
        'key': _0x3d2fb3.key
      }
    });
  } catch (_0x5c2297) {
    _0x47dbcf("*Done ✓✓*");
    _0x4dfe25(_0x5c2297);
  }
});
cmd({
  'pattern': 'remove',
  'desc': "Remove a member from the group.",
  'category': 'group',
  'react': '🚫',
  'filename': __filename
}, async (_0x6567f5, _0x2277a0, _0x5c66d9, {
  from: _0x185eca,
  quoted: _0x45b186,
  body: _0x4fd70b,
  isCmd: _0x434d33,
  command: _0x3786d2,
  args: _0x4c66ca,
  q: _0x45db83,
  isGroup: _0x89c5df,
  sender: _0x4492fd,
  senderNumber: _0x3ddc7e,
  botNumber2: _0x57d7bd,
  botNumber: _0x34d86d,
  pushname: _0x538c62,
  isMe: _0x3dd7de,
  isOwner: _0x22d86a,
  groupMetadata: _0x67af3f,
  groupName: _0x33911c,
  participants: _0x35557a,
  groupAdmins: _0x58bf75,
  isBotAdmins: _0x4aef6f,
  isAdmins: _0x1ea899,
  reply: _0x307113
}) => {
  try {
    if (!_0x89c5df) {
      return _0x307113("This command can only be used in a group.");
    }
    if (!_0x4aef6f) {
      return _0x307113("Bot must be an admin to use this command.");
    }
    if (!_0x1ea899) {
      return _0x307113("You must be an admin to use this command.");
    }
    const _0x55f982 = _0x5c66d9.mentioned[0x0] || _0x5c66d9.quoted?.["sender"];
    if (!_0x55f982) {
      return _0x307113("Please tag or reply to a user to remove.");
    }
    await _0x6567f5.groupParticipantsUpdate(_0x185eca, [_0x55f982], 'remove');
    await _0x307113('@' + _0x55f982.split('@')[0x0] + " has been removed from the group.", {
      'mentions': [_0x55f982]
    });
  } catch (_0x2ccb8e) {
    console.log(_0x2ccb8e);
    _0x307113('' + _0x2ccb8e);
  }
});
cmd({
  'pattern': "add",
  'desc': "Add a member to the group.",
  'category': "group",
  'react': '✅',
  'filename': __filename
}, async (_0x4e9534, _0x48dd0b, _0x3e8703, {
  from: _0x3df4d6,
  quoted: _0x2ab28a,
  body: _0x5e94cb,
  isCmd: _0x36b133,
  command: _0x9e66ed,
  args: _0x341b23,
  q: _0x524247,
  isGroup: _0x46ccfa,
  sender: _0x341e4c,
  senderNumber: _0x146799,
  botNumber2: _0x466ac7,
  botNumber: _0xc2b49a,
  pushname: _0x3b33a7,
  isMe: _0x216c5f,
  isOwner: _0x1b7267,
  groupMetadata: _0x4fef56,
  groupName: _0x197544,
  participants: _0x5abfb6,
  groupAdmins: _0x1660c4,
  isBotAdmins: _0x3238b0,
  isAdmins: _0x147b21,
  reply: _0x1f9150
}) => {
  try {
    if (!_0x46ccfa) {
      return _0x1f9150("This command can only be used in a group.");
    }
    if (!_0x3238b0) {
      return _0x1f9150("Bot must be an admin to use this command.");
    }
    if (!_0x147b21) {
      return _0x1f9150("You must be an admin to use this command.");
    }
    const _0x2a19f3 = _0x524247.split(" ")[0x0];
    if (!_0x2a19f3) {
      return _0x1f9150("Please provide a phone number to add.");
    }
    await _0x4e9534.groupParticipantsUpdate(_0x3df4d6, [_0x2a19f3 + "@s.whatsapp.net"], "add");
    await _0x1f9150('@' + _0x2a19f3 + " has been added to the group.", {
      'mentions': [_0x2a19f3 + "@s.whatsapp.net"]
    });
  } catch (_0x192d3f) {
    console.log(_0x192d3f);
    _0x1f9150('' + _0x192d3f);
  }
});
cmd({
  'pattern': 'groupinfo',
  'desc': "Get information about the group.",
  'category': "group",
  'filename': __filename,
  'react': 'ℹ️'
}, async (_0x29df14, _0x352bf7, _0x53fa32, {
  from: _0x4323df,
  isGroup: _0x4d70b5,
  groupMetadata: _0x19284a,
  groupName: _0x1f9790,
  participants: _0x5e2db7,
  groupAdmins: _0x2700bd,
  reply: _0x2c34b8
}) => {
  try {
    if (!_0x4d70b5) {
      return _0x2c34b8("This command can only be used in groups.");
    }
    const _0x44d86c = "*Didula MD V2 💚*\n\n\n📋 *Group Information*\n👥 *Name:* " + _0x1f9790 + "\n📝 *Description:* " + (_0x19284a.desc || "No description") + "\n🆔 *ID:* " + _0x4323df + "\n👑 *Owner:* " + (_0x19284a.owner || "Not available") + "\n👤 *Members:* " + _0x5e2db7.length + "\n👮 *Admins:* " + _0x2700bd.length + "\n📅 *Created:* " + new Date(_0x19284a.creation * 0x3e8).toLocaleString() + "\n\n*Didula MD V2 💚*\n        ";
    _0x2c34b8(_0x44d86c);
  } catch (_0x5e55e4) {
    console.error(_0x5e55e4);
    _0x2c34b8("❌ Error: " + _0x5e55e4);
  }
});
cmd({
  'pattern': "tagadmin",
  'alais': ["tagadmins"],
  'react': '🙀',
  'desc': "Tags all the admins in the group.",
  'category': 'group',
  'filename': __filename
}, async (_0x4b052f, _0xa680f8, _0x4dcaea, {
  from: _0xae6688,
  prefix: _0x2ad436,
  l: _0x223304,
  quoted: _0x504694,
  body: _0x4d2532,
  isCmd: _0x266b7c,
  command: _0xcdc6f0,
  args: _0x464b7a,
  q: _0x40f8af,
  isGroup: _0x315381,
  sender: _0x20603b,
  senderNumber: _0x261cd1,
  botNumber2: _0x528b35,
  botNumber: _0x3befdb,
  pushname: _0x3bdb9c,
  isMe: _0x395f5e,
  isOwner: _0x106393,
  groupMetadata: _0x38e2dd,
  groupName: _0x3abbe3,
  participants: _0x528382,
  groupAdmins: _0x2ef9d8,
  isBotAdmins: _0x1634af,
  isAdmins: _0x13cc35,
  reply: _0x1b52b8
}) => {
  try {
    if (!_0x315381) {
      return _0x1b52b8("This command is only for groups.");
    }
    if (!_0x13cc35) {
      return _0x1b52b8("This command is only for group admin.");
    }
    if (_0x2ef9d8.length === 0x0) {
      return _0x1b52b8("There are no admins in this group.");
    }
    let _0x4b37cc = "*TAGGING ALL ADMINS IN THE GROUP 🔳:*\n\n";
    for (let _0x16a7b4 of _0x2ef9d8) {
      _0x4b37cc += '@' + _0x16a7b4.split('@')[0x0] + "\n";
    }
    await _0x4b052f.sendMessage(_0xae6688, {
      'text': _0x4b37cc,
      'mentions': _0x2ef9d8
    }, {
      'quoted': qtoko
    });
  } catch (_0x2babf6) {
    console.error("Error tagging admins:", _0x2babf6);
    _0x1b52b8("you are not an admin.");
  }
});
cmd({
  'pattern': "opentime",
  'react': '🔖',
  'desc': "To open group to a time",
  'category': "group",
  'use': '.opentime',
  'filename': __filename
}, async (_0x41948a, _0x2d7809, _0xa5891d, {
  from: _0x200217,
  prefix: _0x3f49e6,
  l: _0x3519bf,
  quoted: _0x2dff50,
  body: _0x5dde73,
  isCmd: _0x37ba7e,
  command: _0x7c4349,
  args: _0x1eaf51,
  q: _0x2effd6,
  isGroup: _0x273b3a,
  sender: _0x2830e7,
  senderNumber: _0xcf11d1,
  botNumber2: _0xded1c0,
  botNumber: _0x1b505c,
  pushname: _0x2435ea,
  isMe: _0x521b57,
  isOwner: _0x5c3e95,
  groupMetadata: _0x393d82,
  groupName: _0x1fb52e,
  participants: _0x24c3c1,
  groupAdmins: _0x1e28fe,
  isBotAdmins: _0xc0c67e,
  isAdmins: _0x2edcd9,
  reply: _0x4a14a2
}) => {
  try {
    if (!_0x273b3a) {
      return _0x4a14a2(ONLGROUP);
    }
    if (!_0x2edcd9) {
      return _0x4a14a2(ADMIN);
    }
    if (_0x1eaf51[0x1] == "second") {
      var _0x50d7e9 = _0x1eaf51[0x0] * '1000';
    } else {
      if (_0x1eaf51[0x1] == "minute") {
        var _0x50d7e9 = _0x1eaf51[0x0] * "60000";
      } else {
        if (_0x1eaf51[0x1] == "hour") {
          var _0x50d7e9 = _0x1eaf51[0x0] * "3600000";
        } else {
          if (_0x1eaf51[0x1] == "day") {
            var _0x50d7e9 = _0x1eaf51[0x0] * "86400000";
          } else {
            return _0x4a14a2("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
        }
      }
    }
    _0x4a14a2("Open time " + _0x2effd6 + " starting from now");
    setTimeout(() => {
      _0x41948a.groupSettingUpdate(_0x200217, "not_announcement");
      _0x4a14a2("*OPEN TIME* THE GROUP WAS OPENED BY AWAIS MD TO APPROVED ADMIN\n NOW MEMBERS CAN SEND MESSAGES 🔓");
    }, _0x50d7e9);
    await _0x41948a.sendMessage(_0x200217, {
      'react': {
        'text': '✅',
        'key': _0x2d7809.key
      }
    });
  } catch (_0x3281d2) {
    _0x4a14a2("*Error !!*");
    _0x3519bf(_0x3281d2);
  }
});
cmd({
  'pattern': 'closetime',
  'react': '🔖',
  'desc': "To close group to a time",
  'category': "group",
  'use': ".closstime",
  'filename': __filename
}, async (_0x368cb6, _0xce2679, _0x7169e5, {
  from: _0x4b4a11,
  prefix: _0x10d7b0,
  l: _0x8d2300,
  quoted: _0x590e9f,
  body: _0x4c96ae,
  isCmd: _0x52226a,
  command: _0x5f01a6,
  args: _0x3e229c,
  q: _0x3ed25f,
  isGroup: _0x514959,
  sender: _0x2bdaff,
  senderNumber: _0x573502,
  botNumber2: _0x2a23c0,
  botNumber: _0x4fea75,
  pushname: _0x35eb95,
  isMe: _0xcc4667,
  isOwner: _0x636167,
  groupMetadata: _0x3cf6cf,
  groupName: _0x211581,
  participants: _0xf3b1ca,
  groupAdmins: _0x5f3188,
  isBotAdmins: _0x57dac4,
  isAdmins: _0x5e63b5,
  reply: _0x23f5c4
}) => {
  try {
    if (!_0x514959) {
      return _0x23f5c4(ONLGROUP);
    }
    if (!_0x5e63b5) {
      return _0x23f5c4(ADMIN);
    }
    if (_0x3e229c[0x1] == "second") {
      var _0x44f778 = _0x3e229c[0x0] * "1000";
    } else {
      if (_0x3e229c[0x1] == "minute") {
        var _0x44f778 = _0x3e229c[0x0] * "60000";
      } else {
        if (_0x3e229c[0x1] == "hour") {
          var _0x44f778 = _0x3e229c[0x0] * '3600000';
        } else {
          if (_0x3e229c[0x1] == "day") {
            var _0x44f778 = _0x3e229c[0x0] * "86400000";
          } else {
            return _0x23f5c4("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
        }
      }
    }
    _0x23f5c4("Close time " + _0x3ed25f + " starting from now");
    setTimeout(() => {
      _0x368cb6.groupSettingUpdate(_0x4b4a11, "announcement");
      _0x23f5c4("*CLOSE TIME* GROUP CLOSED BY AWAIS MD AT APPROVED ADMIN\nNOW ONLY ADMIN CAN SEND MESSAGES 🔐");
    }, _0x44f778);
    await _0x368cb6.sendMessage(_0x4b4a11, {
      'react': {
        'text': '✅',
        'key': _0xce2679.key
      }
    });
  } catch (_0x54fc9c) {
    _0x23f5c4("*Error !!*");
    _0x8d2300(_0x54fc9c);
  }
});
cmd({
  'pattern': "kickall",
  'desc': "Kicks all non-admin members from the group.",
  'react': '👏',
  'category': "group",
  'filename': __filename
}, async (_0x39bbb6, _0x2cdd00, _0x3a802a, {
  from: _0x428d96,
  quoted: _0x18344b,
  body: _0x3556ad,
  isCmd: _0x48690f,
  command: _0x15d97d,
  args: _0x6d797b,
  q: _0x1d7e96,
  isGroup: _0x398e4d,
  sender: _0x5d6e77,
  senderNumber: _0x42b115,
  botNumber2: _0x2df882,
  botNumber: _0x1b2623,
  pushname: _0x24a3ca,
  isMe: _0x1711f0,
  isOwner: _0x46aa94,
  groupMetadata: _0x42b1fa,
  groupName: _0x2cb344,
  participants: _0x27d6a5,
  groupAdmins: _0x30c6bc,
  isBotAdmins: _0x29bea3,
  isAdmins: _0x420de7,
  reply: _0x51f1a8
}) => {
  try {
    if (!_0x420de7) {
      return _0x51f1a8("ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ 💀");
    }
    if (!_0x46aa94) {
      return _0x51f1a8("ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴏᴡɴᴇʀ ᴏꜰ ᴅɪᴅᴜʟᴀ ᴍᴅ");
    }
    if (!_0x398e4d) {
      return _0x51f1a8("This command is only for groups.");
    }
    if (!_0x29bea3) {
      return _0x51f1a8("I need admin privileges to kick users.");
    }
    const _0x487f15 = _0x42b1fa.participants;
    const _0x22a178 = _0x487f15.filter(_0x199f9c => !_0x30c6bc.includes(_0x199f9c.id));
    if (_0x22a178.length === 0x0) {
      return _0x51f1a8("There are no non-admin members to kick.");
    }
    for (let _0x5dd2a3 of _0x22a178) {
      await _0x39bbb6.groupParticipantsUpdate(_0x3a802a.chat, [_0x5dd2a3.id], 'remove');
    }
    _0x51f1a8("Didula MD V2 💚 Successfully kicked all non-admin members from the group.");
  } catch (_0x12342c) {
    console.error("Error kicking users:", _0x12342c);
    _0x51f1a8("An error occurred while trying to kick all members. Please try again.");
  }
});
cmd({
  'pattern': "msginfo",
  'desc': "Get msg info",
  'category': 'owner',
  'filename': __filename
}, async (_0x4283f7, _0x3f6cd3, _0x20d06a, {
  from: _0x95b941,
  quoted: _0x1651ef,
  body: _0x2fb35d,
  isCmd: _0x575575,
  command: _0xd85c61,
  args: _0x23e5d5,
  q: _0x15b97b,
  isGroup: _0x480ec6,
  sender: _0x56f207,
  senderNumber: _0x30c744,
  botNumber2: _0x50292c,
  botNumber: _0xd6f4ab,
  pushname: _0x1cf74e,
  isMe: _0x4e40ec,
  isOwner: _0x2e7226,
  groupMetadata: _0x9cbf73,
  groupName: _0x44cf14,
  participants: _0x59e72b,
  groupAdmins: _0x144915,
  isBotAdmins: _0x322c6f,
  isAdmins: _0x414b12,
  reply: _0x578b7c
}) => {
  try {
    if (!_0x2e7226) {
      return _0x578b7c("*_This is an owner cmd._*");
    }
    let _0x1f9748 = _0x20d06a.quoted.sender.replace('@s.whatsapp.net', '');
    let _0x57d71e = "*DIDULA MD V2 MESSEGE INFO*\n\n*➤ Message ID :* " + _0x20d06a.quoted.id + "\n\n*➤ Message Type :* " + _0x20d06a.quoted.type + "\n\n*➤ Sender Number :* " + _0x1f9748 + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
    const _0x4b6236 = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x4103ae = {
      'mentionedJid': [_0x20d06a.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x4b6236
    };
    const _0x50e644 = {
      'text': _0x57d71e,
      'contextInfo': _0x4103ae
    };
    await _0x4283f7.sendMessage(_0x95b941, _0x50e644, {
      'quoted': _0x3f6cd3
    });
  } catch (_0x3778a7) {
    _0x578b7c('' + _0x3778a7);
  }
});
cmd({
  'pattern': "block",
  'desc': "Block a user.",
  'category': "owner",
  'react': '🚫',
  'filename': __filename
}, async (_0x5452b0, _0x44db3f, _0x200ad9, {
  from: _0xcb9c90,
  isOwner: _0x2c213d,
  quoted: _0x457443,
  reply: _0x5cff7e
}) => {
  if (!_0x2c213d) {
    return _0x5cff7e("❌ owner command !");
  }
  if (!_0x457443) {
    return _0x5cff7e("❌ Please reply to the user you want to block.");
  }
  const _0xd889b = _0x457443.sender;
  try {
    await _0x5452b0.updateBlockStatus(_0xd889b, "block");
    _0x5cff7e("😑🖕 " + _0xd889b + " blocked successfully.");
  } catch (_0x41ed4d) {
    _0x5cff7e("❌ Error blocking user: " + _0x41ed4d.message);
  }
});
cmd({
  'pattern': "unblock",
  'desc': "Unblock a user.",
  'category': "owner",
  'react': '✅',
  'filename': __filename
}, async (_0x255917, _0x5831ff, _0x5d2084, {
  from: _0x15bc9e,
  isOwner: _0x5f3eb0,
  quoted: _0x2a3826,
  reply: _0x23bba1
}) => {
  if (!_0x5f3eb0) {
    return _0x23bba1("❌ You are not the owner!");
  }
  if (!_0x2a3826) {
    return _0x23bba1("❌ Please reply to the user you want to unblock.");
  }
  const _0x1e3286 = _0x2a3826.sender;
  try {
    await _0x255917.updateBlockStatus(_0x1e3286, 'unblock');
    _0x23bba1("✅ User " + _0x1e3286 + " unblocked successfully.");
  } catch (_0x1eabd2) {
    _0x23bba1("❌ Error unblocking user: " + _0x1eabd2.message);
  }
});
cmd({
  'pattern': "clearchats",
  'desc': "Clear all chats from the bot.",
  'category': "owner",
  'react': '🧹',
  'filename': __filename
}, async (_0x132a26, _0x36df3d, _0x5ecae6, {
  from: _0x1e9d41,
  isOwner: _0x36fcd2,
  reply: _0x2fff6a
}) => {
  if (!_0x36fcd2) {
    return _0x2fff6a("❌ You are not the owner!");
  }
  try {
    const _0x4f2ea8 = _0x132a26.chats.all();
    for (const _0xad9288 of _0x4f2ea8) {
      await _0x132a26.modifyChat(_0xad9288.jid, 'delete');
    }
    _0x2fff6a("🧹 All chats cleared successfully!");
  } catch (_0xcbc96f) {
    _0x2fff6a("❌ Error clearing chats: " + _0xcbc96f.message);
  }
});
cmd({
  'pattern': "ckcm",
  'desc': "Forward messages",
  'alias': ['fo'],
  'category': "owner",
  'use': ".forward <Jid address>",
  'filename': __filename
}, async (_0xb9e9d0, _0x15c957, _0xa2202b, {
  from: _0x46a066,
  quoted: _0x13af89,
  q: _0x1a56d5,
  isOwner: _0x3f57c7,
  isMe: _0x1c28f7,
  reply: _0x157b8b
}) => {
  if (!_0x3f57c7 & !_0x1c28f7) {
    return _0x157b8b("*You Are Not Owner Or Bot*");
  }
  if (!_0x1a56d5) {
    return _0x157b8b("Please provide a target JID address ❌");
  }
  if (!_0x13af89) {
    return _0x157b8b("Please reply to a message you want to forward ❌");
  }
  const _0x183afa = _0x13af89.fakeObj ? _0x13af89.fakeObj : _0x13af89;
  try {
    await _0xb9e9d0.sendMessage(_0x1a56d5, {
      'forward': _0x183afa
    }, {
      'quoted': qtoko
    });
    return _0x157b8b("*Message forwarded successfully to:*\n\n" + _0x1a56d5 + " ✅");
  } catch (_0x3480c6) {
    console.error("Error forwarding message:", _0x3480c6);
    return _0x157b8b("Failed to forward the message ❌");
  }
});
cmd({
  'pattern': "restart",
  'desc': "restart the bot",
  'category': "owner",
  'filename': __filename
}, async (_0x4282d8, _0x2fd37d, _0x163ac4, {
  from: _0x7de31f,
  quoted: _0xffc9a4,
  body: _0x219f6f,
  isCmd: _0x1c78f4,
  command: _0x510232,
  args: _0x400fa6,
  q: _0x52e395,
  isGroup: _0xce8aaf,
  sender: _0x24afa2,
  senderNumber: _0x4dbd6e,
  botNumber2: _0x46a29c,
  botNumber: _0x562965,
  pushname: _0xc2de68,
  isMe: _0x5b4965,
  isOwner: _0x1ae18a,
  groupMetadata: _0x110248,
  groupName: _0x3e2851,
  participants: _0x44f67c,
  groupAdmins: _0x57c8ee,
  isBotAdmins: _0x2904e0,
  isAdmins: _0x3427b7,
  reply: _0x432434
}) => {
  try {
    const {
      exec: _0x4c7449
    } = require("child_process");
    _0x432434("Didula MD V2 💚 restarting...");
    await sleep(0x5dc);
    _0x4c7449("pm2 restart all");
  } catch (_0x3fecf9) {
    console.log(_0x3fecf9);
    _0x432434('' + _0x3fecf9);
  }
});
cmd({
  'pattern': "gjid",
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': "owner",
  'react': '📝',
  'filename': __filename
}, async (_0x18a7a6, _0x4e3eff, _0x58ead0, {
  from: _0x14f757,
  isOwner: _0x4f8231,
  reply: _0x3fd9c3
}) => {
  if (!_0x4f8231) {
    return _0x3fd9c3("❌ You are not the owner!");
  }
  const _0x5d4eae = await _0x18a7a6.groupFetchAllParticipating();
  const _0x6a4eec = Object.keys(_0x5d4eae).join("\n");
  _0x3fd9c3("📝 *Group JIDs:*\n\n" + _0x6a4eec);
});
cmd({
  'pattern': 'npm',
  'desc': "Get npm info",
  'category': "search",
  'filename': __filename
}, async (_0x9a72bc, _0x13bdbe, _0x47c2f8, {
  from: _0x435678,
  quoted: _0x5cc8ae,
  body: _0x59c054,
  isCmd: _0x3c896f,
  command: _0x5a577b,
  args: _0x547ad0,
  q: _0x111510,
  isGroup: _0x29bf37,
  sender: _0x46779a,
  senderNumber: _0x3342ca,
  botNumber2: _0x37e384,
  botNumber: _0x1aac36,
  pushname: _0x35c4f4,
  isMe: _0x63fadf,
  isOwner: _0x38b66d,
  groupMetadata: _0x41bbf2,
  groupName: _0x1c39fb,
  participants: _0x1c0ba4,
  groupAdmins: _0x5d01fb,
  isBotAdmins: _0x3e4c6b,
  isAdmins: _0x5a9902,
  reply: _0x2eb8e8
}) => {
  try {
    if (!_0x111510) {
      return _0x2eb8e8("*use  .npm axios*");
    }
    let _0x5c928d = await axios.get("https://www.npmjs.com/package/" + _0x111510);
    let _0x533340 = cheerio.load(_0x5c928d.data);
    const _0xbb8bb0 = _0x533340("#top > div.w-100.ph0-l.ph3.ph4-m > h2 > span").text().trim();
    const _0x40d5b4 = _0x533340("#top > div.w-100.ph0-l.ph3.ph4-m > span:nth-child(2)").text().trim();
    const _0x192029 = _0x533340("#top > div.w-100.ph0-l.ph3.ph4-m > span:nth-child(4) > time").text().trim();
    const _0x42c728 = _0x533340("#repository-link").text().trim();
    let _0x4eeccf = "*DIDULA MD NPM INFO_*\n\n*➤ Package :* " + _0xbb8bb0 + "\n\n*➤ Version :* " + _0x40d5b4 + "\n\n*➤ Published :* " + _0x192029 + "\n\n*➤ Repository :* " + _0x42c728 + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
    const _0x7c01d1 = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x1565ff = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x7c01d1
    };
    const _0xa0d7d6 = {
      'image': {
        'url': 'https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png'
      },
      'caption': _0x4eeccf,
      'contextInfo': _0x1565ff
    };
    await _0x9a72bc.sendMessage(_0x435678, _0xa0d7d6, {
      'quoted': _0x13bdbe
    });
  } catch (_0x10ad41) {
    console.log(_0x10ad41);
    _0x2eb8e8('' + errrMsg);
  }
});
cmd({
  'pattern': 'cineinfo',
  'desc': "cinesubz.co info",
  'category': 'search',
  'filename': __filename
}, async (_0x432c9c, _0x5caacd, _0x2e10ed, {
  from: _0x3c4dc7,
  quoted: _0x28a820,
  body: _0x1d8822,
  isCmd: _0x40ac89,
  command: _0x2b7440,
  args: _0x554a42,
  q: _0x377e7b,
  isGroup: _0x2cb9c2,
  sender: _0xc9b9b7,
  senderNumber: _0x372771,
  botNumber2: _0x594c01,
  botNumber: _0x15c499,
  pushname: _0x4e9ba4,
  isMe: _0x127cfa,
  isOwner: _0x4ae69e,
  groupMetadata: _0x5c02ff,
  groupName: _0x3b7abf,
  participants: _0x4a50d6,
  groupAdmins: _0x4bd001,
  isBotAdmins: _0x402749,
  isAdmins: _0x23932e,
  reply: _0x3ab39f
}) => {
  try {
    if (!_0x377e7b) {
      return _0x3ab39f("*_Please give me a movie name._*");
    }
    let _0x2ec175 = await axios.get("https://cinesubz.co/?s=" + _0x377e7b);
    let _0x4d6ab1 = cheerio.load(_0x2ec175.data);
    let _0x154708 = _0x4d6ab1("#contenedor > div.module > div.content.rigth.csearch > div > div:nth-child(2) > article > div.details > div.title > a").attr('href');
    if (!_0x154708) {
      let _0x2c5eca = _0x4d6ab1("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2 > span").text();
      return _0x3ab39f("No results to show with *" + _0x2c5eca + '*');
    }
    let _0x40af8c = await axios.get('' + _0x154708);
    _0x4d6ab1 = cheerio.load(_0x40af8c.data);
    const _0x53945e = _0x4d6ab1("#single > div.content.right > div.sheader > div.data > h1").text();
    const _0x2b5504 = _0x4d6ab1("#single > div.content.right > div.sheader > div.data > div.extra > span.date").text();
    const _0x89be37 = _0x4d6ab1("#single > div.content.right > div.sheader > div.data > div.extra > span.country").text();
    const _0x3abd81 = _0x4d6ab1("#single > div.content.right > div.sheader > div.data > div.extra > span.runtime").text();
    const _0x4ef05f = _0x4d6ab1("#repimdb > strong").text();
    const _0x1b835e = _0x4d6ab1("#cast > div:nth-child(2) > div > div.data > div.name > a").text();
    const _0x50d6d4 = _0x4d6ab1("#single > div.content.right > div.sheader > div.poster > img").attr('src');
    let _0x3073b5 = "🍟 *" + _0x53945e + "*\n\n🧿 *Release Date :* " + _0x2b5504 + "\n\n🌍 *Country :* " + _0x89be37 + "\n\n⏱ *Duration :* " + _0x3abd81 + "\n\n⭐ *IMDB Rate :* " + _0x4ef05f + "\n\n🤵‍♂ *Director :* " + _0x1b835e + "\n\n🖇 *Link :* " + _0x154708 + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
    await _0x432c9c.sendMessage(_0x3c4dc7, {
      'image': {
        'url': _0x50d6d4
      },
      'caption': _0x3073b5
    }, {
      'quoted': _0x5caacd
    });
  } catch (_0x1cb8ec) {
    console.log(_0x1cb8ec);
    _0x3ab39f('' + _0x1cb8ec);
  }
});
cmd({
  'pattern': "githubstalk",
  'desc': "Fetch detailed GitHub user profile including profile picture.",
  'category': "search",
  'react': "🖥️",
  'filename': __filename
}, async (_0x6ce130, _0x5f38d3, _0x411688, {
  from: _0x232fb3,
  quoted: _0x3c0ea9,
  body: _0x4b0a28,
  isCmd: _0x20231b,
  command: _0x352ed8,
  args: _0x5cdb45,
  q: _0x2dd139,
  isGroup: _0x4b4489,
  sender: _0x32d84f,
  senderNumber: _0x4b26ff,
  botNumber2: _0x1be35a,
  botNumber: _0x2644d7,
  pushname: _0x4bb0c6,
  isMe: _0x4a39e6,
  isOwner: _0x16d8da,
  groupMetadata: _0x5d869a,
  groupName: _0xd8b900,
  participants: _0x44a08a,
  groupAdmins: _0x26b055,
  isBotAdmins: _0x442a67,
  isAdmins: _0x251fc1,
  reply: _0x5aa31e
}) => {
  try {
    const _0x5b12a9 = _0x5cdb45[0x0];
    if (!_0x5b12a9) {
      return _0x5aa31e("Please provide a GitHub username.");
    }
  } catch (_0x2ff6b8) {
    console.log(_0x2ff6b8);
    _0x5aa31e("єяяσя ƒєт¢нιηg ∂αтα: " + (_0x2ff6b8.response ? _0x2ff6b8.response.data.message : _0x2ff6b8.message));
  }
});
cmd({
  'pattern': "ipinfo",
  'desc': "Get information about an IP address",
  'use': ".ipinfo <IP_address>",
  'category': 'search',
  'filename': __filename
}, async (_0x5af915, _0x1902e8, _0x448bdb, {
  from: _0x4bcbf7,
  reply: _0x4edecb,
  q: _0x30b1bf
}) => {
  try {
    if (!_0x30b1bf) {
      return _0x4edecb("⛔ Please provide an IP address!");
    }
    const _0x2ae05f = "https://BJ-Devs.serv00.net/Ip-Info.php?ip=" + _0x30b1bf;
    const _0x3e1fe3 = await axios.get(_0x2ae05f);
    const _0x2ee3aa = _0x3e1fe3.data;
    let _0x3210f8 = "🔍 *IP Information:*\n\n";
    _0x3210f8 += "🌐 IP: " + _0x2ee3aa.ip + "\n";
    _0x3210f8 += "🌍 Continent: " + _0x2ee3aa.continent_name + " (" + _0x2ee3aa.continent_code + ")\n";
    _0x3210f8 += "🇨🇳 Country: " + _0x2ee3aa.country_name + " (" + _0x2ee3aa.country_code2 + ")\n";
    _0x3210f8 += "🏙️ City: " + _0x2ee3aa.city + "\n";
    _0x3210f8 += "📍 State/Province: " + _0x2ee3aa.state_prov + "\n";
    _0x3210f8 += "📮 Zip Code: " + _0x2ee3aa.zipcode + "\n";
    _0x3210f8 += "📏 Latitude: " + _0x2ee3aa.latitude + "\n";
    _0x3210f8 += "📏 Longitude: " + _0x2ee3aa.longitude + "\n";
    _0x3210f8 += "📞 Calling Code: " + _0x2ee3aa.calling_code + "\n";
    _0x3210f8 += "🕒 Time Zone: " + _0x2ee3aa.time_zone.name + "\n";
    _0x3210f8 += "💻 ISP: " + _0x2ee3aa.isp + "\n";
    _0x3210f8 += "🏳️ Country Flag: " + _0x2ee3aa.country_flag + "\n";
    _0x4edecb(_0x3210f8);
  } catch (_0x59dcd2) {
    console.error(_0x59dcd2);
    if (_0x59dcd2.response && _0x59dcd2.response.data) {
      _0x4edecb("Error: " + _0x59dcd2.response.data.message);
    } else {
      _0x4edecb("An error occurred while fetching IP information. Please try again later.");
    }
  }
});
cmd({
  'pattern': 'yts',
  'desc': "Search YouTube videos",
  'use': ".yts <query>",
  'category': "search",
  'filename': __filename
}, async (_0x3db7cf, _0x4e5807, _0xf2b851, {
  from: _0x2ade25,
  q: _0x16c464,
  reply: _0x4ae16c
}) => {
  try {
    if (!_0x16c464) {
      return _0x4ae16c("⛔ Please provide a search query!");
    }
    const _0x57594e = await yts(_0x16c464);
    const _0x5dfd19 = _0x57594e.videos.slice(0x0, 0x5);
    if (_0x5dfd19.length === 0x0) {
      return _0x4ae16c("No results found.");
    }
    let _0x5e72cb = "🎥 *YouTube Search Results:*\n\n";
    _0x5dfd19.forEach((_0x1237d4, _0x594810) => {
      _0x5e72cb += _0x594810 + 0x1 + ". [" + _0x1237d4.title + '](' + _0x1237d4.url + ") - " + _0x1237d4.author.name + "\n";
    });
    _0x4ae16c(_0x5e72cb);
  } catch (_0x44a8b5) {
    console.error(_0x44a8b5);
    _0x4ae16c("Error: " + _0x44a8b5.message);
  }
});
cmd({
  'pattern': "img",
  'alias': ['googleimg'],
  'react': '🔍',
  'desc': "Search for images on Google",
  'category': "search",
  'use': ".imgsearch <query>",
  'filename': __filename
}, async (_0x1bd5e1, _0x5d14c1, _0x2d32a1, {
  from: _0x34e216,
  reply: _0x40abf8,
  q: _0x16f275
}) => {
  try {
    if (!_0x16f275) {
      return await _0x40abf8("Please provide a search query!");
    }
    g_i_s(_0x16f275, (_0x580a2, _0xc6495b) => {
      if (_0x580a2 || !_0xc6495b.length) {
        return _0x40abf8("No images found!");
      }
      const _0x572663 = _0xc6495b.slice(0x0, 0x5).map(_0x7de787 => _0x7de787.url);
      _0x572663.forEach(async _0xc7c4fc => {
        await _0x1bd5e1.sendMessage(_0x34e216, {
          'image': {
            'url': _0xc7c4fc
          }
        }, {
          'quoted': qtoko
        });
      });
    });
  } catch (_0x29e0db) {
    console.error(_0x29e0db);
    _0x40abf8("An error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': "search",
  'alias': ['websearch'],
  'react': '🌐',
  'desc': "Search the web for information",
  'category': "search",
  'use': ".search <query>",
  'filename': __filename
}, async (_0x150faa, _0x533abd, _0x394848, {
  from: _0x2eb93a,
  reply: _0x536d4f,
  q: _0x143676
}) => {
  try {
    if (!_0x143676) {
      return await _0x536d4f("Please provide a search query!");
    }
    const _0x4d34d4 = await search_web(_0x143676);
    await _0x536d4f(_0x4d34d4);
  } catch (_0x57ccd2) {
    console.error(_0x57ccd2);
    _0x536d4f("An error occurred while searching. Please try again later.");
  }
});
cmd({
  'pattern': "getpic",
  'desc': "Get the group profile picture.",
  'category': "search",
  'react': "🖼️",
  'filename': __filename
}, async (_0x43edc2, _0x1f2ebf, _0x379dea, {
  from: _0x4bc08a,
  quoted: _0x40a6d5,
  body: _0x54db6f,
  isCmd: _0x24a965,
  command: _0x118a7e,
  args: _0x24c13d,
  q: _0x359c4a,
  isGroup: _0x5712f2,
  sender: _0x657f5d,
  senderNumber: _0x913ec8,
  botNumber2: _0x577c8e,
  botNumber: _0x3433aa,
  pushname: _0x297cd5,
  isMe: _0x3b9a01,
  isOwner: _0x45811e,
  groupMetadata: _0x5b12dd,
  groupName: _0xa49bd6,
  participants: _0x2b6e20,
  groupAdmins: _0x3c001b,
  isBotAdmins: _0x2a4fb8,
  isAdmins: _0x254906,
  reply: _0x61eb36
}) => {
  try {
    if (!_0x5712f2) {
      return _0x61eb36("This command can only be used in a group.");
    }
    const _0xb68b06 = await _0x43edc2.getProfilePicture(_0x4bc08a);
    await _0x43edc2.sendMessage(_0x4bc08a, {
      'image': {
        'url': _0xb68b06
      },
      'caption': "Group Profile Picture"
    });
  } catch (_0x441086) {
    console.log(_0x441086);
    _0x61eb36('' + _0x441086);
  }
});
cmd({
  'pattern': 'vv',
  'alias': ["retrive", "viewonce"],
  'desc': "Fetch and resend a ViewOnce message content (image/video/voice).",
  'category': "misc",
  'use': "<query>",
  'filename': __filename
}, async (_0xe32529, _0x22f97e, _0x4abb1a, {
  from: _0x3c368d,
  reply: _0x57389f
}) => {
  try {
    const _0x216c4f = _0x4abb1a.msg.contextInfo.quotedMessage;
    if (_0x216c4f && _0x216c4f.viewOnceMessageV2) {
      const _0x20564b = _0x216c4f.viewOnceMessageV2;
      if (_0x20564b.message.imageMessage) {
        let _0x52118c = _0x20564b.message.imageMessage.caption;
        let _0x296c01 = await _0xe32529.downloadAndSaveMediaMessage(_0x20564b.message.imageMessage);
        return _0xe32529.sendMessage(_0x3c368d, {
          'image': {
            'url': _0x296c01
          },
          'caption': _0x52118c
        }, {
          'quoted': qtoko
        });
      }
      if (_0x20564b.message.videoMessage) {
        let _0x1d6e96 = _0x20564b.message.videoMessage.caption;
        let _0x2790e0 = await _0xe32529.downloadAndSaveMediaMessage(_0x20564b.message.videoMessage);
        return _0xe32529.sendMessage(_0x3c368d, {
          'video': {
            'url': _0x2790e0
          },
          'caption': _0x1d6e96
        }, {
          'quoted': qtoko
        });
      }
      if (_0x20564b.message.audioMessage) {
        let _0x32f85f = await _0xe32529.downloadAndSaveMediaMessage(_0x20564b.message.audioMessage);
        return _0xe32529.sendMessage(_0x3c368d, {
          'audio': {
            'url': _0x32f85f
          }
        }, {
          'quoted': qtoko
        });
      }
    }
    if (!_0x4abb1a.quoted) {
      return _0x57389f("Please reply to a ViewOnce message.");
    }
    if (_0x4abb1a.quoted.mtype === "viewOnceMessage") {
      if (_0x4abb1a.quoted.message.imageMessage) {
        let _0xc933a5 = _0x4abb1a.quoted.message.imageMessage.caption;
        let _0x23fe62 = await _0xe32529.downloadAndSaveMediaMessage(_0x4abb1a.quoted.message.imageMessage);
        return _0xe32529.sendMessage(_0x3c368d, {
          'image': {
            'url': _0x23fe62
          },
          'caption': _0xc933a5
        }, {
          'quoted': qtoko
        });
      } else {
        if (_0x4abb1a.quoted.message.videoMessage) {
          let _0x288c95 = _0x4abb1a.quoted.message.videoMessage.caption;
          let _0x39ba06 = await _0xe32529.downloadAndSaveMediaMessage(_0x4abb1a.quoted.message.videoMessage);
          return _0xe32529.sendMessage(_0x3c368d, {
            'video': {
              'url': _0x39ba06
            },
            'caption': _0x288c95
          }, {
            'quoted': qtoko
          });
        }
      }
    } else {
      if (_0x4abb1a.quoted.message.audioMessage) {
        let _0x59ff81 = await _0xe32529.downloadAndSaveMediaMessage(_0x4abb1a.quoted.message.audioMessage);
        return _0xe32529.sendMessage(_0x3c368d, {
          'audio': {
            'url': _0x59ff81
          }
        }, {
          'quoted': qtoko
        });
      } else {
        return _0x57389f("> *This is not a ViewOnce message.*");
      }
    }
  } catch (_0x3c1d2c) {
    console.log("Error:", _0x3c1d2c);
    _0x57389f("An error occurred while fetching the ViewOnce message.");
  }
});
const {
  screenshotV3
} = require('getscreenshot.js');
cmd({
  'pattern': 'ss',
  'desc': "Get screenshots",
  'category': "other",
  'filename': __filename
}, async (_0x366c57, _0x34dd06, _0x1c484f, {
  from: _0x35425e,
  quoted: _0x2cf6c8,
  body: _0x2d72c,
  isCmd: _0xae26a4,
  command: _0x17e102,
  args: _0x177b03,
  q: _0x45636d,
  isGroup: _0x59a0ae,
  sender: _0x359323,
  senderNumber: _0x1c2823,
  botNumber2: _0x42bcf2,
  botNumber: _0x4dedbe,
  pushname: _0x2a83ee,
  isMe: _0x52ffed,
  isOwner: _0x19909c,
  groupMetadata: _0x18e2b6,
  groupName: _0x3e8dac,
  participants: _0xb14392,
  groupAdmins: _0x25a308,
  isBotAdmins: _0x375e82,
  isAdmins: _0x70da8e,
  reply: _0x53167f
}) => {
  try {
    if (!_0x45636d.startsWith("https://")) {
      return _0x53167f("*_Please give me a url to get screenshot._*");
    }
    let _0x13c859 = await screenshotV3(_0x45636d);
    await _0x366c57.sendMessage(_0x35425e, {
      'image': {
        'url': _0x13c859
      },
      'caption': "> Didula MD V2"
    }, {
      'quoted': _0x34dd06
    });
  } catch (_0x5846cc) {
    console.log(_0x5846cc);
    _0x53167f('' + _0x5846cc);
  }
});
cmd({
  'pattern': "dog",
  'desc': "Fetch a random dog image.",
  'category': "other",
  'react': '🐶',
  'filename': __filename
}, async (_0x1ca689, _0x5d0603, _0x4d6214, {
  from: _0x5e6146,
  quoted: _0xc250d,
  body: _0x239b95,
  isCmd: _0x505fe6,
  command: _0x21cc78,
  args: _0x44fcbc,
  q: _0x18b5f5,
  isGroup: _0x48598a,
  sender: _0x5f2dd5,
  senderNumber: _0x826cec,
  botNumber2: _0x2d6b9a,
  botNumber: _0x360705,
  pushname: _0x38ab0b,
  isMe: _0x269432,
  isOwner: _0x4195d9,
  groupMetadata: _0x4a08e2,
  groupName: _0x317d87,
  participants: _0xc1187d,
  groupAdmins: _0x17bfe5,
  isBotAdmins: _0x174297,
  isAdmins: _0x8f1631,
  reply: _0x334099
}) => {
  try {
    const _0xe6b5a7 = await axios.get("https://dog.ceo/api/breeds/image/random");
    const _0x14864b = _0xe6b5a7.data;
    await _0x1ca689.sendMessage(_0x5e6146, {
      'image': {
        'url': _0x14864b.message
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x53944d) {
    console.log(_0x53944d);
    _0x334099("Error fetching dog image: " + _0x53944d.message);
  }
});
cmd({
  'pattern': "animeboy",
  'desc': "Fetch a random anime boy image.",
  'category': "other",
  'react': '❤️',
  'filename': __filename
}, async (_0x455cc9, _0x6c2d83, _0x100d19, {
  from: _0xb1a133,
  quoted: _0x1c8bbd,
  body: _0x28f771,
  isCmd: _0x432096,
  command: _0x141fb3,
  args: _0x320003,
  q: _0x4f45dd,
  isGroup: _0x29475a,
  sender: _0x1d626f,
  senderNumber: _0x4a82ea,
  botNumber2: _0x3118a6,
  botNumber: _0xff6936,
  pushname: _0x5500e3,
  isMe: _0x1e927a,
  isOwner: _0x11006b,
  groupMetadata: _0x2ea304,
  groupName: _0x5ec393,
  participants: _0x2f7744,
  groupAdmins: _0x54477c,
  isBotAdmins: _0x446934,
  isAdmins: _0x1c7416,
  reply: _0xafc07a
}) => {
  try {
    const _0x47ca92 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x28395b = _0x47ca92.data;
    await _0x455cc9.sendMessage(_0xb1a133, {
      'image': {
        'url': _0x28395b.url
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x23daf6) {
    console.log(_0x23daf6);
    _0xafc07a("*Error Fetching Anime Boy image*: " + _0x23daf6.message);
  }
});
cmd({
  'pattern': "weather",
  'desc': "🌤 Get weather information for a location",
  'react': "🌥️",
  'category': "other",
  'filename': __filename
}, async (_0x12e7f6, _0x51b982, _0x59c84f, {
  from: _0x2b8cbe,
  q: _0xabb579,
  reply: _0x1762fa
}) => {
  try {
    if (!_0xabb579) {
      return _0x1762fa("❗ Please provide a city name..Usage: .weather [city name]");
    }
    const _0x55d33d = "http://api.openweathermap.org/data/2.5/weather?q=" + _0xabb579 + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x161a94 = await axios.get(_0x55d33d);
    const _0x235af8 = _0x161a94.data;
    const _0x3762e2 = "\n🌍 *Weather Information for " + _0x235af8.name + ", " + _0x235af8.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x235af8.main.temp + "°C\n\n🌡️ *Feels Like*: " + _0x235af8.main.feels_like + "°C\n\n🌡️ *Min Temp*: " + _0x235af8.main.temp_min + "°C\n\n🌡️ *Max Temp*: " + _0x235af8.main.temp_max + "°C\n\n💧 *Humidity*: " + _0x235af8.main.humidity + "%\n\n☁️ *Weather*: " + _0x235af8.weather[0x0].main + "\n\n🌫️ *Description*: " + _0x235af8.weather[0x0].description + "\n\n💨 *Wind Speed*: " + _0x235af8.wind.speed + " m/s\n\n📌 *Pressure*: " + _0x235af8.main.pressure + " hPa\n\n> *◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*\n";
    return _0x1762fa(_0x3762e2);
  } catch (_0x2def8f) {
    console.log(_0x2def8f);
    if (_0x2def8f.response && _0x2def8f.response.status === 0x194) {
      return _0x1762fa("🚫 ¢ιту ησт ƒσυη∂. ρℓєαѕє ¢нє¢к тнє ѕρєℓℓιηg αη∂ тяу αgαιη.");
    }
    return _0x1762fa("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': "animegirl",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x4d51c7, _0x205552, _0x1f5a8c, {
  from: _0x5f0143,
  quoted: _0x303662,
  body: _0x3ea19f,
  isCmd: _0x397181,
  command: _0xc7f175,
  args: _0xaf6ff7,
  q: _0x5d6a9b,
  isGroup: _0x1a3c26,
  sender: _0x4ed7a4,
  senderNumber: _0x3d6e0a,
  botNumber2: _0x4861e2,
  botNumber: _0x3616f6,
  pushname: _0x5ba6ce,
  isMe: _0x57fd02,
  isOwner: _0x3faac5,
  groupMetadata: _0x4f3604,
  groupName: _0x25a7ac,
  participants: _0x233114,
  groupAdmins: _0x4ea5da,
  isBotAdmins: _0x690a3c,
  isAdmins: _0x1ecc5c,
  reply: _0x5590ef
}) => {
  try {
    const _0xa43ec5 = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x401527 = _0xa43ec5.data;
    await _0x4d51c7.sendMessage(_0x5f0143, {
      'image': {
        'url': _0x401527.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x7617cf) {
    console.log(_0x7617cf);
    _0x5590ef("*Error Fetching Anime Girl image*: " + _0x7617cf.message);
  }
});
cmd({
  'pattern': "animegirl2",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x46f86e, _0x4704f6, _0x5eaf07, {
  from: _0x3912a8,
  quoted: _0x2c3a77,
  body: _0x175b59,
  isCmd: _0x2f3714,
  command: _0x447a67,
  args: _0x1e605b,
  q: _0x2dea5a,
  isGroup: _0x453b41,
  sender: _0x594617,
  senderNumber: _0xe0d68a,
  botNumber2: _0x1dee61,
  botNumber: _0x2b8411,
  pushname: _0x48a9c1,
  isMe: _0x5e5e21,
  isOwner: _0x5cc774,
  groupMetadata: _0x21b5c5,
  groupName: _0x1e28e3,
  participants: _0x1d9cd8,
  groupAdmins: _0x2d7343,
  isBotAdmins: _0x560df1,
  isAdmins: _0x519d1f,
  reply: _0x4bd149
}) => {
  try {
    const _0x5dbf45 = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x3f57ff = _0x5dbf45.data;
    await _0x46f86e.sendMessage(_0x3912a8, {
      'image': {
        'url': _0x3f57ff.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x24d1cc) {
    console.log(_0x24d1cc);
    _0x4bd149("*Error Fetching Anime Girl image*: " + _0x24d1cc.message);
  }
});
cmd({
  'pattern': "animegirl3",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x479395, _0x1b8207, _0xf38945, {
  from: _0x1bb294,
  quoted: _0xd8206b,
  body: _0x4cbc71,
  isCmd: _0x5c850f,
  command: _0x3cb8b4,
  args: _0x5a613e,
  q: _0xdb67fd,
  isGroup: _0x37b4bd,
  sender: _0x513876,
  senderNumber: _0x4d6804,
  botNumber2: _0x2db819,
  botNumber: _0x1e1007,
  pushname: _0x26bc83,
  isMe: _0x1f711b,
  isOwner: _0x44d387,
  groupMetadata: _0x1e9900,
  groupName: _0x123557,
  participants: _0x2be13f,
  groupAdmins: _0x9c5ead,
  isBotAdmins: _0x56be31,
  isAdmins: _0x1cf98a,
  reply: _0x23ee58
}) => {
  try {
    const _0x401bea = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x11d736 = _0x401bea.data;
    await _0x479395.sendMessage(_0x1bb294, {
      'image': {
        'url': _0x11d736.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x2d74e5) {
    console.log(_0x2d74e5);
    _0x23ee58("*Error Fetching Anime Girl image*: " + _0x2d74e5.message);
  }
});
cmd({
  'pattern': 'animegirl4',
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x2a4a04, _0x53cba8, _0x3d5ca6, {
  from: _0x46ab60,
  quoted: _0xad9050,
  body: _0x43ff37,
  isCmd: _0x4bb611,
  command: _0x382c96,
  args: _0x1a0b16,
  q: _0x3dc432,
  isGroup: _0x2c9486,
  sender: _0x5b87cf,
  senderNumber: _0xe7b3f6,
  botNumber2: _0x474103,
  botNumber: _0x157ede,
  pushname: _0xdab326,
  isMe: _0x4abb19,
  isOwner: _0x5435ae,
  groupMetadata: _0x35e76f,
  groupName: _0x5493dc,
  participants: _0x25134b,
  groupAdmins: _0x156622,
  isBotAdmins: _0x50ea4a,
  isAdmins: _0x2c6d0c,
  reply: _0x53e0cc
}) => {
  try {
    const _0x29d383 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x569ff7 = _0x29d383.data;
    await _0x2a4a04.sendMessage(_0x46ab60, {
      'image': {
        'url': _0x569ff7.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x60bd4f) {
    console.log(_0x60bd4f);
    _0x53e0cc("*Error Fetching Anime Girl image*: " + _0x60bd4f.message);
  }
});
cmd({
  'pattern': 'animegirl5',
  'desc': "Fetch a random anime girl image.",
  'category': 'other',
  'react': '👧',
  'filename': __filename
}, async (_0x66e41a, _0x3b77fd, _0x172675, {
  from: _0x9d8b88,
  quoted: _0x29506c,
  body: _0x2b5a8a,
  isCmd: _0x33b0df,
  command: _0x11ca84,
  args: _0x17789a,
  q: _0x543230,
  isGroup: _0x3c285e,
  sender: _0x544558,
  senderNumber: _0x655ce0,
  botNumber2: _0x4bcdb5,
  botNumber: _0x48b03d,
  pushname: _0x20e33a,
  isMe: _0x263cf7,
  isOwner: _0x542ab8,
  groupMetadata: _0xa9fecc,
  groupName: _0x2258c6,
  participants: _0x35c766,
  groupAdmins: _0x2bd123,
  isBotAdmins: _0x179dbf,
  isAdmins: _0x58b87a,
  reply: _0x13ebc7
}) => {
  try {
    const _0x4065be = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x435e2a = _0x4065be.data;
    await _0x66e41a.sendMessage(_0x9d8b88, {
      'image': {
        'url': _0x435e2a.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': qtoko
    });
  } catch (_0x27b53d) {
    console.log(_0x27b53d);
    _0x13ebc7("*Error Fetching Anime Girl image*: " + _0x27b53d.message);
  }
});
cmd({
  'pattern': 'hack',
  'desc': "Displays a dynamic and playful 'Hacking' message for fun.",
  'category': 'other',
  'react': '💻',
  'filename': __filename
}, async (_0x103a25, _0x36064c, _0x31ffef, {
  from: _0x2c0cd1,
  quoted: _0x157798,
  body: _0x492c1d,
  isCmd: _0x132221,
  command: _0x4d6d18,
  args: _0x5b0c2e,
  q: _0x51a98b,
  isGroup: _0x3f20c3,
  sender: _0x51a936,
  senderNumber: _0x371848,
  botNumber2: _0x46a45b,
  botNumber: _0x1d3df8,
  pushname: _0x31743d,
  isMe: _0x39bf15,
  isOwner: _0x28a4ef,
  groupMetadata: _0x39ece6,
  groupName: _0x105712,
  participants: _0x94e311,
  groupAdmins: _0x1cafc1,
  isBotAdmins: _0x3fc7bd,
  isAdmins: _0x2c8c01,
  reply: _0x4b8286
}) => {
  try {
    const _0x28c64a = ["💻 *HACK STARTING...* 💻", '', "*Initializing hacking tools...* 🛠️", "*Connecting to remote servers...* 🌐", '', "```[██████████] 10%``` ⏳", "```[███████████████████] 20%``` ⏳", "```[███████████████████████] 30%``` ⏳", "```[██████████████████████████] 40%``` ⏳", "```[███████████████████████████████] 50%``` ⏳", "```[█████████████████████████████████████] 60%``` ⏳", "```[██████████████████████████████████████████] 70%``` ⏳", "```[██████████████████████████████████████████████] 80%``` ⏳", "```[██████████████████████████████████████████████████] 90%``` ⏳", "```[████████████████████████████████████████████████████] 100%``` ✅", '', "🔒 *System Breach: Successful!* 🔓", "🚀 *Command Execution: Complete!* 🎯", '', "*📡 Transmitting data...* 📤", "_🕵️‍♂️ Ensuring stealth..._ 🤫", "*🔧 Finalizing operations...* 🏁", '', "⚠️ *Note:* All actions are for demonstration purposes only.", "⚠️ *Reminder:* Ethical hacking is the only way to ensure security.", '', "> *Didula MD V2 💚 HACKING-COMPLETE ☣*"];
    for (const _0xb51cb6 of _0x28c64a) {
      await _0x103a25.sendMessage(_0x2c0cd1, {
        'text': _0xb51cb6
      }, {
        'quoted': qtoko
      });
      await new Promise(_0x4b1973 => setTimeout(_0x4b1973, 0x3e8));
    }
  } catch (_0x499011) {
    console.log(_0x499011);
    _0x4b8286("❌ *Error:* " + _0x499011.message);
  }
});
cmd({
  'pattern': "gitclone",
  'alias': ["gitdl"],
  'react': '💫',
  'desc': "Download git repos",
  'category': "download",
  'use': ".gitclone <repo link>",
  'filename': __filename
}, async (_0x3da832, _0x291514, _0x580983, {
  from: _0x1263a3,
  l: _0x4aaedb,
  quoted: _0xaa7960,
  body: _0x56b3eb,
  isCmd: _0x2a966b,
  command: _0x3dbd79,
  args: _0x2b3201,
  q: _0x2a602b,
  isGroup: _0x4d4ac9,
  sender: _0x57c4f5,
  senderNumber: _0x5d56ce,
  botNumber2: _0x2ea2e5,
  botNumber: _0x471086,
  pushname: _0x2d6450,
  isMe: _0x38d589,
  isOwner: _0x22cb69,
  groupMetadata: _0x51238f,
  groupName: _0x429496,
  participants: _0x40fc59,
  groupAdmins: _0x1f3a03,
  isBotAdmins: _0x437344,
  isAdmins: _0x1b79f7,
  reply: _0x156a46
}) => {
  try {
    if (!_0x2a602b) {
      return await _0x156a46("🚩*Please Give Me GitHub Repo URL!*");
    }
    let _0x50f853 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x50f853.test(_0x2a602b)) {
      return _0x156a46("🚩*Please Give Me Valid GitHub Repo Link!*");
    }
    let [, _0x3a4551, _0x31e141] = _0x2a602b.match(_0x50f853) || [];
    _0x31e141 = _0x31e141.replace(/.git$/, '');
    let _0x54ada7 = 'https://api.github.com/repos/' + _0x3a4551 + '/' + _0x31e141 + "/zipball";
    let _0x2a0c0a = (await fetch(_0x54ada7, {
      'method': "HEAD"
    })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
    await _0x3da832.sendMessage(_0x1263a3, {
      'document': {
        'url': _0x54ada7
      },
      'mimetype': "application/zip",
      'fileName': _0x2a0c0a,
      'caption': "> *ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ*"
    }, {
      'quoted': qtoko
    });
  } catch (_0xab3e92) {
    _0x156a46("🚩 *I Can't Find This Repo!*");
    console.log(_0xab3e92);
  }
});
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'desc': "download fb videos",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0xf6cb2f, _0x4c8d34, _0xdaa372, {
  from: _0x286c91,
  quoted: _0x48193c,
  body: _0x2674d8,
  isCmd: _0x1e63d7,
  command: _0xf6680f,
  args: _0x4676b6,
  q: _0x412fd3,
  isGroup: _0x559100,
  sender: _0x36b627,
  senderNumber: _0x427669,
  botNumber2: _0xddc8ab,
  botNumber: _0x2e3a15,
  pushname: _0x22d58b,
  isMe: _0x3ac388,
  isOwner: _0x3f5c28,
  groupMetadata: _0xda995d,
  groupName: _0xc0c538,
  participants: _0x4f6994,
  groupAdmins: _0x53c20e,
  isBotAdmins: _0x1b9a13,
  isAdmins: _0x56e35b,
  reply: _0x1da4ab
}) => {
  try {
    if (!_0x412fd3 && !_0x412fd3.startsWith("https://")) {
      return _0x1da4ab("Please provide a valid Facebook video URL.");
    }
    let _0x16fe08 = await fetchJson("https://vajira-official-api.vercel.app/download/fbdown?url=" + _0x412fd3);
    _0x1da4ab("*Downloading...*");
    await _0xf6cb2f.sendMessage(_0x286c91, {
      'video': {
        'url': _0x16fe08.result.hd
      },
      'mimetype': "video/mp4",
      'caption': "*Facebook Video Download*\n\nTitle: " + _0x16fe08.result.title + "\nDescription: " + _0x16fe08.result.desc + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
    }, {
      'quoted': qtoko
    });
    await _0xf6cb2f.sendMessage(_0x286c91, {
      'video': {
        'url': _0x16fe08.result.sd
      },
      'mimetype': "video/mp4",
      'caption': "*Facebook Video Download*\n\nTitle: " + _0x16fe08.result.title + "\nDescription: " + _0x16fe08.result.desc + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
    }, {
      'quoted': qtoko
    });
  } catch (_0x403be4) {
    console.log(_0x403be4);
    _0x1da4ab("Sorry, an error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': "tiktok",
  'alias': ['tt'],
  'desc': "download tt videos",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0x194935, _0x37cf11, _0x1ecb53, {
  from: _0x287e51,
  quoted: _0x47a1cb,
  body: _0x30435a,
  isCmd: _0x2201a3,
  command: _0x343789,
  args: _0x53a02b,
  q: _0x26448f,
  isGroup: _0x46efc7,
  sender: _0x45fcee,
  senderNumber: _0x2e7c76,
  botNumber2: _0x241e67,
  botNumber: _0x54d0a5,
  pushname: _0x1dcc2e,
  isMe: _0x2451c3,
  isOwner: _0x5b773b,
  groupMetadata: _0x2ea4fb,
  groupName: _0x1e1f97,
  participants: _0x13403e,
  groupAdmins: _0x4fea2c,
  isBotAdmins: _0x377748,
  isAdmins: _0x24292e,
  reply: _0x86c6b4
}) => {
  try {
    if (!_0x26448f && !_0x26448f.startsWith("https://")) {
      return _0x86c6b4("Please provide a valid TikTok video URL.");
    }
    let _0x191577 = await fetchJson("https://vajira-official-api.vercel.app/download/tiktokdl?url=" + _0x26448f);
    _0x86c6b4("*Downloading...*");
    await _0x194935.sendMessage(_0x287e51, {
      'video': {
        'url': _0x191577.result.nowm
      },
      'mimetype': "video/mp4",
      'caption': "*TikTok Video Download*\n\nTitle: " + _0x191577.result.title + "\nCaption: " + _0x191577.result.caption + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'thumbnail': await getBuffer(_0x191577.result.thumbnail)
    }, {
      'quoted': qtoko
    });
    await _0x194935.sendMessage(_0x287e51, {
      'video': {
        'url': _0x191577.result.wm
      },
      'mimetype': "video/mp4",
      'caption': "*TikTok Video Download*\n\nTitle: " + _0x191577.result.title + "\nCaption: " + _0x191577.result.caption + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'thumbnail': await getBuffer(_0x191577.result.thumbnail)
    }, {
      'quoted': qtoko
    });
    await _0x194935.sendMessage(_0x287e51, {
      'audio': {
        'url': _0x191577.result.mp3
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': qtoko
    });
  } catch (_0x4ffda0) {
    console.log(_0x4ffda0);
    _0x86c6b4("Sorry, an error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': "update",
  'desc': "Updates bot system files",
  'category': 'owner',
  'react': '🔄',
  'filename': __filename
}, async (_0x40eada, _0x10eef8, _0x45fcaa, {
  from: _0x37008f,
  reply: _0x4d6fdd
}) => {
  try {
    await _0x45fcaa.react('⬇️');
    const _0x40e3a7 = await axios.get('https://raw.githubusercontent.com/itsme-didulabot/Didula-MD-DB/main/Didula%20Md%20V2%20-%20System.js');
    if (_0x40e3a7.status !== 0xc8) {
      await _0x45fcaa.react('❌');
      return _0x4d6fdd("Failed to download update file");
    }
    const _0x582286 = path.join(__dirname, "../plugins/system.js");
    fs.writeFileSync(_0x582286, _0x40e3a7.data);
    await _0x45fcaa.react('✅');
    _0x4d6fdd("Didula MD V2 updated successfully\n\nplease follow this for more updates https://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f");
  } catch (_0x453fe0) {
    console.error(_0x453fe0);
    await _0x45fcaa.react('❌');
    _0x4d6fdd("Error during update: " + _0x453fe0.message);
  }
});
cmd({
  'pattern': "insta",
  'desc': "To download instagram videos.",
  'category': "download",
  'react': '📩',
  'filename': __filename
}, async (_0x5888ae, _0x244315, _0x5ee0b2, {
  from: _0x5f0710,
  quoted: _0x85be92,
  body: _0x37bde9,
  isCmd: _0x1b6b5b,
  command: _0x4255d3,
  args: _0x53831a,
  q: _0x56c5ed,
  isGroup: _0x2924bd,
  sender: _0x43d538,
  senderNumber: _0x839b58,
  botNumber2: _0x395b51,
  botNumber: _0x4ad888,
  pushname: _0x2c64db,
  isMe: _0x4f3f50,
  isOwner: _0x304502,
  groupMetadata: _0xc94851,
  groupName: _0x1af651,
  participants: _0x213fb9,
  groupAdmins: _0x4a5ac5,
  isBotAdmins: _0x5ad26e,
  isAdmins: _0x1e6144,
  reply: _0xa2c2d5
}) => {
  try {
    if (!_0x53831a[0x0]) {
      return _0xa2c2d5("*`Please give me a valid instagram link.`*");
    }
    await _0x5ee0b2.react('📥');
    let _0x3b68f6;
    try {
      _0x3b68f6 = await igdl(_0x53831a[0x0]);
    } catch (_0x402a74) {
      return _0xa2c2d5("*`Error Obtaning Data.`*");
    }
    let _0x75110a = _0x3b68f6.data;
    if (!_0x75110a || _0x75110a.length === 0x0) {
      return _0xa2c2d5("*`No results found.`*");
    }
    let _0x5664bd;
    try {
      _0x5664bd = _0x75110a.find(_0x5aab2a => _0x5aab2a.resolution === "720p (HD)") || _0x75110a.find(_0x5ed6fa => _0x5ed6fa.resolution === "360p (SD)");
    } catch (_0x35b5af) {
      return _0xa2c2d5("*`error data loss.`*");
    }
    if (!_0x5664bd) {
      return _0xa2c2d5("*`ησ ∂αтα ƒσυη∂.`*");
    }
    await _0x5ee0b2.react('⚡');
    let _0x5d4d98 = _0x5664bd.url;
    try {
      await _0x5888ae.sendMessage(_0x5ee0b2.chat, {
        'video': {
          'url': _0x5d4d98
        },
        'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*",
        'fileName': "ig.mp4",
        'mimetype': "video/mp4"
      }, {
        'quoted': qtoko
      });
    } catch (_0x330b5d) {
      return _0xa2c2d5("*`Error Download Video`*");
      await _0x5ee0b2.react('❌');
    }
  } catch (_0x3d6a7e) {
    console.log(_0x3d6a7e);
    _0xa2c2d5('' + _0x3d6a7e);
  }
});
cmd({
  'pattern': 'dl',
  'react': '📥',
  'alias': ['dlurl'],
  'desc': "Direct link uploader",
  'category': "download",
  'use': ".dl <link>",
  'filename': __filename
}, async (_0xde8a5d, _0x51e873, _0x210ab9, {
  from: _0x16c81c,
  quoted: _0x7f7ea0,
  body: _0x53bd19,
  args: _0xa77d02,
  q: _0x50e388,
  reply: _0x2e20f8
}) => {
  try {
    if (!_0x50e388) {
      return _0x2e20f8("❗ Please provide a link!");
    }
    const _0x332a5c = _0x5eb09e => {
      try {
        new URL(_0x5eb09e);
        return true;
      } catch {
        return false;
      }
    };
    if (!_0x332a5c(_0x50e388)) {
      return _0x2e20f8("❌ Invalid URL format! Please check the link.");
    }
    const _0x4ff662 = require('axios');
    const _0x47db44 = require("mime-types");
    const _0x3358b7 = await _0x4ff662.get(_0x50e388, {
      'responseType': "arraybuffer",
      'timeout': 0x3a98
    });
    const _0x517c92 = _0x3358b7.headers["content-type"] || "application/octet-stream";
    const _0x231fdc = _0x47db44.extension(_0x517c92) || 'unknown';
    const _0x274e1f = _0x3358b7.headers["content-length"] || 0x0;
    if (_0x274e1f > 8589934592) {
      return _0x2e20f8("❗ File is too large to upload (limit: 10MB).");
    }
    const _0x365d20 = "🎬CK CineMAX🎬." + _0x231fdc;
    await _0xde8a5d.sendMessage(_0x16c81c, {
      'document': {
        'url': _0x50e388
      },
      'caption': "> *🍧 720P - WEBRip*\n> 👨🏻‍💻 *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*",
      'mimetype': _0x517c92,
      'fileName': _0x365d20
    }, {
      'quoted': qtoko
    });
  } catch (_0x62d12c) {
    console.error(_0x62d12c);
    _0x2e20f8("❌ Error: " + _0x62d12c.message);
  }
});
cmd({
  'pattern': "apk",
  'desc': "Downloads Apk",
  'use': ".apk <app_name>",
  'react': '📥',
  'category': "download",
  'filename': __filename
}, async (_0x22f9b6, _0x37c81d, _0x502cad, {
  from: _0x4e3d49,
  q: _0x14d6c7,
  reply: _0x295b13
}) => {
  const _0x27527a = _0x14d6c7.trim();
  if (!_0x27527a) {
    return _0x295b13("Please provide an app name");
  }
  _0x295b13("_Downloading " + _0x27527a + '_');
  try {
    const _0x3a13c3 = await scraper.aptoideDl(_0x27527a);
    const _0x3cae5b = await getBuffer(_0x3a13c3.link);
    if (!_0x3cae5b || !_0x3a13c3.appname) {
      return await _0x22f9b6.sendMessage(_0x4e3d49, {
        'react': {
          'text': '❌',
          'key': _0x37c81d.key
        }
      });
    }
    await _0x22f9b6.sendMessage(_0x4e3d49, {
      'document': _0x3cae5b,
      'caption': "*Didula MD V2 💚*",
      'mimetype': "application/vnd.android.package-archive",
      'filename': _0x3a13c3.appname + ".apk"
    }, {
      'quoted': qtoko
    });
    await _0x22f9b6.sendMessage(_0x4e3d49, {
      'react': {
        'text': '✅',
        'key': _0x37c81d.key
      }
    });
    _0x295b13("*_Download Success_*");
  } catch (_0x3400df) {
    console.error(_0x3400df);
    await _0x22f9b6.sendMessage(_0x4e3d49, {
      'react': {
        'text': '❌',
        'key': _0x37c81d.key
      }
    });
    _0x295b13("Error: " + _0x3400df.message);
  }
});
cmd({
  'pattern': "wallpaper",
  'alias': ["wallpaperdownload"],
  'react': "🖼️",
  'desc': "Download a random wallpaper",
  'category': 'download',
  'use': '.wallpaper',
  'filename': __filename
}, async (_0x2f6d5e, _0x3e585c, _0x4a523e, {
  from: _0x2c1add,
  reply: _0x7ee2d5
}) => {
  try {
    const {
      data: _0xe1bd5e
    } = await axios.get('https://unsplash.com/s/photos/wallpaper');
    const _0x1b20c6 = cheerio.load(_0xe1bd5e);
    const _0x4af838 = [];
    _0x1b20c6("figure img").each((_0xf08957, _0x5677a9) => {
      const _0x23e92a = _0x1b20c6(_0x5677a9).attr("src");
      _0x4af838.push(_0x23e92a);
    });
    if (_0x4af838.length === 0x0) {
      return await _0x7ee2d5("No wallpapers found!");
    }
    const _0x467f07 = _0x4af838[Math.floor(Math.random() * _0x4af838.length)];
    await _0x2f6d5e.sendMessage(_0x2c1add, {
      'image': {
        'url': _0x467f07
      },
      'caption': "Here is your wallpaper!"
    }, {
      'quoted': qtoko
    });
  } catch (_0xe3be65) {
    console.error(_0xe3be65);
    _0x7ee2d5("An error occurred while downloading the wallpaper. Please try again later.");
  }
});
cmd({
  'pattern': 'anime',
  'desc': "anime the bot",
  'category': "main",
  'react': '⛱️',
  'filename': __filename
}, async (_0x4f248e, _0xd47a5a, _0x172073, {
  from: _0x46f025,
  quoted: _0x43c55e,
  body: _0x45f124,
  isCmd: _0x364a8d,
  command: _0x17cfee,
  args: _0x58ec6,
  q: _0x1015b9,
  isGroup: _0x5c9750,
  sender: _0x4c6e57,
  senderNumber: _0x305287,
  botNumber2: _0x2ed786,
  botNumber: _0x480655,
  pushname: _0xb48fdc,
  isMe: _0x5806d7,
  isOwner: _0x6401ff,
  groupMetadata: _0x5c2ee6,
  groupName: _0x38bee6,
  participants: _0x4bc044,
  groupAdmins: _0x53ae82,
  isBotAdmins: _0x30b9ba,
  isAdmins: _0x4cf6ff,
  reply: _0x36a837
}) => {
  try {
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': "https://telegra.ph/file/b26f27aa5daaada031b90.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': "https://telegra.ph/file/51b44e4b086667361061b.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': 'https://telegra.ph/file/7d165d73f914985542537.jpg'
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': "https://telegra.ph/file/3d9732d2657d2d72dc102.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': "https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': "https://telegra.ph/file/7514b18ea89da924e7496.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
    await _0x4f248e.sendMessage(_0x46f025, {
      'image': {
        'url': 'https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg'
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0xd47a5a
    });
  } catch (_0x55519e) {
    console.log(_0x55519e);
    _0x36a837('' + _0x55519e);
  }
});
cmd({
  'pattern': "broadcast",
  'fromMe': true,
  'desc': "📢 Broadcast a message to all chats",
  'category': 'main',
  'filename': __filename
}, async (_0x50a832, _0x3ccfb2, _0x4e3327, {
  args: _0x4a1ea1,
  reply: _0x3b0f11
}) => {
  const _0x1ed6d7 = _0x4a1ea1.join(" ");
  if (!_0x1ed6d7) {
    return _0x3b0f11("❗ Please provide a message to broadcast.");
  }
  const _0x2cd179 = await _0x50a832.getAllChats();
  let _0x505484 = 0x0;
  for (let _0x1d1ebc of _0x2cd179) {
    try {
      await _0x50a832.sendMessage(_0x1d1ebc.id, {
        'text': "📢 *DIDULA MD V2 💚 BROADCAST MESSAGE*\n\n" + _0x1ed6d7
      });
      _0x505484++;
    } catch (_0x4ebfb9) {
      console.error("Failed to send broadcast to " + _0x1d1ebc.id + ':', _0x4ebfb9);
    }
  }
  _0x3b0f11("✅ Broadcast sent to " + _0x505484 + " chats successfully!");
});
cmd({
  'pattern': "ban",
  'fromMe': true,
  'desc': "🚫 Ban a user from using the bot",
  'category': "main",
  'filename': __filename
}, async (_0x4ae0d3, _0x32dbd4, _0x23a69b, {
  args: _0x21cb4f,
  reply: _0x4c424c,
  isOwner: _0x1648cd
}) => {
  if (!_0x1648cd) {
    return _0x4c424c("❌ You are not the owner!");
  }
  if (!_0x21cb4f[0x0]) {
    return _0x4c424c("❗ Please provide a user's number to ban.");
  }
  const _0x3c635a = _0x21cb4f[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  config.banned.push(_0x3c635a);
  _0x4c424c("🚫 User " + _0x21cb4f[0x0] + " has been banned from using the bot.");
});
cmd({
  'pattern': 'unban',
  'desc': "✅ Unban a user",
  'fromMe': true,
  'category': "main",
  'filename': __filename
}, async (_0x5618c5, _0x17dea3, _0x238e9a, {
  args: _0x390a1d,
  reply: _0x5b4fff,
  isOwner: _0x586f42
}) => {
  if (!_0x586f42) {
    return _0x5b4fff("❌ You are not the owner!");
  }
  if (!_0x390a1d[0x0]) {
    return _0x5b4fff("❗ Please provide a user's number to unban.");
  }
  const _0x2f0782 = _0x390a1d[0x0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  config.banned = config.banned.filter(_0x4982e5 => _0x4982e5 !== _0x2f0782);
  _0x5b4fff("✅ User " + _0x390a1d[0x0] + " has been unbanned.");
});
cmd({
  'pattern': "setbotname",
  'desc': "✏️ Change the bot's name",
  'fromMe': true,
  'category': 'main',
  'filename': __filename
}, async (_0x457b62, _0x2fc5fc, _0x323f19, {
  args: _0x4717d2,
  reply: _0x4debda,
  isOwner: _0x12b594
}) => {
  if (!_0x12b594) {
    return _0x4debda("❌ You are not the owner!");
  }
  const _0x1a5c49 = _0x4717d2.join(" ");
  if (!_0x1a5c49) {
    return _0x4debda("❗ Please provide a new name for the bot.");
  }
  await _0x457b62.updateProfileName(_0x1a5c49);
  _0x4debda("✅ Bot's name has been changed to: *" + _0x1a5c49 + '*');
});
cmd({
  'pattern': "setbotbio",
  'desc': "✏️ Change the bot's bio",
  'fromMe': true,
  'category': 'main',
  'filename': __filename
}, async (_0x365d9e, _0x43cbe8, _0x1a0653, {
  args: _0x7e4055,
  reply: _0x44ec47,
  isOwner: _0x35c549
}) => {
  if (!_0x35c549) {
    return _0x44ec47("❌ You are not the owner!");
  }
  const _0xf063c7 = _0x7e4055.join(" ");
  if (!_0xf063c7) {
    return _0x44ec47("❗ Please provide a new bio for the bot.");
  }
  await _0x365d9e.updateProfileStatus(_0xf063c7);
  _0x44ec47("✅ Bot's bio has been changed to: *" + _0xf063c7 + '*');
});
cmd({
  'pattern': "setpp",
  'desc': "Set bot profile picture.",
  'category': "owner",
  'react': '🖼️',
  'filename': __filename
}, async (_0x2ffdb7, _0x5e90de, _0x1013c0, {
  quoted: _0x2af425,
  reply: _0x3abf6e,
  isOwner: _0x5e3c48
}) => {
  if (!_0x5e3c48) {
    return _0x3abf6e("❌ You are not the owner!");
  }
  if (!_0x2af425 || !_0x2af425.image) {
    return _0x3abf6e("⚠️ Reply to an image to set as profile picture.");
  }
  try {
    let _0x238648 = await _0x2af425.download();
    await _0x2ffdb7.updateProfilePicture(_0x2ffdb7.user.id, _0x238648);
    _0x3abf6e("✅ Profile picture updated successfully.");
  } catch (_0x160a64) {
    console.error(_0x160a64);
    _0x3abf6e("❌ Error: " + _0x160a64.message);
  }
});
let autoBioInterval;
cmd({
  'pattern': "setautobio",
  'alias': ["autobio"],
  'fromMe': true,
  'desc': "Enable or disable the AutoBIO feature.",
  'category': 'main',
  'react': "🛠️",
  'filename': __filename
}, async (_0x41457f, _0x175a20, _0x2e86ae, {
  from: _0x293e0f,
  isOwner: _0x4fcbf0,
  reply: _0x5a9e73
}) => {
  if (!_0x4fcbf0) {
    return _0x5a9e73("❌ You are not the owner!");
  }
  config.autoBioEnabled = !config.autoBioEnabled;
  if (config.autoBioEnabled) {
    _0x5a9e73("🛠️ AutoBIO feature has been *enabled*! 🔄");
    startAutoBio(_0x41457f);
  } else {
    _0x5a9e73("🛠️ AutoBIO feature has been *disabled*! 🚫");
    stopAutoBio();
  }
});
function startAutoBio(_0x297a2f) {
  if (autoBioInterval) {
    clearInterval(autoBioInterval);
  }
  autoBioInterval = setInterval(async () => {
    await _0x297a2f.updateProfileStatus("Didula MD V2 💚");
  }, 60000);
}
function stopAutoBio() {
  if (autoBioInterval) {
    clearInterval(autoBioInterval);
    autoBioInterval = null;
    console.log("🛠️ AutoBIO feature stopped.");
  }
}
const badWords = ['ꦾ', "~@0~*", 'ꦽ', '᬴', ".@@", "@@@", "\0", 'ြ', 'ી', '𑇂𑆵𑆴𑆿', "𑜦࣯", "⃪݉⃟̸̷"];
cmd({
  'on': "body"
}, async (_0x30ff1d, _0x52a990, _0x3c9397, {
  from: _0x1c1316,
  body: _0x31ac1d,
  isGroup: _0x319403,
  isAdmins: _0x1488ea,
  isBotAdmins: _0x594d37,
  reply: _0x3865c8,
  sender: _0x2f7abc
}) => {
  try {
    const _0x3f287f = _0x31ac1d.toLowerCase();
    const _0x3ab998 = badWords.some(_0x4f83ce => _0x3f287f.includes(_0x4f83ce));
    if (_0x3ab998) {
      await _0x30ff1d.sendMessage(_0x1c1316, {
        'delete': {
          'remoteJid': _0x1c1316,
          'fromMe': false,
          'id': _0x52a990.key.id,
          'participant': _0x2f7abc
        }
      });
      await _0x30ff1d.sendMessage(_0x1c1316, {
        'text': "⚠️ Your message contained inappropriate content and has been removed. ⚠️"
      }, {
        'quoted': qtoko
      });
      await _0x30ff1d.updateBlockStatus(_0x2f7abc, "block");
      if (_0x319403 && _0x594d37) {
        await _0x30ff1d.groupParticipantsUpdate(_0x1c1316, [_0x2f7abc], 'remove');
      }
    }
  } catch (_0x25a6b9) {
    console.error("Error processing message:", _0x25a6b9);
    _0x3865c8("An error occurred while processing your message. Please try again later.");
  }
});
cmd({
  'pattern': "ping",
  'react': '🤖',
  'alias': ["speed"],
  'desc': "Check bot's ping",
  'category': "main",
  'use': ".ping",
  'filename': __filename
}, async (_0xdccc9d, _0x8eb4e7, _0x2c391d, {
  from: _0x2c06ad,
  l: _0x34aea2,
  quoted: _0x12c27a,
  body: _0x581315,
  isCmd: _0x108e19,
  command: _0x5632be,
  args: _0x5d8bbf,
  q: _0x2129ba,
  isGroup: _0x1e6f51,
  sender: _0x24c264,
  senderNumber: _0x39be38,
  botNumber2: _0x1468ed,
  botNumber: _0x55dd9c,
  pushname: _0x25c939,
  isMe: _0x5d577c,
  isOwner: _0x1f37c9,
  groupMetadata: _0x50b0c1,
  groupName: _0x2cf83e,
  participants: _0x8f31dc,
  groupAdmins: _0x3d1855,
  isBotAdmins: _0x436b1d,
  isAdmins: _0x3dcea8,
  reply: _0x578290
}) => {
  try {
    var _0x4bdbca = new Date().getTime();
    let _0x1c61b1 = await _0xdccc9d.sendMessage(_0x2c06ad, {
      'text': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': qtoko
    });
    var _0x32e78e = new Date().getTime();
    await _0xdccc9d.sendMessage(_0x2c06ad, {
      'delete': _0x1c61b1.key
    });
    return await _0xdccc9d.sendMessage(_0x2c06ad, {
      'text': "*🔥Pong*\n *" + (_0x32e78e - _0x4bdbca) + " ms* "
    }, {
      'quoted': qtoko
    });
  } catch (_0x5d9af5) {
    _0x578290("*Error !!*");
    _0x34aea2(_0x5d9af5);
  }
});
cmd({
  'pattern': "alive",
  'desc': "Check if the bot is alive.",
  'category': "main",
  'react': '✅',
  'filename': __filename
}, async (_0xb3fe62, _0x4546f4, _0x562275, {
  from: _0x5f1735,
  quoted: _0x2750fb,
  reply: _0x2b0b11
}) => {
  try {
    await new Promise(_0x539301 => setTimeout(_0x539301, 0x1f4));
    await _0xb3fe62.sendMessage(_0x5f1735, {
      'document': {
        'url': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg"
      },
      'fileName': "〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
      'mimetype': "application/pdf",
      'fileLength': 0x5af3107a3fff,
      'image': {
        'url': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg"
      },
      'pageCount': 0x7e8,
      'caption': "*𝐇𝐞𝐲 𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
          'newsletterJid': "120363343196447945@newsletter"
        },
        'externalAdReply': {
          'title': "©〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
          'body': " *〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉*",
          'thumbnailUrl': 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg',
          'sourceUrl': 'https://wa.me/message/DIDULLTK7ZOGH1',
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
  } catch (_0x313849) {
    console.error(_0x313849);
    _0x2b0b11('' + _0x313849);
  }
});
cmd({
  'pattern': "sysinfo",
  'alias': ["system"],
  'react': "🖥️",
  'desc': "Get system information",
  'category': "main",
  'use': ".sysinfo",
  'filename': __filename
}, async (_0x189eec, _0x3e321f, _0x5218de, {
  from: _0xf5f3d4,
  reply: _0x21a69e
}) => {
  try {
    const _0x36737e = await si.getAllData();
    const _0x2c73f4 = "\n            *Didula MD V2 💚 System Information:*\n            • CPU: " + _0x36737e.cpu.manufacturer + " " + _0x36737e.cpu.brand + "\n            • Cores: " + _0x36737e.cpu.cores + "\n            • RAM: " + (_0x36737e.mem.total / 0x3b9aca00).toFixed(0x2) + " GB\n            • OS: " + _0x36737e.os.distro + " " + _0x36737e.os.release + "\n        ";
    await _0x21a69e(_0x2c73f4);
  } catch (_0x26a530) {
    console.error(_0x26a530);
    _0x21a69e("An error occurred while fetching system information. Please try again later.");
  }
});
cmd({
  'pattern': "heartreact",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".heartreact on/off",
  'filename': __filename
}, async (_0x27704a, _0x31e088, _0x1fb813, {
  from: _0x30c988,
  prefix: _0x5d4a6c,
  l: _0x3bd8b1,
  quoted: _0x1ae1fc,
  body: _0x3676f2,
  isCmd: _0x2690e2,
  command: _0x4dd0a7,
  args: _0x3797c9,
  q: _0x31797f,
  isGroup: _0x347b49,
  sender: _0x511558,
  senderNumber: _0x6f3963,
  botNumber2: _0x5ace56,
  botNumber: _0x152a7e,
  pushname: _0x1dd2c5,
  isMe: _0x14ec0a,
  isOwner: _0x821af,
  groupMetadata: _0x4efa0c,
  groupName: _0x14949f,
  participants: _0x528c46,
  groupAdmins: _0x3356a7,
  isBotAdmins: _0x31b6a2,
  isAdmins: _0x2b64cf,
  reply: _0x3d2e89,
  config: _0x18f064
}) => {
  try {
    if (!_0x821af) {
      return _0x3d2e89("❌ You are not the owner!");
    }
    if (_0x31797f == 'on') {
      if (_0x18f064.HEART_REACT == 'true') {
        return _0x3d2e89("already on ");
      }
      await input_set("HEART_REACT", 'true');
      return _0x3d2e89("heartreact turned on");
    }
    if (_0x31797f == "off") {
      if (_0x18f064.HEART_REACT !== "true") {
        return _0x3d2e89("already off");
      }
      await input_set("HEART_REACT", "false");
      return _0x3d2e89("heartreact turned off");
    }
  } catch (_0x404ff4) {
    _0x3d2e89("*Error !!*");
    _0x3bd8b1(_0x404ff4);
  }
});
cmd({
  'pattern': "autovoice",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".autovoice on/off",
  'filename': __filename
}, async (_0x1f18fa, _0x26a88a, _0x5617a0, {
  from: _0x32df6e,
  prefix: _0x598b3d,
  l: _0xab1e8f,
  quoted: _0x3c2241,
  body: _0x58bfaa,
  isCmd: _0x4278d3,
  command: _0x15f644,
  args: _0x657c25,
  q: _0x358f03,
  isGroup: _0x2125d5,
  sender: _0xad9d5b,
  senderNumber: _0x49e6b1,
  botNumber2: _0x3b5470,
  botNumber: _0x1cf43d,
  pushname: _0x3d605d,
  isMe: _0x21c9a0,
  isOwner: _0x1cd895,
  groupMetadata: _0x5b47f1,
  groupName: _0x38de8c,
  participants: _0xe944e6,
  groupAdmins: _0x67846a,
  isBotAdmins: _0x5168fd,
  isAdmins: _0x66ebc4,
  reply: _0x4c6abd,
  config: _0x3ee4b5
}) => {
  try {
    if (!_0x1cd895) {
      return _0x4c6abd("❌ You are not the owner!");
    }
    if (_0x358f03 == 'on') {
      if (_0x3ee4b5.AUTO_VOICE == 'true') {
        return _0x4c6abd("already on ");
      }
      await input_set('AUTO_VOICE', 'true');
      return _0x4c6abd("autovoice turned on");
    }
    if (_0x358f03 == "off") {
      if (_0x3ee4b5.AUTO_VOICE !== "true") {
        return _0x4c6abd("already off");
      }
      await input_set("AUTO_VOICE", "false");
      return _0x4c6abd("autovoice turned off");
    }
  } catch (_0x1d8b25) {
    _0x4c6abd("*Error !!*");
    _0xab1e8f(_0x1d8b25);
  }
});
cmd({
  'pattern': 'autoreply',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autovoice on/off",
  'filename': __filename
}, async (_0x2155b5, _0x878afd, _0x41a4db, {
  from: _0x450084,
  prefix: _0x556a94,
  l: _0x525b0b,
  quoted: _0x32ecb7,
  body: _0x682d11,
  isCmd: _0x5a4307,
  command: _0x332b63,
  args: _0x15439e,
  q: _0x572a15,
  isGroup: _0x1fccfe,
  sender: _0x291ff8,
  senderNumber: _0xe52ffc,
  botNumber2: _0x1d0b0e,
  botNumber: _0x5e41c3,
  pushname: _0x4e92d7,
  isMe: _0x17bdd4,
  isOwner: _0x1e8101,
  groupMetadata: _0x26d7ad,
  groupName: _0x1551de,
  participants: _0x14c652,
  groupAdmins: _0x316a3,
  isBotAdmins: _0x259daa,
  isAdmins: _0x36ad74,
  reply: _0x3f7a6a,
  config: _0x26323b
}) => {
  try {
    if (!_0x1e8101) {
      return _0x3f7a6a("❌ You are not the owner!");
    }
    if (_0x572a15 == 'on') {
      if (_0x26323b.AUTO_REPLY == "true") {
        return _0x3f7a6a("already on ");
      }
      await input_set('AUTO_REPLY', "true");
      return _0x3f7a6a("auto reply turned on");
    }
    if (_0x572a15 == 'off') {
      if (_0x26323b.AUTO_REPLY !== "true") {
        return _0x3f7a6a("already off");
      }
      await input_set("AUTO_REPLY", 'false');
      return _0x3f7a6a("auto reply turned off");
    }
  } catch (_0x52c883) {
    _0x3f7a6a("*Error !!*");
    _0x525b0b(_0x52c883);
  }
});
cmd({
  'pattern': "autosticker",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autosticmer on/off",
  'filename': __filename
}, async (_0x3e8f36, _0x319b31, _0x3e39e4, {
  from: _0x50b5dc,
  prefix: _0x39c255,
  l: _0x3653a8,
  quoted: _0x55b322,
  body: _0x3efb79,
  isCmd: _0x54e559,
  command: _0x3063d3,
  args: _0x58e32e,
  q: _0x23c310,
  isGroup: _0x30186b,
  sender: _0x43c9db,
  senderNumber: _0x414d16,
  botNumber2: _0x498625,
  botNumber: _0x533d23,
  pushname: _0x4b9377,
  isMe: _0x4fd8c5,
  isOwner: _0x879c3d,
  groupMetadata: _0x24b7f8,
  groupName: _0xb4d2c7,
  participants: _0x276fde,
  groupAdmins: _0x493da3,
  isBotAdmins: _0x42d89e,
  isAdmins: _0xcdac13,
  reply: _0x459a4f,
  config: _0x289cb0
}) => {
  try {
    if (!_0x879c3d) {
      return _0x459a4f("❌ You are not the owner!");
    }
    if (_0x23c310 == 'on') {
      if (_0x289cb0.AUTO_STICKER == 'true') {
        return _0x459a4f("already on ");
      }
      await input_set("AUTO_STICKER", "true");
      return _0x459a4f("autosticker turned on");
    }
    if (_0x23c310 == "off") {
      if (_0x289cb0.AUTO_STICKER !== "true") {
        return _0x459a4f("already off");
      }
      await input_set("AUTO_STICKER", 'false');
      return _0x459a4f("autosticker turned off");
    }
  } catch (_0x32f939) {
    _0x459a4f("*Error !!*");
    _0x3653a8(_0x32f939);
  }
});
cmd({
  'pattern': "autobio",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".autobio on/off",
  'filename': __filename
}, async (_0x24ec48, _0xeb62b2, _0x1e83e4, {
  from: _0x52fd16,
  prefix: _0x2f02f4,
  l: _0x161a34,
  quoted: _0x2e68e0,
  body: _0x25af93,
  isCmd: _0x19d2e5,
  command: _0x3e9591,
  args: _0x305f8a,
  q: _0x2197c8,
  isGroup: _0x595106,
  sender: _0x40f9a9,
  senderNumber: _0x255cad,
  botNumber2: _0x393336,
  botNumber: _0x1f92bb,
  pushname: _0x5876be,
  isMe: _0x429891,
  isOwner: _0x35cd72,
  groupMetadata: _0x297d6b,
  groupName: _0x15a0ec,
  participants: _0x5d08e2,
  groupAdmins: _0x229e18,
  isBotAdmins: _0x585b12,
  isAdmins: _0x14d817,
  reply: _0x535028,
  config: _0x3465de
}) => {
  try {
    if (!_0x35cd72) {
      return _0x535028("❌ You are not the owner!");
    }
    if (_0x2197c8 == 'on') {
      if (_0x3465de.AUTO_BIO == "true") {
        return _0x535028("already on ");
      }
      await input_set('AUTO_BIO', "true");
      return _0x535028("autobio turned on");
    }
    if (_0x2197c8 == "off") {
      if (_0x3465de.AUTO_BIO !== "true") {
        return _0x535028("already off");
      }
      await input_set("AUTO_BIO", "false");
      return _0x535028("autobio turned off");
    }
  } catch (_0xbd59ae) {
    _0x535028("*Error !!*");
    _0x161a34(_0xbd59ae);
  }
});
cmd({
  'pattern': "autowelcome",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".autowelcome on/off",
  'filename': __filename
}, async (_0x1cf31d, _0xa197b7, _0x41ce2d, {
  from: _0x5a1746,
  prefix: _0x2246a6,
  l: _0x3f0ac5,
  quoted: _0x3bec3b,
  body: _0x368173,
  isCmd: _0x6f7253,
  command: _0x5cb526,
  args: _0x3c86c6,
  q: _0x27b312,
  isGroup: _0x5dd10d,
  sender: _0x2ce796,
  senderNumber: _0x3ff5b9,
  botNumber2: _0x519534,
  botNumber: _0x4fbbb4,
  pushname: _0x16c73a,
  isMe: _0x1d2955,
  isOwner: _0xa28fcc,
  groupMetadata: _0x58325a,
  groupName: _0xd0b75a,
  participants: _0x48a958,
  groupAdmins: _0x1926e2,
  isBotAdmins: _0x44928c,
  isAdmins: _0x341e92,
  reply: _0x59b2a3,
  config: _0x341dc0
}) => {
  try {
    if (!_0xa28fcc) {
      return _0x59b2a3("❌ You are not the owner!");
    }
    if (_0x27b312 == 'on') {
      if (_0x341dc0.AUTO_WELCOME == 'true') {
        return _0x59b2a3("already on ");
      }
      await input_set("AUTO_WELCOME", 'true');
      return _0x59b2a3("autowelcome turned on");
    }
    if (_0x27b312 == "off") {
      if (_0x341dc0.AUTO_WELCOME !== "true") {
        return _0x59b2a3("already off");
      }
      await input_set("AUTO_WELCOME", "false");
      return _0x59b2a3("autowelcome turned off");
    }
  } catch (_0x37bdf9) {
    _0x59b2a3("*Error !!*");
    _0x3f0ac5(_0x37bdf9);
  }
});
cmd({
  'pattern': "antibot",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".antibot on/off",
  'filename': __filename
}, async (_0x4678ba, _0x3047bd, _0x5e99b7, {
  from: _0x577e7a,
  prefix: _0x569271,
  l: _0x6957bc,
  quoted: _0x3ea1af,
  body: _0x3ed040,
  isCmd: _0x53d204,
  command: _0x344a50,
  args: _0x25813d,
  q: _0x2c5e5b,
  isGroup: _0x2eff7e,
  sender: _0x58e8b4,
  senderNumber: _0x494dd4,
  botNumber2: _0x500f17,
  botNumber: _0x203966,
  pushname: _0x12b5e6,
  isMe: _0x46eaa8,
  isOwner: _0x1af6c3,
  groupMetadata: _0x1bda18,
  groupName: _0x491ff5,
  participants: _0x43a70c,
  groupAdmins: _0x41452f,
  isBotAdmins: _0x16febf,
  isAdmins: _0x46c8c4,
  reply: _0x2cfd08,
  config: _0x385fe6
}) => {
  try {
    if (!_0x1af6c3) {
      return _0x2cfd08("❌ You are not the owner!");
    }
    if (_0x2c5e5b == 'on') {
      if (_0x385fe6.ANTI_BOT == "true") {
        return _0x2cfd08("already on ");
      }
      await input_set('ANTI_BOT', "true");
      return _0x2cfd08("antibot turned on");
    }
    if (_0x2c5e5b == "off") {
      if (_0x385fe6.ANTI_BOT !== "true") {
        return _0x2cfd08("already off");
      }
      await input_set("ANTI_BOT", "false");
      return _0x2cfd08("antibot turned off");
    }
  } catch (_0x183c93) {
    _0x2cfd08("*Error !!*");
    _0x6957bc(_0x183c93);
  }
});
cmd({
  'pattern': 'antilink',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".antilink on/off",
  'filename': __filename
}, async (_0x2c51bf, _0x5b9a48, _0x2eff15, {
  from: _0x50248c,
  prefix: _0x86519e,
  l: _0x2df382,
  quoted: _0x229d77,
  body: _0x280a85,
  isCmd: _0x63c0c0,
  command: _0x2a7155,
  args: _0x4c28a0,
  q: _0x1e590d,
  isGroup: _0x2f495a,
  sender: _0x19fcfc,
  senderNumber: _0x102302,
  botNumber2: _0x5d67e7,
  botNumber: _0x216f5a,
  pushname: _0x4b9af7,
  isMe: _0x5167f6,
  isOwner: _0x4ff158,
  groupMetadata: _0x366e01,
  groupName: _0x5325fc,
  participants: _0x28c81c,
  groupAdmins: _0x7831f,
  isBotAdmins: _0x3a8162,
  isAdmins: _0x12e6f8,
  reply: _0x398452,
  config: _0x4664f0
}) => {
  try {
    if (!_0x4ff158) {
      return _0x398452("❌ You are not the owner!");
    }
    if (_0x1e590d == 'on') {
      if (_0x4664f0.ANTI_LINK == "true") {
        return _0x398452("already on ");
      }
      await input_set("ANTI_LINK", "true");
      return _0x398452("antilink turned on");
    }
    if (_0x1e590d == "off") {
      if (_0x4664f0.ANTI_LINK !== "true") {
        return _0x398452("already off");
      }
      await input_set('ANTI_LINK', "false");
      return _0x398452("antilink turned off");
    }
  } catch (_0x36b534) {
    _0x398452("*Error !!*");
    _0x2df382(_0x36b534);
  }
});
cmd({
  'pattern': "antibad",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".antibad on/off",
  'filename': __filename
}, async (_0x54aa9c, _0x625621, _0x2b4e73, {
  from: _0x2a6689,
  prefix: _0x4a4f2a,
  l: _0x3fb13f,
  quoted: _0x17c2f2,
  body: _0x3954f0,
  isCmd: _0x54efd9,
  command: _0x4bf5dc,
  args: _0x57fade,
  q: _0x579d6b,
  isGroup: _0x5e86e2,
  sender: _0x2bdcf3,
  senderNumber: _0x50e5cf,
  botNumber2: _0x5227b9,
  botNumber: _0x3879d6,
  pushname: _0x173cc1,
  isMe: _0x15b4b6,
  isOwner: _0x3d5031,
  groupMetadata: _0x3ac6dc,
  groupName: _0x128d01,
  participants: _0x15d419,
  groupAdmins: _0x5d2393,
  isBotAdmins: _0x201504,
  isAdmins: _0x31beef,
  reply: _0x3e1c70,
  config: _0x258dae
}) => {
  try {
    if (!_0x3d5031) {
      return _0x3e1c70("❌ You are not the owner!");
    }
    if (_0x579d6b == 'on') {
      if (_0x258dae.ANTI_BAD == "true") {
        return _0x3e1c70("already on ");
      }
      await input_set("ANTI_BAD", "true");
      return _0x3e1c70("antibad turned on");
    }
    if (_0x579d6b == "off") {
      if (_0x258dae.ANTI_BAD !== "true") {
        return _0x3e1c70("already off");
      }
      await input_set('ANTI_BAD', "false");
      return _0x3e1c70("antibad turned off");
    }
  } catch (_0x2b0684) {
    _0x3e1c70("*Error !!*");
    _0x3fb13f(_0x2b0684);
  }
});
cmd({
  'pattern': "autostatus",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autostatus on/off",
  'filename': __filename
}, async (_0xbef994, _0x516625, _0x5eba2d, {
  from: _0x51418d,
  prefix: _0x4c4d36,
  l: _0x16f3a7,
  quoted: _0x17517e,
  body: _0xb0035f,
  isCmd: _0x2b1aab,
  command: _0x3bb32c,
  args: _0x360a24,
  q: _0x5b236a,
  isGroup: _0x4a79ca,
  sender: _0x1005b7,
  senderNumber: _0x49bbf8,
  botNumber2: _0x55f045,
  botNumber: _0x4bd341,
  pushname: _0x3e4c6e,
  isMe: _0x3e2dc6,
  isOwner: _0x2ace7b,
  groupMetadata: _0x42c408,
  groupName: _0x23cf6c,
  participants: _0x26ab8d,
  groupAdmins: _0x31dd67,
  isBotAdmins: _0x2810e6,
  isAdmins: _0x356eac,
  reply: _0x4d316d,
  config: _0xdb8721
}) => {
  try {
    if (!_0x2ace7b) {
      return _0x4d316d("❌ You are not the owner!");
    }
    if (_0x5b236a == 'on') {
      if (_0xdb8721.AUTO_READ_STATUS == "true") {
        return _0x4d316d("already on ");
      }
      await input_set('AUTO_READ_STATUS', "true");
      return _0x4d316d("autostatus turned on");
    }
    if (_0x5b236a == 'off') {
      if (_0xdb8721.AUTO_READ_STATUS !== "true") {
        return _0x4d316d("already off");
      }
      await input_set("AUTO_READ_STATUS", "false");
      return _0x4d316d("autostatus turned off");
    }
  } catch (_0x2ae565) {
    _0x4d316d("*Error !!*");
    _0x16f3a7(_0x2ae565);
  }
});
cmd({
  'pattern': "autotyping",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".autotyping on/off",
  'filename': __filename
}, async (_0x5c7240, _0x5d9eb7, _0xc0b4d4, {
  from: _0x71c907,
  prefix: _0x39604c,
  l: _0x58e886,
  quoted: _0x1daf21,
  body: _0x24853c,
  isCmd: _0x34a7fe,
  command: _0x436dd5,
  args: _0x20dd67,
  q: _0x3a7b05,
  isGroup: _0x4bd904,
  sender: _0x482822,
  senderNumber: _0x26d437,
  botNumber2: _0xb48cf7,
  botNumber: _0x3c2002,
  pushname: _0x103122,
  isMe: _0x11ac60,
  isOwner: _0x52bec8,
  groupMetadata: _0x43369e,
  groupName: _0x5c5532,
  participants: _0x1dfab3,
  groupAdmins: _0x4cfc19,
  isBotAdmins: _0x400de0,
  isAdmins: _0x42de50,
  reply: _0x1c996f,
  config: _0x100571
}) => {
  try {
    if (!_0x52bec8) {
      return _0x1c996f("❌ You are not the owner!");
    }
    if (_0x3a7b05 == 'on') {
      if (_0x100571.AUTO_TYPING == "true") {
        return _0x1c996f("already on ");
      }
      await input_set("AUTO_TYPING", "true");
      return _0x1c996f("autotyping turned on");
    }
    if (_0x3a7b05 == "off") {
      if (_0x100571.AUTO_TYPING !== "true") {
        return _0x1c996f("already off");
      }
      await input_set('AUTO_TYPING', "false");
      return _0x1c996f("autotyping turned off");
    }
  } catch (_0xa7e814) {
    _0x1c996f("*Error !!*");
    _0x58e886(_0xa7e814);
  }
});
cmd({
  'pattern': "autorecording",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autorecording on/off",
  'filename': __filename
}, async (_0x14f6ac, _0x21388f, _0x12e3e7, {
  from: _0x4b2e44,
  prefix: _0x403ef3,
  l: _0x47ac5e,
  quoted: _0x42db0a,
  body: _0x28532a,
  isCmd: _0x22dbee,
  command: _0x168c63,
  args: _0x2f21f7,
  q: _0x1fd34a,
  isGroup: _0x13cd8a,
  sender: _0xb8309d,
  senderNumber: _0x330320,
  botNumber2: _0x3fe037,
  botNumber: _0x31a77c,
  pushname: _0x4a1d84,
  isMe: _0x35f0c7,
  isOwner: _0x1ea708,
  groupMetadata: _0x44b07c,
  groupName: _0x780e46,
  participants: _0x50315b,
  groupAdmins: _0x39cbe2,
  isBotAdmins: _0x249dd4,
  isAdmins: _0x370ba9,
  reply: _0x18d8c2,
  config: _0x585d06
}) => {
  try {
    if (!_0x1ea708) {
      return _0x18d8c2("❌ You are not the owner!");
    }
    if (_0x1fd34a == 'on') {
      if (_0x585d06.RECORDING == "true") {
        return _0x18d8c2("already on ");
      }
      await input_set("RECORDING", 'true');
      return _0x18d8c2("autorecording turned on");
    }
    if (_0x1fd34a == "off") {
      if (_0x585d06.RECORDING !== "true") {
        return _0x18d8c2("already off");
      }
      await input_set("RECORDING", "false");
      return _0x18d8c2("autorecording turned off");
    }
  } catch (_0x26ae4b) {
    _0x18d8c2("*Error !!*");
    _0x47ac5e(_0x26ae4b);
  }
});
cmd({
  'pattern': 'cmdread',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autotyping on/off",
  'filename': __filename
}, async (_0x1a8646, _0x8539ef, _0x49b8d9, {
  from: _0x398773,
  prefix: _0xe781ab,
  l: _0x2a0f20,
  quoted: _0x259e6c,
  body: _0x4a6071,
  isCmd: _0x3f6eb6,
  command: _0x37b08c,
  args: _0x2dc8e6,
  q: _0x551eb6,
  isGroup: _0x59982f,
  sender: _0x52102a,
  senderNumber: _0x4d0169,
  botNumber2: _0x396f88,
  botNumber: _0x19cd1e,
  pushname: _0x10f424,
  isMe: _0x50edc0,
  isOwner: _0x2276b5,
  groupMetadata: _0x86a7f4,
  groupName: _0x4baf90,
  participants: _0x5b30ae,
  groupAdmins: _0x59f6cd,
  isBotAdmins: _0x299cdd,
  isAdmins: _0x51d7a9,
  reply: _0x45442d,
  config: _0x4d2bf3
}) => {
  try {
    if (!_0x2276b5) {
      return _0x45442d("❌ You are not the owner!");
    }
    if (_0x551eb6 == 'on') {
      if (_0x4d2bf3.READ_CMD == 'true') {
        return _0x45442d("already on ");
      }
      await input_set('READ_CMD', "true");
      return _0x45442d("cmd turned on");
    }
    if (_0x551eb6 == "off") {
      if (_0x4d2bf3.READ_CMD !== "true") {
        return _0x45442d("already off");
      }
      await input_set("READ_CMD", 'false');
      return _0x45442d("cmdread turned off");
    }
  } catch (_0x564312) {
    _0x45442d("*Error !!*");
    _0x2a0f20(_0x564312);
  }
});
cmd({
  'pattern': "autoreact",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autoreact on/off",
  'filename': __filename
}, async (_0xa13f6f, _0x154b2, _0x3cb1b8, {
  from: _0x59b0fd,
  prefix: _0x4e9583,
  l: _0x252e24,
  quoted: _0x155523,
  body: _0x125d25,
  isCmd: _0x42d519,
  command: _0x445a24,
  args: _0x2b71d9,
  q: _0x11c657,
  isGroup: _0x561705,
  sender: _0xa71a1c,
  senderNumber: _0x19cee5,
  botNumber2: _0x3d8db9,
  botNumber: _0x24bad2,
  pushname: _0x160c74,
  isMe: _0x33678b,
  isOwner: _0x251cf3,
  groupMetadata: _0x519a66,
  groupName: _0x341a20,
  participants: _0x111cca,
  groupAdmins: _0x1ad09c,
  isBotAdmins: _0x1cc9a4,
  isAdmins: _0x5ccef6,
  reply: _0x81b406,
  config: _0x379d54
}) => {
  try {
    if (!_0x251cf3) {
      return _0x81b406("❌ You are not the owner!");
    }
    if (_0x11c657 == 'on') {
      if (_0x379d54.AUTO_REACT == "true") {
        return _0x81b406("already on ");
      }
      await input_set("AUTO_REACT", "true");
      return _0x81b406("autoreact turned on");
    }
    if (_0x11c657 == 'off') {
      if (_0x379d54.AUTO_REACT !== "true") {
        return _0x81b406("already off");
      }
      await input_set("AUTO_REACT", "false");
      return _0x81b406("autoreact turned off");
    }
  } catch (_0x3201eb) {
    _0x81b406("*Error !!*");
    _0x252e24(_0x3201eb);
  }
});
cmd({
  'pattern': "alwaysonline",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".alwaysonline on/off",
  'filename': __filename
}, async (_0x27e11f, _0x50db31, _0x3826bc, {
  from: _0x3cfbb0,
  prefix: _0x49eb20,
  l: _0x4c6fad,
  quoted: _0x5a849d,
  body: _0x130685,
  isCmd: _0x3077ad,
  command: _0x55dd0b,
  args: _0x4ee743,
  q: _0x28b47c,
  isGroup: _0x5bcd3a,
  sender: _0x2f72d3,
  senderNumber: _0x2de5e4,
  botNumber2: _0x2ce6c2,
  botNumber: _0x2957cb,
  pushname: _0x306271,
  isMe: _0x476c61,
  isOwner: _0x59f780,
  groupMetadata: _0x3aebff,
  groupName: _0x509c81,
  participants: _0x38a210,
  groupAdmins: _0x136235,
  isBotAdmins: _0x443b2a,
  isAdmins: _0x23e1be,
  reply: _0x55e71a,
  config: _0x3821de
}) => {
  try {
    if (!_0x59f780) {
      return _0x55e71a("❌ You are not the owner!");
    }
    if (_0x28b47c == 'on') {
      if (_0x3821de.ALWAYS_ONLINE == "true") {
        return _0x55e71a("already on ");
      }
      await input_set("ALWAYS_ONLINE", "true");
      return _0x55e71a("alwaysonline turned on");
    }
    if (_0x28b47c == 'off') {
      if (_0x3821de.ALWAYS_ONLINE !== "true") {
        return _0x55e71a("already off");
      }
      await input_set("ALWAYS_ONLINE", "false");
      return _0x55e71a("alwaysonline turned off");
    }
  } catch (_0x46585c) {
    _0x55e71a("*Error !!*");
    _0x4c6fad(_0x46585c);
  }
});
cmd({
  'pattern': "212block",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".212block on/off",
  'filename': __filename
}, async (_0x4ebc94, _0x100dbb, _0x2cf7f5, {
  from: _0x1d34c7,
  prefix: _0x491346,
  l: _0x4ce7af,
  quoted: _0x447bd8,
  body: _0x30318c,
  isCmd: _0x1d1bf6,
  command: _0xa5af4c,
  args: _0x35c1aa,
  q: _0x32b735,
  isGroup: _0x3b8aad,
  sender: _0x5ae406,
  senderNumber: _0x1de7d6,
  botNumber2: _0x4c6830,
  botNumber: _0x2980b1,
  pushname: _0x512d6f,
  isMe: _0x3397ac,
  isOwner: _0x4e6925,
  groupMetadata: _0x14ba7d,
  groupName: _0x2f867b,
  participants: _0x1b49ee,
  groupAdmins: _0x322045,
  isBotAdmins: _0x57edaf,
  isAdmins: _0x52677f,
  reply: _0x1b53a3,
  config: _0x51a087
}) => {
  try {
    if (!_0x4e6925) {
      return _0x1b53a3("❌ You are not the owner!");
    }
    if (_0x32b735 == 'on') {
      if (_0x51a087.NUMBER_212_BLOCK == "true") {
        return _0x1b53a3("already on ");
      }
      await input_set('NUMBER_212_BLOCK', 'true');
      return _0x1b53a3("212block turned on");
    }
    if (_0x32b735 == "off") {
      if (_0x51a087.NUMBER_212_BLOCK !== "true") {
        return _0x1b53a3("already off");
      }
      await input_set('NUMBER_212_BLOCK', "false");
      return _0x1b53a3("212block turned off");
    }
  } catch (_0x5cf3ac) {
    _0x1b53a3("*Error !!*");
    _0x4ce7af(_0x5cf3ac);
  }
});
cmd({
  'pattern': "anticall",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".anticall on/off",
  'filename': __filename
}, async (_0x402c6a, _0x365b23, _0x2f29c6, {
  from: _0x4e3880,
  prefix: _0xfc4e33,
  l: _0x125447,
  quoted: _0x4bc9cc,
  body: _0x6b13e,
  isCmd: _0x45c2e6,
  command: _0x58d6dd,
  args: _0x29b4b4,
  q: _0x49c8bd,
  isGroup: _0x5e06ca,
  sender: _0x647a1e,
  senderNumber: _0x1a1657,
  botNumber2: _0x34e40,
  botNumber: _0x4ba4fc,
  pushname: _0x5b7ca1,
  isMe: _0x1f967f,
  isOwner: _0x2532e5,
  groupMetadata: _0x3a3e09,
  groupName: _0x46e847,
  participants: _0x1a044a,
  groupAdmins: _0x407375,
  isBotAdmins: _0x1efbc6,
  isAdmins: _0xcac633,
  reply: _0x2f6f94,
  config: _0xfac53a
}) => {
  try {
    if (!_0x2532e5) {
      return _0x2f6f94("❌ You are not the owner!");
    }
    if (_0x49c8bd == 'on') {
      if (_0xfac53a.ANTI_CALL == "true") {
        return _0x2f6f94("already on ");
      }
      await input_set("ANTI_CALL", 'true');
      return _0x2f6f94("anticall turned on");
    }
    if (_0x49c8bd == "off") {
      if (_0xfac53a.ANTI_CALL !== "true") {
        return _0x2f6f94("already off");
      }
      await input_set("ANTI_CALL", 'false');
      return _0x2f6f94("anticall turned off");
    }
  } catch (_0x165838) {
    _0x2f6f94("*Error !!*");
    _0x125447(_0x165838);
  }
});
cmd({
  'pattern': "antidelete",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".antidelete on/off",
  'filename': __filename
}, async (_0xd8d639, _0x5eef5b, _0x3aed37, {
  from: _0x56ad9e,
  prefix: _0x140a59,
  l: _0x3cacc3,
  quoted: _0x2031b2,
  body: _0x21bed5,
  isCmd: _0x15ded4,
  command: _0x23898d,
  args: _0x3583f5,
  q: _0x4dafc8,
  isGroup: _0x5ea345,
  sender: _0x1f84c8,
  senderNumber: _0x2a6003,
  botNumber2: _0x2ced28,
  botNumber: _0x404963,
  pushname: _0x2cd559,
  isMe: _0x1e89b3,
  isOwner: _0x10cb14,
  groupMetadata: _0x3d5259,
  groupName: _0x144e4a,
  participants: _0x2cb835,
  groupAdmins: _0x43276c,
  isBotAdmins: _0x16ecb8,
  isAdmins: _0xfa7c0b,
  reply: _0x5f50bd,
  config: _0x49bfde
}) => {
  try {
    if (!_0x10cb14) {
      return _0x5f50bd("❌ You are not the owner!");
    }
    if (_0x4dafc8 == 'on') {
      if (_0x49bfde.ANTI_DELETE == "true") {
        return _0x5f50bd("already on ");
      }
      await input_set("ANTI_DELETE", "true");
      return _0x5f50bd("antidelete turned on");
    }
    if (_0x4dafc8 == "off") {
      if (_0x49bfde.ANTI_DELETE !== "true") {
        return _0x5f50bd("already off");
      }
      await input_set('ANTI_DELETE', 'false');
      return _0x5f50bd("antidelete turned off");
    }
  } catch (_0x56d8ab) {
    _0x5f50bd("*Error !!*");
    _0x3cacc3(_0x56d8ab);
  }
});
cmd({
  'pattern': "aichat",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".aichat on/off",
  'filename': __filename
}, async (_0x2dcbec, _0x4ab98d, _0x25fd01, {
  from: _0x1c42ae,
  prefix: _0x3ad8f7,
  l: _0x112a1c,
  quoted: _0x168bbe,
  body: _0x487734,
  isCmd: _0x27a7e6,
  command: _0x134a09,
  args: _0x3e916c,
  q: _0x202023,
  isGroup: _0x127dcc,
  sender: _0x27bb81,
  senderNumber: _0x26efc8,
  botNumber2: _0x53502e,
  botNumber: _0x97cedd,
  pushname: _0x2f382a,
  isMe: _0x48e625,
  isOwner: _0x245ff4,
  groupMetadata: _0x4c755c,
  groupName: _0x94725c,
  participants: _0x3d14ef,
  groupAdmins: _0x12128c,
  isBotAdmins: _0x5aa864,
  isAdmins: _0x3a8e6d,
  reply: _0x2f8860,
  config: _0x10eda6
}) => {
  try {
    if (!_0x245ff4) {
      return _0x2f8860("❌ You are not the owner!");
    }
    if (_0x202023 == 'on') {
      if (_0x10eda6.AI_CHAT == "true") {
        return _0x2f8860("already on ");
      }
      await input_set("AI_CHAT", "true");
      return _0x2f8860("aichat turned on");
    }
    if (_0x202023 == "off") {
      if (_0x10eda6.AI_CHAT !== "true") {
        return _0x2f8860("already off");
      }
      await input_set("AI_CHAT", "false");
      return _0x2f8860("aichat turned off");
    }
  } catch (_0x1a505e) {
    _0x2f8860("*Error !!*");
    _0x112a1c(_0x1a505e);
  }
});
cmd({
  'pattern': "autosongsend",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autosongsend on/off",
  'filename': __filename
}, async (_0x19d9b0, _0x5aa09b, _0x39b079, {
  from: _0x39542d,
  prefix: _0x2efb3b,
  l: _0x2e6a4c,
  quoted: _0x113fc8,
  body: _0x1d9111,
  isCmd: _0x278d80,
  command: _0x17e4fb,
  args: _0x581220,
  q: _0x40abe2,
  isGroup: _0x1b089a,
  sender: _0x323cb1,
  senderNumber: _0x26ec38,
  botNumber2: _0xa88ed0,
  botNumber: _0x3ae1f3,
  pushname: _0x29a0ea,
  isMe: _0x472c09,
  isOwner: _0x5445fc,
  groupMetadata: _0x160677,
  groupName: _0x36ee92,
  participants: _0x1d09f6,
  groupAdmins: _0x312ff8,
  isBotAdmins: _0x820d3f,
  isAdmins: _0x175a6d,
  reply: _0x2b442d,
  config: _0x1157b6
}) => {
  try {
    if (!_0x5445fc) {
      return _0x2b442d("❌ You are not the owner!");
    }
    if (_0x40abe2 == 'on') {
      if (_0x1157b6.AUTO_SONG_SENDER == "true") {
        return _0x2b442d("already on");
      }
      await input_set("AUTO_SONG_SENDER", 'true');
      return _0x2b442d("autosongsend turned on");
    }
    if (_0x40abe2 == "off") {
      if (_0x1157b6.AUTO_SONG_SENDER !== 'true') {
        return _0x2b442d("already off");
      }
      await input_set("AUTO_SONG_SENDER", "false");
      return _0x2b442d("autosongsend turned off");
    }
  } catch (_0x37286d) {
    _0x2b442d("*Error !!*");
    _0x2e6a4c(_0x37286d);
  }
});
cmd({
  'pattern': "mode",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".mode public/private",
  'filename': __filename
}, async (_0x533e7a, _0x28013f, _0x4e3977, {
  from: _0x8f92b1,
  prefix: _0x1df600,
  l: _0x3612db,
  quoted: _0x2762ed,
  body: _0xc69dc4,
  isCmd: _0x48435f,
  command: _0x548d99,
  args: _0x364dc1,
  q: _0x22500f,
  isGroup: _0x1018aa,
  sender: _0xc7815a,
  senderNumber: _0x58d547,
  botNumber2: _0x5621f4,
  botNumber: _0x1e46de,
  pushname: _0x4772f0,
  isMe: _0x1b8df7,
  isOwner: _0x2c0a77,
  groupMetadata: _0xb66879,
  groupName: _0x38d2a0,
  participants: _0x3bd2be,
  groupAdmins: _0x1c027d,
  isBotAdmins: _0x2359e5,
  isAdmins: _0x3a82b9,
  reply: _0x13cf45,
  config: _0x458dd5
}) => {
  try {
    if (!_0x2c0a77) {
      return _0x13cf45("❌ You are not the owner!");
    }
    if (_0x22500f == "private") {
      if (_0x458dd5.MODE == 'private') {
        return _0x13cf45("already private ");
      }
      await input_set("MODE", "private");
      return _0x13cf45("private mode turned on");
    }
    if (_0x22500f == "public") {
      if (_0x458dd5.MODE !== "public") {
        return _0x13cf45("already public");
      }
      await input_set('MODE', "public");
      return _0x13cf45("public mode turned off");
    }
    if (_0x22500f == "inbox") {
      if (_0x458dd5.MODE !== "inbox") {
        return _0x13cf45("already inbox");
      }
      await input_set("MODE", 'inbox');
      return _0x13cf45("inbox mode turned off");
    }
    if (_0x22500f == "groups") {
      if (_0x458dd5.MODE !== 'groups') {
        return _0x13cf45("already groups");
      }
      await input_set("MODE", 'groups');
      return _0x13cf45("groups mode turned off");
    }
  } catch (_0x259f0c) {
    _0x13cf45("*Error !!*");
    _0x3612db(_0x259f0c);
  }
});
cmd({
  'pattern': 'settings',
  'react': "🗣️",
  'alias': ['setting'],
  'desc': "Check bot online or not.",
  'category': "main",
  'filename': __filename
}, async (_0x5cef56, _0x8c0557, _0x3852eb, {
  from: _0x23793d,
  quoted: _0x43b57b,
  body: _0x2cbaf8,
  isCmd: _0x2e0cac,
  command: _0x37d4fc,
  args: _0x564d62,
  q: _0x298cf2,
  isGroup: _0x548d5e,
  sender: _0x4ce20e,
  senderNumber: _0x618a3e,
  botNumber2: _0x34e584,
  botNumber: _0x1f5893,
  pushname: _0x547059,
  isMe: _0x5570e7,
  isOwner: _0x4f1342,
  groupMetadata: _0x45b56a,
  groupName: _0x6571ff,
  participants: _0x490478,
  groupAdmins: _0x34d44b,
  isBotAdmins: _0x202bac,
  isAdmins: _0x270973,
  reply: _0x342500
}) => {
  try {
    if (!_0x4f1342) {
      return;
    }
    const _0x56b828 = await _0x5cef56.sendMessage(_0x23793d, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*[ •  DIDULA-MD-V2 - SETTINGS‎ • ]*\n*╭┈───────────────•*\n*┊* *♾️ AUTO_READ_STATUS:* ➠ " + config.AUTO_READ_STATUS + "\n*┊* *♾️ MODE:* ➠ " + config.MODE + " \n*┊* *♾️ AI_CHAT:* ➠ " + config.AI_CHAT + " \n*┊* *♾️ ANTI_DELETE:* ➠ " + config.ANTI_DELETE + " \n*┊* *♾️ AUTO_VOICE:* ➠ " + config.AUTO_VOICE + " \n*┊* *♾️ AUTO_STICKER:* ➠ " + config.AUTO_STICKER + " \n*┊* *♾️ AUTO_REPLY:* ➠ " + config.AUTO_REPLY + " \n*┊* *♾️ ALIVE_IMG:* ➠ " + config.ALIVE_IMG + "\n*┊* *♾️ ALIVE_MSG:* ➠ " + config.ALIVE_MSG + "  \n*┊* *♾️ SUDO:* ➠ " + config.SUDO + "\n*┊* *♾️ ANTI_LINK:* ➠ " + config.ANTI_LINK + "\n*┊* *♾️ ANTI_CALL:* ➠ " + config.ANTI_CALL + " \n*┊* *♾️ ANTI_BAD:* ➠ " + config.ANTI_BAD + " \n*┊* *♾️ PREFIX:* ➠ [" + config.PREFIX + "]\n*┊* *♾️ AUTO_RECORDING:* ➠ " + config.RECORDING + " \n*┊* *♾️ HEART_REACT:* ➠ " + config.HEART_REACT + " \n*┊* *♾️ FOOTER:* ➠ " + config.FOOTER + "\n*┊* *♾️ AUTO_SONG_SENDER:* ➠ " + config.AUTO_SONG_SENDER + " \n*┊* *♾️ CMD_READ:* ➠ " + config.READ_CMD + "\n*╰┈───────────────•*\n┏━━━━━━━━━━━━━━━━━━━━━━━┓\n┃      🔗  *CUSTOMIZE YOUR SETTINGS* ⤵️\n┗━━━━━━━━━━━━━━━━━━━━━━━┛\n\n┏━━━━━━━━━━━━━━━━━━━━━━━┓\n┃       🔧 *OPTIONS MENU* 🔧\n┃━━━━━━━━━━━━━━━━━━━━━━━┃\n\n┣━ *_WORK MODE_* ⤵️\n┃   ┣ 1.1 🔹 *Public Work*\n┃   ┣ 1.2 🔹 *Private Work*\n┃   ┣ 1.3 🔹 *Groups Only*\n┃   ┗ 1.4 🔹 *Inbox Only*\n\n┣━ *_AUTO VOICE_* ⤵️\n┃   ┣ 2.1 🔊 *Auto Voice On*\n┃   ┗ 2.2 🔕 *Auto Voice Off*\n\n┣━ *_AUTO STATUS SEEN_* ⤵️\n┃   ┣ 3.1 👁️‍🗨️ *Auto Read Status On*\n┃   ┗ 3.2 👁️❌ *Auto Read Status Off*\n\n┣━ *_AUTO BIO_* ⤵️\n┃   ┣ 4.1 ✍️ *Auto Bio On*\n┃   ┗ 4.2 ✍️❌ *Auto Bio Off*\n\n┣━ *_AUTO TYPING_* ⤵️\n┃   ┣ 5.1 📝 *Activate Auto Typing*\n┃   ┗ 5.2 📝❌ *Deactivate Auto Typing*\n\n┣━ *_AUTO COMMAND READ_* ⤵️\n┃   ┣ 6.1 🖊️ *Activate Auto Command Read*\n┃   ┗ 6.2 🖊️❌ *Deactivate Auto Command Read*\n\n┣━ *_ANTI CALL_* ⤵️\n┃   ┣ 7.1 🔊 *Anti Call On*\n┃   ┗ 7.2 🔕 *Anti Call Off*\n\n┣━ *_HEART REACT_* ⤵️\n┃   ┣ 8.1 ✍️ *Heart React On*\n┃   ┗ 8.2 ✍️❌ *Heart React Off*\n\n┣━ *_ANTI DELETE_* ⤵️\n┃   ┣ 9.1 📝 *Activate Anti Delete*\n┃   ┗ 9.2 📝❌ *Deactivate Anti Delete*\n\n┣━ *_AUTO STICKER_* ⤵️\n┃   ┣ 10.1 👁️‍🗨️ *Auto Sticker On*\n┃   ┗ 10.2 👁️❌ *Auto Sticker Off*\n\n┣━ *_AI CHAT* ⤵️\n┃   ┣ 11.1 📝 *Activate Ai Chat*\n┃   ┗ 11.2 📝❌ *Deactivate Ai Chat*\n\n┣━ *_ANTI LINK_* ⤵️\n┃   ┣ 12.1 🖊️ *Activate Anti Link*\n┃   ┗ 12.2 🖊️❌ *Deactivate Anti Link*\n\n┣━ *_ANTI BAD_* ⤵️\n┃   ┣ 13.1 👁️‍🗨️ *Anti Bad On*\n┃   ┗ 13.2 👁️❌ *Anti Bad Off*\n\n┣━ *_AUTO RECORDING_* ⤵️\n┃   ┣ 14.1 🔊 *Auto Recording On*\n┃   ┗ 14.2 🔕 *Auto Recording Off*\n\n┣━ *_AUTO SONG SENDER_* ⤵️\n┃   ┣ 15.1 👁️‍🗨️ *Auto Song Sender On*\n┃   ┗ 15.2 👁️❌ *Auto Song Sender Off*\n\n┣━ *_AUTO REPLY_* ⤵️\n┃   ┣ 16.1 👁️‍🗨️ *Auto Reply On*\n┃   ┗ 16.2 👁️❌ *Auto Reply Off*\n┗━━━━━━━━━━━━━━━━━━━━━━━┛\n\n> *©Powerd By Didula Rashmika*\n"
    }, {
      'quoted': qtoko
    });
    _0x5cef56.ev.on('messages.upsert', async _0xeee7e9 => {
      const _0x30b576 = _0xeee7e9.messages[0x0];
      if (!_0x30b576.message || !_0x30b576.message.extendedTextMessage) {
        return;
      }
      const _0x3bf388 = _0x30b576.message.extendedTextMessage.text.trim();
      if (_0x30b576.message.extendedTextMessage.contextInfo && _0x30b576.message.extendedTextMessage.contextInfo.stanzaId === _0x56b828.key.id) {
        switch (_0x3bf388) {
          case "1.1":
            _0x342500(".mode public");
            _0x342500(".restart");
            break;
          case "1.2":
            _0x342500(".mode private");
            _0x342500(".restart");
            break;
          case "1.3":
            _0x342500(".mode groups");
            _0x342500(".restart");
            break;
          case "1.4":
            _0x342500(".mode inbox");
            _0x342500(".restart");
            break;
          case "2.1":
            _0x342500("autovoice on");
            _0x342500(".restart");
            break;
          case '2.2':
            _0x342500(".autovoice off");
            _0x342500(".restart");
            break;
          case "3.1":
            _0x342500(".autostatus on");
            _0x342500(".restart");
            break;
          case "3.2":
            _0x342500(".autostatus off");
            _0x342500(".restart");
            break;
          case "4.1":
            _0x342500(".autobio on");
            _0x342500(".restart");
            break;
          case '4.2':
            _0x342500(".autobio off");
            _0x342500(".restart");
            break;
          case '5.1':
            _0x342500(".autotyping on");
            _0x342500(".restart");
            break;
          case "5.2":
            _0x342500(".autotyping off");
            _0x342500(".restart");
            break;
          case '6.1':
            _0x342500(".cmdread on");
            _0x342500(".restart");
            break;
          case "6.2":
            _0x342500(".cmdread off");
            _0x342500(".restart");
            break;
          case "7.1":
            _0x342500(".anticall on");
            _0x342500(".restart");
            break;
          case "7.2":
            _0x342500(".anticall off");
            _0x342500(".restart");
            break;
          case '8.1':
            _0x342500(".heartreact on");
            _0x342500(".restart");
            break;
          case "8.2":
            _0x342500(".heartreact off");
            _0x342500('.restart');
            break;
          case '9.1':
            _0x342500(".antidelete on");
            _0x342500('.restart');
            break;
          case "9.2":
            _0x342500(".antidelete off");
            _0x342500(".restart");
            break;
          case '10.1':
            _0x342500(".autosticker on");
            _0x342500(".restart");
            break;
          case "10.2":
            _0x342500(".autosticker off");
            _0x342500('.restart');
            break;
          case "11.1":
            _0x342500(".aichat on");
            _0x342500(".restart");
            break;
          case "11.2":
            _0x342500(".aichat off");
            _0x342500(".restart");
            break;
          case "12.1":
            _0x342500(".antilink on");
            _0x342500('.restart');
            break;
          case "12.2":
            _0x342500(".antilink off");
            _0x342500(".restart");
            break;
          case '13.1':
            _0x342500(".antibad on");
            _0x342500(".restart");
            break;
          case "13.2":
            _0x342500(".antibad off");
            _0x342500(".restart");
            break;
          case "14.1":
            _0x342500(".autorecording on");
            _0x342500(".restart");
            break;
          case '14.2':
            _0x342500(".autorecording off");
            _0x342500('.restart');
            break;
          case '15.1':
            _0x342500(".autosongsend on");
            _0x342500('.restart');
            break;
          case "15.2":
            _0x342500(".autosongsend off");
            _0x342500('.restart');
          case "16.1":
            _0x342500(".autoreply on");
            _0x342500(".restart");
            break;
          case "16.2":
            _0x342500(".autoreply off");
            _0x342500(".restart");
            break;
          default:
            _0x342500("Invalid option. Please select a valid option🔴");
        }
      }
    });
  } catch (_0x21f344) {
    console.error(_0x21f344);
    await _0x5cef56.sendMessage(_0x23793d, {
      'react': {
        'text': '❌',
        'key': _0x8c0557.key
      }
    });
    _0x342500("An error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'upgrade',
  'desc': "Performs complete system upgrade (update → reload → restart)",
  'category': "owner",
  'filename': __filename,
  'react': '⚡'
}, async (_0x1a3586, _0x3abcd9, _0x1ddbd7, {
  from: _0xaaa7e2,
  isOwner: _0x244fa8,
  reply: _0x125b81
}) => {
  try {
    if (!_0x244fa8) {
      return _0x125b81("Only bot owners can use this command.");
    }
    await _0x1ddbd7.react('⬇️');
    await _0x125b81("🔄 Starting system upgrade...\n\n1️⃣ Updating system files...");
    try {
      const _0x3e5c72 = await axios.get("https://raw.githubusercontent.com/didulamd/Database/main/db.js");
      if (!_0x3e5c72 || _0x3e5c72.status !== 0xc8) {
        throw new Error("Failed to download update file");
      }
      const _0x3f19e4 = path.join(__dirname, "../plugins/system.js");
      await fs.promises.writeFile(_0x3f19e4, _0x3e5c72.data, "utf8");
      await sleep(0x3e8);
      await _0x125b81("✅ System files updated successfully\n\n2️⃣ Reloading commands...");
      const _0x1432ef = path.join(__dirname, '../plugins');
      const _0x183ca0 = await fs.promises.readdir(_0x1432ef);
      for (const _0x540cc7 of _0x183ca0) {
        if (_0x540cc7.endsWith(".js")) {
          try {
            const _0x372ff0 = path.join(_0x1432ef, _0x540cc7);
            delete require.cache[require.resolve(_0x372ff0)];
            require(_0x372ff0);
            console.log("Reloaded " + _0x540cc7);
          } catch (_0x5d722b) {
            console.error("Failed to reload " + _0x540cc7 + ':', _0x5d722b);
          }
        }
      }
      await sleep(0x3e8);
      await _0x125b81("✅ Commands reloaded successfully\n\n3️⃣ Restarting bot...");
      await sleep(0x3e8);
      await _0x125b81("Didula MD V2 💚 restarting...\n\nPlease wait 1-2 minutes for the bot to come back online.\n\nFollow for updates: https://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f");
      await _0x1ddbd7.react('✅');
      await sleep(0x5dc);
      process.on("exit", () => {
        require('child_process').spawn('pm2', ["restart", "all"], {
          'stdio': 'inherit',
          'detached': true
        });
      });
      process.exit();
    } catch (_0x5b1725) {
      throw new Error("Update failed: " + _0x5b1725.message);
    }
  } catch (_0xaae577) {
    console.error("Upgrade error:", _0xaae577);
    await _0x1ddbd7.react('❌');
    await _0x125b81("Upgrade failed: " + _0xaae577.message);
  }
});
cmd({
  'pattern': "couple",
  'desc': "Get random couple photo",
  'category': 'other',
  'filename': __filename
}, async (_0x5b348f, _0x5c1d0e, _0x522300, {
  from: _0x2e0801,
  quoted: _0x3e244c,
  body: _0x395322,
  isCmd: _0x3b0887,
  command: _0x574043,
  args: _0xff19bb,
  q: _0x55028d,
  isGroup: _0x24af12,
  sender: _0xd86a0a,
  senderNumber: _0x4681f9,
  botNumber2: _0x243cb7,
  botNumber: _0x2d5ca2,
  pushname: _0x29a19a,
  isMe: _0x4ef9a3,
  isOwner: _0x165784,
  groupMetadata: _0x18f943,
  groupName: _0x54de3a,
  participants: _0x47f468,
  groupAdmins: _0x5173df,
  isBotAdmins: _0x41acc9,
  isAdmins: _0x2319b9,
  reply: _0x17fb85
}) => {
  try {
    let _0x40bdd6 = await fetchJson("https://api.fgmods.xyz/api/img/couple?apikey=nRHt2lt5");
    const _0xbf9528 = {
      'newsletterJid': '120363343196447945@newsletter',
      'newsletterName': "Didula-MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x3fc23b = {
      'mentionedJid': [_0x522300.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0xbf9528
    };
    const _0x120633 = {
      'image': {
        'url': '' + _0x40bdd6.result.boy
      },
      'caption': "*_Boy_*\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'contextInfo': _0x3fc23b
    };
    await _0x5b348f.sendMessage(_0x2e0801, _0x120633, {
      'quoted': _0x5c1d0e
    });
    const _0x2f7aa2 = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula-MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x4b9e63 = {
      'mentionedJid': [_0x522300.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x2f7aa2
    };
    const _0x50b89e = {
      'image': {
        'url': '' + _0x40bdd6.result.girl
      },
      'caption': "*_Girl_*\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'contextInfo': _0x4b9e63
    };
    await _0x5b348f.sendMessage(_0x2e0801, _0x50b89e, {
      'quoted': _0x5c1d0e
    });
  } catch (_0x2fa94f) {
    console.log(_0x2fa94f);
    _0x17fb85('' + _0x2fa94f);
  }
});
const toM = _0x45ad79 => '@' + _0x45ad79.split('@')[0x0];
cmd({
  'pattern': "ship",
  'alias': ['cup', "love"],
  'desc': "Randomly pairs the command user with another group member.",
  'react': '❤️',
  'category': 'other',
  'filename': __filename
}, async (_0xa9d8f8, _0x28cb51, _0x3a282e, {
  from: _0x50e88a,
  isGroup: _0x29a5e6,
  groupMetadata: _0xa7b44b,
  reply: _0x501cfe
}) => {
  try {
    if (!_0x29a5e6) {
      return _0x501cfe("This command can only be used in groups.");
    }
    const _0x48b95b = _0xa7b44b.participants.map(_0x51cdd1 => _0x51cdd1.id);
    if (_0x48b95b.length < 0x2) {
      return _0x501cfe("Not enough members to pair.");
    }
    const _0x2e9e6a = _0x3a282e.sender;
    let _0x560171;
    do {
      _0x560171 = _0x48b95b[Math.floor(Math.random() * _0x48b95b.length)];
    } while (_0x560171 === _0x2e9e6a);
    const _0x50fe36 = '@' + _0x2e9e6a.split('@')[0x0] + " ❤️ " + ('@' + _0x560171.split('@')[0x0]) + "\nCongratulations 💖🍻";
    await _0xa9d8f8.sendMessage(_0x50e88a, {
      'text': _0x50fe36,
      'contextInfo': {
        'mentionedJid': [_0x2e9e6a, _0x560171],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363343196447945@newsletterr",
          'newsletterName': "Didula MD",
          'serverMessageId': 0x8f
        }
      }
    });
  } catch (_0x115516) {
    console.error("Error in ship command:", _0x115516);
    _0x501cfe("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': 'joke',
  'desc': "😂 Get a random joke",
  'react': '🤣',
  'category': "other",
  'filename': __filename
}, async (_0x9f04d3, _0xa27a64, _0x3556f3, {
  from: _0x45b00a,
  q: _0x2ba392,
  reply: _0x2c69ee
}) => {
  try {
    const _0x294ff9 = await axios.get("https://official-joke-api.appspot.com/random_joke");
    const _0x2c1ca6 = _0x294ff9.data;
    const _0x2cc849 = "\n😂 *Here's a random joke for you!* 😂\n\n*" + _0x2c1ca6.setup + "*\n\n" + _0x2c1ca6.punchline + " 😄\n\n> *©Didula MD*";
    return _0x2c69ee(_0x2cc849);
  } catch (_0x49f121) {
    console.log(_0x49f121);
    return _0x2c69ee("⚠️ En Error Appears.");
  }
});
cmd({
  'pattern': 'fact',
  'desc': "🧠 Get a random fun fact",
  'react': '🧠',
  'category': "other",
  'filename': __filename
}, async (_0x2acd4f, _0x13d29f, _0x3de00f, {
  from: _0xa3b051,
  q: _0x560179,
  reply: _0x536840
}) => {
  try {
    const _0x231d26 = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
    const _0x5be371 = _0x231d26.data.text;
    const _0x20ab7a = "\n🧠 *Random Fun Fact* 🧠\n\n" + _0x5be371 + "\n\nIsn't that interesting? 😄\n";
    return _0x536840(_0x20ab7a);
  } catch (_0x2875fc) {
    console.log(_0x2875fc);
    return _0x536840("⚠️ An error occurred while fetching a fun fact. Please try again later.");
  }
});
cmd({
  'pattern': 'fancy',
  'alias': ["font", "style"],
  'react': '✍️',
  'desc': "Convert text into various fonts.",
  'category': "tools",
  'filename': __filename
}, async (_0x131446, _0x200636, _0x141545, {
  from: _0x2a6616,
  quoted: _0x13a5a,
  body: _0x6da017,
  args: _0x33f31f,
  q: _0x1b29d9,
  reply: _0x40976f
}) => {
  try {
    if (!_0x1b29d9) {
      return _0x40976f("Please provide text to convert into fonts.");
    }
    let _0x1e5f9c = await axios.get("https://www.dark-yasiya-api.site/other/font?text=" + encodeURIComponent(_0x1b29d9));
    let _0x27e74f = _0x1e5f9c.data;
    if (!_0x27e74f.status) {
      return _0x40976f("Error fetching fonts. Please try again later.");
    }
    let _0x399035 = _0x27e74f.result.map(_0x3ca201 => '*' + _0x3ca201.name + ":*\n" + _0x3ca201.result).join("\n\n");
    let _0x4b41a6 = "*Didula-MD FANCY FONTS*:\n\n" + _0x399035 + "\n\n> *BY Didula-MD*";
    await _0x131446.sendMessage(_0x2a6616, {
      'text': _0x4b41a6,
      'contextInfo': {
        'mentionedJid': [_0x141545.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363343196447945@newsletterr",
          'newsletterName': "Didula-MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': qtoko
    });
  } catch (_0x5090a7) {
    console.error(_0x5090a7);
    _0x40976f("An error occurred while fetching fonts.");
  }
});
cmd({
  'pattern': "pickupline",
  'alias': ["pickup"],
  'desc': "Get a random pickup line from the API.",
  'react': '💬',
  'category': "other",
  'filename': __filename
}, async (_0x2ac9b8, _0x2bfb6d, _0x202bb4, {
  from: _0x4b7ddd,
  reply: _0x3b1b82
}) => {
  try {
    const _0x255211 = await fetch("https://api.popcat.xyz/pickuplines");
    if (!_0x255211.ok) {
      throw new Error("API request failed with status " + _0x255211.status);
    }
    const _0x39fbd4 = await _0x255211.json();
    console.log("JSON response:", _0x39fbd4);
    const _0x252cd6 = "*Here's a pickup line for you:*\n\n\"" + _0x39fbd4.pickupline + "\"\n\n> *© Powered By Didula MD*";
    await _0x2ac9b8.sendMessage(_0x4b7ddd, {
      'text': _0x252cd6
    }, {
      'quoted': qtoko
    });
  } catch (_0x1fc197) {
    console.error("Error in pickupline command:", _0x1fc197);
    _0x3b1b82("Sorry, something went wrong while fetching the pickup line. Please try again later.");
  }
});
cmd({
  'pattern': "character",
  'alias': ["char"],
  'desc': "Check the character of a mentioned user.",
  'react': '🔥',
  'category': 'other',
  'filename': __filename
}, async (_0x291bcd, _0x37315e, _0x4a0897, {
  from: _0x5638bf,
  isGroup: _0x55c343,
  text: _0x2ca9f8,
  reply: _0x29da55
}) => {
  try {
    if (!_0x55c343) {
      return _0x29da55("This command can only be used in groups.");
    }
    const _0xb0050b = _0x4a0897.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"]?.[0x0];
    if (!_0xb0050b) {
      return _0x29da55("Please mention a user whose character you want to check.");
    }
    const _0x3f15c0 = ["Sigma", "Generous", "Grumpy", "Overconfident", "Obedient", 'Good', 'Simp', 'Kind', "Patient", "Pervert", "Cool", 'Helpful', 'Brilliant', "Sexy", 'Hot', "Gorgeous", "Cute"];
    const _0x1f42ce = _0x3f15c0[Math.floor(Math.random() * _0x3f15c0.length)];
    const _0x3c8164 = "Character of @" + _0xb0050b.split('@')[0x0] + " is *" + _0x1f42ce + "* 🔥⚡";
    await _0x291bcd.sendMessage(_0x5638bf, {
      'text': _0x3c8164,
      'mentions': [_0xb0050b]
    }, {
      'quoted': qtoko
    });
  } catch (_0x5eb256) {
    console.error("Error in character command:", _0x5eb256);
    _0x29da55("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': 'prefix',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3493c3, _0x470961, _0x53cfd5, {
  from: _0x26f0f8,
  l: _0x41352a,
  quoted: _0x4a697b,
  body: _0x363f64,
  isCmd: _0x19b3e7,
  command: _0x2e8b50,
  args: _0x1872ca,
  q: _0x1de40f,
  isGroup: _0x2dbda2,
  sender: _0x1da9b4,
  senderNumber: _0x522903,
  botNumber2: _0x3f5ee7,
  botNumber: _0x3c1a8e,
  pushname: _0x41ffb8,
  isMe: _0x287168,
  isOwner: _0x58d21f,
  groupMetadata: _0x42912f,
  groupName: _0x2a1be0,
  participants: _0x1cf4f5,
  groupAdmins: _0x3416f1,
  isBotAdmins: _0x57e2b3,
  isAdmins: _0x318251,
  reply: _0x470a78
}) => {
  try {
    let _0x48bcc9 = await get("PREFIX");
    if (_0x48bcc9 === _0x1de40f) {
      return await _0x470a78("Allready Done");
    }
    await input("PREFIX", _0x1de40f);
    await _0x470a78("*PREFIX updated: " + _0x1de40f + '*');
  } catch (_0x1f947d) {
    _0x470a78("*Error !!*");
    _0x41352a(_0x1f947d);
  }
});
cmd({
  'pattern': "textsend",
  'desc': "text send to jid",
  'category': 'owner',
  'filename': __filename
}, async (_0x177949, _0x59db41, _0x28dcb0, {
  from: _0x349236,
  quoted: _0x20d93d,
  body: _0x39d265,
  isCmd: _0xc8743e,
  command: _0x4463af,
  args: _0x22591c,
  q: _0x5e55f5,
  isGroup: _0x72005,
  sender: _0x3bce8e,
  senderNumber: _0x56b6d9,
  botNumber2: _0x2cbd0c,
  botNumber: _0x1a2123,
  pushname: _0x593a00,
  isMe: _0x2ad4a7,
  isOwner: _0x53e9b1,
  groupMetadata: _0x5b2ae8,
  groupName: _0x48b267,
  participants: _0x156744,
  groupAdmins: _0x22662f,
  isBotAdmins: _0x56fb24,
  isAdmins: _0x3f6acb,
  reply: _0x51472d
}) => {
  try {
    if (!_0x53e9b1) {
      return _0x51472d("*_This is an owner cmd._*");
    }
    if (!_0x28dcb0.quoted) {
      return _0x51472d("*_Please reply a text msg._*");
    }
    if (!_0x5e55f5) {
      return _0x51472d("*_Please give me a jid to send this text._*");
    }
    await _0x177949.sendMessage(_0x5e55f5, {
      'text': _0x28dcb0.quoted.msg
    });
    _0x51472d("*_Text send successful ✅_*");
  } catch (_0x240a38) {
    console.log(_0x240a38);
    _0x51472d('' + _0x240a38);
  }
});
cmd({
  'pattern': "fb2",
  'desc': "To download facebook videos.",
  'category': 'download',
  'filename': __filename
}, async (_0x354dd2, _0x20c7c5, _0x1ae782, {
  from: _0x5e16e4,
  quoted: _0x1df218,
  body: _0x16c37f,
  isCmd: _0x46986b,
  command: _0x1e7dd9,
  args: _0x289261,
  q: _0x3c480c,
  isGroup: _0x5b1678,
  sender: _0x4a7509,
  senderNumber: _0x394bc3,
  botNumber2: _0x2c5bf4,
  botNumber: _0x2c9f9e,
  pushname: _0x590547,
  isMe: _0x2ff010,
  isOwner: _0x572e12,
  groupMetadata: _0xd758a9,
  groupName: _0xa6bbf9,
  participants: _0x2d5e27,
  groupAdmins: _0x1f47ba,
  isBotAdmins: _0x26b59e,
  isAdmins: _0x432159,
  reply: _0x3e4a47
}) => {
  try {
    if (!_0x289261[0x0]) {
      return _0x3e4a47("*`ρℓєαѕє gινє α ωαιℓ∂ ƒα¢євσσк ℓιηк`*");
    }
    await _0x1ae782.react('🕒');
    let _0x551c5c;
    try {
      _0x551c5c = await igdl(_0x289261[0x0]);
    } catch (_0x4ba712) {
      return _0x3e4a47("*`єяяσя σвтαιηιηg ∂αтα.`*");
    }
    let _0x448373 = _0x551c5c.data;
    if (!_0x448373 || _0x448373.length === 0x0) {
      return _0x3e4a47("*`ησ яєѕαℓт ƒσυη∂.`*");
    }
    let _0x1e3156;
    try {
      _0x1e3156 = _0x448373.find(_0x434832 => _0x434832.resolution === "720p (HD)") || _0x448373.find(_0x2b98d7 => _0x2b98d7.resolution === "360p (SD)");
    } catch (_0x1ce0d2) {
      return _0x3e4a47("*`єяяσя ∂αтα ℓσѕѕ.`*");
    }
    if (!_0x1e3156) {
      return _0x3e4a47("*`ησ ∂αтα ƒσυη∂.`*");
    }
    await _0x1ae782.react('✅');
    let _0x110880 = _0x1e3156.url;
    try {
      await _0x354dd2.sendMessage(_0x1ae782.chat, {
        'video': {
          'url': _0x110880
        },
        'caption': "© 2024 King Hansa FB Downloader | Download with ease, cherish forever.",
        'fileName': "fb.mp4",
        'mimetype': "video/mp4"
      }, {
        'quoted': qtoko
      });
    } catch (_0x47fc2c) {
      return _0x3e4a47("*`єяяσя ∂σωηℓσα∂ νι∂єσ.`*");
      await _0x1ae782.react('❌');
    }
  } catch (_0x4116f2) {
    console.log(_0x4116f2);
    _0x3e4a47('' + _0x4116f2);
  }
});
cmd({
  'pattern': "updatecmd",
  'react': '🧞',
  'desc': "Update commands.",
  'category': "owner",
  'filename': __filename
}, async (_0x1ed968, _0x3aa913, _0x538335, {
  from: _0x4225e0,
  quoted: _0x52f34e,
  body: _0xa7953d,
  isCmd: _0x3d68d8,
  command: _0x16f0dd,
  args: _0x4c41a1,
  q: _0x3bff2a,
  isGroup: _0x5dda0a,
  sender: _0x5d4a4c,
  senderNumber: _0x52bdbd,
  botNumber2: _0x11d298,
  botNumber: _0x69ae8d,
  pushname: _0x126496,
  isMe: _0x5dc541,
  isOwner: _0x40a8ce,
  groupMetadata: _0x4e2199,
  groupName: _0x18b04d,
  participants: _0x4e3776,
  groupAdmins: _0x5774ed,
  isBotAdmins: _0x1811fc,
  isAdmins: _0x43e190,
  reply: _0x26e0b1
}) => {
  try {
    if (!_0x40a8ce) {
      return _0x26e0b1("Only bot owners can use this command.");
    }
    const _0x2aeb59 = path.join(__dirname, "../plugins");
    const _0x840eea = fs.readdirSync(_0x2aeb59);
    for (const _0x3dd5d3 of _0x840eea) {
      if (_0x3dd5d3.endsWith(".js")) {
        const _0x288b50 = path.join(_0x2aeb59, _0x3dd5d3);
        require(_0x288b50);
        console.log("Loaded " + _0x3dd5d3);
      }
    }
    _0x26e0b1("Commands updated successfully.💗🌝");
  } catch (_0x4cc222) {
    console.log(_0x4cc222);
    _0x26e0b1("Error updating commands: " + _0x4cc222.message);
  }
});
cmd({
  'pattern': 'joinsup',
  'react': '🛸',
  'alias': ["panel", "support", 'request'],
  'desc': "join support group ",
  'category': "main",
  'use': ".joinsup",
  'filename': __filename
}, async (_0x2e97fc, _0x55bf40, _0x160941, {
  from: _0x523e46,
  l: _0x3889cc,
  quoted: _0x3562d1,
  body: _0x38b785,
  isCmd: _0x49149c,
  umarmd: _0x308dce,
  args: _0x4a4224,
  q: _0x1e79d6,
  isGroup: _0x2ac478,
  sender: _0x7409ce,
  senderNumber: _0x3cf9c4,
  botNumber2: _0x4a46cc,
  botNumber: _0x1452f0,
  pushname: _0x5178c2,
  isMe: _0x59581a,
  isOwner: _0x799ec3,
  groupMetadata: _0x17768e,
  groupName: _0x4ec3c3,
  participants: _0x61e4e7,
  groupAdmins: _0x4c68bf,
  isBotAdmins: _0x12eca1,
  isAdmins: _0x4434f7,
  reply: _0x2da95f
}) => {
  try {
    await _0x2e97fc.groupAcceptInvite("H3SknBQ95on6r77Ho9k5VK");
    _0x2da95f("Joined successfully!");
  } catch (_0x4f194d) {
    console.log(_0x4f194d);
    _0x2da95f("Error: " + _0x4f194d);
  }
});
cmd({
  'pattern': "gen",
  'alias': ['genboy', "genimg"],
  'desc': "Generate AI profile picture",
  'category': "convert",
  'react': "🖼️",
  'filename': __filename
}, async (_0x3ae6cb, _0x3784e2, _0x5bc262, {
  from: _0x24a4d3,
  args: _0x55f86f,
  reply: _0x269809
}) => {
  try {
    let _0x9032c1 = _0x55f86f.join(" ");
    if (!_0x9032c1) {
      return _0x269809("⚠️ Please provide a prompt! (Example: `.genpfp Red flowers`)");
    }
    let _0x447564 = "https://manul-ofc-tech-api-1e5585f5ebef.herokuapp.com/fluxai?prompt=" + encodeURIComponent(_0x9032c1);
    let _0x3ec1e9 = await axios.get(_0x447564, {
      'responseType': "arraybuffer"
    });
    await _0x3ae6cb.sendMessage(_0x24a4d3, {
      'image': _0x3ec1e9.data,
      'caption': "🎨 *AI Generated Image for:* _" + _0x9032c1 + '_'
    }, {
      'quoted': qtoko
    });
  } catch (_0x39506d) {
    console.error("GenPFP Command Error:", _0x39506d);
    _0x269809("❌ Error: " + _0x39506d.message);
  }
});
cmd({
  'pattern': "alive2",
  'react': '💝',
  'desc': "Check bot status",
  'category': "main",
  'filename': __filename
}, async (_0x3ad7dc, _0x5b73ec, _0x20c1cc, {
  from: _0x490377,
  quoted: _0xdf2adc,
  body: _0x25fa5a,
  isCmd: _0x359287,
  command: _0xad017,
  args: _0x26bf0c,
  q: _0x314488,
  isGroup: _0x5267e0,
  sender: _0x1d9d64,
  senderNumber: _0x392417,
  botNumber2: _0x553130,
  botNumber: _0x4efe7a,
  pushname: _0x5305cc,
  isMe: _0x741d1b,
  isOwner: _0x52ec0e,
  groupMetadata: _0x448e9b,
  groupName: _0x379ee6,
  participants: _0x48cf61,
  groupAdmins: _0x2f5eee,
  isBotAdmins: _0x39f343,
  isAdmins: _0x3c0785,
  reply: _0x2758a8
}) => {
  try {
    async function _0x1480df(_0x35fe73) {
      const {
        imageMessage: _0x38bbeb
      } = await generateWAMessageContent({
        'image': {
          'url': "https://files.catbox.moe/za6ytm.jpg"
        }
      }, {
        'upload': _0x3ad7dc.waUploadToServer
      });
      return _0x38bbeb;
    }
    let _0x3089b2 = [{
      'body': proto.Message.InteractiveMessage.Body.fromObject({
        'text': "✨ Bot is Online!"
      }),
      'footer': proto.Message.InteractiveMessage.Footer.fromObject({
        'text': config.FOOTER
      }),
      'header': proto.Message.InteractiveMessage.Header.fromObject({
        'title': "Hello " + _0x5305cc,
        'hasMediaAttachment': true,
        'imageMessage': await _0x1480df()
      }),
      'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        'buttons': [{
          'name': "quick_reply",
          'buttonParamsJson': "{\"display_text\":\"Menu\",\"id\":\".menu\"}"
        }]
      })
    }];
    const _0x3b2d13 = generateWAMessageFromContent(_0x20c1cc.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "🌟 Bot Status Check"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': config.FOOTER
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x3089b2]
            })
          })
        }
      }
    }, {});
    await _0x3ad7dc.relayMessage(_0x20c1cc.chat, _0x3b2d13.message, {
      'messageId': _0x3b2d13.key.id
    });
  } catch (_0x3ce58d) {
    console.log(_0x3ce58d);
    _0x2758a8('' + _0x3ce58d);
  }
});
cmd({
  'pattern': "pin",
  'react': '😌',
  'desc': "downlod images",
  'category': "downlod",
  'filename': __filename
}, async (_0xfb9d3d, _0xd31249, _0xc60fbd, {
  from: _0x371908,
  quoted: _0x1ecc12,
  body: _0x1ba556,
  isCmd: _0x49b5fd,
  command: _0x41405c,
  args: _0x15c93d,
  q: _0x23fe64,
  isGroup: _0x2a0660,
  sender: _0x274a2f,
  senderNumber: _0x2ac62f,
  botNumber2: _0x341fb6,
  botNumber: _0x13105e,
  pushname: _0x324ee1,
  isMe: _0x403004,
  isOwner: _0x206309,
  groupMetadata: _0x5f4c2f,
  groupName: _0x47ea3d,
  participants: _0x1cf0b8,
  groupAdmins: _0x22e36c,
  isBotAdmins: _0x5e3516,
  isAdmins: _0x47567f,
  reply: _0x28cc9c
}) => {
  try {
    if (!_0x23fe64) {
      return _0x28cc9c("Please give me song name ?");
    }
    async function _0x4c936e(_0x4a8e4e) {
      const {
        imageMessage: _0x2ab9aa
      } = await generateWAMessageContent({
        'image': {
          'url': _0x4a8e4e
        }
      }, {
        'upload': _0xfb9d3d.waUploadToServer
      });
      return _0x2ab9aa;
    }
    function _0x111099(_0x665286) {
      for (let _0xec1472 = _0x665286.length - 0x1; _0xec1472 > 0x0; _0xec1472--) {
        const _0x2a8c86 = Math.floor(Math.random() * (_0xec1472 + 0x1));
        [_0x665286[_0xec1472], _0x665286[_0x2a8c86]] = [_0x665286[_0x2a8c86], _0x665286[_0xec1472]];
      }
    }
    let _0x19fbc3 = [];
    let {
      data: _0x377038
    } = await axios.get("https://allstars-apis.vercel.app/pinterest?search=" + _0x23fe64);
    let _0x2010ec = _0x377038.data.map(_0x5954d1 => _0x5954d1);
    _0x111099(_0x2010ec);
    let _0xfe6b00 = _0x2010ec.splice(0x0, 0xa);
    let _0x2cd51e = 0x1;
    for (let _0x25283b of _0xfe6b00) {
      _0x19fbc3.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': "Images - " + _0x2cd51e++
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': config.FOOTER
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Hello " + _0x324ee1,
          'hasMediaAttachment': true,
          'imageMessage': await _0x4c936e(_0x25283b)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': [{
            'name': "single_select",
            'buttonParamsJson': "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
          }, {
            'name': "quick_reply",
            'buttonParamsJson': "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_call",
            'buttonParamsJson': "{\"display_text\":\"call\",\"id\":\"message\"}"
          }, {
            'name': "cta_copy",
            'buttonParamsJson': "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
          }, {
            'name': "cta_reminder",
            'buttonParamsJson': "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
          }, {
            'name': 'cta_cancel_reminder',
            'buttonParamsJson': "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
          }, {
            'name': "address_message",
            'buttonParamsJson': "{\"display_text\":\"address_message\",\"id\":\"message\"}"
          }, {
            'name': "send_location",
            'buttonParamsJson': ''
          }]
        })
      });
    }
    const _0x4cd260 = generateWAMessageFromContent(_0xc60fbd.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "Hellow how are you baby !"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': config.FOOTER
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x19fbc3]
            })
          })
        }
      }
    }, {});
    await _0xfb9d3d.relayMessage(_0xc60fbd.chat, _0x4cd260.message, {
      'messageId': _0x4cd260.key.id
    });
  } catch (_0x5e9c0a) {
    console.log(_0x5e9c0a);
    _0x28cc9c('' + _0x5e9c0a);
  }
});
cmd({
  'on': 'body'
}, async (_0x4d0744, _0x4e3afc, _0x31aa49, {
  from: _0x7105f7,
  body: _0x5be845,
  isGroup: _0xcaf003,
  isAdmins: _0x12945e,
  isBotAdmins: _0x216d26,
  reply: _0x5743b0,
  sender: _0x16b79e
}) => {
  try {
    const _0x51477e = ["wtf", "mia", "පොන්නයා", "හැමිනෙනවා", "කැරියා", "හුත්තා", "හුත්තා", "පකයා", "fuck", "sex", "huththa", "pakaya", "ponnaya", "hutto", "kariya", "pakaya", "hukapan", 'hukanna', "hutto", "xvdl", "hutto", "Hukapamm", 'lol'];
    if (!_0xcaf003 || _0x12945e || !_0x216d26) {
      return;
    }
    const _0x41dd7e = _0x5be845.toLowerCase();
    const _0x22641e = _0x51477e.some(_0x1ce446 => _0x41dd7e.includes(_0x1ce446));
    if (_0x22641e & config.ANTI_BAD === "true") {
      await _0x4d0744.sendMessage(_0x7105f7, {
        'delete': _0x4e3afc.key
      }, {
        'quoted': qtoko
      });
      await _0x4d0744.sendMessage(_0x7105f7, {
        'text': "⚠️BAD WORDS NOT ALLOWED⚠️ "
      }, {
        'quoted': qtoko
      });
      await _0x4d0744.groupParticipantsUpdate(_0x7105f7, [_0x16b79e], "remove");
    }
  } catch (_0x34f9e1) {
    console.error(_0x34f9e1);
    _0x5743b0("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': "body"
}, async (_0x220987, _0x1e3626, _0x158d18, {
  from: _0x326820,
  body: _0x2c8673,
  sender: _0x2cb231,
  isGroup: _0x9cde5a,
  isAdmins: _0x15c5aa,
  isBotAdmins: _0x3a63ac,
  reply: _0x179978
}) => {
  try {
    if (!_0x9cde5a || _0x15c5aa || !_0x3a63ac) {
      return;
    }
    const _0x8ada1a = linkPatterns.some(_0x4ef319 => _0x4ef319.test(_0x2c8673));
    if (_0x8ada1a && config.ANTI_LINK === "true") {
      await _0x220987.sendMessage(_0x326820, {
        'delete': _0x1e3626.key
      }, {
        'quoted': qtoko
      });
      await _0x220987.sendMessage(_0x326820, {
        'text': "⚠️ Links are not allowed in this group.\n@" + _0x2cb231.split('@')[0x0] + " has been removed. 🚫",
        'mentions': [_0x2cb231]
      }, {
        'quoted': qtoko
      });
      await _0x220987.groupParticipantsUpdate(_0x326820, [_0x2cb231], "remove");
    }
  } catch (_0x3dc7d1) {
    console.error(_0x3dc7d1);
    _0x179978("An error occurred while processing the message.");
  }
});
cmd({
  'pattern': "mega",
  'category': "download",
  'react': '⬇️',
  'desc': "Download Mega file and send it.",
  'filename': __filename
}, async (_0x3dcf91, _0x39f8db, _0x4ffd1b, {
  from: _0x528470,
  quoted: _0x1bea75,
  body: _0x77acbb,
  isCmd: _0x188cd4,
  command: _0x9c984e,
  args: _0x4bd150,
  q: _0x4350af,
  isGroup: _0x5f599b,
  sender: _0xc25ee,
  senderNumber: _0x552b0e,
  botNumber2: _0x33d1d2,
  botNumber: _0x4bd3ed,
  pushname: _0x47c659,
  isMe: _0x26e4cd,
  isOwner: _0x1e90fa,
  groupMetadata: _0x4bef8d,
  groupName: _0x14552c,
  participants: _0x15c8e2,
  groupAdmins: _0x402c05,
  isBotAdmins: _0x2db233,
  isAdmins: _0x1f6d58,
  reply: _0x27cc0a
}) => {
  try {
    if (!_0x4350af || !isUrl(_0x4350af) || !_0x4350af.includes('mega.nz')) {
      return _0x27cc0a("Please provide a valid Mega.nz file URL.");
    }
    const [_0x45465b, _0x59827d] = _0x4350af.split('#');
    if (!_0x59827d) {
      return _0x27cc0a("Error: Decryption key is missing in the provided URL.");
    }
    const _0x190578 = File.fromURL(_0x45465b + '#' + _0x59827d);
    _0x190578.on("progress", (_0x32df3d, _0x158605) => {
      const _0x18ec1a = (_0x32df3d / _0x158605 * 0x64).toFixed(0x2);
      _0x27cc0a("Downloading: " + _0x18ec1a + "% (" + (_0x32df3d / 0x400 / 0x400).toFixed(0x2) + " MB of " + (_0x158605 / 0x400 / 0x400).toFixed(0x2) + " MB)");
    });
    const _0x116810 = await _0x190578.downloadBuffer();
    await _0x3dcf91.sendMessage(_0x528470, {
      'document': _0x116810,
      'mimetype': "application/octet-stream",
      'fileName': "mega_downloaded_file"
    }, {
      'quoted': _0x39f8db
    });
    _0x27cc0a("File sent successfully!");
  } catch (_0x1ece2f) {
    console.error(_0x1ece2f);
    _0x27cc0a("Error: " + _0x1ece2f.message);
  }
});
cmd({
  'pattern': "movie",
  'alias': ["film", 'cinema'],
  'react': '🎬',
  'desc': "Search and Download Movies with Sinhala Subtitles",
  'category': "download",
  'use': ".movie < Movie Name >",
  'filename': __filename
}, async (_0x459f64, _0x5c0132, _0x303f87, {
  from: _0x443f28,
  prefix: _0x41bb85,
  quoted: _0x15a7ef,
  q: _0x3d2379,
  reply: _0x57bc6b
}) => {
  try {
    if (!_0x3d2379) {
      return await _0x57bc6b("⚠️ Please provide a movie name!");
    }
    let _0x18b149 = "https://omindu-api.up.railway.app/api/sinhalasub/search?query=" + encodeURIComponent(_0x3d2379);
    let _0x504fa6 = await fetch(_0x18b149);
    let _0x439d86 = await _0x504fa6.json();
    if (!_0x439d86.results.movies || _0x439d86.results.movies.length < 0x1) {
      return _0x57bc6b("❌ No movies found!");
    }
    let _0x8c2584 = _0x439d86.results.movies[0x0];
    let _0x4282b6 = "https://omindu-api.up.railway.app/api/sinhalasub/download?url=" + encodeURIComponent(_0x8c2584.link);
    let _0x7dac05 = await fetch(_0x4282b6);
    let _0xdaf5bc = await _0x7dac05.json();
    let _0x2450ff = _0xdaf5bc.info;
    let _0x4ecb18 = _0xdaf5bc.dl_links;
    let _0x3f9aa7 = "╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷\n┃▸╭─────────────────\n┃▸┃ 🎬 *MOVIE DOWNLOADER*\n┃▸└─────────────────···\n╰──────────────────────┈⊷\n╭━━❐━⪼\n┇📌 *Title:* " + _0x2450ff.title + "\n┇📅 *Release Date:* " + _0x2450ff.release_date + "\n┇⏱️ *Runtime:* " + _0x2450ff.runtime + "\n┇⭐ *TMDB Rating:* " + _0x2450ff.tmdb_Rating + "\n┇🎭 *Genres:* " + _0x2450ff.genres.join(", ") + "\n┇🎬 *Director:* " + _0x2450ff.director.name + "\n╰━━❑━⪼\n\n📥 *Download Links:*\n\n*Server 1:*\n" + _0x4ecb18.server_01.map(_0x441e0e => "▢ " + _0x441e0e.quality + " (" + _0x441e0e.size + ")\n" + _0x441e0e.link).join("\n\n") + "\n\n*Telegram:*\n" + _0x4ecb18.telagram.map(_0x28a001 => "▢ " + _0x28a001.quality + " (" + _0x28a001.size + ")\n" + _0x28a001.link).join("\n\n") + "\n\n*Server 2:*\n" + _0x4ecb18.server_02.map(_0x3c8a83 => "▢ " + _0x3c8a83.quality + " (" + _0x3c8a83.size + ")\n" + _0x3c8a83.link).join("\n\n") + "\n\n*Server 3:*\n" + _0x4ecb18.server_03.map(_0x180710 => "▢ " + _0x180710.quality + " (" + _0x180710.size + ")\n" + _0x180710.link).join("\n\n") + "\n\n*Type . dl <download link> for download movie 💗😚*\n\n*💫 Quality Movie Downloader By Didula MD V2*";
    await _0x459f64.sendMessage(_0x443f28, {
      'image': {
        'url': _0x2450ff.poster
      },
      'caption': _0x3f9aa7
    }, {
      'quoted': qtoko
    });
  } catch (_0x254de7) {
    console.log(_0x254de7);
    _0x57bc6b("❌ An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "itnnews",
  'desc': "Get the latest ITN news headlines or details of a given link.",
  'category': "news",
  'react': '📰',
  'filename': __filename
}, async (_0xb823ad, _0x22388d, _0x134ccf, {
  from: _0x2e2eb0,
  reply: _0x3beae7,
  q: _0x493dc1
}) => {
  try {
    const _0x47f2b5 = await axios.get("https://www.itnnews.lk/feed/");
    const _0x37c8d5 = _0x47f2b5.data;
    const _0x44189a = new xml2js.Parser();
    const _0x28bca9 = await _0x44189a.parseStringPromise(_0x37c8d5);
    const _0x37b587 = _0x28bca9.rss.channel[0x0].item.map(_0x142936 => ({
      'title': _0x142936.title[0x0],
      'link': _0x142936.link[0x0],
      'description': _0x142936.description[0x0],
      'pubDate': _0x142936.pubDate[0x0]
    }));
    if (_0x493dc1 && _0x493dc1.startsWith("https://www.itnnews.lk/")) {
      const _0x298711 = _0x37b587.find(_0x1e6fa5 => _0x1e6fa5.link === _0x493dc1.trim());
      if (!_0x298711) {
        return _0x3beae7("❌ Sorry, this news article was not found in the latest updates!");
      }
      let _0x52b59e = "*Didula MD V2 - 📰 ITN News Details:*\n\n";
      _0x52b59e += "📌 *" + _0x298711.title + "*\n";
      _0x52b59e += "📅 _" + _0x298711.pubDate + "_\n";
      _0x52b59e += "📖 " + _0x298711.description + "\n";
      _0x52b59e += "🔗 " + _0x298711.link + "\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ";
      return _0x3beae7(_0x52b59e);
    }
    let _0x3c6ba2 = "*📰 ITN Latest News:*\n\n";
    _0x37b587.slice(0x0, 0x5).forEach((_0x46a8d0, _0x459d71) => {
      _0x3c6ba2 += "📌 *" + (_0x459d71 + 0x1) + ".* *" + _0x46a8d0.title + "*\n";
      _0x3c6ba2 += "📅 _" + _0x46a8d0.pubDate + "_\n";
      _0x3c6ba2 += "🔗 " + _0x46a8d0.link + "\n\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ";
    });
    _0x3beae7(_0x3c6ba2);
  } catch (_0x53c546) {
    console.error("Error fetching ITN News:", _0x53c546);
    _0x3beae7("❌ Could not fetch ITN news. Please try again later.");
  }
});
cmd({
  'pattern': "pornhub",
  'alias': ['ph'],
  'react': '🎥',
  'desc': "download xVideo",
  'category': "download",
  'filename': __filename
}, async (_0x3c8d16, _0x43fef1, _0x45b993, {
  from: _0x340d6f,
  quoted: _0x5e502d,
  body: _0x8131c9,
  isCmd: _0x1f7390,
  command: _0x5a0d1d,
  args: _0x523dc1,
  q: _0xe13c7f,
  isGroup: _0x460b3e,
  sender: _0x282092,
  senderNumber: _0x387222,
  botNumber2: _0x209e73,
  botNumber: _0x1e783c,
  pushname: _0x537ed2,
  isMe: _0x51a768,
  isOwner: _0x34ee4f,
  groupMetadata: _0x4b8ed2,
  groupName: _0x5dd753,
  participants: _0x4178ce,
  groupAdmins: _0xabfc24,
  isBotAdmins: _0x9782a1,
  isAdmins: _0x21433f,
  reply: _0x50a999
}) => {
  try {
    if (!_0xe13c7f) {
      return _0x50a999("*⚠️ Please provide a video title or URL*\n\n*Example:* .xvideo Nicolette");
    }
    const _0x361048 = String(_0xe13c7f);
    const _0x5c2ce1 = await axios.get('https://ipa-oya.vercel.app/api/ph?q=' + encodeURIComponent(_0x361048));
    const _0x5c3a44 = _0x5c2ce1.data;
    const _0x234eac = _0x5c3a44.url;
    let _0xec748d = "🎥 *Didula MD V2 - Now Downloading:* " + _0x5c3a44.title + "\n\n⏳ *Please wait, processing your request...*";
    await _0x3c8d16.sendMessage(_0x340d6f, {
      'image': {
        'url': _0x5c3a44.image
      },
      'caption': _0xec748d
    }, {
      'quoted': qtoko
    })["catch"](() => _0x50a999("❌ Error sending thumbnail"));
    try {
      const _0x33362e = await axios.get("https://ipa-oya.vercel.app/api/phdl?q=" + encodeURIComponent(_0x234eac));
      const _0x2629d9 = _0x33362e.data;
      if (!_0x2629d9 || _0x2629d9.length === 0x0) {
        return _0x50a999("❌ No download links found.");
      }
      let _0x4326ad = "🎥 *Didula MD V2 Successfully Downloaded!*\n\nAvailable Resolutions:\n";
      _0x2629d9.forEach(_0x156f93 => {
        _0x4326ad += "- " + _0x156f93.resolution + "p: " + _0x156f93.download_url + "\n";
      });
      const _0x41e77b = _0x2629d9[0x0].download_url;
      await _0x3c8d16.sendMessage(_0x340d6f, {
        'video': {
          'url': _0x41e77b
        },
        'caption': _0x4326ad
      }, {
        'quoted': qtoko
      });
    } catch (_0x58553e) {
      _0x50a999("❌ Error fetching download links: " + _0x58553e.message);
    }
  } catch (_0x415bb8) {
    console.log(_0x415bb8);
    _0x50a999("❌ Error: " + _0x415bb8.message);
  }
});
cmd({
  'pattern': "xvideo",
  'alias': ["xvideo2"],
  'react': '🎥',
  'desc': "download",
  'category': "download",
  'filename': __filename
}, async (_0x433b38, _0x560cc0, _0x59e9c6, {
  from: _0x261546,
  quoted: _0xca9ff6,
  body: _0x63138e,
  isCmd: _0x27be7f,
  command: _0x5272a9,
  args: _0x44d939,
  q: _0x4d7e33,
  isGroup: _0x3b1888,
  sender: _0x1e38d7,
  senderNumber: _0x46297e,
  botNumber2: _0x46981f,
  botNumber: _0x5d55b1,
  pushname: _0x597711,
  isMe: _0x3191c3,
  isOwner: _0x32584d,
  groupMetadata: _0x28ad53,
  groupName: _0x33da3e,
  participants: _0xc4d2f1,
  groupAdmins: _0x2432f6,
  isBotAdmins: _0x269b52,
  isAdmins: _0x2c77b0,
  reply: _0x1185ac
}) => {
  try {
    if (!_0x4d7e33) {
      return _0x1185ac("*⚠️ Please provide a video title or URL*\n\n*Example:* .xvideo My MILF Secretary Love");
    }
    const _0x4b81ab = String(_0x4d7e33);
    const _0x38bac2 = await axios.get("https://api.giftedtech.my.id/api/search/xvideossearch?apikey=gifted&query=" + encodeURIComponent(_0x4b81ab));
    if (!_0x38bac2.data.results || !_0x38bac2.data.results.length) {
      return _0x1185ac("❌ No results found! Please try another search.");
    }
    const _0x55c26f = _0x38bac2.data.results[0x0];
    const _0x159492 = _0x55c26f.url;
    let _0x111ada = "🎥 *Didula MD V2 - Now Downloading:* " + _0x55c26f.title + "\n\n⏱️ *Duration:* " + _0x55c26f.duration + "\n👁️ *Views:* " + (_0x55c26f.views || "N/A") + "\n📅 *Quality:* " + (_0x55c26f.quality || "N/A") + "\n\n⏳ *Please wait, processing your request...*";
    await _0x433b38.sendMessage(_0x261546, {
      'image': {
        'url': _0x55c26f.thumb
      },
      'caption': _0x111ada
    }, {
      'quoted': qtoko
    })["catch"](() => _0x1185ac("❌ Error sending thumbnail"));
    try {
      const _0x2bd906 = await axios.get("https://api.giftedtech.my.id/api/download/xvideosdl?apikey=gifted&url=" + encodeURIComponent(_0x159492));
      const _0x2f8e60 = _0x2bd906.data.result.download_url;
      await _0x433b38.sendMessage(_0x261546, {
        'video': {
          'url': _0x2f8e60
        },
        'mimetype': 'video/mp4',
        'caption': "🎥 *Didula MD V2 Successfully Downloaded!*"
      }, {
        'quoted': qtoko
      });
    } catch (_0xad4f93) {
      _0x1185ac("❌ Error downloading video: " + _0xad4f93.message);
    }
  } catch (_0x4fdc23) {
    console.log(_0x4fdc23);
    _0x1185ac("❌ Error: " + _0x4fdc23.message);
  }
});
cmd({
  'pattern': "hirucheck",
  'alias': ["hirunews", "newshiru", "hirulk"],
  'react': '⭐',
  'category': "search",
  'desc': "Fetch the latest news from the SUHAS API in Hiru API.",
  'use': '',
  'filename': __filename
}, async (_0x1e75f9, _0x39577b, _0x57daf4, {
  from: _0x4a7652,
  quoted: _0xdf9dda,
  body: _0x344e3b,
  isCmd: _0x1afdff,
  command: _0x5e041b,
  args: _0x1c5210,
  q: _0x369554,
  isGroup: _0x1deb4d,
  sender: _0x16e767,
  senderNumber: _0x19782b,
  botNumber2: _0x2a04ca,
  botNumber: _0x1a483b,
  pushname: _0x454949,
  isMe: _0x41dca5,
  isOwner: _0x5d7a24,
  groupMetadata: _0x46b3a9,
  groupName: _0xc7d2d6,
  participants: _0x5e9602,
  groupAdmins: _0x52beea,
  isBotAdmins: _0x5d7360,
  isAdmins: _0x470be1,
  reply: _0x444d26
}) => {
  try {
    const _0x5b9cf8 = await axios.get("https://suhas-bro-apii.vercel.app/hiru");
    const _0x11c033 = _0x5b9cf8.data;
    if (!_0x11c033 || !_0x11c033.newsURL || !_0x11c033.title || !_0x11c033.image || !_0x11c033.text) {
      return _0x444d26("*No News Available At This Moment* ❗");
    }
    const {
      newsURL: _0x3d0599,
      title: _0xd10a29,
      image: _0x5e9845,
      text: _0x3dfdda,
      Power: _0x3bbf43
    } = _0x11c033;
    let _0x2462a4 = "𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 𝐍𝐞𝐰𝐬 📰\n\n";
    _0x2462a4 += "✨ *Title*: " + _0xd10a29 + "\n\n";
    _0x2462a4 += "📑 *Description*:\n" + _0x3dfdda + "\n\n";
    _0x2462a4 += "⛓️‍💥 *Url*: www.hirunews.lk\n\n";
    _0x2462a4 += "> *ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ*";
    if (_0x5e9845) {
      await _0x1e75f9.sendMessage(_0x57daf4.chat, {
        'image': {
          'url': _0x5e9845
        },
        'caption': _0x2462a4
      }, {
        'quoted': qtoko
      });
    } else {
      await _0x1e75f9.sendMessage(_0x57daf4.chat, {
        'text': _0x2462a4
      }, {
        'quoted': qtoko
      });
    }
  } catch (_0x37e464) {
    console.error(_0x37e464);
    _0x444d26("*An Error Occurred While Fetching News At This Moment* ❗");
  }
});
cmd({
  'pattern': "happy",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "other",
  'react': '😂',
  'filename': __filename
}, async (_0x554ef2, _0x3a54e4, _0x2438b6, {
  from: _0x5c8009,
  reply: _0x16187d
}) => {
  try {
    const _0x287a63 = await _0x554ef2.sendMessage(_0x5c8009, {
      'text': '😂'
    });
    const _0x211d21 = ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const _0x8f9c6b of _0x211d21) {
      await new Promise(_0x25dbde => setTimeout(_0x25dbde, 0x3e8));
      await _0x554ef2.relayMessage(_0x5c8009, {
        'protocolMessage': {
          'key': _0x287a63.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x8f9c6b
          }
        }
      }, {});
    }
  } catch (_0x1497a8) {
    console.log(_0x1497a8);
    _0x16187d("❌ *Error!* " + _0x1497a8.message);
  }
});
cmd({
  'pattern': "heart",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'other',
  'react': '❤️',
  'filename': __filename
}, async (_0x3655a8, _0xe779e6, _0x2bd83b, {
  from: _0x5b4ac3,
  reply: _0x375b7f
}) => {
  try {
    const _0x4164aa = await _0x3655a8.sendMessage(_0x5b4ac3, {
      'text': '🖤'
    });
    const _0x2338c8 = ['💖', '💗', '💕', '🩷', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '🤎', "❤️‍🔥", '💞', '💓', '💘', '💝', '♥️', '💟', '❤️‍🩹', '❤️'];
    for (const _0x28458c of _0x2338c8) {
      await new Promise(_0x2c432e => setTimeout(_0x2c432e, 0x3e8));
      await _0x3655a8.relayMessage(_0x5b4ac3, {
        'protocolMessage': {
          'key': _0x4164aa.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x28458c
          }
        }
      }, {});
    }
  } catch (_0x337d8b) {
    console.log(_0x337d8b);
    _0x375b7f("❌ *Error!* " + _0x337d8b.message);
  }
});
cmd({
  'pattern': "angry",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'other',
  'react': '🤡',
  'filename': __filename
}, async (_0x26081d, _0x40cbd6, _0x12c5f2, {
  from: _0x4b471e,
  reply: _0x330a8d
}) => {
  try {
    const _0x11bb93 = await _0x26081d.sendMessage(_0x4b471e, {
      'text': '👽'
    });
    const _0x296825 = ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const _0x29ed3e of _0x296825) {
      await new Promise(_0x24d58d => setTimeout(_0x24d58d, 0x3e8));
      await _0x26081d.relayMessage(_0x4b471e, {
        'protocolMessage': {
          'key': _0x11bb93.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x29ed3e
          }
        }
      }, {});
    }
  } catch (_0x1c9123) {
    console.log(_0x1c9123);
    _0x330a8d("❌ *Error!* " + _0x1c9123.message);
  }
});
cmd({
  'pattern': "sad",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "other",
  'react': '😶',
  'filename': __filename
}, async (_0x3c4a1f, _0x465ef2, _0x50dc22, {
  from: _0x1208c8,
  reply: _0x4dc776
}) => {
  try {
    const _0x51936f = await _0x3c4a1f.sendMessage(_0x1208c8, {
      'text': '😔'
    });
    const _0x416187 = ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const _0x12e88d of _0x416187) {
      await new Promise(_0x2411b3 => setTimeout(_0x2411b3, 0x3e8));
      await _0x3c4a1f.relayMessage(_0x1208c8, {
        'protocolMessage': {
          'key': _0x51936f.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x12e88d
          }
        }
      }, {});
    }
  } catch (_0x2016bb) {
    console.log(_0x2016bb);
    _0x4dc776("❌ *Error!* " + _0x2016bb.message);
  }
});
cmd({
  'pattern': "shy",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🧐',
  'filename': __filename
}, async (_0x2c14c7, _0xce91f9, _0xa970f8, {
  from: _0x1766b2,
  reply: _0x3c5c49
}) => {
  try {
    const _0x2f5cba = await _0x2c14c7.sendMessage(_0x1766b2, {
      'text': '🧐'
    });
    const _0x9f9e17 = ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const _0x2966f4 of _0x9f9e17) {
      await new Promise(_0x3d6265 => setTimeout(_0x3d6265, 0x3e8));
      await _0x2c14c7.relayMessage(_0x1766b2, {
        'protocolMessage': {
          'key': _0x2f5cba.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x2966f4
          }
        }
      }, {});
    }
  } catch (_0xd9b29a) {
    console.log(_0xd9b29a);
    _0x3c5c49("❌ *Error!* " + _0xd9b29a.message);
  }
});
cmd({
  'pattern': "moon",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🌚',
  'filename': __filename
}, async (_0x4677ad, _0x40c590, _0x18c500, {
  from: _0x3a1a29,
  reply: _0x2b0313
}) => {
  try {
    const _0x15e06e = await _0x4677ad.sendMessage(_0x3a1a29, {
      'text': '🌝'
    });
    const _0x417df5 = ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌝🌚'];
    for (const _0x5a61d2 of _0x417df5) {
      await new Promise(_0xfe879f => setTimeout(_0xfe879f, 0x3e8));
      await _0x4677ad.relayMessage(_0x3a1a29, {
        'protocolMessage': {
          'key': _0x15e06e.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x5a61d2
          }
        }
      }, {});
    }
  } catch (_0x94f57) {
    console.log(_0x94f57);
    _0x2b0313("❌ *Error!* " + _0x94f57.message);
  }
});
cmd({
  'pattern': "confused",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🤔',
  'filename': __filename
}, async (_0x2ee2cf, _0x44a591, _0x3af3e8, {
  from: _0x476ad9,
  reply: _0x415001
}) => {
  try {
    const _0x2ab391 = await _0x2ee2cf.sendMessage(_0x476ad9, {
      'text': '🤔'
    });
    const _0x12c248 = ['😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', "🤷‍♂️", "🤷‍♀️"];
    for (const _0x2ca93f of _0x12c248) {
      await new Promise(_0x4ca206 => setTimeout(_0x4ca206, 0x3e8));
      await _0x2ee2cf.relayMessage(_0x476ad9, {
        'protocolMessage': {
          'key': _0x2ab391.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x2ca93f
          }
        }
      }, {});
    }
  } catch (_0x181394) {
    console.log(_0x181394);
    _0x415001("❌ *Error!* " + _0x181394.message);
  }
});
cmd({
  'pattern': "hot",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '💋',
  'filename': __filename
}, async (_0x4dee47, _0xd54cd0, _0x58509f, {
  from: _0x6b7996,
  reply: _0x45e81b
}) => {
  try {
    const _0x49f3d1 = await _0x4dee47.sendMessage(_0x6b7996, {
      'text': '💋'
    });
    const _0x23b983 = ['🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'];
    for (const _0x4c4a73 of _0x23b983) {
      await new Promise(_0x542913 => setTimeout(_0x542913, 0x3e8));
      await _0x4dee47.relayMessage(_0x6b7996, {
        'protocolMessage': {
          'key': _0x49f3d1.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x4c4a73
          }
        }
      }, {});
    }
  } catch (_0x3d33c0) {
    console.log(_0x3d33c0);
    _0x45e81b("❌ *Error!* " + _0x3d33c0.message);
  }
});
cmd({
  'pattern': "didula",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '🗿',
  'filename': __filename
}, async (_0x5f4d6a, _0x3f1f1a, _0x5949c8, {
  from: _0x53ea5a,
  reply: _0x5e177b
}) => {
  try {
    const _0x14f713 = await _0x5f4d6a.sendMessage(_0x53ea5a, {
      'text': "Didula-AI🗿"
    });
    const _0x370ae4 = ["⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀  ⠀  ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__|⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀     ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀(P)⠀⠀     ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀   ⠀     ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀        ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__ ⠀  ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀      ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀ ⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀       ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__| ⠀    ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀   ⠀  ⠀⢳⡀⠀⡏⠀⠀       ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀  ⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀       ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀lodu⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀   ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀  ⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀"];
    for (const _0x3f5c11 of _0x370ae4) {
      await new Promise(_0x1c1ad9 => setTimeout(_0x1c1ad9, 0x1f4));
      await _0x5f4d6a.relayMessage(_0x53ea5a, {
        'protocolMessage': {
          'key': _0x14f713.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x3f5c11
          }
        }
      }, {});
    }
  } catch (_0x240691) {
    console.log(_0x240691);
    _0x5e177b("❌ *Error!* " + _0x240691.message);
  }
});
cmd({
  'pattern': "owner",
  'desc': "To check ping",
  'category': "main",
  'react': '👤',
  'filename': __filename
}, async (_0x4077ba, _0x177d91, _0x4f6cc5, {
  from: _0x3c8a96,
  quoted: _0x5de8ec,
  body: _0xbd99fb,
  isCmd: _0x1eb64c,
  command: _0x363443,
  args: _0x2e9080,
  q: _0x240af7,
  isGroup: _0x4e45f2,
  sender: _0x991c1c,
  senderNumber: _0x5a7657,
  botNumber2: _0x53fba3,
  botNumber: _0xd73cef,
  pushname: _0x50a926,
  isMe: _0x5885e8,
  isOwner: _0x1306cf,
  groupMetadata: _0x52d08b,
  groupName: _0x403242,
  participants: _0x101a04,
  groupAdmins: _0x5c00fe,
  isBotAdmins: _0xaf47a9,
  isAdmins: _0x5e1ead,
  reply: _0x4b4d60
}) => {
  try {
    await _0x4077ba.sendMessage(_0x3c8a96, {
      'contacts': {
        'displayName': "Didula Rashmika",
        'contacts': [{
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:Didula Rashmika\nORG:Didula MD V2;\nTEL;type=CELL;type=VOICE;waid=94741671668:+94 741 671 668\nTEL;type=CELL;type=VOICE;waid=94771820962:+94 771 820 962\nEND:VCARD"
        }]
      }
    }, {
      'quoted': _0x177d91
    });
    await _0x4077ba.sendMessage(_0x3c8a96, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*👤 Didula MD V2 Owner Details*\n\n*👨‍💻 Owner Name:* Didula Rashmika\n*📱 Owner Number:* wa.me/94741671668\n*📱 Owner Number:* wa.me/94771820962\n\n\n*💫 Thanks For Using Didula MD V2*"
    }, {
      'quoted': _0x177d91
    });
  } catch (_0x4738ad) {
    _0x4b4d60(_0x4738ad);
  }
});
cmd({
  'pattern': 'repo',
  'desc': "repo the bot",
  'react': '📡',
  'category': "main",
  'filename': __filename
}, async (_0x4f14c7, _0x47ba0c, _0xeab8e8, {
  from: _0x35ac22,
  quoted: _0x5f203d,
  body: _0x3c0c77,
  isCmd: _0x12e579,
  command: _0x368b7c,
  args: _0x438c06,
  q: _0x4c148c,
  isGroup: _0x4170a6,
  sender: _0x314e2d,
  senderNumber: _0x3ba469,
  botNumber2: _0x5569d4,
  botNumber: _0x2b248f,
  pushname: _0x3eccf1,
  isMe: _0x6b02eb,
  isOwner: _0x2a756b,
  groupMetadata: _0x20a654,
  groupName: _0x2c50c0,
  participants: _0x4c6aa5,
  groupAdmins: _0x3d811a,
  isBotAdmins: _0x27ce7e,
  isAdmins: _0xdb4fc6,
  reply: _0x1ac570
}) => {
  try {
    await _0x4f14c7.sendMessage(_0x35ac22, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*Didula MD Come Back   💗🌝*\n\nDeploy Your Bot using Below Website\n\nhttps://webd-didula-rashmikas-projects.vercel.app/\n\n\n*You can update and fix errors your bot using  .restart*  (automatically update)\n\n\n⚠️ Share with others quickly ⚠️\n\n\n\n📥FOLLOW FOR UPDATE\nhttps://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌"
    }, {
      'quoted': qtoko
    });
  } catch (_0x2397b9) {
    console.log(_0x2397b9);
    _0x1ac570('' + _0x2397b9);
  }
});
