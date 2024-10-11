import Header from "@/components/global/header/header"

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}