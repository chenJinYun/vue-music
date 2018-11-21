/*
 * @Author: kim.chen 
 * @Date: 2018-11-17 13:59:05 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-21 18:43:45
 */
import * as types from './mutation-types'

const mutations = {
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
    state.playList = list
  },
  [types.SET_SEQUENCELIST](state, list) {
    state.sequenceLit = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
}
export default mutations;
