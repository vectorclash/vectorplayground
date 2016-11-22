var buttons;
var container;

function initSidebar() {
  container = document.querySelector(".block-views-blocksocial-buttons-block-1");
  buttons = document.querySelectorAll(".social-button");
  for(var i = 0; i < buttons.length; i++) {
    buildButton(buttons[i], i);
  }
}

function buildButton(button, index) {
    var image = button.querySelector("img");
    var url = button.querySelector(".field--name-field-url .field--item a").href;

    var newButton = document.createElement("div");
    newButton.classList.add("social-button-new");

    var buttonA = document.createElement("a");
    buttonA.href = url;
    buttonA.target = "_blank";
    newButton.appendChild(buttonA);

    newButton.style.backgroundImage = "url(" + image.src + ")";

    container.appendChild(newButton);

    TweenMax.from(newButton, 1, {y:100, alpha:0, ease:Bounce.easeOut, delay: 0.5+index*0.05});
    newButton.addEventListener("mouseover", onSocialButtonOver);
    newButton.addEventListener("mouseout", onSocialButtonOut);
}

function onSocialButtonOver(event) {
  TweenMax.to(event.currentTarget, 0.3, {scaleX:0.8, scaleY:0.8, ease:Quad.easeOut});
}

function onSocialButtonOut(event) {
  TweenMax.to(event.currentTarget, 0.2, {scaleX:1, scaleY:1, ease:Back.easeOut});
}

window.addEventListener("load", initSidebar);
