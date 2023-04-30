import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './reset.css';
import './index.css';
import store from './redux/store.ts';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <Provider store={store}>
      <CookiesProvider>
         <App />
      </CookiesProvider>
   </Provider>
);