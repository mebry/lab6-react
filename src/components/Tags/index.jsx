import React from "react";
import Tag from "./Tag";

const Tags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag title={tag.title} href={tag.href} />
      ))}
    </div>
  );
};

export default Tags;
