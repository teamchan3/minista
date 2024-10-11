import type { GlobalProps } from "minista"
import { Head } from "minista"
import Base from "@/layouts/base"
import "@/assets/style.css"

export default function ({ url, title, description, children, layout }: GlobalProps) {
  const Layout = layout ? layout : Base
  const meta = {
    title: !title ? 'ベースタイトル' : title,
    description: !description ? 'ベースディスクリプション' : description
  }

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta property="description" content={meta?.description} />
        <script defer src="/src/assets/script.ts" />
      </Head>
      <Layout>
        {children}
      </Layout>
    </>
  )
}