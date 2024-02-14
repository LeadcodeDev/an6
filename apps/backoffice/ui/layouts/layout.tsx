import { PropsWithChildren } from '@kitajs/html'
import ApplicationLayout from '#apps/common/ui/layouts/application_layout'
import { classNames } from '#apps/common/ui/utils'
import { httpContext, route } from '#apps/common/ui/components/helpers'

type Item = {
  title: string
  icon: string
  href: string
  exact: boolean
}

export default function Layout(props: PropsWithChildren): JSX.Element {
  const items: Item[] = [
    {
      title: 'Home',
      icon: 'i-radix-icons-home',
      href: route('console.home'),
      exact: true,
    },
  ]

  return (
    <ApplicationLayout>
      <div class="w-screen min-h-screen flex">
        <Sidebar items={items} />
        <div class="pl-14 w-full bg-[#E2E9F3]">{props.children}</div>
      </div>
    </ApplicationLayout>
  )
}

function Sidebar(props: { items: Item[]}) {
  return (
    <div class="fixed top-0 left-0 h-full w-14 bg-white border-r border-gray-200">
      <div class="flex flex-col">
        <div class="flex items-center justify-center h-14 aspect-square">
          Icon
        </div>
        <div class="">
          {props.items.map((item) => (
            <Link item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Link(props: { item: Item }): JSX.Element {
  const context = httpContext()

  const isActive = props.item.exact
    ? context.route?.pattern === props.item.href
    : context.route?.pattern.startsWith(props.item.href)

  return (
    <div class="p-2 flex h-14 w-14 items-center justify-center">
      <a
        href={props.item.href}
        class={classNames(
          'flex items-center justify-center w-full h-full aspect-square rounded-md',
          isActive ? 'bg-blue-400 text-white' : 'bg-white hover:bg-blue-300'
        )}
      >
        <i class={classNames('radix-icon', props.item.icon)}></i>
      </a>
    </div>
  )
}
