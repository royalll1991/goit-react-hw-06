
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
	const filterValue = useSelector(selectNameFilter);

	const contacts = useSelector(selectContacts);

	const filtredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filterValue.toLowerCase())
	);

	return (
		<ul className={css.list}>
			{filtredContacts.map(contact => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
				/>
			))}
		</ul>
	);
};
export default ContactList;