import AdminLayout from '#apps/common/ui/layouts/admin_layout'
import AdminPageNavigation from '#apps/common/ui/components/admin/admin_page_navigation'
import { accountNavigationLinks } from '#apps/accounts/config'
import Container from '#apps/common/ui/components/admin/container'

export default function RolesList(): JSX.Element {
  return (
    <AdminLayout>
      <div class="flex flex-col gap-3 p-3">
        <AdminPageNavigation
          title="Roles"
          items={accountNavigationLinks}
        />
        <Container>
          dd
        </Container>
      </div>
    </AdminLayout>
  )
}
