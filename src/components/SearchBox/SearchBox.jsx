import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBar = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(selectNameFilter);

	return (
		<div className={css.findBox}>
			<p className={css.text}>Find contacts by name</p>
			<input
				onChange={event => dispatch(changeFilter(event.target.value))}
				className={css.findInput}
				type="text"
				value={filterValue}
				placeholder="Search by name"
			/>
		</div>
	);
};
export default SearchBar;