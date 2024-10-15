import Splide from '@splidejs/splide';

class Carousel {
  private splide: Splide;
  private splideElement: HTMLElement;

  constructor(element: Element) {
    this.splideElement = element.querySelector('.splide')!;
    this.splide = new Splide(this.splideElement, {
      type: 'loop',
    });
    this.splide.mount();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.c-carousel').forEach((element) => {
    new Carousel(element);
  });
});