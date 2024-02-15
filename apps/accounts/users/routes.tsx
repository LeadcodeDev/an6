import router from '@adonisjs/core/services/router'
const UsersController = () =>
  import('#apps/accounts/users/controllers/users_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('', [UsersController, 'index']).as('index')
      })
      .prefix('users')
      .as('users')
  })
  .prefix('console/accounts')
  .as('console.accounts')
