import router from '@adonisjs/core/services/router'
import Home from '#apps/backoffice/domains/home.js'

router.get('/console', async () => {
  return <Home />
})
