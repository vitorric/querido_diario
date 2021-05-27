import Vue from 'vue'

Vue.filter('base64Header', (str, ext = 'png') => {
  if (!str) {
    return ''
  }
  let first = str.slice(0, 100)

  if (first.match(/(?=data:).*(base64,)/igm) || first.match(/^http/igm)) {
    return str
  }

  if (ext.match(/(jpg|jpeg|png)/igm)) {
    return `data:image/${ext};base64,${str}`
  }

  if (ext.match(/(mov|mp4|avi|3gp)/igm)) {
    return `data:video/${ext};base64,${str}`
  }
})

Vue.filter('currency', (value) => {
  let val = (value/1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

Vue.filter('formatDataPost', (value) => {
  const today = new Date()
  const datePost = new Date(value)

  const diff = new Date(today.getTime() - datePost.getTime());
  const days = diff.getUTCDate() - 1
  const horas = diff.getUTCHours()
  const mins = diff.getUTCMinutes()

  if (days > 1) {
    return `${days} dias atrás`
  }

  if (horas > 1) {
    return `${horas} horas atrás`
  }

  if (mins > 1) {
    return `${mins} minutos atrás`
  }

  return 'Agora mesmo'
})