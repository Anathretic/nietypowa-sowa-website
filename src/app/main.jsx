import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import TopicSelectProvider from '../shared/context/TopicSelectContext.jsx';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<TopicSelectProvider>
					<App />
				</TopicSelectProvider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
