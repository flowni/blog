import Link from '@docusaurus/Link';
import React from 'react';

interface Logo {
  name: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
}

const HomepageInterests = () => {
  // Replace these placeholder URLs with actual URLs to the logos you want to display
  const logos: Logo[] = [
    // TODO: add logos in here
    // { name: 'Huggingface', Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default },
    // Add more logos as needed
  ];

  return (
    <div className="container mt-5" style={{padding: "2rem 0"}}>
      <div className="row">
        <div className="col">
          <p>I might add here later some information about my interests etc. but for now this is just a blog.</p>
          <p>So click here to continue: <Link
            to="/blog">
            Go to blog
          </Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomepageInterests;
