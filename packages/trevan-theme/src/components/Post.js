import React, { useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";
import { connect, styled, css } from "frontity";
import Button from './Button';
import List from "./List";
import prism from "../vendor/prism.js";

const Post = ({ state, actions, libraries }) => {
	// Get information about the current URL.
	const data = state.source.get(state.router.link);
	// Get the data of the post.
	const post = state.source[data.type][data.id];
	// Get the data of the author.
	const author = state.source.author[post.author];
	// Get a human readable date.
	const date = new Date(post.date);

	// Get the html2react component.
	const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
	useEffect(() => {
		actions.source.fetch("/");
		List.preload();
		prism.highlightAll();
	}, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
		<Container className="contain">
			<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

			{/* Only display author and date on posts */}
			{data.isPost && (
				<PublishDate>Posted on <strong>{date.toDateString()}</strong></PublishDate>
			)}

			{/* Render the content using the Html2React component so the HTML is processed
			by the processors we included in the libraries.html2react.processors array. */}
			<Content>
				<Html2React html={post.content.rendered} />

				{!state.theme.showComments && (
					<div css={css`margin: 60px auto 0; text-align: center`}>
						<Button text="Load comments" click={(event) => { event.preventDefault(); state.theme.showComments = true } }/>
					</div>
				)}

				{state.theme.showComments && (
					<DiscussionEmbed
						shortname='hetzel'
						config={
							{
								url: post.url,
								identifier: `${post.id}`,
								title: post.title.rendered
							}
						}
						css={css`margin-top: 60px`}
					/>
				)}
			</Content>
		</Container>
	) : null;
};

export default connect(Post);

const Container = styled.div`
	padding: 40px 30px 80px;

	@media (min-width: 820px) {
		padding: 80px 30px;
	}
`;

const PublishDate = styled.p`
  margin: 15px 0 40px;
  color: #636e72;
  font-size: 15px;

  @media (min-width: 820px) {
    font-size: 18px;
  }
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
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

	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	figure {
		margin: 24px auto;
		/* next line overrides an inline style of the figure element. */
		width: 100% !important;

		figcaption {
			font-size: 0.7em;
		}
	}

	iframe {
		display: block;
		margin: auto;
	}

	blockquote {
		margin: 30px 0;
		background-color: rgba(0, 0, 0, 0.1);
		border-left: 4px solid rgba(12, 17, 43);
		padding: 4px 16px;
	}

	a {
		color: #fc4501;
		text-decoration: underline;
	}

	/* Input fields styles */

	input[type="text"],
	input[type="email"],
	input[type="url"],
	input[type="tel"],
	input[type="number"],
	input[type="date"],
	textarea,
	select {
		display: block;
		padding: 6px 12px;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		border-radius: 4px;
		outline-color: transparent;
		transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		margin: 8px 0 4px 0;

		&:focus {
			outline-color: #1f38c5;
		}
	}

	input[type="submit"] {
		display: inline-block;
		margin-bottom: 0;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		border: 1px solid #1f38c5;
		padding: 12px 36px;
		font-size: 14px;
		line-height: 1.42857143;
		border-radius: 4px;
		color: #fff;
		background-color: #1f38c5;
	}

	/* WordPress Core Align Classes */

	@media (min-width: 420px) {
		img.aligncenter,
		img.alignleft,
		img.alignright {
			width: auto;
		}

		.aligncenter {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}

		.alignright {
			float: right;
			margin-left: 24px;
		}

		.alignleft {
			float: left;
			margin-right: 24px;
		}
	}
`;
