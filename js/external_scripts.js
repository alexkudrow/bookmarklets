javascript:(function(){
	var scripts = [];
	[].slice.call(document.getElementsByTagName('script')).forEach(function(script){
		// script.getAttribute('src') used indtead of script.src because if
		// attribute exists but empty, property is not - it contains page url
		if (script.getAttribute('src')) {
			scripts.push(script.src);
		}
	});

	if (!scripts.length) {
		alert('This page does not use any external scripts');
	} else if (scripts.length === 1) {
		window.open(scripts[0]);
	} else {
		var win = window.open(),
		    title = document.title || location.href.replace(/^.*\//,'');
		win.document.open();

		win.document.write(
			'<title>External scripts for ' + title + '</title>'
			+ '<h2>External scripts for <a href="' + location.href + '" target="_blank">' + title + '</a></h2>'
			+ '<ol>'
		);

		scripts.forEach(function(src){
			win.document.write(
				'<li><a href="' + src + '" target="_blank">' + src.replace(/\/$/,'').replace(/^.*\//,'') + '</a></li>'
			);
		});

		win.document.write('</ol>');
		win.document.close();
	}
})();