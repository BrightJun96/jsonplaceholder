import * as React from "react";
import UserList from "../components/user/UserList";

export interface IUserPageProps {}

export default function UserPage(props: IUserPageProps) {
  return <UserList />;
}
