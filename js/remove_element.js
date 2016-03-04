javascript:(function(){
	var currentElem = null;

	window.focus();

	function handleIFrameClick(event) {
		if (document.activeElement.tagName === 'IFRAME') {
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

		currentElem.parentNode.removeChild(currentElem);

		unhighlightElement();
		releaseEvents();
	}

	function escapeListener(event) {
		if (event.keyCode == 27) {
			unhighlightElement();
			releaseEvents();
		}
	}

	function releaseEvents() {
		window.removeEventListener('blur', handleIFrameClick);
		document.removeEventListener('mouseover', highlightElement);
		document.removeEventListener('mouseout', unhighlightElement);
		document.removeEventListener('click', deleteElement);
		document.removeEventListener('keydown', escapeListener);

		currentElem        =
		handleIFrameClick  =
		highlightElement   =
		unhighlightElement =
		deleteElement      =
		escapeListener     =
		releaseEvents      = null;
	}

	window.addEventListener('blur', handleIFrameClick);
	document.addEventListener('mouseover', highlightElement);
	document.addEventListener('mouseout', unhighlightElement);
	document.addEventListener('click', deleteElement);
	document.addEventListener('keydown', escapeListener);
})();