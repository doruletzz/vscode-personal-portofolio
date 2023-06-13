import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './styles/index.css';
import './styles/reset.css';
import './styles/colors.css';
import './styles/fonts.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './features/app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);
