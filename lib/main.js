var { ActionButton } = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = ActionButton({
  id: "feedly-link",
  label: "Feedly tabs",
  icon: {
    "16": "./images/icon-16.png",
    "32": "./images/icon-32.png",
    "64": "./images/icon-64.png"
  },
  onClick: function(state) {
    console.log("READY");
    var worker = tabs.activeTab.attach({
      contentScriptFile: self.data.url("feedly-tabs.js")
    });
    worker.port.on("link", function(params) {
      console.log(params);
    });

    worker.port.emit("extract_links");
  }
});


