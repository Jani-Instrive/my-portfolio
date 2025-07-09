// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// interface SEOProps {
//   title?: string;
//   description?: string;
//   keywords?: string;
//   image?: string;
//   url?: string;
// }

// const SEO: React.FC<SEOProps> = ({
//   title = 'Shaik Jani  - Senior Frontend Developer',
//   description = 'Passionate software engineer with 3 years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.',
//   keywords = 'frontend developer, react, node.js, typescript, web development, software engineer, portfolio',
//   image = '/assets/avatar.jpg',
//   url = 'https://johndoe.dev',
// }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />
//       <meta name="author" content="Shaik Jani " />
      
//       {/* Open Graph / Facebook */}
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={url} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={image} />
      
//       {/* Twitter */}
//       <meta property="twitter:card" content="summary_large_image" />
//       <meta property="twitter:url" content={url} />
//       <meta property="twitter:title" content={title} />
//       <meta property="twitter:description" content={description} />
//       <meta property="twitter:image" content={image} />
      
//       {/* Additional meta tags */}
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta name="theme-color" content="#2196f3" />
//       <link rel="canonical" href={url} />
//     </Helmet>
//   );
// };

// export default SEO;
import React from 'react';
import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Shaik Jani  - Senior Frontend Developer',
  description = 'Passionate software engineer with 3 years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.',
  keywords = 'frontend developer, react, node.js, typescript, web development, software engineer, portfolio',
  image = '/assets/avatar.jpg',
  url = 'https://johndoe.dev',
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Shaik Jani " />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2196f3" />
        <link rel="canonical" href={url} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
