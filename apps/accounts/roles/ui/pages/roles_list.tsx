import AdminLayout from '#apps/common/ui/layouts/admin_layout'
import AdminPageNavigation from '#apps/common/ui/components/admin/admin_page_navigation'
import { accountNavigationLinks } from '#apps/accounts/config'

export default function RolesList(): JSX.Element {
  return (
    <AdminLayout>
      <div class="p-3">
        <AdminPageNavigation title="Roles" items={accountNavigationLinks} />
      </div>
    </AdminLayout>
  )
}
