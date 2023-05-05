import ReactDOM from 'react-dom/client';
import RouterApp from './router';
import './styles/reset.css';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <CookiesProvider>
            <RouterApp />
         </CookiesProvider>
      </Provider>
   </React.StrictMode>
);