import React from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import List from "./List";
import Post from "./Post";
import Loading from "./Loading";
import Title from "./Title";
import PageError from "./PageError";
import prismCSS from "../vendor/prism.css";

import favicon32 from '../images/favicon-32.png';
import favicon144 from '../images/favicon-144.png';
import favicon152 from '../images/favicon-152.png';
import favicon196 from '../images/favicon-196.png';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon-precomposed" href={favicon152} />
        <link rel="icon" href={favicon32} sizes="32x32" />
        <link rel="shortcut icon" sizes="196x196" href={favicon196} />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content={favicon144} />
      </Head>

      <Global styles={globalStyles} />
      <Global styles={css(prismCSS)} />

      <Header white={data.isArchive && data.page === 1} />

      {data.isArchive && (
        <Hero paginated={data.page === 1} />
      )}

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Switch>
        <Loading when={data.isFetching} />
        <List when={data.isArchive} paginated={data.page === 1} />
        <Post when={data.isPostType} />
        <PageError when={data.isError} />
      </Switch>

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .contain {
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  h1 {
    margin: 0;
    font-size: 42px;

    @media (min-width: 600px) {
      font-size: 50px;
    }

    @media (min-width: 820px) {
      font-size: 58px;
    }
  }

  h2 {
    margin: 0;
    font-size: 28px;

    @media (min-width: 600px) {
      font-size: 32px;
    }

    @media (min-width: 820px) {
      font-size: 38px;
    }
  }

  h3 {
    margin: 30px 0 0;
    font-size: 24px;

    @media (min-width: 600px) {
      font-size: 28px;
    }

    @media (min-width: 820px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;

    @media (min-width: 820px) {
      font-size: 19px;
      line-height: 30px;
    }
  }
`;
