/*
 * @Author: kim.chen 
 * @Date: 2018-11-17 13:59:05 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-17 14:08:38
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}
export default mutations;
