import * as React from "react";
import PostList from "../components/post/PostList";

export interface IPostPageProps {}

export default function PostPage(props: IPostPageProps) {
  return <PostList />;
}
