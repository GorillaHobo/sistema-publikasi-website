import styled from "@emotion/styled";
import { IPost } from "../../lib/api";

import Button from "../Button";
import BlogCard from "./BlogCard";
import SectionTitle from "../SectionTitle";

const StyledArticles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .show-more {
    transition: color ease 200ms;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
    &:hover {
      color: ${(props) => props.theme.colors.blue};
      cursor: pointer;
    }
  }
`;
const StyledBlogCards = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BlogCards = ({ posts }: { posts: IPost[] }) => {
  return (
    <>
      <SectionTitle title="Latest Articles" />
      <StyledArticles>
        <StyledBlogCards>
          {posts.map((post, index) => (
            <BlogCard key={index} index={index} post={post} />
          ))}
        </StyledBlogCards>
        <Button name="Show More Articles" href="/blog" icon="arrow" />
      </StyledArticles>
    </>
  );
};

export default BlogCards;
