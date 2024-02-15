import UsersList from '#apps/accounts/users/ui/pages/users_list'

export default class UsersController {
  async index(): Promise<JSX.Element> {
    return <UsersList />
  }
}
