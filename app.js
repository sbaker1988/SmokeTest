var page = require('webpage').create();

var Site = {
  "item": {
    "school": "X",
    "forms": [
      "\"http://google.com\""
    ]
  }
};



page.open('http://localhost:3000/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  
page.onError = function(msg, trace) {

  var msgStack = ['ERROR: ' + msg];

  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
    });
  }

  console.error(msgStack.join('\n'));

};
  
  phantom.exit();
});