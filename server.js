const webpush = require('web-push');
const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cJgPOECvw1w:APA91bGfeltL3VBnRXOnxzRo3PAIbT5gM-2mTbVOniLsg-VgZ9RUYuQv5tJN13gY6qF9doOwjWCc0YG492FIIEq6vXfneZLDnxA9V0bZSJ7mgyERA1N-OAuZVz-zwGRfOLYzJA0u4XPW',
    keys: {
        p256dh: 'BOEtT8e4_h3ReniqZ_e0squlZihTG-QlrJlPv6k1oZ1sN5SwYtLVtDZYvkt7tVmcJGZQZsHlUqBFkPY2mL6ZZDQ',
        auth: 'WBm1U9r9WeJ0F4SltevXTQ',
    },
};
const notification = JSON.stringify({
    title: 'Good night',
    body: 'Good night boss',
    tag: 'ashsih'
});
webpush.setVapidDetails(
    'mailto:ashujss11@gmail.com',
    'BEoY-3tvKYWqT2_8W7-0NvXX6W5Z2L7HTFP0SOh2aa3Ue-kzv9T9wV2ffNkdexvRG1OOm5DBxu4rBC9xc8dS7ck',
    '5bCb-yUxXBE234uuHxT9hZKHpdSHeJ7BLvq70sE5XWI'
);
webpush.sendNotification(subscription, notification);	