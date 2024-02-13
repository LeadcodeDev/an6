import router from '@adonisjs/core/services/router'
import Home from '#apps/backoffice/views/home'

router.get('/dashboard', async () => {
  return <Home />
})
