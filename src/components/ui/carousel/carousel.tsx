import { Head } from "minista"
// import "./button.css"
import { withBaseProps, BaseProps } from '@/components/base';

import '@splidejs/splide/css';

interface CarouselProps extends BaseProps {
  children: React.ReactNode;
}

function CarouselBase({ children, ...rest }: CarouselProps) {
  return (
    <>
      <Head>
        <script type="module" src="/src/components/ui/carousel/scripts.ts" data-minista-entry-name="components/ui/carousel" />
      </Head>
      <div {...rest}>
        <section className="splide" aria-label="Splideの基本的なHTML">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">Slide 01</li>
              <li className="splide__slide">Slide 02</li>
              <li className="splide__slide">Slide 03</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

const Carousel = withBaseProps(CarouselBase, 'c-carousel');

export default Carousel;