var { ActionButton } = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = ActionButton({
  id: "feedly-tabs",
  label: "Feedly tabs",
  icon: {
    "16": "./images/icon-16.png",
    "32": "./images/icon-32.png",
    "64": "./images/icon-64.png"
  },
  onClick: function(state) {
    var worker = tabs.activeTab.attach({
      contentScriptFile: self.data.url("feedly-tabs.js"),
      contentScriptWhen: "ready"
    });
    worker.port.on("link", function(link) {
      tabs.open({
        url: link.url,
        inBackground: true,
        onClose: function(tab) {
          worker.port.emit("tab_closed", link);
        }
      });
    });
  }
});
