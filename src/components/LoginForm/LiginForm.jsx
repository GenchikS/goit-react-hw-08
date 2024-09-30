import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css"
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const initialValues = {
  id: Date.now(),
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (evn, actions) => {
    // console.log("submit login", evn);
    dispatch(logIn(evn));
    ;
    actions.resetForm();
    return;
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.containerForm}>
        <label htmlFor="email">Email</label>
        <Field type="text" name="email" className={css.name} id={nameId} />
        <ErrorMessage className={css.errorName} name="email" component="span" />
        <label htmlFor="password">Password</label>
        <Field
          type="text"
          name="password"
          className={css.number}
          id={numberId}
        />
        <ErrorMessage
          className={css.errorNumber}
          name="password"
          component="span"
        />
        <button className={css.buttonAdd} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}