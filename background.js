  //   var time = Date.now(); 

  // chrome.alarms.create("notifier", {delayInMinutes: 0.1, periodInMinutes:0.1});
  //     chrome.alarms.onAlarm.addListener(function(notifier){
  //         var elapsed = Math.round((Date.now() - time)/60000); 
  //         chrome.notifications.create(
  //           'id1', 
  //           {type: "basic", 
  //           title: "whatever",
  //           message: "it's been " + elapsed + " minutes" ,
  //           eventTime: 5, 
  //           iconUrl: "Netflix.jpg"
  //         }
  //  )
  //       });


// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
  //Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    console.log(activeTab.id); 
  });
// });


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "shoot_notification" ) {
    	chrome.alarms.create("notifier", {delayInMinutes: 0.1, periodInMinutes:0.1});
            var elapsed = Math.round((Date.now() - time)/60000); 
    	chrome.alarms.onAlarm.addListener(function(notifier){
          chrome.notifications.create(
          	'id1', 
          	{type: "basic", 
          	title: "whatever",
          	message: "It's been " + elapsed +  " minutes asshole, look at your life",
          	iconUrl: "Netflix.jpg"
          }
   )
        })
          }
}
);