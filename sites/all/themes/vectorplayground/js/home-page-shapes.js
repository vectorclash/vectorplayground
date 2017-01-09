window.addEventListener("load", init);

var shapeSizeDefault = 40;
var fontSizeModifier = 3.2;
var shapes;
var mainContainer;
var colorShapes;
var shapeContainer;
var activeImage;
var FSImageActive = false;
var contentIsActive = false;

var minAnimationTime = 5;
var maxAnimationTime = 10;

function init() {
	dissmissAlerts();

	var scrollContainer = document.querySelector('.scroll-container');
	scrollContainer.className = "no-scroll-container";

	mainContainer = document.querySelector(".main-container");
	shapeContainer = document.createElement("div");
	shapeContainer.classList.add("shape-container");
	document.querySelector('body').appendChild(shapeContainer);

	shapes = document.querySelectorAll(".home-shape");

	for(var i = 0; i < shapes.length; i++) {
		var shape = shapes[i];

		var shapeHitArea = document.createElement('div');
		shapeHitArea.classList.add('shape-hit-area');
		shape.appendChild(shapeHitArea);

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

		TweenMax.set(shape, {alpha:0.7, x:Math.random()*window.innerWidth-150, y:200+(Math.random()*(window.innerHeight-400)), width: shapeSizeDefault * sizeModifier, height: shapeSizeDefault * sizeModifier});
		TweenMax.from(shape, 1, {alpha:0, delay:i*0.2, ease:Elastic.easeOut});

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

		var subtitle = shape.querySelector(".shape-content-subtitle");
		shape.mySubtitle = subtitle.textContent;

		var galleryContent = shape.querySelector(".shape-content-gallery").querySelectorAll("img");
		if(galleryContent) {
			shape.myGallery = new Array();
			for(var i = 0; i < galleryContent.length; i++) {
				shape.myGallery.push(galleryContent[i].src);
			}
		}

		var toolsContent = shape.querySelector(".shape-tools");
		if(toolsContent) {
			var toolsContentChildren = toolsContent.querySelectorAll("li");
			shape.myTools = new Array();
			for(var i = 0; i < toolsContentChildren.length; i++) {
				shape.myTools.push(toolsContentChildren[i].textContent);
			}
		}

		shapeContainer.appendChild(shape);

		TweenMax.delayedCall(0.2, animateShape, [shape]);
		shape.shapeClickHammer = new Hammer(shapeHitArea);
		shapeHitArea.addEventListener("mouseover", onShapeOver);
	}

	for(var i = 0; i < shapes.length*3; i++) {
		var colorShape = document.createElement("div");
		colorShape.classList.add("color-shape");
		colorShape.style.backgroundImage = "linear-gradient(42deg, " + randomRGBA() + ", " + randomRGBA() + ")";
		var ranSize = 10 + Math.random() * (shapeSizeDefault * 5);
		TweenMax.set(colorShape, {alpha:0.3+Math.random()*0.5, x:Math.random()*window.innerWidth, y:200+(Math.random()*(window.innerHeight-200)), width: ranSize, height: ranSize});
		shapeContainer.appendChild(colorShape);

		animateShape(colorShape);
	}

	colorShapes = document.querySelectorAll('.color-shape');

	onHomeResize(null);
	window.addEventListener('resize', onHomeResize);
}

function animateShape(shape) {
	var shapeRect = shape.getBoundingClientRect();

	var ranTime = minAnimationTime + Math.random() * maxAnimationTime;
	var windowMin = -(window.innerWidth / 5);
	var windowWidth = window.innerWidth * 0.8;
	var windowHeight = window.innerHeight - 300;

	var endX = getRandomArbitrary(0, windowWidth-100);
	var endY = 250 + Math.random() * windowHeight -100;

	var midX = getRandomArbitrary(shapeRect.left, endX);
	var midY = getRandomArbitrary(shapeRect.top, endY);

	TweenMax.to(shape, ranTime, {bezier:{type:"soft", values:[{x:midX, y:midY}, {x:endX, y:endY}]}, ease:Power1.easeInOut, onComplete:animateShape, onCompleteParams:[shape]});
}

// CONSTRUCT AND DESTROY CONTENT

function dissmissAlerts() {
	var alerts = document.querySelectorAll(".alert");
	TweenMax.staggerTo(alerts, 3, {alpha:0, y:100+Math.random()*600, rotation:-100+Math.random()*200, skewY:-50+Math.random()*100, delay:1, ease:Elastic.easeOut, onComplete:removeAlerts, onCompleteParams:[alerts]}, 0.2);
}

