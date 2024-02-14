import UserService from '#domains/accounts/services/user_service'
import { inject } from '@adonisjs/core'
import UserIndex from '#apps/backoffice/domains/users/ui/pages/user_index'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async index(): Promise<JSX.Element> {
    const users = await this.userService.paginate(1, 10)
    return <UserIndex users={users} />
  }
}
