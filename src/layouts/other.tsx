
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <p>Other</p>
        <div>{children}</div>
      </div>
    </>
  )
}