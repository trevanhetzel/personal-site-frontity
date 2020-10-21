import React from "react";
import { connect, styled } from "frontity";
import Logo from "./svg/Logo";
import TwitterIcon from "./svg/Twitter";
import DribbbleIcon from "./svg/Dribbble";
import EmailIcon from "./svg/Email";
import SearchIcon from "./svg/Search";
import Link from "./Link";

const Header = ({ state }) => {
	return (
		<>
			<Container>
				<Link link="/">
					<Logo />
				</Link>

				<Nav>
					<NavList>
						{state.theme.menu.map(([name, link]) => {
							// Check if the link matched the current page url
							const isCurrentPage = state.router.link === link;
							return (
								<NavItem key={name}>
									{/* If link url is the current page, add `aria-current` for a11y */}
									<Link link={link} aria-current={isCurrentPage ? "page" : undefined} target={ '_blank' }>
										{name}
									</Link>
								</NavItem>
							);
						})}
					</NavList>
				</Nav>

				<Icons>
					<Icon>
						<TwitterIcon />
					</Icon>

					<Icon>
						<DribbbleIcon />
					</Icon>

					<Icon>
						<EmailIcon />
					</Icon>

					<Icon>
						<SearchIcon />
					</Icon>
				</Icons>
			</Container>
		</>
	);
};

export default connect(Header);

const Container = styled.div`
	display: flex;
	align-items: center;
	width: 1330px;
	max-width: 100%;
	margin: 0 auto;
	padding: 27px;
	box-sizing: border-box;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;

	@media (min-width: 460px) {
		flex-wrap: nowrap;
		text-align: left;
		justify-content: inherit;
	}
`;

const Title = styled.h2`
	margin: 0;
	margin-bottom: 16px;
`;

const Nav = styled.nav`
	width: 100%;
	margin: 20px auto 0;

	@media (min-width: 460px) {
		width: auto;
		margin: 0 0 0 auto;
	}

	@media (min-width: 660px) {
		margin: 0;
	}
`;

const NavList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	@media (min-width: 460px) {
		display: flex;
	}
`;

const NavItem = styled.li`
	font-size: 16px;
	font-weight: bold;
	margin: 0 10px;
	display: inline-block;

	@media (min-width: 660px) {
		margin: 0 20px;
	}

	@media (min-width: 1130px) {
		font-size: 18px;
	}

	@media (min-width: 1264px) {
		margin: 0 30px;
	}
`;

const Icons = styled.ul`
	display: none;
	align-items: center;
	margin: 0 0 0 auto;
	padding: 0;
	list-style: none;

	@media (min-width: 660px) {
		display: flex;
	}
`;

const Icon = styled.li`
	margin: 0 10px;

	@media (min-width: 1264px) {
		&:last-child {
			margin-left: 50px;
		}
	}
`;
