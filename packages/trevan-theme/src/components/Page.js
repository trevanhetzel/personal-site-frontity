import React from "react";
import { connect, styled } from "frontity";
import Switch from "@frontity/components/switch";
import StaticPage from "./Pages/Static";
import AboutPage from "./Pages/About";

const Page = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];

  // Load the post, but only if the data is ready.
  return data.isReady ? (
		<Switch>
			<AboutPage when={post.slug === 'about'} />
			<StaticPage />
		</Switch>
	) : null;
};

export default connect(Page);
