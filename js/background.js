
var status = 0;

chrome.browserAction.onClicked.addListener(function (tab) {
	if(status==0) {status=1;chrome.browserAction.setBadgeText( { text: "on" } );}
	else {status=0;chrome.browserAction.setBadgeText( { text: "off" } );}
});

chrome.runtime.onMessage.addListener(function (message, sender, sendRes) {
		sendRes(status);
})