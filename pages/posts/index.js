import React from "react";
import Container from "../../components/dumb/Container";
import InvPostCard from "../../components/reusable/post/InvPostCard";

const AllPosts = ({ posts }) => {
  return (
    <Container>
      <div className="mb-10">AllPosts</div>
      {posts.map(({ id, title, subtitle, publishedAt, body, slug }, index) => {
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
      })}
    </Container>
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
          title: post.attributes.Title,
          subtitle: post.attributes.Subtitle,
          publishedAt: post.attributes.publishedAt,
          body: post.attributes.Body,
          slug: post.attributes.slug,
        };
      }),
    },
  };
};

export default AllPosts;
