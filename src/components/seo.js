import React from "react";
import { Helmet } from "react-helmet";

const Seo = props => {
  const { description, title, keywords, children } = props;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        {/* <link rel="canonical" href="ev" /> */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Seo;
