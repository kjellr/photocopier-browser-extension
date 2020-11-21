browser.browserAction.onClicked.addListener(function(tab) {
	browser.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
    	browser.tabs.executeScript(null, { file: "filter.js" });
	});
});