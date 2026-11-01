import './globals.css';

export const metadata = {
  title: 'Vivek Chaudhary - Next.js Developer',
  description:
    'Next.js and frontend developer building responsive, component-driven web applications with React, Tailwind CSS and Material UI.',
  authors: [{ name: 'Vivek Chaudhary' }],
  openGraph: {
    title: 'Vivek Chaudhary - Next.js Developer',
    description:
      'Next.js and frontend developer building responsive, component-driven web applications.',
    type: 'website',
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
