import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PhotoPage from "./pages/PhotoPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import DataContext from "./context/DataContext";
import { AllDataType } from "./context/DataContext";
import HomePage from "./pages/HomePage";
import Home from "./components/home/Home";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [data, setData] = useState<[] | AllDataType[]>([null]);

  async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
  }
  return (
    <>
      <DataContext.Provider value={{ data, fetchData }}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Home />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/photo" element={<PhotoPage />} />
          </Route>
        </Routes>
      </DataContext.Provider>
    </>
  );
}
