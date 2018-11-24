/*
 * @Author: kim.chen 
 * @Date: 2018-11-17 14:49:09 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-24 13:37:07
 */

import {
  getLyric
} from 'api/song'
import {
  ERR_OK
} from 'api/config'
export default class Song {
  constructor({
    id,
    mid,
    singer,
    name,
    album,
    duration,
    image,
    url
  }) {
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration
    this.image = image;
    this.url = url
  }

  getLyric() {
    getLyric(this.mid).then((res) => {
      if (res.code === ERR_OK) {
        this.lyric = res.lyric
        console.log(this.lyric)
      }
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(item => {
    ret.push(item.name)

  });
  return ret.join('/')
}
