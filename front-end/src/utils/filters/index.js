import Vue from 'vue'

export const addZeros = (n, s = 2) => ('0' + n).slice(s * -1)

export const formatISODate = isoString => {
  if (!isoString) {
    return null
  }

  const local = new Date(isoString)
  if (local instanceof Date && !isNaN(local)) {
    return `${addZeros(local.getDate())}/${addZeros(local.getMonth() + 1)}/${local.getFullYear()}`
  }

  return 'Data incorreta'
}
Vue.filter('formatISODate', formatISODate)

export const formatISOTime = isoString => {
  if (!isoString) {
    return null
  }

  const local = new Date(isoString)
  if (local instanceof Date && !isNaN(local)) {
    return `${addZeros(local.getHours())}:${addZeros(local.getMinutes())}`
  }

  return 'Data incorreta'
}
Vue.filter('formatISOTime', formatISOTime)