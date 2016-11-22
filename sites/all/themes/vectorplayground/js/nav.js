var navContainer;
var closeButton;
var hamburgerButton;
var navBackground;
var isNavOpen = false;

function initNav() {
  navContainer = document.querySelector(".navbar-nav");
  closeButton = document.querySelector(".mobile-nav-close");
  hamburgerButton = document.querySelector("#hamburger-icon");
  navBackground = document.querySelector(".nav-background");

  hamburgerButton.addEventListener("click", onHBClick);
  hamburgerButton.addEventListener("mouseover", onHBOver);
  hamburgerButton.addEventListener("mouseout", onHBOut);

  window.addEventListener("resize", onWindowResize);
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
    //TweenMax.to(hamburgerButton, 1, {className:"hamburger-icon-middle", ease:Back.easeOut});
  } else {
    isNavOpen = false;
    TweenMax.to("#upper-bun", 0.5, {morphSVG:"#upper-bun", ease:Elastic.easeOut});
    TweenMax.to("#veggie-patty", 0.5, {morphSVG:"#veggie-patty", delay:0.5, ease:Elastic.easeOut});
    TweenMax.to("#veggie-patty", 0.5, {scaleX:1, scaleY:1, alpha:1, fill:0xEC008C, ease:Bounce.easeOut});
    TweenMax.to("#lower-bun", 0.5, {morphSVG:"#lower-bun", ease:Elastic.easeOut});

    TweenMax.to(navContainer, 0.5, {alpha:0, ease:Bounce.easeOut, onComplete:function(){navContainer.style.display="none";}});

    TweenMax.to(navBackground, 1, {opacity:0, onComplete:disableNavBackground});

    TweenMax.set(hamburgerButton, {zIndex:400});

    //TweenMax.to(hamburgerButton, 1, {className:"hamburger-icon-right", ease:Back.easeOut});
  }
}

function enableNavBackground() {
  TweenMax.set(navBackground, {display:'block'});
}

function disableNavBackground() {
  TweenMax.set(navBackground, {display:'none'});
}

function onHBOver(event) {
  TweenMax.to("#upper-bun", 0.5, {fill:0x848484, ease:Back.easeOut});
  TweenMax.to("#veggie-patty", 0.5, {fill:0x333333, ease:Back.easeOut});
  TweenMax.to("#lower-bun", 0.5, {fill:0x848484, ease:Back.easeOut});
}

function onHBOut(event) {
  TweenMax.to("#upper-bun", 0.5, {fill:0xEC008C, ease:Back.easeOut});
  if(isNavOpen) {
    TweenMax.to("#veggie-patty", 0.5, {fill:"rgb(11, 146, 176)", ease:Back.easeOut});
  } else {
    TweenMax.to("#veggie-patty", 0.5, {fill:0xEC008C, ease:Back.easeOut});
  }
  TweenMax.to("#lower-bun", 0.5, {fill:0xEC008C, ease:Back.easeOut});
}

function onWindowResize(event) {

}

window.addEventListener("load", initNav);
