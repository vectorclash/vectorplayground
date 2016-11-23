var footer = document.querySelector('.footer');
var color1 = randomRGBAObject();
var color2 = randomRGBAObject();

function changeFooterColor() {
  var newColor1 = randomRGBAObject();
  var newColor2 = randomRGBAObject();

  TweenMax.to(color1, 5, {r:newColor1.r, g:newColor1.g, b:newColor1.b, a:newColor1.a, ease:Quad.easeInOut, onUpdate:updateFooterGradient});
  TweenMax.to(color2, 5, {r:newColor2.r, g:newColor2.g, b:newColor2.b, a:newColor2.a, ease:Quad.easeInOut});

  TweenMax.delayedCall(8, changeFooterColor);
}

function updateFooterGradient() {
  footer.style.backgroundImage = "linear-gradient(42deg, rgba(" + Math.round(color1.r) + ", " + Math.round(color1.g) + ", " + Math.round(color1.b) + ", " + 1 + "), rgba(" + Math.round(color2.r) + ", " + Math.round(color2.g) + ", " + Math.round(color2.b) + ", " + color2.a + "))";
}

function randomRGBAObject() {
  var _r = Math.round(Math.random() * 255);
  var _g = Math.round(Math.random() * 255);
  var _b = Math.round(Math.random() * 255);
  var _a = Math.random();

  return {r:_r, g:_g, b:_b, a:_a};
}

changeFooterColor();
