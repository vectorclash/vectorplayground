window.addEventListener("load", init);

var shapeSizeDefault = 40;
var fontSizeModifier = 3.2;
var shapes;
var mainContainer;

function init() {
	mainContainer = document.querySelector(".main-container");
	shapes = document.querySelectorAll(".home-shape");

	for(var i = 0; i < shapes.length; i++) {
		var shape = shapes[i];
		var sizeModifier = shape.querySelector(".shape-size").textContent;
		var backgroundImage = shape.querySelector("img").src;

		var logo = document.createElement("div");
		logo.classList.add("shape-logo");
		shape.appendChild(logo);

		var backgroundDiv = document.createElement("div");
		TweenMax.set(backgroundDiv, {transformOrigin:"50% 50%", width: shapeSizeDefault * sizeModifier, height: shapeSizeDefault * sizeModifier});
		backgroundDiv.style.backgroundSize = shapeSizeDefault * sizeModifier + "px " + shapeSizeDefault * sizeModifier + "px";
		backgroundDiv.style.backgroundImage = "url(" + backgroundImage + ")";
		backgroundDiv.classList.add("shape-background");
		shape.appendChild(backgroundDiv);

		TweenMax.set(shape, {alpha:0.7, x:Math.random()*window.innerWidth/2, y:Math.random()*window.innerHeight/2, width: shapeSizeDefault * sizeModifier, height: shapeSizeDefault * sizeModifier});
		TweenMax.from(shape, 2, {alpha:0, delay:i*0.2, ease:Bounce.easeOut});

		shape.size = shapeSizeDefault * sizeModifier;
		shape.url = shape.querySelector("a").href;

		shape.bodyContent = shape.querySelector(".shape-content-body").innerHTML;

		var gradientColors = shape.querySelector(".shape-color").querySelectorAll("li");
		var color1 = gradientColors[0].innerText.split(" ");
		var color2 = gradientColors[1].innerText.split(" ");

		shape.style.backgroundImage = "linear-gradient(42deg, " + color1[0] + ", " + color2[0] + ")";

		var title = shape.querySelector(".shape-title");
		shape.myTitle = title.textContent;
		TweenMax.set(title, {fontSize:fontSizeModifier*sizeModifier});

		TweenMax.delayedCall(0.2, animateShape, [shape]);

		shape.addEventListener("click", onShapeClick);
		shape.addEventListener("mouseover", onShapeOver);
	}

	for(var i = 0; i < shapes.length*3; i++) {
		var colorShape = document.createElement("div");
		colorShape.classList.add("color-shape");
		colorShape.style.backgroundImage = "linear-gradient(42deg, " + randomRGBA() + ", " + randomRGBA() + ")";
		var ranSize = 10 + Math.random() * 200;
		TweenMax.set(colorShape, {alpha:0.3+Math.random()*0.5, x:Math.random()*window.innerWidth/2, y:Math.random()*window.innerHeight/2, width: ranSize, height: ranSize});
		mainContainer.appendChild(colorShape);

		animateShape(colorShape);
	}
}

function animateShape(shape) {
	var ranTime = 15 + Math.random() * 30;
	var windowMin = -(window.innerWidth / 5);
	var windowWidth = window.innerWidth + (windowMin / 3);
	var windowHeight = window.innerHeight - (window.innerHeight / 2);

	var endX = getRandomArbitrary(windowMin, windowWidth);
	var endY = Math.random() * windowHeight;

	var midX = Math.random() * (endX / 2);
	var midY = Math.random() * (endY / 3);

	TweenMax.to(shape, ranTime, {bezier:{type:"soft", values:[{x:midX, y:midY}, {x:endX, y:endY}]}, ease:Quad.easeInOut, onComplete:animateShape, onCompleteParams:[shape]});
}

// CONSTRUCT AND DESTROY CONTENT

function buildSummary(text) {
	var newSummary = document.createElement("div");
	newSummary.classList.add("main-shape-summary", "active");
	newSummary.textContent = text;
	newSummary.style.backgroundImage = "linear-gradient(42deg, " + randomRGBA() + ", " + randomRGBA() + ")";
	TweenMax.from(newSummary, 1, {alpha:0});

	var split = new SplitText(newSummary, {type:"chars, words, lines"});
	TweenMax.staggerFrom(split.words, 0.5, {cycle:{y:[20, -20, 20, 30, 50,-100]}, alpha:0, ease:Quad.easeOut}, 0.02);

	mainContainer.appendChild(newSummary);
}

function destroySummaries() {
	var summary = document.querySelectorAll("div.main-shape-summary.active");
	for(var i = 0; i < summary.length; i++) {
		var deadSummary = summary[i];
		deadSummary.classList.remove("active");

		var split = new SplitText(deadSummary, {type:"chars, words, lines"});
		TweenMax.staggerTo(split.lines, 1, {y:window.innerHeight, alpha:0, ease:Quad.easeInOut}, -0.02);

		TweenMax.to(deadSummary, 1, {alpha:0, ease:Quad.easeInOut, onComplete:function(){mainContainer.removeChild(deadSummary);}});
	}
}

function destroySummariesWipe() {
	var summary = document.querySelectorAll("div.main-shape-summary.active");
	for(var i = 0; i < summary.length; i++) {
		var deadSummary = summary[i];
		deadSummary.classList.remove("active");

		TweenMax.to(deadSummary, 1, {x:-(window.innerWidth), ease:Quad.easeInOut, onComplete:function(){mainContainer.removeChild(deadSummary);}});
	}
}

