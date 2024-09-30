import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactPage() {
  const dispatch = useDispatch();
  // Отримуємо частини стану в useSelector
  const isLoading = useSelector(selectLoading);
  // console.log("isLoading", isLoading);
  const error = useSelector(selectError);

  const contacts = useSelector(selectFilteredContacts);
  // console.log("contacts", contacts);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {contacts && <ContactList />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}