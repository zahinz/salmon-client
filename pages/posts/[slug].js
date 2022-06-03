import { useRouter } from "next/router";
import ErrorPage from "next/error";
import React from "react";
import Container from "../../components/dumb/Container";
import ReactMarkdown from "react-markdown";

const InvParagraph = ({ children }) => {
  return <p className="text-gray-600 text-base">{children}</p>;
};

const InvH1 = ({ children }) => {
  return <h1 className="text-gray-800 text-lg font-bold">{children}</h1>;
};
const InvH2 = ({ children }) => {
  return <h2 className="text-gray-800 text-lg font-semibold">{children}</h2>;
};

const SinglePost = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && post.length === 0) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      <div className="mb-10">
        <h1 className="text-3xl text-blue-600 font-bold">{post?.Title}</h1>
        <h2 className="text-2xl text-blue-500 ">{post?.Subtitle}</h2>
      </div>
      <div>
        <ReactMarkdown
          components={{
            p: (props) => <InvParagraph {...props} />,
            h1: (props) => <InvH1 {...props} />,
            h2: (props) => <InvH2 {...props} />,
          }}
        >
          {post?.Body}
        </ReactMarkdown>
      </div>
      {/* <pre>{JSON.stringify(post, null, 4)}</pre> */}
    </Container>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/api/posts");
  const { data: AllPosts } = await res.json();
  return {
    paths: AllPosts?.map((post) => `/posts/${post.slug}` || []),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;

  const res = await fetch(
    `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`
  );
  const { data } = await res.json();

  const post = data.length > 0 ? { id: data[0].id, ...data[0].attributes } : [];

  return {
    props: {
      post,
    },
  };
};

export default SinglePost;
