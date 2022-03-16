import React from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { client } from "../client";

//MasonryLayout is a grid with different collums heights (It's nice for images cuz it's visual effect)

import { MasonryLayout } from "./";
import { Spinner } from ".";
import { useEffect } from "react";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  if (!pins?.length)
    return <h2 className="text-center text-gray-600">No pins Available</h2>;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
