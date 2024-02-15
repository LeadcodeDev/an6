import router from '@adonisjs/core/services/router'
import Home from '#apps/common/ui/pages/home'

router
  .group(() => {
    router.get('', () => <Home />).as('home')
  })
  .prefix('console')
  .as('console')
