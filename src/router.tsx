import WrapperContent from './components/WrapperContent/index';
import MainScreen from './pages/MainScreen/index';
import SignUp from './pages/SignUp/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function RouterApp() {

   return <Router>
      <Routes>
         <Route path='/' element={<WrapperContent />}>
            <Route index element={<SignUp />} />
            <Route path='/posts' element={<MainScreen />} />
         </Route>
      </Routes>
   </Router >;
}

export default RouterApp;
