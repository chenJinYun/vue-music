/*
 * @Author: kim.chen
 * @Date: 2018-11-10 13:55:36
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-16 18:24:43
 */

import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744

  })
  return jsonp(url, data, options)
}
