import Button from '../../components/Inputs/Button';
import TextField from '../../components/Inputs/TextField';
import Box from '../../components/Layout/Box';
import Text from '../../components/Typography/Text';
import Title from '../../components/Typography/Title';

function Signup() {

   return <Box className=' 
   items-end
   w-[500px]
   '>
      <Title Tag='h2' className='mb-6'>
         Welcome to CodeLeap network!
      </Title>
      <Text className='mb-2'>
         Please enter your username
      </Text>
      <TextField type='text' placeholder='John Doe' />
      <Button className='
         bg-blue text-white
         mt-4
         justify-self-end
      '>
         ENTER
      </Button>

   </Box>;
}

export default Signup;