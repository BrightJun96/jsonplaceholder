import * as React from "react";
import { NavLink } from "react-router-dom";

export interface IGetNavLinkProps {
  children: string;
}

export default function GetNavLink({ children }: IGetNavLinkProps) {
  return (
    <NavLink
      style={(props: { isActive: boolean }): React.CSSProperties =>
        props.isActive ? { color: "red" } : { color: "black" }
      }
      to={children}
    >
      {children}
    </NavLink>
  );
}
