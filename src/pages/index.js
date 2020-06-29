import React from "react";
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexBlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="blog-container">
      {data.allMarkdownRemark.edges.map(post => (
        <div 
        className="blog-posts"
        key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br></br>
          <br></br>
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br></br>
          <br></br>
          <hr></hr>
        </div>
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default IndexBlogPage;
