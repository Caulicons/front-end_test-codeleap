import { useDispatch } from 'react-redux';
import { hiddenNotification, showNotification } from '../../redux/Slices/notificationsSlice';
import { useCookies } from 'react-cookie';

type NotificationTypes = {
   type: 'welcome' | 'failed' | 'success' | '',
   text: string
}

const useShowNotification = () => {
   const dispatch = useDispatch();

   return (type: NotificationTypes, time?: number) => {

      dispatch(showNotification(type));
      setTimeout(() => dispatch(hiddenNotification()), time ? time : 1500);
   };
};

const useNotificationWelcome = () => {

   const showNotification = useShowNotification();
   const [cookies] = useCookies(['userName']);

   return () => {
      showNotification({ text: `${cookies.userName}`, type: 'welcome' });
   };
};

export {
   useShowNotification,
   useNotificationWelcome
};