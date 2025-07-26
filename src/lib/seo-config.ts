export const seoConfig = {
    defaultTitle: 'Spurly - AI-Powered Dating Message Assistant | Find Your Words Faster',
    titleTemplate: '%s | Spurly',
    defaultDescription: 'Connect faster with Spurly, the AI messaging assistant. Get context-informed message suggestions and personality insights for dating apps, texts, and DMs.',
    siteUrl: 'https://spurly.io',
    defaultOgImage: 'https://spurly.io/SpurlyBanner.png',
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
    url: 'https://spurly.io',
    logo: 'https://spurly.io/SpurlyAppIcon.png',
    sameAs: [
      // Add your social media URLs here
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
    description: 'AI-powered messaging assistant for dating apps and conversations',
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