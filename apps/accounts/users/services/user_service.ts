import User from '#apps/accounts/users/models/user'
import { PaginateResource } from '#apps/common/types/helper.js'

export default class UserService {
  async paginate(limit: number, page: number): Promise<PaginateResource<User>> {
    const users = await User.query().paginate(limit, page)
    return users.toJSON() as PaginateResource<User>
  }
}
