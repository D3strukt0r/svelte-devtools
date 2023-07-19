const toolsPorts = new Map();

function attachScript(tabId, changed) {
  if (
    !toolsPorts.has(tabId) ||
    changed.status !== 'loading' ||
    (process.env.TARGET === 'firefox' && !changed.url)
  ) {
    return;
  }

  chrome.scripting.executeScript({
    files: [chrome.runtime.getURL('/src/web-accessible-resources/index.js')],
    injectImmediately : true,
    target: {tabId},
  });
}

function setup(tabId, port, profilerEnabled) {
  chrome.scripting.executeScript({
    func: () => {
      if (profilerEnabled) {
        window.sessionStorage.SvelteDevToolsProfilerEnabled = 'true';
      } else {
        delete window.sessionStorage.SvelteDevToolsProfilerEnabled;
      }
    },
    injectImmediately : true,
    target: {tabId},
  });

  toolsPorts.set(tabId, port);

  port.onDisconnect.addListener(() => {
    toolsPorts.delete(tabId);
    chrome.tabs.onUpdated.removeListener(attachScript);
    // Inform content script that it background closed and it needs to clean up
    chrome.tabs.sendMessage(tabId, {
      type: 'clear',
      tabId,
    });
  });

  chrome.tabs.onUpdated.addListener(attachScript);
}

function handleToolsMessage(msg, port) {
  switch (msg.type) {
  // 'init' and 'reload' messages do not need to be delivered to content script
  case 'init':
    setup(msg.tabId, port, msg.profilerEnabled);
    break;
  case 'reload':
    chrome.tabs.reload(msg.tabId, { bypassCache: true });
    break;
  default:
    chrome.tabs.sendMessage(msg.tabId, msg);
    break;
  }
}
chrome.runtime.onConnect.addListener(port => {
  if (port.sender.url == chrome.runtime.getURL('/src/panel/index.html')) {
    port.onMessage.addListener(handleToolsMessage);
  } else {
    // This is not an expected connection, so we just log an error and close it
    console.error('Unexpected connection. Port ', port);
    port.disconnect();
  }
});

// Receive messages from content scripts
function handlePageMessage(msg, tabId) {
  const tools = toolsPorts.get(tabId);
  if (tools) tools.postMessage(msg);
}
chrome.runtime.onMessage.addListener((msg, sender) =>
  handlePageMessage(msg, sender.tab.id)
);
