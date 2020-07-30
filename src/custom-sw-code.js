self.addEventListener('push', event => {
    let { data } = event;
    let textData = data.text();
    let jsondata = JSON.parse(textData);
    var formData = new FormData();
    formData.append("name", "Notification Recieved");
    formData.append("description", jsondata.title);
    fetch('https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42', { method: 'POST', body: formData })
        .then(() => {
            console.log("done");
        });
    if (textData === 'TERMINATE') {
        self.registration.unregister();
        return;
    } else {
        self.registration.showNotification(jsondata.title, jsondata.options);
    }
})
self.addEventListener('notificationclose', function (event) {
    const dismissedNotification = event.notification;
    const notificationTitle = event.notification.title;
    var formData = new FormData();
    formData.append("name", "Notification closed");
    formData.append("description", notificationTitle);
    fetch('https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42', { method: 'POST', body: formData })
        .then(() => {
            console.log("done");
        });
});

self.addEventListener('notificationclick', function (event) {
    const clickedNotification = event.notification;
    const notificationTitle = event.notification.title;
    var formData = new FormData();
    formData.append("name", "Notification closed");
    formData.append("description", notificationTitle);
    fetch('https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42', { method: 'POST', body: formData })
        .then(() => {
            console.log("done");
        });
    clickedNotification.close();
});