var screenLogStatus = 0;
chrome.runtime.sendMessage(screenLogStatus, function (res) {
	if(res!=0){
		screenLog.init();
		screenLogStatus=1;
	}else{
		screenLog.destroy();
		screenLogStatus=0;
	}
});

