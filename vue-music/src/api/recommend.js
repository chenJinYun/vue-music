/*
 * @Author: kim.chen
 * @Date: 2018-11-10 13:55:36
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-10 14:19:38
 */

import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
