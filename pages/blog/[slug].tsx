import styled from "@emotion/styled";
import { getAllPosts, getPostBySlug, IPost } from "../../lib/api";
import { InferGetStaticPropsType } from "next";
import marked from "marked";
import Image from "next/image";

import Nav from "../../components/nav/Nav";
import SectionTitle from "../../components/SectionTitle";
import Layout from "../../components/Layout";

const StyledImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 80%;
  padding: 0 2rem;
  margin: 8rem auto 0 auto;

  overflow: hidden;
`;

const BlogTemplate = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { coverImage } = post;
  return (
    <Layout>
      <Nav />
      <StyledImageContainer>
        {coverImage && (
          <Image src={post.coverImage} layout="fill" objectFit="cover" />
        )}
      </StyledImageContainer>
      <SectionTitle title={post.title} />
      <div
        style={{ maxWidth: "80%", margin: " 0 auto" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
};

export default BlogTemplate;

export async function getStaticProps({ params }) {
  const fields: string[] = [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
  ];
  const post = getPostBySlug(params.slug, fields);
  const content = marked(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
