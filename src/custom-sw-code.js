self.addEventListener('push', event => {
    let { data } = event;
    let textData = data.text();
    let jsondata = JSON.parse(textData);
    if (textData === 'TERMINATE') {
        self.registration.unregister();
        return;
    } else {
        self.registration.showNotification(jsondata.title, jsondata.options);
    }
})