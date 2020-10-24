import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Button from "../Button";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <Container previous={previous} next={next}>
      {/* If there's a previous page, render this link */}
      {previous && (
        <Button text="Newer" url={previous} alt previous />
      )}

      {/* If there's a next page, render this link */}
      {next && (
        <Button text="Older" url={next} alt />
      )}
    </Container>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const Container = styled.div`
  margin: 30px auto 0;
  width: 100%;
  display: flex;
  justify-content: ${props => props.previous && props.next ? "space-between" : "flex-end"};
`;
