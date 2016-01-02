
//watcher.js

//activated only on a Netflix page 
var time = Date.now(); 

chrome.runtime.sendMessage({"message": "shoot_notification", "curr": time});

