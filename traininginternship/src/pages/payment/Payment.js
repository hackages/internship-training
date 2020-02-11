import React from "react";
import { Formik } from 'formik';
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <div>
      <PayementForm></PayementForm>
    </div>
  );
};

const PayementForm = () => (
  <div>

    <Formik

      initialValues={{ firstname: '', lastname: '', email: '' }}

      validate={values => {

        const errors = {};

        if (!values.firstname) {
          errors.firstname = 'Required';
        } else if (values.firstname.length <= 2) {
          errors.firstname = "At least 3 characters are needed";
        }

        if (!values.lastname) {
          errors.lastname = 'Required';
        } else if (values.lastname.length <= 2) {
          errors.lastname = "At least 3 characters are needed";
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}

      // onSubmit={(values, { setSubmitting }) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}

    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit

      }) => (
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
            />
            {errors.firstname && touched.firstname && errors.firstname}

            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
            {errors.lastname && touched.lastname && errors.lastname}

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <button type="submit" disabled={errors.firstname || errors.lastname || errors.email }>
            <Link to={`/`}></Link> Purchase
            </button>

          </form>
        )}
    </Formik>
  </div>
);