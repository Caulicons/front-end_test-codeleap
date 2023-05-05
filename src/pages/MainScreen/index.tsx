import CreatePoster from '../../components/CreatePoster';
import Posts from '../../components/Posts';
import { useEffect } from 'react';
import Header from '../../components/Header';
import NotificationPopUp from '../../components/NotificationPopUp';
import { useNotificationWelcome } from '../../actions/hooks/showNotification';
import useVerifyUserRegister from '../../actions/hooks/verifyUserRegister';

function MainScreen() {

   const showWelcomeNotification = useNotificationWelcome();
   const verifyUserRegister = useVerifyUserRegister();

   useEffect(() => {
      verifyUserRegister();
      showWelcomeNotification();
   }, []);

   return <div className='
   h-full w-[800px]
   '>
      <Header />
      <div className='
      bg-white p-default min-h-[calc(100vh-87px)]
      '>
         <CreatePoster />
         <Posts />
      </div>
      <NotificationPopUp />
   </div>;
}

export default MainScreen;