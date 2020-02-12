import React, { useContext, useState, useEffect } from "react";
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";
import { SnackbarContext } from "../../App";
import Button from "@material-ui/core/Button";
import lesson from '../../core/services/lesson.service';

export const Payment = (props) => {

  const [product, setProduct] = useState({});

  const id = props.match.params.id;

  useEffect(() => {
    lesson.getLesson(id).then(data => {
      setProduct(data);
    })
  }, [id])

  return (
    <div>
      <h1>{' The order is about : '} {product.title} </h1>
      <h3>{product.price + ' €'}</h3>

      <PayementForm></PayementForm>
    </div>
  );
};

const PayementForm = () => {

  const spanStyle = {
    color: 'red'
  };

  let { showSnackBar } = useContext(SnackbarContext);
  const history = useHistory();

  return (
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

        onSubmit={(values, { setSubmitting }) => {

          showSnackBar({ text: "Validation ok" });
          history.push("/")

        }}

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

              Name <input
                type="text"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              <span style={spanStyle}>{errors.firstname && touched.firstname && errors.firstname}</span>
              <br />

              Surname <input
                type="text"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
              <span style={spanStyle}>{errors.lastname && touched.lastname && errors.lastname}</span>
              <br />

             Your mail <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span style={spanStyle}>{errors.email && touched.email && errors.email}</span>

              <Button size="small" variant="outlined" color="primary" type="submit" disabled={(errors.firstname && errors.lastname && errors.email) ? true : false}>
                Purchase
              </Button>

            </form>
          )}
      </Formik>
    </div>
  );

};