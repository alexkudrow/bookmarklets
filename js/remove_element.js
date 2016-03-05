javascript:(function(){
	var currentElem  = null,
	    keepDeleting = false;

	window.focus();

	window.addEventListener('blur', handleLostFocus);
	document.addEventListener('mouseover', highlightElement);
	document.addEventListener('mouseout', unhighlightElement);
	document.addEventListener('click', deleteElement);
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);

	function handleLostFocus(event) {
		if (document.activeElement.tagName !== 'BODY') {
			deleteElement(event);
		} else {
			releaseEvents();
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

		currentElem.parentNode.removeChild(currentElem);

		if (!keepDeleting) {
			releaseEvents();
		}
	}

	function handleKeyDown(event) {
		if (event.keyCode === 27) {
			releaseEvents();
		}

		keepDeleting = event.ctrlKey;
	}

	function handleKeyUp(event) {
		keepDeleting = event.ctrlKey;
	}

	function releaseEvents() {
		unhighlightElement();

		window.removeEventListener('blur', handleLostFocus);
		document.removeEventListener('mouseover', highlightElement);
		document.removeEventListener('mouseout', unhighlightElement);
		document.removeEventListener('click', deleteElement);
		document.removeEventListener('keydown', handleKeyDown);
		document.removeEventListener('keyup', handleKeyUp);

		currentElem        =
		keepDeleting       =
		handleLostFocus    =
		highlightElement   =
		unhighlightElement =
		deleteElement      =
		handleKeyDown      =
		handleKeyUp        =
		releaseEvents      = null;
	}
})();