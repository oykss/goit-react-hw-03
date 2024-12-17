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
        <label className={css.name}>
          Name
          <Field type="text" name="name" placeholder="Contact name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label className={css.number}>
          Number
          <Field type="text" name="number" placeholder="Contact number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit" className={css.btnAdd}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
