/*
 * @Author: kim.chen 
 * @Date: 2018-11-21 18:58:05 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-21 19:00:58
 */
import * as types from './mutation-types'
export const selectPlay = function ({commit,state},{list,index}) {
    commit(types.SET_SEQUENCELIST,list)
    commit(types.SET_PLAYLIST,list)
    commit(types.SET_CURRENT_INDEX,index)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
}
