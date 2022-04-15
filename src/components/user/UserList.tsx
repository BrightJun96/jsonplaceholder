import React, { useContext, useEffect } from "react";
import DataContext, { DataType } from "../../context/DataContext";
import User from "./User";

export interface IUserListProps {}

export default function UserList(props: IUserListProps) {
  const { data, fetchData } = useContext(DataContext) as DataType;
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data?.map((user) => user && <User key={user?.id} user={user} />)}
    </div>
  );
}
