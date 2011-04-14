quickDrop = {

	doBrowserWarning: function() {
		var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

		// Show warning box if unsupported browser
		// Only work for Chrome atm since that what I develop in
		// Will test Firefox when the basic functionality is in.
		if (!isChrome)
		$("#browserwarning").fadeIn(500);
	},

	initHandlers: function() {
		// The body listens for a dragged file entering
		$("#body").bind("dragenter", this.onDragEnter);

		// The overlay listens for the dragleave event
		// The ondragover event needs to be canceled in Google Chrome
		// and Safari to allow firing the ondrop event.
		// ref: http://help.dottoro.com/ljrkqflw.php
		$("#overlay").bind("dragleave", this.onDragLeave);	
		$("#overlay").bind("dragover", this.noopHandler);

		// File gets dropped
		$("#overlay").bind("drop", this.onDrop);
	},

	noopHandler: function(evt) {
		evt.stopPropagation();
		evt.preventDefault();
	},

	onDragEnter: function(evt) {
		$("#overlay").fadeIn(150);
	},

	onDragLeave: function(evt) {
		$("#overlay").fadeOut(150);
	},

	onDrop: function(evt) {
		this.noopHandler(evt);
		$("#overlay").fadeOut(150);
	},
	
	setStatus: function(msg) {
		$("#status").html(msg);		
	}
};

$(document).ready(function() {
	quickDrop.doBrowserWarning();
	quickDrop.initHandlers();
});