import Vue from 'vue'

const notify = config => Vue.swal(config)

const success = (text, title = 'Sucesso!') => {
  notify({
    html: text,
    title,
    icon: 'success'
  })
}

const successToast = (text, title = 'Sucesso!') => {
  notify({
    html: text,
    title,
    icon: 'success',
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  })
}

const error = (text, title = 'Ops!') => {
  notify({
    html: text,
    title,
    icon: 'error'
  })
}

const warning = (text, title = 'Atenção') => {
  notify({
    html: text,
    title,
    icon: 'warning'
  })
}

const info = (text, title = 'Info') => {
  notify({
    html: text,
    title,
    icon: 'info'
  })
}

const confirm = (text, title = 'Tem certeza?') => notify(
  {
    html: text,
    title,
    type: 'question',
    showCancelButton: true,
    confirmButtonColor: '#02649c',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
  }
)

export default {
  success,
  successToast,
  error,
  warning,
  info,
  confirm
}
