const accessToken = localStorage.getItem("access_token");
// chrome.runtime.sendMessage({ type: 'ALGONION_ACCESS_TOKEN', accessToken })
chrome.storage.sync.set({ "access_token": accessToken }).then(() => {
    console.log("Value is set");
});