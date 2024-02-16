import User from '#apps/accounts/users/models/user'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export default class UserService {
  async paginate(limit: number, page: number): Promise<ModelPaginatorContract<User>> {
    return User.query().paginate(limit, page)
  }
}
