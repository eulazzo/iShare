import React from "react";
import { urlFor } from "../client";

const Pin = ({ pin: { image, postedBy, _id, destination } }) => {
  return (
    <div>
      <img
        className="rounded-lg w-full object-cover "
        alt="userPost"
        src={urlFor(image).width(250).url()}
      />
    </div>
  );
};

export default Pin;
