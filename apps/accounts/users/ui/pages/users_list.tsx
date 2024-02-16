import AdminLayout from '#apps/common/ui/layouts/admin_layout'
import AdminPageNavigation from '#apps/common/ui/components/admin/admin_page_navigation'
import { accountNavigationLinks } from '#apps/accounts/config'
import Container from '#apps/common/ui/components/admin/container'
import User from '#apps/accounts/users/models/user'
import { PaginateResource } from '#apps/common/types/helper.js'

type Props = {
  users: PaginateResource<User>
}

export default function UsersList(props: Props): JSX.Element {
  return (
    <AdminLayout>
      <div class="flex flex-col gap-3 p-3">
        <AdminPageNavigation
          title="Utilisateurs"
          items={accountNavigationLinks}
        />
        <Container>
          {props.users.data.length}
        </Container>
      </div>
    </AdminLayout>
  )
}
