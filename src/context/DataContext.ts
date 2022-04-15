import { createContext, Dispatch, SetStateAction } from "react";

// 이 안에 데이터 타입이 여러가지
// 때문에 카테고리별로 데이터타입을 나눠야함.
/*  
export interface PostDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserDataType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface PhotoDataType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
*/

export interface SumDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string;

  username: string;

  email: string;

  phone: string;
  albumId: number;
  url: string;
  thumbnailUrl: string;
}

export type AllDataType = SumDataType | null;

export interface DataType {
  data: AllDataType[] | null; // data는 null이 될 수도 있는 것을 유의하고 가져올 때 as로 가져와야함.
  setData?: Dispatch<SetStateAction<AllDataType[] | null>>;
  fetchData: (url: string) => void;
}

const DataContext = createContext<null | DataType>(null);

export default DataContext;