function removeAlerts(alerts) {
	for(var i = 0; i < alerts.length; i++) {
		var alert = alerts[i];
		alert.parentNode.removeChild(alert);
	}
}

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
	contentIsActive = true;
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

	var titleContainer = document.createElement("div");
	titleContainer.classList.add("shape-content-titles");
	contentImage.appendChild(titleContainer);

	var contentTitle = document.createElement("h1");
	contentTitle.textContent = activeShape.myTitle;
	contentTitle.classList.add("shape-content-title-full");
	titleContainer.appendChild(contentTitle);

	var contentSubtitle = document.createElement("h2");
	contentSubtitle.textContent = activeShape.mySubtitle;
	contentSubtitle.classList.add("shape-content-subtitle-full");
	titleContainer.appendChild(contentSubtitle);

	var closeButton = document.createElement("div");
	closeButton.classList.add("close-button");
	contentImage.appendChild(closeButton);

	var mobileCloseButton = document.createElement("div");
	mobileCloseButton.classList.add("mobile-close-button");
	mainContainer.appendChild(mobileCloseButton);

	var contentContainer = document.createElement("div");
	contentContainer.classList.add("shape-content-container");
	newContent.appendChild(contentContainer);

	var contentBody = document.createElement("div");
	contentBody.innerHTML = activeShape.bodyContent;

	var galleryContainer = document.createElement("ul");
	galleryContainer.classList.add("shape-content-gallery-full");
	contentBody.appendChild(galleryContainer);

	var mobileCarousel = document.createElement('div');
	mobileCarousel.classList.add('main-carousel');
	contentBody.appendChild(mobileCarousel);

	for(var i = 0; i < activeShape.myGallery.length; i++) {
		var item = document.createElement("li");
		galleryContainer.appendChild(item);
		item.style.backgroundImage = "url(" + activeShape.myGallery[i] + ")";
		item.active = false;
		item.key = i;
		item.addEventListener("mouseover", onGalleryItemOver);
		item.addEventListener("mouseout", onGalleryItemOut);
		// item.addEventListener("click", onGalleryItemClick);
		var itemHammer = new Hammer(item);
		itemHammer.on('tap', onGalleryItemClick);

		// build mobile carousel items
		var carouselItem = document.createElement('div');
		carouselItem.classList.add('carousel-cell');
		var carouselItemContent = document.createElement('img');
		carouselItemContent.src = activeShape.myGallery[i];
		carouselItem.appendChild(carouselItemContent);
		mobileCarousel.appendChild(carouselItem);
	}

	if(activeShape.myTools) {
		var toolsContainer = document.createElement("ul");
		toolsContainer.classList.add("shape-content-tools-full");
		contentBody.appendChild(toolsContainer);

		for(var i = 0; i < activeShape.myTools.length; i++) {
			var item = document.createElement("li");
			item.textContent = activeShape.myTools[i];
			toolsContainer.appendChild(item);
		}
	}

	contentBody.classList.add("shape-content-body-full");
	contentContainer.appendChild(contentBody);

	mainContainer.appendChild(newContent);
	TweenMax.from(newContent, 1, {x:window.innerWidth, ease:Quad.easeInOut});

	TweenMax.staggerFrom(newContent.childNodes, 1, {y:100, alpha:0, delay:0.6, ease:Bounce.easeOut}, 0.2);

	TweenMax.staggerFrom(contentBody.childNodes, 1, {y:100, alpha:0, delay:0, ease:Bounce.easeOut}, 0.1);

	TweenMax.staggerFrom(galleryContainer.childNodes, 1, {y:100, alpha:0, delay:1.5, ease:Bounce.easeOut}, 0.1);
	if(toolsContainer) {
		TweenMax.staggerFrom(toolsContainer.childNodes, 1, {y:100, alpha:0, delay:2, ease:Bounce.easeOut}, 0.1);
	}

	//var titleSplit = new SplitText(contentTitle, {type:"chars, words, lines"});
	//TweenMax.staggerFrom(titleSplit.chars, 2, {cycle:{y:[100, -100, 50, -50, 20, -20]}, alpha:0, ease:Elastic.easeOut, delay:1.2}, -0.02);

	TweenMax.from(contentTitle, 2, {y:500, alpha:0, delay:0.2, ease:Expo.easeInOut});

	TweenMax.from(contentSubtitle, 2, {y:100, alpha:0, delay:0.8, ease:Expo.easeInOut});

	TweenMax.from(closeButton, 1, {rotation:250, y:-200, ease:Bounce.easeOut, delay:1.5});
	TweenMax.to(closeButton, 1, {alpha:0.9, ease:Bounce.easeOut, delay:1.5});

	TweenMax.from(mobileCloseButton, 1, {rotation:250, y:-200, ease:Bounce.easeOut, delay:1.5});
	TweenMax.to(mobileCloseButton, 1, {alpha:0.9, ease:Bounce.easeOut, delay:1.5});

	TweenMax.delayedCall(1, addContentListeners, [contentImage]);
	TweenMax.delayedCall(2, activateCarousel, [mobileCarousel]);
}

