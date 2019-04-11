import * as types from './mutation-types'
var timer
const matutaions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY](state, history) {
    state.searchHistory = history
  },
  [types.SET_PLAY_HISTORY](state, history) {
    state.playHistory = history
  },
  [types.SET_FAVORITE_LIST](state, list) {
    state.favoriteList = list
  },
  //控制播放暂停图片的显示和隐藏
  play(state){
    state.show=!state.show
  },
  show(state){
    state.show=false
  },
  //首页底部的播放
  playTime(state){
    timer=setInterval(function () {
        
              var currentTime = timeFormat(audio.currentTime);
              var timeAll = timeFormat(TimeAll());
             state.time=currentTime  ;
             state.b = timeAll;
              
              }, 1000);
              
      //补零函数
        function timeFormat(number) {
            var minute = parseInt(number / 60);
            var second = parseInt(number % 60);
            minute = minute >= 10 ? minute : "0" + minute;
            second = second >= 10 ? second : "0" + second;
            return minute + ":" + second;
        } 
        function TimeAll() {
            return audio.duration; 
        }
  },
  //暂停函数
  stopTime(state){
    clearInterval(timer)
  }
}

export default matutaions