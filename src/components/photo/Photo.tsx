/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from "react";
import { AllDataType } from "../../context/DataContext";

export interface IPhotoProps {
  photo: AllDataType;
}

export default function Photo({ photo }: IPhotoProps) {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <h1>AlbumId :{photo?.albumId} </h1>
      <h2>Id : {photo?.id}</h2>
      <h3>Title : {photo?.title}</h3>
      <a href={photo?.url}>
        <img style={{ height: "100px" }} src={photo?.thumbnailUrl} alt="" />
      </a>
    </div>
  );
}
