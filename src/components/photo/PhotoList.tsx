import React, { useEffect, useContext } from "react";
import DataContext from "./../../context/DataContext";
import { DataType } from "../../context/DataContext";
import Photo from "./Photo";
export interface IPhotoListProps {}

export default function PhotoList(props: IPhotoListProps) {
  const { data, fetchData } = useContext(DataContext) as DataType;
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/photos");
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data?.map((photo) => photo && <Photo key={photo?.id} photo={photo} />)}
    </div>
  );
}
