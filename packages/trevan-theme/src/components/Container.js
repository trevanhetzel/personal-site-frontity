import { styled } from "frontity";

const Container = (props) => {
	return (
		<Contain className="contain">
			{props.children}
		</Contain>
	);
};

export default Container;

const Contain = styled.div`
	padding: 40px 30px 80px;

	@media (min-width: 820px) {
		padding: 80px 30px;
	}

	* {
		max-width: 100%;
	}

	h2 {
		margin: 45px 0 20px;
	}
`;
