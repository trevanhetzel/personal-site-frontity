import React from "react";
import { connect, styled } from "frontity";

const Page = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];
	const Html2React = libraries.html2react.Component;


  // Load the post, but only if the data is ready.
  return data.isReady ? (
		<Container className="contain">
			<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

			<Content>
				<Html2React html={post.content.rendered} />
			</Content>
		</Container>
	) : null;
};

export default connect(Page);

const Container = styled.div`
	padding: 40px 30px 80px;

	@media (min-width: 820px) {
		padding: 80px 30px;
	}
`;

const Content = styled.div`
	word-break: break-word;

	* {
		max-width: 100%;
	}

	h1 {
		margin: 60px 0 30px;
		font-size: 34px;

		@media (min-width: 600px) {
			font-size: 40px;
		}

		@media (min-width: 820px) {
			font-size: 46px;
		}
	}

	h2 {
		margin: 45px 0 20px;
	}
`;
