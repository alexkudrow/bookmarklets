javascript:(function(){
	location.pathname = location.pathname.replace(/index\.(.*)$/i, '').replace(/\/[^\/]+\/?$/, '\/');
})();