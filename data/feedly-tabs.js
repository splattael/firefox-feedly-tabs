/**
 * Iterates over each link found on a Feedly page emiting its url to +callback+.
 */
function eachFeedlyUrl(callback) {
  var link_attribute = "data-alternate-link";
  var links = document.querySelectorAll("div[" + link_attribute + "]");
  for (var i = 0, size = links.length; i < size; i++) {
    var link = links[i];
    var entryid = link.getAttribute("data-entryid");
    var url = link.getAttribute(link_attribute);
    callback(entryid, url);
  }
}

eachFeedlyUrl(function(entryid, url) {
  self.port.emit("link", { entryid: entryid, url: url });
});

self.port.on("tab_closed", function(link) {
  console.log("CLOSED: " + link.entryid);
  var ids = [ link.entryid ];
  console.log(ids);
  console.log("YO!");
  console.log("YO2!");
  console.log(unsafeWindow);
  console.log("YO3!");
  var window = unsafeWindow;
  console.log(window);
  console.log(window.streets);
  console.log(window.streets.service("reader"));
  window.streets.service("reader").askMarkEntriesAsRead(ids);
});


