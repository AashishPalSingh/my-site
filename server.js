const webpush = require('web-push');
const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dkv-FY6jS84:APA91bF-X77-qrsZfO2GCWmGlqkmJOTcX8fDqY6rUD_A51z014_gLDJqZDEYqPtHTCGYaUS2hZpyWiZIVJIzXL88Sc2a2goTFLu0d1kPk2jikG0BtFxOQjDJiBYFdpNvGhRnHHHflcoS',
    keys: {
        p256dh: 'BNPOlY9tSF--gZVAnDXwrqx_rQM64fD_Upu_SGhNq__M4EyBjLvz7y-LpXaF2DTiMuto_hq0oBO3jzsO5GMYaIk',
        auth: 'PZV0iJnfB6tEVSiIdb8_Ug',
    },
};
const notification = JSON.stringify({
    title: 'ashish',
    body: 'I’ve just published “Web Push Notifications”.',
});
webpush.setVapidDetails(
    'mailto:ashujss11@gmail.com',
    'BEoY-3tvKYWqT2_8W7-0NvXX6W5Z2L7HTFP0SOh2aa3Ue-kzv9T9wV2ffNkdexvRG1OOm5DBxu4rBC9xc8dS7ck',
    '5bCb-yUxXBE234uuHxT9hZKHpdSHeJ7BLvq70sE5XWI'
);
webpush.sendNotification(subscription, notification);