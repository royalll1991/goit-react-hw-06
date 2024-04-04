import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const contactsPersistCfg = {
		key: 'contacts',
		storage,
		whitelist: ['items'],
	};

	const persistContactsReducer = persistReducer(
		contactsPersistCfg,
		contactsReducer
	);

	export const store = configureStore({
		reducer: {
			contacts: persistContactsReducer,
			filters: filtersReducer,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	});
	export const persistore = persistStore(store);