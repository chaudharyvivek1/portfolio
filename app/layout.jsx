import './globals.css';

// Set NEXT_PUBLIC_SITE_URL (for example https://vivekchaudhary.dev) on the host to get
// absolute canonical and Open Graph URLs. Without it the site still builds and renders.
function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) return undefined;
  try {
    return new URL(raw);
  } catch {
    return undefined;
  }
}

const siteUrl = resolveSiteUrl();

const title = 'Vivek Chaudhary - Next.js Developer';
const description =
  'Next.js and frontend developer building responsive, component-driven web applications with React, Tailwind CSS and Material UI.';

export const metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title,
  description,
  applicationName: 'Vivek Chaudhary - Portfolio',
  authors: [{ name: 'Vivek Chaudhary', url: 'https://github.com/chaudharyvivek1' }],
  creator: 'Vivek Chaudhary',
  keywords: [
    'Vivek Chaudhary',
    'Next.js developer',
    'React developer',
    'frontend developer Ahmedabad',
    'Tailwind CSS',
    'portfolio',
  ],
  ...(siteUrl ? { alternates: { canonical: '/' } } : {}),
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Vivek Chaudhary',
    locale: 'en_IN',
    ...(siteUrl ? { url: '/' } : {}),
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbf9' },
    { media: '(prefers-color-scheme: dark)', color: '#080a0e' },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
