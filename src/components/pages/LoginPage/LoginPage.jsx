import { useSelector } from "react-redux"
import { selectisLoggedIn } from "../../../redux/auth/selectors";
import ContactPage from "../ContactPage/ContactPage";
import LoginForm from "../../LoginForm/LiginForm";

export default function LoginPage() {
    const isLoggedIn = useSelector(selectisLoggedIn);
    console.log("isLoggedIn", isLoggedIn);
    return isLoggedIn ? <ContactPage /> : <LoginForm/>
    
}