function activateCarousel(carousel) {
	var flkty = new Flickity( carousel, {
	  imagesLoaded: true,
	  percentPosition: false,
		wrapAround: true,
		freeScroll: true,
		prevNextButtons: false
	});
}

function addContentListeners(object) {
	var imageHammer = new Hammer(object);
	imageHammer.on('tap', removeContent);
	var closeButton = document.querySelector('.mobile-close-button');
	var closeHammer = new Hammer(closeButton);
	closeHammer.on('tap', removeContent);
	object.addEventListener("mouseover", onHomeImageOver);
	object.addEventListener("mouseout", onHomeImageOut);
}

function showFullImage(image) {
	if(!FSImageActive) {
		FSImageActive = true;
		var fullScreenImage = document.createElement('div');
		fullScreenImage.classList.add('fullscreen-image');
		fullScreenImage.style.backgroundImage = image;
		activeImage = fullScreenImage;
		mainContainer.appendChild(fullScreenImage);

		var closeButton = document.createElement("div");
		closeButton.classList.add("close-button");
		fullScreenImage.appendChild(closeButton);

		fullScreenImage.addEventListener('click', destroyFullScreenImage);
		closeButton.addEventListener("mouseover", onCloseOver);
		closeButton.addEventListener("mouseout", onCloseOut);

		TweenMax.from(closeButton, 0.8, {y:-100, alpha:0, delay:0.3, ease:Bounce.easeOut});
		TweenMax.from(fullScreenImage, 0.8, {scaleX:1.5, scaleY:1.5, alpha:0, ease:Bounce.easeOut});
		TweenMax.to(fullScreenImage, 0.8, {borderColor:Math.random()*0xFFFFFF, ease:Bounce.easeOut});
	}
}

// UTILITIES

function randomRGBA() {
	return "rgba(" + randomRGBValue() + ", " + randomRGBValue() + ", " + randomRGBValue() + ", 0.7)";
}

