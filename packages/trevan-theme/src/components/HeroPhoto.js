import React from "react";
import { connect, styled } from "frontity";
import imageUrl from "../images/trevan-hetzel.jpg"

const HeroPhoto = ({ state }) => {
  return (
		<Frame>
			<LeftBars />
			<img src={imageUrl} alt="Trevan Hetzel" />
			<RightBars />
		</Frame>
  );
};

export default connect(HeroPhoto);

const Frame = styled.div`
	position: absolute;
	top: -110px;
	left: 58%;
	width: 31%;
	max-width: 410px;
	height: calc(100% + 110px);
	transform: skew(25deg);
	overflow: hidden;

	img {
		transform: skew(-25deg) translateX(-35%);
		filter: saturate(1.2);
		height: 100%;
		width: auto;
	}

	@media (min-width: 1264px) {
		width: 32%
	}
`;

const LeftBars = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	height: 150px;
	width: 5px;
	background: white;

	&::before {
		position: absolute;
		top: 0;
		content: "";
		left: 5px;
		width: 3px;
		height: 400px;
		background: white;
	}

	&::after {
		position: absolute;
		top: 0;
		content: "";
		left: 13px;
		width: 3px;
		height: 280px;
		background: white;
	}
`;

const RightBars = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	height: 150px;
	width: 5px;
	background: white;

	&::before {
		position: absolute;
		bottom: 0;
		content: "";
		right: 5px;
		width: 3px;
		height: 400px;
		background: white;
	}

	&::after {
		position: absolute;
		bottom: 0;
		content: "";
		right: 13px;
		width: 3px;
		height: 280px;
		background: white;
	}
`;
