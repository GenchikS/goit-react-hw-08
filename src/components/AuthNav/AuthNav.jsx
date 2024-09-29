import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"
import clsx from "clsx";

const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
};


export default function AuthNav() {
    return (
      <ul className={css.containerLog}>
        <li>
          <NavLink to="/register" className={navi}>
            Register
          </NavLink>
        </li>
        <li className={css.logIn}>
          <NavLink to="/login" className={navi}>
            Log In
          </NavLink>
        </li>
      </ul>
    );
}