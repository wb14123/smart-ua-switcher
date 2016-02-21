

var configBox = document.getElementById('config');

function save_opt() {
  var configStr = configBox.value;
  var config = JSON.parse(configStr);
  chrome.storage.sync.set(config, function () {
    alert("Config saved!");
  });
}

function get_opt() {
  chrome.storage.sync.get({rules: []}, function (item) {
    configBox.value = JSON.stringify(item);
  });
}

get_opt();
document.getElementById('save_btn').addEventListener('click', save_opt);
