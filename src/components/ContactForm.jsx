import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(7).required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field name="number" placeholder="Phone Number" />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
