// =============================================================

const {
  cmd,
  commands
} = require('../lib/command');
const scraper = require("../lib/scraperd");
const axios = require('axios');
const fetch = require('node-fetch');
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
} = require("../lib/database");
var {
  get_set,
  input_set
} = require('../lib/set_db');
// ======================✅💗

const {
  lookup
} = require('mime-types');
const { SinhalaSub } = require('@sl-code-lords/movie-api');
const { PixaldrainDL } = require("pixaldrain-sinhalasub");
const fs = require('fs');
const path = require('path');
const yts = require('yt-search'); // For YouTube search
const cheerio = require('cheerio'); // Import cheerio for HTML parsing

const {
  ytsearch,
  ytmp3,
  ytmp4
} = require('@dark-yasiya/yt-dl.js');
const config = require('../settings');
const xml2js = require('xml2js');
const {
  updateEnv,
  readEnv
} = require('../lib/database');
const os = require("os");
// 😂🌝ආආ හම්බුන්දා 😁😁😁😁
// 🌝ලස්සනයි ලස්සනයි 🌝
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
} = require('@whiskeysockets/baileys');
const {
  igdl
} = require('ruhend-scraper');
const si = require('systeminformation');
const g_i_s = require('g-i-s');
let {
  img2url
} = require('@blackamda/telegram-image-url');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
// ============== ආතල් හුත්තෝ 🌝😂

//  ===================  Didula MD Fuck Imdex ==============

cmd({
  on: "body"
}, async (conn, mek, m, {
  from,
  body,
  isGroup,
  isAdmins,
  isBotAdmins,
  reply,
  sender
}) => {
  try {
    // Auto Bio Update
    if (config.AUTO_BIO === 'true') {
      await conn.updateProfileStatus(`𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐒𝐦𝐨𝐨𝐭𝐡𝐥𝐲...`);
    }

    // Auto Typing Status
    if (config.AUTO_TYPING === 'true') {
      await conn.sendPresenceUpdate('composing', mek.key.remoteJid);
    }

    // Recording Status
    if (config.RECORDING === 'true') {
      await conn.sendPresenceUpdate('recording', mek.key.remoteJid);
    }

    // Online Status
    if (config.ALWAYS_ONLINE === 'true') {
      await conn.sendPresenceUpdate('available', mek.key.remoteJid);
    } else {
      await conn.sendPresenceUpdate('unavailable', mek.key.remoteJid);
    }
  } catch (error) {
    console.error("Error processing message:", error);
    reply("An error occurred while processing your message. Please try again later.");
  }
});

// Movie search command
cmd({
    pattern: "sinhalack",
    desc: "Search for a movie and get details and download options.",
    category: "movie",
    react: "🔍",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const input = q.trim();
        if (!input) return reply("Please provide a movie or TV show name to search.");
        
        // Step 1: Search for the movie
        const result = await SinhalaSub.get_list.by_search(input);
        if (!result.status || result.results.length === 0) return reply("No results found.");

        let message = "Search Results:\n\n";
        result.results.forEach((item, index) => {
            message += `${index + 1}. ${item.title}\nType: ${item.type}\nLink: ${item.link}\n\n`;
        });

        // Step 2: Send the search results to the user
        const sentMsg = await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/zHLW3WL/044e155205d4f11c.jpg` },
            caption: message,  // Send the description as the caption
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
            }
        }, { quoted: mek });

        // Wait for the user to select a movie by number
        const movieSelectionListener = async (update) => {
            const message = update.messages[0];

            if (!message.message || !message.message.extendedTextMessage) return;

            const userReply = message.message.extendedTextMessage.text.trim();
            const selectedMovieIndex = parseInt(userReply) - 1;

            // Ensure the user has selected a valid movie index
            if (selectedMovieIndex < 0 || selectedMovieIndex >= result.results.length) {
                await conn.sendMessage(from, {
                    react: { text: '❌', key: mek.key }
                });
                return reply("❗ Invalid selection. Please choose a valid number from the search results.");
            }

            const selectedMovie = result.results[selectedMovieIndex];
            const link = selectedMovie.link;

            // Step 3: Fetch movie details from the selected movie's link
            const movieDetails = await SinhalaSub.movie(link);
            if (!movieDetails || !movieDetails.status || !movieDetails.result) {
                return reply("❗ Movie details not found.");
            }

            const movie = movieDetails.result;
            let movieMessage = `${movie.title}\n\n`;
            movieMessage += `📅 𝖱𝖾𝗅𝖾𝖺𝗌𝖾 𝖣𝖺𝗍𝖾: ${movie.release_date}\n`;
            movieMessage += `🗺 𝖢𝗈𝗎𝗇𝗍𝗋𝗒: ${movie.country}\n`;
            movieMessage += `⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇: ${movie.duration}\n`;

            // Handling genres properly
            const genres = Array.isArray(movie.genres) ? movie.genres.join(', ') : movie.genres;
            movieMessage += `🎭 𝖦𝖾𝗇𝖾𝗋𝖾𝗌: ${genres}\n`;

            movieMessage += `⭐ 𝖨𝗆𝖽𝖻 𝖱𝖺𝗍𝗂𝗇𝗀: ${movie.IMDb_Rating}\n`;
            movieMessage += `🎬 𝖣𝗂𝗋𝖾𝖼𝗍𝗈𝗋: ${movie.director.name}\n\n`;
          movieMessage += `乂 REPLY BELOW NUMBER\n\n`;
          movieMessage += `1 | 𝖲𝖣 - 480𝗉\n`;
          movieMessage += `2 | 𝖧𝖣 - 720p\n`;
          movieMessage += `3 | 𝖥𝖧𝖣 - 1080p\n\n`;
          movieMessage += `> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Avishka_X `;

            const imageUrl = movie.images && movie.images.length > 0 ? movie.images[0] : null;

            // Step 4: Send movie details with download options
            const movieDetailsMessage = await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: movieMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                }
            }, { quoted: mek });

            // Listen for the user's reply to select the download quality
            const qualityListener = async (update) => {
                const message = update.messages[0];

                if (!message.message || !message.message.extendedTextMessage) return;

                const userReply = message.message.extendedTextMessage.text.trim();

                // Ensure the user is responding to the right message
                if (message.message.extendedTextMessage.contextInfo.stanzaId === movieDetailsMessage.key.id) {
                    let quality;
                    switch (userReply) {
                        case '1':
                            quality = "SD 480p";
                            break;
                        case '2':
                            quality = "HD 720p";
                            break;
                        case '3':
                            quality = "FHD 1080p";
                            break;
                        default:
                            await conn.sendMessage(from, {
                                react: { text: '❌', key: mek.key }
                            });
                            return reply("❗ Invalid option. Please select from SD, HD, or FHD.");
                    }

                    try {
                        // Fetch the direct download link for the selected quality
                        const directLink = await PixaldrainDL(link, quality, "direct");
                        if (directLink) {
                            // Provide download option
                            await conn.sendMessage(from, {
                                document: {
                                    url: directLink
                                },
                                mimetype: 'video/mp4',
                                fileName: `🎬Avishka_X-MD ᴍᴏᴠɪᴇꜱ🎬(${movie.title}).mp4`,
                                caption: `${movie.title} - ${quality}\n\n> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Avishka_X `
                            }, { quoted: mek });

                            // React with success
                            await conn.sendMessage(from, {
                                react: { text: '✅', key: mek.key }
                            });
                        } else {
                            await conn.sendMessage(from, {
                                react: { text: '❌', key: mek.key }
                            });
                            return reply(`❗ Could not find the ${quality} download link. Please check the URL or try another quality.`);
                        }
                    } catch (err) {
                        console.error('Error in PixaldrainDL function:', err);
                        await conn.sendMessage(from, {
                            react: { text: '❌', key: mek.key }
                        });
                        return reply("❗ An error occurred while processing your download request.");
                    }
                }
            };

            // Register the quality listener for this movie
            conn.ev.on("messages.upsert", qualityListener);

            // Clean up the listener after 60 seconds to prevent memory leaks
            setTimeout(() => {
                conn.ev.off("messages.upsert", qualityListener);
            }, 60000);
        };

        // Register the movie selection listener
        conn.ev.on("messages.upsert", movieSelectionListener);

        // Clean up the listener after 60 seconds to prevent memory leaks
        setTimeout(() => {
            conn.ev.off("messages.upsert", movieSelectionListener);
        }, 60000);

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return reply(`❗ Error: ${e.message}`);
    }
});

/*



const dr = [
    "දිදුල", "Didula", "Didu", "Rashmika", "දිදු"
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
        if (!body) return; // Check if body exists
        
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = dr.some(word => 
            lowerCaseMessage.includes(word.toLowerCase())
        );

        if (containsBadWord) {
            await conn.sendMessage(from, { 
                audio: { 
                    url: 'https://files.catbox.moe/809bz6.mp3' 
                }, 
                mimetype: "audio/mpeg",
                ptt: true,
                contextInfo: {
                    externalAdReply: {
                        title: "Didula MD V2",
                        body: "Created By Didula Rashmika",
                        thumbnailUrl: "https://files.catbox.moe/za6ytm.jpg",
                        sourceUrl: "https://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { 
                quoted: mek 
            });
        }
    } catch (error) {
        console.error("Error processing message:", error);
        reply("An error occurred while processing your message. Please try again later.");
    }
});
*/

//   ======================== song Video =========================

cmd({
  pattern: "video",
  alias: ["ytmp4", "play"],
  react: "🎥",
  desc: "Download Youtube video",
  category: "download",
  use: '.video < Yt url or Name >',
  filename: __filename
}, async (conn, mek, m, {
  from,
  prefix,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return await reply("⚠️ Please provide a YouTube URL or video name!");
    }
    const yt = await ytsearch(q);
    if (yt.results.length < 1) {
      return reply("❌ No results found!");
    }
    let yts = yt.results[0];
    // Fetch the download token
    let response = await fetch(`https://dark-shan-yt.koyeb.app/download/ytmp4?url=${encodeURIComponent(yts.url)}&quality=3`);
    let data = await response.json();
    let downloadUrl = data.download;
    await conn.sendMessage(from, {
      image: {
        url: yts.thumbnail
      },
      caption: `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 📽️ *VIDEO DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇📌 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*💫 Quality Video Downloader By Didula MD V2*`
    }, {
      quoted: mek
    });
    await conn.sendMessage(from, {
      video: {
        url: downloadUrl
      },
      mimetype: "video/mp4"
    }, {
      quoted: mek
    });
    await conn.sendMessage(from, {
      document: {
        url: downloadUrl
      },
      mimetype: "video/mp4",
      fileName: `${yts.title}.mp4`,
      caption: `🎥 *${yts.title}*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2`
    }, {
      quoted: mek
    });
  } catch (e) {
    console.log(e);
    reply("❌ An error occurred. Please try again later.");
  }
});
cmd({
  pattern: "song",
  alias: ["ytdl3", "yta"],
  react: "🎵",
  desc: "Download Youtube song",
  category: "download",
  use: '.song < Yt url or Name >',
  filename: __filename
}, async (conn, mek, m, {
  from,
  prefix,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return await reply("⚠️ Please provide a YouTube URL or song name!");
    }
    const yt = await ytsearch(q);
    if (yt.results.length < 1) {
      return reply("❌ No results found!");
    }
    let yts = yt.results[0];
    let response = await fetch(`https://manul-ofc-ytdl-paid-30a8f429a0a6.herokuapp.com/download/audio?url=${encodeURIComponent(yts.url)}`);
    let data = await response.json();
    if (!data.status || !data.downloadUrl) {
      return reply("❌ Failed to fetch download URL");
    }
    let downloadUrl = data.downloadUrl;
    await conn.sendMessage(from, {
      image: {
        url: yts.thumbnail
      },
      caption: `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎵 *MUSIC DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇🎧 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*💫 High Quality Audio By Didula MD V2*`
    }, {
      quoted: mek
    });
    await conn.sendMessage(from, {
      audio: {
        url: downloadUrl
      },
      mimetype: "audio/mpeg"
    }, {
      quoted: mek
    });
    await conn.sendMessage(from, {
      document: {
        url: downloadUrl
      },
      mimetype: "audio/mpeg",
      fileName: `${yts.title}.mp3`,
      caption: `🎵 *${yts.title}*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2`
    }, {
      quoted: mek
    });
  } catch (e) {
    console.log(e);
    reply("❌ An error occurred. Please try again later.");
  }
});
cmd({
  pattern: "songc",
  alias: ["ytdl3", "yta"],
  react: "🎵",
  desc: "Download Youtube song as voice note",
  category: "download",
  use: '.songc < Yt url or Name >',
  filename: __filename
}, async (conn, mek, m, {
  from,
  prefix,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return await reply("⚠️ Please provide a YouTube URL or song name!");
    }
    const yt = await ytsearch(q);
    if (yt.results.length < 1) {
      return reply("❌ No results found!");
    }
    let yts = yt.results[0];
    let response = await fetch(`https://manul-ofc-ytdl-paid-30a8f429a0a6.herokuapp.com/download/audio?url=${encodeURIComponent(yts.url)}`);
    let data = await response.json();
    if (!data.status || !data.downloadUrl) {
      return reply("❌ Failed to fetch download URL");
    }
    let downloadUrl = data.downloadUrl;
    await conn.sendMessage(from, {
      image: {
        url: yts.thumbnail
      },
      caption: `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎵 *MUSIC DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇🎧 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*💫 High Quality Audio By Didula MD V2*`
    }, {
      quoted: mek
    });
    await conn.sendMessage(from, {
      audio: {
        url: downloadUrl
      },
      mimetype: "audio/mpeg",
      ptt: true
    }, {
      quoted: mek
    });
  } catch (e) {
    console.log(e);
    reply("❌ An error occurred. Please try again later.");
  }
});

// ===================== song and video ========================== //

//   ================== convert category plugin====================

const googleTTS = require('google-tts-api');
cmd({
  'pattern': 'tts',
  'desc': 'Text-to-speech',
  'category': "convert",
  'filename': __filename
}, async (_0x3ec88c, _0x1cd588, _0x4deecc, {
  from: _0x32a185,
  quoted: _0x2ef2f1,
  body: _0x121e8b,
  isCmd: _0x1c8b3d,
  command: _0x5068d8,
  args: _0x3346c3,
  q: _0x4b9a3c,
  isGroup: _0x39c6a3,
  sender: _0x5b078b,
  senderNumber: _0x320299,
  botNumber2: _0x22bc5d,
  botNumber: _0x473d60,
  pushname: _0x21d162,
  isMe: _0x5f47e9,
  isOwner: _0x454401,
  groupMetadata: _0xef166a,
  groupName: _0xf6eda3,
  participants: _0x435249,
  groupAdmins: _0x4461b6,
  isBotAdmins: _0x276318,
  isAdmins: _0xa80c92,
  reply: _0x13c048
}) => {
  try {
    if (!_0x4b9a3c) {
      return _0x13c048("*_Please give me a text._*");
    }
    const _0x4409c0 = googleTTS.getAudioUrl(_0x4b9a3c, {
      'lang': 'en',
      'slow': false,
      'host': "https://translate.google.com"
    });
    await _0x3ec88c.sendMessage(_0x32a185, {
      'audio': {
        'url': _0x4409c0
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x1cd588
    });
  } catch (_0x3d530d) {
    console.log(_0x3d530d);
    _0x13c048('' + _0x3d530d);
  }
});
cmd({
  'pattern': "readmore",
  'desc': "Readmore message",
  'category': "convert",
  'react': '📝',
  'filename': __filename
}, async (_0x76a4f0, _0x2a58cb, _0x555873, {
  from: _0x374d32,
  quoted: _0x345244,
  body: _0x213613,
  isCmd: _0x1f646e,
  command: _0x5c4b05,
  args: _0x2adc02,
  q: _0x531b21,
  isGroup: _0x4d51de,
  sender: _0x4fdbc2
}) => {
  try {
    let _0x524d83 = _0x531b21 ? _0x531b21 : "No text provided";
    let _0x50453d = '​'.repeat(0xfa0);
    let _0x1d9e23 = "Didula MD V2\n\n" + _0x50453d + _0x524d83;
    await _0x76a4f0.sendMessage(_0x374d32, {
      'text': _0x1d9e23
    }, {
      'quoted': _0x2a58cb
    });
    await _0x76a4f0.sendMessage(_0x374d32, {
      'react': {
        'text': '',
        'key': _0x2a58cb.key
      }
    });
  } catch (_0x54630f) {
    console.log(_0x54630f);
    reply("Error: " + _0x54630f.message);
  }
});
cmd({
  'pattern': "convert",
  'desc': "Convert an amount from one currency to another.",
  'category': "convert",
  'react': '💱',
  'filename': __filename
}, async (_0x4770de, _0x5109e7, _0x4d9f8a, {
  from: _0x289b14,
  quoted: _0x2b70fa,
  body: _0x44c552,
  isCmd: _0x163c7a,
  command: _0x3dcb1b,
  args: _0x2f93e5,
  q: _0x700792,
  isGroup: _0x4d8a68,
  sender: _0x16b1da,
  senderNumber: _0x4c6c7e,
  botNumber2: _0x44c996,
  botNumber: _0x1e694a,
  pushname: _0x57800e,
  isMe: _0x28f727,
  isOwner: _0x131c73,
  groupMetadata: _0x317ee5,
  groupName: _0x309105,
  participants: _0x14adc6,
  groupAdmins: _0x553946,
  isBotAdmins: _0x869d31,
  isAdmins: _0x390b58,
  reply: _0x2c8fd9
}) => {
  try {
    if (_0x2f93e5.length < 0x3) {
      return _0x2c8fd9("Usage: .convert <amount> <from_currency> <to_currency>");
    }
    const _0x43512e = _0x2f93e5[0x0];
    const _0x5edc32 = _0x2f93e5[0x1].toUpperCase();
    const _0xaf8c9b = _0x2f93e5[0x2].toUpperCase();
    if (isNaN(_0x43512e)) {
      return _0x2c8fd9("Please provide a valid amount.");
    }
    const _0x4003cb = "https://api.exchangerate-api.com/v4/latest/" + _0x5edc32;
    const _0x14b674 = await axios.get(_0x4003cb);
    const _0x3cc30f = _0x14b674.data;
    if (!_0x3cc30f.rates[_0xaf8c9b]) {
      return _0x2c8fd9("Conversion rate for " + _0xaf8c9b + " not found.");
    }
    const _0x5982c4 = (_0x43512e * _0x3cc30f.rates[_0xaf8c9b]).toFixed(0x2);
    let _0xc1d505 = "💸_*Currency Conversion*_💸\n\n";
    _0xc1d505 += "💵 *Amount*: " + _0x43512e + " " + _0x5edc32 + "\n";
    _0xc1d505 += "🔄 *Converted Amount*: " + _0x5982c4 + " " + _0xaf8c9b + "\n";
    _0xc1d505 += "📈 *Exchange Rate*: 1 " + _0x5edc32 + " = " + _0x3cc30f.rates[_0xaf8c9b] + " " + _0xaf8c9b + "\n\n        \n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌\n        ";
    await _0x4770de.sendMessage(_0x289b14, {
      'text': _0xc1d505
    }, {
      'quoted': _0x5109e7
    });
  } catch (_0x48fbb3) {
    console.log(_0x48fbb3);
    _0x2c8fd9("Error fetching data: " + _0x48fbb3.message);
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
}, async (_0x10b28b, _0x4f0eb4, _0x4444d3, {
  from: _0x4f8675,
  quoted: _0x1f5423,
  body: _0x58068f,
  isCmd: _0x15cd24,
  command: _0x10b5d9,
  args: _0x5959f4,
  q: _0x2a5566,
  isGroup: _0x4b601d,
  sender: _0x394c42,
  senderNumber: _0x2728b9,
  botNumber2: _0x49c418,
  botNumber: _0x126320,
  pushname: _0x594fd1,
  isMe: _0x3174e5,
  isOwner: _0xc06dd9,
  groupMetadata: _0x248191,
  groupName: _0x2135c8,
  participants: _0x141261,
  groupAdmins: _0x390f23,
  isBotAdmins: _0x585783,
  isAdmins: _0x1caf8e,
  reply: _0x4b89ad
}) => {
  try {
    const _0xc9714 = _0x4444d3.quoted ? _0x4444d3.quoted.type === "imageMessage" || (isQuotedViewOnce ? _0x4444d3.quoted.msg.type === 'imageMessage' : false) : false;
    if (_0x4444d3.type === "imageMessage" || _0xc9714) {
      if (_0xc9714) {
        await _0x4444d3.quoted.download("didulamd");
      } else {
        await _0x4444d3.download("didulamd");
      }
      let _0x18ac28 = await image2url("didulamd.jpg");
      let _0x178b06 = "*Url :* " + _0x18ac28.result.url + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
      _0x4b89ad('' + _0x178b06);
    } else {
      _0x4b89ad("*_Please reply an image._*");
    }
  } catch (_0x45a222) {
    console.log(_0x45a222);
    _0x4b89ad('' + _0x45a222);
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
  'pattern': 'toimg',
  'react': '🔮',
  'alias': ['s', "stic"],
  'desc': descg,
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0xe0c09c, _0xa6b7a3, _0x1a299d, {
  from: _0x274a2e,
  l: _0xa003e6,
  quoted: _0x38de38,
  body: _0x539372,
  isCmd: _0x1b13be,
  command: _0x3c1c19,
  args: _0x57d88a,
  q: _0x499791,
  isGroup: _0x223c86,
  sender: _0x38ad5c,
  senderNumber: _0x596c11,
  botNumber2: _0x4021ed,
  botNumber: _0x28dedc,
  pushname: _0x11f7c5,
  isMe: _0x5d85cc,
  isOwner: _0x35d388,
  groupMetadata: _0x243831,
  groupName: _0x3a5e5a,
  participants: _0x44c29b,
  groupAdmins: _0x494c33,
  isBotAdmins: _0x3fe84f,
  isAdmins: _0x533d29,
  reply: _0x3db77f
}) => {
  try {
    const _0x79fdee = _0x1a299d.quoted ? _0x1a299d.quoted.type === "stickerMessage" : false;
    if (_0x79fdee) {
      var _0x505448 = getRandom('');
      let _0x4264c4 = _0x79fdee ? await _0x1a299d.quoted.download(_0x505448) : await _0x1a299d.download(_0x505448);
      let _0x2a1ed8 = await fileType.fromBuffer(_0x4264c4);
      await fs.promises.writeFile('./' + _0x2a1ed8.ext, _0x4264c4);
      await _0xe0c09c.sendMessage(_0x274a2e, {
        'image': fs.readFileSync('./' + _0x2a1ed8.ext),
        'caption': config.FOOTER
      }, {
        'quoted': _0xa6b7a3
      });
    } else {
      return await _0x3db77f(imgmsg);
    }
  } catch (_0x28f41a) {
    _0x3db77f("*Error !!*");
    _0xa003e6(_0x28f41a);
  }
});
cmd({
  'pattern': "sticker",
  'react': '🔮',
  'alias': ['s', "stic"],
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x5a283b, _0x2622fd, _0x4e9cfc, {
  from: _0xec1647,
  l: _0x3c0d6d,
  quoted: _0x4625e1,
  body: _0x263c0f,
  isCmd: _0x241df2,
  command: _0x3f0ec7,
  args: _0x49227b,
  q: _0x175272,
  isGroup: _0x3ad326,
  sender: _0x272c0b,
  senderNumber: _0x398c73,
  botNumber2: _0x922e78,
  botNumber: _0x356b95,
  pushname: _0x2d2929,
  isMe: _0x5217c2,
  isOwner: _0x46d547,
  groupMetadata: _0x44f061,
  groupName: _0x139a92,
  participants: _0xc24223,
  groupAdmins: _0x4a167f,
  isBotAdmins: _0x581b8e,
  isAdmins: _0x507832,
  reply: _0x4c5eb3
}) => {
  try {
    const _0x1ebe9a = _0x4e9cfc.quoted ? _0x4e9cfc.quoted.type === "viewOnceMessage" : false;
    const _0x18ab75 = _0x4e9cfc.quoted ? _0x4e9cfc.quoted.type === "imageMessage" || (_0x1ebe9a ? _0x4e9cfc.quoted.msg.type === "imageMessage" : false) : false;
    const _0x1cab73 = _0x4e9cfc.quoted ? _0x4e9cfc.quoted.type === "stickerMessage" : false;
    if (_0x4e9cfc.type === "imageMessage" || _0x18ab75) {
      var _0x37502e = getRandom('');
      if (_0x18ab75) {
        await _0x4e9cfc.quoted.download(_0x37502e);
      } else {
        await _0x4e9cfc.download(_0x37502e);
      }
      let _0x4da7ec = new Sticker(_0x37502e + '.jpg', {
        'pack': "Didula Md",
        'author': "Didula Rashmika",
        'type': _0x175272.includes('--crop' || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': 'transparent'
      });
      const _0x58e923 = await _0x4da7ec.toBuffer();
      return _0x5a283b.sendMessage(_0xec1647, {
        'sticker': _0x58e923
      }, {
        'quoted': _0x2622fd
      });
    } else {
      if (_0x1cab73) {
        var _0x22c07f = getRandom('');
        await _0x4e9cfc.quoted.download(_0x22c07f);
        let _0x1168d7 = new Sticker(_0x22c07f + ".webp", {
          'pack': "Didula Md",
          'author': "Didula Rashmika",
          'type': _0x175272.includes('--crop' || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x2776cd = await _0x1168d7.toBuffer();
        return _0x5a283b.sendMessage(_0xec1647, {
          'sticker': _0x2776cd
        }, {
          'quoted': _0x2622fd
        });
      } else {
        return await _0x4c5eb3(imgmsg);
      }
    }
  } catch (_0x10b1ca) {
    _0x4c5eb3("Error !!");
    console.log(_0x10b1ca);
  }
});
cmd({
  'pattern': "logolist",
  'desc': "Create logos",
  'category': "convert",
  'filename': __filename
}, async (_0x27fa50, _0x2fcae4, _0x541115, {
  from: _0x4c2120,
  quoted: _0x3e1a7f,
  body: _0x265aaf,
  isCmd: _0x252953,
  command: _0x4f4ff3,
  args: _0x930a41,
  q: _0x157bc7,
  isGroup: _0x5b9af6,
  sender: _0x1514c2,
  senderNumber: _0x3f60cb,
  botNumber2: _0xc134c8,
  botNumber: _0x36ecb7,
  pushname: _0x320091,
  isMe: _0x53003a,
  isOwner: _0x2716dd,
  groupMetadata: _0x50b365,
  groupName: _0x9dc705,
  participants: _0x34ba82,
  groupAdmins: _0xf6caab,
  isBotAdmins: _0x2b47ef,
  isAdmins: _0x1c7b9a,
  reply: _0x3977b5
}) => {
  try {
    if (!_0x157bc7) {
      return _0x3977b5("*_Please give me a text._*");
    }
    let _0x5e2477 = "*_Didula MD V2 💚 LOGO MAKER_*\n\n───────────────────\n*Text :* " + _0x157bc7 + "\n───────────────────\n\n_🔢 Reply Below Number :_\n\n 1 || Black Pink\n 2 || Black Pink 2\n 3 || Black Pink 3\n 4 || Naruto\n 5 || Digital Glitch\n 6 || Pixel Glitch\n 7 || Comic Style\n 8 || Neon Light\n 9 || Free Bear\n10 || Devil Wings\n11 || Futuristic Technology\n12 || Silver 3D\n13 || 3D Paper Cut\n14 || Pubg 1\n15 || Pubg 2\n16 || Free Fire Cover\n17 || Text On Wet Glass\n18 || Typography\n19 || Modern Gold\n20 || Matrix\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ";
    const _0x3f7686 = {
      'newsletterJid': "@newsletter",
      'newsletterName': "Didula MD V2 💚",
      'serverMessageId': 0x3e7
    };
    const _0x38fbd3 = {
      'mentionedJid': [_0x541115.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x3f7686
    };
    const _0x3e41b9 = {
      'image': {
        'url': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg"
      },
      'caption': _0x5e2477,
      'contextInfo': _0x38fbd3
    };
    let _0x5566ac = await _0x27fa50.sendMessage(_0x4c2120, _0x3e41b9, {
      'quoted': _0x2fcae4
    });
    _0x27fa50.ev.on("messages.upsert", async _0x1926f4 => {
      const _0x4afad1 = _0x1926f4.messages[0x0];
      if (!_0x4afad1.message || !_0x4afad1.message.extendedTextMessage) {
        return;
      }
      const _0x4c2b92 = _0x4afad1.message.extendedTextMessage.text.trim();
      if (_0x4afad1.message.extendedTextMessage.contextInfo && _0x4afad1.message.extendedTextMessage.contextInfo.stanzaId === _0x5566ac.key.id) {
        switch (_0x4c2b92) {
          case '1':
            let _0x12c10f = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x12c10f.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '2':
            let _0x43ca1a = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x43ca1a.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '3':
            let _0x44b440 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x44b440.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '4':
            let _0x5e0c3c = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x5e0c3c.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '5':
            let _0x2f2c7f = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x2f2c7f.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '6':
            let _0x4c921a = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x4c921a.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '7':
            let _0x3f4c59 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x3f4c59.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '8':
            let _0x20bdf5 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x20bdf5.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '9':
            let _0x1c7197 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x1c7197.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '10':
            let _0x4e63e2 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x4e63e2.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '11':
            let _0x1de5ea = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x1de5ea.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '12':
            let _0x158157 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x158157.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '13':
            let _0x274b7c = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x274b7c.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '14':
            let _0x1ac500 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-pubg-logo-maker-online-609.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x1ac500.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '15':
            let _0x150b32 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x150b32.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '16':
            let _0x3a8070 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-free-fire-facebook-cover-online-567.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x3a8070.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '17':
            let _0x3ad68a = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x3ad68a.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '18':
            let _0x599cde = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x599cde.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '19':
            let _0x1d14de = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/modern-gold-5-215.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x1d14de.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          case '20':
            let _0x35e8ff = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/matrix-text-effect-154.html&name=" + _0x157bc7);
            await _0x27fa50.sendMessage(_0x4c2120, {
              'image': {
                'url': '' + _0x35e8ff.result.download_url
              },
              'caption': "> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
            }, {
              'quoted': _0x2fcae4
            });
            break;
          default:
            _0x3977b5("*_Invalid number.Please reply a valid number._*");
        }
      }
    });
  } catch (_0xa5d564) {
    console.log(_0xa5d564);
    _0x3977b5('' + _0xa5d564);
  }
});
const checkPermissions = (_0x2ba674, _0xc50ea, _0x10d66e, _0x2abfe9) => {
  if (!_0x2ba674) {
    return "This command can only be used in groups.";
  }
  if (!_0xc50ea && !_0x10d66e) {
    return "This command can only be used by group admins.";
  }
  if (!_0x2abfe9) {
    return "Bot must be admin to use this command.";
  }
  return null;
};
cmd({
  'pattern': 'del',
  'react': '❌',
  'alias': ["del"],
  'desc': "delete message",
  'category': 'group',
  'use': ".del",
  'filename': __filename
}, async (_0x141f20, _0x359959, _0x4551e1, {
  from: _0x5d6adc,
  l: _0xc2f6d4,
  quoted: _0x210fcc,
  body: _0x1910ae,
  isCmd: _0x46b963,
  command: _0xcbb996,
  args: _0x2a2416,
  q: _0x58ae40,
  isGroup: _0x941bdf,
  sender: _0x9b40f0,
  senderNumber: _0x540f95,
  botNumber2: _0x2913e1,
  botNumber: _0x41e41b,
  pushname: _0x2c5836,
  isMe: _0x234308,
  isOwner: _0x58c2e6,
  groupMetadata: _0x20ad61,
  groupName: _0x1d4dcb,
  participants: _0x3fb7b9,
  isItzcp: _0x14ffc4,
  groupAdmins: _0x2bf33e,
  isBotAdmins: _0x2444b2,
  isAdmins: _0x49d25b,
  reply: _0x5070f4
}) => {
  if (!_0x58c2e6 || !_0x49d25b) {
    return;
  }
  try {
    if (!_0x4551e1.quoted) {
      return _0x5070f4(mg.notextfordel);
    }
    const _0x5a09a9 = {
      'remoteJid': _0x4551e1.chat,
      'fromMe': false,
      'id': _0x4551e1.quoted.id,
      'participant': _0x4551e1.quoted.sender
    };
    await _0x141f20.sendMessage(_0x4551e1.chat, {
      'delete': _0x5a09a9
    });
  } catch (_0x4fb7c3) {
    console.log(_0x4fb7c3);
    _0x5070f4("successful..👨‍💻✅");
  }
});
cmd({
  'pattern': "join",
  'fromMe': true,
  'desc': "Make the bot join a group using an invite link.",
  'category': "group",
  'react': '🌀',
  'filename': __filename
}, async (_0x3280ac, _0x949fce, _0x18b49c, {
  from: _0x2aefe5,
  quoted: _0x5b6ca7,
  body: _0x2f3312,
  args: _0x381f30,
  q: _0x23a8e6,
  reply: _0x3d6cf1
}) => {
  try {
    if (!_0x23a8e6 || !_0x23a8e6.includes("chat.whatsapp.com")) {
      return await _0x3d6cf1("Please provide a valid WhatsApp group invite link.");
    }
    const _0x4c928a = _0x23a8e6.split('chat.whatsapp.com/')[0x1];
    const _0x33725f = await _0x3280ac.groupAcceptInvite(_0x4c928a);
    if (_0x33725f) {
      await _0x3d6cf1("✅ Successfully joined the group!");
    } else {
      await _0x3d6cf1("❌ Failed to join the group. Please check the invite link.");
    }
  } catch (_0x3eaf62) {
    console.error("Error while joining group:", _0x3eaf62);
    await _0x3d6cf1("❗ An error occurred while trying to join the group.");
  }
});
cmd({
  'pattern': "left",
  'fromMe': true,
  'desc': "Make the bot leave the group.",
  'category': "group",
  'react': '👋',
  'filename': __filename
}, async (_0x4a651, _0x1bfdde, _0x485237, {
  from: _0x2f0548,
  isGroup: _0x5dce32,
  reply: _0x182140
}) => {
  try {
    if (!_0x5dce32) {
      return await _0x182140("❌ This command can only be used in a group.");
    }
    await _0x4a651.groupLeave(_0x2f0548);
    console.log("Bot left the group: " + _0x2f0548);
  } catch (_0x2cf807) {
    console.error("Error while leaving group:", _0x2cf807);
    await _0x182140("❗ An error occurred while trying to leave the group.");
  }
});
cmd({
  'pattern': "hidetag",
  'fromMe': true,
  'desc': "Send a message with hidden tags to all group members.",
  'category': 'group',
  'react': '🔍',
  'filename': __filename
}, async (_0x55382d, _0x54bf90, _0x541b79, {
  from: _0x811679,
  isGroup: _0x3138ac,
  args: _0x4ab3c6,
  q: _0x42bbe6,
  participants: _0x1aea28,
  reply: _0x231cb8
}) => {
  try {
    if (!_0x3138ac) {
      return await _0x231cb8("❌ This command can only be used in a group.");
    }
    if (!_0x42bbe6) {
      return await _0x231cb8("❗ Please provide a message to send.");
    }
    const _0x233393 = _0x1aea28.map(_0x4233ae => _0x4233ae.id);
    await _0x55382d.sendMessage(_0x811679, {
      'text': _0x42bbe6,
      'mentions': _0x233393
    });
    console.log("Hidetag message sent to all group members.");
  } catch (_0x3bceb6) {
    console.error("Error while sending hidetag message:", _0x3bceb6);
    await _0x231cb8("❗ An error occurred while trying to send the hidetag message.");
  }
});
cmd({
  'pattern': "mute",
  'react': '🔇',
  'desc': "close a group",
  'category': "group",
  'use': '.mute',
  'filename': __filename
}, async (_0x46bdcc, _0x4c5c30, _0x57db27, {
  from: _0x40dc4a,
  prefix: _0x4c3a3b,
  l: _0x109e55,
  quoted: _0x478a77,
  body: _0x13dade,
  isCmd: _0x7c203,
  command: _0x3ec016,
  args: _0x517f9c,
  q: _0x5d4565,
  isGroup: _0x528045,
  sender: _0x299b20,
  senderNumber: _0x28b3e2,
  botNumber2: _0x2a47e8,
  botNumber: _0x356922,
  pushname: _0x37827a,
  isMe: _0x3c8bcb,
  isOwner: _0x83a4e6,
  groupMetadata: _0x703b04,
  groupName: _0x814ab3,
  participants: _0x5e0bf2,
  groupAdmins: _0x55fb8b,
  isBotAdmins: _0x2399ce,
  isAdmins: _0x414768,
  reply: _0x4aba66
}) => {
  try {
    if (!_0x528045) {
      return _0x4aba66(ONLGROUP);
    }
    if (!_0x2399ce) {
      return _0x4aba66(botAdmin);
    }
    if (!_0x414768) {
      return _0x4aba66(ADMIN);
    }
    await _0x46bdcc.groupSettingUpdate(_0x4c5c30.chat, "announcement");
    await _0x46bdcc.sendMessage(_0x40dc4a, {
      'react': {
        'text': '✅',
        'key': _0x4c5c30.key
      }
    });
  } catch (_0x55089d) {
    _0x4aba66("🛑 GROUP IS CLOSED MY BOT OWNER");
    _0x109e55(_0x55089d);
  }
});
cmd({
  'pattern': "unmute",
  'react': '🔊',
  'desc': "open a group",
  'category': "group",
  'use': ".unmute",
  'filename': __filename
}, async (_0x36dfc1, _0x33235a, _0x44b6c6, {
  from: _0x518de1,
  prefix: _0x9b2d4c,
  l: _0x15e0dd,
  quoted: _0x379231,
  body: _0x3f1477,
  isCmd: _0x1b1313,
  command: _0x5d2abe,
  args: _0x1ebbd3,
  q: _0x557fe5,
  isGroup: _0x2b989d,
  sender: _0x4a40df,
  senderNumber: _0x1e39e0,
  botNumber2: _0xfe8055,
  botNumber: _0x976ae2,
  pushname: _0xd2c062,
  isMe: _0x35e46b,
  isOwner: _0x3a838b,
  groupMetadata: _0x3fc67f,
  groupName: _0x5ed16b,
  participants: _0x7a01be,
  groupAdmins: _0x36ab82,
  isBotAdmins: _0x4ebb57,
  isAdmins: _0x4b715a,
  reply: _0x5d8f39
}) => {
  try {
    if (!_0x2b989d) {
      return _0x5d8f39(ONLGROUP);
    }
    if (!_0x4ebb57) {
      return _0x5d8f39(botAdmin);
    }
    if (!_0x4b715a) {
      return _0x5d8f39(ADMIN);
    }
    await _0x36dfc1.groupSettingUpdate(_0x33235a.chat, "not_announcement");
    await _0x36dfc1.sendMessage(_0x518de1, {
      'react': {
        'text': '✅',
        'key': _0x33235a.key
      }
    });
  } catch (_0x534144) {
    _0x5d8f39("🛑 GROUP IS OPEN MY BOT OWNER");
    _0x15e0dd(_0x534144);
  }
});
cmd({
  'pattern': "promote",
  'react': '📍',
  'desc': "promote admin to a member",
  'category': "group",
  'use': '.promote',
  'filename': __filename
}, async (_0x5c6191, _0x144c4c, _0x4b60be, {
  from: _0x54fa95,
  prefix: _0x4411e6,
  l: _0x558b98,
  quoted: _0x17667f,
  body: _0x292a94,
  isCmd: _0x505a5c,
  command: _0x3e646f,
  args: _0x4c358e,
  q: _0x41e8bc,
  isGroup: _0x53529e,
  sender: _0x3b8a32,
  senderNumber: _0x2aa5e2,
  botNumber2: _0x584515,
  botNumber: _0x1dca35,
  pushname: _0x49acde,
  isMe: _0x52785d,
  isOwner: _0x551640,
  groupMetadata: _0x3188af,
  groupName: _0x37a305,
  participants: _0x53ac40,
  groupAdmins: _0x1f1988,
  isBotAdmins: _0x443fa4,
  isAdmins: _0x966d8d,
  reply: _0x36e52c
}) => {
  try {
    if (!_0x53529e) {
      return _0x36e52c(ONLGROUP);
    }
    if (!_0x443fa4) {
      return _0x36e52c(botAdmin);
    }
    if (!_0x966d8d) {
      return _0x36e52c(ADMIN);
    }
    let _0x1f55b8 = _0x144c4c.mentionedJid ? _0x144c4c.mentionedJid : _0x144c4c.quoted ? _0x144c4c.quoted.sender : _0x41e8bc.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await _0x5c6191.groupParticipantsUpdate(_0x144c4c.chat, [_0x1f55b8], "promote").then(_0x535cbf => _0x36e52c(jsonformat(_0x535cbf)))["catch"](_0x5b607c => _0x36e52c(jsonformat(_0x5b607c)));
    _0x36e52c("🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER");
    await _0x5c6191.sendMessage(_0x54fa95, {
      'react': {
        'text': '✅',
        'key': _0x144c4c.key
      }
    });
  } catch (_0x2f98b3) {
    _0x36e52c("*Done ✓✓*");
    _0x558b98(_0x2f98b3);
  }
});
cmd({
  'pattern': "demote",
  'react': '📍',
  'desc': "demote admin to a member",
  'category': 'group',
  'use': '.demote',
  'filename': __filename
}, async (_0x14200c, _0x372e8e, _0xfd15c1, {
  from: _0x36b851,
  prefix: _0x4aa34b,
  l: _0x11796b,
  quoted: _0x282c7c,
  body: _0x204aac,
  isCmd: _0x429584,
  command: _0x1ae23a,
  args: _0x6e632e,
  q: _0x190566,
  isGroup: _0x5ea22e,
  sender: _0xfb0dae,
  senderNumber: _0x1cc0ee,
  botNumber2: _0x4455f9,
  botNumber: _0x3c2af8,
  pushname: _0x21242e,
  isMe: _0x3a7f2d,
  isOwner: _0x1f948c,
  groupMetadata: _0x327178,
  groupName: _0x5abba5,
  participants: _0x35c416,
  groupAdmins: _0x4b8273,
  isBotAdmins: _0x50be35,
  isAdmins: _0x557375,
  reply: _0x50496e
}) => {
  try {
    if (!_0x5ea22e) {
      return _0x50496e(ONLGROUP);
    }
    if (!_0x50be35) {
      return _0x50496e(botAdmin);
    }
    if (!_0x557375) {
      return _0x50496e(ADMIN);
    }
    let _0x1e16fa = _0x372e8e.mentionedJid ? _0x372e8e.mentionedJid : _0x372e8e.quoted ? _0x372e8e.quoted.sender : _0x190566.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x14200c.groupParticipantsUpdate(_0x372e8e.chat, [_0x1e16fa], "demote").then(_0x121cf3 => _0x50496e(jsonformat(_0x121cf3)))["catch"](_0x2c6466 => _0x50496e(jsonformat(_0x2c6466)));
    _0x50496e("🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER");
    await _0x14200c.sendMessage(_0x36b851, {
      'react': {
        'text': '✅',
        'key': _0x372e8e.key
      }
    });
  } catch (_0x1a5c58) {
    _0x50496e("*Done ✓✓*");
    _0x11796b(_0x1a5c58);
  }
});
cmd({
  'pattern': "remove",
  'desc': "Remove a member from the group.",
  'category': 'group',
  'react': '🚫',
  'filename': __filename
}, async (_0x5388cc, _0x5c0d9e, _0x175638, {
  from: _0x9e748,
  quoted: _0x46b7c4,
  body: _0x2ab5b6,
  isCmd: _0x372f2f,
  command: _0x27c3f8,
  args: _0x591ab4,
  q: _0x23c1d3,
  isGroup: _0x36e374,
  sender: _0x10cde7,
  senderNumber: _0x52a753,
  botNumber2: _0x525950,
  botNumber: _0x59ecc4,
  pushname: _0x173124,
  isMe: _0xc8b8e2,
  isOwner: _0x2e31df,
  groupMetadata: _0x217f15,
  groupName: _0x1c269f,
  participants: _0x3e32b1,
  groupAdmins: _0x4ae59f,
  isBotAdmins: _0x4d02f2,
  isAdmins: _0x28a0e8,
  reply: _0x37ac41
}) => {
  try {
    if (!_0x36e374) {
      return _0x37ac41("This command can only be used in a group.");
    }
    if (!_0x4d02f2) {
      return _0x37ac41("Bot must be an admin to use this command.");
    }
    if (!_0x28a0e8) {
      return _0x37ac41("You must be an admin to use this command.");
    }
    const _0x2c5bf0 = _0x175638.mentioned[0x0] || _0x175638.quoted?.['sender'];
    if (!_0x2c5bf0) {
      return _0x37ac41("Please tag or reply to a user to remove.");
    }
    await _0x5388cc.groupParticipantsUpdate(_0x9e748, [_0x2c5bf0], "remove");
    await _0x37ac41('@' + _0x2c5bf0.split('@')[0x0] + " has been removed from the group.", {
      'mentions': [_0x2c5bf0]
    });
  } catch (_0x2550de) {
    console.log(_0x2550de);
    _0x37ac41('' + _0x2550de);
  }
});
cmd({
  'pattern': 'add',
  'desc': "Add a member to the group.",
  'category': 'group',
  'react': '✅',
  'filename': __filename
}, async (_0x4e583d, _0x367bfc, _0x5505f3, {
  from: _0x5ee52a,
  quoted: _0x8e469c,
  body: _0x3bbc99,
  isCmd: _0x15557f,
  command: _0x1eb283,
  args: _0x227d8f,
  q: _0x98523e,
  isGroup: _0x45dc51,
  sender: _0x43dc95,
  senderNumber: _0x412378,
  botNumber2: _0x505899,
  botNumber: _0x3153c0,
  pushname: _0x15da64,
  isMe: _0x5d7bc4,
  isOwner: _0x5b17e9,
  groupMetadata: _0x50329f,
  groupName: _0x2f6f6a,
  participants: _0x47aabd,
  groupAdmins: _0x466b98,
  isBotAdmins: _0x2f9f8d,
  isAdmins: _0x1c35bd,
  reply: _0x33039a
}) => {
  try {
    if (!_0x45dc51) {
      return _0x33039a("This command can only be used in a group.");
    }
    if (!_0x2f9f8d) {
      return _0x33039a("Bot must be an admin to use this command.");
    }
    if (!_0x1c35bd) {
      return _0x33039a("You must be an admin to use this command.");
    }
    const _0x3ad7c1 = _0x98523e.split(" ")[0x0];
    if (!_0x3ad7c1) {
      return _0x33039a("Please provide a phone number to add.");
    }
    await _0x4e583d.groupParticipantsUpdate(_0x5ee52a, [_0x3ad7c1 + '@s.whatsapp.net'], 'add');
    await _0x33039a('@' + _0x3ad7c1 + " has been added to the group.", {
      'mentions': [_0x3ad7c1 + "@s.whatsapp.net"]
    });
  } catch (_0x1ec6ea) {
    console.log(_0x1ec6ea);
    _0x33039a('' + _0x1ec6ea);
  }
});
cmd({
  'pattern': "groupinfo",
  'desc': "Get information about the group.",
  'category': "group",
  'filename': __filename,
  'react': 'ℹ️'
}, async (_0x23560c, _0x349610, _0x4d7e7c, {
  from: _0x3eb00e,
  isGroup: _0x53db5f,
  groupMetadata: _0x1d1223,
  groupName: _0x296cb3,
  participants: _0x570a3d,
  groupAdmins: _0x12471e,
  reply: _0x82335a
}) => {
  try {
    if (!_0x53db5f) {
      return _0x82335a("This command can only be used in groups.");
    }
    const _0x313cc6 = "*Didula MD V2 💚*\n\n\n📋 *Group Information*\n👥 *Name:* " + _0x296cb3 + "\n📝 *Description:* " + (_0x1d1223.desc || "No description") + "\n🆔 *ID:* " + _0x3eb00e + "\n👑 *Owner:* " + (_0x1d1223.owner || "Not available") + "\n👤 *Members:* " + _0x570a3d.length + "\n👮 *Admins:* " + _0x12471e.length + "\n📅 *Created:* " + new Date(_0x1d1223.creation * 0x3e8).toLocaleString() + "\n\n*Didula MD V2 💚*\n        ";
    _0x82335a(_0x313cc6);
  } catch (_0x2dff07) {
    console.error(_0x2dff07);
    _0x82335a("❌ Error: " + _0x2dff07);
  }
});
cmd({
  'pattern': "tagadmin",
  'alais': ['tagadmins'],
  'react': '🙀',
  'desc': "Tags all the admins in the group.",
  'category': "group",
  'filename': __filename
}, async (_0x1e4593, _0x15f479, _0x29bc11, {
  from: _0x43822d,
  prefix: _0x961e22,
  l: _0x237c8f,
  quoted: _0x124525,
  body: _0x1b4c33,
  isCmd: _0x38e890,
  command: _0x3066a7,
  args: _0x17df1c,
  q: _0x44b21c,
  isGroup: _0x149f67,
  sender: _0x4cd3cd,
  senderNumber: _0x21e4c3,
  botNumber2: _0x1e60b3,
  botNumber: _0x21b2ed,
  pushname: _0x11c8ab,
  isMe: _0x244b6f,
  isOwner: _0x4ebb49,
  groupMetadata: _0xb31378,
  groupName: _0x24a613,
  participants: _0x531074,
  groupAdmins: _0x44394b,
  isBotAdmins: _0xab55b7,
  isAdmins: _0x5f539e,
  reply: _0x51360c
}) => {
  try {
    if (!_0x149f67) {
      return _0x51360c("This command is only for groups.");
    }
    if (!_0x5f539e) {
      return _0x51360c("This command is only for group admin.");
    }
    if (_0x44394b.length === 0x0) {
      return _0x51360c("There are no admins in this group.");
    }
    let _0x4fb6e5 = "*TAGGING ALL ADMINS IN THE GROUP 🔳:*\n\n";
    for (let _0x57d048 of _0x44394b) {
      _0x4fb6e5 += '@' + _0x57d048.split('@')[0x0] + "\n";
    }
    await _0x1e4593.sendMessage(_0x43822d, {
      'text': _0x4fb6e5,
      'mentions': _0x44394b
    }, {
      'quoted': _0x15f479
    });
  } catch (_0x138e70) {
    console.error("Error tagging admins:", _0x138e70);
    _0x51360c("you are not an admin.");
  }
});
cmd({
  'pattern': 'opentime',
  'react': '🔖',
  'desc': "To open group to a time",
  'category': "group",
  'use': '.opentime',
  'filename': __filename
}, async (_0x1e1a2e, _0x46b4ef, _0x3b59e1, {
  from: _0x462dcd,
  prefix: _0x2624e7,
  l: _0x2b0af9,
  quoted: _0x471415,
  body: _0x3795e1,
  isCmd: _0x53afa0,
  command: _0x1139ac,
  args: _0x13adfc,
  q: _0x28b7a5,
  isGroup: _0x5cb81a,
  sender: _0x2d2655,
  senderNumber: _0x8e0ce0,
  botNumber2: _0x40c6e7,
  botNumber: _0x57e72f,
  pushname: _0x9de011,
  isMe: _0x215766,
  isOwner: _0x468eed,
  groupMetadata: _0x58459d,
  groupName: _0x4c4a02,
  participants: _0x1119c0,
  groupAdmins: _0x450182,
  isBotAdmins: _0x4df3ff,
  isAdmins: _0x28397e,
  reply: _0x48e78b
}) => {
  try {
    if (!_0x5cb81a) {
      return _0x48e78b(ONLGROUP);
    }
    if (!_0x28397e) {
      return _0x48e78b(ADMIN);
    }
    if (_0x13adfc[0x1] == "second") {
      var _0x763cc1 = _0x13adfc[0x0] * "1000";
    } else {
      if (_0x13adfc[0x1] == "minute") {
        var _0x763cc1 = _0x13adfc[0x0] * "60000";
      } else {
        if (_0x13adfc[0x1] == "hour") {
          var _0x763cc1 = _0x13adfc[0x0] * "3600000";
        } else {
          if (_0x13adfc[0x1] == "day") {
            var _0x763cc1 = _0x13adfc[0x0] * "86400000";
          } else {
            return _0x48e78b("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
        }
      }
    }
    _0x48e78b("Open time " + _0x28b7a5 + " starting from now");
    setTimeout(() => {
      _0x1e1a2e.groupSettingUpdate(_0x462dcd, 'not_announcement');
      _0x48e78b("*OPEN TIME* THE GROUP WAS OPENED BY AWAIS MD TO APPROVED ADMIN\n NOW MEMBERS CAN SEND MESSAGES 🔓");
    }, _0x763cc1);
    await _0x1e1a2e.sendMessage(_0x462dcd, {
      'react': {
        'text': '✅',
        'key': _0x46b4ef.key
      }
    });
  } catch (_0x3212a0) {
    _0x48e78b("*Error !!*");
    _0x2b0af9(_0x3212a0);
  }
});
cmd({
  'pattern': 'closetime',
  'react': '🔖',
  'desc': "To close group to a time",
  'category': 'group',
  'use': ".closstime",
  'filename': __filename
}, async (_0x314b96, _0x537789, _0x2b4863, {
  from: _0x21404a,
  prefix: _0x110639,
  l: _0x5609e2,
  quoted: _0x4390ea,
  body: _0x58f31d,
  isCmd: _0x3e0fd1,
  command: _0x48735a,
  args: _0x5b5a82,
  q: _0x1209d7,
  isGroup: _0x5c7e57,
  sender: _0x2dc8d2,
  senderNumber: _0x184ce6,
  botNumber2: _0x39b256,
  botNumber: _0x1a515b,
  pushname: _0x1f03d5,
  isMe: _0x35a8c1,
  isOwner: _0x2f8617,
  groupMetadata: _0x574f26,
  groupName: _0x4a383f,
  participants: _0x160d0a,
  groupAdmins: _0x5ef6c8,
  isBotAdmins: _0x320d44,
  isAdmins: _0x2f9855,
  reply: _0xd59358
}) => {
  try {
    if (!_0x5c7e57) {
      return _0xd59358(ONLGROUP);
    }
    if (!_0x2f9855) {
      return _0xd59358(ADMIN);
    }
    if (_0x5b5a82[0x1] == "second") {
      var _0x59f0de = _0x5b5a82[0x0] * "1000";
    } else {
      if (_0x5b5a82[0x1] == "minute") {
        var _0x59f0de = _0x5b5a82[0x0] * "60000";
      } else {
        if (_0x5b5a82[0x1] == "hour") {
          var _0x59f0de = _0x5b5a82[0x0] * '3600000';
        } else {
          if (_0x5b5a82[0x1] == "day") {
            var _0x59f0de = _0x5b5a82[0x0] * "86400000";
          } else {
            return _0xd59358("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
        }
      }
    }
    _0xd59358("Close time " + _0x1209d7 + " starting from now");
    setTimeout(() => {
      _0x314b96.groupSettingUpdate(_0x21404a, 'announcement');
      _0xd59358("*CLOSE TIME* GROUP CLOSED BY AWAIS MD AT APPROVED ADMIN\nNOW ONLY ADMIN CAN SEND MESSAGES 🔐");
    }, _0x59f0de);
    await _0x314b96.sendMessage(_0x21404a, {
      'react': {
        'text': '✅',
        'key': _0x537789.key
      }
    });
  } catch (_0xea588) {
    _0xd59358("*Error !!*");
    _0x5609e2(_0xea588);
  }
});
cmd({
  'pattern': 'kickall',
  'desc': "Kicks all non-admin members from the group.",
  'react': '👏',
  'category': "group",
  'filename': __filename
}, async (_0x5a223d, _0x535463, _0x5119a2, {
  from: _0x435782,
  quoted: _0x56eb85,
  body: _0x2d8012,
  isCmd: _0x1cebf0,
  command: _0x6357eb,
  args: _0x122648,
  q: _0x526764,
  isGroup: _0x27d03b,
  sender: _0x4713cc,
  senderNumber: _0x5af558,
  botNumber2: _0x4aee3a,
  botNumber: _0x358c8c,
  pushname: _0x5c7267,
  isMe: _0x558fb2,
  isOwner: _0x2bbde0,
  groupMetadata: _0x1c67bb,
  groupName: _0x3d016c,
  participants: _0xf93b40,
  groupAdmins: _0x2083c9,
  isBotAdmins: _0x4a951f,
  isAdmins: _0x2eec32,
  reply: _0x4e4166
}) => {
  try {
    if (!_0x2eec32) {
      return _0x4e4166("ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ 💀");
    }
    if (!_0x2bbde0) {
      return _0x4e4166("ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴏᴡɴᴇʀ ᴏꜰ ᴅɪᴅᴜʟᴀ ᴍᴅ");
    }
    if (!_0x27d03b) {
      return _0x4e4166("This command is only for groups.");
    }
    if (!_0x4a951f) {
      return _0x4e4166("I need admin privileges to kick users.");
    }
    const _0x137b06 = _0x1c67bb.participants;
    const _0x71abcd = _0x137b06.filter(_0xc97fa6 => !_0x2083c9.includes(_0xc97fa6.id));
    if (_0x71abcd.length === 0x0) {
      return _0x4e4166("There are no non-admin members to kick.");
    }
    for (let _0x466a55 of _0x71abcd) {
      await _0x5a223d.groupParticipantsUpdate(_0x5119a2.chat, [_0x466a55.id], "remove");
    }
    _0x4e4166("Didula MD V2 💚 Successfully kicked all non-admin members from the group.");
  } catch (_0x55d941) {
    console.error("Error kicking users:", _0x55d941);
    _0x4e4166("An error occurred while trying to kick all members. Please try again.");
  }
});
cmd({
  'pattern': "msginfo",
  'desc': "Get msg info",
  'category': "owner",
  'filename': __filename
}, async (_0x1bcb6b, _0x39446a, _0x4b0061, {
  from: _0x3c95a3,
  quoted: _0x285e56,
  body: _0x5af2a4,
  isCmd: _0x70c784,
  command: _0x16de3f,
  args: _0x10d0ed,
  q: _0x1ed656,
  isGroup: _0x3133d1,
  sender: _0x415489,
  senderNumber: _0x15f136,
  botNumber2: _0x59ca52,
  botNumber: _0x270746,
  pushname: _0x54ad6f,
  isMe: _0x5c88e9,
  isOwner: _0x3afbe1,
  groupMetadata: _0x26cbc3,
  groupName: _0x587d09,
  participants: _0x384ba3,
  groupAdmins: _0x501fd3,
  isBotAdmins: _0x10660c,
  isAdmins: _0x17b77d,
  reply: _0x89d739
}) => {
  try {
    if (!_0x3afbe1) {
      return _0x89d739("*_This is an owner cmd._*");
    }
    let _0x442b39 = _0x4b0061.quoted.sender.replace("@s.whatsapp.net", '');
    let _0x1a6654 = "*DIDULA MD V2 MESSEGE INFO*\n\n*➤ Message ID :* " + _0x4b0061.quoted.id + "\n\n*➤ Message Type :* " + _0x4b0061.quoted.type + "\n\n*➤ Sender Number :* " + _0x442b39 + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
    const _0x1c37eb = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x2d4dc0 = {
      'mentionedJid': [_0x4b0061.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x1c37eb
    };
    const _0x352e96 = {
      'text': _0x1a6654,
      'contextInfo': _0x2d4dc0
    };
    await _0x1bcb6b.sendMessage(_0x3c95a3, _0x352e96, {
      'quoted': _0x39446a
    });
  } catch (_0x4764da) {
    _0x89d739('' + _0x4764da);
  }
});
cmd({
  'pattern': "block",
  'desc': "Block a user.",
  'category': "owner",
  'react': '🚫',
  'filename': __filename
}, async (_0x27eed5, _0xcdf485, _0x5e28b8, {
  from: _0x48157c,
  isOwner: _0x37cea4,
  quoted: _0x1a7b7d,
  reply: _0x59ccfb
}) => {
  if (!_0x37cea4) {
    return _0x59ccfb("❌ owner command !");
  }
  if (!_0x1a7b7d) {
    return _0x59ccfb("❌ Please reply to the user you want to block.");
  }
  const _0x334f4c = _0x1a7b7d.sender;
  try {
    await _0x27eed5.updateBlockStatus(_0x334f4c, "block");
    _0x59ccfb("😑🖕 " + _0x334f4c + " blocked successfully.");
  } catch (_0x32b3b2) {
    _0x59ccfb("❌ Error blocking user: " + _0x32b3b2.message);
  }
});
cmd({
  'pattern': "unblock",
  'desc': "Unblock a user.",
  'category': 'owner',
  'react': '✅',
  'filename': __filename
}, async (_0x32f517, _0x29bd4e, _0x28eb5a, {
  from: _0x3b229a,
  isOwner: _0x5a7134,
  quoted: _0x1026f3,
  reply: _0x113a8c
}) => {
  if (!_0x5a7134) {
    return _0x113a8c("❌ You are not the owner!");
  }
  if (!_0x1026f3) {
    return _0x113a8c("❌ Please reply to the user you want to unblock.");
  }
  const _0x2336cc = _0x1026f3.sender;
  try {
    await _0x32f517.updateBlockStatus(_0x2336cc, "unblock");
    _0x113a8c("✅ User " + _0x2336cc + " unblocked successfully.");
  } catch (_0x56a067) {
    _0x113a8c("❌ Error unblocking user: " + _0x56a067.message);
  }
});
cmd({
  'pattern': 'clearchats',
  'desc': "Clear all chats from the bot.",
  'category': 'owner',
  'react': '🧹',
  'filename': __filename
}, async (_0x560a53, _0x3cc9ca, _0x4df6e9, {
  from: _0x1bde0a,
  isOwner: _0x1c6a01,
  reply: _0x33d5d0
}) => {
  if (!_0x1c6a01) {
    return _0x33d5d0("❌ You are not the owner!");
  }
  try {
    const _0x1926c8 = _0x560a53.chats.all();
    for (const _0x4acc66 of _0x1926c8) {
      await _0x560a53.modifyChat(_0x4acc66.jid, "delete");
    }
    _0x33d5d0("🧹 All chats cleared successfully!");
  } catch (_0x2c1030) {
    _0x33d5d0("❌ Error clearing chats: " + _0x2c1030.message);
  }
});
cmd({
  'pattern': 'ckcm',
  'desc': "Forward messages",
  'alias': ['fo'],
  'category': "owner",
  'use': ".forward <Jid address>",
  'filename': __filename
}, async (_0x4d37f7, _0x1742b7, _0x5c1553, {
  from: _0xe8892b,
  quoted: _0x1cb0b2,
  q: _0x532f5d,
  isOwner: _0x11ac2b,
  isMe: _0x2988d3,
  reply: _0x378e59
}) => {
  if (!_0x11ac2b & !_0x2988d3) {
    return _0x378e59("*You Are Not Owner Or Bot*");
  }
  if (!_0x532f5d) {
    return _0x378e59("Please provide a target JID address ❌");
  }
  if (!_0x1cb0b2) {
    return _0x378e59("Please reply to a message you want to forward ❌");
  }
  const _0x22a981 = _0x1cb0b2.fakeObj ? _0x1cb0b2.fakeObj : _0x1cb0b2;
  try {
    await _0x4d37f7.sendMessage(_0x532f5d, {
      'forward': _0x22a981
    }, {
      'quoted': _0x1742b7
    });
    return _0x378e59("*Message forwarded successfully to:*\n\n" + _0x532f5d + " ✅");
  } catch (_0x14c0c9) {
    console.error("Error forwarding message:", _0x14c0c9);
    return _0x378e59("Failed to forward the message ❌");
  }
});
cmd({
  'pattern': "restart",
  'desc': "restart the bot",
  'category': "owner",
  'filename': __filename
}, async (_0x31bf83, _0x513d1d, _0x598149, {
  from: _0x30a617,
  quoted: _0x27e418,
  body: _0x441f32,
  isCmd: _0x33252b,
  command: _0x323e82,
  args: _0x32106f,
  q: _0x2f639d,
  isGroup: _0x443f8b,
  sender: _0x1a6775,
  senderNumber: _0xf9600a,
  botNumber2: _0x1754f7,
  botNumber: _0x160074,
  pushname: _0x4e167d,
  isMe: _0x33b563,
  isOwner: _0x1aa2ce,
  groupMetadata: _0x13225f,
  groupName: _0x65dd05,
  participants: _0x30a091,
  groupAdmins: _0x47655d,
  isBotAdmins: _0xc6a80b,
  isAdmins: _0x313389,
  reply: _0x39741a
}) => {
  try {
    const {
      exec: _0x2d9951
    } = require("child_process");
    _0x39741a("Didula MD V2 💚 restarting...");
    await sleep(0x5dc);
    _0x2d9951("pm2 restart all");
  } catch (_0x399e6d) {
    console.log(_0x399e6d);
    _0x39741a('' + _0x399e6d);
  }
});
cmd({
  'pattern': "gjid",
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': "owner",
  'react': '📝',
  'filename': __filename
}, async (_0x2d3f6d, _0x44c171, _0x2642a1, {
  from: _0x57012d,
  isOwner: _0x47d73f,
  reply: _0x509f90
}) => {
  if (!_0x47d73f) {
    return _0x509f90("❌ You are not the owner!");
  }
  const _0x1f72ab = await _0x2d3f6d.groupFetchAllParticipating();
  const _0x56dc55 = Object.keys(_0x1f72ab).join("\n");
  _0x509f90("📝 *Group JIDs:*\n\n" + _0x56dc55);
});
cmd({
  'pattern': "npm",
  'desc': "Get npm info",
  'category': "search",
  'filename': __filename
}, async (_0x14e3a6, _0x5b8364, _0x53f475, {
  from: _0x59aacd,
  quoted: _0x217e85,
  body: _0x5512da,
  isCmd: _0x5327bc,
  command: _0x4c6f35,
  args: _0xac3c54,
  q: _0x55d9df,
  isGroup: _0x17a710,
  sender: _0x1a72ec,
  senderNumber: _0x13eb56,
  botNumber2: _0x3a9ea6,
  botNumber: _0x816f07,
  pushname: _0x15965a,
  isMe: _0x569703,
  isOwner: _0x1d59eb,
  groupMetadata: _0x38a537,
  groupName: _0x24890b,
  participants: _0x48c167,
  groupAdmins: _0x5df015,
  isBotAdmins: _0x5286e3,
  isAdmins: _0x575811,
  reply: _0x26c3f6
}) => {
  try {
    if (!_0x55d9df) {
      return _0x26c3f6("*use  .npm axios*");
    }
    let _0x202ba6 = await axios.get("https://www.npmjs.com/package/" + _0x55d9df);
    let _0x22331a = cheerio.load(_0x202ba6.data);
    const _0x1bbfc1 = _0x22331a("#top > div.w-100.ph0-l.ph3.ph4-m > h2 > span").text().trim();
    const _0x10fbac = _0x22331a("#top > div.w-100.ph0-l.ph3.ph4-m > span:nth-child(2)").text().trim();
    const _0x118c01 = _0x22331a("#top > div.w-100.ph0-l.ph3.ph4-m > span:nth-child(4) > time").text().trim();
    const _0x596e15 = _0x22331a("#repository-link").text().trim();
    let _0x283d61 = "*DIDULA MD NPM INFO_*\n\n*➤ Package :* " + _0x1bbfc1 + "\n\n*➤ Version :* " + _0x10fbac + "\n\n*➤ Published :* " + _0x118c01 + "\n\n*➤ Repository :* " + _0x596e15 + "\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";
    const _0x11ca1d = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x4bd72d = {
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x11ca1d
    };
    const _0x1c31fd = {
      'image': {
        'url': "https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"
      },
      'caption': _0x283d61,
      'contextInfo': _0x4bd72d
    };
    await _0x14e3a6.sendMessage(_0x59aacd, _0x1c31fd, {
      'quoted': _0x5b8364
    });
  } catch (_0x3df474) {
    console.log(_0x3df474);
    _0x26c3f6('' + errrMsg);
  }
});
cmd({
  'pattern': "cineinfo",
  'desc': "cinesubz.co info",
  'category': "search",
  'filename': __filename
}, async (_0x2be1b8, _0x2319f3, _0x425c25, {
  from: _0x5d85bc,
  quoted: _0x3b8852,
  body: _0x4a0749,
  isCmd: _0x420af3,
  command: _0x35d8ac,
  args: _0x4e1949,
  q: _0x421475,
  isGroup: _0x5c574d,
  sender: _0x312790,
  senderNumber: _0x8cfd6,
  botNumber2: _0x10bcb3,
  botNumber: _0x10d75a,
  pushname: _0x354620,
  isMe: _0x3cb50d,
  isOwner: _0x3a5f9c,
  groupMetadata: _0xc68a2f,
  groupName: _0x35d3ae,
  participants: _0x4d7ba2,
  groupAdmins: _0x2a6bbd,
  isBotAdmins: _0x106453,
  isAdmins: _0x53fcec,
  reply: _0x3efc62
}) => {
  try {
    if (!_0x421475) {
      return _0x3efc62("*_Please give me a movie name._*");
    }
    let _0xec5b3a = await axios.get('https://cinesubz.co/?s=' + _0x421475);
    let _0x5b91d0 = cheerio.load(_0xec5b3a.data);
    let _0x172949 = _0x5b91d0("#contenedor > div.module > div.content.rigth.csearch > div > div:nth-child(2) > article > div.details > div.title > a").attr('href');
    if (!_0x172949) {
      let _0x2b1c11 = _0x5b91d0("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2 > span").text();
      return _0x3efc62("No results to show with *" + _0x2b1c11 + '*');
    }
    let _0x29d26b = await axios.get('' + _0x172949);
    _0x5b91d0 = cheerio.load(_0x29d26b.data);
    const _0x12aa8d = _0x5b91d0("#single > div.content.right > div.sheader > div.data > h1").text();
    const _0x5064d8 = _0x5b91d0("#single > div.content.right > div.sheader > div.data > div.extra > span.date").text();
    const _0x38e182 = _0x5b91d0("#single > div.content.right > div.sheader > div.data > div.extra > span.country").text();
    const _0x4e51ff = _0x5b91d0("#single > div.content.right > div.sheader > div.data > div.extra > span.runtime").text();
    const _0x5c8c35 = _0x5b91d0("#repimdb > strong").text();
    const _0x16146e = _0x5b91d0("#cast > div:nth-child(2) > div > div.data > div.name > a").text();
    const _0x44dd66 = _0x5b91d0("#single > div.content.right > div.sheader > div.poster > img").attr("src");
    let _0xe062 = "🍟 *" + _0x12aa8d + "*\n\n🧿 *Release Date :* " + _0x5064d8 + "\n🌍 *Country :* " + _0x38e182 + "\n⏱ *Duration :* " + _0x4e51ff + "\n⭐ *IMDB Rate :* " + _0x5c8c35 + "\n🤵‍♂ *Director :* " + _0x16146e + "\n🖇 *Link :* " + _0x172949 + "\n\n> 👨🏻‍💻 *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*";
    await _0x2be1b8.sendMessage(_0x5d85bc, {
      'image': {
        'url': _0x44dd66
      },
      'caption': _0xe062
    }, {
      'quoted': _0x2319f3
    });
  } catch (_0xdd2b36) {
    console.log(_0xdd2b36);
    _0x3efc62('' + _0xdd2b36);
  }
});
cmd({
  'pattern': "githubstalk",
  'desc': "Fetch detailed GitHub user profile including profile picture.",
  'category': "search",
  'react': '🖥️',
  'filename': __filename
}, async (_0x163c5f, _0x181d5d, _0x4dce43, {
  from: _0x449cdb,
  quoted: _0x367cd1,
  body: _0x1d5141,
  isCmd: _0x3a1e96,
  command: _0x4df04e,
  args: _0x348ca2,
  q: _0x4f4b01,
  isGroup: _0x187a16,
  sender: _0x1aa1a9,
  senderNumber: _0x217680,
  botNumber2: _0x597919,
  botNumber: _0x24a409,
  pushname: _0x3fd8c5,
  isMe: _0x2d2ba7,
  isOwner: _0x3edfd0,
  groupMetadata: _0x1f7e4f,
  groupName: _0x851618,
  participants: _0x16ecc0,
  groupAdmins: _0x1faf9f,
  isBotAdmins: _0x431cf6,
  isAdmins: _0x7906f4,
  reply: _0x648c4b
}) => {
  try {
    const _0x263120 = _0x348ca2[0x0];
    if (!_0x263120) {
      return _0x648c4b("Please provide a GitHub username.");
    }
  } catch (_0x42f7df) {
    console.log(_0x42f7df);
    _0x648c4b("єяяσя ƒєт¢нιηg ∂αтα: " + (_0x42f7df.response ? _0x42f7df.response.data.message : _0x42f7df.message));
  }
});
cmd({
  'pattern': "ipinfo",
  'desc': "Get information about an IP address",
  'use': ".ipinfo <IP_address>",
  'category': "search",
  'filename': __filename
}, async (_0x578a88, _0x4e1b42, _0x24354b, {
  from: _0x2fa1b5,
  reply: _0x303e97,
  q: _0x2a5389
}) => {
  try {
    if (!_0x2a5389) {
      return _0x303e97("⛔ Please provide an IP address!");
    }
    const _0x15001e = "https://BJ-Devs.serv00.net/Ip-Info.php?ip=" + _0x2a5389;
    const _0x4b935f = await axios.get(_0x15001e);
    const _0x3e1a62 = _0x4b935f.data;
    let _0x12f4fe = "🔍 *IP Information:*\n\n";
    _0x12f4fe += "🌐 IP: " + _0x3e1a62.ip + "\n";
    _0x12f4fe += "🌍 Continent: " + _0x3e1a62.continent_name + " (" + _0x3e1a62.continent_code + ")\n";
    _0x12f4fe += "🇨🇳 Country: " + _0x3e1a62.country_name + " (" + _0x3e1a62.country_code2 + ")\n";
    _0x12f4fe += "🏙️ City: " + _0x3e1a62.city + "\n";
    _0x12f4fe += "📍 State/Province: " + _0x3e1a62.state_prov + "\n";
    _0x12f4fe += "📮 Zip Code: " + _0x3e1a62.zipcode + "\n";
    _0x12f4fe += "📏 Latitude: " + _0x3e1a62.latitude + "\n";
    _0x12f4fe += "📏 Longitude: " + _0x3e1a62.longitude + "\n";
    _0x12f4fe += "📞 Calling Code: " + _0x3e1a62.calling_code + "\n";
    _0x12f4fe += "🕒 Time Zone: " + _0x3e1a62.time_zone.name + "\n";
    _0x12f4fe += "💻 ISP: " + _0x3e1a62.isp + "\n";
    _0x12f4fe += "🏳️ Country Flag: " + _0x3e1a62.country_flag + "\n";
    _0x303e97(_0x12f4fe);
  } catch (_0x22bc2e) {
    console.error(_0x22bc2e);
    if (_0x22bc2e.response && _0x22bc2e.response.data) {
      _0x303e97("Error: " + _0x22bc2e.response.data.message);
    } else {
      _0x303e97("An error occurred while fetching IP information. Please try again later.");
    }
  }
});
cmd({
  'pattern': "yts",
  'desc': "Search YouTube videos",
  'use': ".yts <query>",
  'category': "search",
  'filename': __filename
}, async (_0x57bf86, _0x4279b3, _0x2df0b5, {
  from: _0x5115a0,
  q: _0x12151e,
  reply: _0x2cbc77
}) => {
  try {
    if (!_0x12151e) {
      return _0x2cbc77("⛔ Please provide a search query!");
    }
    const _0x40657a = await yts(_0x12151e);
    const _0x31dca8 = _0x40657a.videos.slice(0x0, 0x5);
    if (_0x31dca8.length === 0x0) {
      return _0x2cbc77("No results found.");
    }
    let _0x19776d = "🎥 *YouTube Search Results:*\n\n";
    _0x31dca8.forEach((_0x994321, _0x4d343e) => {
      _0x19776d += _0x4d343e + 0x1 + ". [" + _0x994321.title + '](' + _0x994321.url + ") - " + _0x994321.author.name + "\n";
    });
    _0x2cbc77(_0x19776d);
  } catch (_0xf871cc) {
    console.error(_0xf871cc);
    _0x2cbc77("Error: " + _0xf871cc.message);
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
}, async (_0x2b4ac9, _0x16355a, _0x5a9786, {
  from: _0x307cdc,
  reply: _0x58e040,
  q: _0x1c4986
}) => {
  try {
    if (!_0x1c4986) {
      return await _0x58e040("Please provide a search query!");
    }
    g_i_s(_0x1c4986, (_0x25b271, _0xee1978) => {
      if (_0x25b271 || !_0xee1978.length) {
        return _0x58e040("No images found!");
      }
      const _0x8692f6 = _0xee1978.slice(0x0, 0x5).map(_0x277d77 => _0x277d77.url);
      _0x8692f6.forEach(async _0x5c9f77 => {
        await _0x2b4ac9.sendMessage(_0x307cdc, {
          'image': {
            'url': _0x5c9f77
          }
        }, {
          'quoted': _0x16355a
        });
      });
    });
  } catch (_0x5dc8f8) {
    console.error(_0x5dc8f8);
    _0x58e040("An error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': 'search',
  'alias': ["websearch"],
  'react': '🌐',
  'desc': "Search the web for information",
  'category': 'search',
  'use': ".search <query>",
  'filename': __filename
}, async (_0x3b63b9, _0x57464c, _0x6b4622, {
  from: _0x1022b6,
  reply: _0x535157,
  q: _0x2e1d19
}) => {
  try {
    if (!_0x2e1d19) {
      return await _0x535157("Please provide a search query!");
    }
    const _0x3d24e2 = await search_web(_0x2e1d19);
    await _0x535157(_0x3d24e2);
  } catch (_0x38be39) {
    console.error(_0x38be39);
    _0x535157("An error occurred while searching. Please try again later.");
  }
});
cmd({
  'pattern': "getpic",
  'desc': "Get the group profile picture.",
  'category': 'search',
  'react': "🖼️",
  'filename': __filename
}, async (_0x15cd5c, _0x274f73, _0x2e8945, {
  from: _0x5b0d85,
  quoted: _0xf9a757,
  body: _0x576647,
  isCmd: _0x1279ef,
  command: _0x5575f3,
  args: _0x3e98e2,
  q: _0x193081,
  isGroup: _0x3bb810,
  sender: _0x5eb652,
  senderNumber: _0x463ed9,
  botNumber2: _0x327476,
  botNumber: _0x4eaa32,
  pushname: _0x319502,
  isMe: _0xa61ef4,
  isOwner: _0x350889,
  groupMetadata: _0x12ed49,
  groupName: _0x2695be,
  participants: _0x3856f7,
  groupAdmins: _0xc98b1c,
  isBotAdmins: _0x2aea80,
  isAdmins: _0x250c9a,
  reply: _0x3f2eb7
}) => {
  try {
    if (!_0x3bb810) {
      return _0x3f2eb7("This command can only be used in a group.");
    }
    const _0x31b16b = await _0x15cd5c.getProfilePicture(_0x5b0d85);
    await _0x15cd5c.sendMessage(_0x5b0d85, {
      'image': {
        'url': _0x31b16b
      },
      'caption': "Group Profile Picture"
    });
  } catch (_0x51b58a) {
    console.log(_0x51b58a);
    _0x3f2eb7('' + _0x51b58a);
  }
});
cmd({
  'pattern': 'vv',
  'alias': ["retrive", "viewonce"],
  'desc': "Fetch and resend a ViewOnce message content (image/video/voice).",
  'category': "misc",
  'use': "<query>",
  'filename': __filename
}, async (_0x49ab06, _0x4f7c39, _0x85fd97, {
  from: _0x37d65e,
  reply: _0x592b8f
}) => {
  try {
    const _0x291080 = _0x85fd97.msg.contextInfo.quotedMessage;
    if (_0x291080 && _0x291080.viewOnceMessageV2) {
      const _0x160128 = _0x291080.viewOnceMessageV2;
      if (_0x160128.message.imageMessage) {
        let _0xb697c7 = _0x160128.message.imageMessage.caption;
        let _0xa9859e = await _0x49ab06.downloadAndSaveMediaMessage(_0x160128.message.imageMessage);
        return _0x49ab06.sendMessage(_0x37d65e, {
          'image': {
            'url': _0xa9859e
          },
          'caption': _0xb697c7
        }, {
          'quoted': _0x4f7c39
        });
      }
      if (_0x160128.message.videoMessage) {
        let _0x4b48e8 = _0x160128.message.videoMessage.caption;
        let _0x419e73 = await _0x49ab06.downloadAndSaveMediaMessage(_0x160128.message.videoMessage);
        return _0x49ab06.sendMessage(_0x37d65e, {
          'video': {
            'url': _0x419e73
          },
          'caption': _0x4b48e8
        }, {
          'quoted': _0x4f7c39
        });
      }
      if (_0x160128.message.audioMessage) {
        let _0x152046 = await _0x49ab06.downloadAndSaveMediaMessage(_0x160128.message.audioMessage);
        return _0x49ab06.sendMessage(_0x37d65e, {
          'audio': {
            'url': _0x152046
          }
        }, {
          'quoted': _0x4f7c39
        });
      }
    }
    if (!_0x85fd97.quoted) {
      return _0x592b8f("Please reply to a ViewOnce message.");
    }
    if (_0x85fd97.quoted.mtype === "viewOnceMessage") {
      if (_0x85fd97.quoted.message.imageMessage) {
        let _0x42ad95 = _0x85fd97.quoted.message.imageMessage.caption;
        let _0x5f034e = await _0x49ab06.downloadAndSaveMediaMessage(_0x85fd97.quoted.message.imageMessage);
        return _0x49ab06.sendMessage(_0x37d65e, {
          'image': {
            'url': _0x5f034e
          },
          'caption': _0x42ad95
        }, {
          'quoted': _0x4f7c39
        });
      } else {
        if (_0x85fd97.quoted.message.videoMessage) {
          let _0x408d73 = _0x85fd97.quoted.message.videoMessage.caption;
          let _0x5b898d = await _0x49ab06.downloadAndSaveMediaMessage(_0x85fd97.quoted.message.videoMessage);
          return _0x49ab06.sendMessage(_0x37d65e, {
            'video': {
              'url': _0x5b898d
            },
            'caption': _0x408d73
          }, {
            'quoted': _0x4f7c39
          });
        }
      }
    } else {
      if (_0x85fd97.quoted.message.audioMessage) {
        let _0x22df0d = await _0x49ab06.downloadAndSaveMediaMessage(_0x85fd97.quoted.message.audioMessage);
        return _0x49ab06.sendMessage(_0x37d65e, {
          'audio': {
            'url': _0x22df0d
          }
        }, {
          'quoted': _0x4f7c39
        });
      } else {
        return _0x592b8f("> *This is not a ViewOnce message.*");
      }
    }
  } catch (_0x36b0a3) {
    console.log("Error:", _0x36b0a3);
    _0x592b8f("An error occurred while fetching the ViewOnce message.");
  }
});
const {
  screenshotV3
} = require("getscreenshot.js");
cmd({
  'pattern': 'ss',
  'desc': "Get screenshots",
  'category': "other",
  'filename': __filename
}, async (_0x46de87, _0x63567a, _0x5a551c, {
  from: _0x235fb1,
  quoted: _0x4b788e,
  body: _0x56c858,
  isCmd: _0x348dd4,
  command: _0x24f19f,
  args: _0x3667be,
  q: _0x51f1ae,
  isGroup: _0x45c636,
  sender: _0x296b06,
  senderNumber: _0x4bc7ab,
  botNumber2: _0x21e8b6,
  botNumber: _0x53379f,
  pushname: _0x5322a8,
  isMe: _0x3eb234,
  isOwner: _0x1c3b9a,
  groupMetadata: _0x52e8b0,
  groupName: _0x441329,
  participants: _0x1efb4d,
  groupAdmins: _0x37c6ae,
  isBotAdmins: _0x1a28e8,
  isAdmins: _0x20a882,
  reply: _0x3ebad8
}) => {
  try {
    if (!_0x51f1ae.startsWith("https://")) {
      return _0x3ebad8("*_Please give me a url to get screenshot._*");
    }
    let _0x3e6d94 = await screenshotV3(_0x51f1ae);
    await _0x46de87.sendMessage(_0x235fb1, {
      'image': {
        'url': _0x3e6d94
      },
      'caption': "> Didula MD V2"
    }, {
      'quoted': _0x63567a
    });
  } catch (_0x2b2d31) {
    console.log(_0x2b2d31);
    _0x3ebad8('' + _0x2b2d31);
  }
});
cmd({
  'pattern': "dog",
  'desc': "Fetch a random dog image.",
  'category': "other",
  'react': '🐶',
  'filename': __filename
}, async (_0x32c469, _0x5d3aad, _0x24a55f, {
  from: _0x2f8e1a,
  quoted: _0x432155,
  body: _0x54d1db,
  isCmd: _0x84e567,
  command: _0x4f2ebe,
  args: _0x537d23,
  q: _0xc597e1,
  isGroup: _0x3d2532,
  sender: _0x2e0f44,
  senderNumber: _0x511aa9,
  botNumber2: _0x5d7f76,
  botNumber: _0x51af2d,
  pushname: _0x36429c,
  isMe: _0x5a2ea9,
  isOwner: _0x48d361,
  groupMetadata: _0x2de03f,
  groupName: _0x37a032,
  participants: _0x3bb021,
  groupAdmins: _0x5666da,
  isBotAdmins: _0x4fca5e,
  isAdmins: _0x4b0ee0,
  reply: _0x46f844
}) => {
  try {
    const _0xe70126 = await axios.get('https://dog.ceo/api/breeds/image/random');
    const _0x3fae7b = _0xe70126.data;
    await _0x32c469.sendMessage(_0x2f8e1a, {
      'image': {
        'url': _0x3fae7b.message
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5d3aad
    });
  } catch (_0x1a17cf) {
    console.log(_0x1a17cf);
    _0x46f844("Error fetching dog image: " + _0x1a17cf.message);
  }
});
cmd({
  'pattern': "animeboy",
  'desc': "Fetch a random anime boy image.",
  'category': "other",
  'react': '❤️',
  'filename': __filename
}, async (_0xc2be6e, _0x5dc71e, _0x820a33, {
  from: _0x582bc3,
  quoted: _0x3feb19,
  body: _0x3e5fb8,
  isCmd: _0x45a6d8,
  command: _0x2fe244,
  args: _0x3a921e,
  q: _0x2b4a1f,
  isGroup: _0x18f4f9,
  sender: _0x228d93,
  senderNumber: _0xb0a58c,
  botNumber2: _0x57dcc8,
  botNumber: _0xf87783,
  pushname: _0x8a39d1,
  isMe: _0x55939a,
  isOwner: _0x293a9d,
  groupMetadata: _0x14bc88,
  groupName: _0x26fb01,
  participants: _0x121196,
  groupAdmins: _0x8d4506,
  isBotAdmins: _0x44bc72,
  isAdmins: _0x52b131,
  reply: _0xd49c99
}) => {
  try {
    const _0x952bf5 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x52f23e = _0x952bf5.data;
    await _0xc2be6e.sendMessage(_0x582bc3, {
      'image': {
        'url': _0x52f23e.url
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5dc71e
    });
  } catch (_0x4f2021) {
    console.log(_0x4f2021);
    _0xd49c99("*Error Fetching Anime Boy image*: " + _0x4f2021.message);
  }
});
cmd({
  'pattern': "weather",
  'desc': "🌤 Get weather information for a location",
  'react': "🌥️",
  'category': 'other',
  'filename': __filename
}, async (_0x38f95b, _0x5ab0c2, _0x579447, {
  from: _0x94b751,
  q: _0x4045a4,
  reply: _0x12416a
}) => {
  try {
    if (!_0x4045a4) {
      return _0x12416a("❗ Please provide a city name..Usage: .weather [city name]");
    }
    const _0xf53da6 = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x4045a4 + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x2970ed = await axios.get(_0xf53da6);
    const _0x235746 = _0x2970ed.data;
    const _0x129448 = "\n🌍 *Weather Information for " + _0x235746.name + ", " + _0x235746.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x235746.main.temp + "°C\n\n🌡️ *Feels Like*: " + _0x235746.main.feels_like + "°C\n\n🌡️ *Min Temp*: " + _0x235746.main.temp_min + "°C\n\n🌡️ *Max Temp*: " + _0x235746.main.temp_max + "°C\n\n💧 *Humidity*: " + _0x235746.main.humidity + "%\n\n☁️ *Weather*: " + _0x235746.weather[0x0].main + "\n\n🌫️ *Description*: " + _0x235746.weather[0x0].description + "\n\n💨 *Wind Speed*: " + _0x235746.wind.speed + " m/s\n\n📌 *Pressure*: " + _0x235746.main.pressure + " hPa\n\n> *◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*\n";
    return _0x12416a(_0x129448);
  } catch (_0x4f7de9) {
    console.log(_0x4f7de9);
    if (_0x4f7de9.response && _0x4f7de9.response.status === 0x194) {
      return _0x12416a("🚫 ¢ιту ησт ƒσυη∂. ρℓєαѕє ¢нє¢к тнє ѕρєℓℓιηg αη∂ тяу αgαιη.");
    }
    return _0x12416a("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': 'animegirl',
  'desc': "Fetch a random anime girl image.",
  'category': 'other',
  'react': '👧',
  'filename': __filename
}, async (_0x3c9cd6, _0x37b23d, _0x3bf05c, {
  from: _0x17ceda,
  quoted: _0x2c4f77,
  body: _0x5364bf,
  isCmd: _0x208b28,
  command: _0xf077b5,
  args: _0x2ecdbf,
  q: _0x31604f,
  isGroup: _0x3dd18e,
  sender: _0x1bd23b,
  senderNumber: _0x5ea7e3,
  botNumber2: _0x511feb,
  botNumber: _0x152ccc,
  pushname: _0x3223dc,
  isMe: _0x3e066e,
  isOwner: _0x17c3df,
  groupMetadata: _0x8f909e,
  groupName: _0x2061c9,
  participants: _0x2ab677,
  groupAdmins: _0x4baf2d,
  isBotAdmins: _0xc61718,
  isAdmins: _0x13a10d,
  reply: _0x5c7622
}) => {
  try {
    const _0x54ae95 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0xd6f513 = _0x54ae95.data;
    await _0x3c9cd6.sendMessage(_0x17ceda, {
      'image': {
        'url': _0xd6f513.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x37b23d
    });
  } catch (_0x3a25f1) {
    console.log(_0x3a25f1);
    _0x5c7622("*Error Fetching Anime Girl image*: " + _0x3a25f1.message);
  }
});
cmd({
  'pattern': "animegirl2",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x3e728f, _0x309791, _0x1aa38b, {
  from: _0x50333b,
  quoted: _0x11b73d,
  body: _0x213696,
  isCmd: _0x2ff862,
  command: _0x806428,
  args: _0x33b133,
  q: _0x172fa2,
  isGroup: _0x53f739,
  sender: _0x336a52,
  senderNumber: _0x437b5d,
  botNumber2: _0x2a12c3,
  botNumber: _0x51df96,
  pushname: _0x3db66c,
  isMe: _0x591d40,
  isOwner: _0x1264ef,
  groupMetadata: _0xc2e1ed,
  groupName: _0x57dd8a,
  participants: _0x1979f9,
  groupAdmins: _0x22cd4c,
  isBotAdmins: _0x376c10,
  isAdmins: _0x29a20e,
  reply: _0x17c3a3
}) => {
  try {
    const _0x3be12c = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x349c76 = _0x3be12c.data;
    await _0x3e728f.sendMessage(_0x50333b, {
      'image': {
        'url': _0x349c76.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x309791
    });
  } catch (_0x33cfe4) {
    console.log(_0x33cfe4);
    _0x17c3a3("*Error Fetching Anime Girl image*: " + _0x33cfe4.message);
  }
});
cmd({
  'pattern': "animegirl3",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x42dfa5, _0x36725c, _0x370924, {
  from: _0x5d1e7c,
  quoted: _0x357c27,
  body: _0x1a7c0d,
  isCmd: _0x1b4376,
  command: _0x4c3b0c,
  args: _0x4512be,
  q: _0x518f26,
  isGroup: _0xd20589,
  sender: _0x38a340,
  senderNumber: _0x229913,
  botNumber2: _0x4ef43c,
  botNumber: _0x927d89,
  pushname: _0x19266d,
  isMe: _0x1cf8b1,
  isOwner: _0x2346be,
  groupMetadata: _0x4033a0,
  groupName: _0x5f043f,
  participants: _0x31e83e,
  groupAdmins: _0x82ed98,
  isBotAdmins: _0x378d3c,
  isAdmins: _0x556e66,
  reply: _0xbeb09e
}) => {
  try {
    const _0x10341 = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x1d8cc9 = _0x10341.data;
    await _0x42dfa5.sendMessage(_0x5d1e7c, {
      'image': {
        'url': _0x1d8cc9.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x36725c
    });
  } catch (_0xc8cd5) {
    console.log(_0xc8cd5);
    _0xbeb09e("*Error Fetching Anime Girl image*: " + _0xc8cd5.message);
  }
});
cmd({
  'pattern': "animegirl4",
  'desc': "Fetch a random anime girl image.",
  'category': "other",
  'react': '👧',
  'filename': __filename
}, async (_0x5c40d7, _0x3a3c9c, _0x526f02, {
  from: _0x4d9d16,
  quoted: _0x327c5e,
  body: _0x2b6bae,
  isCmd: _0x5d008d,
  command: _0x22e78b,
  args: _0x4aacb8,
  q: _0x48b5f7,
  isGroup: _0x1bc1a0,
  sender: _0x208d0c,
  senderNumber: _0x20bb8e,
  botNumber2: _0xe80742,
  botNumber: _0x5cfe8d,
  pushname: _0x5ccb09,
  isMe: _0x356400,
  isOwner: _0x1cac54,
  groupMetadata: _0x444ef6,
  groupName: _0x38f309,
  participants: _0x159ed5,
  groupAdmins: _0x383263,
  isBotAdmins: _0x1153bb,
  isAdmins: _0x23a8c8,
  reply: _0x162d83
}) => {
  try {
    const _0x5870c1 = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x1b57ee = _0x5870c1.data;
    await _0x5c40d7.sendMessage(_0x4d9d16, {
      'image': {
        'url': _0x1b57ee.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x3a3c9c
    });
  } catch (_0x2be579) {
    console.log(_0x2be579);
    _0x162d83("*Error Fetching Anime Girl image*: " + _0x2be579.message);
  }
});
cmd({
  'pattern': "animegirl5",
  'desc': "Fetch a random anime girl image.",
  'category': 'other',
  'react': '👧',
  'filename': __filename
}, async (_0x5208f5, _0x21ea8c, _0x37a1d2, {
  from: _0x3d1508,
  quoted: _0x3e75dc,
  body: _0x5ec2aa,
  isCmd: _0x14a95c,
  command: _0xd56c31,
  args: _0x116dd0,
  q: _0x321553,
  isGroup: _0x1e6d4b,
  sender: _0xdcc5fd,
  senderNumber: _0x19e464,
  botNumber2: _0x244d0e,
  botNumber: _0x3a356e,
  pushname: _0x2ed270,
  isMe: _0x186f95,
  isOwner: _0x38ca82,
  groupMetadata: _0x2e929c,
  groupName: _0x4cfe69,
  participants: _0x3cbecb,
  groupAdmins: _0x171e25,
  isBotAdmins: _0x57141f,
  isAdmins: _0x27f5c,
  reply: _0x3ff8a5
}) => {
  try {
    const _0x28cee2 = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x3eb745 = _0x28cee2.data;
    await _0x5208f5.sendMessage(_0x3d1508, {
      'image': {
        'url': _0x3eb745.url
      },
      'caption': "*Didula MD V2 💚*"
    }, {
      'quoted': _0x21ea8c
    });
  } catch (_0x4d9857) {
    console.log(_0x4d9857);
    _0x3ff8a5("*Error Fetching Anime Girl image*: " + _0x4d9857.message);
  }
});
cmd({
  'pattern': "hack",
  'desc': "Displays a dynamic and playful 'Hacking' message for fun.",
  'category': "other",
  'react': '💻',
  'filename': __filename
}, async (_0x2b624c, _0x48e922, _0x4d0c5f, {
  from: _0xb7f7a,
  quoted: _0x371366,
  body: _0x4c1f5d,
  isCmd: _0x61f548,
  command: _0x3cd672,
  args: _0x496f8f,
  q: _0x3f263f,
  isGroup: _0x5d60b8,
  sender: _0x5d0d98,
  senderNumber: _0x519fab,
  botNumber2: _0x2d19bc,
  botNumber: _0xd56785,
  pushname: _0x45b713,
  isMe: _0x3383d9,
  isOwner: _0xb46f9b,
  groupMetadata: _0x2f2fea,
  groupName: _0x1e8f14,
  participants: _0x244d6f,
  groupAdmins: _0x324e20,
  isBotAdmins: _0x35ffb4,
  isAdmins: _0x395d5f,
  reply: _0x50e12e
}) => {
  try {
    const _0x1c5596 = ["💻 *HACK STARTING...* 💻", '', "*Initializing hacking tools...* 🛠️", "*Connecting to remote servers...* 🌐", '', "```[██████████] 10%``` ⏳", "```[███████████████████] 20%``` ⏳", "```[███████████████████████] 30%``` ⏳", "```[██████████████████████████] 40%``` ⏳", "```[███████████████████████████████] 50%``` ⏳", "```[█████████████████████████████████████] 60%``` ⏳", "```[██████████████████████████████████████████] 70%``` ⏳", "```[██████████████████████████████████████████████] 80%``` ⏳", "```[██████████████████████████████████████████████████] 90%``` ⏳", "```[████████████████████████████████████████████████████] 100%``` ✅", '', "🔒 *System Breach: Successful!* 🔓", "🚀 *Command Execution: Complete!* 🎯", '', "*📡 Transmitting data...* 📤", "_🕵️‍♂️ Ensuring stealth..._ 🤫", "*🔧 Finalizing operations...* 🏁", '', "⚠️ *Note:* All actions are for demonstration purposes only.", "⚠️ *Reminder:* Ethical hacking is the only way to ensure security.", '', "> *Didula MD V2 💚 HACKING-COMPLETE ☣*"];
    for (const _0x4dcf69 of _0x1c5596) {
      await _0x2b624c.sendMessage(_0xb7f7a, {
        'text': _0x4dcf69
      }, {
        'quoted': _0x48e922
      });
      await new Promise(_0x564ba4 => setTimeout(_0x564ba4, 0x3e8));
    }
  } catch (_0x548f80) {
    console.log(_0x548f80);
    _0x50e12e("❌ *Error:* " + _0x548f80.message);
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
}, async (_0x39b693, _0x3c7cc4, _0x3cf26e, {
  from: _0x47af29,
  l: _0x53ab63,
  quoted: _0x1b79af,
  body: _0x174653,
  isCmd: _0x3b589f,
  command: _0x29feea,
  args: _0x546427,
  q: _0x5541b8,
  isGroup: _0x141728,
  sender: _0xe996cc,
  senderNumber: _0x4a48a9,
  botNumber2: _0x43dd3b,
  botNumber: _0x26977e,
  pushname: _0x1bf6b9,
  isMe: _0x510fbf,
  isOwner: _0x284a9d,
  groupMetadata: _0x5b273c,
  groupName: _0x3e7527,
  participants: _0x5ebff8,
  groupAdmins: _0x5211d0,
  isBotAdmins: _0x48469c,
  isAdmins: _0x4d7877,
  reply: _0x5a9a86
}) => {
  try {
    if (!_0x5541b8) {
      return await _0x5a9a86("🚩*Please Give Me GitHub Repo URL!*");
    }
    let _0x7117b3 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x7117b3.test(_0x5541b8)) {
      return _0x5a9a86("🚩*Please Give Me Valid GitHub Repo Link!*");
    }
    let [, _0x208703, _0x38b795] = _0x5541b8.match(_0x7117b3) || [];
    _0x38b795 = _0x38b795.replace(/.git$/, '');
    let _0x201f60 = "https://api.github.com/repos/" + _0x208703 + '/' + _0x38b795 + "/zipball";
    let _0x43c5f0 = (await fetch(_0x201f60, {
      'method': "HEAD"
    })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
    await _0x39b693.sendMessage(_0x47af29, {
      'document': {
        'url': _0x201f60
      },
      'mimetype': 'application/zip',
      'fileName': _0x43c5f0,
      'caption': "> *ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ*"
    }, {
      'quoted': _0x3c7cc4
    });
  } catch (_0xad4d18) {
    _0x5a9a86("🚩 *I Can't Find This Repo!*");
    console.log(_0xad4d18);
  }
});
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'desc': "download fb videos",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0x25e137, _0x49311d, _0x3e10a3, {
  from: _0x303c8e,
  quoted: _0x4ea7cc,
  body: _0xd31dad,
  isCmd: _0x368a82,
  command: _0x4d737d,
  args: _0x2d5abe,
  q: _0x580ff7,
  isGroup: _0x5958ef,
  sender: _0xb0b1d3,
  senderNumber: _0x1923ef,
  botNumber2: _0x446ac3,
  botNumber: _0xd103ec,
  pushname: _0x730023,
  isMe: _0x24e614,
  isOwner: _0x2e2a5b,
  groupMetadata: _0x58c7bc,
  groupName: _0x587b4e,
  participants: _0xb16676,
  groupAdmins: _0x4c0657,
  isBotAdmins: _0xfd3d9d,
  isAdmins: _0x5078d7,
  reply: _0x4dd84d
}) => {
  try {
    if (!_0x580ff7 && !_0x580ff7.startsWith('https://')) {
      return _0x4dd84d("Please provide a valid Facebook video URL.");
    }
    let _0x35de2e = await fetchJson("https://vajira-official-api.vercel.app/download/fbdown?url=" + _0x580ff7);
    _0x4dd84d("*Downloading...*");
    await _0x25e137.sendMessage(_0x303c8e, {
      'video': {
        'url': _0x35de2e.result.hd
      },
      'mimetype': "video/mp4",
      'caption': "*Facebook Video Download*\n\nTitle: " + _0x35de2e.result.title + "\nDescription: " + _0x35de2e.result.desc + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
    }, {
      'quoted': _0x49311d
    });
    await _0x25e137.sendMessage(_0x303c8e, {
      'video': {
        'url': _0x35de2e.result.sd
      },
      'mimetype': "video/mp4",
      'caption': "*Facebook Video Download*\n\nTitle: " + _0x35de2e.result.title + "\nDescription: " + _0x35de2e.result.desc + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ"
    }, {
      'quoted': _0x49311d
    });
  } catch (_0x38617c) {
    console.log(_0x38617c);
    _0x4dd84d("Sorry, an error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': "tiktok",
  'alias': ['tt'],
  'desc': "download tt videos",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0x56c7b2, _0xd0d11f, _0x10cf8f, {
  from: _0x1fbee0,
  quoted: _0x4cbdc9,
  body: _0x1da6ac,
  isCmd: _0x418c9b,
  command: _0x17b32a,
  args: _0x3560a9,
  q: _0x60eeb0,
  isGroup: _0xd3fc75,
  sender: _0xd5defe,
  senderNumber: _0x32a58d,
  botNumber2: _0x17c6fd,
  botNumber: _0x4f523a,
  pushname: _0xad150d,
  isMe: _0x11fec8,
  isOwner: _0x4652eb,
  groupMetadata: _0x218149,
  groupName: _0x578b33,
  participants: _0x5af9d3,
  groupAdmins: _0x44de1e,
  isBotAdmins: _0xe031d7,
  isAdmins: _0x3fd01d,
  reply: _0x43a497
}) => {
  try {
    if (!_0x60eeb0 && !_0x60eeb0.startsWith("https://")) {
      return _0x43a497("Please provide a valid TikTok video URL.");
    }
    let _0x5735f4 = await fetchJson("https://vajira-official-api.vercel.app/download/tiktokdl?url=" + _0x60eeb0);
    _0x43a497('*Downloading...*');
    await _0x56c7b2.sendMessage(_0x1fbee0, {
      'video': {
        'url': _0x5735f4.result.nowm
      },
      'mimetype': "video/mp4",
      'caption': "*TikTok Video Download*\n\nTitle: " + _0x5735f4.result.title + "\nCaption: " + _0x5735f4.result.caption + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'thumbnail': await getBuffer(_0x5735f4.result.thumbnail)
    }, {
      'quoted': _0xd0d11f
    });
    await _0x56c7b2.sendMessage(_0x1fbee0, {
      'video': {
        'url': _0x5735f4.result.wm
      },
      'mimetype': "video/mp4",
      'caption': "*TikTok Video Download*\n\nTitle: " + _0x5735f4.result.title + "\nCaption: " + _0x5735f4.result.caption + "\n\n ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'thumbnail': await getBuffer(_0x5735f4.result.thumbnail)
    }, {
      'quoted': _0xd0d11f
    });
    await _0x56c7b2.sendMessage(_0x1fbee0, {
      'audio': {
        'url': _0x5735f4.result.mp3
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0xd0d11f
    });
  } catch (_0x512d7b) {
    console.log(_0x512d7b);
    _0x43a497("Sorry, an error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': "update",
  'desc': "Updates bot system files",
  'category': 'owner',
  'react': '🔄',
  'filename': __filename
}, async (_0x5eb4ad, _0x52db16, _0x3d8779, {
  from: _0x3e03f9,
  reply: _0x1dafcc
}) => {
  try {
    await _0x3d8779.react('⬇️');
    const _0x1c048f = await axios.get("https://raw.githubusercontent.com/itsme-didulabot/Didula-MD-DB/main/Didula%20Md%20V2%20-%20System.js");
    if (_0x1c048f.status !== 0xc8) {
      await _0x3d8779.react('❌');
      return _0x1dafcc("Failed to download update file");
    }
    const _0x7453f = path.join(__dirname, "../plugins/system.js");
    fs.writeFileSync(_0x7453f, _0x1c048f.data);
    await _0x3d8779.react('✅');
    _0x1dafcc("Didula MD V2 updated successfully\n\nplease follow this for more updates https://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f");
  } catch (_0x28e6e2) {
    console.error(_0x28e6e2);
    await _0x3d8779.react('❌');
    _0x1dafcc("Error during update: " + _0x28e6e2.message);
  }
});
cmd({
  'pattern': 'insta',
  'desc': "To download instagram videos.",
  'category': "download",
  'react': '📩',
  'filename': __filename
}, async (_0x253c15, _0x4a084b, _0x49262f, {
  from: _0x1905f6,
  quoted: _0x50a7b9,
  body: _0x2e3eb4,
  isCmd: _0x1698b6,
  command: _0x49a344,
  args: _0x3d9b43,
  q: _0xdbf664,
  isGroup: _0x1829d7,
  sender: _0x372272,
  senderNumber: _0x59c8e7,
  botNumber2: _0xfd0f1f,
  botNumber: _0x19e8ce,
  pushname: _0x14da9d,
  isMe: _0xd273e5,
  isOwner: _0x3bb9b4,
  groupMetadata: _0x3157aa,
  groupName: _0x206cae,
  participants: _0x30d04c,
  groupAdmins: _0x3dbae0,
  isBotAdmins: _0x5a12da,
  isAdmins: _0x37a031,
  reply: _0xe273be
}) => {
  try {
    if (!_0x3d9b43[0x0]) {
      return _0xe273be("*`Please give me a valid instagram link.`*");
    }
    await _0x49262f.react('📥');
    let _0x479a3b;
    try {
      _0x479a3b = await igdl(_0x3d9b43[0x0]);
    } catch (_0x33394e) {
      return _0xe273be("*`Error Obtaning Data.`*");
    }
    let _0x4b36d4 = _0x479a3b.data;
    if (!_0x4b36d4 || _0x4b36d4.length === 0x0) {
      return _0xe273be("*`No results found.`*");
    }
    let _0x4dca21;
    try {
      _0x4dca21 = _0x4b36d4.find(_0x37ec54 => _0x37ec54.resolution === "720p (HD)") || _0x4b36d4.find(_0x4da8d0 => _0x4da8d0.resolution === "360p (SD)");
    } catch (_0xab33a5) {
      return _0xe273be("*`error data loss.`*");
    }
    if (!_0x4dca21) {
      return _0xe273be("*`ησ ∂αтα ƒσυη∂.`*");
    }
    await _0x49262f.react('⚡');
    let _0x245ee4 = _0x4dca21.url;
    try {
      await _0x253c15.sendMessage(_0x49262f.chat, {
        'video': {
          'url': _0x245ee4
        },
        'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*",
        'fileName': "ig.mp4",
        'mimetype': 'video/mp4'
      }, {
        'quoted': _0x49262f
      });
    } catch (_0x593db1) {
      return _0xe273be("*`Error Download Video`*");
      await _0x49262f.react('❌');
    }
  } catch (_0xefad2) {
    console.log(_0xefad2);
    _0xe273be('' + _0xefad2);
  }
});
cmd({
  'pattern': 'dl',
  'react': '📥',
  'alias': ['dlurl'],
  'desc': "Direct link uploader",
  'category': 'download',
  'use': ".dl <link>",
  'filename': __filename
}, async (_0x505d10, _0x123797, _0x1d0fde, {
  from: _0x49adc9,
  quoted: _0x385898,
  body: _0x5727df,
  args: _0x35bef0,
  q: _0x55bdb6,
  reply: _0x3ccebe
}) => {
  try {
    if (!_0x55bdb6) {
      return _0x3ccebe("❗ Please provide a link!");
    }
    const _0x1dc417 = _0x56da9e => {
      try {
        new URL(_0x56da9e);
        return true;
      } catch {
        return false;
      }
    };
    if (!_0x1dc417(_0x55bdb6)) {
      return _0x3ccebe("❌ Invalid URL format! Please check the link.");
    }
    const _0xc6bff7 = require("axios");
    const _0x7d136e = require("mime-types");
    const _0x1fd662 = await _0xc6bff7.get(_0x55bdb6, {
      'responseType': "arraybuffer",
      'timeout': 0x3a98
    });
    const _0x19abac = _0x1fd662.headers["content-type"] || "application/octet-stream";
    const _0x9ad691 = _0x7d136e.extension(_0x19abac) || "unknown";
    const _0x3d7273 = _0x1fd662.headers["content-length"] || 0x0;
    if (_0x3d7273 > 8589934592) {
      return _0x3ccebe("❗ File is too large to upload (limit: 10MB).");
    }
    const _0x3ac9ca = "🎬CK CineMAX🎬." + _0x9ad691;
    await _0x505d10.sendMessage(_0x49adc9, {
      'document': {
        'url': _0x55bdb6
      },
      'caption': "> *🔖 සිංහල උපසිරැසි ඇතුලත් කර ඇත.*\n> 🍧 *720P*\n\n> 👨🏻‍💻 *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*",
      'mimetype': _0x19abac,
      'fileName': _0x3ac9ca
    }, {
      'quoted': _0x123797
    });
  } catch (_0x12e033) {
    console.error(_0x12e033);
    _0x3ccebe("❌ Error: " + _0x12e033.message);
  }
});
cmd({
  'pattern': 'apk',
  'desc': "Downloads Apk",
  'use': ".apk <app_name>",
  'react': '📥',
  'category': "download",
  'filename': __filename
}, async (_0xc3d3e7, _0x29a2a7, _0x2824da, {
  from: _0x222674,
  q: _0x42ce1a,
  reply: _0x3f1daa
}) => {
  const _0x42e45c = _0x42ce1a.trim();
  if (!_0x42e45c) {
    return _0x3f1daa("Please provide an app name");
  }
  _0x3f1daa("_Downloading " + _0x42e45c + '_');
  try {
    const _0x380f30 = await scraper.aptoideDl(_0x42e45c);
    const _0x1be899 = await getBuffer(_0x380f30.link);
    if (!_0x1be899 || !_0x380f30.appname) {
      return await _0xc3d3e7.sendMessage(_0x222674, {
        'react': {
          'text': '❌',
          'key': _0x29a2a7.key
        }
      });
    }
    await _0xc3d3e7.sendMessage(_0x222674, {
      'document': _0x1be899,
      'caption': "*Didula MD V2 💚*",
      'mimetype': "application/vnd.android.package-archive",
      'filename': _0x380f30.appname + ".apk"
    }, {
      'quoted': _0x29a2a7
    });
    await _0xc3d3e7.sendMessage(_0x222674, {
      'react': {
        'text': '✅',
        'key': _0x29a2a7.key
      }
    });
    _0x3f1daa("*_Download Success_*");
  } catch (_0x1ed24d) {
    console.error(_0x1ed24d);
    await _0xc3d3e7.sendMessage(_0x222674, {
      'react': {
        'text': '❌',
        'key': _0x29a2a7.key
      }
    });
    _0x3f1daa("Error: " + _0x1ed24d.message);
  }
});
cmd({
  'pattern': "wallpaper",
  'alias': ["wallpaperdownload"],
  'react': "🖼️",
  'desc': "Download a random wallpaper",
  'category': "download",
  'use': ".wallpaper",
  'filename': __filename
}, async (_0x2048a3, _0x291019, _0x119d5f, {
  from: _0x4c72d5,
  reply: _0x2f20c7
}) => {
  try {
    const {
      data: _0x305a52
    } = await axios.get('https://unsplash.com/s/photos/wallpaper');
    const _0x27579c = cheerio.load(_0x305a52);
    const _0x3c6a8b = [];
    _0x27579c("figure img").each((_0x2ff858, _0x4979b9) => {
      const _0x125ae3 = _0x27579c(_0x4979b9).attr("src");
      _0x3c6a8b.push(_0x125ae3);
    });
    if (_0x3c6a8b.length === 0x0) {
      return await _0x2f20c7("No wallpapers found!");
    }
    const _0x4d8a1e = _0x3c6a8b[Math.floor(Math.random() * _0x3c6a8b.length)];
    await _0x2048a3.sendMessage(_0x4c72d5, {
      'image': {
        'url': _0x4d8a1e
      },
      'caption': "Here is your wallpaper!"
    }, {
      'quoted': _0x291019
    });
  } catch (_0x3bbbaa) {
    console.error(_0x3bbbaa);
    _0x2f20c7("An error occurred while downloading the wallpaper. Please try again later.");
  }
});
cmd({
  'pattern': "anime",
  'desc': "anime the bot",
  'category': 'main',
  'react': '⛱️',
  'filename': __filename
}, async (_0x19382f, _0x5023bb, _0x46b1a7, {
  from: _0x1c0d76,
  quoted: _0x453956,
  body: _0x45b188,
  isCmd: _0xb3f1d2,
  command: _0x301b33,
  args: _0x3e5bff,
  q: _0x3c47dc,
  isGroup: _0x2366bf,
  sender: _0x35f015,
  senderNumber: _0x3e5725,
  botNumber2: _0x24baf6,
  botNumber: _0x48d001,
  pushname: _0x53b538,
  isMe: _0x26f3b0,
  isOwner: _0x241392,
  groupMetadata: _0x17b402,
  groupName: _0x5a74ca,
  participants: _0x3a654d,
  groupAdmins: _0x4bf8dd,
  isBotAdmins: _0x31cc26,
  isAdmins: _0x2abfb7,
  reply: _0x53aca7
}) => {
  try {
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': "https://telegra.ph/file/b26f27aa5daaada031b90.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': "https://telegra.ph/file/51b44e4b086667361061b.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': 'https://telegra.ph/file/7d165d73f914985542537.jpg'
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': 'https://telegra.ph/file/3d9732d2657d2d72dc102.jpg'
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': 'https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg'
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': 'https://telegra.ph/file/7514b18ea89da924e7496.jpg'
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
    await _0x19382f.sendMessage(_0x1c0d76, {
      'image': {
        'url': "https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg"
      },
      'caption': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x5023bb
    });
  } catch (_0x2c7982) {
    console.log(_0x2c7982);
    _0x53aca7('' + _0x2c7982);
  }
});
cmd({
  'pattern': "broadcast",
  'fromMe': true,
  'desc': "📢 Broadcast a message to all chats",
  'category': "main",
  'filename': __filename
}, async (_0x49aae6, _0x591720, _0x5312b0, {
  args: _0x462cba,
  reply: _0x5b38b5
}) => {
  const _0x14f288 = _0x462cba.join(" ");
  if (!_0x14f288) {
    return _0x5b38b5("❗ Please provide a message to broadcast.");
  }
  const _0x48a2dc = await _0x49aae6.getAllChats();
  let _0x53e22e = 0x0;
  for (let _0x19e622 of _0x48a2dc) {
    try {
      await _0x49aae6.sendMessage(_0x19e622.id, {
        'text': "📢 *DIDULA MD V2 💚 BROADCAST MESSAGE*\n\n" + _0x14f288
      });
      _0x53e22e++;
    } catch (_0x2dde1b) {
      console.error("Failed to send broadcast to " + _0x19e622.id + ':', _0x2dde1b);
    }
  }
  _0x5b38b5("✅ Broadcast sent to " + _0x53e22e + " chats successfully!");
});
cmd({
  'pattern': "ban",
  'fromMe': true,
  'desc': "🚫 Ban a user from using the bot",
  'category': "main",
  'filename': __filename
}, async (_0x11e9ea, _0x266b36, _0x2edc0f, {
  args: _0x714fe6,
  reply: _0x50f6a8,
  isOwner: _0x57b5af
}) => {
  if (!_0x57b5af) {
    return _0x50f6a8("❌ You are not the owner!");
  }
  if (!_0x714fe6[0x0]) {
    return _0x50f6a8("❗ Please provide a user's number to ban.");
  }
  const _0x3f77aa = _0x714fe6[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  config.banned.push(_0x3f77aa);
  _0x50f6a8("🚫 User " + _0x714fe6[0x0] + " has been banned from using the bot.");
});
cmd({
  'pattern': "unban",
  'desc': "✅ Unban a user",
  'fromMe': true,
  'category': "main",
  'filename': __filename
}, async (_0x416aa2, _0x5ef954, _0x5ebaee, {
  args: _0x518261,
  reply: _0x6d6e41,
  isOwner: _0x40100c
}) => {
  if (!_0x40100c) {
    return _0x6d6e41("❌ You are not the owner!");
  }
  if (!_0x518261[0x0]) {
    return _0x6d6e41("❗ Please provide a user's number to unban.");
  }
  const _0x26d704 = _0x518261[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  config.banned = config.banned.filter(_0x56b82f => _0x56b82f !== _0x26d704);
  _0x6d6e41("✅ User " + _0x518261[0x0] + " has been unbanned.");
});
cmd({
  'pattern': "setbotname",
  'desc': "✏️ Change the bot's name",
  'fromMe': true,
  'category': "main",
  'filename': __filename
}, async (_0x488f53, _0x161065, _0x29a712, {
  args: _0xa3ad63,
  reply: _0x4b7f0a,
  isOwner: _0x2f3325
}) => {
  if (!_0x2f3325) {
    return _0x4b7f0a("❌ You are not the owner!");
  }
  const _0x396c4 = _0xa3ad63.join(" ");
  if (!_0x396c4) {
    return _0x4b7f0a("❗ Please provide a new name for the bot.");
  }
  await _0x488f53.updateProfileName(_0x396c4);
  _0x4b7f0a("✅ Bot's name has been changed to: *" + _0x396c4 + '*');
});
cmd({
  'pattern': "setbotbio",
  'desc': "✏️ Change the bot's bio",
  'fromMe': true,
  'category': 'main',
  'filename': __filename
}, async (_0x39f192, _0xde743c, _0x4c074e, {
  args: _0x11ffe3,
  reply: _0x302bec,
  isOwner: _0x5c6e32
}) => {
  if (!_0x5c6e32) {
    return _0x302bec("❌ You are not the owner!");
  }
  const _0x1ef55b = _0x11ffe3.join(" ");
  if (!_0x1ef55b) {
    return _0x302bec("❗ Please provide a new bio for the bot.");
  }
  await _0x39f192.updateProfileStatus(_0x1ef55b);
  _0x302bec("✅ Bot's bio has been changed to: *" + _0x1ef55b + '*');
});
cmd({
  'pattern': "setpp",
  'desc': "🖼️ Set bot's profile picture",
  'fromMe': true,
  'category': "main",
  'filename': __filename
}, async (_0xc1d949, _0x18e6b2, _0x2f8184, {
  reply: _0x51b983,
  isOwner: _0x1906fd
}) => {
  if (!_0x1906fd) {
    return _0x51b983("❌ You are not the owner!");
  }
  const _0xcc2f3a = _0x2f8184.message?.['imageMessage'] || _0x2f8184.message?.["videoMessage"];
  if (!_0xcc2f3a || !_0xcc2f3a.url) {
    return _0x51b983("❗ No image or video found.");
  }
  try {
    const _0x455c34 = await _0xc1d949.downloadMediaMessage(_0x2f8184);
    await _0xc1d949.updateProfilePicture(_0x455c34);
    _0x51b983("✅ Profile picture has been updated.");
  } catch (_0x364c6c) {
    console.error("Failed to update profile picture:", _0x364c6c);
    _0x51b983("❗ Failed to update profile picture.");
  }
});
let autoBioInterval;
cmd({
  'pattern': "setautobio",
  'alias': ["autobio"],
  'fromMe': true,
  'desc': "Enable or disable the AutoBIO feature.",
  'category': "main",
  'react': "🛠️",
  'filename': __filename
}, async (_0xd4eeb9, _0x578c86, _0x23b7b0, {
  from: _0x386601,
  isOwner: _0x1e5724,
  reply: _0x11054d
}) => {
  if (!_0x1e5724) {
    return _0x11054d("❌ You are not the owner!");
  }
  config.autoBioEnabled = !config.autoBioEnabled;
  if (config.autoBioEnabled) {
    _0x11054d("🛠️ AutoBIO feature has been *enabled*! 🔄");
    startAutoBio(_0xd4eeb9);
  } else {
    _0x11054d("🛠️ AutoBIO feature has been *disabled*! 🚫");
    stopAutoBio();
  }
});
function startAutoBio(_0x5d0204) {
  if (autoBioInterval) {
    clearInterval(autoBioInterval);
  }
  autoBioInterval = setInterval(async () => {
    await _0x5d0204.updateProfileStatus("Didula MD V2 💚");
  }, 60000);
}
function stopAutoBio() {
  if (autoBioInterval) {
    clearInterval(autoBioInterval);
    autoBioInterval = null;
    console.log("🛠️ AutoBIO feature stopped.");
  }
}
const badWords = ['ꦾ', "~@0~*", 'ꦽ', '᬴', ".@@", "@@@", "\0", 'ြ', 'ી', '𑇂𑆵𑆴𑆿', "𑜦࣯", '⃪݉⃟̸̷'];
cmd({
  'on': "body"
}, async (_0x5cdcab, _0x58bba2, _0x25b495, {
  from: _0x55d760,
  body: _0x47ee4d,
  isGroup: _0x569216,
  isAdmins: _0x17ece6,
  isBotAdmins: _0x2a49be,
  reply: _0x3ab985,
  sender: _0x1cd449
}) => {
  try {
    const _0x460872 = _0x47ee4d.toLowerCase();
    const _0x30c3e8 = badWords.some(_0x195f24 => _0x460872.includes(_0x195f24));
    if (_0x30c3e8) {
      await _0x5cdcab.sendMessage(_0x55d760, {
        'delete': {
          'remoteJid': _0x55d760,
          'fromMe': false,
          'id': _0x58bba2.key.id,
          'participant': _0x1cd449
        }
      });
      await _0x5cdcab.sendMessage(_0x55d760, {
        'text': "⚠️ Your message contained inappropriate content and has been removed. ⚠️"
      }, {
        'quoted': _0x58bba2
      });
      await _0x5cdcab.updateBlockStatus(_0x1cd449, "block");
      if (_0x569216 && _0x2a49be) {
        await _0x5cdcab.groupParticipantsUpdate(_0x55d760, [_0x1cd449], 'remove');
      }
    }
  } catch (_0x1c6783) {
    console.error("Error processing message:", _0x1c6783);
    _0x3ab985("An error occurred while processing your message. Please try again later.");
  }
});
cmd({
  'pattern': 'ping',
  'react': '🤖',
  'alias': ['speed'],
  'desc': "Check bot's ping",
  'category': "main",
  'use': '.ping',
  'filename': __filename
}, async (_0x13de32, _0x148465, _0x4a3311, {
  from: _0x5964d3,
  l: _0x482421,
  quoted: _0x394a7f,
  body: _0x34a6ae,
  isCmd: _0x451c9d,
  command: _0x353e5a,
  args: _0x5ac886,
  q: _0x23942f,
  isGroup: _0x2c716b,
  sender: _0x32cff2,
  senderNumber: _0x5489cb,
  botNumber2: _0x4e0f08,
  botNumber: _0x59c3ec,
  pushname: _0x447406,
  isMe: _0x78d3b0,
  isOwner: _0x1b3516,
  groupMetadata: _0x7dc00a,
  groupName: _0x164d02,
  participants: _0x58190d,
  groupAdmins: _0x344f6c,
  isBotAdmins: _0x31a171,
  isAdmins: _0x30b86a,
  reply: _0x29d9f0
}) => {
  try {
    var _0x17a69e = new Date().getTime();
    let _0x43b93f = await _0x13de32.sendMessage(_0x5964d3, {
      'text': "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*"
    }, {
      'quoted': _0x148465
    });
    var _0x5019f6 = new Date().getTime();
    await _0x13de32.sendMessage(_0x5964d3, {
      'delete': _0x43b93f.key
    });
    return await _0x13de32.sendMessage(_0x5964d3, {
      'text': "*🔥Pong*\n *" + (_0x5019f6 - _0x17a69e) + " ms* "
    }, {
      'quoted': _0x148465
    });
  } catch (_0x2aec75) {
    _0x29d9f0("*Error !!*");
    _0x482421(_0x2aec75);
  }
});
cmd({
  'pattern': "alive",
  'desc': "Check if the bot is alive.",
  'category': "main",
  'react': '✅',
  'filename': __filename
}, async (_0x527466, _0x27a762, _0x335092, {
  from: _0x347497,
  quoted: _0x2c949e,
  reply: _0x2ec37c
}) => {
  try {
    const _0x47a236 = Date.now();
    await new Promise(_0x5aecb0 => setTimeout(_0x5aecb0, 0x1f4));
    const _0xcb7082 = Date.now();
    const _0x73eaec = _0xcb7082 - _0x47a236;
    await _0x527466.sendMessage(_0x347497, {
      'document': {
        'url': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg"
      },
      'fileName': "〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
      'mimetype': "application/pdf",
      'fileLength': 0x5af3107a3fff,
      'image': {
        'url': 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg'
      },
      'pageCount': 0x7e8,
      'caption': "𝗗𝗶𝗱𝘂𝗹𝗮 𝗠𝗗 𝗩𝟮 𝗜𝘀 𝗔𝗹𝗶𝘃𝗲! \n\n⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : " + _0x73eaec + " ms\n\n𝗧𝘆𝗽𝗲   .𝗺𝗲𝗻𝘂 𝗼𝗿 .𝗹𝗶𝘀𝘁 𝗳𝗼𝗿 𝗴𝗲𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀\n\n〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
          'newsletterJid': '120363343196447945@newsletter'
        },
        'externalAdReply': {
          'title': "©〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉",
          'body': " *〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉*",
          'thumbnailUrl': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
          'sourceUrl': "https://wa.me/message/DIDULLTK7ZOGH1",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
  } catch (_0x3d02a5) {
    console.error(_0x3d02a5);
    _0x2ec37c('' + _0x3d02a5);
  }
});
cmd({
  'pattern': "sysinfo",
  'alias': ["system"],
  'react': '🖥️',
  'desc': "Get system information",
  'category': "main",
  'use': ".sysinfo",
  'filename': __filename
}, async (_0x16d7ae, _0x1a8b94, _0x2b267b, {
  from: _0x8011d4,
  reply: _0xcfd2ed
}) => {
  try {
    const _0x46233d = await si.getAllData();
    const _0x1e3d82 = "\n            *Didula MD V2 💚 System Information:*\n            • CPU: " + _0x46233d.cpu.manufacturer + " " + _0x46233d.cpu.brand + "\n            • Cores: " + _0x46233d.cpu.cores + "\n            • RAM: " + (_0x46233d.mem.total / 0x3b9aca00).toFixed(0x2) + " GB\n            • OS: " + _0x46233d.os.distro + " " + _0x46233d.os.release + "\n        ";
    await _0xcfd2ed(_0x1e3d82);
  } catch (_0x5d5758) {
    console.error(_0x5d5758);
    _0xcfd2ed("An error occurred while fetching system information. Please try again later.");
  }
});
cmd({
  'pattern': "downloadmenu",
  'react': '📥',
  'desc': "get cmd list",
  'category': "main",
  'filename': __filename
}, async (_0xb6e028, _0x5d7000, _0x44b84f, {
  from: _0x378c97,
  quoted: _0x2664b3,
  body: _0x53c472,
  isCmd: _0x233b31,
  command: _0x118e10,
  args: _0x1a4ff9,
  q: _0x3b0256,
  isGroup: _0xa9b4cc,
  sender: _0x38e266,
  senderNumber: _0x3d77e7,
  botNumber2: _0x1307b5,
  botNumber: _0x4b8253,
  pushname: _0x12776e,
  isMe: _0x2e2fce,
  isOwner: _0x511bd1,
  groupMetadata: _0x466a4f,
  groupName: _0x212943,
  participants: _0x44bc43,
  groupAdmins: _0x116900,
  isBotAdmins: _0x37e98b,
  isAdmins: _0x35995b,
  reply: _0x158ba4
}) => {
  try {
    let _0x3d4fec = '';
    for (let _0x153747 = 0x0; _0x153747 < commands.length; _0x153747++) {
      if (commands[_0x153747].category === "download" && !commands[_0x153747].dontAddCommandList) {
        _0x3d4fec += "╭━━━〘 📥 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝕊 📥 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x153747].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x153747].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x153747].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    await _0xb6e028.sendMessage(_0x378c97, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x3d4fec
    }, {
      'quoted': _0x5d7000
    });
  } catch (_0x5bdaee) {
    console.error(_0x5bdaee);
    _0x158ba4("An error occurred: " + _0x5bdaee.message);
  }
});
cmd({
  'pattern': "mainmenu",
  'react': '🎯',
  'desc': "get cmd list",
  'category': "main",
  'filename': __filename
}, async (_0x4aff48, _0x2242e2, _0x5437f5, {
  from: _0x4edca1,
  quoted: _0x3b75d3,
  body: _0x38becf,
  isCmd: _0x40d6cd,
  command: _0x1aa35f,
  args: _0x34c51a,
  q: _0x5e5219,
  isGroup: _0x4f60e1,
  sender: _0x2f88c7,
  senderNumber: _0x44257a,
  botNumber2: _0x38b7c5,
  botNumber: _0xb29edd,
  pushname: _0x23f898,
  isMe: _0xecdb66,
  isOwner: _0xcd703e,
  groupMetadata: _0xf53061,
  groupName: _0x2b51c9,
  participants: _0x1f5755,
  groupAdmins: _0x16ec5c,
  isBotAdmins: _0x590f4d,
  isAdmins: _0x182d30,
  reply: _0x5b0fb0
}) => {
  try {
    let _0x177044 = '';
    for (let _0x28bedc = 0x0; _0x28bedc < commands.length; _0x28bedc++) {
      if (commands[_0x28bedc].category === "main" && !commands[_0x28bedc].dontAddCommandList) {
        _0x177044 += "╭━━━〘 🎮 𝕄𝔸𝕀ℕ 𝕄𝔼ℕ𝕌 🎮 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x28bedc].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x28bedc].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x28bedc].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    await _0x4aff48.sendMessage(_0x4edca1, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x177044
    }, {
      'quoted': _0x2242e2
    });
  } catch (_0x56e8ea) {
    console.error(_0x56e8ea);
    _0x5b0fb0("An error occurred: " + _0x56e8ea.message);
  }
});
cmd({
  'pattern': 'groupmenu',
  'react': '👥',
  'desc': "get cmd list",
  'category': "main",
  'filename': __filename
}, async (_0x319b4e, _0x2e8efe, _0x4b009d, {
  from: _0x418ab8,
  quoted: _0x4929ab,
  body: _0x9bb0b4,
  isCmd: _0x584073,
  command: _0x2a476f,
  args: _0x3e4f64,
  q: _0x3733bc,
  isGroup: _0x114203,
  sender: _0x3d3db5,
  senderNumber: _0x34bf94,
  botNumber2: _0x1ba137,
  botNumber: _0xcaeb60,
  pushname: _0x57b4bb,
  isMe: _0x1b5f42,
  isOwner: _0x5aa2e6,
  groupMetadata: _0x18e6d4,
  groupName: _0x3c2ffe,
  participants: _0x142f7b,
  groupAdmins: _0x2b7cd1,
  isBotAdmins: _0x10c685,
  isAdmins: _0x352f3d,
  reply: _0x1cfd55
}) => {
  try {
    let _0x499075 = '';
    for (let _0x1d4626 = 0x0; _0x1d4626 < commands.length; _0x1d4626++) {
      if (commands[_0x1d4626].category === 'group' && !commands[_0x1d4626].dontAddCommandList) {
        _0x499075 += "╭━━━〘 👥 𝔾ℝ𝕆𝕌ℙ𝕊 👥 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x1d4626].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x1d4626].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x1d4626].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    await _0x319b4e.sendMessage(_0x418ab8, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x499075
    }, {
      'quoted': _0x2e8efe
    });
  } catch (_0x4a5040) {
    console.error(_0x4a5040);
    _0x1cfd55("An error occurred: " + _0x4a5040.message);
  }
});
cmd({
  'pattern': "ownermenu",
  'react': '👑',
  'desc': "get cmd list",
  'category': "main",
  'filename': __filename
}, async (_0x8bf961, _0x5db446, _0x1a5215, {
  from: _0x1c85ae,
  quoted: _0x321220,
  body: _0x43331d,
  isCmd: _0x37227f,
  command: _0x1e20dc,
  args: _0x3cee4e,
  q: _0x12b5e8,
  isGroup: _0x2f9888,
  sender: _0x55162f,
  senderNumber: _0xe8c1f4,
  botNumber2: _0x53dad9,
  botNumber: _0x2c3eca,
  pushname: _0x135956,
  isMe: _0x4d6964,
  isOwner: _0x5ad1f9,
  groupMetadata: _0x3e484e,
  groupName: _0x4a2149,
  participants: _0x1ac5a6,
  groupAdmins: _0xa9611a,
  isBotAdmins: _0x34ae3a,
  isAdmins: _0x53c62d,
  reply: _0x763103
}) => {
  try {
    let _0x410eae = '';
    for (let _0x2b7c2c = 0x0; _0x2b7c2c < commands.length; _0x2b7c2c++) {
      if (commands[_0x2b7c2c].category === "owner" && !commands[_0x2b7c2c].dontAddCommandList) {
        _0x410eae += "╭━━━〘 👑 𝕆𝕎ℕ𝔼ℝ 👑 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x2b7c2c].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x2b7c2c].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x2b7c2c].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    await _0x8bf961.sendMessage(_0x1c85ae, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x410eae
    }, {
      'quoted': _0x5db446
    });
  } catch (_0x154821) {
    console.error(_0x154821);
    _0x763103("An error occurred: " + _0x154821.message);
  }
});
cmd({
  'pattern': 'convertmenu',
  'react': '🔄',
  'desc': "get cmd list",
  'category': "main",
  'filename': __filename
}, async (_0x33b806, _0x19a18c, _0x34bace, {
  from: _0x33c47d,
  quoted: _0x5d88cf,
  body: _0x157afe,
  isCmd: _0x1f38e1,
  command: _0x1224e8,
  args: _0x8b1103,
  q: _0x2b373a,
  isGroup: _0x34529b,
  sender: _0x4be05b,
  senderNumber: _0x21d029,
  botNumber2: _0x5e7b3f,
  botNumber: _0x2dc25a,
  pushname: _0x32134c,
  isMe: _0x37361c,
  isOwner: _0xb04d5,
  groupMetadata: _0x30a2d9,
  groupName: _0x411c64,
  participants: _0x23b0ee,
  groupAdmins: _0x22c468,
  isBotAdmins: _0x497fb0,
  isAdmins: _0x3a9e39,
  reply: _0xb026c8
}) => {
  try {
    let _0x1cfdb6 = '';
    for (let _0x4afec2 = 0x0; _0x4afec2 < commands.length; _0x4afec2++) {
      if (commands[_0x4afec2].category === "convert" && !commands[_0x4afec2].dontAddCommandList) {
        _0x1cfdb6 += "╭━━━〘 🔄 ℂ𝕆ℕ𝕍𝔼ℝ𝕋 🔄 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x4afec2].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x4afec2].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x4afec2].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    await _0x33b806.sendMessage(_0x33c47d, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x1cfdb6
    }, {
      'quoted': _0x19a18c
    });
  } catch (_0x50601f) {
    console.error(_0x50601f);
    _0xb026c8("An error occurred: " + _0x50601f.message);
  }
});
cmd({
  'pattern': "searchmenu",
  'react': '🔍',
  'desc': "get cmd list",
  'category': "main",
  'filename': __filename
}, async (_0x278565, _0x42ab8b, _0x2508d7, {
  from: _0xb9c03f,
  quoted: _0x2d45aa,
  body: _0x250fca,
  isCmd: _0x1baa08,
  command: _0x4ac92e,
  args: _0x1977f0,
  q: _0x11abc7,
  isGroup: _0x4ea9cf,
  sender: _0x19d0b9,
  senderNumber: _0x6c2479,
  botNumber2: _0x3127ee,
  botNumber: _0x44dd83,
  pushname: _0x58aabc,
  isMe: _0x23b5b8,
  isOwner: _0x3dad0e,
  groupMetadata: _0xbb92fe,
  groupName: _0x10fa4c,
  participants: _0x92b330,
  groupAdmins: _0x42bda0,
  isBotAdmins: _0x4e1c2d,
  isAdmins: _0x4c29a4,
  reply: _0x33f2e2
}) => {
  try {
    let _0x16e342 = '';
    for (let _0x487ae8 = 0x0; _0x487ae8 < commands.length; _0x487ae8++) {
      if (commands[_0x487ae8].category === "search" && !commands[_0x487ae8].dontAddCommandList) {
        _0x16e342 += "╭━━━〘 🔍 𝕊𝔼𝔸ℝℂℍ 🔍 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x487ae8].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x487ae8].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x487ae8].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    await _0x278565.sendMessage(_0xb9c03f, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x16e342
    }, {
      'quoted': _0x42ab8b
    });
  } catch (_0x44ac2e) {
    console.error(_0x44ac2e);
    _0x33f2e2("An error occurred: " + _0x44ac2e.message);
  }
});
cmd({
  'pattern': "menu",
  'desc': "Check commands.",
  'category': 'main',
  'react': '📜',
  'filename': __filename
}, async (_0x305bf7, _0x260e6e, _0x579095, {
  from: _0x1e5943,
  quoted: _0x557d52,
  reply: _0x10b904
}) => {
  try {
    await _0x305bf7.sendMessage(_0x1e5943, {
      'document': {
        'url': "https://i.ibb.co/tC37Q7B/20241220-122443.jpg"
      },
      'fileName': "🌟 𝔻𝕀𝔻𝕌𝕃𝔸 𝕄𝔻 🌟",
      'mimetype': "application/pdf",
      'fileLength': 0x5af3107a3fff,
      'pageCount': 0x7e8,
      'caption': "╭───────────❀\n│ 🌟 𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔻𝕀𝔻𝕌𝕃𝔸 𝕄𝔻 🌟\n╰───────────❀\n╔══════════✧\n║ 👑 𝕆𝕎ℕ𝔼ℝ: 𝔻𝕀𝔻𝕌𝕃𝔸 ℝ𝔸𝕊ℍ𝕄𝕀𝕂𝔸\n║ 📞 ℕ𝕌𝕄𝔹𝔼ℝ: +94741820962\n║ ⚡ 𝕊ℙ𝔼𝔼𝔻: 000.23\n║ 💾 𝕄𝔼𝕄𝕆ℝ𝕐: 64GB\n╚══════════✧\n\n    ╭─────────❀\n    │ 𝕄𝔼ℕ𝕌 𝕃𝕀𝕊𝕋\n    ╰─────────❀\n\n┃ 📜 .𝚖𝚊𝚒𝚗𝚖𝚎𝚗𝚞\n┃ 🔍 .𝚜𝚎𝚊𝚛𝚌𝚑𝚖𝚎𝚗𝚞\n┃ 👥 .𝚐𝚛𝚘𝚞𝚙𝚖𝚎𝚗𝚞\n┃ 👑 .𝚘𝚠𝚗𝚎𝚛𝚖𝚎𝚗𝚞\n┃ 📥 .𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚖𝚎𝚗𝚞\n┃ 🔄 .𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚖𝚎𝚗𝚞\n┃ 🎯 .𝚘𝚝𝚑𝚎𝚛𝚖𝚎𝚗𝚞\n\n╭━━━〘 ℹ️ 𝔹𝕆𝕋 𝕀ℕ𝔽𝕆 〙\n┃ 👑 𝕆𝕎ℕ𝔼ℝ: 𝔻𝕀𝔻𝕌𝕃𝔸 ℝ𝔸𝕊ℍ𝕄𝕀𝕂𝔸\n┃ 🛠️ 𝔻𝔼𝕍: ℂ𝕐𝔹𝔼ℝ 𝕁𝔸ℕ𝕀𝕐𝔸\n┃ 📞 ℂ𝕆ℕ𝕋𝔸ℂ𝕋: +94741820962\n╰━━━━━━━━━━━━━━━✦",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'externalAdReply': {
          'title': "🌟 𝔻𝕀𝔻𝕌𝕃𝔸 𝕄𝔻 𝔹𝕆𝕋 🌟",
          'body': "✨ 𝕐𝕠𝕦𝕣 𝕌𝕝𝕥𝕚𝕞𝕒𝕥𝕖 𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡 𝔸𝕤𝕤𝕚𝕤𝕥𝕒𝕟𝕥 ✨",
          'thumbnailUrl': 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg',
          'sourceUrl': "https://wa.me/94741820962",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
  } catch (_0x277761) {
    console.error(_0x277761);
    _0x10b904('' + _0x277761);
  }
});
cmd({
  'pattern': "allmenu",
  'alias': ["list"],
  'react': '📜',
  'desc': "Get all commands list.",
  'category': "main",
  'filename': __filename
}, async (_0x5a1377, _0x52447f, _0x235840, {
  from: _0x232e41,
  quoted: _0x1d859f,
  reply: _0x496bdd
}) => {
  try {
    let _0x343816 = '';
    for (let _0x4df2ec = 0x0; _0x4df2ec < commands.length; _0x4df2ec++) {
      if (!commands[_0x4df2ec].dontAddCommandList) {
        _0x343816 += "╭━━━〘 🌟 𝔻𝕀𝔻𝕌𝕃𝔸 𝕄𝔻 🌟 〙\n┃ ❀ ℂ𝕆𝕄𝕄𝔸ℕ𝔻: " + commands[_0x4df2ec].pattern + "\n┃ ❀ 𝔻𝔼𝕊ℂ: " + commands[_0x4df2ec].desc + "\n┃ ❀ 𝕌𝕊𝔸𝔾𝔼: " + commands[_0x4df2ec].use + "\n╰━━━━━━━━━━━━━━━✦\n\n";
      }
    }
    let _0x502ddb = _0x343816 || "No commands available at the moment.";
    await _0x5a1377.sendMessage(_0x232e41, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x502ddb
    }, {
      'quoted': _0x52447f
    });
  } catch (_0x5bda61) {
    console.error(_0x5bda61);
    _0x496bdd("An error occurred: " + _0x5bda61.message);
  }
});
cmd({
  'pattern': 'heartreact',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".heartreact on/off",
  'filename': __filename
}, async (_0x324229, _0x3414d3, _0x2f1eca, {
  from: _0x5a5a83,
  prefix: _0x3a392f,
  l: _0x461b64,
  quoted: _0x9023e5,
  body: _0x523c52,
  isCmd: _0x128429,
  command: _0x2ea413,
  args: _0x2e03bc,
  q: _0xee6992,
  isGroup: _0x3dcb41,
  sender: _0x389d2a,
  senderNumber: _0x465712,
  botNumber2: _0x2f3cc9,
  botNumber: _0xbb8417,
  pushname: _0xf5a699,
  isMe: _0x143ffa,
  isOwner: _0x5c47f6,
  groupMetadata: _0x2e9446,
  groupName: _0x21227b,
  participants: _0x22f0f8,
  groupAdmins: _0x654835,
  isBotAdmins: _0x494dc1,
  isAdmins: _0x21d26d,
  reply: _0x42aaff,
  config: _0x2d259b
}) => {
  try {
    if (!_0x5c47f6) {
      return _0x42aaff("❌ You are not the owner!");
    }
    if (_0xee6992 == 'on') {
      if (_0x2d259b.HEART_REACT == "true") {
        return _0x42aaff("already on ");
      }
      await input_set("HEART_REACT", "true");
      return _0x42aaff("heartreact turned on");
    }
    if (_0xee6992 == "off") {
      if (_0x2d259b.HEART_REACT !== 'true') {
        return _0x42aaff("already off");
      }
      await input_set("HEART_REACT", 'false');
      return _0x42aaff("heartreact turned off");
    }
  } catch (_0x2aecc9) {
    _0x42aaff("*Error !!*");
    _0x461b64(_0x2aecc9);
  }
});
cmd({
  'pattern': "autovoice",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".autovoice on/off",
  'filename': __filename
}, async (_0x41c06d, _0x384122, _0x388307, {
  from: _0x545952,
  prefix: _0x224fa7,
  l: _0x4dc16d,
  quoted: _0x3cc740,
  body: _0x18e5db,
  isCmd: _0x3da738,
  command: _0x21a5df,
  args: _0x225218,
  q: _0x376ecf,
  isGroup: _0x457fda,
  sender: _0x473e44,
  senderNumber: _0x51a3a0,
  botNumber2: _0x4b1a25,
  botNumber: _0x36219c,
  pushname: _0x40a070,
  isMe: _0x1ad00a,
  isOwner: _0x75de87,
  groupMetadata: _0x40160d,
  groupName: _0x12580a,
  participants: _0x517bc3,
  groupAdmins: _0x75c960,
  isBotAdmins: _0x542e84,
  isAdmins: _0x45ad5b,
  reply: _0x10489a,
  config: _0x429086
}) => {
  try {
    if (!_0x75de87) {
      return _0x10489a("❌ You are not the owner!");
    }
    if (_0x376ecf == 'on') {
      if (_0x429086.AUTO_VOICE == "true") {
        return _0x10489a("already on ");
      }
      await input_set("AUTO_VOICE", "true");
      return _0x10489a("autovoice turned on");
    }
    if (_0x376ecf == "off") {
      if (_0x429086.AUTO_VOICE !== 'true') {
        return _0x10489a("already off");
      }
      await input_set('AUTO_VOICE', "false");
      return _0x10489a("autovoice turned off");
    }
  } catch (_0x4d37d2) {
    _0x10489a("*Error !!*");
    _0x4dc16d(_0x4d37d2);
  }
});
cmd({
  'pattern': "autosticker",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autosticmer on/off",
  'filename': __filename
}, async (_0x5d9a67, _0x3fb8e1, _0x4c6d52, {
  from: _0x4a6edd,
  prefix: _0x3388b9,
  l: _0x12b303,
  quoted: _0x35038e,
  body: _0x3e85fa,
  isCmd: _0x5281a2,
  command: _0x265c67,
  args: _0x2fe8f6,
  q: _0x529b1d,
  isGroup: _0x262013,
  sender: _0x22fba5,
  senderNumber: _0x4e6888,
  botNumber2: _0x3b68e5,
  botNumber: _0x592157,
  pushname: _0xda4174,
  isMe: _0x2cc09f,
  isOwner: _0x181e21,
  groupMetadata: _0x1712ea,
  groupName: _0x49f0d2,
  participants: _0x458a13,
  groupAdmins: _0x1ea953,
  isBotAdmins: _0x560be3,
  isAdmins: _0x35e243,
  reply: _0x25512a,
  config: _0x1ca247
}) => {
  try {
    if (!_0x181e21) {
      return _0x25512a("❌ You are not the owner!");
    }
    if (_0x529b1d == 'on') {
      if (_0x1ca247.AUTO_STICKER == "true") {
        return _0x25512a("already on ");
      }
      await input_set("AUTO_STICKER", 'true');
      return _0x25512a("autosticker turned on");
    }
    if (_0x529b1d == "off") {
      if (_0x1ca247.AUTO_STICKER !== "true") {
        return _0x25512a("already off");
      }
      await input_set("AUTO_STICKER", "false");
      return _0x25512a("autosticker turned off");
    }
  } catch (_0x26d1aa) {
    _0x25512a("*Error !!*");
    _0x12b303(_0x26d1aa);
  }
});
cmd({
  'pattern': 'autobio',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autobio on/off",
  'filename': __filename
}, async (_0x52342b, _0x13ea40, _0x574ab1, {
  from: _0x4cc1c4,
  prefix: _0x239302,
  l: _0x18de73,
  quoted: _0x6d7826,
  body: _0x4a12e0,
  isCmd: _0x59e286,
  command: _0x353571,
  args: _0x16e0fd,
  q: _0x1908ab,
  isGroup: _0x587cf9,
  sender: _0x492679,
  senderNumber: _0x16a379,
  botNumber2: _0x24463a,
  botNumber: _0x41e002,
  pushname: _0x23d90d,
  isMe: _0x92453,
  isOwner: _0x5db88e,
  groupMetadata: _0x5f3011,
  groupName: _0x48bbc5,
  participants: _0x19ddc8,
  groupAdmins: _0x2c3e47,
  isBotAdmins: _0x1bd5b6,
  isAdmins: _0x388dfb,
  reply: _0x342ce2,
  config: _0x33239f
}) => {
  try {
    if (!_0x5db88e) {
      return _0x342ce2("❌ You are not the owner!");
    }
    if (_0x1908ab == 'on') {
      if (_0x33239f.AUTO_BIO == "true") {
        return _0x342ce2("already on ");
      }
      await input_set('AUTO_BIO', "true");
      return _0x342ce2("autobio turned on");
    }
    if (_0x1908ab == "off") {
      if (_0x33239f.AUTO_BIO !== 'true') {
        return _0x342ce2("already off");
      }
      await input_set("AUTO_BIO", "false");
      return _0x342ce2("autobio turned off");
    }
  } catch (_0x3e82a9) {
    _0x342ce2("*Error !!*");
    _0x18de73(_0x3e82a9);
  }
});
cmd({
  'pattern': "autowelcome",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autowelcome on/off",
  'filename': __filename
}, async (_0x567221, _0x4e52be, _0x49868a, {
  from: _0x2213b9,
  prefix: _0x1d9b0f,
  l: _0x4e67a5,
  quoted: _0x434646,
  body: _0xeded9e,
  isCmd: _0x5e015d,
  command: _0x5e3eb3,
  args: _0x4feba0,
  q: _0x4e611e,
  isGroup: _0x4fb2d8,
  sender: _0xc16732,
  senderNumber: _0x40bc66,
  botNumber2: _0x4916f6,
  botNumber: _0x1bae85,
  pushname: _0x2cb5a3,
  isMe: _0x2a18c9,
  isOwner: _0x5a4c9b,
  groupMetadata: _0x3e8177,
  groupName: _0x186be9,
  participants: _0x31abcc,
  groupAdmins: _0x52b13d,
  isBotAdmins: _0x1fae30,
  isAdmins: _0x88c063,
  reply: _0xda82b7,
  config: _0x451392
}) => {
  try {
    if (!_0x5a4c9b) {
      return _0xda82b7("❌ You are not the owner!");
    }
    if (_0x4e611e == 'on') {
      if (_0x451392.AUTO_WELCOME == "true") {
        return _0xda82b7("already on ");
      }
      await input_set("AUTO_WELCOME", 'true');
      return _0xda82b7("autowelcome turned on");
    }
    if (_0x4e611e == 'off') {
      if (_0x451392.AUTO_WELCOME !== 'true') {
        return _0xda82b7("already off");
      }
      await input_set("AUTO_WELCOME", 'false');
      return _0xda82b7("autowelcome turned off");
    }
  } catch (_0x2a864e) {
    _0xda82b7("*Error !!*");
    _0x4e67a5(_0x2a864e);
  }
});
cmd({
  'pattern': 'antibot',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".antibot on/off",
  'filename': __filename
}, async (_0x266b31, _0x4849f1, _0x4cdf51, {
  from: _0x3564a3,
  prefix: _0xceb5c5,
  l: _0x522473,
  quoted: _0x5da61b,
  body: _0x18fb0c,
  isCmd: _0x4d77af,
  command: _0x9930eb,
  args: _0x409123,
  q: _0x133f9d,
  isGroup: _0x5b4494,
  sender: _0x24af8e,
  senderNumber: _0x2bec84,
  botNumber2: _0x4ff706,
  botNumber: _0x347654,
  pushname: _0x50b075,
  isMe: _0x5dcf66,
  isOwner: _0x315f8c,
  groupMetadata: _0x24d8b,
  groupName: _0x2ff7b3,
  participants: _0x4215e7,
  groupAdmins: _0x3b19c8,
  isBotAdmins: _0x26a16a,
  isAdmins: _0x1c531b,
  reply: _0x2f2583,
  config: _0x98e8a
}) => {
  try {
    if (!_0x315f8c) {
      return _0x2f2583("❌ You are not the owner!");
    }
    if (_0x133f9d == 'on') {
      if (_0x98e8a.ANTI_BOT == 'true') {
        return _0x2f2583("already on ");
      }
      await input_set("ANTI_BOT", "true");
      return _0x2f2583("antibot turned on");
    }
    if (_0x133f9d == 'off') {
      if (_0x98e8a.ANTI_BOT !== "true") {
        return _0x2f2583("already off");
      }
      await input_set("ANTI_BOT", "false");
      return _0x2f2583("antibot turned off");
    }
  } catch (_0x1f49db) {
    _0x2f2583("*Error !!*");
    _0x522473(_0x1f49db);
  }
});
cmd({
  'pattern': "antilink",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".antilink on/off",
  'filename': __filename
}, async (_0x360188, _0xe52bda, _0x24ca4f, {
  from: _0x3e8e23,
  prefix: _0x5c66f6,
  l: _0x384c02,
  quoted: _0x451570,
  body: _0x5d7931,
  isCmd: _0x7042b2,
  command: _0x4548c4,
  args: _0x3bcb60,
  q: _0x2b66ad,
  isGroup: _0x240b0a,
  sender: _0x2b40f7,
  senderNumber: _0x1e1e23,
  botNumber2: _0xc60f6d,
  botNumber: _0x4c8f56,
  pushname: _0x306445,
  isMe: _0x5ba145,
  isOwner: _0x254ec2,
  groupMetadata: _0x1151f3,
  groupName: _0x58bc6a,
  participants: _0xd7472d,
  groupAdmins: _0x4d8acd,
  isBotAdmins: _0x108b1f,
  isAdmins: _0x369e6a,
  reply: _0x25f4ac,
  config: _0x160e6a
}) => {
  try {
    if (!_0x254ec2) {
      return _0x25f4ac("❌ You are not the owner!");
    }
    if (_0x2b66ad == 'on') {
      if (_0x160e6a.ANTI_LINK == "true") {
        return _0x25f4ac("already on ");
      }
      await input_set("ANTI_LINK", "true");
      return _0x25f4ac("antilink turned on");
    }
    if (_0x2b66ad == "off") {
      if (_0x160e6a.ANTI_LINK !== 'true') {
        return _0x25f4ac("already off");
      }
      await input_set('ANTI_LINK', "false");
      return _0x25f4ac("antilink turned off");
    }
  } catch (_0x5ca9ae) {
    _0x25f4ac("*Error !!*");
    _0x384c02(_0x5ca9ae);
  }
});
cmd({
  'pattern': "antibad",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".antibad on/off",
  'filename': __filename
}, async (_0x1c249c, _0xde9d75, _0x142dad, {
  from: _0x7edf97,
  prefix: _0x5d56e9,
  l: _0x44eb16,
  quoted: _0x325450,
  body: _0x454893,
  isCmd: _0x448058,
  command: _0x49f460,
  args: _0x4bfdf4,
  q: _0x3b962a,
  isGroup: _0x5b773c,
  sender: _0x2a43df,
  senderNumber: _0x54b582,
  botNumber2: _0x2d382a,
  botNumber: _0x3ff582,
  pushname: _0x13bf08,
  isMe: _0x261607,
  isOwner: _0x20fb79,
  groupMetadata: _0x30c5c2,
  groupName: _0x213504,
  participants: _0x3f0d00,
  groupAdmins: _0x6c5f1d,
  isBotAdmins: _0x31cf79,
  isAdmins: _0x17f1e8,
  reply: _0x2962bb,
  config: _0x28343b
}) => {
  try {
    if (!_0x20fb79) {
      return _0x2962bb("❌ You are not the owner!");
    }
    if (_0x3b962a == 'on') {
      if (_0x28343b.ANTI_BAD == "true") {
        return _0x2962bb("already on ");
      }
      await input_set("ANTI_BAD", "true");
      return _0x2962bb("antibad turned on");
    }
    if (_0x3b962a == "off") {
      if (_0x28343b.ANTI_BAD !== 'true') {
        return _0x2962bb("already off");
      }
      await input_set("ANTI_BAD", "false");
      return _0x2962bb("antibad turned off");
    }
  } catch (_0x35ee30) {
    _0x2962bb("*Error !!*");
    _0x44eb16(_0x35ee30);
  }
});
cmd({
  'pattern': "autostatus",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autostatus on/off",
  'filename': __filename
}, async (_0x4d40f9, _0x567730, _0x18dd72, {
  from: _0x19c66d,
  prefix: _0x40de70,
  l: _0xaf7593,
  quoted: _0x155c44,
  body: _0x7e1563,
  isCmd: _0xe737ca,
  command: _0x2f9ef4,
  args: _0x37ee99,
  q: _0x2984fb,
  isGroup: _0x258fe0,
  sender: _0x50cac0,
  senderNumber: _0x7d6be3,
  botNumber2: _0x1f52fc,
  botNumber: _0x2f2a81,
  pushname: _0x3bb852,
  isMe: _0x14ff52,
  isOwner: _0x4da8e5,
  groupMetadata: _0xf235db,
  groupName: _0x2102e6,
  participants: _0x39c4c2,
  groupAdmins: _0x56e2dd,
  isBotAdmins: _0x285631,
  isAdmins: _0x57c4d1,
  reply: _0x37fd5e,
  config: _0x23985c
}) => {
  try {
    if (!_0x4da8e5) {
      return _0x37fd5e("❌ You are not the owner!");
    }
    if (_0x2984fb == 'on') {
      if (_0x23985c.AUTO_READ_STATUS == "true") {
        return _0x37fd5e("already on ");
      }
      await input_set("AUTO_READ_STATUS", "true");
      return _0x37fd5e("autostatus turned on");
    }
    if (_0x2984fb == "off") {
      if (_0x23985c.AUTO_READ_STATUS !== 'true') {
        return _0x37fd5e("already off");
      }
      await input_set("AUTO_READ_STATUS", "false");
      return _0x37fd5e("autostatus turned off");
    }
  } catch (_0x3a3f64) {
    _0x37fd5e("*Error !!*");
    _0xaf7593(_0x3a3f64);
  }
});
cmd({
  'pattern': "autotyping",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autotyping on/off",
  'filename': __filename
}, async (_0x299619, _0x16fb25, _0x488076, {
  from: _0x437504,
  prefix: _0x3dfd4c,
  l: _0x5aedf0,
  quoted: _0x55d3b5,
  body: _0x3c46a6,
  isCmd: _0x40472c,
  command: _0x41ad1a,
  args: _0x3f485e,
  q: _0x4efbff,
  isGroup: _0x360df8,
  sender: _0x4d3356,
  senderNumber: _0x43d1f3,
  botNumber2: _0x241cca,
  botNumber: _0x2672af,
  pushname: _0x362807,
  isMe: _0xb7feff,
  isOwner: _0x42a335,
  groupMetadata: _0x206c78,
  groupName: _0x117937,
  participants: _0x5f5075,
  groupAdmins: _0x12f821,
  isBotAdmins: _0x30f9ec,
  isAdmins: _0x42887a,
  reply: _0x29741c,
  config: _0x1aee11
}) => {
  try {
    if (!_0x42a335) {
      return _0x29741c("❌ You are not the owner!");
    }
    if (_0x4efbff == 'on') {
      if (_0x1aee11.AUTO_TYPING == "true") {
        return _0x29741c("already on ");
      }
      await input_set("AUTO_TYPING", "true");
      return _0x29741c("autotyping turned on");
    }
    if (_0x4efbff == "off") {
      if (_0x1aee11.AUTO_TYPING !== "true") {
        return _0x29741c("already off");
      }
      await input_set("AUTO_TYPING", 'false');
      return _0x29741c("autotyping turned off");
    }
  } catch (_0x832551) {
    _0x29741c("*Error !!*");
    _0x5aedf0(_0x832551);
  }
});
cmd({
  'pattern': "autorecording",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autorecording on/off",
  'filename': __filename
}, async (_0x4a99ad, _0x236ea8, _0x4e64ef, {
  from: _0x619e8e,
  prefix: _0x3e363e,
  l: _0x16c625,
  quoted: _0x14b62c,
  body: _0x4b466c,
  isCmd: _0x2b6cc2,
  command: _0x42a897,
  args: _0x8330c3,
  q: _0x543eed,
  isGroup: _0x3aa2db,
  sender: _0x5b90f5,
  senderNumber: _0x320572,
  botNumber2: _0x48d1fd,
  botNumber: _0x3ba4bf,
  pushname: _0x577675,
  isMe: _0x231628,
  isOwner: _0x391629,
  groupMetadata: _0xba2a8d,
  groupName: _0x20e167,
  participants: _0x73937f,
  groupAdmins: _0x4443da,
  isBotAdmins: _0x5270b2,
  isAdmins: _0x22058c,
  reply: _0x2743f8,
  config: _0x5a6cc0
}) => {
  try {
    if (!_0x391629) {
      return _0x2743f8("❌ You are not the owner!");
    }
    if (_0x543eed == 'on') {
      if (_0x5a6cc0.RECORDING == 'true') {
        return _0x2743f8("already on ");
      }
      await input_set('RECORDING', "true");
      return _0x2743f8("autorecording turned on");
    }
    if (_0x543eed == 'off') {
      if (_0x5a6cc0.RECORDING !== "true") {
        return _0x2743f8("already off");
      }
      await input_set("RECORDING", "false");
      return _0x2743f8("autorecording turned off");
    }
  } catch (_0x1857b7) {
    _0x2743f8("*Error !!*");
    _0x16c625(_0x1857b7);
  }
});
cmd({
  'pattern': "cmdread",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autotyping on/off",
  'filename': __filename
}, async (_0x5b388f, _0x4a40ff, _0x4a7919, {
  from: _0x569007,
  prefix: _0x5907e2,
  l: _0x5269a7,
  quoted: _0x437f92,
  body: _0x167fca,
  isCmd: _0x5ddb8a,
  command: _0x5a310e,
  args: _0x1d4fd4,
  q: _0x45a67b,
  isGroup: _0xd1bf21,
  sender: _0x31c511,
  senderNumber: _0x4dee54,
  botNumber2: _0x4ec3c8,
  botNumber: _0x874f49,
  pushname: _0x5682a5,
  isMe: _0x425b94,
  isOwner: _0x4189e3,
  groupMetadata: _0x5a1dc1,
  groupName: _0x1b673d,
  participants: _0x1b33d4,
  groupAdmins: _0x16dd26,
  isBotAdmins: _0x3f0e7e,
  isAdmins: _0x40828a,
  reply: _0x535166,
  config: _0x5af9ab
}) => {
  try {
    if (!_0x4189e3) {
      return _0x535166("❌ You are not the owner!");
    }
    if (_0x45a67b == 'on') {
      if (_0x5af9ab.READ_CMD == "true") {
        return _0x535166("already on ");
      }
      await input_set("READ_CMD", "true");
      return _0x535166("cmd turned on");
    }
    if (_0x45a67b == "off") {
      if (_0x5af9ab.READ_CMD !== 'true') {
        return _0x535166("already off");
      }
      await input_set("READ_CMD", "false");
      return _0x535166("cmdread turned off");
    }
  } catch (_0x4b2688) {
    _0x535166("*Error !!*");
    _0x5269a7(_0x4b2688);
  }
});
cmd({
  'pattern': "autoreact",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".autoreact on/off",
  'filename': __filename
}, async (_0x3514f6, _0x2deac9, _0x38a7b5, {
  from: _0xdba284,
  prefix: _0x5799df,
  l: _0x48dc1d,
  quoted: _0x2cef70,
  body: _0xc3e23d,
  isCmd: _0xf8bb51,
  command: _0x3b70f3,
  args: _0x292a12,
  q: _0xda9514,
  isGroup: _0x221aed,
  sender: _0x1545a1,
  senderNumber: _0x123412,
  botNumber2: _0x50548b,
  botNumber: _0x481c61,
  pushname: _0x37f7f5,
  isMe: _0x578f44,
  isOwner: _0x513480,
  groupMetadata: _0x1131e3,
  groupName: _0x57d6bb,
  participants: _0xd24b1c,
  groupAdmins: _0x4ebbd4,
  isBotAdmins: _0x4f82aa,
  isAdmins: _0x545eb5,
  reply: _0x1beef8,
  config: _0x5072f1
}) => {
  try {
    if (!_0x513480) {
      return _0x1beef8("❌ You are not the owner!");
    }
    if (_0xda9514 == 'on') {
      if (_0x5072f1.AUTO_REACT == 'true') {
        return _0x1beef8("already on ");
      }
      await input_set("AUTO_REACT", "true");
      return _0x1beef8("autoreact turned on");
    }
    if (_0xda9514 == "off") {
      if (_0x5072f1.AUTO_REACT !== 'true') {
        return _0x1beef8("already off");
      }
      await input_set("AUTO_REACT", "false");
      return _0x1beef8("autoreact turned off");
    }
  } catch (_0x3316df) {
    _0x1beef8("*Error !!*");
    _0x48dc1d(_0x3316df);
  }
});
cmd({
  'pattern': "alwaysonline",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".alwaysonline on/off",
  'filename': __filename
}, async (_0x14f717, _0xf73653, _0x3e4e23, {
  from: _0x1a4ddf,
  prefix: _0xe32744,
  l: _0xeb18c5,
  quoted: _0x3e9dc7,
  body: _0x11ec46,
  isCmd: _0x999778,
  command: _0x5a41c5,
  args: _0x43be38,
  q: _0x4c9f9b,
  isGroup: _0x4ad24b,
  sender: _0x47ebd7,
  senderNumber: _0xb71ae3,
  botNumber2: _0x2ee8f1,
  botNumber: _0x5aa815,
  pushname: _0x5000ab,
  isMe: _0x810e40,
  isOwner: _0x16d8c7,
  groupMetadata: _0x174336,
  groupName: _0x15f696,
  participants: _0x376dfc,
  groupAdmins: _0xc22810,
  isBotAdmins: _0xb729ab,
  isAdmins: _0xced8bd,
  reply: _0x2a3d38,
  config: _0x439064
}) => {
  try {
    if (!_0x16d8c7) {
      return _0x2a3d38("❌ You are not the owner!");
    }
    if (_0x4c9f9b == 'on') {
      if (_0x439064.ALWAYS_ONLINE == "true") {
        return _0x2a3d38("already on ");
      }
      await input_set("ALWAYS_ONLINE", 'true');
      return _0x2a3d38("alwaysonline turned on");
    }
    if (_0x4c9f9b == 'off') {
      if (_0x439064.ALWAYS_ONLINE !== "true") {
        return _0x2a3d38("already off");
      }
      await input_set("ALWAYS_ONLINE", "false");
      return _0x2a3d38("alwaysonline turned off");
    }
  } catch (_0x8c36fc) {
    _0x2a3d38("*Error !!*");
    _0xeb18c5(_0x8c36fc);
  }
});
cmd({
  'pattern': "212block",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".212block on/off",
  'filename': __filename
}, async (_0x3f225b, _0x109274, _0xb288e3, {
  from: _0x3e6a4f,
  prefix: _0x2b34de,
  l: _0x551c86,
  quoted: _0x1310fb,
  body: _0x30029b,
  isCmd: _0x5d0f66,
  command: _0x5d2b76,
  args: _0x2a0693,
  q: _0x3785ae,
  isGroup: _0x9c472c,
  sender: _0x4c6067,
  senderNumber: _0x40e8ee,
  botNumber2: _0x57ffc8,
  botNumber: _0xeed127,
  pushname: _0xd28f54,
  isMe: _0x316935,
  isOwner: _0x5060c2,
  groupMetadata: _0x37bab1,
  groupName: _0x5a434,
  participants: _0x2f26ad,
  groupAdmins: _0x1fa355,
  isBotAdmins: _0x1695b6,
  isAdmins: _0x24ee55,
  reply: _0x59cf9b,
  config: _0x30a6cd
}) => {
  try {
    if (!_0x5060c2) {
      return _0x59cf9b("❌ You are not the owner!");
    }
    if (_0x3785ae == 'on') {
      if (_0x30a6cd.NUMBER_212_BLOCK == "true") {
        return _0x59cf9b("already on ");
      }
      await input_set("NUMBER_212_BLOCK", "true");
      return _0x59cf9b("212block turned on");
    }
    if (_0x3785ae == "off") {
      if (_0x30a6cd.NUMBER_212_BLOCK !== "true") {
        return _0x59cf9b("already off");
      }
      await input_set('NUMBER_212_BLOCK', "false");
      return _0x59cf9b("212block turned off");
    }
  } catch (_0x6e8807) {
    _0x59cf9b("*Error !!*");
    _0x551c86(_0x6e8807);
  }
});
cmd({
  'pattern': "anticall",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".anticall on/off",
  'filename': __filename
}, async (_0x3da12d, _0x17d4a1, _0x2a092f, {
  from: _0x297e8c,
  prefix: _0x151e48,
  l: _0x3c89bb,
  quoted: _0x402d1c,
  body: _0x19e8b7,
  isCmd: _0x61f876,
  command: _0x5ae674,
  args: _0x3ec294,
  q: _0x4d49c4,
  isGroup: _0x56b6f6,
  sender: _0x365b21,
  senderNumber: _0x444f0f,
  botNumber2: _0x23946d,
  botNumber: _0x19685a,
  pushname: _0x1ddac7,
  isMe: _0x24f73d,
  isOwner: _0xd0292b,
  groupMetadata: _0x13d6c4,
  groupName: _0x4871e2,
  participants: _0x4ca8f4,
  groupAdmins: _0x1bf1f0,
  isBotAdmins: _0xacba4b,
  isAdmins: _0x4e04e4,
  reply: _0x14d168,
  config: _0x259153
}) => {
  try {
    if (!_0xd0292b) {
      return _0x14d168("❌ You are not the owner!");
    }
    if (_0x4d49c4 == 'on') {
      if (_0x259153.ANTI_CALL == 'true') {
        return _0x14d168("already on ");
      }
      await input_set('ANTI_CALL', "true");
      return _0x14d168("anticall turned on");
    }
    if (_0x4d49c4 == "off") {
      if (_0x259153.ANTI_CALL !== "true") {
        return _0x14d168("already off");
      }
      await input_set("ANTI_CALL", "false");
      return _0x14d168("anticall turned off");
    }
  } catch (_0x3fa696) {
    _0x14d168("*Error !!*");
    _0x3c89bb(_0x3fa696);
  }
});
cmd({
  'pattern': "antidelete",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".antidelete on/off",
  'filename': __filename
}, async (_0xc43c20, _0x32b889, _0x332d55, {
  from: _0x30f171,
  prefix: _0x84b4f3,
  l: _0x2b194e,
  quoted: _0x5e9060,
  body: _0x3ffd1e,
  isCmd: _0x5069b1,
  command: _0x3184e,
  args: _0x17dac7,
  q: _0x36ced2,
  isGroup: _0x35189c,
  sender: _0x51b052,
  senderNumber: _0x3fe24c,
  botNumber2: _0x29f326,
  botNumber: _0x358aae,
  pushname: _0x12e8b2,
  isMe: _0x253ea2,
  isOwner: _0x2d2074,
  groupMetadata: _0x184fb6,
  groupName: _0x2c5a52,
  participants: _0x2184aa,
  groupAdmins: _0x18026d,
  isBotAdmins: _0x355b7c,
  isAdmins: _0x20c49b,
  reply: _0x211c75,
  config: _0x157342
}) => {
  try {
    if (!_0x2d2074) {
      return _0x211c75("❌ You are not the owner!");
    }
    if (_0x36ced2 == 'on') {
      if (_0x157342.ANTI_DELETE == "true") {
        return _0x211c75("already on ");
      }
      await input_set('ANTI_DELETE', "true");
      return _0x211c75("antidelete turned on");
    }
    if (_0x36ced2 == "off") {
      if (_0x157342.ANTI_DELETE !== 'true') {
        return _0x211c75("already off");
      }
      await input_set("ANTI_DELETE", "false");
      return _0x211c75("antidelete turned off");
    }
  } catch (_0x2d56a5) {
    _0x211c75("*Error !!*");
    _0x2b194e(_0x2d56a5);
  }
});
cmd({
  'pattern': 'aichat',
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".aichat on/off",
  'filename': __filename
}, async (_0x374a65, _0x2285dc, _0x21ac3b, {
  from: _0x798f03,
  prefix: _0x23f0e3,
  l: _0x3e4713,
  quoted: _0x26e7a8,
  body: _0xad10a3,
  isCmd: _0x2d346f,
  command: _0x1126b5,
  args: _0x238ad7,
  q: _0xad83cf,
  isGroup: _0x4ef0d7,
  sender: _0x3ef6a4,
  senderNumber: _0x18f816,
  botNumber2: _0x41b13d,
  botNumber: _0x922d5c,
  pushname: _0x5380f5,
  isMe: _0xdf0e83,
  isOwner: _0x1005a6,
  groupMetadata: _0x17fa4d,
  groupName: _0x32208a,
  participants: _0x4c60ac,
  groupAdmins: _0x144373,
  isBotAdmins: _0x5d6d7d,
  isAdmins: _0x39980d,
  reply: _0x38bdcd,
  config: _0x3ac9b8
}) => {
  try {
    if (!_0x1005a6) {
      return _0x38bdcd("❌ You are not the owner!");
    }
    if (_0xad83cf == 'on') {
      if (_0x3ac9b8.AI_CHAT == "true") {
        return _0x38bdcd("already on ");
      }
      await input_set("AI_CHAT", "true");
      return _0x38bdcd("aichat turned on");
    }
    if (_0xad83cf == "off") {
      if (_0x3ac9b8.AI_CHAT !== 'true') {
        return _0x38bdcd("already off");
      }
      await input_set("AI_CHAT", 'false');
      return _0x38bdcd("aichat turned off");
    }
  } catch (_0x1bed9e) {
    _0x38bdcd("*Error !!*");
    _0x3e4713(_0x1bed9e);
  }
});
cmd({
  'pattern': "autosongsend",
  'react': '🗣️',
  'desc': '',
  'category': '',
  'use': ".autosongsend on/off",
  'filename': __filename
}, async (_0x402257, _0x5650f4, _0x665685, {
  from: _0x367f6b,
  prefix: _0x304514,
  l: _0x10b9e2,
  quoted: _0x36e63b,
  body: _0x5266be,
  isCmd: _0x4ca56d,
  command: _0x24bc38,
  args: _0x6c9d05,
  q: _0x431ed8,
  isGroup: _0x2b533c,
  sender: _0xfb1cf7,
  senderNumber: _0x128b23,
  botNumber2: _0x167cf9,
  botNumber: _0x1479e6,
  pushname: _0x1b209f,
  isMe: _0x30fba6,
  isOwner: _0x5b1eb9,
  groupMetadata: _0x1c20de,
  groupName: _0x410104,
  participants: _0x4e33d1,
  groupAdmins: _0x361cf4,
  isBotAdmins: _0x329ea0,
  isAdmins: _0x8c0083,
  reply: _0x53dae5,
  config: _0x36ec0f
}) => {
  try {
    if (!_0x5b1eb9) {
      return _0x53dae5("❌ You are not the owner!");
    }
    if (_0x431ed8 == 'on') {
      if (_0x36ec0f.AUTO_SONG_SENDER == "true") {
        return _0x53dae5("already on");
      }
      await input_set("AUTO_SONG_SENDER", "true");
      return _0x53dae5("autosongsend turned on");
    }
    if (_0x431ed8 == "off") {
      if (_0x36ec0f.AUTO_SONG_SENDER !== "true") {
        return _0x53dae5("already off");
      }
      await input_set("AUTO_SONG_SENDER", "false");
      return _0x53dae5("autosongsend turned off");
    }
  } catch (_0x3d693f) {
    _0x53dae5("*Error !!*");
    _0x10b9e2(_0x3d693f);
  }
});
cmd({
  'pattern': "mode",
  'react': "🗣️",
  'desc': '',
  'category': '',
  'use': ".mode public/private",
  'filename': __filename
}, async (_0x453e37, _0x5e0df9, _0x401f2b, {
  from: _0x4326d1,
  prefix: _0x1432da,
  l: _0x2feae5,
  quoted: _0x529a07,
  body: _0x584cb,
  isCmd: _0xaf192d,
  command: _0x4c18d8,
  args: _0x4c54ca,
  q: _0x52ee1f,
  isGroup: _0x4b1b08,
  sender: _0x49c98f,
  senderNumber: _0x195ba2,
  botNumber2: _0x151af9,
  botNumber: _0x20addc,
  pushname: _0x331b40,
  isMe: _0x313736,
  isOwner: _0x343663,
  groupMetadata: _0x2be836,
  groupName: _0x58c8d5,
  participants: _0x2e8477,
  groupAdmins: _0x37062d,
  isBotAdmins: _0x119f99,
  isAdmins: _0x54fff9,
  reply: _0x52992e,
  config: _0x515440
}) => {
  try {
    if (!_0x343663) {
      return _0x52992e("❌ You are not the owner!");
    }
    if (_0x52ee1f == "private") {
      if (_0x515440.MODE == "private") {
        return _0x52992e("already private ");
      }
      await input_set("MODE", "private");
      return _0x52992e("private mode turned on");
    }
    if (_0x52ee1f == "public") {
      if (_0x515440.MODE !== "public") {
        return _0x52992e("already public");
      }
      await input_set("MODE", "public");
      return _0x52992e("public mode turned off");
    }
    if (_0x52ee1f == 'inbox') {
      if (_0x515440.MODE !== "inbox") {
        return _0x52992e("already inbox");
      }
      await input_set("MODE", 'inbox');
      return _0x52992e("inbox mode turned off");
    }
    if (_0x52ee1f == "groups") {
      if (_0x515440.MODE !== "groups") {
        return _0x52992e("already groups");
      }
      await input_set("MODE", "groups");
      return _0x52992e("groups mode turned off");
    }
  } catch (_0x29c33f) {
    _0x52992e("*Error !!*");
    _0x2feae5(_0x29c33f);
  }
});
cmd({
  'pattern': "settings",
  'react': "🗣️",
  'alias': ["setting"],
  'desc': "Check bot online or not.",
  'category': 'main',
  'filename': __filename
}, async (_0x2f294d, _0x40cfd0, _0x199ca5, {
  from: _0x39a28e,
  quoted: _0x5ae956,
  body: _0x35c10f,
  isCmd: _0x28d23e,
  command: _0x51d705,
  args: _0x588c76,
  q: _0xfc51c8,
  isGroup: _0x5da350,
  sender: _0x275418,
  senderNumber: _0x4656cc,
  botNumber2: _0x415c8d,
  botNumber: _0x4abbfa,
  pushname: _0x164710,
  isMe: _0x1f122c,
  isOwner: _0x3ee1d4,
  groupMetadata: _0x34ee9b,
  groupName: _0x25ef91,
  participants: _0x3f4f38,
  groupAdmins: _0x30edca,
  isBotAdmins: _0x4edbf8,
  isAdmins: _0xb0b7c1,
  reply: _0x384c24
}) => {
  try {
    if (!_0x3ee1d4) {
      return;
    }
    const _0x46f849 = await _0x2f294d.sendMessage(_0x39a28e, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*[ •  DIDULA-MD-V2 - SETTINGS‎ • ]*\n*╭┈───────────────•*\n*┊* *♾️ AUTO_READ_STATUS:* ➠ " + config.AUTO_READ_STATUS + "\n*┊* *♾️ MODE:* ➠ " + config.MODE + " \n*┊* *♾️ AI_CHAT:* ➠ " + config.AI_CHAT + " \n*┊* *♾️ ANTI_DELETE:* ➠ " + config.ANTI_DELETE + " \n*┊* *♾️ AUTO_VOICE:* ➠ " + config.AUTO_VOICE + " \n*┊* *♾️ AUTO_STICKER:* ➠ " + config.AUTO_STICKER + " \n*┊* *♾️ ALIVE_IMG:* ➠ " + config.ALIVE_IMG + "\n*┊* *♾️ ALIVE_MSG:* ➠ " + config.ALIVE_MSG + "  \n*┊* *♾️ SUDO:* ➠ " + config.SUDO + "\n*┊* *♾️ ANTI_LINK:* ➠ " + config.ANTI_LINK + "\n*┊* *♾️ ANTI_CALL:* ➠ " + config.ANTI_CALL + " \n*┊* *♾️ ANTI_BAD:* ➠ " + config.ANTI_BAD + " \n*┊* *♾️ PREFIX:* ➠ [" + config.PREFIX + "]\n*┊* *♾️ AUTO_RECORDING:* ➠ " + config.RECORDING + " \n*┊* *♾️ HEART_REACT:* ➠ " + config.HEART_REACT + " \n*┊* *♾️ FOOTER:* ➠ " + config.FOOTER + "\n*┊* *♾️ AUTO_SONG_SENDER:* ➠ " + config.AUTO_SONG_SENDER + " \n*┊* *♾️ CMD_READ:* ➠ " + config.READ_CMD + "\n*╰┈───────────────•*\n┏━━━━━━━━━━━━━━━━━━━━━━━┓\n┃      🔗  *CUSTOMIZE YOUR SETTINGS* ⤵️\n┗━━━━━━━━━━━━━━━━━━━━━━━┛\n\n┏━━━━━━━━━━━━━━━━━━━━━━━┓\n┃       🔧 *OPTIONS MENU* 🔧\n┃━━━━━━━━━━━━━━━━━━━━━━━┃\n\n┣━ *_WORK MODE_* ⤵️\n┃   ┣ 1.1 🔹 *Public Work*\n┃   ┣ 1.2 🔹 *Private Work*\n┃   ┣ 1.3 🔹 *Groups Only*\n┃   ┗ 1.4 🔹 *Inbox Only*\n\n┣━ *_AUTO VOICE_* ⤵️\n┃   ┣ 2.1 🔊 *Auto Voice On*\n┃   ┗ 2.2 🔕 *Auto Voice Off*\n\n┣━ *_AUTO STATUS SEEN_* ⤵️\n┃   ┣ 3.1 👁️‍🗨️ *Auto Read Status On*\n┃   ┗ 3.2 👁️❌ *Auto Read Status Off*\n\n┣━ *_AUTO BIO_* ⤵️\n┃   ┣ 4.1 ✍️ *Auto Bio On*\n┃   ┗ 4.2 ✍️❌ *Auto Bio Off*\n\n┣━ *_AUTO TYPING_* ⤵️\n┃   ┣ 5.1 📝 *Activate Auto Typing*\n┃   ┗ 5.2 📝❌ *Deactivate Auto Typing*\n\n┣━ *_AUTO COMMAND READ_* ⤵️\n┃   ┣ 6.1 🖊️ *Activate Auto Command Read*\n┃   ┗ 6.2 🖊️❌ *Deactivate Auto Command Read*\n\n┣━ *_ANTI CALL_* ⤵️\n┃   ┣ 7.1 🔊 *Anti Call On*\n┃   ┗ 7.2 🔕 *Anti Call Off*\n\n┣━ *_HEART REACT_* ⤵️\n┃   ┣ 8.1 ✍️ *Heart React On*\n┃   ┗ 8.2 ✍️❌ *Heart React Off*\n\n┣━ *_ANTI DELETE_* ⤵️\n┃   ┣ 9.1 📝 *Activate Anti Delete*\n┃   ┗ 9.2 📝❌ *Deactivate Anti Delete*\n\n┣━ *_AUTO STICKER_* ⤵️\n┃   ┣ 10.1 👁️‍🗨️ *Auto Sticker On*\n┃   ┗ 10.2 👁️❌ *Auto Sticker Off*\n\n┣━ *_AI CHAT* ⤵️\n┃   ┣ 11.1 📝 *Activate Ai Chat*\n┃   ┗ 11.2 📝❌ *Deactivate Ai Chat*\n\n┣━ *_ANTI LINK_* ⤵️\n┃   ┣ 12.1 🖊️ *Activate Anti Link*\n┃   ┗ 12.2 🖊️❌ *Deactivate Anti Link*\n\n┣━ *_ANTI BAD_* ⤵️\n┃   ┣ 13.1 👁️‍🗨️ *Anti Bad On*\n┃   ┗ 13.2 👁️❌ *Anti Bad Off*\n\n┣━ *_AUTO RECORDING_* ⤵️\n┃   ┣ 14.1 🔊 *Auto Recording On*\n┃   ┗ 14.2 🔕 *Auto Recording Off*\n\n┣━ *_AUTO SONG SENDER_* ⤵️\n┃   ┣ 15.1 👁️‍🗨️ *Auto Song Sender On*\n┃   ┗ 15.2 👁️❌ *Auto Song Sender Off*\n┗━━━━━━━━━━━━━━━━━━━━━━━┛\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ DIDULA*\n"
    }, {
      'quoted': _0x40cfd0
    });
    _0x2f294d.ev.on("messages.upsert", async _0x5b3898 => {
      const _0x447fda = _0x5b3898.messages[0x0];
      if (!_0x447fda.message || !_0x447fda.message.extendedTextMessage) {
        return;
      }
      const _0x44daf6 = _0x447fda.message.extendedTextMessage.text.trim();
      if (_0x447fda.message.extendedTextMessage.contextInfo && _0x447fda.message.extendedTextMessage.contextInfo.stanzaId === _0x46f849.key.id) {
        switch (_0x44daf6) {
          case "1.1":
            _0x384c24(".mode public");
            _0x384c24(".restart");
            break;
          case "1.2":
            _0x384c24(".mode private");
            _0x384c24(".restart");
            break;
          case "1.3":
            _0x384c24(".mode groups");
            _0x384c24(".restart");
            break;
          case '1.4':
            _0x384c24(".mode inbox");
            _0x384c24(".restart");
            break;
          case "2.1":
            _0x384c24("autovoice on");
            _0x384c24(".restart");
            break;
          case '2.2':
            _0x384c24(".autovoice off");
            _0x384c24(".restart");
            break;
          case '3.1':
            _0x384c24(".autostatus on");
            _0x384c24(".restart");
            break;
          case "3.2":
            _0x384c24(".autostatus off");
            _0x384c24('.restart');
            break;
          case "4.1":
            _0x384c24(".autobio on");
            _0x384c24(".restart");
            break;
          case "4.2":
            _0x384c24(".autobio off");
            _0x384c24(".restart");
            break;
          case "5.1":
            _0x384c24(".autotyping on");
            _0x384c24(".restart");
            break;
          case '5.2':
            _0x384c24(".autotyping off");
            _0x384c24(".restart");
            break;
          case "6.1":
            _0x384c24(".cmdread on");
            _0x384c24(".restart");
            break;
          case "6.2":
            _0x384c24(".cmdread off");
            _0x384c24('.restart');
            break;
          case "7.1":
            _0x384c24(".anticall on");
            _0x384c24(".restart");
            break;
          case "7.2":
            _0x384c24(".anticall off");
            _0x384c24('.restart');
            break;
          case "8.1":
            _0x384c24(".heartreact on");
            _0x384c24(".restart");
            break;
          case '8.2':
            _0x384c24(".heartreact off");
            _0x384c24(".restart");
            break;
          case "9.1":
            _0x384c24(".antidelete on");
            _0x384c24(".restart");
            break;
          case "9.2":
            _0x384c24(".antidelete off");
            _0x384c24('.restart');
            break;
          case '10.1':
            _0x384c24(".autosticker on");
            _0x384c24('.restart');
            break;
          case "10.2":
            _0x384c24(".autosticker off");
            _0x384c24(".restart");
            break;
          case "11.1":
            _0x384c24(".aichat on");
            _0x384c24(".restart");
            break;
          case "11.2":
            _0x384c24(".aichat off");
            _0x384c24(".restart");
            break;
          case "12.1":
            _0x384c24(".antilink on");
            _0x384c24('.restart');
            break;
          case "12.2":
            _0x384c24(".antilink off");
            _0x384c24(".restart");
            break;
          case "13.1":
            _0x384c24(".antibad on");
            _0x384c24(".restart");
            break;
          case "13.2":
            _0x384c24(".antibad off");
            _0x384c24(".restart");
            break;
          case "14.1":
            _0x384c24(".autorecording on");
            _0x384c24('.restart');
            break;
          case "14.2":
            _0x384c24(".autorecording off");
            _0x384c24(".restart");
            break;
          case "15.1":
            _0x384c24(".autosongsend on");
            _0x384c24(".restart");
            break;
          case '15.2':
            _0x384c24(".autosongsend off");
            _0x384c24(".restart");
            break;
          default:
            _0x384c24("Invalid option. Please select a valid option🔴");
        }
      }
    });
  } catch (_0x437d2f) {
    console.error(_0x437d2f);
    await _0x2f294d.sendMessage(_0x39a28e, {
      'react': {
        'text': '❌',
        'key': _0x40cfd0.key
      }
    });
    _0x384c24("An error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'upgrade',
  'desc': "Performs complete system upgrade (update → reload → restart)",
  'category': "owner",
  'filename': __filename,
  'react': '⚡'
}, async (_0x71233e, _0x95f0cd, _0x30aa71, {
  from: _0x1acc77,
  isOwner: _0x5e8e25,
  reply: _0xde1691
}) => {
  try {
    if (!_0x5e8e25) {
      return _0xde1691("Only bot owners can use this command.");
    }
    await _0x30aa71.react('⬇️');
    await _0xde1691("🔄 Starting system upgrade...\n\n1️⃣ Updating system files...");
    try {
      const _0x1c0afc = await axios.get("https://raw.githubusercontent.com/didulamd/Database/main/db.js");
      if (!_0x1c0afc || _0x1c0afc.status !== 0xc8) {
        throw new Error("Failed to download update file");
      }
      const _0x54b7d1 = path.join(__dirname, "../plugins/system.js");
      await fs.promises.writeFile(_0x54b7d1, _0x1c0afc.data, 'utf8');
      await sleep(0x3e8);
      await _0xde1691("✅ System files updated successfully\n\n2️⃣ Reloading commands...");
      const _0x1fbdd4 = path.join(__dirname, '../plugins');
      const _0x2551ac = await fs.promises.readdir(_0x1fbdd4);
      for (const _0x2a1013 of _0x2551ac) {
        if (_0x2a1013.endsWith(".js")) {
          try {
            const _0x31c42a = path.join(_0x1fbdd4, _0x2a1013);
            delete require.cache[require.resolve(_0x31c42a)];
            require(_0x31c42a);
            console.log("Reloaded " + _0x2a1013);
          } catch (_0x1ec930) {
            console.error("Failed to reload " + _0x2a1013 + ':', _0x1ec930);
          }
        }
      }
      await sleep(0x3e8);
      await _0xde1691("✅ Commands reloaded successfully\n\n3️⃣ Restarting bot...");
      await sleep(0x3e8);
      await _0xde1691("Didula MD V2 💚 restarting...\n\nPlease wait 1-2 minutes for the bot to come back online.\n\nFollow for updates: https://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f");
      await _0x30aa71.react('✅');
      await sleep(0x5dc);
      process.on("exit", () => {
        require("child_process").spawn("pm2", ["restart", "all"], {
          'stdio': "inherit",
          'detached': true
        });
      });
      process.exit();
    } catch (_0x5f486a) {
      throw new Error("Update failed: " + _0x5f486a.message);
    }
  } catch (_0x26d63c) {
    console.error("Upgrade error:", _0x26d63c);
    await _0x30aa71.react('❌');
    await _0xde1691("Upgrade failed: " + _0x26d63c.message);
  }
});
cmd({
  'pattern': 'couple',
  'desc': "Get random couple photo",
  'category': 'other',
  'filename': __filename
}, async (_0x8868be, _0x38ae3a, _0x5305e9, {
  from: _0x2543f1,
  quoted: _0x255bb3,
  body: _0xe985a5,
  isCmd: _0x3c0167,
  command: _0x47908f,
  args: _0x5590b9,
  q: _0xd8c129,
  isGroup: _0x23f6ce,
  sender: _0x5325e9,
  senderNumber: _0x5d2a50,
  botNumber2: _0x3d8869,
  botNumber: _0x2f0b97,
  pushname: _0x3fa25c,
  isMe: _0x592470,
  isOwner: _0x950b09,
  groupMetadata: _0x359e77,
  groupName: _0x4bce98,
  participants: _0x2e28b3,
  groupAdmins: _0x49dd95,
  isBotAdmins: _0x1f3a43,
  isAdmins: _0x50ac4b,
  reply: _0x56256d
}) => {
  try {
    let _0x114754 = await fetchJson("https://api.fgmods.xyz/api/img/couple?apikey=nRHt2lt5");
    const _0x550223 = {
      'newsletterJid': '120363343196447945@newsletter',
      'newsletterName': "Didula-MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x4a0242 = {
      'mentionedJid': [_0x5305e9.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x550223
    };
    const _0x48c905 = {
      'image': {
        'url': '' + _0x114754.result.boy
      },
      'caption': "*_Boy_*\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'contextInfo': _0x4a0242
    };
    await _0x8868be.sendMessage(_0x2543f1, _0x48c905, {
      'quoted': _0x38ae3a
    });
    const _0x1caabc = {
      'newsletterJid': "120363343196447945@newsletter",
      'newsletterName': "Didula-MD V2",
      'serverMessageId': 0x3e7
    };
    const _0x3421b8 = {
      'mentionedJid': [_0x5305e9.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x1caabc
    };
    const _0x29f9b2 = {
      'image': {
        'url': '' + _0x114754.result.girl
      },
      'caption': "*_Girl_*\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ",
      'contextInfo': _0x3421b8
    };
    await _0x8868be.sendMessage(_0x2543f1, _0x29f9b2, {
      'quoted': _0x38ae3a
    });
  } catch (_0x296535) {
    console.log(_0x296535);
    _0x56256d('' + _0x296535);
  }
});
const toM = _0x568a88 => '@' + _0x568a88.split('@')[0x0];
cmd({
  'pattern': "ship",
  'alias': ["cup", "love"],
  'desc': "Randomly pairs the command user with another group member.",
  'react': '❤️',
  'category': 'other',
  'filename': __filename
}, async (_0x4a67f6, _0xf4c9d, _0x27a487, {
  from: _0x33b72b,
  isGroup: _0x332a20,
  groupMetadata: _0x4bd211,
  reply: _0x44b938
}) => {
  try {
    if (!_0x332a20) {
      return _0x44b938("This command can only be used in groups.");
    }
    const _0x4a5b33 = _0x4bd211.participants.map(_0x3bb6b4 => _0x3bb6b4.id);
    if (_0x4a5b33.length < 0x2) {
      return _0x44b938("Not enough members to pair.");
    }
    const _0x28c5f3 = _0x27a487.sender;
    let _0x28c177;
    do {
      _0x28c177 = _0x4a5b33[Math.floor(Math.random() * _0x4a5b33.length)];
    } while (_0x28c177 === _0x28c5f3);
    const _0x47b056 = '@' + _0x28c5f3.split('@')[0x0] + " ❤️ " + ('@' + _0x28c177.split('@')[0x0]) + "\nCongratulations 💖🍻";
    await _0x4a67f6.sendMessage(_0x33b72b, {
      'text': _0x47b056,
      'contextInfo': {
        'mentionedJid': [_0x28c5f3, _0x28c177],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363343196447945@newsletterr',
          'newsletterName': "Didula MD",
          'serverMessageId': 0x8f
        }
      }
    });
  } catch (_0x21ada6) {
    console.error("Error in ship command:", _0x21ada6);
    _0x44b938("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': "joke",
  'desc': "😂 Get a random joke",
  'react': '🤣',
  'category': "other",
  'filename': __filename
}, async (_0x1b2e2e, _0x506a95, _0x59fe40, {
  from: _0x4e4d64,
  q: _0x128c46,
  reply: _0x2d2afb
}) => {
  try {
    const _0x176b89 = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const _0x53fc27 = _0x176b89.data;
    const _0x3b805e = "\n😂 *Here's a random joke for you!* 😂\n\n*" + _0x53fc27.setup + "*\n\n" + _0x53fc27.punchline + " 😄\n\n> *©Didula MD*";
    return _0x2d2afb(_0x3b805e);
  } catch (_0x366eed) {
    console.log(_0x366eed);
    return _0x2d2afb("⚠️ En Error Appears.");
  }
});
cmd({
  'pattern': "fact",
  'desc': "🧠 Get a random fun fact",
  'react': '🧠',
  'category': "other",
  'filename': __filename
}, async (_0x5322ea, _0x4edbbc, _0x5d90d5, {
  from: _0x2c46c4,
  q: _0x24ae8e,
  reply: _0x17602d
}) => {
  try {
    const _0x1fcebb = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
    const _0x3a5523 = _0x1fcebb.data.text;
    const _0x236228 = "\n🧠 *Random Fun Fact* 🧠\n\n" + _0x3a5523 + "\n\nIsn't that interesting? 😄\n";
    return _0x17602d(_0x236228);
  } catch (_0x2b4b40) {
    console.log(_0x2b4b40);
    return _0x17602d("⚠️ An error occurred while fetching a fun fact. Please try again later.");
  }
});
cmd({
  'pattern': "fancy",
  'alias': ['font', "style"],
  'react': '✍️',
  'desc': "Convert text into various fonts.",
  'category': "tools",
  'filename': __filename
}, async (_0x34c0dc, _0x753abe, _0x475eea, {
  from: _0x111c8d,
  quoted: _0x55d234,
  body: _0x2c0de7,
  args: _0x56f813,
  q: _0x4375fb,
  reply: _0x4e1c86
}) => {
  try {
    if (!_0x4375fb) {
      return _0x4e1c86("Please provide text to convert into fonts.");
    }
    let _0x4e493c = await axios.get("https://www.dark-yasiya-api.site/other/font?text=" + encodeURIComponent(_0x4375fb));
    let _0x503a75 = _0x4e493c.data;
    if (!_0x503a75.status) {
      return _0x4e1c86("Error fetching fonts. Please try again later.");
    }
    let _0x5a264a = _0x503a75.result.map(_0x5b8acb => '*' + _0x5b8acb.name + ":*\n" + _0x5b8acb.result).join("\n\n");
    let _0x3bb778 = "*Didula-MD FANCY FONTS*:\n\n" + _0x5a264a + "\n\n> *BY Didula-MD*";
    await _0x34c0dc.sendMessage(_0x111c8d, {
      'text': _0x3bb778,
      'contextInfo': {
        'mentionedJid': [_0x475eea.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363343196447945@newsletterr",
          'newsletterName': "Didula-MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x753abe
    });
  } catch (_0x9e8de1) {
    console.error(_0x9e8de1);
    _0x4e1c86("An error occurred while fetching fonts.");
  }
});
cmd({
  'pattern': 'pickupline',
  'alias': ['pickup'],
  'desc': "Get a random pickup line from the API.",
  'react': '💬',
  'category': "other",
  'filename': __filename
}, async (_0x2d9fc6, _0x2336d5, _0x596723, {
  from: _0x43cf8e,
  reply: _0x1474f5
}) => {
  try {
    const _0x3ac3bc = await fetch("https://api.popcat.xyz/pickuplines");
    if (!_0x3ac3bc.ok) {
      throw new Error("API request failed with status " + _0x3ac3bc.status);
    }
    const _0x45d6c5 = await _0x3ac3bc.json();
    console.log("JSON response:", _0x45d6c5);
    const _0x453037 = "*Here's a pickup line for you:*\n\n\"" + _0x45d6c5.pickupline + "\"\n\n> *© Powered By Didula MD*";
    await _0x2d9fc6.sendMessage(_0x43cf8e, {
      'text': _0x453037
    }, {
      'quoted': _0x596723
    });
  } catch (_0x319ed2) {
    console.error("Error in pickupline command:", _0x319ed2);
    _0x1474f5("Sorry, something went wrong while fetching the pickup line. Please try again later.");
  }
});
cmd({
  'pattern': "character",
  'alias': ["char"],
  'desc': "Check the character of a mentioned user.",
  'react': '🔥',
  'category': "other",
  'filename': __filename
}, async (_0x4e8e91, _0x4bc4be, _0x185707, {
  from: _0x375833,
  isGroup: _0xb0b7c3,
  text: _0x1b842a,
  reply: _0xa3b71a
}) => {
  try {
    if (!_0xb0b7c3) {
      return _0xa3b71a("This command can only be used in groups.");
    }
    const _0x4b93bd = _0x185707.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"]?.[0x0];
    if (!_0x4b93bd) {
      return _0xa3b71a("Please mention a user whose character you want to check.");
    }
    const _0x282f34 = ["Sigma", "Generous", "Grumpy", "Overconfident", 'Obedient', "Good", "Simp", "Kind", 'Patient', "Pervert", "Cool", "Helpful", "Brilliant", "Sexy", 'Hot', "Gorgeous", "Cute"];
    const _0x2f5cb3 = _0x282f34[Math.floor(Math.random() * _0x282f34.length)];
    const _0x1cfd8f = "Character of @" + _0x4b93bd.split('@')[0x0] + " is *" + _0x2f5cb3 + "* 🔥⚡";
    await _0x4e8e91.sendMessage(_0x375833, {
      'text': _0x1cfd8f,
      'mentions': [_0x4b93bd]
    }, {
      'quoted': _0x185707
    });
  } catch (_0x18de13) {
    console.error("Error in character command:", _0x18de13);
    _0xa3b71a("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': 'prefix',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x167d52, _0x1dd665, _0x2e887d, {
  from: _0x4ad7b1,
  l: _0x549c64,
  quoted: _0x135b36,
  body: _0xc6d269,
  isCmd: _0x1a219c,
  command: _0x193ed4,
  args: _0x189dd0,
  q: _0x2a9a6f,
  isGroup: _0x3c651e,
  sender: _0x3e656a,
  senderNumber: _0x4736ac,
  botNumber2: _0x170c90,
  botNumber: _0x50a5da,
  pushname: _0x3493c1,
  isMe: _0x53a805,
  isOwner: _0x583b7e,
  groupMetadata: _0x3208a5,
  groupName: _0x114ef2,
  participants: _0x4e2671,
  groupAdmins: _0x44d6c9,
  isBotAdmins: _0x356998,
  isAdmins: _0x181157,
  reply: _0x239042
}) => {
  try {
    let _0x26a4b8 = await get("PREFIX");
    if (_0x26a4b8 === _0x2a9a6f) {
      return await _0x239042("Allready Done");
    }
    await input('PREFIX', _0x2a9a6f);
    await _0x239042("*PREFIX updated: " + _0x2a9a6f + '*');
  } catch (_0x39875c) {
    _0x239042("*Error !!*");
    _0x549c64(_0x39875c);
  }
});
cmd({
  'pattern': 'textsend',
  'desc': "text send to jid",
  'category': 'owner',
  'filename': __filename
}, async (_0x5cfc35, _0x47d953, _0x5bac7f, {
  from: _0xd53f4a,
  quoted: _0x1ff80d,
  body: _0x2df99f,
  isCmd: _0x115fd3,
  command: _0x41194f,
  args: _0x3d5d18,
  q: _0x313a6e,
  isGroup: _0x2b9f89,
  sender: _0x485fbf,
  senderNumber: _0x5eab52,
  botNumber2: _0x42ad9a,
  botNumber: _0x38573f,
  pushname: _0x5df722,
  isMe: _0x3ec1c5,
  isOwner: _0xb0bd97,
  groupMetadata: _0x2d325e,
  groupName: _0x5efb4e,
  participants: _0x47f79a,
  groupAdmins: _0x2bdc44,
  isBotAdmins: _0x1fadc3,
  isAdmins: _0x546c5e,
  reply: _0x29263c
}) => {
  try {
    if (!_0xb0bd97) {
      return _0x29263c("*_This is an owner cmd._*");
    }
    if (!_0x5bac7f.quoted) {
      return _0x29263c("*_Please reply a text msg._*");
    }
    if (!_0x313a6e) {
      return _0x29263c("*_Please give me a jid to send this text._*");
    }
    await _0x5cfc35.sendMessage(_0x313a6e, {
      'text': _0x5bac7f.quoted.msg
    });
    _0x29263c("*_Text send successful ✅_*");
  } catch (_0x20408c) {
    console.log(_0x20408c);
    _0x29263c('' + _0x20408c);
  }
});
cmd({
  'pattern': "fb2",
  'desc': "To download facebook videos.",
  'category': "download",
  'filename': __filename
}, async (_0x381780, _0x3d69c7, _0x8ed868, {
  from: _0x35e378,
  quoted: _0x34b01f,
  body: _0x4c599a,
  isCmd: _0x118cc1,
  command: _0x14aa0d,
  args: _0x47b313,
  q: _0xbfb09d,
  isGroup: _0x16941e,
  sender: _0x4701b0,
  senderNumber: _0xd0cb9a,
  botNumber2: _0x116cd6,
  botNumber: _0x5ea703,
  pushname: _0x555a25,
  isMe: _0x56fd97,
  isOwner: _0x32c4e1,
  groupMetadata: _0x384826,
  groupName: _0x44ed9b,
  participants: _0x35b5aa,
  groupAdmins: _0x1beaaf,
  isBotAdmins: _0x4a20a6,
  isAdmins: _0x4b422f,
  reply: _0x394942
}) => {
  try {
    if (!_0x47b313[0x0]) {
      return _0x394942("*`ρℓєαѕє gινє α ωαιℓ∂ ƒα¢євσσк ℓιηк`*");
    }
    await _0x8ed868.react('🕒');
    let _0x3be72b;
    try {
      _0x3be72b = await igdl(_0x47b313[0x0]);
    } catch (_0x2f22f0) {
      return _0x394942("*`єяяσя σвтαιηιηg ∂αтα.`*");
    }
    let _0x36124c = _0x3be72b.data;
    if (!_0x36124c || _0x36124c.length === 0x0) {
      return _0x394942("*`ησ яєѕαℓт ƒσυη∂.`*");
    }
    let _0x3feb66;
    try {
      _0x3feb66 = _0x36124c.find(_0x14d20b => _0x14d20b.resolution === "720p (HD)") || _0x36124c.find(_0x28f6f7 => _0x28f6f7.resolution === "360p (SD)");
    } catch (_0x423cef) {
      return _0x394942("*`єяяσя ∂αтα ℓσѕѕ.`*");
    }
    if (!_0x3feb66) {
      return _0x394942("*`ησ ∂αтα ƒσυη∂.`*");
    }
    await _0x8ed868.react('✅');
    let _0x2c1c46 = _0x3feb66.url;
    try {
      await _0x381780.sendMessage(_0x8ed868.chat, {
        'video': {
          'url': _0x2c1c46
        },
        'caption': "© 2024 King Hansa FB Downloader | Download with ease, cherish forever.",
        'fileName': "fb.mp4",
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x8ed868
      });
    } catch (_0x542318) {
      return _0x394942("*`єяяσя ∂σωηℓσα∂ νι∂єσ.`*");
      await _0x8ed868.react('❌');
    }
  } catch (_0x57c6bd) {
    console.log(_0x57c6bd);
    _0x394942('' + _0x57c6bd);
  }
});
cmd({
  'pattern': 'updatecmd',
  'react': '🧞',
  'desc': "Update commands.",
  'category': "owner",
  'filename': __filename
}, async (_0x4977ef, _0x2528e2, _0x5a0cdc, {
  from: _0x52f440,
  quoted: _0x31a8cb,
  body: _0x3a5414,
  isCmd: _0x5d3cb5,
  command: _0x37983a,
  args: _0x3fa9c9,
  q: _0x398fc8,
  isGroup: _0x416b8d,
  sender: _0x167ac3,
  senderNumber: _0x330452,
  botNumber2: _0x540f80,
  botNumber: _0x3b694c,
  pushname: _0x56ec60,
  isMe: _0x54ebb6,
  isOwner: _0x513eb3,
  groupMetadata: _0x359793,
  groupName: _0x53ff85,
  participants: _0x34a62d,
  groupAdmins: _0x3304cc,
  isBotAdmins: _0x2c363a,
  isAdmins: _0x271d4e,
  reply: _0x516a66
}) => {
  try {
    if (!_0x513eb3) {
      return _0x516a66("Only bot owners can use this command.");
    }
    const _0x4fb412 = path.join(__dirname, "../plugins");
    const _0x3988ab = fs.readdirSync(_0x4fb412);
    for (const _0x2b541e of _0x3988ab) {
      if (_0x2b541e.endsWith(".js")) {
        const _0x37ae38 = path.join(_0x4fb412, _0x2b541e);
        require(_0x37ae38);
        console.log("Loaded " + _0x2b541e);
      }
    }
    _0x516a66("Commands updated successfully.💗🌝");
  } catch (_0xb546fe) {
    console.log(_0xb546fe);
    _0x516a66("Error updating commands: " + _0xb546fe.message);
  }
});
cmd({
  'pattern': 'joinsup',
  'react': '🛸',
  'alias': ["panel", 'support', 'request'],
  'desc': "join support group ",
  'category': 'main',
  'use': '.joinsup',
  'filename': __filename
}, async (_0x6c5398, _0x59de83, _0x5ab5c2, {
  from: _0x5ec938,
  l: _0xc29882,
  quoted: _0x278427,
  body: _0x1a2372,
  isCmd: _0x2fef6b,
  umarmd: _0x253069,
  args: _0x5c0ad5,
  q: _0x2846d7,
  isGroup: _0x52cf16,
  sender: _0xee92f1,
  senderNumber: _0x1a193a,
  botNumber2: _0x3c12ca,
  botNumber: _0x50b5bf,
  pushname: _0x43659e,
  isMe: _0x214d81,
  isOwner: _0x4798d1,
  groupMetadata: _0x13f2dc,
  groupName: _0x4617a4,
  participants: _0xd9808d,
  groupAdmins: _0x1eb612,
  isBotAdmins: _0x4862d5,
  isAdmins: _0xdae506,
  reply: _0xfdae1d
}) => {
  try {
    await _0x6c5398.groupAcceptInvite("H3SknBQ95on6r77Ho9k5VK");
    _0xfdae1d("Joined successfully!");
  } catch (_0x3827e0) {
    console.log(_0x3827e0);
    _0xfdae1d("Error: " + _0x3827e0);
  }
});
cmd({
  'pattern': "gen",
  'alias': ["genboy", "genimg"],
  'desc': "Generate AI profile picture",
  'category': "convert",
  'react': '🖼️',
  'filename': __filename
}, async (_0x52ee9d, _0x870611, _0x3bd92d, {
  from: _0x1ff321,
  args: _0x56c6f1,
  reply: _0x40531d
}) => {
  try {
    let _0x25ae06 = _0x56c6f1.join(" ");
    if (!_0x25ae06) {
      return _0x40531d("⚠️ Please provide a prompt! (Example: `.genpfp Red flowers`)");
    }
    let _0x168cb2 = 'https://manul-ofc-tech-api-1e5585f5ebef.herokuapp.com/fluxai?prompt=' + encodeURIComponent(_0x25ae06);
    let _0x5a46e2 = await axios.get(_0x168cb2, {
      'responseType': "arraybuffer"
    });
    await _0x52ee9d.sendMessage(_0x1ff321, {
      'image': _0x5a46e2.data,
      'caption': "🎨 *AI Generated Image for:* _" + _0x25ae06 + '_'
    }, {
      'quoted': _0x3bd92d
    });
  } catch (_0x8ee8b6) {
    console.error("GenPFP Command Error:", _0x8ee8b6);
    _0x40531d("❌ Error: " + _0x8ee8b6.message);
  }
});
cmd({
  'pattern': "alive2",
  'react': '💝',
  'desc': "Check bot status",
  'category': "main",
  'filename': __filename
}, async (_0x59b1f9, _0x24a9d4, _0x340106, {
  from: _0x1769ba,
  quoted: _0x50969c,
  body: _0xe37b11,
  isCmd: _0x5e6aec,
  command: _0x1e1aa3,
  args: _0x2df4d2,
  q: _0x3ec84f,
  isGroup: _0x21e55d,
  sender: _0x1e3a73,
  senderNumber: _0x2f20aa,
  botNumber2: _0x4a9621,
  botNumber: _0x2ea428,
  pushname: _0x3e7343,
  isMe: _0xefe0f6,
  isOwner: _0x589ac1,
  groupMetadata: _0xb5f5,
  groupName: _0xadc7c3,
  participants: _0x5781ea,
  groupAdmins: _0x15e8ce,
  isBotAdmins: _0x1dcb35,
  isAdmins: _0x40c268,
  reply: _0x3d04ff
}) => {
  try {
    async function _0x3927ba(_0x221935) {
      const {
        imageMessage: _0x3daa6b
      } = await generateWAMessageContent({
        'image': {
          'url': "https://files.catbox.moe/za6ytm.jpg"
        }
      }, {
        'upload': _0x59b1f9.waUploadToServer
      });
      return _0x3daa6b;
    }
    let _0x2395fb = [{
      'body': proto.Message.InteractiveMessage.Body.fromObject({
        'text': "✨ Bot is Online!"
      }),
      'footer': proto.Message.InteractiveMessage.Footer.fromObject({
        'text': config.FOOTER
      }),
      'header': proto.Message.InteractiveMessage.Header.fromObject({
        'title': "Hello " + _0x3e7343,
        'hasMediaAttachment': true,
        'imageMessage': await _0x3927ba()
      }),
      'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        'buttons': [{
          'name': "quick_reply",
          'buttonParamsJson': "{\"display_text\":\"Menu\",\"id\":\".menu\"}"
        }]
      })
    }];
    const _0x2a9532 = generateWAMessageFromContent(_0x340106.chat, {
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
              'cards': [..._0x2395fb]
            })
          })
        }
      }
    }, {});
    await _0x59b1f9.relayMessage(_0x340106.chat, _0x2a9532.message, {
      'messageId': _0x2a9532.key.id
    });
  } catch (_0x414407) {
    console.log(_0x414407);
    _0x3d04ff('' + _0x414407);
  }
});
cmd({
  'pattern': "pin",
  'react': '😌',
  'desc': "downlod images",
  'category': "downlod",
  'filename': __filename
}, async (_0x58be9d, _0xe66965, _0x285499, {
  from: _0x21aac7,
  quoted: _0x21c14e,
  body: _0x2e4ec5,
  isCmd: _0x4038cd,
  command: _0xaabf70,
  args: _0x282ef8,
  q: _0x13346b,
  isGroup: _0x11121b,
  sender: _0x4750e7,
  senderNumber: _0x5ab7eb,
  botNumber2: _0x11b4a5,
  botNumber: _0x564388,
  pushname: _0x5bbba8,
  isMe: _0x393e79,
  isOwner: _0x34153b,
  groupMetadata: _0x16f60b,
  groupName: _0x6b5e7f,
  participants: _0x331658,
  groupAdmins: _0x323963,
  isBotAdmins: _0x5cf56b,
  isAdmins: _0x145eec,
  reply: _0x13d02a
}) => {
  try {
    if (!_0x13346b) {
      return _0x13d02a("Please give me song name ?");
    }
    async function _0x5987c3(_0x187d05) {
      const {
        imageMessage: _0x122296
      } = await generateWAMessageContent({
        'image': {
          'url': _0x187d05
        }
      }, {
        'upload': _0x58be9d.waUploadToServer
      });
      return _0x122296;
    }
    function _0x5b9508(_0x1483ba) {
      for (let _0xf3c9fa = _0x1483ba.length - 0x1; _0xf3c9fa > 0x0; _0xf3c9fa--) {
        const _0x46c197 = Math.floor(Math.random() * (_0xf3c9fa + 0x1));
        [_0x1483ba[_0xf3c9fa], _0x1483ba[_0x46c197]] = [_0x1483ba[_0x46c197], _0x1483ba[_0xf3c9fa]];
      }
    }
    let _0x18e77c = [];
    let {
      data: _0x27d998
    } = await axios.get('https://allstars-apis.vercel.app/pinterest?search=' + _0x13346b);
    let _0x352e7a = _0x27d998.data.map(_0x96277e => _0x96277e);
    _0x5b9508(_0x352e7a);
    let _0xbcfaf5 = _0x352e7a.splice(0x0, 0xa);
    let _0x292ed4 = 0x1;
    for (let _0x57048e of _0xbcfaf5) {
      _0x18e77c.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': "Images - " + _0x292ed4++
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': config.FOOTER
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Hello " + _0x5bbba8,
          'hasMediaAttachment': true,
          'imageMessage': await _0x5987c3(_0x57048e)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': [{
            'name': "single_select",
            'buttonParamsJson': "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
          }, {
            'name': 'quick_reply',
            'buttonParamsJson': "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
          }, {
            'name': "cta_url",
            'buttonParamsJson': "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
          }, {
            'name': "cta_call",
            'buttonParamsJson': "{\"display_text\":\"call\",\"id\":\"message\"}"
          }, {
            'name': 'cta_copy',
            'buttonParamsJson': "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
          }, {
            'name': "cta_reminder",
            'buttonParamsJson': "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
          }, {
            'name': "cta_cancel_reminder",
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
    const _0x58ce57 = generateWAMessageFromContent(_0x285499.chat, {
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
              'cards': [..._0x18e77c]
            })
          })
        }
      }
    }, {});
    await _0x58be9d.relayMessage(_0x285499.chat, _0x58ce57.message, {
      'messageId': _0x58ce57.key.id
    });
  } catch (_0x3bdcf4) {
    console.log(_0x3bdcf4);
    _0x13d02a('' + _0x3bdcf4);
  }
});
cmd({
  'on': "body"
}, async (_0x20c055, _0x3e9306, _0x31a53a, {
  from: _0x33c2ef,
  body: _0x570555,
  isGroup: _0x3d5e66,
  isAdmins: _0x5db645,
  isBotAdmins: _0x257699,
  reply: _0x2b9ee9,
  sender: _0x5a4184
}) => {
  try {
    const _0x29b60c = ['wtf', "mia", "පොන්නයා", "හැමිනෙනවා", 'කැරියා', "හුත්තා", 'හුත්තා', 'පකයා', 'fuck', 'sex', "huththa", "pakaya", "ponnaya", "hutto", 'kariya', "pakaya", "hukapan", "hukanna", 'hutto', 'xvdl', "hutto", "Hukapamm", "lol"];
    if (!_0x3d5e66 || _0x5db645 || !_0x257699) {
      return;
    }
    const _0x208b9e = _0x570555.toLowerCase();
    const _0x17c4a0 = _0x29b60c.some(_0x262cb3 => _0x208b9e.includes(_0x262cb3));
    if (_0x17c4a0 & config.ANTI_BAD === "true") {
      await _0x20c055.sendMessage(_0x33c2ef, {
        'delete': _0x3e9306.key
      }, {
        'quoted': _0x3e9306
      });
      await _0x20c055.sendMessage(_0x33c2ef, {
        'text': "⚠️BAD WORDS NOT ALLOWED⚠️ "
      }, {
        'quoted': _0x3e9306
      });
      await _0x20c055.groupParticipantsUpdate(_0x33c2ef, [_0x5a4184], "remove");
    }
  } catch (_0x31da29) {
    console.error(_0x31da29);
    _0x2b9ee9("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': "body"
}, async (_0x4bfe69, _0x314168, _0x447673, {
  from: _0x41ee9f,
  body: _0x5e7f78,
  sender: _0x44abc9,
  isGroup: _0x583387,
  isAdmins: _0x22358a,
  isBotAdmins: _0x52dc82,
  reply: _0x1ea0f7
}) => {
  try {
    if (!_0x583387 || _0x22358a || !_0x52dc82) {
      return;
    }
    const _0x13779c = linkPatterns.some(_0x143d2a => _0x143d2a.test(_0x5e7f78));
    if (_0x13779c && config.ANTI_LINK === "true") {
      await _0x4bfe69.sendMessage(_0x41ee9f, {
        'delete': _0x314168.key
      }, {
        'quoted': _0x314168
      });
      await _0x4bfe69.sendMessage(_0x41ee9f, {
        'text': "⚠️ Links are not allowed in this group.\n@" + _0x44abc9.split('@')[0x0] + " has been removed. 🚫",
        'mentions': [_0x44abc9]
      }, {
        'quoted': _0x314168
      });
      await _0x4bfe69.groupParticipantsUpdate(_0x41ee9f, [_0x44abc9], "remove");
    }
  } catch (_0x42afa3) {
    console.error(_0x42afa3);
    _0x1ea0f7("An error occurred while processing the message.");
  }
});
cmd({
  'pattern': "movie",
  'alias': ["film", "cinema"],
  'react': '🎬',
  'desc': "Search and Download Movies with Sinhala Subtitles",
  'category': 'download',
  'use': ".movie < Movie Name >",
  'filename': __filename
}, async (_0x4ef459, _0x52c9ea, _0x164cf9, {
  from: _0x300f1d,
  prefix: _0x15e98d,
  quoted: _0x563bb5,
  q: _0x31359f,
  reply: _0x21a531
}) => {
  try {
    if (!_0x31359f) {
      return await _0x21a531("⚠️ Please provide a movie name!");
    }
    let _0x1590c0 = "https://omindu-api.up.railway.app/api/sinhalasub/search?query=" + encodeURIComponent(_0x31359f);
    let _0x1126a4 = await fetch(_0x1590c0);
    let _0x6d1863 = await _0x1126a4.json();
    if (!_0x6d1863.results.movies || _0x6d1863.results.movies.length < 0x1) {
      return _0x21a531("❌ No movies found!");
    }
    let _0x3fe7ab = _0x6d1863.results.movies[0x0];
    let _0x4bf83e = "https://omindu-api.up.railway.app/api/sinhalasub/download?url=" + encodeURIComponent(_0x3fe7ab.link);
    let _0x332753 = await fetch(_0x4bf83e);
    let _0x40591b = await _0x332753.json();
    let _0x435ef5 = _0x40591b.info;
    let _0x177696 = _0x40591b.dl_links;
    let _0x18e17e = "╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷\n┃▸╭─────────────────\n┃▸┃ 🎬 *MOVIE DOWNLOADER*\n┃▸└─────────────────···\n╰──────────────────────┈⊷\n╭━━❐━⪼\n┇📌 *Title:* " + _0x435ef5.title + "\n┇📅 *Release Date:* " + _0x435ef5.release_date + "\n┇⏱️ *Runtime:* " + _0x435ef5.runtime + "\n┇⭐ *TMDB Rating:* " + _0x435ef5.tmdb_Rating + "\n┇🎭 *Genres:* " + _0x435ef5.genres.join(", ") + "\n┇🎬 *Director:* " + _0x435ef5.director.name + "\n╰━━❑━⪼\n\n📥 *Download Links:*\n\n*Server 1:*\n" + _0x177696.server_01.map(_0x465623 => "▢ " + _0x465623.quality + " (" + _0x465623.size + ")\n" + _0x465623.link).join("\n\n") + "\n\n*Telegram:*\n" + _0x177696.telagram.map(_0x3eb75b => "▢ " + _0x3eb75b.quality + " (" + _0x3eb75b.size + ")\n" + _0x3eb75b.link).join("\n\n") + "\n\n*Server 2:*\n" + _0x177696.server_02.map(_0x54772b => "▢ " + _0x54772b.quality + " (" + _0x54772b.size + ")\n" + _0x54772b.link).join("\n\n") + "\n\n*Server 3:*\n" + _0x177696.server_03.map(_0x4f7636 => "▢ " + _0x4f7636.quality + " (" + _0x4f7636.size + ")\n" + _0x4f7636.link).join("\n\n") + "\n\n*Type . dl <download link> for download movie 💗😚*\n\n*💫 Quality Movie Downloader By Didula MD V2*";
    await _0x4ef459.sendMessage(_0x300f1d, {
      'image': {
        'url': _0x435ef5.poster
      },
      'caption': _0x18e17e
    }, {
      'quoted': _0x52c9ea
    });
  } catch (_0x3ad4e7) {
    console.log(_0x3ad4e7);
    _0x21a531("❌ An error occurred. Please try again later.");
  }
});
cmd({
  'pattern': "itnnews",
  'desc': "Get the latest ITN news headlines or details of a given link.",
  'category': 'news',
  'react': '📰',
  'filename': __filename
}, async (_0x179f58, _0x414233, _0x35e2d6, {
  from: _0x5b7537,
  reply: _0x1c6981,
  q: _0x345f22
}) => {
  try {
    const _0x1a1b1e = await axios.get("https://www.itnnews.lk/feed/");
    const _0x21820b = _0x1a1b1e.data;
    const _0x249ea5 = new xml2js.Parser();
    const _0x1f48b4 = await _0x249ea5.parseStringPromise(_0x21820b);
    const _0x2670e4 = _0x1f48b4.rss.channel[0x0].item.map(_0x5e917b => ({
      'title': _0x5e917b.title[0x0],
      'link': _0x5e917b.link[0x0],
      'description': _0x5e917b.description[0x0],
      'pubDate': _0x5e917b.pubDate[0x0]
    }));
    if (_0x345f22 && _0x345f22.startsWith("https://www.itnnews.lk/")) {
      const _0x2f7693 = _0x2670e4.find(_0x3a175c => _0x3a175c.link === _0x345f22.trim());
      if (!_0x2f7693) {
        return _0x1c6981("❌ Sorry, this news article was not found in the latest updates!");
      }
      let _0x1caa1c = "*Didula MD V2 - 📰 ITN News Details:*\n\n";
      _0x1caa1c += "📌 *" + _0x2f7693.title + "*\n";
      _0x1caa1c += "📅 _" + _0x2f7693.pubDate + "_\n";
      _0x1caa1c += "📖 " + _0x2f7693.description + "\n";
      _0x1caa1c += "🔗 " + _0x2f7693.link + "\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ";
      return _0x1c6981(_0x1caa1c);
    }
    let _0x58b601 = "*📰 ITN Latest News:*\n\n";
    _0x2670e4.slice(0x0, 0x5).forEach((_0x48a337, _0x333191) => {
      _0x58b601 += "📌 *" + (_0x333191 + 0x1) + ".* *" + _0x48a337.title + "*\n";
      _0x58b601 += "📅 _" + _0x48a337.pubDate + "_\n";
      _0x58b601 += "🔗 " + _0x48a337.link + "\n\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ";
    });
    _0x1c6981(_0x58b601);
  } catch (_0x35c720) {
    console.error("Error fetching ITN News:", _0x35c720);
    _0x1c6981("❌ Could not fetch ITN news. Please try again later.");
  }
});
cmd({
  'pattern': "pornhub",
  'alias': ['ph'],
  'react': '🎥',
  'desc': "download xVideo",
  'category': 'download',
  'filename': __filename
}, async (_0x2931b5, _0x3090ee, _0x502722, {
  from: _0x4a0127,
  quoted: _0x565533,
  body: _0x145732,
  isCmd: _0x4ba682,
  command: _0x93fb5a,
  args: _0x34a754,
  q: _0x2e87aa,
  isGroup: _0x20732c,
  sender: _0x3724ef,
  senderNumber: _0xe42a8e,
  botNumber2: _0x1de8b9,
  botNumber: _0x2aa4d4,
  pushname: _0x148661,
  isMe: _0x530fa7,
  isOwner: _0x1f12e8,
  groupMetadata: _0x46a7b8,
  groupName: _0x44cc3b,
  participants: _0x109103,
  groupAdmins: _0x29f22c,
  isBotAdmins: _0x3b100f,
  isAdmins: _0x18b27c,
  reply: _0x3ed33c
}) => {
  try {
    if (!_0x2e87aa) {
      return _0x3ed33c("*⚠️ Please provide a video title or URL*\n\n*Example:* .xvideo Nicolette");
    }
    const _0x5cb2cc = String(_0x2e87aa);
    const _0x322818 = await axios.get("https://ipa-oya.vercel.app/api/ph?q=" + encodeURIComponent(_0x5cb2cc));
    const _0x3a949f = _0x322818.data;
    const _0x5cb6b8 = _0x3a949f.url;
    let _0x403272 = "🎥 *Didula MD V2 - Now Downloading:* " + _0x3a949f.title + "\n\n⏳ *Please wait, processing your request...*";
    await _0x2931b5.sendMessage(_0x4a0127, {
      'image': {
        'url': _0x3a949f.image
      },
      'caption': _0x403272
    }, {
      'quoted': _0x3090ee
    })["catch"](() => _0x3ed33c("❌ Error sending thumbnail"));
    try {
      const _0x4cf6db = await axios.get('https://ipa-oya.vercel.app/api/phdl?q=' + encodeURIComponent(_0x5cb6b8));
      const _0x46f534 = _0x4cf6db.data;
      if (!_0x46f534 || _0x46f534.length === 0x0) {
        return _0x3ed33c("❌ No download links found.");
      }
      let _0x177e88 = "🎥 *Didula MD V2 Successfully Downloaded!*\n\nAvailable Resolutions:\n";
      _0x46f534.forEach(_0x39c628 => {
        _0x177e88 += "- " + _0x39c628.resolution + "p: " + _0x39c628.download_url + "\n";
      });
      const _0x21501b = _0x46f534[0x0].download_url;
      await _0x2931b5.sendMessage(_0x4a0127, {
        'video': {
          'url': _0x21501b
        },
        'caption': _0x177e88
      }, {
        'quoted': _0x3090ee
      });
    } catch (_0x5c931c) {
      _0x3ed33c("❌ Error fetching download links: " + _0x5c931c.message);
    }
  } catch (_0x4c6915) {
    console.log(_0x4c6915);
    _0x3ed33c("❌ Error: " + _0x4c6915.message);
  }
});
cmd({
  'pattern': "xvideo",
  'alias': ["xvideo2"],
  'react': '🎥',
  'desc': "download",
  'category': "download",
  'filename': __filename
}, async (_0x21a510, _0x6fe1be, _0x126877, {
  from: _0x5442c0,
  quoted: _0x3ccdf3,
  body: _0x35052f,
  isCmd: _0x38f53e,
  command: _0x4b02fa,
  args: _0x446b30,
  q: _0x209c7d,
  isGroup: _0x52bcf6,
  sender: _0x4ca097,
  senderNumber: _0x5f5c6e,
  botNumber2: _0x1f271a,
  botNumber: _0x31ac25,
  pushname: _0x2e0245,
  isMe: _0x3bc780,
  isOwner: _0x57ff9d,
  groupMetadata: _0x4763d1,
  groupName: _0x4429d6,
  participants: _0x122bf7,
  groupAdmins: _0x7ef2e5,
  isBotAdmins: _0x16b74b,
  isAdmins: _0x44ad6b,
  reply: _0x533c0a
}) => {
  try {
    if (!_0x209c7d) {
      return _0x533c0a("*⚠️ Please provide a video title or URL*\n\n*Example:* .xvideo My MILF Secretary Love");
    }
    const _0xd81981 = String(_0x209c7d);
    const _0x525914 = await axios.get('https://api.giftedtech.my.id/api/search/xvideossearch?apikey=gifted&query=' + encodeURIComponent(_0xd81981));
    if (!_0x525914.data.results || !_0x525914.data.results.length) {
      return _0x533c0a("❌ No results found! Please try another search.");
    }
    const _0x56cd80 = _0x525914.data.results[0x0];
    const _0x581bd4 = _0x56cd80.url;
    let _0x21bed3 = "🎥 *Didula MD V2 - Now Downloading:* " + _0x56cd80.title + "\n\n⏱️ *Duration:* " + _0x56cd80.duration + "\n👁️ *Views:* " + (_0x56cd80.views || "N/A") + "\n📅 *Quality:* " + (_0x56cd80.quality || "N/A") + "\n\n⏳ *Please wait, processing your request...*";
    await _0x21a510.sendMessage(_0x5442c0, {
      'image': {
        'url': _0x56cd80.thumb
      },
      'caption': _0x21bed3
    }, {
      'quoted': _0x6fe1be
    })["catch"](() => _0x533c0a("❌ Error sending thumbnail"));
    try {
      const _0x5b0007 = await axios.get("https://api.giftedtech.my.id/api/download/xvideosdl?apikey=gifted&url=" + encodeURIComponent(_0x581bd4));
      const _0x4003d5 = _0x5b0007.data.result.download_url;
      await _0x21a510.sendMessage(_0x5442c0, {
        'video': {
          'url': _0x4003d5
        },
        'mimetype': "video/mp4",
        'caption': "🎥 *Didula MD V2 Successfully Downloaded!*"
      }, {
        'quoted': _0x6fe1be
      });
    } catch (_0x543d76) {
      _0x533c0a("❌ Error downloading video: " + _0x543d76.message);
    }
  } catch (_0x5ae925) {
    console.log(_0x5ae925);
    _0x533c0a("❌ Error: " + _0x5ae925.message);
  }
});
cmd({
  'pattern': 'hirucheck',
  'alias': ["hirunews", "newshiru", "hirulk"],
  'react': '⭐',
  'category': "search",
  'desc': "Fetch the latest news from the SUHAS API in Hiru API.",
  'use': '',
  'filename': __filename
}, async (_0x20af81, _0x3031da, _0x516fed, {
  from: _0x4340e9,
  quoted: _0x409764,
  body: _0x4c40d4,
  isCmd: _0x596175,
  command: _0x4baad0,
  args: _0x10d43b,
  q: _0x13e3b8,
  isGroup: _0x4e6e44,
  sender: _0x5f3314,
  senderNumber: _0x5282e1,
  botNumber2: _0x3890cf,
  botNumber: _0xafca2a,
  pushname: _0x5ad102,
  isMe: _0x4243dd,
  isOwner: _0x5088c6,
  groupMetadata: _0x572c09,
  groupName: _0x57ac69,
  participants: _0x53a890,
  groupAdmins: _0x492447,
  isBotAdmins: _0x240888,
  isAdmins: _0x4a807c,
  reply: _0x9c7be5
}) => {
  try {
    const _0x12bbbb = await axios.get("https://suhas-bro-apii.vercel.app/hiru");
    const _0x21d7f5 = _0x12bbbb.data;
    if (!_0x21d7f5 || !_0x21d7f5.newsURL || !_0x21d7f5.title || !_0x21d7f5.image || !_0x21d7f5.text) {
      return _0x9c7be5("*No News Available At This Moment* ❗");
    }
    const {
      newsURL: _0x12bc1e,
      title: _0x3400e9,
      image: _0x264477,
      text: _0x2ed20d,
      Power: _0x23b608
    } = _0x21d7f5;
    let _0x4a0966 = "𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 𝐍𝐞𝐰𝐬 📰\n\n";
    _0x4a0966 += "✨ *Title*: " + _0x3400e9 + "\n\n";
    _0x4a0966 += "📑 *Description*:\n" + _0x2ed20d + "\n\n";
    _0x4a0966 += "⛓️‍💥 *Url*: www.hirunews.lk\n\n";
    _0x4a0966 += "> *ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ*";
    if (_0x264477) {
      await _0x20af81.sendMessage(_0x516fed.chat, {
        'image': {
          'url': _0x264477
        },
        'caption': _0x4a0966
      }, {
        'quoted': _0x516fed
      });
    } else {
      await _0x20af81.sendMessage(_0x516fed.chat, {
        'text': _0x4a0966
      }, {
        'quoted': _0x516fed
      });
    }
  } catch (_0x56c4e8) {
    console.error(_0x56c4e8);
    _0x9c7be5("*An Error Occurred While Fetching News At This Moment* ❗");
  }
});
cmd({
  'pattern': "happy",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "other",
  'react': '😂',
  'filename': __filename
}, async (_0x4c0076, _0x16da98, _0x3a4376, {
  from: _0xa22cf0,
  reply: _0xea3761
}) => {
  try {
    const _0x473889 = await _0x4c0076.sendMessage(_0xa22cf0, {
      'text': '😂'
    });
    const _0x51cf8a = ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const _0x512ce8 of _0x51cf8a) {
      await new Promise(_0x5e48ac => setTimeout(_0x5e48ac, 0x3e8));
      await _0x4c0076.relayMessage(_0xa22cf0, {
        'protocolMessage': {
          'key': _0x473889.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x512ce8
          }
        }
      }, {});
    }
  } catch (_0x341d78) {
    console.log(_0x341d78);
    _0xea3761("❌ *Error!* " + _0x341d78.message);
  }
});
cmd({
  'pattern': "heart",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "other",
  'react': '❤️',
  'filename': __filename
}, async (_0x5d0409, _0x417fae, _0x494a78, {
  from: _0xfe399e,
  reply: _0x249f33
}) => {
  try {
    const _0x3c50f8 = await _0x5d0409.sendMessage(_0xfe399e, {
      'text': '🖤'
    });
    const _0x1cd158 = ['💖', '💗', '💕', '🩷', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '🤎', '❤️‍🔥', '💞', '💓', '💘', '💝', '♥️', '💟', '❤️‍🩹', '❤️'];
    for (const _0x1aed8c of _0x1cd158) {
      await new Promise(_0x3698e7 => setTimeout(_0x3698e7, 0x3e8));
      await _0x5d0409.relayMessage(_0xfe399e, {
        'protocolMessage': {
          'key': _0x3c50f8.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x1aed8c
          }
        }
      }, {});
    }
  } catch (_0xd716e9) {
    console.log(_0xd716e9);
    _0x249f33("❌ *Error!* " + _0xd716e9.message);
  }
});
cmd({
  'pattern': "angry",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "other",
  'react': '🤡',
  'filename': __filename
}, async (_0x21a694, _0x332065, _0xdcfe03, {
  from: _0x2d6ef8,
  reply: _0x33fc8f
}) => {
  try {
    const _0x504d6c = await _0x21a694.sendMessage(_0x2d6ef8, {
      'text': '👽'
    });
    const _0x23639b = ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const _0x1e9eea of _0x23639b) {
      await new Promise(_0x5c3714 => setTimeout(_0x5c3714, 0x3e8));
      await _0x21a694.relayMessage(_0x2d6ef8, {
        'protocolMessage': {
          'key': _0x504d6c.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x1e9eea
          }
        }
      }, {});
    }
  } catch (_0x5d86b9) {
    console.log(_0x5d86b9);
    _0x33fc8f("❌ *Error!* " + _0x5d86b9.message);
  }
});
cmd({
  'pattern': "sad",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "other",
  'react': '😶',
  'filename': __filename
}, async (_0x27ca82, _0x4b4373, _0x4db064, {
  from: _0x48e530,
  reply: _0x4fc9e6
}) => {
  try {
    const _0x42e654 = await _0x27ca82.sendMessage(_0x48e530, {
      'text': '😔'
    });
    const _0x49a3ff = ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const _0x40b891 of _0x49a3ff) {
      await new Promise(_0x8a5695 => setTimeout(_0x8a5695, 0x3e8));
      await _0x27ca82.relayMessage(_0x48e530, {
        'protocolMessage': {
          'key': _0x42e654.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x40b891
          }
        }
      }, {});
    }
  } catch (_0x5cf09a) {
    console.log(_0x5cf09a);
    _0x4fc9e6("❌ *Error!* " + _0x5cf09a.message);
  }
});
cmd({
  'pattern': "shy",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '🧐',
  'filename': __filename
}, async (_0x15c9a4, _0x5d8627, _0x509ad4, {
  from: _0x269493,
  reply: _0x10f3ef
}) => {
  try {
    const _0x1718e7 = await _0x15c9a4.sendMessage(_0x269493, {
      'text': '🧐'
    });
    const _0x49f764 = ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const _0x4ebf1b of _0x49f764) {
      await new Promise(_0x2ae117 => setTimeout(_0x2ae117, 0x3e8));
      await _0x15c9a4.relayMessage(_0x269493, {
        'protocolMessage': {
          'key': _0x1718e7.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x4ebf1b
          }
        }
      }, {});
    }
  } catch (_0x8b1997) {
    console.log(_0x8b1997);
    _0x10f3ef("❌ *Error!* " + _0x8b1997.message);
  }
});
cmd({
  'pattern': "moon",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🌚',
  'filename': __filename
}, async (_0x19808b, _0x442b9f, _0x525987, {
  from: _0x5dee93,
  reply: _0x180940
}) => {
  try {
    const _0x5c17bc = await _0x19808b.sendMessage(_0x5dee93, {
      'text': '🌝'
    });
    const _0x1d2f95 = ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌝🌚'];
    for (const _0x2c39b0 of _0x1d2f95) {
      await new Promise(_0x124ebf => setTimeout(_0x124ebf, 0x3e8));
      await _0x19808b.relayMessage(_0x5dee93, {
        'protocolMessage': {
          'key': _0x5c17bc.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x2c39b0
          }
        }
      }, {});
    }
  } catch (_0x1f98bf) {
    console.log(_0x1f98bf);
    _0x180940("❌ *Error!* " + _0x1f98bf.message);
  }
});
cmd({
  'pattern': 'confused',
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🤔',
  'filename': __filename
}, async (_0x509e55, _0x4dd96b, _0x43c5e2, {
  from: _0x5a6b34,
  reply: _0x4e85bf
}) => {
  try {
    const _0x25829b = await _0x509e55.sendMessage(_0x5a6b34, {
      'text': '🤔'
    });
    const _0x5905f4 = ['😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', "🤷‍♂️", "🤷‍♀️"];
    for (const _0x37476d of _0x5905f4) {
      await new Promise(_0x1635c6 => setTimeout(_0x1635c6, 0x3e8));
      await _0x509e55.relayMessage(_0x5a6b34, {
        'protocolMessage': {
          'key': _0x25829b.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x37476d
          }
        }
      }, {});
    }
  } catch (_0x4281a2) {
    console.log(_0x4281a2);
    _0x4e85bf("❌ *Error!* " + _0x4281a2.message);
  }
});
cmd({
  'pattern': "hot",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '💋',
  'filename': __filename
}, async (_0x484e1d, _0x5193bb, _0x1e5c2c, {
  from: _0xd047aa,
  reply: _0x14b7a9
}) => {
  try {
    const _0x1cb54c = await _0x484e1d.sendMessage(_0xd047aa, {
      'text': '💋'
    });
    const _0x417a43 = ['🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'];
    for (const _0x5461c4 of _0x417a43) {
      await new Promise(_0x33d62c => setTimeout(_0x33d62c, 0x3e8));
      await _0x484e1d.relayMessage(_0xd047aa, {
        'protocolMessage': {
          'key': _0x1cb54c.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x5461c4
          }
        }
      }, {});
    }
  } catch (_0xf60fb7) {
    console.log(_0xf60fb7);
    _0x14b7a9("❌ *Error!* " + _0xf60fb7.message);
  }
});
cmd({
  'pattern': "didula",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🗿',
  'filename': __filename
}, async (_0xe8976f, _0x4dbe6b, _0x4f3e43, {
  from: _0xd0d5a9,
  reply: _0x3bd891
}) => {
  try {
    const _0x4b184f = await _0xe8976f.sendMessage(_0xd0d5a9, {
      'text': "Didula-AI🗿"
    });
    const _0x2f640b = ["⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀  ⠀  ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__|⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀     ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀(P)⠀⠀     ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀   ⠀     ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀        ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__ ⠀  ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀      ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀ ⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀       ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__| ⠀    ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀   ⠀  ⠀⢳⡀⠀⡏⠀⠀       ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀  ⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀       ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀lodu⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀   ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀  ⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀"];
    for (const _0x4c32e4 of _0x2f640b) {
      await new Promise(_0x249ca9 => setTimeout(_0x249ca9, 0x1f4));
      await _0xe8976f.relayMessage(_0xd0d5a9, {
        'protocolMessage': {
          'key': _0x4b184f.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x4c32e4
          }
        }
      }, {});
    }
  } catch (_0x5bdc8d) {
    console.log(_0x5bdc8d);
    _0x3bd891("❌ *Error!* " + _0x5bdc8d.message);
  }
});
cmd({
  'pattern': "owner",
  'desc': "To check ping",
  'category': 'main',
  'react': '👤',
  'filename': __filename
}, async (_0x54ab86, _0x235348, _0x259898, {
  from: _0x56c53b,
  quoted: _0x32234a,
  body: _0x535cdc,
  isCmd: _0xd26d6e,
  command: _0x41a8fb,
  args: _0x33cfd9,
  q: _0x5b6c92,
  isGroup: _0x2462fc,
  sender: _0x20f044,
  senderNumber: _0x43c974,
  botNumber2: _0x3c9706,
  botNumber: _0x32299e,
  pushname: _0x4c8dd7,
  isMe: _0x47b81a,
  isOwner: _0x1049df,
  groupMetadata: _0x2c4eb2,
  groupName: _0x12474c,
  participants: _0x1284d6,
  groupAdmins: _0x3cecd6,
  isBotAdmins: _0x2dd998,
  isAdmins: _0x4a7fd2,
  reply: _0x266657
}) => {
  try {
    await _0x54ab86.sendMessage(_0x56c53b, {
      'contacts': {
        'displayName': "Didula Rashmika",
        'contacts': [{
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:Didula Rashmika\nORG:Didula MD V2;\nTEL;type=CELL;type=VOICE;waid=94741671668:+94 741 671 668\nTEL;type=CELL;type=VOICE;waid=94771820962:+94 771 820 962\nEND:VCARD"
        }]
      }
    }, {
      'quoted': _0x235348
    });
    await _0x54ab86.sendMessage(_0x56c53b, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*👤 Didula MD V2 Owner Details*\n\n*👨‍💻 Owner Name:* Didula Rashmika\n*📱 Owner Number:* wa.me/94741671668\n*📱 Owner Number:* wa.me/94771820962\n\n\n*💫 Thanks For Using Didula MD V2*"
    }, {
      'quoted': _0x235348
    });
  } catch (_0x19053d) {
    _0x266657(_0x19053d);
  }
});
cmd({
  'pattern': "repo",
  'desc': "repo the bot",
  'react': '📡',
  'category': "main",
  'filename': __filename
}, async (_0x176ded, _0x222608, _0x292879, {
  from: _0x2c25e0,
  quoted: _0x51bdd3,
  body: _0x15e38e,
  isCmd: _0x59f9da,
  command: _0x3d497d,
  args: _0x2d9cd6,
  q: _0x4a24dd,
  isGroup: _0x513515,
  sender: _0x459d66,
  senderNumber: _0x5a7f19,
  botNumber2: _0x592d52,
  botNumber: _0x2fd56b,
  pushname: _0x398904,
  isMe: _0x4743a3,
  isOwner: _0x25f8d8,
  groupMetadata: _0x4b302f,
  groupName: _0x3870d5,
  participants: _0x7b1a0f,
  groupAdmins: _0x3c03c7,
  isBotAdmins: _0x5b1d2e,
  isAdmins: _0x20068c,
  reply: _0x59f3bc
}) => {
  try {
    await _0x176ded.sendMessage(_0x2c25e0, {
      'image': {
        'url': "https://files.catbox.moe/za6ytm.jpg"
      },
      'caption': "*Didula MD Come Back   💗🌝*\n\nDeploy Your Bot using Below Website\n\nhttps://webd-didula-rashmikas-projects.vercel.app/\n\n\n*You can update and fix errors your bot using  .restart*  (automatically update)\n\n\n⚠️ Share with others quickly ⚠️\n\n\n\n📥FOLLOW FOR UPDATE\nhttps://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f\n\n> 🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌"
    }, {
      'quoted': _0x222608
    });
  } catch (_0x5d571d) {
    console.log(_0x5d571d);
    _0x59f3bc('' + _0x5d571d);
  }
});
