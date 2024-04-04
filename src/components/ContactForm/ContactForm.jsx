

import css from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const FeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(50, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
	number: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(9, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
});

const initialValues = { name: '', number: '' };

const ContactForm = () => {
	const dispatch = useDispatch();

	const nameId = nanoid(9);
	const numberId = nanoid(9);

	const handleSubmit = (values, actions) => {
		dispatch(
			addContact({
				id: nanoid(9),
				name: values.name,
				number: values.number,
			})
		);
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form className={css.form}>
				<label htmlFor={nameId} className={css.text}>Name</label>
				<Field
					className={css.field}
					type="text"
					name="name"
					id={nameId}
					placeholder="Antony Robins"
				/>

				<ErrorMessage className={css.error} name="name" as="span" />

				<label className={css.text} htmlFor={numberId}>
					Number
				</label>
				<Field
					className={css.field}
					type="text"
					name="number"
					id={numberId}
					placeholder="111-11-11"
				/>

				<ErrorMessage className={css.error} name="number" as="span" />

				<button className={css.formButton} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;