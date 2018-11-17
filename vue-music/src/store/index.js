/*
 * @Author: kim.chen 
 * @Date: 2018-11-17 14:02:02 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-17 14:08:10
 */
import Vue from 'vue';
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 在开发环境开启debug模式，校验store的正确性
const debug = process.env.NODE_ENV !== 'production'

// 单例模式
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
