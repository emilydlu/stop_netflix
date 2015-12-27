
//popup.js 

 // chrome.runtime.onMessage.addListener(
 //  function(request, sender, sendResponse) {
	// console.log('here'); 
 //    if( request.message === "clicked_browser_action" ) {

		chrome.runtime.sendMessage({"message": "shoot_notification"});
//     }
//   }
// );

