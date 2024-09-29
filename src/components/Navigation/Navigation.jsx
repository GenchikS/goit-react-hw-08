import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";

const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
    return (
      <div className={css.container}>
          <NavLink to="/" className={navi}>
            Home
          </NavLink>
        </div>
    );
}