// Modules
import auth from '@/router/routes/auth'
import main from '@/router/routes/main'
import error from '@/router/routes/error'

export default [
  ...auth,
  ...main,
  ...error
]
