import React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Be The Hero</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
