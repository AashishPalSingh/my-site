/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
/* registration.showNotification('Thanks for permisssion', {
          body: 'Hello, Eve! Now you are able to recieve notification',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        }); */
exports.onRenderBody = function ({ setPreBodyComponents }) {
    setPreBodyComponents([React.createElement('script', {
        key: 'notifocation', dangerouslySetInnerHTML: {
            __html: `
void function() {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        
    let base64String='BEoY-3tvKYWqT2_8W7-0NvXX6W5Z2L7HTFP0SOh2aa3Ue-kzv9T9wV2ffNkdexvRG1OOm5DBxu4rBC9xc8dS7ck';
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    let subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: outputArray
}
registration.pushManager.subscribe(subscribeOptions).then((pushSubscription) => {
    var desc = JSON.stringify(pushSubscription);
    var formData = new FormData();
    formData.append("name", navigator.userAgent);
    formData.append("description", desc);
    fetch('https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42', { method: 'POST', body: formData })
        .then(() => {
            console.log("done");
        });
})


      });
    }
  });
}()
    `,
        },
    }),
    ])
}
