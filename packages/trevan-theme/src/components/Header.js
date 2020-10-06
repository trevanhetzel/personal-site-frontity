import React from "react";
import { connect, styled } from "frontity";
import Logo from "./svg/Logo";
import Link from "./Link";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <Link link="/">
          <Logo />
        </Link>

        <nav>
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
        </nav>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
  padding: 27px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  margin: 0 30px;
`;
