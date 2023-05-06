import { ReactComponent as ExitIcon } from '../../assets/logoutIcon.svg';
import Title from '../Typography/Title';
import useLogoutUser from '../../actions/hooks/logOutUser';

const Header = () => {
   const logOutUser = useLogoutUser();

   return (
      <div className="flex justify-between bg-blue px-[37px] py-[27px] text-white">
         <Title>CodeLeap NetWork</Title>
         <ExitIcon
            cursor="pointer"
            width={'40px'}
            height={'40px'}
            className="fill-white"
            onClick={() => logOutUser()}
         />
      </div>
   );
};

export default Header;
