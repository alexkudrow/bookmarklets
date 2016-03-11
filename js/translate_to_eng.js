javascript:(function(){
	var text = (window.getSelection) ? window.getSelection().toString() : document.selection.createRange().text;

	if (!text) {
		text = prompt('Введите текст для перевода или оставьте поле пустым:', '');
	}

	if (text !== null) {
		window.open('https://translate.google.com/#auto/en/' + encodeURIComponent(text), 'translation');
	}
})();