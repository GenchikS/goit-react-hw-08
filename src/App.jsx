import "./App.module.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
// import RestrictedRoute from "./components/pages/RestrictedRoute/RestrictedRoute"
// import ContactList from "./components/ContactList/ContactList";
// import ContactPage from "./pages/ContactPage/ContactPage";
import RestrictedRoute from "./pages/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
// import PrivateRoute from "./components/pages/PrivateRoute/PrivateRoute";

const RegistrationPage = lazy(() =>
  import(`./pages/RegistrationPage/RegistrationPage`)
);
const LoginPage = lazy(() => import(`./pages/LoginPage/LoginPage`));
const HomePage = lazy(() => import(`./pages/HomePage/HomePage`));


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
    
  return (
    <div>
      {/* {Якщо вийти за межі <Layout>, то шапки Nav не буде} */}
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            {/* компоненти рендеряться в компоненті <Navigation */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />

            <Route
              path="contacts"
              element={<PrivateRoute component={<LoginPage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
