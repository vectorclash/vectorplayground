var navContainer;
var closeButton;
var hamburgerButton;
var navBackground;
var isNavOpen = false;
var footer;
var color1 = randomRGBAObject();
var color2 = randomRGBAObject();

function initNav() {
  navContainer = document.querySelector(".navbar-nav");
  closeButton = document.querySelector(".mobile-nav-close");
  hamburgerButton = document.querySelector("#hamburger-icon");
  navBackground = document.querySelector(".nav-background");

  footer = document.createElement("div");
  footer.classList.add("nav-footer");
  footer.innerHTML = "©" + new Date().getFullYear() + " Aaron Ezra Sterczewski";
  navContainer.appendChild(footer);

  hamburgerButton.addEventListener("click", onHBClick);
  hamburgerButton.addEventListener("mouseover", onHBOver);
  hamburgerButton.addEventListener("mouseout", onHBOut);

  changeNavColor();
}

function onHBClick(event) {
  if(!isNavOpen) {
    isNavOpen = true;
    TweenMax.to("#upper-bun", 0.5, {morphSVG:"#upper-line", ease:Elastic.easeOut});
    TweenMax.to("#veggie-patty", 0.5, {morphSVG:"#circle", ease:Elastic.easeOut});
    TweenMax.set("#veggie-patty", {transformOrigin:"50% 50%"});
    TweenMax.to("#veggie-patty", 0.5, {scaleX:35, scaleY:35, alpha:0.8, fill:"rgb(11, 146, 176)", delay:0.2, ease:Bounce.easeOut});
    TweenMax.to("#lower-bun", 0.5, {morphSVG:"#lower-line", ease:Elastic.easeOut});

    navContainer.style.display="block";
    TweenMax.staggerFrom(navContainer.childNodes, 0.5, {alpha:0, y:100, ease:Quad.easeOut}, 0.08);
    TweenMax.to(navContainer, 1, {alpha:1});

    TweenMax.to(navBackground, 1, {opacity:1, onStart:enableNavBackground});

    TweenMax.set(hamburgerButton, {zIndex:3000});
  } else {
    isNavOpen = false;
    TweenMax.to("#upper-bun", 0.5, {morphSVG:"#upper-bun", ease:Elastic.easeOut});
    TweenMax.to("#veggie-patty", 0.5, {morphSVG:"#veggie-patty", fill:0x3a0460, delay:0.5, ease:Elastic.easeOut});
    TweenMax.to("#veggie-patty", 0.5, {scaleX:1, scaleY:1, alpha:1, ease:Bounce.easeOut});
    TweenMax.to("#lower-bun", 0.5, {morphSVG:"#lower-bun", ease:Elastic.easeOut});

    TweenMax.to(navContainer, 0.5, {alpha:0, ease:Bounce.easeOut, onComplete:function(){navContainer.style.display="none";}});

    TweenMax.to(navBackground, 1, {opacity:0, onComplete:disableNavBackground});

    TweenMax.set(hamburgerButton, {zIndex:400});
  }
}

function enableNavBackground() {
  TweenMax.set(navBackground, {display:'block'});
}

function disableNavBackground() {
  TweenMax.set(navBackground, {display:'none'});
}

function changeNavColor() {
  var newColor1 = randomRGBAObject();
  var newColor2 = randomRGBAObject();

  TweenMax.to(color1, 5, {r:newColor1.r, g:newColor1.g, b:newColor1.b, a:newColor1.a, ease:Quad.easeInOut, onUpdate:updateNavGradient});
  TweenMax.to(color2, 5, {r:newColor2.r, g:newColor2.g, b:newColor2.b, a:newColor2.a, ease:Quad.easeInOut});

  TweenMax.delayedCall(8, changeNavColor);
}

function updateNavGradient() {
  navBackground.style.backgroundImage = "linear-gradient(42deg, rgba(" + Math.round(color1.r) + ", " + Math.round(color1.g) + ", " + Math.round(color1.b) + ", " + color1.a + "), rgba(" + Math.round(color2.r) + ", " + Math.round(color2.g) + ", " + Math.round(color2.b) + ", " + color2.a + "))";
}

function randomRGBAObject() {
  var _r = Math.round(Math.random() * 255);
  var _g = Math.round(Math.random() * 255);
  var _b = Math.round(Math.random() * 255);
  var _a = 0.9;

  return {r:_r, g:_g, b:_b, a:_a};
}

function onHBOver(event) {
  if(window.innerWidth > 767) {
    TweenMax.to("#upper-bun", 0.5, {fill:0x848484, ease:Back.easeOut});
    TweenMax.to("#veggie-patty", 0.5, {fill:0x333333, ease:Back.easeOut});
    TweenMax.to("#lower-bun", 0.5, {fill:0x848484, ease:Back.easeOut});
  }
}

function onHBOut(event) {
  if(window.innerWidth > 767) {
    TweenMax.to("#upper-bun", 0.5, {fill:0x3a0460, ease:Back.easeOut});
    if(isNavOpen) {
      TweenMax.to("#veggie-patty", 0.5, {fill:"rgb(11, 146, 176)", ease:Back.easeOut});
    } else {
      TweenMax.to("#veggie-patty", 0.5, {fill:0x3a0460, ease:Back.easeOut});
    }
    TweenMax.to("#lower-bun", 0.5, {fill:0x3a0460, ease:Back.easeOut});
  }
}

window.addEventListener("load", initNav);
