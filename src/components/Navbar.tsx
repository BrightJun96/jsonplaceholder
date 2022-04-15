import * as React from "react";
import GetNavLink from "../custom/GetNavLink";
export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const category: string[] = ["user", "post", "photo"];
  return (
    <div>
      <ul>
        {category.map((path) => (
          <li key={path}>
            <GetNavLink>{path}</GetNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
