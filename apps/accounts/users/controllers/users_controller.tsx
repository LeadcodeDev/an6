import UsersList from '#apps/accounts/users/ui/pages/users_list'
import { HttpContext } from '@adonisjs/core/http'
import UserService from '#apps/accounts/users/services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async index({ request }: HttpContext): Promise<JSX.Element> {
    const limit = request.input('limit', 10)
    const page = request.input('page', 1)

    const users = await this.userService.paginate(limit, page)
    return <UsersList users={users} />
  }
}
