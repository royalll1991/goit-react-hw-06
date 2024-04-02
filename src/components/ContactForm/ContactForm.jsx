import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css'
import * as Yup from 'yup';


const ContactForm = ({addContact}) => {
    const nameId = useId();
    const numberId = useId();

    const contactSchema = Yup.object().shape({
        name: Yup.string() 
        .min(3, "Too short!") 
        .max(50, "Too long!") 
        . required("This is required you dummy!"),
        number: Yup.string() 
        .min(3, "Too short!") 
        .max(50, "Too long!") 
        . required("This is required you dummy!"),
    })

        return (
       
              <Formik initialValues={{name: "", number: "",  }} 
              validationSchema ={contactSchema}
              onSubmit={(values, actions) => {
                addContact(values.name, values.number);
                actions.resetForm();
              }}>

                <Form className={css.form}>
                    <div className={css.formBox}>
                    <label htmlFor={nameId} className={css.text}>Name</label>
               <Field name = "name" id = {nameId} className={css.input}></Field>
               <ErrorMessage name = "name" component="p" className={css.error}/>
               </div>
               <div className={css.formBox}>
               <label htmlFor={numberId} className={css.text}>Number</label>
               <Field name = "number" id = {numberId} className={css.input}></Field>
               <ErrorMessage name = "number" component="p" className={css.error}/>
               </div>
               <button type='submit' className={css.formButton}>Add contact</button>
                </Form>
              </Formik>
    )
};

export default ContactForm;