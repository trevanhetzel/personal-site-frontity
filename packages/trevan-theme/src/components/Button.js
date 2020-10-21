import { styled } from "frontity";
import Link from "./Link";

const Button = ({
	text,
	url,
	secondary
}) => {
	return (
		<ButtonStyle as={secondary ? SecondaryButtonStyle : false}>
			<Link link={url}>
				{ text }

				<svg xmlns="http://www.w3.org/2000/svg" width="7.563" height="13.379" viewBox="0 0 7.563 13.379"><path id="chevron-small-right" d="M12.518,12.089,7.95,7.116a1.011,1.011,0,0,1,0-1.422.99.99,0,0,1,1.409,0l5.569,5.683a1.013,1.013,0,0,1,0,1.424L9.359,18.483a.987.987,0,0,1-1.409,0,1.011,1.011,0,0,1,0-1.422Z" transform="translate(-7.658 -5.4)" fill="#fb4500"/></svg>
			</Link>
		</ButtonStyle>
	);
};

export default Button;

const ButtonStyle = styled.div`
	a {
		display: inline-block;
		color: #000;
		padding: 14px 15px;
		font-size: 17px;
		font-weight: bold;
		border: 2px solid #000;
		transition: all .15s;

		svg {
			position: relative;
			top: 1px;
			margin: 0px 0 0 8px;
		}

		&:hover {
			border-color: #fc4501;
			color: #fc4501;
		}

		@media (min-width: 820px) {
			font-size: 20px;
			padding: 16px 20px;

			svg {
				top: 0;
				margin: 0 0 0 12px;
			}
		}
	}
`;

const SecondaryButtonStyle = styled(ButtonStyle)`
  a {
		padding: 0 !important;
		border: none !important;
		color: #fc4501 !important;
	}
`;
