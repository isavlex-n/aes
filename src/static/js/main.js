import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider.js'
import { showHide } from '../../components/menu/menu'
import 'lightgallery.js'
import 'glider-js'

lightGallery(document.getElementById('lightgallery'), {
  mode: 'lg-slide',
})

let slider = tns({
  container: '.slider__slides',
  items: 1,
  slideBy: 'page',
  controlsText: ['', ''],
  controlsContainer: '.slider__controls',
  navContainer: '.slider__nav',
  loop: false,
})

let reviewsSlider = tns({
  container: '.reviews__slides',
  items: 1,
  slideBy: 1,
  controlsText: ['', ''],
  controlsContainer: '.reviews__controls',
  navContainer: '.reviews__nav',
})

function stubVideoSlide() {
  let contents = []
  let prevIndex = 0
  const slidesEls = document.querySelectorAll('.slider__slide--video')
  slidesEls.forEach((slide, index) => {
    contents[index] = { content: slide.innerHTML, slide }
    slide.addEventListener('click', (e) => {
      const video = e.target.closest('[data-video]').dataset.video
      slide.innerHTML = `<div class="you-tube__relation"><div class="you-tube__ratio"></div><iframe class="you-tube__content" src="${video}" frameborder="0" allow="accelerometer; gyroscope; " allowfullscreen></iframe></div>`
    })
  })
  slider.events.on('indexChanged', (currentSlide) => {
    contents[prevIndex].slide.innerHTML = contents[prevIndex].content
    prevIndex = currentSlide.index
  })
}

stubVideoSlide()

showHide({
  clickEl: '.hamburger',
  clckToggleEl: '.hamburger__layers',
  clickToggleClass: 'hamburger__layers--disclosed',
  showHideEl: '.menu',
  showHideToggleClass: 'menu--disclosed',
  clickBreakEl: '.menu__link',
})
