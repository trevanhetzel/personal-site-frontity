import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./ListItem";
import Pagination from "./Pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <div>
      <Container>
        <ListContain className="contain">
          {/* If the list is a taxonomy, we render a title. */}
          {data.isTaxonomy && (
            <h2>
              {data.taxonomy}:{" "}
              <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
            </h2>
          )}

          {/* If the list is for a specific author, we render a title. */}
          {data.isAuthor && (
            <h2>
              Author: <b>{decode(state.source.author[data.id].name)}</b>
            </h2>
          )}

          {/* Iterate over the items of the list. */}
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
        </ListContain>
      </Container>

      <Container>
        <PaginationContainer className="contain">
          <Pagination />
        </PaginationContainer>
      </Container>
    </div>
  );
};

export default connect(List);

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fc4501;
  position: relative;
`;

const ListContain = styled.section`
  display: grid;
  grid-gap: 30px;
  margin: -30px auto 30px;

  @media (min-width: 820px) {
    margin: -90px auto 30px;
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
  }

  @media (min-width: 1130px) {
    margin: -90px auto 30px;
  }
`;

const PaginationContainer = styled.div`
  margin: 0 0 30px;

  @media (min-width: 820px) {
    margin: 0 0 90px;
  }
`;
