import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectisLoggedIn);
    return (
      <ul className={css.container}>
        <li>
          <NavLink to="/" className={navi}>
            Home
          </NavLink>
        </li>
        <li className={css.listContacts}>
          {isLoggedIn && (
            <NavLink to="contacts" className={navi}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    );
}