import { PropsWithChildren } from '@kitajs/html'
import ApplicationLayout from '#apps/common/ui/layouts/application_layout'
import { classNames } from '#apps/common/ui/utils'

const items = [
  {
    title: 'Home',
    icon: 'i-radix-icons-home',
    href: '/',
    exact: true,
  },
]

export default function Layout(props: PropsWithChildren): JSX.Element {
  return (
    <ApplicationLayout>
      <div class="w-screen min-h-screen flex">
        <Sidebar />
        <div class="pl-14 w-full bg-[#E2E9F3]">{props.children}</div>
      </div>
    </ApplicationLayout>
  )
}

function Sidebar() {
  return (
    <div class="fixed top-0 left-0 h-full w-14 bg-white border-r border-gray-200">
      <div class="flex flex-col">
        <div class="flex items-center justify-center h-14 aspect-square">
          Icon
        </div>
        <div class="">
          {items.map((item) => (
            <a
              href={item.href}
              class="flex items-center justify-center h-14 aspect-square"
            >
              <span class={classNames('w-6 h-6', item.icon)} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
