import React, { useContext, useEffect } from "react";
import DataContext, { DataType } from "../../context/DataContext";
import Post from "./Post";
import { List } from "react-virtualized";

export interface IPostListProps {}

export default function PostList(props: IPostListProps) {
  const { data, fetchData } = useContext(DataContext) as DataType;

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "1000px",
          height: "1000px",
          border: "2px solid black",
        }}
      >
        {data?.map((post) => post && <Post post={post} key={post?.id} />)}
      </div>
    </>
  );
}
