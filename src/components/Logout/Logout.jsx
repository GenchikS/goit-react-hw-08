import { useDispatch } from "react-redux";
import css from "./Logout.module.css"
import { logOut } from "../../redux/auth/operations";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const navi = (props) => {
  return clsx(css.link, props.isActive && css.active);
};



export default function Logout() {
  
  const dispatch = useDispatch()
  return (
    <div>
        <button className={css.buttonLogout} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}