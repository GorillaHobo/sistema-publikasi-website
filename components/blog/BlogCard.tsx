import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import { IPost } from "../../lib/api";

const StyledBlogCard = styled.div`
  width: 40%;
  height: 550px;

  padding: 1rem;
  margin: 1rem;

  display: flex;
  flex-direction: column;

  white-space: wrap;
  box-shadow: ${(props) => props.theme.shadows.large};

  & .para {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  transition: background-color ease 300ms, transform ease 300ms;
  & span {
    color: ${(props) => props.theme.colors.blue};
  }
  & p {
    margin: 0;
  }

  & h1,
  h5 {
    margin: 5px 0;
  }

  & h1 {
    font-size: 1.7rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.whiteDark};
    transform: scale(1.01);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 100%;
    height: 500px;
    margin-bottom: 1rem;
    & h1 {
      font-size: 1.5rem;
    }
    & .para {
      -webkit-line-clamp: 3;
    }
  }
`;

const StyledImageContainer = styled.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;

  position: relative;
`;

const BlogCard = ({ post }: { post: IPost; index: number }) => {
  const { title, author, date, slug, excerpt, coverImage } = post;
  return (
    <Link href={"/blog/" + slug}>
      <StyledBlogCard>
        <StyledImageContainer>
          {coverImage && (
            <Image src={coverImage} layout="fill" objectFit="cover" />
          )}
        </StyledImageContainer>
        <h1>{title}</h1>
        <div className="para">
          <p>{excerpt}</p>
        </div>
        <div style={{ marginTop: "auto" }}>
          <h5>
            <span>Author: </span>
            {author}
          </h5>
          <h5>
            <span>Date: </span>
            {date}
          </h5>
        </div>
      </StyledBlogCard>
    </Link>
  );
};

export default BlogCard;
