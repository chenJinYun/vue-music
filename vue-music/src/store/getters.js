/*
 * @Author: kim.chen 
 * @Date: 2018-11-17 14:01:00 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-12-22 16:05:42
 */
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = state => {
  return state.playList[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory
