import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Logout.module.css"

const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Logout() {
    return (
        <NavLink to="/" className={navi}>Logout</NavLink>
    );
}