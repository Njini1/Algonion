console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log('background has received a message from popup, and count is ', request?.count)
  }
})
