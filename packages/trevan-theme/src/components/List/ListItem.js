import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import Button from '../Button';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 */
const Item = ({ state, item }) => {
  const date = new Date(item.date);

  return (
    <Article>
      <Link link={item.link}>
        <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <PublishDate>
        Posted on <strong>{date.toDateString()}</strong>
      </PublishDate>

      <Button text="Read article" url={item.link} secondary />
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  background: white;
  padding: 30px;
  border: 2px solid #000;

  @media (min-width: 820px) {
    padding: 35px;
  }

  @media (min-width: 1000px) {
    padding: 50px;
  }
`;

const PublishDate = styled.p`
  margin: 15px 0;
  color: #636e72;
  font-size: 15px;

  @media (min-width: 820px) {
    font-size: 18px;
  }
`;
