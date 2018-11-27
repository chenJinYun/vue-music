/*
 * @Author: kim.chen
 * @Date: 2018-11-10 13:55:36
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-27 19:36:46
 */

import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(dissid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  // const data = Object.assign({}, commonParams, {
  //   disstid: dissid,
  //   g_tk: 67232076,
  //   uin: 0,
  //   platform: 'yqq',
  //   needNewCode: 0,
  //   type: 1,
  //   json: 1,
  //   utf8: 1,
  //   onlysong: 0,
  // })
  let data = {
    "code": 0,
    "subcode": 0,
    "accessed_plaza_cache": 1,
    "accessed_favbase": 0,
    "login": "on**",
    "cdnum": 1,
    "cdlist": [{
      "disstid": "2040362185",
      "dirid": 7,
      "coveradurl": "",
      "dissid": 2040362,
      "login": "on**",
      "uin": "oK4ioe4z7eCi7n**",
      "encrypt_uin": "oK4ioe4z7eCi7n**",
      "owndir": 0,
      "dissname": "2016billboard嘻哈榜",
      "logo": "http://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/600?n=1",
      "pic_mid": "",
      "album_pic_mid": "",
      "pic_dpi": 500,
      "isAd": 0,
      "desc": "那个QQ音乐上只有billboard的流行榜，这个榜单只有嘻哈R&B说唱的billboard排名，这个是2016.11.12号的\r,这个歌单从50排到第一名从上往下是1到50，我先把名字挂出来了《Hold up》---beyoncé ,《Key to the streets》忘了是谁了，《X》---21 Saveage）希望大家喜欢，以后肯定还会有电子榜，请多支持，加个关注呗嘻嘻。",
      "ctime": 1482312179,
      "mtime": 0,
      "headurl": "http://thirdqq.qlogo.cn/g?b=sdk&k=1DUaPkK0KVqM7OOADCzPfA&s=140&t=1542199115",
      "ifpicurl": "",
      "nick": "CREAMSAUCEONMEBABY",
      "nickname": "CREAMSAUCEONMEBABY",
      "type": 0,
      "singerid": 0,
      "singermid": "",
      "isvip": 0,
      "isdj": 0,
      "tags": [{
        "id": 167,
        "name": "英语",
        "pid": 167
      }, {
        "id": 153,
        "name": "嘻哈",
        "pid": 153
      }, {
        "id": 126,
        "name": "宣泄",
        "pid": 126
      }],
      "songnum": 51,
      "songids": "104903683,201613665,200913639,108218167,200195551,108654017,107359012,108748705,108030909,107960774,106148089,108964289,108284581,105561624,107312816,108573349,106148094,107763160,108964295,107438635,106733287,106148081,107808861,105933660,107197914,107359022,107433587,105810192,106913266,107960584,107471806,106913268,105561628,106269839,107644574,105675674,107594486,107699937,106928795,108411606,107840368,107542375,107354554,105934024,108784074,108880359,108654029,106270188,107509069,107699881,105017040",
      "songtypes": "13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13",
      "disstype": 0,
      "dir_pic_url2": "",
      "song_update_time": 0,
      "song_update_num": 0,
      "total_song_num": 51,
      "song_begin": 0,
      "cur_song_num": 15,
      "songlist": [{
        "id": 104903683,
        "type": 0,
        "songtype": 13,
        "mid": "0015Fszs0HWl2g",
        "name": "Oui",
        "title": "Oui",
        "subtitle": "",
        "interval": 238,
        "isonly": 1,
        "language": 5,
        "genre": 33,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream8.qqmusic.qq.com/116903683.wma",
        "time_public": "2015-10-30",
        "singer": [{
          "id": 16081,
          "mid": "002crLXV4bAF84",
          "name": "Jeremih",
          "title": "Jeremih"
        }],
        "album": {
          "id": 1195018,
          "mid": "003koanM1brwK0",
          "name": "Oui",
          "title": "Oui",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "001VYkqP4TLe8F"
        },
        "file": {
          "media_mid": "0015Fszs0HWl2g",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 775510,
          "size_48aac": 1579452,
          "size_96aac": 3178111,
          "size_192aac": 5748363,
          "size_192ogg": 5547641,
          "size_128mp3": 3818259,
          "size_320mp3": 9545345,
          "size_aac": 1579452,
          "size_ogg": 5547641,
          "size_128": 3818259,
          "size_320": 9545345,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 200,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 17413891,
          "msgid": 14,
          "msgpay": 6,
          "alert": 21,
          "icons": 147324
        }
      }, {
        "id": 201613665,
        "type": 0,
        "songtype": 13,
        "mid": "004ROKXE2cZw4J",
        "name": "HUMBLE.",
        "title": "HUMBLE. (Explicit)",
        "subtitle": "",
        "interval": 176,
        "isonly": 0,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 8008,
        "url": "http://stream0.qqmusic.qq.com/213613665.wma",
        "time_public": "2017-03-31",
        "singer": [{
          "id": 28021,
          "mid": "001doCJW3OCmVJ",
          "name": "Kendrick Lamar",
          "title": "Kendrick Lamar"
        }],
        "album": {
          "id": 1975386,
          "mid": "002qBUsy22UIcs",
          "name": "HUMBLE.",
          "title": "HUMBLE.",
          "subtitle": ""
        },
        "mv": {
          "id": 1208792,
          "vid": "k0024r30fea"
        },
        "ksong": {
          "id": 0,
          "mid": "0020O83B4EmXAT"
        },
        "file": {
          "media_mid": "004bV1pf1URtwA",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 552106,
          "size_48aac": 1082706,
          "size_96aac": 2166835,
          "size_192aac": 4292430,
          "size_192ogg": 3823205,
          "size_128mp3": 2832741,
          "size_320mp3": 7081505,
          "size_aac": 1082706,
          "size_ogg": 3823205,
          "size_128": 2832741,
          "size_320": 7081505,
          "size_ape": 19458970,
          "size_flac": 19668856,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 0,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 0,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 81683,
          "msgid": 0,
          "msgpay": 0,
          "alert": 11,
          "icons": 135752
        }
      }, {
        "id": 200913639,
        "type": 0,
        "songtype": 13,
        "mid": "003yXr5g0ykDdX",
        "name": "Go Off",
        "title": "Go Off",
        "subtitle": "",
        "interval": 217,
        "isonly": 1,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 2,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream0.qqmusic.qq.com/212913639.wma",
        "time_public": "2017-04-14",
        "singer": [{
          "id": 199983,
          "mid": "003rai7g2W4an1",
          "name": "Lil Uzi Vert",
          "title": "Lil Uzi Vert"
        }, {
          "id": 280686,
          "mid": "003ic9Il3jKbDl",
          "name": "Quavo",
          "title": "Quavo"
        }, {
          "id": 165413,
          "mid": "0011N7Ui1DkEON",
          "name": "Travis Scott",
          "title": "Travis Scott"
        }],
        "album": {
          "id": 1877342,
          "mid": "003DuSFG1Og6cC",
          "name": "Fast & Furious 8: The Album",
          "title": "Fast & Furious 8: The Album",
          "subtitle": "《速度与激情8》电影主题曲"
        },
        "mv": {
          "id": 1091625,
          "vid": "c0022cv8rv9"
        },
        "ksong": {
          "id": 0,
          "mid": "004HCNvQ2G3YOK"
        },
        "file": {
          "media_mid": "002CALeL3OJrtU",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 674667,
          "size_48aac": 1324135,
          "size_96aac": 2652457,
          "size_192aac": 5254426,
          "size_192ogg": 5092063,
          "size_128mp3": 3482284,
          "size_320mp3": 8705311,
          "size_aac": 1324135,
          "size_ogg": 5092063,
          "size_128": 3482284,
          "size_320": 8705311,
          "size_ape": 27600949,
          "size_flac": 27742243,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 0,
          "price_album": 1000,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 636675,
          "msgid": 14,
          "msgpay": 3,
          "alert": 7,
          "icons": 0
        }
      }, {
        "id": 108218167,
        "type": 0,
        "songtype": 13,
        "mid": "0041UiTf2yKXqP",
        "name": "No Heart",
        "title": "No Heart",
        "subtitle": "",
        "interval": 235,
        "isonly": 0,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 2,
        "status": 0,
        "fnote": 3016,
        "url": "http://stream4.qqmusic.qq.com/120218167.wma",
        "time_public": "2016-07-15",
        "singer": [{
          "id": 0,
          "mid": "004f2lSB162WIs",
          "name": "21 Savage",
          "title": "21 Savage"
        }, {
          "id": 0,
          "mid": "004A2AJn2owV7s",
          "name": "Metro Boomin",
          "title": "Metro Boomin"
        }],
        "album": {
          "id": 0,
          "mid": "",
          "name": "",
          "title": "",
          "subtitle": ""
        },
        "mv": {
          "id": 1352843,
          "vid": "y0024sgm6ix"
        },
        "ksong": {
          "id": 0,
          "mid": ""
        },
        "file": {
          "media_mid": "0041UiTf2yKXqP",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 785768,
          "size_48aac": 1551888,
          "size_96aac": 2890508,
          "size_192aac": 5338347,
          "size_192ogg": 5293527,
          "size_128mp3": 3761864,
          "size_320mp3": 9404313,
          "size_aac": 1551888,
          "size_ogg": 5293527,
          "size_128": 3761864,
          "size_320": 9404313,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 0,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 0,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 65537,
          "msgid": 1,
          "msgpay": 0,
          "alert": 0,
          "icons": 524288
        }
      }, {
        "id": 200195551,
        "type": 0,
        "songtype": 13,
        "mid": "000ejQtl2eyqPd",
        "name": "100",
        "title": "100",
        "subtitle": "",
        "interval": 181,
        "isonly": 0,
        "language": 5,
        "genre": 20,
        "index_cd": 0,
        "index_album": 5,
        "status": 0,
        "fnote": 4019,
        "url": "http://stream3.qqmusic.qq.com/212195551.wma",
        "time_public": "2017-11-03",
        "singer": [{
          "id": 1053782,
          "mid": "004f2lSB162WIs",
          "name": "21 Savage",
          "title": "21 Savage"
        }],
        "album": {
          "id": 8623,
          "mid": "001ZaCQY2OxVMg",
          "name": "空",
          "title": "空",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "003atj3I0oasXI"
        },
        "file": {
          "media_mid": "000ejQtl2eyqPd",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 611501,
          "size_48aac": 1194501,
          "size_96aac": 2149684,
          "size_192aac": 0,
          "size_192ogg": 0,
          "size_128mp3": 2906740,
          "size_320mp3": 0,
          "size_aac": 1194501,
          "size_ogg": 0,
          "size_128": 2906740,
          "size_320": 0,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 0,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 0,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 65537,
          "msgid": 3,
          "msgpay": 0,
          "alert": 0,
          "icons": 524289
        }
      }, {
        "id": 108654017,
        "type": 0,
        "songtype": 13,
        "mid": "001KvWVW1kYVuO",
        "name": "Starboy",
        "title": "Starboy (Explicit)",
        "subtitle": "",
        "interval": 230,
        "isonly": 1,
        "language": 5,
        "genre": 33,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream6.qqmusic.qq.com/120654017.wma",
        "time_public": "2016-11-25",
        "singer": [{
          "id": 32617,
          "mid": "004YnseG2vQN7h",
          "name": "The Weeknd",
          "title": "The Weeknd"
        }, {
          "id": 511,
          "mid": "001jDJNV4ISof5",
          "name": "Daft Punk",
          "title": "Daft Punk"
        }],
        "album": {
          "id": 1619816,
          "mid": "0008yHHd1KTTQD",
          "name": "Starboy",
          "title": "Starboy",
          "subtitle": ""
        },
        "mv": {
          "id": 1045202,
          "vid": "u0021o9dsuk"
        },
        "ksong": {
          "id": 0,
          "mid": "001YyTIf4Vd1V4"
        },
        "file": {
          "media_mid": "001MifXT1WbToh",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 714175,
          "size_48aac": 1398293,
          "size_96aac": 2796230,
          "size_192aac": 5536557,
          "size_192ogg": 5696559,
          "size_128mp3": 3688713,
          "size_320mp3": 9221448,
          "size_aac": 1398293,
          "size_ogg": 5696559,
          "size_128": 3688713,
          "size_320": 9221448,
          "size_ape": 26230650,
          "size_flac": 26513268,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 200,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 17413891,
          "msgid": 14,
          "msgpay": 6,
          "alert": 21,
          "icons": 147324
        }
      }, {
        "id": 107359012,
        "type": 0,
        "songtype": 13,
        "mid": "001QVZTn3prHDA",
        "name": "BROCCOLI",
        "title": "BROCCOLI",
        "subtitle": "",
        "interval": 225,
        "isonly": 0,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 8013,
        "url": "http://stream3.qqmusic.qq.com/119359012.wma",
        "time_public": "2016-04-06",
        "singer": [{
          "id": 1053638,
          "mid": "001uKnXJ4HgpUR",
          "name": "D.R.A.M.",
          "title": "D.R.A.M."
        }, {
          "id": 1137441,
          "mid": "001tI00o2R2bLU",
          "name": "Lil Yachty",
          "title": "Lil Yachty"
        }],
        "album": {
          "id": 1479923,
          "mid": "0015MU5b06J0oG",
          "name": "Broccoli",
          "title": "Broccoli",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "004eopL31Dmc6b"
        },
        "file": {
          "media_mid": "001QVZTn3prHDA",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 723310,
          "size_48aac": 1384506,
          "size_96aac": 2612606,
          "size_192aac": 4698025,
          "size_192ogg": 4804738,
          "size_128mp3": 3606793,
          "size_320mp3": 9016648,
          "size_aac": 1384506,
          "size_ogg": 4804738,
          "size_128": 3606793,
          "size_320": 9016648,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 0,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 0,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 81683,
          "msgid": 0,
          "msgpay": 0,
          "alert": 11,
          "icons": 135752
        }
      }, {
        "id": 108748705,
        "type": 0,
        "songtype": 13,
        "mid": "004Nf2gX0cEIyg",
        "name": "JuJu On Dat Beat",
        "title": "JuJu On Dat Beat",
        "subtitle": "",
        "interval": 123,
        "isonly": 0,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 10,
        "status": 0,
        "fnote": 8013,
        "url": "http://stream3.qqmusic.qq.com/120748705.wma",
        "time_public": "2016-07-05",
        "singer": [{
          "id": 1246803,
          "mid": "002eb2MM2TT1Iw",
          "name": "Zayion McCall",
          "title": "Zayion McCall"
        }, {
          "id": 1246822,
          "mid": "001N0COW2njHVq",
          "name": "Zay Hilfigerrr",
          "title": "Zay Hilfigerrr"
        }],
        "album": {
          "id": 1631023,
          "mid": "0006vf6n0NA8Gi",
          "name": "Why So Serious?",
          "title": "Why So Serious?",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "0021HHpf1c2gwz"
        },
        "file": {
          "media_mid": "0001DhuG2YEdtJ",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 386162,
          "size_48aac": 755855,
          "size_96aac": 1515145,
          "size_192aac": 2983007,
          "size_192ogg": 2592906,
          "size_128mp3": 1975121,
          "size_320mp3": 4937407,
          "size_aac": 755855,
          "size_ogg": 2592906,
          "size_128": 1975121,
          "size_320": 4937407,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 0,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 0,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 81683,
          "msgid": 0,
          "msgpay": 0,
          "alert": 11,
          "icons": 135752
        }
      }, {
        "id": 108030909,
        "type": 0,
        "songtype": 13,
        "mid": "000Xdvv02R57Mc",
        "name": "Black Beatles",
        "title": "Black Beatles",
        "subtitle": "",
        "interval": 291,
        "isonly": 1,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 5,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream1.qqmusic.qq.com/120030909.wma",
        "time_public": "2016-08-12",
        "singer": [{
          "id": 175147,
          "mid": "0045nfFD36WZEf",
          "name": "Rae Sremmurd",
          "title": "Rae Sremmurd"
        }, {
          "id": 12324,
          "mid": "002cAiA74QELg7",
          "name": "Gucci Mane",
          "title": "Gucci Mane"
        }],
        "album": {
          "id": 1555601,
          "mid": "004bTo0M1ZiydK",
          "name": "SremmLife 2 (Deluxe)",
          "title": "SremmLife 2 (Deluxe)",
          "subtitle": "2017年Billboard最佳说唱合作歌曲"
        },
        "mv": {
          "id": 1044520,
          "vid": "g00214ypz1n"
        },
        "ksong": {
          "id": 0,
          "mid": ""
        },
        "file": {
          "media_mid": "004SXr81232VDf",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 907672,
          "size_48aac": 1783872,
          "size_96aac": 3560309,
          "size_192aac": 7051671,
          "size_192ogg": 6781337,
          "size_128mp3": 4671377,
          "size_320mp3": 11678045,
          "size_aac": 1783872,
          "size_ogg": 6781337,
          "size_128": 4671377,
          "size_320": 11678045,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 200,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 17409795,
          "msgid": 14,
          "msgpay": 6,
          "alert": 21,
          "icons": 147324
        }
      }, {
        "id": 107960774,
        "type": 0,
        "songtype": 13,
        "mid": "004aOwq94f7v11",
        "name": "OOOUUU",
        "title": "OOOUUU (Explicit)",
        "subtitle": "",
        "interval": 234,
        "isonly": 0,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream1.qqmusic.qq.com/119960774.wma",
        "time_public": "2016-05-20",
        "singer": [{
          "id": 1208748,
          "mid": "0043Z79v2KPUWJ",
          "name": "Young M.A",
          "title": "Young M.A"
        }],
        "album": {
          "id": 1550751,
          "mid": "00233dwc1w2fh9",
          "name": "OOOUUU",
          "title": "OOOUUU",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "004HGVhT2hXNtH"
        },
        "file": {
          "media_mid": "001bGzvr01m6nJ",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 733372,
          "size_48aac": 1435986,
          "size_96aac": 2877447,
          "size_192aac": 5649367,
          "size_192ogg": 5313714,
          "size_128mp3": 3755999,
          "size_320mp3": 9389671,
          "size_aac": 1435986,
          "size_ogg": 5313714,
          "size_128": 3755999,
          "size_320": 9389671,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 0,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 636675,
          "msgid": 14,
          "msgpay": 6,
          "alert": 2,
          "icons": 8060
        }
      }, {
        "id": 106148089,
        "type": 0,
        "songtype": 13,
        "mid": "004b3JQW2COJil",
        "name": "One Dance",
        "title": "One Dance",
        "subtitle": "",
        "interval": 174,
        "isonly": 1,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 12,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream1.qqmusic.qq.com/118148089.wma",
        "time_public": "2016-04-29",
        "singer": [{
          "id": 19265,
          "mid": "001FAb1d02xUcH",
          "name": "Drake",
          "title": "Drake"
        }, {
          "id": 160395,
          "mid": "001BTbXz1kHkVq",
          "name": "WizKid",
          "title": "WizKid"
        }, {
          "id": 54297,
          "mid": "003NQfBl0sqY2V",
          "name": "Kyla",
          "title": "Kyla"
        }],
        "album": {
          "id": 1352321,
          "mid": "000Tos353Iqs6f",
          "name": "Views",
          "title": "Views",
          "subtitle": "2017年Billboard最佳流媒体歌曲|2017年Billboard最佳R&B歌曲|2017年Billboard最佳R&B合作歌曲"
        },
        "mv": {
          "id": 726352,
          "vid": "z0020uiwu3x"
        },
        "ksong": {
          "id": 0,
          "mid": "002vBwDq4Qb2p5"
        },
        "file": {
          "media_mid": "003Utr523wqv9y",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 541829,
          "size_48aac": 1060749,
          "size_96aac": 2124488,
          "size_192aac": 4205953,
          "size_192ogg": 3946660,
          "size_128mp3": 2785912,
          "size_320mp3": 6964459,
          "size_aac": 1060749,
          "size_ogg": 3946660,
          "size_128": 2785912,
          "size_320": 6964459,
          "size_ape": 18027495,
          "size_flac": 18069268,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 200,
          "price_album": 2000,
          "pay_play": 0,
          "pay_down": 0,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 638739,
          "msgid": 0,
          "msgpay": 0,
          "alert": 11,
          "icons": 131072
        }
      }, {
        "id": 108964289,
        "type": 0,
        "songtype": 13,
        "mid": "004OtC531jZys4",
        "name": "Fake Love",
        "title": "Fake Love (Explicit)",
        "subtitle": "",
        "interval": 210,
        "isonly": 1,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 2,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream1.qqmusic.qq.com/120964289.wma",
        "time_public": "2016-11-04",
        "singer": [{
          "id": 19265,
          "mid": "001FAb1d02xUcH",
          "name": "Drake",
          "title": "Drake"
        }],
        "album": {
          "id": 1690716,
          "mid": "001B3tSK1Xq1O8",
          "name": "Fake Love",
          "title": "Fake Love",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "001oy2J10UJSQD"
        },
        "file": {
          "media_mid": "003ef6DY3vOEe2",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 657353,
          "size_48aac": 1291888,
          "size_96aac": 2591751,
          "size_192aac": 5125465,
          "size_192ogg": 4776245,
          "size_128mp3": 3376078,
          "size_320mp3": 8439863,
          "size_aac": 1291888,
          "size_ogg": 4776245,
          "size_128": 3376078,
          "size_320": 8439863,
          "size_ape": 20042627,
          "size_flac": 20178723,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 200,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 17413891,
          "msgid": 14,
          "msgpay": 6,
          "alert": 21,
          "icons": 147324
        }
      }, {
        "id": 108284581,
        "type": 0,
        "songtype": 13,
        "mid": "0017x7sU2n35Ia",
        "name": "Caroline",
        "title": "Caroline (Explicit)",
        "subtitle": "",
        "interval": 209,
        "isonly": 1,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream4.qqmusic.qq.com/120284581.wma",
        "time_public": "2016-08-26",
        "singer": [{
          "id": 1266463,
          "mid": "003a6uj34Yb7Na",
          "name": "Aminé",
          "title": "Aminé"
        }],
        "album": {
          "id": 1583094,
          "mid": "004SIdl91ZmWha",
          "name": "Caroline (Explicit)",
          "title": "Caroline (Explicit)",
          "subtitle": ""
        },
        "mv": {
          "id": 1069987,
          "vid": "x0022nmjsh2"
        },
        "ksong": {
          "id": 0,
          "mid": "000fE4Ur1eVPJx"
        },
        "file": {
          "media_mid": "0017x7sU2n35Ia",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 692407,
          "size_48aac": 1346050,
          "size_96aac": 2635355,
          "size_192aac": 5012022,
          "size_192ogg": 5396634,
          "size_128mp3": 3357266,
          "size_320mp3": 8392838,
          "size_aac": 1346050,
          "size_ogg": 5396634,
          "size_128": 3357266,
          "size_320": 8392838,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 200,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 17413891,
          "msgid": 14,
          "msgpay": 6,
          "alert": 21,
          "icons": 147324
        }
      }, {
        "id": 105561624,
        "type": 0,
        "songtype": 13,
        "mid": "00431MCO1UaYeo",
        "name": "Needed Me",
        "title": "Needed Me",
        "subtitle": "",
        "interval": 191,
        "isonly": 1,
        "language": 5,
        "genre": 1,
        "index_cd": 0,
        "index_album": 7,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream8.qqmusic.qq.com/117561624.wma",
        "time_public": "2016-01-29",
        "singer": [{
          "id": 6966,
          "mid": "002MiBdR19HQWx",
          "name": "Rihanna",
          "title": "Rihanna"
        }],
        "album": {
          "id": 1280468,
          "mid": "000bkWlj1Cv4zt",
          "name": "Anti (Deluxe)",
          "title": "Anti (Deluxe)",
          "subtitle": ""
        },
        "mv": {
          "id": 677824,
          "vid": "u002045y8q4"
        },
        "ksong": {
          "id": 0,
          "mid": "002KOYmC4XK63S"
        },
        "file": {
          "media_mid": "00431MCO1UaYeo",
          "size_try": 0,
          "try_begin": 51516,
          "try_end": 81775,
          "size_24aac": 604447,
          "size_48aac": 1196833,
          "size_96aac": 2340818,
          "size_192aac": 4211792,
          "size_192ogg": 4555842,
          "size_128mp3": 3066786,
          "size_320mp3": 7666636,
          "size_aac": 1196833,
          "size_ogg": 4555842,
          "size_128": 3066786,
          "size_320": 7666636,
          "size_ape": 19422694,
          "size_flac": 19367229,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 0,
          "price_track": 200,
          "price_album": 1500,
          "pay_play": 1,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 594177,
          "msgid": 13,
          "msgpay": 3,
          "alert": 7,
          "icons": 0
        }
      }, {
        "id": 107312816,
        "type": 0,
        "songtype": 13,
        "mid": "002cjnl80Xsx51",
        "name": "LUV",
        "title": "LUV",
        "subtitle": "",
        "interval": 228,
        "isonly": 1,
        "language": 5,
        "genre": 34,
        "index_cd": 0,
        "index_album": 1,
        "status": 0,
        "fnote": 4009,
        "url": "http://stream10.qqmusic.qq.com/119312816.wma",
        "time_public": "2016-06-10",
        "singer": [{
          "id": 27415,
          "mid": "004gN24D29Bc0G",
          "name": "Tory Lanez",
          "title": "Tory Lanez"
        }],
        "album": {
          "id": 1474930,
          "mid": "002MvPv63lpTcY",
          "name": "LUV",
          "title": "LUV",
          "subtitle": ""
        },
        "mv": {
          "id": 0,
          "vid": ""
        },
        "ksong": {
          "id": 0,
          "mid": "004Op1wR3HJK68"
        },
        "file": {
          "media_mid": "002cjnl80Xsx51",
          "size_try": 0,
          "try_begin": 0,
          "try_end": 0,
          "size_24aac": 720733,
          "size_48aac": 1441523,
          "size_96aac": 2780964,
          "size_192aac": 5326642,
          "size_192ogg": 4991458,
          "size_128mp3": 3649827,
          "size_320mp3": 9124257,
          "size_aac": 1441523,
          "size_ogg": 4991458,
          "size_128": 3649827,
          "size_320": 9124257,
          "size_ape": 0,
          "size_flac": 0,
          "size_dts": 0
        },
        "volume": {
          "gain": 0.0,
          "peak": 0.0,
          "lra": 0.0
        },
        "pay": {
          "pay_month": 1,
          "price_track": 200,
          "price_album": 0,
          "pay_play": 0,
          "pay_down": 1,
          "pay_status": 0,
          "time_free": 0
        },
        "action": {
          "switch": 17413891,
          "msgid": 14,
          "msgpay": 6,
          "alert": 21,
          "icons": 147324
        }
      }],
      "visitnum": 1160322,
      "cmtnum": 0,
      "buynum": 0,
      "scoreavage": "0.0",
      "scoreusercount": 0
    }],
    "realcdnum": 1
  }

  return Promise.resolve(data)
  // return jsonp(url,data,options)
}
