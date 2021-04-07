import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Footer = ({ state }) => {
	return (
		<>
			<Container>
				<p>
					&copy; {new Date().getFullYear()} Trevan Hetzel&nbsp;&nbsp;|&nbsp;&nbsp;Built with WordPress & React on <Link link="https://getflywheel.com">Flywheel</Link>
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
