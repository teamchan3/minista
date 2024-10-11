import { Head } from "minista"
import Button from "@/components/ui/button/button"
export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>
      <h1 className="text-3xl font-medium">Hello!</h1>
      <Button>
        <span>Button</span>
      </Button>
    </>
  )
}
