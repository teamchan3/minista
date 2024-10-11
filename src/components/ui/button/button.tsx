import { Head } from "minista"

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <script type="module" src="/src/components/ui/button/script.ts" data-minista-entry-name="components/ui/button" />
      </Head>
      <a className="c-button">
        {children}
      </a>
    </>
    
  )
}