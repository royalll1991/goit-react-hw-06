import css from './SearchBox.module.css';

const SearchBox = ({inputValue, handleChange}) => {
   
    return (
        <div className={css.findBox}>
            <label htmlFor="findContact" className={css.text}>Find contacts by name</label>
            <input type="text" name="findContact" className={css.findInput} value={inputValue} onChange={handleChange}/>
            
           
        </div>
    );
};
export default SearchBox;