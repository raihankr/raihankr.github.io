import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const hero = document.querySelector('#hero');
const heroBackground = document.querySelector('#hero-background');
const hotAirBalloon = document.querySelector('#hot-air-balloon');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

const skyColorTop = d3.interpolateRgb('#00bcff', '#0A2342');
const skyColorBottom = d3.interpolateRgb('white', '#3E1F47');

hero.addEventListener('scroll', (event) => {
  const scrollPercentage = hero.scrollTop / window.outerHeight;

  var bgColorTop = skyColorTop(scrollPercentage);
  heroBackground.style.setProperty('--tw-gradient-from', bgColorTop);

  var bgColorBottom = skyColorBottom(scrollPercentage);
  heroBackground.style.setProperty('--tw-gradient-to', bgColorBottom);

  hotAirBalloon.style.translate = '0 ' + Math.min((scrollPercentage) * 100, 200) + 'vh';
  
  sun.style.translate = `${d3.easeCubicOut(scrollPercentage) * -200}% ${scrollPercentage * 100}vh`;
  
  moon.style.translate = `${(1 - d3.easeCubicIn(1 - Math.abs(scrollPercentage - 1))) * Math.sign(1-scrollPercentage) * 200}% ${(1 - d3.easeCubicOut(1 - Math.abs(scrollPercentage - 1))) * 100}vh`;
});