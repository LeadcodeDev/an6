import { classNames } from '#apps/common/ui/utils'
import { HttpContext } from '@adonisjs/core/http'

export type AdminPageNavigationItem = {
  label: string
  href: string
}

type Props = {
  title: string
  items: AdminPageNavigationItem[]
}

export default function AdminPageNavigation(props: Props): JSX.Element {
  const { route } = HttpContext.getOrFail()

  return (
    <div class="bg-white border-b border-gray-200 pt-3 mb-2 rounded-md w-full flex flex-col justify-center">
      <div class="border-b border-gray-200 p-5">
        <h1 class="text-4xl">{props.title}</h1>
      </div>
      <div class="flex gap-x-5 px-5">
        {props.items.map((item) => (
          <a
            href={item.href}
            class={classNames(
              'px-3 pt-5 h-14 border-b-2 text-sm font-medium',
              route?.pattern === item.href
                ? 'border-blue-400'
                : 'border-neutral-300 text-neutral-500',
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