function randomRGB() {
	return "rgba(" + randomRGBValue() + ", " + randomRGBValue() + ", " + randomRGBValue() + ")";
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

function onGalleryItemClick(event) {
	showFullImage(event.target.style.backgroundImage);
}

function destroyFullScreenImage(event) {
	TweenMax.to(event.currentTarget, 0.5, {border:"0px", ease:Bounce.easeOut});
	TweenMax.to(event.currentTarget, 0.5, {scaleX:0.5, scaleY:0.5, alpha:0, ease:Bounce.easeOut, onComplete:function(){mainContainer.removeChild(activeImage);FSImageActive=false;}});
}

function onGalleryItemOver(event) {
	TweenMax.to(event.currentTarget, 1, {flex:1.5, ease:Elastic.easeOut});
}

function onGalleryItemOut(event) {
	TweenMax.to(event.currentTarget, 0.4, {flex:1, ease:Bounce.easeOut});
}

function onHomeImageOver(event) {
	if(window.innerWidth > 767) {
		TweenMax.to(event.currentTarget.querySelector('.shape-content-titles'), 0.3, {boxShadow:"-20px 20px 80px rgba(226, 18, 74, 0.2)", ease:Bounce.easeOut});
	}
	TweenMax.to(event.currentTarget.querySelector('.close-button'), 0.3, {scaleX:1.1, scaleY:1.1, alpha:0.5, ease:Bounce.easeOut});
}

function onHomeImageOut(event) {
	if(window.innerWidth > 767) {
		TweenMax.to(event.currentTarget.querySelector('.shape-content-titles'), 0.3, {boxShadow:"-5px 5px 40px rgba(28, 0, 54, 0.5)", ease:Bounce.easeOut});
	}
	TweenMax.to(event.currentTarget.querySelector('.close-button'), 0.1, {scaleX:1, scaleY:1, alpha:0.9, ease:Quad.easeOut});
}

function onCloseOver(event) {
	TweenMax.to(event.currentTarget, 0.3, {scaleX:1.1, scaleY:1.1, alpha:0.5, ease:Bounce.easeOut});
}

function onCloseOut(event) {
	TweenMax.to(event.currentTarget, 0.1, {scaleX:1, scaleY:1, alpha:0.9, ease:Quad.easeOut});
}

function removeContent(event) {
	var mobileCloseButton = document.querySelectorAll('.mobile-close-button');
	TweenMax.killTweensOf(mobileCloseButton);
	TweenMax.to(mobileCloseButton, 1, {alpha:0, y:window.innerHeight/3, ease:Bounce.easeOut, delay:0.1, onComplete:removeCloseButtons, onCompleteParams:[mobileCloseButton]});
	var content = document.querySelectorAll("div.main-shape-content.active");
	for(var i = 0; i < content.length; i++) {
		var deadContent = content[i];
		deadContent.classList.remove("active");

		TweenMax.staggerTo(deadContent.childNodes, 1, {y:window.innerHeight, alpha:0, ease:Quad.easeInOut}, -0.07);
		TweenMax.to(deadContent, 1, {alpha:0, ease:Quad.easeInOut, onComplete:function(){mainContainer.removeChild(deadContent);contentIsActive=false;}});
	}
}

function removeCloseButtons(closeButtons) {
	for(var i = 0; i < closeButtons.length; i++) {
		var button = closeButtons[i];
		button.parentNode.removeChild(button);
	}
}

function onShapeClick(event) {
	event.preventDefault();
	disableShape(event.target);
	if(!contentIsActive) {
		for(var i = 0; i < shapes.length; i++) {
			if(event.target.parentNode == shapes[i]) {
				buildContent(i);
				event.target.parentNode.shapeClickHammer.off('tap', onShapeClick);
			}
		}
	}
}

function onShapeOver(event) {
	event.preventDefault();
	event.target.removeEventListener("mouseover", onShapeOver);
	event.target.addEventListener("mouseout", onShapeOut);

	TweenMax.killTweensOf(event.target.parentNode);

	var summary = event.target.parentNode.querySelector(".shape-body-summary");
	if(summary) {
		buildSummary(summary.textContent);
	}

	var logo = event.target.parentNode.querySelector(".shape-logo");
	if(logo) {
		TweenMax.set(logo, {transformOrigin:"50% 50%"});
		TweenMax.from(logo, 0.5, {scaleX:0.5, scaleY:0.5, alpha:0, ease:Quad.easeOut});
	}

	var background = event.target.parentNode.querySelector(".shape-background");
	var title = event.target.parentNode.querySelector(".shape-title");
	TweenMax.set(title, {display:"block"});
	if(title) {
		var split = new SplitText(title, {type:"chars, words, lines"});
		TweenMax.staggerFrom(split.chars, 0.6, {cycle:{y:[20, -20]}, alpha:0, ease:Expo.easeOut}, 0.04);
	}
	if(background) {
		TweenMax.to(background, 0.5, {alpha:0, scaleX:1.4, scaleY:1.4, ease:Quad.easeOut});
	}

	event.target.parentNode.shapeClickHammer.on('tap', onShapeClick);
	//event.currentTarget.addEventListener('click', onShapeClick);

	//TweenMax.delayedCall(5, onShapeOut, [event]);
}

function onShapeOut(event) {
	TweenMax.killDelayedCallsTo(onShapeOut);
	destroySummaries();
	disableShape(event.target);
}

function disableShape(shape) {
	event.target.removeEventListener("mouseout", onShapeOut);
	var background = shape.parentNode.querySelector(".shape-background");
	var title = shape.parentNode.querySelector(".shape-title");
	if(title) {
		var split = new SplitText(title, {type:"chars, words, lines"});
		TweenMax.staggerTo(split.chars, 0.5, {cycle:{y:[20, -20]}, alpha:0, ease:Quad.easeOut}, 0.02);
	}
	if(background) {
		TweenMax.to(background, 0.5, {alpha:1, scaleX:1, scaleY:1, ease:Quad.easeInOut, onComplete:resetEventListeners, onCompleteParams:[shape]});
	}
}

function onHomeResize(event) {
	var scaleModifier;

	if(window.innerWidth > 600) {
		minAnimationTime = 5;
		maxAnimationTime = 10;
		scaleModifier = 1;
	} else {
		minAnimationTime = 2;
		maxAnimationTime = 5;
		scaleModifier = 0.7;
	}

	for(var i = 0; i < shapes.length; i++) {
		var shape = shapes[i];
		TweenMax.set(shape, {scaleX:scaleModifier, scaleY:scaleModifier});
	}

	for(var i = 0; i < colorShapes.length; i++) {
		var shape = colorShapes[i];
		TweenMax.set(shape, {scaleX:scaleModifier, scaleY:scaleModifier});
	}
}

function resetEventListeners(shape) {
	animateShape(shape.parentNode);
	shape.parentNode.shapeClickHammer.off('tap', onShapeClick);
	shape.addEventListener("mouseover", onShapeOver);
}
