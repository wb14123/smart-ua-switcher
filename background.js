
var UA = {
  "Android Phone": 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
}

function isValidateUA(uaName) {
  for(var k in UA) {
    if (uaName === k) {
      return true;
    }
  }
  return false;
}

function addListener(uaName, urls) {
  console.log(UA[uaName]);
  console.log(urls);
  chrome.webRequest.onBeforeSendHeaders.addListener(
      function(info) {
          // Replace the User-Agent header
          var headers = info.requestHeaders;
          headers.forEach(function(header, i) {
              if (header.name.toLowerCase() == 'user-agent') {
                  header.value = UA[uaName];
              }
          });
          return {requestHeaders: headers};
      },
      // Request filter
      {
          // Modify the headers for these pages
          urls: urls,
          // In the main window and frames
          types: ["main_frame", "sub_frame"]
      },
      ["blocking", "requestHeaders"]
  );
}

chrome.storage.sync.get({rules: []}, function(config) {
  var rules = config.rules || [];
  if (!(rules instanceof Array)) { rules = [] };
  console.log(rules);
  for(var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if (
        rule.uaName != undefined && isValidateUA(rule.uaName) &&
        rule.urls instanceof Array && rule.urls.length != 0) {
      console.log(rule);
      addListener(rule.uaName, rule.urls);
    }
  }
});


