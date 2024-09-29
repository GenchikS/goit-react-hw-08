import "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import {
  selectError,
  selectContacts,
  selectLoading,
} from "./redux/contacts/selectors";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Layout from "./components/Layout/Layout";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const RegistrationPage = lazy(() =>
  import(`./components/pages/RegistrationPage/RegistrationPage`)
);
const LoginPage = lazy(() => import(`./components/pages/LoginPage/LoginPage`));
const HomePage = lazy(() => import(`./components/pages/HomePage/HomePage`));

function App() {
  const dispatch = useDispatch();
  // Отримуємо частини стану в useSelector
  const contacts = useSelector(selectContacts);
  // console.log("contacts", contacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            {/* компоненти рендеряться в компоненті <Navigation */}
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Layout>

      {/* <SearchBox />
      {contacts && <ContactList />}
      {isLoading && <p>Loading...</p>} */}
    </div>
  );
}

export default App;
