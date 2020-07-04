module.exports = {
  pathPrefix: '',
  siteUrl: 'https://priyankamishra.com',
  siteTitle: 'Priyanka Mishra',
  siteDescription: 'Personal Site',
  author: 'Priyanka Mishra',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  /* disqusScript:
  process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js', */
  pages: {
    home: '/',
    projects: 'projects',
    contact: 'contact',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/rolwin100',
    facebook: 'https://www.facebook.com/rolwin.monteiro',
    twitter: 'https://twitter.com/rolwin100',
    instagram: 'https://www.instagram.com/reevan100/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/48f2ac64-29ae-4a38-b445-06ad67b1bc42',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
