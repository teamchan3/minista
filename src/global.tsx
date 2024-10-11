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
        <script defer src="/src/assets/script.ts" />
      </Head>
      <main>
        <Header />
        <div>{children}</div>

      </main>
    </>
  )
}