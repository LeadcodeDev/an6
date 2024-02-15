import { AdminPageNavigationItem } from '#apps/common/ui/components/admin/admin_page_navigation'
import { route } from '#apps/common/ui/components/helpers'

export const accountNavigationLinks: AdminPageNavigationItem[] = [
  { label: 'Utilisaters', href: route('console.accounts.users.index') },
  { label: 'Roles', href: route('console.accounts.roles.index') },
]
