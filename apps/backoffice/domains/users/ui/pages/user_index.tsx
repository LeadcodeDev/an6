import User from '#domains/accounts/models/user'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import Layout from '#apps/backoffice/ui/layouts/layout'

type Props = {
  users: ModelPaginatorContract<User>
}

export default function UserIndex(props: Props) {
  return (
    <Layout>
      <h1>Users</h1>
    </Layout>
  )
}
