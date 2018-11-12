/*
 * @Author: kim.chen
 * @Date: 2018-11-10 16:31:20
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-10 16:34:36
 */
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
