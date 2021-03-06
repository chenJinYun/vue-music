/*
 * @Author: kim.chen 
 * @Date: 2018-11-24 13:26:14 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-12-22 11:12:47
 */
import axios from 'axios'
import {
  commonParams,
  options
} from './config'

export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
