//import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import { AppProps } from 'next/app';

function HomePage({ Component, pageProps } : AppProps) {
  return (
    <div>
        <Component {...pageProps} />
    </div>
  );
}

export default HomePage;
