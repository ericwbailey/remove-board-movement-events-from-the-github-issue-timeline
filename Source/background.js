let activeTabs = new Set();
chrome.action.onClicked.addListener((tab) => {
  if (activeTabs.has(tab.id)) {
    activeTabs.delete(tab.id);
    chrome.action.setIcon({
      tabId: tab.id,
      path: {
        "16": "icon16.png",
        "32": "icon32.png",
        "48": "icon48.png",
        "128": "icon128.png"
      }
    });
  } else {
    activeTabs.add(tab.id);
    chrome.action.setIcon({
      tabId: tab.id,
      path: {
        "16": "icon16-active.png",
        "32": "icon32-active.png",
        "48": "icon48-active.png",
        "128": "icon128-active.png"
      }
    });
  }
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content_script.js']
  });
});
