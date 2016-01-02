

var total = 0; 
var time = Date.now(); 


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "shoot_notification" ) {
    	chrome.alarms.create("notifier", {delayInMinutes: 0.1, periodInMinutes:40});
    	chrome.alarms.onAlarm.addListener(function(notifier){
    		var elapsed = Math.round((Date.now()-request.curr)/60000);
    		//bases the notification on the time you've currently started watching 
    		if (elapsed <=10) {
          		chrome.notifications.create(
		          	'id1', 
		          	{type: "basic", 
		          	title: "whatever",
		          	message: "It's only been " + elapsed +  " minutes, enjoy yourself",
		          	iconUrl: "Netflix.jpg"
		   	       })
      		}
      		else if (elapsed >= 10 && elapsed <= 60 ){
      			chrome.notifications.create(
		          	'id1', 
		          	{type: "basic", 
		          	title: "whatever",
		          	message: "If you hadn't spent the entire time choosing a shitty drama, you probably would also be making better life decisions. Judgement free zone.",
		          	iconUrl: "Netflix.jpg"
		   	       })
      		}
      		else if (elapsed >= 60 && elapsed <= 120 ){
      			chrome.notifications.create(
		          	'id1', 
		          	{type: "basic", 
		          	title: "whatever",
		          	message: "Ok so now at least 1/24 of your life is gone, to be exact:  " + elapsed +  " minutes. Be better",
		          	iconUrl: "Netflix.jpg"
		   	       })
      		}
      		else if (elapsed >= 120 && elapsed <= 240){
      			chrome.notifications.create(
		          	'id1', 
		          	{type: "basic", 
		          	title: "whatever",
		          	message: "You've been watching for " + elapsed +  " minutes. Get your shit together",
		          	iconUrl: "Netflix.jpg"
		   	       })
      		}
      // Stores the total time you've watched 
      chrome.storage.local.set({'value': total + Math.round(Date.now()-time)/60000});
      chrome.storage.local.get(function(items){
        console.log('calling back items'); 
        console.log(items);
      })
        }); 

          }
}
);