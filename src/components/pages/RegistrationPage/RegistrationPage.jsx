import { useSelector } from "react-redux";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import { selectisLoggedIn } from "../../../redux/auth/selectors";
import ContactPage from "../ContactPage/ContactPage";

export default function RegistrationPage() {
  const isLoggedIn = useSelector(selectisLoggedIn);
  
  return <div>{!isLoggedIn ? <RegistrationForm /> : <ContactPage />}</div>;
}
