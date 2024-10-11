import type { GlobalProps } from "minista"
import { Head } from "minista"
import Base from "@/layouts/base"
import "@/assets/style.css"

export default function ({ url, title, description, children, layout }: GlobalProps) {
  const Layout = layout ? layout : Base
  const meta = {
    title: !title ? 'ベースタイトル' : title,
    description: !description ? 'ベースディスクリプション' : description,
    siteName: 'ベースサイト名'
  }

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta property="description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta?.siteName} />
        <meta property="og:image" content="ogimage.png" />
        <script type="module" src="/src/assets/script.ts" />
      </Head>
      <Layout>
        {children}
      </Layout>
    </>
  )
}