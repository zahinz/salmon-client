import { format } from "date-fns";
import Link from "next/link";
import React, { Children, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const InvParagraph = ({ children }) => {
  return <p className="text-gray-600 text-base pb-3">{children}</p>;
};

const InvPostCard = ({
  title = "this is title",
  subtitle = "This is subtitle",
  publishedAt = Date.now(),
  bodyPreview = "# This is heading\n## This is subheading\n\nHello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. \n\nHello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. \n\n\nHello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. Hello world. Good morning. Lorem ipsum. ",
  slug,
}) => {
  return (
    <div className="mb-16">
      <div className="mb-5">
        <div className="mb-5">
          <h2 className="text-2xl text-blue-600 font-bold">{title}</h2>
          <h3 className="text-lg text-blue-500">{subtitle}</h3>
        </div>
        <p className="text-gray-400 text-xs">
          Published at{" "}
          {format(Date.parse(publishedAt), "hh:m MM-dd-yyyy", new Date())}
        </p>
      </div>

      <ReactMarkdown
        allowedElements={["p"]}
        components={{ p: (props) => <InvParagraph {...props} /> }}
      >
        {bodyPreview.substring(0, 700) + "..."}
      </ReactMarkdown>
      <Link className="mt-5 text-blue-600 text-sm" href={`/posts/${slug}`}>
        Read more
      </Link>
    </div>
  );
};

export default InvPostCard;
