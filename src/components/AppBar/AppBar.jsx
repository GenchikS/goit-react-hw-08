import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css"
import { selectUser } from "../../redux/auth/selectors";
import Logout from "../Logout/Logout";

export default function AppBar() {
  const userName = useSelector(selectUser);
    return (
      <div className={css.container}>
        <Navigation />
        <UserMenu />
        {!userName.name ? <AuthNav /> : <Logout />}
      </div>
    ); 
    
}