import React, { use } from "react";

const Users2 = ({ userPromise }) => {
    
  const users = use(userPromise);
  console.log("Users Two suspense data load:", users);
  
  return (
    <div>
      <h3>This is Users Two...</h3>
    </div>
  );
};

export default Users2;
