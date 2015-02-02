var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "feedly-link",
  label: "Feedly tabs",
  icon: {
    "16": "./images/icon-16.png",
    "32": "./images/icon-32.png",
    "64": "./images/icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://feedly.com/");
}
