import { useSelector } from "react-redux";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import { selectUser } from "../../../redux/auth/selectors";
import ContactForm from "../../ContactForm/ContactForm";

export default function RegistrationPage() {
  const userName = useSelector(selectUser)

  return <div>{!userName.name ? <RegistrationForm /> : <ContactForm/>}</div>;
}
