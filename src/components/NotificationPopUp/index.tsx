import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const NotificationPopUp = () => {
   const infoToShow = useSelector((state: RootState) => state.notification);
   const user = useSelector((state: RootState) => state.user.username);

   const handleNotification = {
      welcome: {
         style: 'bg-blue',
         text: `Welcome ${user}!`,
      },
      failed: {
         style: 'bg-red',
         text: infoToShow.text,
      },
      success: {
         style: 'bg-green',
         text: infoToShow.text,
      },
      '': {
         style: '',
         text: '',
      },
   };

   return (
      <>
         <span
            className={`
               ${infoToShow.isActive ? ' right-0' : 'right-[-300px]'}
            fixed top-[102px] h-auto w-auto  rounded-l-default
           p-default pr-2 text-white duration-500
           ${handleNotification[infoToShow.type].style}
           `}
         >
            {handleNotification[infoToShow.type].text}
         </span>
      </>
   );
};

export default NotificationPopUp;
