import RolesList from '#apps/accounts/roles/ui/pages/roles_list'

export default class RolesController {
  async index(): Promise<JSX.Element> {
    return <RolesList />
  }
}
