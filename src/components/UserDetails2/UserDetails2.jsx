import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const { name, username } = use(userPromise);
  
  return (
    <div>
      <h3>{name}</h3>
      <p>User Name: {username}</p>
    </div>
  );
};

export default UserDetails2;
