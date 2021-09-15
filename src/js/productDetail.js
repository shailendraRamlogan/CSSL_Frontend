import "../css/custom.css";
import Glide, { Controls, Breakpoints, Autoplay, Swipe } from '@glidejs/glide/dist/glide.modular.esm';
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import { siblings } from '@glidejs/glide/src/utils/dom';

import Alpine from 'alpinejs'


Alpine.data('testimonial', () => ({
    init(){
  
        const classes = {
          glideSlideNextActive: 'glide__slide--next-active',
        };
  
        const selectors = {
          glideSlideNextActive: '.glide__slide--next-active',
          glideTrack: '.glide__track',
        };
  
        /*
        * This allows for auto height on the glide container
        * */
        function ResizeSlider(Glide, Components, Events) {
          var Component = {
            mount() {
              this.changeActiveSlide();
              this.updateTrackHeight();
            },
  
            changeActiveSlide() {
              let slide = Components.Html.slides[Glide.index];
              slide.classList.add(classes.glideSlideNextActive);
  
              siblings(slide).forEach((sibling) => {
                sibling.classList.remove(classes.glideSlideNextActive);
              });
            },
  
            updateTrackHeight() {
              console.log('update track height');
  
              const activeSlide = document.querySelector(
                selectors.glideSlideNextActive
              );
              const activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;
  
              const glideTrack = document.querySelector(selectors.glideTrack);
              const glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;
  
              console.log(`Active slide: ${activeSlide} activeSlideHeight: ${activeSlideHeight}`)
  
              if (activeSlideHeight !== glideTrackHeight) {
                glideTrack.style.height = `${activeSlideHeight}px`;
              }
            },
          };
  
          Events.on('run', () => {
            Component.changeActiveSlide();
            Component.updateTrackHeight();
          });
  
          return Component;
        };
  
        const slider = new Glide('.testimonials', {
          type: 'carousel',
          gap: 0,
          autoplay: 4000,
          hoverpause: true,
          perView: 1
        });
  
        slider.mount({
          ResizeSlider: ResizeSlider,
          Controls, Autoplay, Swipe
        });
  
      }
  }))
  
  Alpine.start()
