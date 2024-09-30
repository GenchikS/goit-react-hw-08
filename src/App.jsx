import "./App.module.css";
import Layout from "./components/Layout/Layout";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const RegistrationPage = lazy(() =>
  import(`./components/pages/RegistrationPage/RegistrationPage`)
);
const LoginPage = lazy(() => import(`./components/pages/LoginPage/LoginPage`));
const HomePage = lazy(() => import(`./components/pages/HomePage/HomePage`));


function App() {
    
  return (
    <div>
      {/* {Якщо вийти за межі <Layout>, то шапки Nav не буде} */}
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
    </div>
  );
}

export default App;
