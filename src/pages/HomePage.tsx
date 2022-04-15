import * as React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
