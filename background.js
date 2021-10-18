chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
    All: 0,
    Individual: 0,
    Group: 0,
    Sponsored: 0,
    Suggested: 0,
  });
});
