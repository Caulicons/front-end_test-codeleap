import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useLogoutUser = () => {
   const [, setCookies] = useCookies(['userName']);
   const navigateTo = useNavigate();
   return () => {
      setCookies('userName', '', { path: '/' });
      navigateTo('/');
   };
};

export default useLogoutUser;
