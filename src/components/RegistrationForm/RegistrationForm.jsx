import css from "./RegistrationForm.module.css"
// import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const initialValues = {
  id: Date.now(),
    name: "",
    email: "",
    password: ""
};

// fdffdfdffd12121@kkkkk.com

export default function RegistrationForm() {
  const dispatch = useDispatch();
    
    const handleSubmit = (evn, actions) => {
        // console.log("submit.name", evn.name); //  перевірка значення name при submit
      console.log("submit", evn); //  перевірка введених значень при submit
      dispatch(register(evn))
        // const addContactUser = evn;
        actions.resetForm(); //  активація скидання форми
        // console.log("addContactUser", addContactUser);
        return;
    }

    const nameId = useId();
    const numberId = useId();
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={FeedbackSchema}
      >
        <Form className={css.containerForm}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" className={css.name} id={nameId} />
          <ErrorMessage
            className={css.errorName}
            name="name"
            component="span"
          />
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" className={css.name} id={nameId} />
          <ErrorMessage
            className={css.errorName}
            name="name"
            component="span"
          />
          <label htmlFor="password">Password</label>
          <Field
            type="text"
            name="password"
            className={css.number}
            id={numberId}
          />
          <ErrorMessage
            className={css.errorNumber}
            name="number"
            component="span"
          />
          <button className={css.buttonAdd} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    );
}