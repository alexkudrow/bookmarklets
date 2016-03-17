javascript:(function(){
	var styles = [];
	[].slice.call(document.getElementsByTagName('link')).forEach(function(style){
		// style.getAttribute('href') used indtead of style.href because if
		// attribute exists but empty, property is not - it contains page url
		if (
			style.rel.toLowerCase().indexOf('stylesheet') + 1
			&& style.getAttribute('href')
		) {
			styles.push(style.href);
		}
	});

	if (!styles.length) {
		alert('This page does not use any external stylesheets');
	} else if (styles.length === 1) {
		window.open(styles[0]);
	} else {
		var win = window.open(),
		    title = document.title || location.href.replace(/^.*\//,'');
		win.document.open();

		win.document.write(
			'<title>External styles for ' + title + '</title>'
			+ '<h2>External styles for <a href="' + location.href + '" target="_blank">' + title + '</a></h2>'
			+ '<ol>'
		);

		styles.forEach(function(href){
			win.document.write(
				'<li><a href="' + href + '" target="_blank">' + href.replace(/\/$/,'').replace(/^.*\//,'') + '</a></li>'
			);
		});

		win.document.write('</ol>');
		win.document.close();
	}
})();