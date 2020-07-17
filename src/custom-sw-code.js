self.addEventListener('push', event => {
    let { data } = event;
    let textData = data.text();
    let jsondata = JSON.parse(textData);
    let icon = '/icons/icon-48x48.png';
    if (textData === 'TERMINATE') {
        self.registration.unregister();
        return;
    } else {
        self.registration.showNotification(jsondata.title, { body: jsondata.body, tag: jsondata.tag, icon });
    }
})