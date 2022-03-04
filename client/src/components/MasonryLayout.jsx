import React from "react";

import Masonry from "react-masonry-css";
import { Pin } from "./";

const breakPointOBJ = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }) => {
  return (
    <div>
      <Masonry clasName="flex animate-slide-fwd" breakPointcols={breakPointOBJ}>
        {pins?.map((pin) => (
          <Pin pin={pin} key={pin._id} clasName="w-max " />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
