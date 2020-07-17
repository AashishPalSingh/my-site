const webpush = require('web-push');
const subscription = require('./ashish.json');
const notification = JSON.stringify({
    title: 'Good Morning',
    options: {
        body: 'Good Morning Ashish',
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