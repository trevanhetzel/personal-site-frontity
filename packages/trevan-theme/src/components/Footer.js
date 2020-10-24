import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Footer = ({ state }) => {
	return (
		<>
			<Container>
				<p>
					&copy; 2020 Trevan Hetzel&nbsp;&nbsp;|&nbsp;&nbsp;Built with WordPress & Frontity on <Link link="#">Flywheel</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link link="#">Source code</Link>
				</p>
			</Container>
		</>
	);
};

export default connect(Footer);

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 27px;
	box-sizing: border-box;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
	background: #000;
	color: #fff;

	p {
		font-size: 17px;
	}

	a {
		color: #fc4501;
		text-decoration: underline;
	}
`;
