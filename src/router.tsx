import WrapperContent from './components/WrapperContent';
import MainScreen from './pages/MainScreen/MainScreen';
import SignUp from './pages/SignUp/SignUp';
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
