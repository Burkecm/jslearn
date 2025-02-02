'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const sectionsAll = document.querySelectorAll('.section');

// Function Definitions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Modal Window
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Esc to close modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Page Navigation w/ Delegation
// 1. Add eventListener to common parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Determine which child was the target
  if (e.target.classList.contains('nav__link')) {
    const sectionID = e.target.getAttribute('href');
    document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  // Deactivate all tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContents.forEach(t => t.classList.remove('operations__content--active'));

  // Activate cicked tab
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu Fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(s => {
      if (s !== link) {
        s.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Intersection Observer API
// Sticky nav
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

// Lazy Reveal Sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
sectionsAll.forEach(function (section) {
  sectionObserver.observe(section);
});

// Lazy Loading Images
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // Replace lazy img with real img
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener(
    'load',
    entry.target.classList.remove('lazy-img')
  );
};
const imageTargets = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});
imageTargets.forEach(img => imageObserver.observe(img));

// Testimonial Slider/Carousel
const slider = function () {
  // Selectors
  const slides = document.querySelectorAll('.slide');
  const maxSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  // Vars
  let currSlide = 0;

  // Function Definitions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    currSlide = slide;
  };
  const nextSlide = function (e) {
    if (currSlide == maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };
  const prevSlide = function (e) {
    if (currSlide == 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const initSlider = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  // Event Listeners
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') nextSlide(e);
    if (e.key == 'ArrowLeft') prevSlide(e);
    activateDot(currSlide);
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      // console.log('>> clicked', parseInt(slide));
      // goToSlide(parseInt(slide, 10));
      goToSlide(slide);
      activateDot(slide);
    }
  });

  initSlider();
};
slider();

// LECTURE SECTION
// const allSections = document.querySelectorAll('.section');
// const allBtns = document.getElementsByTagName('button');
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// const logo = document.querySelector('.nav__logo');

// console.log(allBtns);
// console.log(document.getElementsByClassName('btn'));

// // Inserting/creating elements
// // .insertAdjacentHTML method or...
// const msg = document.createElement('div');
// msg.classList.add('cookie-msg');
// msg.textContent = 'Cookies are everywhere. We use them.';
// msg.innerHTML =
//   'Cookies are everywhere. We use them. <button class="btn btn-close-cookie">Got it!</button>';
// header.append(msg);

// // deleting elements
// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     msg.remove();
//   });

// msg.style.backgroundColor = '#37383d';
// msg.style.width = '120%';
// msg.style.color = 'white';
// msg.style.textAlign = 'center';
// console.log(getComputedStyle(msg).color);
// console.log(logo.className);
// console.log(logo.src); // Full URL
// console.log(logo.getAttribute('src')); // Relative URL
// // data attributes
// console.log(logo.dataset.versionNum);
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('AddEventListener: Great! You are reading the heading!');
// });
// h1.onmouseenter = function (e) {
//   alert('AddEventListener: Great! You are reading the heading!');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor());
// const navlink = document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     // Stop Propagation
//     e.stopPropagation();
//   });
// const navlinks = document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//   });
// const nav = document
//   .querySelector('.nav')
//   .addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//   });
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   section1.scrollIntoView({ behavior: 'smooth' });
//   /* Old Method
//   window.scrollTo(s1coords.left, s1coords.top + window.scrollY);
//   window.scrollTo({
//     left: s1coords.left,
//     top: s1coords.top + window.scrollY,
//     behavior: 'smooth',
//   });
//   */
// });

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const sectionID = this.getAttribute('href');
//     document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// DOM Traversal
// const h1 = document.querySelector('h1');
// // Going down: selecting child elements
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children); // Direct children only
// h1.firstElementChild.style.color = 'white';

// // Going up: Selecting parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// // Closest parent node matching a given class
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // Going Sideways: selecting siblings
// // Only direct siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// // To find non-adjacent sibs, nav up to parent and check children
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(.5)';
//   }
// });
// Intersection Observer API
// const observerOptions = { root: null, threshold: 0.2 };
// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     // if (!observer.isIntersecting) {
//     //   nav.classList.add('sticky');
//     // }
//     console.log(entry);
//   });
// };
// //nav.classList.add('sticky');
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(header);
//
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed into DOM tree', e);
// });
// window.addEventListener('load', function (e) {
//   console.log('Page Fully Loaded', e);
// });
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log('User leaving page', e);
//   e.returnValue = '';
// });
