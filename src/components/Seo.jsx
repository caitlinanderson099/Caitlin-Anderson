import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Caitlin Anderson | UX Designer & Web Developer",
  description = "I'm Caitlin Anderson, a Web & UX Designer based in Wellington, NZ. I craft beautiful, user-friendly websites and apps for hospitality and retail businesses.",
  keywords = "UX designer, web designer, Wellington, portfolio, web development, React",
  image = "/preview-img.png",
  url = "https://yourdomain.com"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Caitlin Anderson" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;