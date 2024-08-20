import React from "react";
import useUserStore from "../model/store";

export default function Account() {
  const { user } = useUserStore();

  return (
    <div>
      <p>Email: {user.email}</p>
    </div>
  );
}
