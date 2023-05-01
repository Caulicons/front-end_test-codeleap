import ReactDOM from 'react-dom/client';
import RouterApp from './router';
import './reset.css';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <Provider store={store}>
      <CookiesProvider>
         <RouterApp />
      </CookiesProvider>
   </Provider>
);