import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList  = ({contacts, filteredContacts, onDelete}) => {
const contactsRender = filteredContacts || contacts;

    return ( <ul className={css.list}>
        {contactsRender.map((contact) => (
                <li  key={contact.id} >
                    <Contact 
                        name={contact.name}
                        number={contact.number}
                        id = {contact.id}
                        onDelete = {onDelete}
                        />
                </li>
            ))}
        
    </ul>
    );}

export default ContactList;