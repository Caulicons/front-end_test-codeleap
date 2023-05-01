import CreatePoster from '../../components/CreaterPoster';
import Posts from '../../components/Posts';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/Slices/user';
import Header from '../../components/Header';
import NotificationPopUp from '../../components/NotificationPopUp';
import { hiddenNotification, showNotification } from '../../redux/Slices/notificationsPopUp';

function MainScreen() {
   const [cookies,] = useCookies(['userName']);
   const userName = cookies.userName;
   const navigateTo = useNavigate();
   const dispatch = useDispatch();

   dispatch(addUser(userName));
   dispatch(showNotification({ text: '', type: 'welcome' }));
   setTimeout(() => dispatch(hiddenNotification()), 1400);

   useEffect(() => {
      if (!cookies.userName) return navigateTo('/');
   }, [cookies]);

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