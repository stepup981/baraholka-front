import React from "react";
import useUserStore from "@/entities/user/model/store";

const User = () => {
  const { user } = useUserStore();
  return (
    <div>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
