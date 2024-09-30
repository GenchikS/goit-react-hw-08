import { useDispatch } from "react-redux";
import css from "./Logout.module.css"
import { logOut } from "../../redux/auth/operations";

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