import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css'
const Contact = ({ id, name, number, onDelete}) => {
    const handleDelete = () => {
      onDelete(id);
    };
    return (
      <div className={css.box}>
        <div className={css.buttonBox}>
          <div className={css.userBox}>
          <FaUser className={css.userImg}/>      
        <p className={css.text}>{name}</p>
        </div>
        <div className={css.userBox}> 
          <FaPhone className={css.userImg}/>      
        <p className={css.text}>{number}</p>
        </div>
        </div>
        <button className={css.buttonStyle} onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  export default Contact;