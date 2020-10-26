import React from "react";
import { connect, styled } from "frontity";
import Button from './Button';
import HeroPhoto from "./HeroPhoto";

const Hero = ({ state, paginated }) => {
	const data = state.source.get(state.router.link);

  return (
		<Container className="contain" paginated={paginated}>
			{paginated && (
				<div>
					<h1>Trevan Hetzel</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non egestas urna. Praesent semper tellus libero. Vestibulum vitae aliquet erat. Donec finibus quam ut varius scelerisque. Integer hendrerit lectus at cursus elementum.</p>

					<Button text="Get to know me more" url="#" />

					<HeroPhoto />
				</div>
			)}

			{!paginated && (
				<PagedOverview>
					<h1>Articles</h1>
					<h3>Page {data.page} of {data.totalPages}</h3>
				</PagedOverview>
			)}
		</Container>
  );
};

export default connect(Hero);

const Container = styled.div`
	position: relative;
	padding: ${props => props.paginated ? "20px 30px 80px" : "40px 30px 60px"};

	@media (min-width: 820px) {
		padding: 90px 30px ${props => props.paginated ? "210px" : "140px"};
	}

	p {
		max-width: 590px;
	}

	a {
		margin-top: 20px;
	}
`;

const PagedOverview = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (min-width: 460px) {
		flex-wrap: nowrap;
	}

	h3 {
		margin: 0;
		color: #636e72;
	}
`;
