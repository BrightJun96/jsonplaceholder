import * as React from "react";
import { AllDataType } from "./../../context/DataContext";

export interface IPostProps {
  post: AllDataType;
}

export default function Post({ post }: IPostProps) {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <h1>UserId: {post?.userId}</h1>
      <h2>ID : {post?.id}</h2>
      <h3>Title : {post?.title} </h3>
      <p> Description : {post?.body}</p>
    </div>
  );
}
