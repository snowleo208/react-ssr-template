import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <div>
    <h2>This is the about page</h2>
    <Helmet>
      <title>About Page</title>
      <meta
        name="description"
        content="This is about page. Know more about us here."
      />
    </Helmet>
  </div>
);

export default About;
