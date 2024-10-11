import type { GlobalProps } from "minista"
import { Head } from "minista"
import Header from "@/components/global/header/header"
import "@/assets/style.css"

export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />
      </Head>
      <main>
        <Header />
        <div>{children}</div>

      </main>
    </>
  )
}