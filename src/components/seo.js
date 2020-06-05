import React from "react";
import Helmet from "helmet";

const Seo = ({ description, title, keywords, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      {/* <link rel="canonical" href="ev" /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  );
};

export default Seo;
