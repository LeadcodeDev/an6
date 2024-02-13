import { PropsWithChildren } from '@kitajs/html'
import { Fragment, Vite } from '#apps/common/ui/components/helpers'

export default function ApplicationLayout(props: PropsWithChildren) {
  return (
    <Fragment>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>BoringMoney</title>

          <Vite.Entrypoint entrypoints={['apps/common/ui/scripts/app.ts']} />
        </head>
        <body>{props.children}</body>
      </html>
    </Fragment>
  )
}
