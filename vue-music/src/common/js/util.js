/*
 * @Author: kim.chen 
 * @Date: 2018-11-24 12:36:33 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-24 13:14:55
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
