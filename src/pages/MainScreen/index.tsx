import CreatePoster from '../../components/CreaterPoster';
import Posts from '../../components/Posts';
import Title from '../../components/Typography/Title';
import { ReactComponent as ExitIcon } from '../../assets/logoutIcon.svg';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/Slices/user';


function MainScreen() {
   const [cookies, setCookies] = useCookies(['userName']);
   const userName = cookies.userName;
   const navigateTo = useNavigate();
   const dispatch = useDispatch();
   dispatch(addUser(userName));
   useEffect(() => {
      if (!cookies.userName) return navigateTo('/');
   }, [cookies]);

   const logOutUSer = () => {
      setCookies('userName', '', { path: '/' });
      navigateTo('/');
   };

   return <div className='
   h-full w-[800px]
   '>
      <div className='flex justify-between text-white bg-blue py-[27px] px-[37px]'>
         <Title >
            CodeLeap NetWork
         </Title>
         <ExitIcon
            cursor='pointer' width={'40px'} height={'40px'} className='fill-white'
            onClick={logOutUSer}
         />
      </div>
      <div className='
      bg-white p-default min-h-[calc(100vh-87px)]
      '>
         <CreatePoster />
         <Posts />
      </div>
   </div>;
}

export default MainScreen;