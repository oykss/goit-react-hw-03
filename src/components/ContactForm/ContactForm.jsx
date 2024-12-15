import { useId } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d+(-\d+)*$/, 'Number must contain only digits')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ handleSubmit }) {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.name}>
          Name
          <Field
            type="text"
            name="name"
            id={nameId}
            placeholder="Contact name"
          />
          <ErrorMessage name="name" component="span" />
        </label>

        <label htmlFor={numberId} className={css.number}>
          Number
          <Field
            type="text"
            name="number"
            id={numberId}
            placeholder="Contact number"
          />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit" className={css.btnAdd}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
