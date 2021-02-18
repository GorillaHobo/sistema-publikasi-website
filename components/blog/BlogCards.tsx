import styled from "@emotion/styled";
import { IPost } from "../../lib/api";

import SectionTitle from "../SectionTitle";
import BlogCard from "./BlogCard";

const StyledBlogCards = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BlogCards = ({ posts }: { posts: IPost[] }) => {
  return (
    <>
      <SectionTitle title={"Articles"} />
      <StyledBlogCards>
        {posts.map((post, index) => (
          <BlogCard key={index} index={index} post={post} />
        ))}
      </StyledBlogCards>
    </>
  );
};

export default BlogCards;
