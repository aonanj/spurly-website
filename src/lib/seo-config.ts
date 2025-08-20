export const seoConfig = {
    defaultTitle: 'Spurly - AI-Powered Dating Message Assistant | Find Your Words Faster',
    titleTemplate: '%s | Spurly',
    defaultDescription: 'Less guessing, more connecting with Spurly. Get AI-powered, context-informed message suggestions and personality insights for dating and messaging apps.',
    siteUrl: 'https://www.spurly.io',
    defaultOgImage: 'https://www.spurly.io/SpurlyArcLogo.png',
    twitterHandle: '@spurlyapp',
    additionalMetaTags: [
      {
        name: 'application-name',
        content: 'Spurly'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Spurly'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'theme-color',
        content: '#BCCCDC'
      }
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        href: '/SpurlyAppIcon.png'
      },
      {
        rel: 'mask-icon',
        href: '/SpurlyAppIcon.png',
        color: '#BCCCDC'
      }
    ]
  };
  
  // Structured data for the homepage
  export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phaethon Order LLC',
    description: 'Spurly: context-aware AI assistant for dating and messaging apps, providing personality insights and message suggestions. Owned and operated by Phaethon Order LLC.',
    url: 'https://www.spurly.io',
    logo: 'https://www.spurly.io/SpurlyAppIcon.png',
    sameAs: [
      'https://x.com/spurlyApp',
      'https://www.facebook.com/spurlyApp',
      'https://www.instagram.com/spurlyApp'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'admin@spurly.io',
      contactType: 'customer support'
    }
  };
  
  export const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Spurly',
    description: 'Spurly: context-aware AI assistant for dating and messaging apps, providing personality insights and message suggestions. Less guessing, more connecting with Spurly.',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150'
    },
    author: {
      '@type': 'Organization',
      name: 'Phaethon Order LLC'
    }
  };