import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/Slices/userSlice';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useRegisterUser = () => {

   const dispatch = useDispatch();
   const navigateTo = useNavigate();
   const [, setCookies] = useCookies(['userName']);

   return (userName: string) => {
      
      dispatch(registerUser(userName));
      setCookies('userName', userName, { path: '/' });
      navigateTo('/posts');
      return;
   };
};

export default useRegisterUser;