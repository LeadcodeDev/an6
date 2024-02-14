import User from '#domains/accounts/models/user'

export default class UserService {
  async paginate(limit: number, itemPerPage: number) {
    return User.query().paginate(limit, itemPerPage)
  }

  async getById(id: User['id']) {}
}
