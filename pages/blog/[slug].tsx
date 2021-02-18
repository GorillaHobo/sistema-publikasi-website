import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import styled from "@emotion/styled";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import marked from "marked";
import Head from "next/head";

const StyledBlogTemplate = styled.div``;

const BlogTemplate = ({ contents, data }) => {
  console.log(contents);
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </>
  );
};

export default BlogTemplate;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      contents: htmlString,
      data: parsedMarkdown.data,
    },
  };
};
