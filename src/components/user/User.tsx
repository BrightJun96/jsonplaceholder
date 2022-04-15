import * as React from "react";
import { AllDataType } from "../../context/DataContext";

export interface IUserProps {
  user: AllDataType;
}

export default function User({ user }: IUserProps) {
  return (
    <div style={{ width: "350px" }}>
      <h1>ID :{user?.id} </h1>
      <h2>Name : {user?.name}</h2>
      <h2>Username : {user?.username}</h2>
      <h3>E-mail : {user?.email}</h3>
      <h3>Tel : {user?.phone}</h3>
    </div>
  );
}
