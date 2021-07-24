chrome.storage.onChanged.addListener(function (changes, storageName) {
  chrome.action.setBadgeText({
    text: changes.tasks.newValue.length.toString(),
  });
});
