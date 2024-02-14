import router from '@adonisjs/core/services/router'
import Home from '#apps/backoffice/domains/home'
const UsersController = () =>
  import('#apps/backoffice/domains/users/controllers/users_controller')

router
  .group(() => {
    router.get('/', async () => <Home />).as('home')

    router
      .group(() => {
        router
          .group(() => {
            router
              .get('', [UsersController, 'index'])
              .as('dashboard')
              .as('index')
          })
          .prefix('users')
          .as('users')
      })
      .prefix('accounts')
      .as('accounts')
  })
  .prefix('console')
  .as('console')
