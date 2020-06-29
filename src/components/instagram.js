import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
	padding-top: 40px;
  a {
    flex-basis: 25%;
    height: auto;
		@media (max-width: 812px) {
			flex-basis: 50%;
		}
  }
`;

const Node = ({ node }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={`https://www.instagram.com/p/${node.id}/`}
  >
    <Img fluid={node.localFile.childImageSharp.fluid} />
  </a>
);

export const InstagramPosts = ({ posts }) => {
  return (
    <Wrapper>
      {posts.nodes.map(node => (
        <Node key={node.id} node={node} />
      ))}
    </Wrapper>
  );
};

export default InstagramPosts;
