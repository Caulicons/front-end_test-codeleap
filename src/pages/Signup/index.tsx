import Button from '../../components/Inputs/Button';
import TextField from '../../components/Inputs/TextField';
import Box from '../../components/Layout/Box';
import Text from '../../components/Typography/Text';
import Title from '../../components/Typography/Title';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface IAlert {
   infoError: string,
   isWrong: boolean
}

function SignUp() {

   const [userName, setUserName] = useState<string>('');
   const [trySubmit, setTrySubmit] = useState<boolean>();
   const [alertMessage, setAlertMessage] = useState<Array<IAlert>>([
      { infoError: 'It must not be empty.', isWrong: true },
      { infoError: 'It must not have less than four characters. ', isWrong: true },
      { infoError: 'It must not have more than fifteen characters.', isWrong: false },
   ]);
   const [cookies, setCookies] = useCookies(['userName']);

   const navigateTo = useNavigate();

   useEffect(() => {
      if (cookies.userName) {
         navigateTo('/posts');
      };
   }, []);

   const formSubmitHandle = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault();

      if (!trySubmit) setTrySubmit(true);

      const hasSomeError = alertMessage.find(alert => alert.isWrong);

      if (!hasSomeError) {
         setCookies('userName', userName, { path: '/' });
         navigateTo('/posts');
      }
   };

   const formChangeHandle = (evento: string) => {

      setUserName(evento);
      handleErros(evento);
   };

   const handleErros = (input: string) => {

      const erros = {
         isEmpty: false,
         isMoreFifTeen: false,
         isLessFour: false
      };

      if (input.length === 0) erros.isEmpty = true;
      if (input.length < 4) erros.isLessFour = true;
      if (input.length > 15) erros.isMoreFifTeen = true;

      setAlertMessage(alert => [
         alert[0] = { ...alert[0], isWrong: erros.isEmpty },
         alert[1] = { ...alert[1], isWrong: erros.isLessFour },
         alert[2] = { ...alert[2], isWrong: erros.isMoreFifTeen }
      ]);
   };

   return <Box className=' 
   items-end
   w-[500px]
   '>
      <form onSubmit={formSubmitHandle}>
         <Title Tag='h2' className='mb-6'>
            Welcome to CodeLeap network!
         </Title>
         <Text tag='label' htmlFor="userName" className='mb-2' >
            Please enter your username
         </Text>
         <TextField
            id='userName' name="userName" value={userName} onChange={e => formChangeHandle(e.target.value)}
            type='text' placeholder='John Doe'
         />
         {trySubmit ? alertMessage.map((alert, i) => {
            return <Text key={i} role='alert'
               className={`
               font-light mt-2 duration-500
               `}>
               {alert.isWrong ? '❌ ' + alert.infoError : '👍 ' + alert.infoError}
            </Text>;
         }) : ''}

         <Button type='submit' className='
         bg-blue text-white
         mt-4 
      '>
            ENTER
         </Button>

      </form>
   </Box>;
}

export default SignUp;