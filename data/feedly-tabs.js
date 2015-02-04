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

function extract_feedly_data(cookie) {
  var regexp = /session@cloud=(\{.*?\})/;
  var matched = cookie.match(regexp);
  console.log(matched[1]);
  if (matched) {
    return JSON.parse(matched[1]);
  }
}

console.log(document.cookie);
var feedly_data = extract_feedly_data(document.cookie);
var token = feedly_data.feedlyToken || feedly_data.feedlyRefreshToken;
console.log("token", token);

self.port.on("tab_closed", function(link) {
  console.log("tab_closed", token, link);
  var data = { token: token, link: link };
  console.log("data", data);
  self.port.emit("mark_as_read", data);
});
