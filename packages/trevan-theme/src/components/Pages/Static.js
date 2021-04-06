import React from "react";
import { connect, styled } from "frontity";

const Page = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];
	const Html2React = libraries.html2react.Component;

  // Load the post, but only if the data is ready.
  return data.isReady ? (
		<div>
			<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

			<Html2React html={post.content.rendered} />
		</div>
	) : null;
};

export default connect(Page);
