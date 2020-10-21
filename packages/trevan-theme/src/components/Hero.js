import React from "react";
import { connect, styled } from "frontity";
import Button from './Button';
import HeroPhoto from "./HeroPhoto";

const Hero = ({ state }) => {
  return (
		<Container className="contain">
			<h1>Trevan Hetzel</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non egestas urna. Praesent semper tellus libero. Vestibulum vitae aliquet erat. Donec finibus quam ut varius scelerisque. Integer hendrerit lectus at cursus elementum.</p>

			<Button text="Get to know me more" url="#" />

			<HeroPhoto />
		</Container>
  );
};

export default connect(Hero);

const Container = styled.div`
	position: relative;
	padding: 20px 30px 80px;

	@media (min-width: 820px) {
		padding: 90px 30px 210px;
	}

	p {
		max-width: 590px;
	}

	a {
		margin-top: 20px;
	}
`;
