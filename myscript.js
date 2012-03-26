var $teki = $('IMG.fade[alt="敵襲"]');
if ($teki.get().length>0) {
	// 敵襲あり
	/* content script */
	chrome.extension.sendRequest({greeting: "hello"}, function(response) {
	  console.log();
	});
}