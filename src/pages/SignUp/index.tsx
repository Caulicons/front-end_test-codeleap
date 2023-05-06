import Button from '../../components/Inputs/Button';
import Box from '../../components/Layout/Box';
import Text from '../../components/Typography/Text';
import Title from '../../components/Typography/Title';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useVerifyUserRegister from '../../actions/hooks/verifyUserRegister';
import useRegisterUser from '../../actions/hooks/registerUser';
import TextField from '../../components/Inputs/TextField';

function SignUp() {
   const {
      handleSubmit,
      register,
      formState: { errors },
      getValues,
   } = useForm({
      defaultValues: {
         userNameInput: '',
      },
   });
   const verifyUseRegister = useVerifyUserRegister();
   const registerUser = useRegisterUser();

   useEffect(() => {
      verifyUseRegister('/posts');
   }, []);

   const onSubmit = () => {
      registerUser(getValues('userNameInput'));
   };

   return (
      <Box
         className=" 
         w-[500px]
         items-end
      "
      >
         <form onSubmit={handleSubmit(onSubmit)}>
            <Title Tag="h2" className="mb-6">
               Welcome to CodeLeap network!
            </Title>
            <Text as="label" htmlFor="userName" className="mb-2">
               Please enter your username
            </Text>
            <TextField
               maxLength={22}
               placeholder="John Doe"
               className="mb-4"
               {...register('userNameInput', {
                  minLength: {
                     value: 4,
                     message: '❌ It must not have less than four characters.',
                  },
                  maxLength: {
                     value: 21,
                     message: '❌ It must not have more than 21 characters.',
                  },
                  required: '❌ It must not be empty.',
               })}
            />
            <Text
               role="alert"
               className={`
                font-light duration-500
               `}
            >
               {errors.userNameInput?.message}
            </Text>
            <Button
               type="submit"
               className="
                mt-4 bg-blue
                  text-white 
            "
            >
               ENTER
            </Button>
         </form>
      </Box>
   );
}

export default SignUp;
