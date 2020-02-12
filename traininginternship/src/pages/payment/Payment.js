import React, { useContext, useState, useEffect } from "react";
import { Formik } from 'formik';
import { SnackbarContext } from "../../App";
import Button from "@material-ui/core/Button";
import lesson from '../../core/services/lesson.service';
import Loading from '../../shared/Loading';

export const Payment = (props) => {

  const [product, setProduct] = useState({});

  const id = props.match.params.id;

  useEffect(() => {
    lesson.getLesson(id).then(data => {
      setProduct(data);
    })
  }, [id])

  if (product && product.activity) {

    return (
      <div>
        <h1>{' The order is about : '} {product.activity.title} </h1>
        <h3>{product.activity.price + ' €'}</h3>

        <PayementForm value={id}></PayementForm>
      </div>
    );

  } else {
    return (
      <>
        <Loading></Loading>
      </>
    )
  }
};

const PayementForm = (props) => {

  const spanStyle = {
    color: 'red'
  };

  const id  = props.value;

  let { showSnackBar } = useContext(SnackbarContext);

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
          window.location = `${process.env.REACT_APP_URL_BASE_PAYMENT}?id=${id}&redirectTo=https%3A%2F%2Fdev.community.hackages.io%2Factivity%2Fevent%2F${id}&email=${values.email}`;

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