$(document).ready(function() {
	doBrowserWarning();
	initHandlers();

});

function doBrowserWarning() {
	var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	
	// Show warning box if unsupported browser
	// Only work for Chrome atm since that what I develop in
	// Will test Firefox when the basic functionality is in.
	if (!isChrome)
		$("#browserwarning").fadeIn(500);
}

function initHandlers() {
	// The body listens for a dragged file entering
	document.getElementById("body").addEventListener("dragenter", onDragEnter, false);

	// The overlay listens for the dragleave event
	// The ondragover event needs to be canceled in Google Chrome
	// and Safari to allow firing the ondrop event.
	// ref: http://help.dottoro.com/ljrkqflw.php
	document.getElementById("overlay").addEventListener("dragleave", onDragLeave, false);
	document.getElementById("overlay").addEventListener("dragover", noopHandler, false);

	// File gets dropped
	document.getElementById("overlay").addEventListener("drop", onDrop, false);}

function noopHandler(evt) {
	evt.stopPropagation();
	evt.preventDefault();
}

function onDragEnter(evt) {
	$("#overlay").fadeIn(150);
}

function onDragLeave(evt) {
	$("#overlay").fadeOut(150);
}

function onDrop(evt) {
	noopHandler(evt);
	$("#overlay").fadeOut(150);
}