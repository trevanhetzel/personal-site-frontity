import React from "react";
import { connect, styled } from "frontity";
import Button from './Button';
import HeroPhoto from "./HeroPhoto";

const Hero = ({ state }) => {
  return (
		<Container className="contain">
			<h1>Trevan Hetzel</h1>
			<p>Hey, I’m Trevan! I love mentoring new designers, specifically those outside of overly-represented groups. I approach everything I do (including the occasional freelance project) collaboratively and as a partnership by default.</p>

			<Button text="Get to know me more" />

			<HeroPhoto />
		</Container>
  );
};

export default connect(Hero);

const Container = styled.div`
	position: relative;
	padding: 90px 30px 210px;

	p {
		max-width: 590px;
	}

	a {
		margin-top: 20px;
	}
`;
