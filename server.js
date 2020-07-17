const webpush = require('web-push');
const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fZxv_okruKA:APA91bHyMNpxsbebuVVd5QT4W8rk-ER1nNAzrGMq1AdZXrsB_Z0bvCcHegRG2fqfL3DBd85oRIP6Y1EZaCFh-UBUwHJYcWoTzfbT8X38jnhLr5OclE9OBDiRkArOBNUtinv50w0ZWWNS',
    keys: {
        p256dh: 'BC_MbOEdKcqztLFOCj8vchS_NUe7T4QZe3CZaoe_617qHVK6DK9GZZATCRRoazpEPTfOnvspL9q-ixYKbIcLQQ8',
        auth: 'wNXg7R6tewpGCIG0rxPIdA',
    },
};
const notification = JSON.stringify({
    title: 'Good Morning',
    options: {
        body: 'Good Morning Eve',
        tag: 'ashish',
        icon: '/icons/icon-48x48.png',
    }
});
webpush.setVapidDetails(
    'mailto:ashujss11@gmail.com',
    'BEoY-3tvKYWqT2_8W7-0NvXX6W5Z2L7HTFP0SOh2aa3Ue-kzv9T9wV2ffNkdexvRG1OOm5DBxu4rBC9xc8dS7ck',
    '5bCb-yUxXBE234uuHxT9hZKHpdSHeJ7BLvq70sE5XWI'
);
webpush.sendNotification(subscription, notification);	