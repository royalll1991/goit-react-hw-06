import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();
	const handleRemoveClick = e => {
		
		dispatch(deleteContact(e.currentTarget.id));
	};
	return (
		<>
			<li id={id} className={css.box} onClick={handleRemoveClick}>
				<div >
					<p className={css.text}>
						<IoPerson className={css.userImg} />
						{name}
					</p>
					<p className={css.text}>
						<FaPhone className={css.userImg} />
						{number}
					</p>
				</div>
				<button className={css.buttonStyle} type="button">
					Delete
				</button>
			</li>
		</>
	);
};
export default Contact;