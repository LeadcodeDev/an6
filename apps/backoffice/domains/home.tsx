import Layout from '#apps/backoffice/ui/layouts/layout'
import { httpContext } from '#apps/common/ui/components/helpers'

export default function Home(): JSX.Element {
  const context = httpContext()
  return (
    <Layout>
      <p class="text-4xl">Hello World !</p>
      {context.route?.pattern}
    </Layout>
  )
}
