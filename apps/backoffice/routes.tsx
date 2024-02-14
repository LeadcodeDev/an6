import router from '@adonisjs/core/services/router'
import Home from '#apps/backoffice/domains/home'
const UsersController = () =>
  import('#apps/backoffice/domains/users/controllers/users_controller')

router
  .group(() => {
    router.get('/', async () => <Home />).as('home')

    router.group(() => {
      router.get('/accounts/users', [UsersController, 'index']).as('dashboard')
    })
  })
  .prefix('console')
  .as('console')
