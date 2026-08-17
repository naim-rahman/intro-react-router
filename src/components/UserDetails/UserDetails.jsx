import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();

  // const { userID } = useParams();
  // console.log(userID);

  const params = useParams();
  console.log(params);

  const { website, name } = user;

  return (
    <div>
      <h3>User details here</h3>
      <p>Name: {name}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
