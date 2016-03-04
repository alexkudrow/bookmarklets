javascript:(function(){
	var currentElem = null;

	function highlightElement(event) {
		currentElem = event.target;
		event.target.style.background = 'pink';
		event.target.style.outline = '2px solid crimson';
	}

	function unhighlightElement(event) {
		if (event.target) {
			currentElem.style.background = '';
			currentElem.style.outline = '';
			currentElem = null;
		}
	}

	function deleteElement(event) {
		event.preventDefault();
		event.stopImmediatePropagation();

		event.target.style.display = 'none';
		releaseEvents();
	}

	function escapeListener(event) {
		if (event.keyCode == 27) {
			releaseEvents();
		}
	}

	function releaseEvents() {
		document.removeEventListener('mouseover', highlightElement);
		document.removeEventListener('mouseout', unhighlightElement);
		document.removeEventListener('click', deleteElement);
		document.removeEventListener('keydown', escapeListener);
		currentElem.style.background = '';
		currentElem.style.outline = '';
		currentElem        =
		highlightElement   =
		unhighlightElement =
		deleteElement      =
		escapeListener     =
		releaseEvents      = null;
	}

	document.addEventListener('mouseover', highlightElement);
	document.addEventListener('mouseout', unhighlightElement);
	document.addEventListener('click', deleteElement);
	document.addEventListener('keydown', escapeListener);
})();