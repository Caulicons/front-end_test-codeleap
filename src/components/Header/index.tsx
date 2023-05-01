import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ExitIcon } from '../../assets/logoutIcon.svg';
import Title from '../Typography/Title';

const Header = () => {
   const [_, setCookies] = useCookies(['userName']);
   const navigateTo = useNavigate();

   const logOutUSer = () => {
      setCookies('userName', '', { path: '/' });
      navigateTo('/');
   };

   return (
      <div className='flex justify-between text-white bg-blue py-[27px] px-[37px]'>
         <Title >
            CodeLeap NetWork
         </Title>
         <ExitIcon
            cursor='pointer' width={'40px'} height={'40px'} className='fill-white'
            onClick={logOutUSer}
         />
      </div>
   );
};

export default Header;