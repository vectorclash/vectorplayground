var fixedBackground

function initBackground() {
  fixedBackground = document.querySelector('.background-fixed');
  TweenMax.set(fixedBackground, {width:window.innerWidth, height:window.innerHeight});
  window.addEventListener('resize', onWindowResize);
}

function onWindowResize(event) {
  TweenMax.set(fixedBackground, {width:window.innerWidth, height:window.innerHeight});
}

window.addEventListener('load', initBackground);