function buildContent(shapeID) {
	destroySummariesWipe();

	var newContent = document.createElement("div");
	newContent.classList.add("main-shape-content", "active");
	newContent.style.backgroundImage = "linear-gradient(42deg, " + randomRGBA() + ", " + randomRGBA() + ")";

	var activeShape = shapes[shapeID];

	var contentImage = document.createElement("div");
	var imageSRC = activeShape.querySelector("img").src;
	contentImage.classList.add("shape-content-image-full");
	contentImage.style.backgroundImage = "url(" + imageSRC + ")";
	newContent.appendChild(contentImage);

	var contentTitle = document.createElement("h1");
	contentTitle.textContent = activeShape.myTitle;
	contentTitle.classList.add("shape-content-title-full");
	contentImage.appendChild(contentTitle);

	var closeMessage = document.createElement("h3");
	closeMessage.classList.add("close-message");
	closeMessage.textContent = "CLICK ANYWHERE TO CLOSE";
	contentImage.appendChild(closeMessage);

	var contentContainer = document.createElement("div");
	contentContainer.classList.add("shape-content-container");
	newContent.appendChild(contentContainer);

	var contentBody = document.createElement("div");
	contentBody.innerHTML = activeShape.bodyContent;
	contentBody.classList.add("shape-content-body-full");
	contentContainer.appendChild(contentBody);

	mainContainer.appendChild(newContent);
	TweenMax.from(newContent, 1, {x:window.innerWidth, ease:Quad.easeInOut});

	TweenMax.staggerFrom(newContent.childNodes, 1, {y:100, alpha:0, delay:0.6, ease:Bounce.easeOut}, 0.2);

	TweenMax.staggerFrom(contentBody.childNodes, 1, {y:100, alpha:0, delay:0, ease:Bounce.easeOut}, 0.1);

	var titleSplit = new SplitText(contentTitle, {type:"chars, words, lines"});
	TweenMax.staggerFrom(titleSplit.chars, 2, {cycle:{y:[100, -100, 50, -50, 20, -20]}, alpha:0, ease:Elastic.easeOut, delay:1}, -0.02);

	TweenMax.from(contentTitle, 1, {height:0, delay:0.8, ease:Back.easeOut});

	newContent.addEventListener("click", removeContent);
}

function removeContent() {
	var content = document.querySelectorAll("div.main-shape-content.active");
	for(var i = 0; i < content.length; i++) {
		var deadContent = content[i];
		deadContent.classList.remove("active");

		TweenMax.staggerTo(deadContent.childNodes, 1, {y:window.innerHeight, alpha:0, ease:Quad.easeInOut}, -0.07);
		TweenMax.to(deadContent, 1, {alpha:0, ease:Quad.easeInOut, onComplete:function(){mainContainer.removeChild(deadContent);}});
	}
}

// UTILITIES

function randomRGBA() {
	return "rgba(" + randomRGBValue() + ", " + randomRGBValue() + ", " + randomRGBValue() + ", 0.7)";
}

function randomRGBValue() {
	return Math.round(Math.random()*255);
}

function randomNumberXY(min, max) {
	return {x:getRandomArbitrary(min, max), y:getRandomArbitrary(min, max)}
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// EVENT HANDLERS

function onShapeClick(event) {
	for(var i = 0; i < shapes.length; i++) {
		if(event.currentTarget == shapes[i]) {
			buildContent(i);
		}
	}
}

function onShapeOver(event) {
	event.preventDefault();
	event.currentTarget.removeEventListener("mouseover", onShapeOver);
	event.currentTarget.addEventListener("mouseout", onShapeOut);

	TweenMax.killTweensOf(event.currentTarget);

	var summary = event.currentTarget.querySelector(".shape-body-summary");
	buildSummary(summary.textContent);

	var logo = event.currentTarget.querySelector(".shape-logo");
	TweenMax.set(logo, {transformOrigin:"50% 50%"});

	TweenMax.from(logo, 0.5, {scaleX:0.5, scaleY:0.5, alpha:0, ease:Quad.easeOut});

	var background = event.currentTarget.querySelector(".shape-background");
	var title = event.currentTarget.querySelector(".shape-title");
	var split = new SplitText(title, {type:"chars, words, lines"});
	TweenMax.staggerFrom(split.chars, 0.6, {cycle:{y:[20, -20]}, alpha:0, ease:Expo.easeOut}, 0.04);
	TweenMax.to(background, 0.5, {alpha:0, scaleX:1.4, scaleY:1.4, ease:Quad.easeOut});
}

function onShapeOut(event) {
	destroySummaries();
	event.currentTarget.removeEventListener("mouseout", onShapeOut);
	var background = event.currentTarget.querySelector(".shape-background");
	var title = event.currentTarget.querySelector(".shape-title");
	var split = new SplitText(title, {type:"chars, words, lines"});
	TweenMax.staggerTo(split.chars, 0.5, {cycle:{y:[20, -20]}, alpha:0, ease:Quad.easeOut}, 0.02);
	TweenMax.to(background, 0.5, {alpha:1, scaleX:1, scaleY:1, ease:Quad.easeInOut, onComplete:resetEventListeners, onCompleteParams:[event.currentTarget]});
}

function resetEventListeners(shape) {
	animateShape(shape);
	shape.addEventListener("mouseover", onShapeOver);
}
