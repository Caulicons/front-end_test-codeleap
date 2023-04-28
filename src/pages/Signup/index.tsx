import Button from '../../components/Inputs/Button';
import TextField from '../../components/Inputs/TextField';
import Input from '../../components/Inputs/TextField';
import Box from '../../components/Layout/Box';
import Text from '../../components/Typography/Text';
import Title from '../../components/Typography/Title';

function Signup() {

   return <Box className='
   flex flex-col 
   w-[500px]
   '>
      <Title Tag='h2' className='mb-6'>
         Welcome to CodeLeap network!
      </Title>
      <Text className='mb-2'>
         Please enter your username
      </Text>
      <TextField type='text' placeholder='John Doe' />

      <div className='w-full flex justify-end'>
         <Button className='
         bg-blue text-white
         mt-4
      '>
            ENTER
         </Button>
      </div>
   </Box>;
}

export default Signup;