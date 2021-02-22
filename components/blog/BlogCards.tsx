import Link from "next/link";
import styled from "@emotion/styled";
import { IPost } from "../../lib/api";

import SectionTitle from "../SectionTitle";
import BlogCard from "./BlogCard";

const StyledArticles = styled.div`
  display: flex;
  flex-direction: column;

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

const BlogCards = ({
  posts,
  title,
  isBlog,
}: {
  posts: IPost[];
  title: string;
  isBlog?: boolean;
}) => {
  return (
    <StyledArticles>
      <SectionTitle title={title} margin="large" />
      <StyledBlogCards>
        {posts.map((post, index) => (
          <BlogCard key={index} index={index} post={post} />
        ))}
      </StyledBlogCards>
      <Link href="/blog">
        <h4 className="show-more">Show More Articles...</h4>
      </Link>
    </StyledArticles>
  );
};

export default BlogCards;
