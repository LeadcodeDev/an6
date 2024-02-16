import { classNames } from '#apps/common/ui/utils'
import { PropsWithChildren } from '@kitajs/html'

type Props = PropsWithChildren<{
  class?: string
}>

export default function Container(props: Props): JSX.Element {
  return (
    <div
      class={classNames(
        'border border-gray-200 p-5 bg-white rounded-md',
        props.class,
      )}
    >
      {props.children}
    </div>
  )
}
