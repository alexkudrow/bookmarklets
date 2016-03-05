javascript:(function(){
	var currentElem   = null,
	    isCtrlPressed = false;

	window.focus();

	function handleLostFocus(event) {
		if (document.activeElement.tagName !== 'BODY') {
			deleteElement(event);
		}
	}

	function highlightElement(event) {
		currentElem = event.target;
		currentElem.style.background = 'pink';
		currentElem.style.outline = '2px solid crimson';
	}

	function unhighlightElement() {
		if (currentElem) {
			currentElem.style.background = '';
			currentElem.style.outline = '';
		}
	}

	function deleteElement(event) {
		event.preventDefault();
		event.stopImmediatePropagation();

		unhighlightElement();

		currentElem.parentNode.removeChild(currentElem);

		if (!isCtrlPressed) {
			releaseEvents();
		}
	}

	function handleKeyDown(event) {
		if (event.keyCode === 27) {
			unhighlightElement();
			releaseEvents();
		}

		isCtrlPressed = event.ctrlKey;
	}

	function handleKeyUp(event) {
		isCtrlPressed = event.ctrlKey;
	}

	function releaseEvents() {
		window.removeEventListener('blur', handleLostFocus);
		document.removeEventListener('mouseover', highlightElement);
		document.removeEventListener('mouseout', unhighlightElement);
		document.removeEventListener('click', deleteElement);
		document.removeEventListener('keydown', handleKeyDown);
		document.removeEventListener('keyup', handleKeyUp);

		currentElem        =
		isCtrlPressed      =
		handleLostFocus    =
		highlightElement   =
		unhighlightElement =
		deleteElement      =
		handleKeyDown      =
		handleKeyUp        =
		releaseEvents      = null;
	}

	window.addEventListener('blur', handleLostFocus);
	document.addEventListener('mouseover', highlightElement);
	document.addEventListener('mouseout', unhighlightElement);
	document.addEventListener('click', deleteElement);
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
})();