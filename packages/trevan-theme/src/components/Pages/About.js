import React from "react";
import { connect, styled } from "frontity";
import Container from "../Container";
import FeaturedMedia from "../FeaturedMedia";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Page = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];
	const Html2React = libraries.html2react.Component;
	const ACFSections = post.acf.section;

  // Load the post, but only if the data is ready.
  return data.isReady ? (
		<div>
			<Wrapper>
				<Container className="contain">
					<ColumnWrapper>
						<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

						<div>
							<Html2React html={post.content.rendered} />
							<FeaturedMedia id={post.featured_media} />
						</div>
					</ColumnWrapper>
				</Container>
			</Wrapper>

			{ACFSections.map((item, i) => {
				return (<Wrapper key={i}>
					<Container className="contain">
						<ColumnWrapper>
							<h2>{item.title}</h2>

							<div>
								{item.image.url &&
									<a href="https://hetzelcreative.com" target="_blank">
										<Logo src={item.image.url} />
									</a>
								}

								<Html2React html={item.content} />

								<SimpleReactLightbox>
									<SRLWrapper>
										<Photos>
											{item.gallery && item.gallery.map((photoItem, j) => {
												return(
													<a href={photoItem.photo.sizes['gallery-full']} key={j}>
														<img src={photoItem.photo.sizes['gallery-thumb']} alt={photoItem.photo.description} width="169" height="169" />
													</a>
												)
											})}
										</Photos>
									</SRLWrapper>
								</SimpleReactLightbox>
							</div>
						</ColumnWrapper>
					</Container>
				</Wrapper>);
			})}
		</div>
	) : null;
};

export default connect(Page);

const Wrapper = styled.section`
	&:nth-child(even) {
		background: #F9F9F9;
	}
`;

const ColumnWrapper = styled.div`
	@media (min-width: 820px) {
		display: flex;
	}

	&:nth-child(even) {
		background: #F9F9F9;
	}

	h1, h2{
		margin: 0 0 30px;
		flex: 0 0 27%;
		padding-right: 40px;
	}

	p:first-child {
		margin-top: 0;
	}
`;

const Logo = styled.img`
	max-width: 210px !important;
	height: auto;
`;

const Photos = styled.div`
	display: grid;
	margin: 40px 0 0;
	padding: 0;
	grid-template-columns: repeat(auto-fill, minmax(169px, 1fr));
  gap: 10px 10px;

	img {
		width: 100%;
		height: auto;
	}
`;
