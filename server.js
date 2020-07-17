const webpush = require('web-push');
const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/egjJm1Hh5h8:APA91bHZSBkH_maJ1gWXCQm5so2v3L72w6K9cbGjStz7i5rrgOBMZ4ma26Ek13AdtwLCXq0xA0efjhoP_DWOioeIser2Y_3vCTDaPODeiMxq2vcG2ch_WRBn2fMSe41yzGBazjGZ8rOG',
    keys: {
        p256dh: 'BNLU7H2BviGt0ks8X_KLmd1EHZuFnXrL3vOYOoKr30tFcoHTqgDiDMaxNyL3LSHdDfOKxw2OaEgsaPbD_zNG4_c"',
        auth: '04vJ6dtAeCeXoqh-jnY10g',
    },
};
const notification = JSON.stringify({
    title: 'ashish',
    body: 'I’ve just published “Web Push Notifications”.',
    tag: 'ashsih'
});
webpush.setVapidDetails(
    'mailto:ashujss11@gmail.com',
    'BEoY-3tvKYWqT2_8W7-0NvXX6W5Z2L7HTFP0SOh2aa3Ue-kzv9T9wV2ffNkdexvRG1OOm5DBxu4rBC9xc8dS7ck',
    '5bCb-yUxXBE234uuHxT9hZKHpdSHeJ7BLvq70sE5XWI'
);
webpush.sendNotification(subscription, notification);	