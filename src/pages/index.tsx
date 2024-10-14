import type { Metadata } from "minista"
import { Head, Image } from "minista"
import Icon from "@/components/ui/icon/icon"
import Carousel from "@/components/ui/carousel/carousel"
import Button from "@/components/ui/button/button"
import Hero from "@/components/pages/home/hero"
import Container from "@/components/ui/container/container"
export const metadata: Metadata = {
  title: "Home"
}

export default function () {
  return (
    <>
      <Head>
      </Head>
      <Hero />
      <h1 className="text-3xl font-medium">Hello!</h1>
      <div className="p-10">
        <Button>
          <span className="text-red-500"><Icon iconId="typescript" /></span>
        </Button>
        <Button>
          <span>Button2</span>
        </Button>
        <Button>
          <span>Button</span>
        </Button>
      </div>
      <Carousel>
        <></>
      </Carousel>
      <Carousel>
        <></>
      </Carousel>
      <Container>
        <Image src="/src/assets/images/150x150.png" alt="150x150" />
      </Container>
    </>
  )
}
