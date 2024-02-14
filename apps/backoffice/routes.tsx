import router from '@adonisjs/core/services/router'
import Home from '#apps/backoffice/domains/home'

router.group(() => {
  router.get('/', async () => {
    return <Home />
  }).as('home')
}).prefix('console').as('console')
