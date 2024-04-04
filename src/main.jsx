import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import 'modern-normalize'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistore, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistore}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);