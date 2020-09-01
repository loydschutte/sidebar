chrome.runtime.onInstalled.addListener(function(details){
	chrome.browserAction.setIcon({path: 'img/icon32_inactive.png'});
});

chrome.browserAction.onClicked.addListener(function(tab){

});

