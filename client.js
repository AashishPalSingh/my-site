fetch('https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42', { method: 'POST', body: formData2 })
    .then(() => {
        console.log("done");
    })

var a = urlBase64ToUint8Array('BEoY-3tvKYWqT2_8W7-0NvXX6W5Z2L7HTFP0SOh2aa3Ue-kzv9T9wV2ffNkdexvRG1OOm5DBxu4rBC9xc8dS7ck')
let subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: a
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

navigator.serviceWorker.ready.then(registration => console.log(registration.pushManager.subscribe(subscribeOptions).then((pushSubscription) => {
    var desc = JSON.stringify(pushSubscription);
    var formData = new FormData();
    formData.append("description", desc);
    fetch('https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42', { method: 'POST', body: formData })
        .then(() => {
            console.log("done");
        });
})))