import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Slices/userSlice';

const useVerifyUserRegister = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [cookies] = useCookies(['userName']);

   return (navigateTo?: string) => {
      if (!cookies.userName) {
         navigate('/');
         return;
      }

      if (navigateTo && cookies.userName) {
         navigate(navigateTo);
         return;
      }

      dispatch(registerUser(cookies.userName));
   };
};

export default useVerifyUserRegister;
