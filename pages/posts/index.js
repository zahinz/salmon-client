import React from "react";
import Container from "../../components/dumb/Container";
import InvPostCard from "../../components/reusable/post/InvPostCard";
import Header from "../../components/smart/Header";

const AllPosts = ({ posts }) => {
  return (
    <>
      <Header />
      <Container>
        <div className="mb-10 flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-600">AllPosts</h2>
          <h2 className="flex items-center justify-center text-sm text-white bg-blue-700  w-8 h-8 rounded-full">
            {posts?.length}
          </h2>
        </div>
        {posts.map(
          ({ id, title, subtitle, publishedAt, body, slug }, index) => {
            return (
              <InvPostCard
                key={id}
                title={title}
                subtitle={subtitle}
                publishedAt={publishedAt}
                bodyPreview={body}
                slug={slug}
              />
            );
          }
        )}
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/posts");
  const { data: AllPosts } = await res.json();

  return {
    props: {
      posts: AllPosts.map((post) => {
        return {
          id: post.id,
          title: post.attributes.title,
          subtitle: post.attributes.subtitle,
          publishedAt: post.attributes.publishedAt,
          body: post.attributes.body,
          slug: post.attributes.slug,
        };
      }),
    },
  };
};

export default AllPosts;
