import User from '#domains/accounts/models/user'
import User from '#domains/accounts/models/user'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class UserPolicy extends BasePolicy {
  async before(user: User | null, action: string, ...params: any[]) {}

  view(user: User, model: User): AuthorizerResponse {}

  create(user: User): AuthorizerResponse {}

  edit(user: User, model: User): AuthorizerResponse {}

  delete(user: User, model: User): AuthorizerResponse {}
}