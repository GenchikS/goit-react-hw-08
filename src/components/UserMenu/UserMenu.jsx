import { useSelector } from "react-redux";
import css from "./UserMenu.module.css"
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
    const userName = useSelector(selectUser);
    // console.log("userName", userName.name);
    return (
      <p className={css.container}>
        Hello, {!userName.name ? "User" : userName.name}
      </p>
    );
    
}