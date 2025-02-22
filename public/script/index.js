import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const $main = $('main');
const $hero = $('#hero');
const $heroBackground = $('#hero-background');
const $hotAirBalloon = $('#hot-air-balloon');
const $sun = $('#sun');
const $moon = $('#moon');
const $landscape = $('#landscape');
const $skills = $('#skills');

const skyColorTop = d3.interpolateRgb('#00bcff', '#0A2342');
const skyColorBottom = d3.interpolateRgb('white', '#3E1F47');

$main.on('scroll', async function () {
  const scrollPercentage = $main.scrollTop() / window.outerHeight;

  if (scrollPercentage > 1.5) {
    // House zoom in
    let scale = 1 + (scrollPercentage - 1.5) * 100;
    $landscape.css('scale', scale);
  } else {
    // Sky transition
    let bgColorTop = skyColorTop(Math.min(scrollPercentage, 1));
    let bgColorBottom = skyColorBottom(Math.min(scrollPercentage, 1));
    $heroBackground.css('--tw-gradient-from', bgColorTop);
    $heroBackground.css('--tw-gradient-to', bgColorBottom);

    // Dynamic objects movement
    let hotAirBalloonY = Math.min((scrollPercentage) * 100, 200);
    let sunX = d3.easeCubicOut(scrollPercentage) * -200;
    let sunY = scrollPercentage * 100;
    let moonX = (1 - d3.easeCubicIn(1 - Math.abs(scrollPercentage - 1))) * Math.sign(1 - scrollPercentage) * 200
    let moonY = (1 - d3.easeCubicOut(1 - Math.abs(scrollPercentage - 1))) * 100;
    $hotAirBalloon.css('translate', `0 ${hotAirBalloonY}vh`);
    $sun.css('translate', `${sunX}% ${sunY}vh`);
    $moon.css('translate', `${moonX}% ${moonY}vh`);

    // House zoom out
    $landscape.css('scale', 1);
  }

  if (scrollPercentage < 2.5) {
    // Show landscapes
    $main.css('background', 'transparent');
    $hero.find('.fixed').css('display', 'initial');

    $skills.children().each((index, child) => {
      $(child).fadeOut();
    });
  } else {
    // Hide landscapes
    $main.css('background', '#003030');
    $hero.find('.fixed').css('display', 'none');

    $skills.children().each((index, child) => {
      $(child).fadeIn();
    });
  }
  if (scrollPercentage < 3.5) {
    $skills.children().each((child) => {
      
    });
  } else {
    
  }

  // console.log(scrollPercentage);
});