import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component }) {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : component;
}