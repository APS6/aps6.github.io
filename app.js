

const tl = gsap.timeline();
tl.to(".inttext span", { y: "0", duration: .9, stagger: 0.3 });
tl.to(".intro", { yPercent: "-100", duration: .6});

tl.fromTo('.circle', .6, {opacity: 0, x: 20}, {opacity: 1, x: 0});
tl.fromTo('.headline', .7, {opacity: 0, x: 20}, {opacity: 1, x: 0});
tl.fromTo('.square', .2, {opacity: 0}, {opacity: 1});
tl.fromTo('.star', .2, {opacity: 0}, {opacity: 1});
tl.fromTo('.scroll', .2, {opacity: 0}, {opacity: 1});

// gsap.fromTo('.idothis', .5, { opacity: 0, x: 10}, { opacity: 1, x: 0, scrollTrigger: '.idothis'});
// gsap.fromTo('.stars', .5, { opacity: 0, x: 10}, { opacity: 1, x: 0, scrollTrigger: '.idothis'});


// gsap.fromTo('.skicont', .5, { opacity: 0, x: 10}, { opacity: 1, x: 0, scrollTrigger: '.skicont'});
// gsap.fromTo('.abcont', .5, { opacity: 0, x: 10}, { opacity: 1, x: 0, scrollTrigger: '.abcont'});
// gsap.fromTo('foo', .5, { opacity: 0, x: 10}, { opacity: 1, x: 0, scrollTrigger: 'footer'});

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });