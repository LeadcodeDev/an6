import router from '@adonisjs/core/services/router'
const RolesController = () =>
  import('#apps/accounts/roles/controllers/roles_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('', [RolesController, 'index']).as('index')
      })
      .prefix('roles')
      .as('roles')
  })
  .prefix('console/accounts')
  .as('console.accounts')
