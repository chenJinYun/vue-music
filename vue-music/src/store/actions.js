/*
 * @Author: kim.chen 
 * @Date: 2018-11-21 18:58:05 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-24 13:24:41
 */
import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

function findIndex(list,song){
    return list.findIndex((item)=> (item.id === song.id))
}
export const selectPlay = function ({commit,state}, {list,index}) {
  commit(types.SET_SEQUENCELIST, list)
  if(state.mode === playMode.random){
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList,list[index])
  } else {
    commit(types.SET_PLAYLIST, list)      
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}


export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCELIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)

}
