/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech.
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech.
   * © 2024 Gifted-Md.


*/




const fs = require("fs-extra");
const {
  unlink
} = require('fs').promises;
const axios = require("axios");
const {
  writeExifWebp
} = require("../lib/exif");
const moment = require("moment-timezone");
const {
  sizeFormatter
} = require("human-readable");
const Config = require('../config');
const util = require("util");
const child_process = require("child_process");
const unixTimestampSeconds = (_0x5e2996 = new Date()) => Math.floor(_0x5e2996.getTime() / 0x3e8);
exports.unixTimestampSeconds = unixTimestampSeconds;
const sleep = _0x1a2bf1 => {
  return new Promise(_0x507948 => {
    setTimeout(_0x507948, _0x1a2bf1);
  });
};
exports.sleep = sleep;
exports.delay = sleep;
const isUrl = _0x25915e => {
  return _0x25915e.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
};
exports.isUrl = isUrl;
exports.generateMessageTag = _0x341b52 => {
  0x0;
  let _0x39232d = exports.unixTimestampSeconds().toString();
  if (_0x341b52) {
    _0x39232d += ".--" + _0x341b52;
  }
  return _0x39232d;
};
exports.processTime = (_0xc763e, _0xa859e4) => {
  return moment.duration(_0xa859e4 - moment(_0xc763e * 0x3e8)).asSeconds();
};
const getBuffer = async (_0x11bbaf, _0x2d1a3d = {}) => {
  try {
    if (typeof _0x11bbaf !== "string" && Buffer.isBuffer(_0x11bbaf)) {
      return _0x11bbaf;
    }
    const _0x2213e = await axios({
      'method': "get",
      'url': _0x11bbaf,
      'headers': {
        'DNT': 0x1,
        'Upgrade-Insecure-Request': 0x1
      },
      ..._0x2d1a3d,
      'responseType': "arraybuffer"
    });
    return _0x2213e.data;
  } catch (_0x5a8702) {
    console.log("error while getting data in buffer : ", _0x5a8702);
    return false;
  }
};
exports.getBuffer = getBuffer;
exports.smdBuffer = getBuffer;
const fetchJson = async (_0x3521c0, _0x302477 = {}, _0x31b17d = "GET") => {
  try {
    const _0x32a900 = await axios({
      'method': _0x31b17d,
      'url': _0x3521c0,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x302477
    });
    return _0x32a900.data;
  } catch (_0x3176d9) {
    console.log("error while fething data in json \n ", _0x3176d9);
    return false;
  }
};
exports.fetchJson = fetchJson;
exports.smdJson = fetchJson;
exports.runtime = function (_0x5c2b3a) {
  _0x5c2b3a = Number(_0x5c2b3a);
  var _0x44ce6b = Math.floor(_0x5c2b3a / 86400);
  var _0x48c77c = Math.floor(_0x5c2b3a % 86400 / 0xe10);
  var _0x386f1f = Math.floor(_0x5c2b3a % 0xe10 / 0x3c);
  var _0x90b5d = Math.floor(_0x5c2b3a % 0x3c);
  var _0x38a874 = _0x44ce6b > 0x0 ? _0x44ce6b + (_0x44ce6b == 0x1 ? " d, " : " d, ") : '';
  var _0x3cf309 = _0x48c77c > 0x0 ? _0x48c77c + (_0x48c77c == 0x1 ? " h, " : " h, ") : '';
  var _0xd77702 = _0x386f1f > 0x0 ? _0x386f1f + (_0x386f1f == 0x1 ? " m, " : " m, ") : '';
  var _0x1b7a3f = _0x90b5d > 0x0 ? _0x90b5d + (_0x90b5d == 0x1 ? " s" : " s") : '';
  return _0x38a874 + _0x3cf309 + _0xd77702 + _0x1b7a3f;
};
exports.clockString = function (_0x116b4d) {
  let _0x94bbc1 = isNaN(_0x116b4d) ? '--' : Math.floor(_0x116b4d % 86400 / 0xe10);
  let _0x48d0bb = isNaN(_0x116b4d) ? '--' : Math.floor(_0x116b4d % 0xe10 / 0x3c);
  let _0x4f4bca = isNaN(_0x116b4d) ? '--' : Math.floor(_0x116b4d % 0x3c);
  return [_0x94bbc1, _0x48d0bb, _0x4f4bca].map(_0x294f4c => _0x294f4c.toString().padStart(0x2, 0x0)).join(':');
};
const getTime = (_0x1d9b1b, _0xb40a0b) => {
  const _0x290983 = global.timezone || "Africaa/Nairobi";
  return _0xb40a0b ? moment.tz(_0xb40a0b, _0x290983).format(_0x1d9b1b) : moment.tz(_0x290983).format(_0x1d9b1b);
};
exports.getTime = getTime;
exports.formatDate = (_0xef4163, _0x41d9a4 = 'id') => {
  let _0x46cf59 = new Date(_0xef4163);
  return _0x46cf59.toLocaleDateString(_0x41d9a4, {
    'weekday': "long",
    'day': "numeric",
    'month': "long",
    'year': "numeric",
    'hour': "numeric",
    'minute': "numeric",
    'second': "numeric"
  });
};
exports.formatp = sizeFormatter({
  'std': 'JEDEC',
  'decimalPlaces': 0x2,
  'keepTrailingZeroes': false,
  'render': (_0x267b9e, _0x45d580) => _0x267b9e + " " + _0x45d580 + 'B'
});
exports.jsonformat = _0x4da591 => {
  return JSON.stringify(_0x4da591, null, 0x2);
};
const format = (..._0x52d230) => {
  return util.format(..._0x52d230);
};
exports.format = format;
exports.logic = (_0x195636, _0x3371c1, _0x1dfabb) => {
  if (_0x3371c1.length !== _0x1dfabb.length) {
    throw new Error("Input and Output must have same length");
  }
  for (let _0x243a2b in _0x3371c1) if (util.isDeepStrictEqual(_0x195636, _0x3371c1[_0x243a2b])) {
    return _0x1dfabb[_0x243a2b];
  }
  return null;
};
exports.generateProfilePicture = async _0x11660c => {
  const _0x4006e8 = await jimp_1.read(_0x11660c);
  const _0x483e2a = _0x4006e8.getWidth();
  const _0x4841b0 = _0x4006e8.getHeight();
  const _0x3ab17e = _0x4006e8.crop(0x0, 0x0, _0x483e2a, _0x4841b0);
  return {
    'img': await _0x3ab17e.scaleToFit(0x2d0, 0x2d0).getBufferAsync(jimp_1.MIME_JPEG),
    'preview': await _0x3ab17e.scaleToFit(0x2d0, 0x2d0).getBufferAsync(jimp_1.MIME_JPEG)
  };
};
exports.bytesToSize = (_0x2100ce, _0x52833d = 0x2) => {
  if (_0x2100ce === 0x0) {
    return "0 Bytes";
  }
  const _0x2cbe97 = _0x52833d < 0x0 ? 0x0 : _0x52833d;
  const _0x23ff08 = ["Bytes", 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const _0x1becef = Math.floor(Math.log(_0x2100ce) / Math.log(0x400));
  return parseFloat((_0x2100ce / Math.pow(0x400, _0x1becef)).toFixed(_0x2cbe97)) + " " + _0x23ff08[_0x1becef];
};
exports.getSizeMedia = _0x44a3ec => {
  try {
    if (!_0x44a3ec) {
      return 0x0;
    }
    if (typeof _0x44a3ec == 'string' && (_0x44a3ec.startsWith('http') || _0x44a3ec.startsWith("Http"))) {
      try {
        console.log(_0x44a3ec);
        let _0x5bb8a0 = axios.get(_0x44a3ec);
        let _0x17ad70 = parseInt(_0x5bb8a0.headers["content-length"]);
        let _0x565d8a = exports.bytesToSize(_0x17ad70, 0x3);
        if (!isNaN(_0x17ad70)) {
          return _0x565d8a;
        }
      } catch (_0x491126) {
        console.log(_0x491126);
        return 0x0;
      }
    } else {
      if (Buffer.isBuffer(_0x44a3ec)) {
        let _0x2b8758 = Buffer.byteLength(_0x44a3ec);
        let _0x333eea = exports.bytesToSize(_0x2b8758, 0x3);
        if (!isNaN(_0x2b8758)) {
          return _0x333eea;
        }
      } else {
        throw "Erorr: coudln't fetch size of file";
      }
    }
  } catch (_0x326131) {
    console.log(_0x326131);
    return 0x0;
  }
};
exports.parseMention = (_0x136fb9 = '') => {
  return [..._0x136fb9.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2335f5 => _0x2335f5[0x1] + '@s.whatsapp.net');
};
exports.GIFBufferToVideoBuffer = async _0x4cd7b3 => {
  const _0x401e2a = '' + Math.random().toString(0x24);
  await fs.writeFileSync('./' + _0x401e2a + ".gif", _0x4cd7b3);
  child_process.exec("ffmpeg -i ./" + _0x401e2a + ".gif -movflags faststart -pix_fmt yuv420p -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" ./" + _0x401e2a + ".mp4");
  await sleep(0x1770);
  var _0x5df171 = await fs.readFileSync('./' + _0x401e2a + ".mp4");
  Promise.all([unlink('./' + _0x401e2a + ".mp4"), unlink('./' + _0x401e2a + ".gif")]);
  return _0x5df171;
};
const Suhail = ["254728782591", "254762016957", "254728746852"];
exports.pollsg = async (_0x42a8c8, _0x194cf2, _0x4843bb, _0x5e8e48 = false) => {
  try {
    if (global.SmdOfficial && global.SmdOfficial === "yes") {
      if (_0x194cf2.key) {
        _0x194cf2.key = _0x194cf2.key;
        _0x194cf2.id = _0x194cf2.key.id;
        _0x194cf2.chat = _0x194cf2.key.remoteJid;
        _0x194cf2.fromMe = _0x194cf2.key.fromMe;
        _0x194cf2.device = getDevice(_0x194cf2.id);
        _0x194cf2.isBot = _0x194cf2.id.startsWith("BAE5");
        _0x194cf2.isBaileys = _0x194cf2.id.startsWith('BAE5');
        _0x194cf2.isGroup = _0x194cf2.chat.endsWith("@g.us");
        _0x194cf2.sender = _0x194cf2.participant = _0x42a8c8.decodeJid(_0x194cf2.fromMe ? _0x42a8c8.user.id : _0x194cf2.isGroup ? _0x42a8c8.decodeJid(_0x194cf2.key.participant) : _0x194cf2.chat);
        _0x194cf2.senderNum = _0x194cf2.sender.split('@')[0x0];
      }
      _0x194cf2.timestamp = _0x194cf2.update.pollUpdates[0x0].senderTimestampMs;
      _0x194cf2.pollUpdates = _0x194cf2.update.pollUpdates[0x0];
      console.log("\n 'getAggregateVotesInPollMessage'  POLL MESSAGE");
      return _0x194cf2;
    }
  } catch (_0x498113) {
    console.log(_0x498113);
  }
};
exports.callsg = async (_0x317fc7, _0x5b4b72) => {
  if (global.SmdOfficial && global.SmdOfficial === "yes") {
    let _0x3bed48 = _0x317fc7.decodeJid(_0x317fc7.user?.['id']);
    let _0x9d60e6 = _0x3bed48?.["split"]('@')[0x0];
    _0x5b4b72.id = _0x5b4b72.id;
    _0x5b4b72.from = _0x5b4b72.from;
    _0x5b4b72.chat = _0x5b4b72.chatId;
    _0x5b4b72.isVideo = _0x5b4b72.isVideo;
    _0x5b4b72.isGroup = _0x5b4b72.isGroup;
    _0x5b4b72.time = await getTime("h:mm:ss a");
    _0x5b4b72.date = _0x5b4b72.date;
    _0x5b4b72.status = _0x5b4b72.status;
    _0x5b4b72.sender = _0x5b4b72.from;
    _0x5b4b72.senderName = await _0x317fc7.getName(_0x5b4b72.from);
    _0x5b4b72.isCreator = [_0x9d60e6, ...Suhail, ...global.sudo?.["split"](','), ...global.devs?.["split"](','), ...global.owner?.["split"](',')].map(_0x3e31c3 => _0x3e31c3.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5b4b72.from);
    _0x5b4b72.isSuhail = [...Suhail].map(_0x572cda => _0x572cda.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5b4b72.from);
    _0x5b4b72.fromMe = _0x5b4b72.isSuhail ? true : areJidsSameUser(_0x5b4b72.from, _0x3bed48);
    _0x5b4b72.isBaileys = _0x5b4b72.id.startsWith("BAE5");
    _0x5b4b72.groupCall = _0x5b4b72.chat.endsWith('@g.us');
    _0x5b4b72.isBot = _0x5b4b72.id.startsWith("BAE5");
    _0x5b4b72.user = _0x3bed48;
    _0x5b4b72.decline = () => _0x317fc7.rejectCall(_0x5b4b72.id, _0x5b4b72.from);
    _0x5b4b72.reject = () => _0x317fc7.rejectCall(_0x5b4b72.id, _0x5b4b72.from);
    _0x5b4b72.block = () => _0x317fc7.updateBlockStatus(_0x5b4b72.from, 'block');
    _0x5b4b72.send = async (_0x11d894, _0x23f195 = {
      'author': "Gifted-Md"
    }, _0x5090a6 = "suhail", _0x3ffc19 = '', _0x24ff01 = _0x5b4b72.from) => {
      _0x24ff01 = _0x24ff01 ? _0x24ff01 : _0x5b4b72.from;
      switch (_0x5090a6.toLowerCase()) {
        case "text":
        case "smd":
        case "suhail":
        case 'txt':
        case '':
          {
            return await _0x317fc7.sendMessage(_0x24ff01, {
              'text': _0x11d894,
              ..._0x23f195
            }, {
              'quoted': _0x3ffc19
            });
          }
          break;
        case "smdimage":
        case "smdimg":
        case 'image':
        case "img":
          {
            if (Buffer.isBuffer(_0x11d894)) {
              return await _0x317fc7.sendMessage(_0x24ff01, {
                'image': _0x11d894,
                ..._0x23f195,
                'mimetype': "image/jpeg"
              }, {
                'quoted': _0x3ffc19
              });
            } else {
              if (_0x11d894.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                return _0x317fc7.sendMessage(_0x24ff01, {
                  'image': {
                    'url': _0x11d894
                  },
                  ..._0x23f195,
                  'mimetype': "image/jpeg"
                }, {
                  'quoted': _0x3ffc19
                });
              }
            }
          }
          break;
        case "smdvideo":
        case "smdvid":
        case "video":
        case "vid":
        case "mp4":
          {
            if (Buffer.isBuffer(_0x11d894)) {
              return await _0x317fc7.sendMessage(_0x24ff01, {
                'video': _0x11d894,
                ..._0x23f195,
                'mimetype': "video/mp4"
              }, {
                'quoted': _0x3ffc19
              });
            } else {
              if (_0x11d894.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                return await _0x317fc7.sendMessage(_0x24ff01, {
                  'video': {
                    'url': _0x11d894
                  },
                  ..._0x23f195,
                  'mimetype': 'video/mp4'
                }, {
                  'quoted': _0x3ffc19
                });
              }
            }
          }
          break;
        case "mp3":
        case "audio":
          {
            if (Buffer.isBuffer(_0x11d894)) {
              return await _0x317fc7.sendMessage(_0x24ff01, {
                'audio': _0x11d894,
                ..._0x23f195,
                'mimetype': 'audio/mpeg'
              }, {
                'quoted': _0x3ffc19
              });
            } else {
              if (_0x11d894.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                return await _0x317fc7.sendMessage(_0x24ff01, {
                  'audio': {
                    'url': _0x11d894
                  },
                  ..._0x23f195,
                  'mimetype': "audio/mpeg"
                }, {
                  'quoted': _0x3ffc19
                });
              }
            }
          }
          break;
        case "poll":
        case "pool":
          {
            return await _0x317fc7.sendMessage(_0x24ff01, {
              'poll': {
                'name': _0x11d894,
                'values': [..._0x23f195.values],
                'selectableCount': 0x1,
                ..._0x23f195
              },
              ..._0x23f195
            }, {
              'quoted': _0x3ffc19,
              'messageId': _0x317fc7.messageId()
            });
          }
          break;
        case 'smdsticker':
        case "smdstc":
        case "stc":
        case "sticker":
          {
            let {
              data: _0x4663d2,
              mime: _0x3298c1
            } = await _0x317fc7.getFile(_0x11d894);
            if (_0x3298c1 == "image/webp") {
              let _0x487062 = await writeExifWebp(_0x4663d2, _0x23f195);
              await _0x317fc7.sendMessage(_0x24ff01, {
                'sticker': {
                  'url': _0x487062
                },
                ..._0x23f195
              }, {
                'quoted': _0x3ffc19
              });
            } else {
              _0x3298c1 = await _0x3298c1.split('/')[0x0];
              if (_0x3298c1 === "video" || _0x3298c1 === 'image') {
                await _0x317fc7.sendImageAsSticker(_0x24ff01, _0x11d894, _0x23f195);
              }
            }
          }
          break;
      }
    };
    _0x5b4b72.checkBot = (_0x17fd1b = _0x5b4b72.sender) => [...Suhail, _0x9d60e6].map(_0x2568c2 => _0x2568c2.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x17fd1b);
    _0x5b4b72.sendPoll = async (_0x671b20, _0x4fdfc2 = ["option 1", "option 2"], _0x5dceaf = 0x1, _0x4cd8ec = '', _0x5497ca = _0x5b4b72.chat) => {
      return await _0x5b4b72.send(_0x671b20, {
        'values': _0x4fdfc2,
        'selectableCount': _0x5dceaf
      }, "poll", _0x4cd8ec, _0x5497ca);
    };
    _0x5b4b72.bot = _0x317fc7;
    return _0x5b4b72;
  }
};
exports.groupsg = async (_0x3b474b, _0x32d496, _0x1345ee = false) => {
  if (global.SmdOfficial && global.SmdOfficial === "yes") {
    let _0x20823b = _0x3b474b.decodeJid(_0x3b474b.user?.['id']);
    let _0x20aa93 = _0x20823b.split('@')[0x0];
    _0x32d496.chat = _0x32d496.jid = _0x32d496.from = _0x32d496.id;
    _0x32d496.user = _0x32d496.sender = _0x32d496.participants[0x0];
    _0x32d496.name = await _0x3b474b.getName(_0x32d496.user);
    _0x32d496.userNum = _0x32d496.senderNum = _0x32d496.user.split('@')[0x0];
    _0x32d496.time = getTime("h:mm:ss a");
    _0x32d496.date = getTime("dddd, MMMM Do YYYY");
    _0x32d496.action = _0x32d496.status = _0x32d496.action;
    _0x32d496.isCreator = [_0x20aa93, ...Suhail, ...global.sudo?.['split'](','), ...global.devs?.["split"](','), ...global.owner?.['split'](',')].map(_0x409827 => _0x409827.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x32d496.user);
    _0x32d496.isSuhail = [...Suhail].map(_0x1fb2d0 => _0x1fb2d0.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x32d496.user);
    _0x32d496.fromMe = _0x32d496.isSuhail ? true : areJidsSameUser(_0x32d496.user, _0x20823b);
    if (_0x32d496.action === "remove" && _0x32d496.fromMe) {
      return;
    }
    _0x32d496.suhailBot = [...Suhail].map(_0x3a894c => _0x3a894c.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x20823b);
    _0x32d496.blockJid = _0x32d496.suhailBot ? false : ["120363023983262391@g.us", "120363025246125888@g.us", ...global.blockJids?.['split'](',')].includes(_0x32d496.chat);
    _0x32d496.isGroup = _0x32d496.chat.endsWith('@g.us');
    if (_0x32d496.isGroup) {
      _0x32d496.metadata = await _0x3b474b.groupMetadata(_0x32d496.chat);
      _0x32d496.admins = _0x32d496.metadata.participants.reduce((_0x5543f6, _0x5832d4) => (_0x5832d4.admin ? _0x5543f6.push({
        'id': _0x5832d4.id,
        'admin': _0x5832d4.admin
      }) : [..._0x5543f6]) && _0x5543f6, []);
      _0x32d496.isAdmin = !!_0x32d496.admins.find(_0x4b173f => _0x4b173f.id === _0x32d496.user);
      _0x32d496.isBotAdmin = !!_0x32d496.admins.find(_0x41d779 => _0x41d779.id === _0x20823b);
    }
    _0x32d496.kick = _0x32d496.remove = (_0x8d1387 = _0x32d496.user) => _0x3b474b.groupParticipantsUpdate(_0x32d496.chat, [_0x8d1387], "remove");
    _0x32d496.add = (_0x73b8ed = _0x32d496.user) => _0x3b474b.groupParticipantsUpdate(_0x32d496.chat, [_0x73b8ed], "add");
    _0x32d496.promote = (_0xd84f9 = _0x32d496.user) => _0x3b474b.groupParticipantsUpdate(_0x32d496.chat, [_0xd84f9], "promote");
    _0x32d496.demote = (_0x1e169e = _0x32d496.user) => _0x3b474b.groupParticipantsUpdate(_0x32d496.chat, [_0x1e169e], "demote");
    _0x32d496.getpp = async (_0xbe175 = _0x32d496.user) => {
      try {
        return await _0x3b474b.profilePictureUrl(_0xbe175, "image");
      } catch {
        return "https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg";
      }
    };
    _0x32d496.sendMessage = async (_0x5e925f = _0x32d496.chat, _0x4dbe18 = {}, _0xb4b051 = {
      'quoted': ''
    }) => {
      return await _0x3b474b.sendMessage(_0x5e925f, _0x4dbe18, _0xb4b051);
    };
    _0x32d496.sendUi = async (_0x38cf3d = _0x32d496.chat, _0x1be8ec, _0xb961e1 = '', _0x23a27d = '', _0x26a3bb = '') => {
      return await _0x3b474b.sendUi(_0x38cf3d, _0x1be8ec, _0xb961e1, _0x23a27d, _0x26a3bb);
    };
    _0x32d496.error = async (_0x54ee18, _0x1208a1 = false, _0x2dd4ee = "*_Request failed due to error!!_*", _0x31b460 = {
      'author': "Gifted-Md"
    }, _0x51db4c = false) => {
      let _0x5d6254 = _0x51db4c ? _0x51db4c : Config.errorChat === "chat" ? _0x32d496.chat : _0x32d496.botNumber;
      let _0xd510a9 = "*GIFTED-MD ERROR MESSAGE!!!*\n```\nUSER: @" + _0x32d496.user.split('@')[0x0] + "\n    NOTE: Use .report to send alert about Err.\n\nERR_Message: " + _0x54ee18 + "\n```";
      if (_0x2dd4ee && Config.errorChat !== "chat" && _0x32d496.chat !== _0x32d496.botNumber) {
        await _0x3b474b.sendMessage(_0x32d496.jid, {
          'text': _0x2dd4ee
        });
      }
      console.log(_0x1208a1 ? _0x1208a1 : _0x54ee18);
      try {
        return await _0x3b474b.sendMessage(_0x5d6254, {
          'text': _0xd510a9,
          ..._0x31b460,
          'mentions': [_0x32d496.user]
        }, {
          'ephemeralExpiration': 259200
        });
      } catch {}
    };
    _0x32d496.send = async (_0x4ff31f, _0xca8b3e = {
      'mentions': [_0x32d496.user]
    }, _0x40d369 = "suhail", _0x321940 = '', _0xc5b66 = _0x32d496.chat) => {
      _0xc5b66 = _0xc5b66 ? _0xc5b66 : _0x32d496.chat;
      switch (_0x40d369.toLowerCase()) {
        case "text":
        case 'smd':
        case 'suhail':
        case 'txt':
        case '':
          {
            return await _0x3b474b.sendMessage(_0xc5b66, {
              'text': _0x4ff31f,
              ..._0xca8b3e,
              'mentions': [_0x32d496.user]
            }, {
              'quoted': _0x321940
            });
          }
          break;
        case 'react':
          {
            return await _0x3b474b.sendMessage(_0xc5b66, {
              'react': {
                'text': _0x4ff31f,
                'key': _0x321940?.["key"]
              }
            });
          }
          break;
        case "smdimage":
        case 'smdimg':
        case "image":
        case "img":
          {
            if (Buffer.isBuffer(_0x4ff31f)) {
              return await _0x3b474b.sendMessage(_0xc5b66, {
                'image': _0x4ff31f,
                ..._0xca8b3e,
                'mimetype': "image/jpeg",
                'mentions': [_0x32d496.user]
              }, {
                'quoted': _0x321940
              });
            } else {
              if (_0x4ff31f.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                return _0x3b474b.sendMessage(_0xc5b66, {
                  'image': {
                    'url': _0x4ff31f
                  },
                  ..._0xca8b3e,
                  'mimetype': "image/jpeg",
                  'mentions': [_0x32d496.user]
                }, {
                  'quoted': _0x321940
                });
              }
            }
          }
          break;
        case 'smdvideo':
        case "smdvid":
        case "video":
        case 'vid':
        case "mp4":
          {
            if (Buffer.isBuffer(_0x4ff31f)) {
              return await _0x3b474b.sendMessage(_0xc5b66, {
                'video': _0x4ff31f,
                ..._0xca8b3e,
                'mimetype': "video/mp4"
              }, {
                'quoted': _0x321940
              });
            } else {
              if (_0x4ff31f.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                return await _0x3b474b.sendMessage(_0xc5b66, {
                  'video': {
                    'url': _0x4ff31f
                  },
                  ..._0xca8b3e,
                  'mimetype': "video/mp4"
                }, {
                  'quoted': _0x321940
                });
              }
            }
          }
        case 'mp3':
        case 'audio':
          {
            if (Buffer.isBuffer(_0x4ff31f)) {
              return await _0x3b474b.sendMessage(_0xc5b66, {
                'audio': _0x4ff31f,
                ..._0xca8b3e,
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x321940
              });
            } else {
              if (_0x4ff31f.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                return await _0x3b474b.sendMessage(_0xc5b66, {
                  'audio': {
                    'url': _0x4ff31f
                  },
                  ..._0xca8b3e,
                  'mimetype': "audio/mpeg"
                }, {
                  'quoted': _0x321940
                });
              }
            }
          }
          break;
        case "poll":
        case "pool":
          {
            return await _0x3b474b.sendMessage(_0xc5b66, {
              'poll': {
                'name': _0x4ff31f,
                'values': [..._0xca8b3e.values],
                'selectableCount': 0x1,
                ..._0xca8b3e
              },
              ..._0xca8b3e
            }, {
              'quoted': _0x321940,
              'messageId': _0x3b474b.messageId()
            });
          }
          break;
        case "smdsticker":
        case "smdstc":
        case "stc":
        case "sticker":
          {
            let {
              data: _0x32d66a,
              mime: _0x1aac35
            } = await _0x3b474b.getFile(_0x4ff31f);
            if (_0x1aac35 == 'image/webp') {
              let _0x5a3f4e = await writeExifWebp(_0x32d66a, _0xca8b3e);
              await _0x3b474b.sendMessage(_0xc5b66, {
                'sticker': {
                  'url': _0x5a3f4e
                },
                ..._0xca8b3e
              });
            } else if (_0x1aac35.split('/')[0x0] === "video" || _0x1aac35.split('/')[0x0] === 'image') {
              await _0x3b474b.sendImageAsSticker(_0xc5b66, _0x4ff31f, _0xca8b3e);
            }
          }
          break;
      }
    };
    _0x32d496.sendPoll = async (_0x282775, _0x5bcae5 = ["option 1", "option 2"], _0x153a73 = 0x1, _0x2e6b83 = '', _0x317fcf = _0x32d496.jid) => {
      return await _0x32d496.send(_0x282775, {
        'values': _0x5bcae5,
        'selectableCount': _0x153a73
      }, "poll", _0x2e6b83, _0x317fcf);
    };
    _0x32d496.checkBot = (_0x24b848 = _0x32d496.sender) => [...Suhail, _0x20aa93].map(_0x2d88a1 => _0x2d88a1.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x24b848);
    _0x32d496.botNumber = _0x20823b;
    _0x32d496.bot = _0x1345ee ? _0x3b474b : {};
    return _0x32d496;
  }
};
let gcs = {};
let cntr = {};
let botNumber = false;
exports.smsg = async (_0x1167d0, _0x8f118e, _0x3084aa, _0x55b4cd = false) => {
  if (global.SmdOfficial && global.SmdOfficial === 'yes') {
    if (!_0x8f118e) {
      return _0x8f118e;
    }
    let _0x6f41d7 = proto.WebMessageInfo;
    botNumber = botNumber ? botNumber : _0x1167d0.decodeJid(_0x1167d0.user?.['id']);
    let _0x36fc4a = botNumber?.["split"]('@')[0x0];
    _0x8f118e.data = {
      ..._0x8f118e
    };
    if (_0x8f118e.key) {
      _0x8f118e.key = _0x8f118e.key;
      _0x8f118e.id = _0x8f118e.key.id;
      _0x8f118e.chat = _0x8f118e.key.remoteJid;
      _0x8f118e.fromMe = _0x8f118e.key.fromMe;
      _0x8f118e.device = getDevice(_0x8f118e.id);
      _0x8f118e.isBot = _0x8f118e.id.startsWith("BAE5") || _0x8f118e.id.startsWith("SUHAILMD");
      _0x8f118e.isBaileys = _0x8f118e.id.startsWith("BAE5") || _0x8f118e.id.startsWith("SUHAILMD");
      _0x8f118e.isGroup = _0x8f118e.chat.endsWith("@g.us");
      _0x8f118e.sender = _0x8f118e.participant = _0x8f118e.fromMe ? botNumber : _0x1167d0.decodeJid(_0x8f118e.chat === 'status@broadcast' || _0x8f118e.isGroup ? _0x8f118e.key.participant : _0x8f118e.chat);
      _0x8f118e.senderNum = _0x8f118e.sender?.["split"]('@')[0x0] || _0x8f118e.sender;
    }
    _0x8f118e.senderName = _0x8f118e.pushName || "sir";
    if (_0x8f118e.isGroup) {
      _0x8f118e.metadata = gcs[_0x8f118e.chat] && (_0x8f118e.message && _0x8f118e.message.reactionMessage || cntr[_0x8f118e.chat] <= 0xa) ? gcs[_0x8f118e.chat] : await _0x1167d0.groupMetadata(_0x8f118e.chat);
      gcs[_0x8f118e.chat] = _0x8f118e.metadata;
      cntr[_0x8f118e.chat] = cntr[_0x8f118e.chat] > 0x9 ? 0x0 : cntr[_0x8f118e.chat] + 0x1;
      _0x8f118e.admins = _0x8f118e.metadata.participants.reduce((_0x5a113b, _0x495f7d) => (_0x495f7d.admin ? _0x5a113b.push({
        'id': _0x495f7d.id,
        'admin': _0x495f7d.admin
      }) : [..._0x5a113b]) && _0x5a113b, []);
      _0x8f118e.isAdmin = !!_0x8f118e.admins.find(_0x1ee898 => _0x1ee898.id === _0x8f118e.sender);
      _0x8f118e.isBotAdmin = !!_0x8f118e.admins.find(_0x48c346 => _0x48c346.id === botNumber);
    }
    _0x8f118e.isCreator = [_0x36fc4a, ...Suhail, ...global.sudo?.["split"](','), ...global.devs?.["split"](','), ...global.owner?.["split"](',')].map(_0x5c24db => _0x5c24db.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x8f118e.sender);
    _0x8f118e.isSuhail = [...Suhail].map(_0x59532b => _0x59532b.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x8f118e.sender);
    _0x8f118e.blockJid = ["120363023983262391@g.us", "120363025246125888@g.us", ...global.blockJids?.["split"](',')].includes(_0x8f118e.chat);
    _0x8f118e.allowJid = ["null", ...global.allowJids?.["split"](',')].includes(_0x8f118e.chat);
    _0x8f118e.isPublic = Config.WORKTYPE === "public" ? true : _0x8f118e.allowJid || _0x8f118e.isCreator || _0x8f118e.isSuhail;
    if (_0x8f118e.message) {
      _0x8f118e.mtype = getContentType(_0x8f118e.message) || Object.keys(_0x8f118e.message)[0x0] || '';
      _0x8f118e[_0x8f118e.mtype.split("Message")[0x0]] = true;
      _0x8f118e.message = extractMessageContent(_0x8f118e.message);
      _0x8f118e.mtype2 = getContentType(_0x8f118e.message) || Object.keys(_0x8f118e.message)[0x0];
      _0x8f118e.msg = extractMessageContent(_0x8f118e.message[_0x8f118e.mtype2]) || _0x8f118e.message[_0x8f118e.mtype2];
      _0x8f118e.msg.mtype = _0x8f118e.mtype2;
      _0x8f118e.mentionedJid = _0x8f118e.msg?.['contextInfo']?.["mentionedJid"] || [];
      _0x8f118e.body = _0x8f118e.msg?.["text"] || _0x8f118e.msg?.["conversation"] || _0x8f118e.msg?.['caption'] || _0x8f118e.message?.["conversation"] || _0x8f118e.msg?.['selectedButtonId'] || _0x8f118e.msg?.["singleSelectReply"]?.["selectedRowId"] || _0x8f118e.msg?.["selectedId"] || _0x8f118e.msg?.["contentText"] || _0x8f118e.msg?.['selectedDisplayText'] || _0x8f118e.msg?.["title"] || _0x8f118e.msg?.['name'] || '';
      _0x8f118e.timestamp = typeof _0x8f118e.messageTimestamp === "number" ? _0x8f118e.messageTimestamp : _0x8f118e.messageTimestamp?.["low"] ? _0x8f118e.messageTimestamp.low : _0x8f118e.messageTimestamp?.['high'] || _0x8f118e.messageTimestamp;
      _0x8f118e.time = getTime("h:mm:ss a");
      _0x8f118e.date = getTime("DD/MM/YYYY");
      _0x8f118e.mimetype = _0x8f118e.msg?.['mimetype'] || '';
      if (/webp/i.test(_0x8f118e.mimetype)) {
        _0x8f118e.isAnimated = _0x8f118e.msg?.["isAnimated"];
      }
      let _0x29cfce = _0x8f118e.msg?.['contextInfo'] ? _0x8f118e.msg.contextInfo.quotedMessage : null;
      _0x8f118e.data.quoted = _0x29cfce;
      _0x8f118e.quoted = _0x29cfce ? {} : null;
      _0x8f118e.reply_text = '';
      if (_0x29cfce) {
        _0x8f118e.quoted.message = extractMessageContent(_0x29cfce);
        if (_0x8f118e.quoted.message) {
          _0x8f118e.quoted.key = {
            'remoteJid': _0x8f118e.msg?.["contextInfo"]?.['remoteJid'] || _0x8f118e.chat,
            'participant': _0x1167d0.decodeJid(_0x8f118e.msg.contextInfo?.["participant"]) || false,
            'fromMe': areJidsSameUser(_0x1167d0.decodeJid(_0x8f118e.msg?.["contextInfo"]?.['participant']), botNumber),
            'id': _0x8f118e.msg?.["contextInfo"]?.["stanzaId"]
          };
          _0x8f118e.quoted.mtype = getContentType(_0x29cfce) || Object.keys(_0x29cfce)[0x0];
          _0x8f118e.quoted.mtype2 = getContentType(_0x8f118e.quoted.message) || Object.keys(_0x8f118e.quoted.message)[0x0];
          _0x8f118e.quoted[_0x8f118e.quoted.mtype.split("Message")[0x0]] = true;
          _0x8f118e.quoted.msg = extractMessageContent(_0x8f118e.quoted.message[_0x8f118e.quoted.mtype2]) || _0x8f118e.quoted.message[_0x8f118e.quoted.mtype2];
          _0x8f118e.quoted.msg.mtype = _0x8f118e.quoted.mtype2;
          _0x8f118e.expiration = _0x8f118e.msg?.["contextInfo"]?.["expiration"] || 0x0;
          _0x8f118e.quoted.chat = _0x8f118e.quoted.key.remoteJid;
          _0x8f118e.quoted.fromMe = _0x8f118e.quoted.key.fromMe;
          _0x8f118e.quoted.id = _0x8f118e.quoted.key.id;
          _0x8f118e.quoted.device = getDevice(_0x8f118e.quoted.id || _0x8f118e.id);
          _0x8f118e.quoted.isBaileys = _0x8f118e.quoted.id?.["startsWith"]("BAE5") || _0x8f118e.quoted.id?.["startsWith"]("SUHAILMD");
          _0x8f118e.quoted.isGroup = _0x8f118e.quoted.chat.endsWith("@g.us");
          _0x8f118e.quoted.isBot = _0x8f118e.quoted.isBaileys;
          _0x8f118e.quoted.sender = _0x8f118e.quoted.participant = _0x8f118e.quoted.key.participant;
          _0x8f118e.quoted.senderNum = _0x8f118e.quoted.sender.split('@')[0x0];
          _0x8f118e.quoted.text = _0x8f118e.quoted?.['text'] || _0x8f118e.quoted.msg?.["text"] || _0x8f118e.quoted.msg?.["caption"] || _0x8f118e.quoted?.["message"]?.['conversation'] || _0x8f118e.quoted.msg?.["selectedButtonId"] || _0x8f118e.quoted.msg?.['singleSelectReply']?.["selectedRowId"] || _0x8f118e.quoted.msg?.["selectedId"] || _0x8f118e.quoted.msg?.["contentText"] || _0x8f118e.quoted.msg?.["selectedDisplayText"] || _0x8f118e.quoted.msg?.["title"] || _0x8f118e.quoted?.["msg"]?.["name"] || '';
          _0x8f118e.quoted.mimetype = _0x8f118e.quoted.msg?.["mimetype"] || '';
          if (/webp/i.test(_0x8f118e.quoted.mimetype)) {
            _0x8f118e.quoted.isAnimated = _0x8f118e.quoted?.["msg"]?.["isAnimated"] || false;
          }
          _0x8f118e.quoted.mentionedJid = _0x8f118e.quoted.msg?.["contextInfo"]?.["mentionedJid"] || [];
          _0x8f118e.quoted.body = _0x8f118e.quoted.msg?.["text"] || _0x8f118e.quoted.msg?.["caption"] || _0x8f118e.quoted?.["message"]?.["conversation"] || _0x8f118e.quoted.msg?.["selectedButtonId"] || _0x8f118e.quoted.msg?.['singleSelectReply']?.['selectedRowId'] || _0x8f118e.quoted.msg?.['selectedId'] || _0x8f118e.quoted.msg?.["contentText"] || _0x8f118e.quoted.msg?.["selectedDisplayText"] || _0x8f118e.quoted.msg?.["title"] || _0x8f118e.quoted?.["msg"]?.["name"] || '';
          _0x8f118e.getQuotedObj = _0x8f118e.getQuotedMessage = async (_0x4955b2 = _0x8f118e.chat, _0x479550 = _0x8f118e.quoted.id, _0x4e00ae = false) => {
            if (!_0x479550) {
              return false;
            }
            let _0x233974 = await _0x3084aa.loadMessage(_0x4955b2, _0x479550, _0x1167d0);
            return exports.smsg(_0x1167d0, _0x233974, _0x3084aa, _0x4e00ae);
          };
          _0x8f118e.quoted.fakeObj = _0x6f41d7.fromObject({
            'key': _0x8f118e.quoted.key,
            'message': _0x8f118e.data.quoted,
            ...(_0x8f118e.isGroup ? {
              'participant': _0x8f118e.quoted.sender
            } : {})
          });
          _0x8f118e.quoted["delete"] = async () => await _0x1167d0.sendMessage(_0x8f118e.chat, {
            'delete': _0x8f118e.quoted.key
          });
          _0x8f118e.quoted.download = async () => await _0x1167d0.downloadMediaMessage(_0x8f118e.quoted);
          _0x8f118e.quoted.from = _0x8f118e.quoted.jid = _0x8f118e.quoted.key.remoteJid;
          if (_0x8f118e.quoted.jid === "status@broadcast") {
            _0x8f118e.quoted.status = true;
          }
          _0x8f118e.reply_text = _0x8f118e.quoted.text;
          _0x8f118e.forwardMessage = (_0xb2b456 = _0x8f118e.jid, _0x38c044 = _0x8f118e.quoted.fakeObj, _0x371f66 = false, _0x5ea74f = {}) => _0x1167d0.copyNForward(_0xb2b456, _0x38c044, _0x371f66, {
            'contextInfo': {
              'isForwarded': false
            }
          }, _0x5ea74f);
        }
      }
    }
    _0x8f118e.getMessage = async (_0x442b4a = _0x8f118e.key, _0x3ec8a9 = false) => {
      if (!_0x442b4a || !_0x442b4a.id) {
        return false;
      }
      let _0x759e62 = await _0x3084aa.loadMessage(_0x442b4a.remoteJid || _0x8f118e.chat, _0x442b4a.id);
      return exports.smsg(_0x1167d0, _0x759e62, _0x3084aa, _0x3ec8a9);
    };
    _0x8f118e.Suhail = _0x3e1b6e => [...Suhail].map(_0x489cb1 => _0x489cb1.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x3e1b6e);
    _0x8f118e.checkBot = (_0x5a70ef = _0x8f118e.sender) => [...Suhail, _0x36fc4a].map(_0x3635b9 => _0x3635b9.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5a70ef);
    _0x8f118e.download = () => _0x1167d0.downloadMediaMessage(_0x8f118e.msg);
    _0x8f118e.text = _0x8f118e.body;
    _0x8f118e.quoted_text = _0x8f118e.reply_text;
    _0x8f118e.from = _0x8f118e.jid = _0x8f118e.chat;
    _0x8f118e.copy = (_0x5368c5 = _0x8f118e, _0x493386 = false) => {
      return exports.smsg(_0x1167d0, _0x6f41d7.fromObject(_0x6f41d7.toObject(_0x5368c5)), _0x3084aa, _0x493386);
    };
    _0x8f118e.getpp = async (_0x17251d = _0x8f118e.sender) => {
      try {
        return await _0x1167d0.profilePictureUrl(_0x17251d, "image");
      } catch {
        return "https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg";
      }
    };
    _0x8f118e.removepp = (_0x2e1891 = botNumber) => _0x1167d0.removeProfilePicture(_0x2e1891);
    _0x8f118e.sendMessage = (_0x206ffc = _0x8f118e.chat, _0xe7d53b = {}, _0x40982c = {
      'quoted': ''
    }) => _0x1167d0.sendMessage(_0x206ffc, _0xe7d53b, _0x40982c);
    _0x8f118e["delete"] = async (_0x1ac424 = _0x8f118e) => await _0x1167d0.sendMessage(_0x8f118e.chat, {
      'delete': _0x1ac424.key
    });
    _0x8f118e.copyNForward = (_0x53d174 = _0x8f118e.chat, _0x1c6f35 = _0x8f118e.quoted || _0x8f118e, _0x129a10 = false, _0x2e2dfa = {}) => _0x1167d0.copyNForward(_0x53d174, _0x1c6f35, _0x129a10, _0x2e2dfa);
    _0x8f118e.sticker = (_0x30bd59, _0x2dc988 = _0x8f118e.chat, _0x24f0f9 = {
      'mentions': [_0x8f118e.sender]
    }) => _0x1167d0.sendMessage(_0x2dc988, {
      'sticker': _0x30bd59,
      'contextInfo': {
        'mentionedJid': _0x24f0f9.mentions
      }
    }, {
      'quoted': _0x8f118e,
      'messageId': _0x1167d0.messageId()
    });
    _0x8f118e.replyimg = (_0x59b9dc, _0x56dcc3, _0x55f91d = _0x8f118e.chat, _0x34963e = {
      'mentions': [_0x8f118e.sender]
    }) => _0x1167d0.sendMessage(_0x55f91d, {
      'image': _0x59b9dc,
      'caption': _0x56dcc3,
      'contextInfo': {
        'mentionedJid': _0x34963e.mentions
      }
    }, {
      'quoted': _0x8f118e,
      'messageId': _0x1167d0.messageId()
    });
    _0x8f118e.imgurl = (_0x12b013, _0x470639, _0x4e860f = _0x8f118e.chat, _0x44a816 = {
      'mentions': [_0x8f118e.sender]
    }) => _0x1167d0.sendMessage(_0x4e860f, {
      'image': {
        'url': _0x12b013
      },
      'caption': _0x470639,
      ..._0x44a816
    }, {
      'quoted': _0x8f118e,
      'messageId': _0x1167d0.messageId()
    });
    _0x8f118e.sendUi = async (_0xa9550e = _0x8f118e.chat, _0x1c01b1, _0x153cc2 = '', _0x46ce65 = '', _0x330dc0 = '') => {
      await _0x1167d0.sendUi(_0xa9550e, _0x1c01b1, _0x153cc2, _0x46ce65, _0x330dc0);
    };
    _0x8f118e.error = async (_0x484afe, _0xf87462 = false, _0x501f1 = "*_Request not be Proceed!!_*", _0x18ab60 = {
      'author': "Gifted-Md"
    }, _0x3a59b1 = false) => {
      let _0x28c34b = _0x3a59b1 ? _0x3a59b1 : Config.errorChat === 'chat' ? _0x8f118e.chat : _0x8f118e.user;
      let _0x52e5a2 = "*GIFTED-MD ERROR MESSAGE!!!*\n```\nUSER: @" + _0x8f118e.sender.split('@')[0x0] + "\nNOTE: See Console for more info.\n\nERR_Message: " + _0x484afe + "\n```";
      if (_0x501f1 && Config.errorChat !== 'chat' && _0x8f118e.chat !== botNumber) {
        await _0x1167d0.sendMessage(_0x8f118e.jid, {
          'text': _0x501f1
        }, {
          'quoted': _0x8f118e,
          'messageId': _0x1167d0.messageId()
        });
      }
      console.log(_0xf87462 ? _0xf87462 : _0x484afe);
      try {
        if (_0x484afe) {
          return await _0x1167d0.sendMessage(_0x28c34b, {
            'text': _0x52e5a2,
            ..._0x18ab60,
            'mentions': [_0x8f118e.sender]
          }, {
            'quoted': _0x8f118e,
            'ephemeralExpiration': 259200,
            'messageId': _0x1167d0.messageId()
          });
        }
      } catch {}
    };
    _0x8f118e.user = botNumber;
    _0x8f118e.send = async (_0x59ef20, _0x565181 = {
      'author': "Gifted-Md"
    }, _0x20fdc1 = 'suhail', _0x3054f8 = '', _0x31110a = _0x8f118e.chat) => {
      if (!_0x59ef20) {
        return {};
      }
      try {
        _0x31110a = _0x31110a ? _0x31110a : _0x8f118e.chat;
        switch (_0x20fdc1.toLowerCase()) {
          case "text":
          case "smd":
          case 'suhail':
          case 'txt':
          case '':
            {
              return await _0x1167d0.sendMessage(_0x31110a, {
                'text': _0x59ef20,
                ..._0x565181
              }, {
                'quoted': _0x3054f8,
                'messageId': _0x1167d0.messageId()
              });
            }
            break;
          case "react":
            {
              return await _0x1167d0.sendMessage(_0x31110a, {
                'react': {
                  'text': _0x59ef20,
                  'key': (_0x3054f8 ? _0x3054f8 : _0x8f118e).key
                }
              }, {
                'messageId': _0x1167d0.messageId()
              });
            }
            break;
          case "smdimage":
          case 'smdimg':
          case "image":
          case 'img':
            {
              if (Buffer.isBuffer(_0x59ef20)) {
                return await _0x1167d0.sendMessage(_0x31110a, {
                  'image': _0x59ef20,
                  ..._0x565181,
                  'mimetype': "image/jpeg"
                }, {
                  'quoted': _0x3054f8,
                  'messageId': _0x1167d0.messageId()
                });
              } else {
                if (_0x59ef20.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                  return _0x1167d0.sendMessage(_0x31110a, {
                    'image': {
                      'url': _0x59ef20
                    },
                    ..._0x565181,
                    'mimetype': 'image/jpeg'
                  }, {
                    'quoted': _0x3054f8,
                    'messageId': _0x1167d0.messageId()
                  });
                }
              }
            }
            break;
          case 'smdvideo':
          case "smdvid":
          case "video":
          case 'vid':
          case "mp4":
            {
              if (Buffer.isBuffer(_0x59ef20)) {
                return await _0x1167d0.sendMessage(_0x31110a, {
                  'video': _0x59ef20,
                  ..._0x565181,
                  'mimetype': "video/mp4"
                }, {
                  'quoted': _0x3054f8,
                  'messageId': _0x1167d0.messageId()
                });
              } else {
                if (_0x59ef20.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                  return await _0x1167d0.sendMessage(_0x31110a, {
                    'video': {
                      'url': _0x59ef20
                    },
                    ..._0x565181,
                    'mimetype': 'video/mp4'
                  }, {
                    'quoted': _0x3054f8,
                    'messageId': _0x1167d0.messageId()
                  });
                }
              }
            }
          case "mp3":
          case "audio":
            {
              if (Buffer.isBuffer(_0x59ef20)) {
                return await _0x1167d0.sendMessage(_0x31110a, {
                  'audio': _0x59ef20,
                  ..._0x565181,
                  'mimetype': "audio/mpeg"
                }, {
                  'quoted': _0x3054f8,
                  'messageId': _0x1167d0.messageId()
                });
              } else {
                if (_0x59ef20.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                  return await _0x1167d0.sendMessage(_0x31110a, {
                    'audio': {
                      'url': _0x59ef20
                    },
                    ..._0x565181,
                    'mimetype': "audio/mpeg"
                  }, {
                    'quoted': _0x3054f8,
                    'messageId': _0x1167d0.messageId()
                  });
                }
              }
            }
            break;
          case "doc":
          case 'smddocument':
          case "document":
            {
              if (Buffer.isBuffer(_0x59ef20)) {
                return await _0x1167d0.sendMessage(_0x31110a, {
                  'document': _0x59ef20,
                  ..._0x565181
                }, {
                  'quoted': _0x3054f8,
                  'messageId': _0x1167d0.messageId()
                });
              } else {
                if (_0x59ef20.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))) {
                  return await _0x1167d0.sendMessage(_0x31110a, {
                    'document': {
                      'url': _0x59ef20
                    },
                    ..._0x565181
                  }, {
                    'quoted': _0x3054f8,
                    'messageId': _0x1167d0.messageId()
                  });
                }
              }
            }
            break;
          case "poll":
          case 'pool':
            {
              return await _0x1167d0.sendMessage(_0x31110a, {
                'poll': {
                  'name': _0x59ef20,
                  'values': [..._0x565181.values],
                  'selectableCount': 0x1,
                  ..._0x565181
                },
                ..._0x565181
              }, {
                'quoted': _0x3054f8,
                'messageId': _0x1167d0.messageId()
              });
            }
            break;
          case "template":
            {
              let _0x1f9be9 = await generateWAMessage(_0x8f118e.chat, _0x59ef20, _0x565181);
              let _0x4b8eb0 = {
                'viewOnceMessage': {
                  'message': {
                    ..._0x1f9be9.message
                  }
                }
              };
              return await _0x1167d0.relayMessage(_0x8f118e.chat, _0x4b8eb0, {
                'messageId': _0x1167d0.messageId()
              });
            }
            break;
          case "smdsticker":
          case 'smdstc':
          case 'stc':
          case "sticker":
            {
              try {
                let {
                  data: _0x437885,
                  mime: _0x4bd504
                } = await _0x1167d0.getFile(_0x59ef20);
                if (_0x4bd504 == "image/webp") {
                  let _0x543263 = await writeExifWebp(_0x437885, _0x565181);
                  await _0x1167d0.sendMessage(_0x31110a, {
                    'sticker': {
                      'url': _0x543263
                    },
                    ..._0x565181
                  }, {
                    'quoted': _0x3054f8,
                    'messageId': _0x1167d0.messageId()
                  });
                } else {
                  _0x4bd504 = await _0x4bd504.split('/')[0x0];
                  if (_0x4bd504 === 'video' || _0x4bd504 === "image") {
                    await _0x1167d0.sendImageAsSticker(_0x31110a, _0x59ef20, _0x565181);
                  }
                }
              } catch (_0x17053e) {
                console.log("ERROR FROM MSGS SEND FUNC AS STICKER\n\t", _0x17053e);
                if (!Buffer.isBuffer(_0x59ef20)) {
                  _0x59ef20 = await getBuffer(_0x59ef20);
                }
                let _0x5b91bb = {
                  'pack': Config.packname,
                  'author': Config.author,
                  'type': _0x504fab.FULL,
                  'quality': 0x2,
                  ..._0x565181
                };
                let _0x1bdc6d = new _0x569c2f(_0x59ef20, {
                  ..._0x5b91bb
                });
                return await _0x1167d0.sendMessage(_0x31110a, {
                  'sticker': await _0x1bdc6d.toBuffer()
                }, {
                  'quoted': _0x3054f8,
                  'messageId': _0x1167d0.messageId()
                });
              }
            }
            break;
        }
      } catch (_0x4071b7) {
        console.log("\n\nERROR IN MSGS MESSAGE>SEND FROM SERIALIZE.JS\n\t", _0x4071b7);
      }
    };
    _0x8f118e.sendPoll = async (_0x3b1475, _0x5de064 = ["option 1", "option 2"], _0x3ae3e1 = 0x1, _0x31e2ce = _0x8f118e, _0x514886 = _0x8f118e.chat) => {
      return await _0x8f118e.send(_0x3b1475, {
        'values': _0x5de064,
        'selectableCount': _0x3ae3e1
      }, "poll", _0x31e2ce, _0x514886);
    };
    _0x8f118e.reply = async (_0x1cdd73, _0x43e286 = {}, _0xdc5d2c = '', _0x1e2a77 = _0x8f118e, _0x4465d2 = _0x8f118e.chat) => {
      return await _0x8f118e.send(_0x1cdd73, _0x43e286, _0xdc5d2c, _0x1e2a77, _0x4465d2);
    };
    _0x8f118e.react = (_0x448633 = '🍂', _0x268f32 = _0x8f118e) => {
      _0x1167d0.sendMessage(_0x8f118e.chat, {
        'react': {
          'text': _0x448633,
          'key': (_0x268f32 ? _0x268f32 : _0x8f118e).key
        }
      }, {
        'messageId': _0x1167d0.messageId()
      });
    };
    _0x8f118e.edit = async (_0x58f1ff, _0x5493ff = {}, _0x33c864 = '', _0x5f5962 = _0x8f118e.chat) => {
      if (!_0x5493ff?.["edit"]) {
        _0x5493ff = {
          ..._0x5493ff,
          'edit': (_0x8f118e.quoted ? _0x8f118e.quoted : _0x8f118e).key
        };
      }
      await _0x8f118e.send(_0x58f1ff, _0x5493ff, _0x33c864, '', _0x5f5962);
    };
    _0x8f118e.senddoc = (_0x333902, _0x1ba272, _0x5bf17e = _0x8f118e.chat, _0x39401d = {
      'mentions': [_0x8f118e.sender],
      'filename': Config.ownername,
      'mimetype': _0x1ba272,
      'externalAdRepl': {
        'title': Config.ownername,
        'thumbnailUrl': '',
        'thumbnail': log0,
        'mediaType': 0x1,
        'mediaUrl': gurl,
        'sourceUrl': gurl
      }
    }) => _0x1167d0.sendMessage(_0x5bf17e, {
      'document': _0x333902,
      'mimetype': _0x39401d.mimetype,
      'fileName': _0x39401d.filename,
      'contextInfo': {
        'externalAdReply': _0x39401d.externalAdRepl,
        'mentionedJid': _0x39401d.mentions
      }
    }, {
      'quoted': _0x8f118e,
      'messageId': _0x1167d0.messageId()
    });
    _0x8f118e.sendcontact = (_0x3271b2, _0x45d73e, _0x49ff98) => {
      var _0x2efc66 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x3271b2 + "\n" + "ORG:" + _0x45d73e + ";\n" + "TEL;type=CELL;type=VOICE;waid=" + _0x49ff98 + ':+' + _0x49ff98 + "\n" + 'END:VCARD';
      return _0x1167d0.sendMessage(_0x8f118e.chat, {
        'contacts': {
          'displayName': _0x3271b2,
          'contacts': [{
            'vcard': _0x2efc66
          }]
        }
      }, {
        'quoted': _0x8f118e,
        'messageId': _0x1167d0.messageId()
      });
    };
    _0x8f118e.loadMessage = async (_0x464b38 = _0x8f118e.key) => {
      if (!_0x464b38) {
        return false;
      }
      let _0x13ea0c = await _0x3084aa.loadMessage(_0x8f118e.chat, _0x464b38.id, _0x1167d0);
      return exports.smsg(_0x1167d0, _0x13ea0c, _0x3084aa, false);
    };
    if (_0x8f118e.mtype == "protocolMessage" && _0x8f118e.msg.type === "REVOKE") {
      _0x8f118e.getDeleted = async () => {
        let _0x1a4561 = await _0x3084aa.loadMessage(_0x8f118e.chat, _0x8f118e.msg.key.id, _0x1167d0);
        return exports.smsg(_0x1167d0, _0x1a4561, _0x3084aa, false);
      };
    }
    _0x8f118e.reply_message = _0x8f118e.quoted;
    _0x8f118e.bot = _0x55b4cd ? _0x1167d0 : {};
    return _0x8f118e;
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});

