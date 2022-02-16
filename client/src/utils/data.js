import { client } from "../client";

export const userQuery = (userID) => {
  const query = `
    *[_type == "user" && _id == "${userID}"]`;
  return query;
};
