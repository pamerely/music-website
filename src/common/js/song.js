import {getLyric} from '../../api/song'
import {ERR_OK} from '../../api/config'
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}
// var num = 0
export function createSong(musicData) {
  var mp3=["/src/assets/images/video/mubuzhuanjing.mp3","/src/assets/images/video/你的酒馆对我打了烊.mp3","/src/assets/images/video/daoshu.mp3",
  "/src/assets/images/video/shijianshijin.mp3","/src/assets/images/video/tongyanwuji.mp3",
  "/src/assets/images/video/wangpaiyuanjia.mp3","/src/assets/images/video/wuyunzhong.mp3",
  "/src/assets/images/video/xiaorenwu.mp3","/src/assets/images/video/xingqiuzhuiluo.mp3",
  "/src/assets/images/video/piaoxiangbeifang.mp3", "/src/assets/images/video/gnzw.mp3"];
  let num = Math.floor(Math.random()*10);
  // num++
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url:mp3[num],
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

