import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Hero from "./Hero";
import List from "./List";
import Post from "./Post";
import Loading from "./Loading";
import Title from "./Title";
import PageError from "./PageError";

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
      </Head>

      <Global styles={globalStyles} />

      <Header />
      <Hero />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .contain {
    width: 1220px;
    max-width: 100%;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    font-size: 58px;
  }

  h2 {
    margin: 0;
    font-size: 38px;
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: #fc4501;
  position: relative;
`;
