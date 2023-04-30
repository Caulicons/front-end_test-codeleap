import Button from '../Inputs/Button';
import TextField from '../Inputs/TextField';
import Text from '../Typography/Text';
import Title from '../Typography/Title';

function CreatePoster() {
   return <div className="
   grid h-auto 
   border border-solid border-borderColor rounded-small
   p-default
   ">
      <Title Tag="h3" className='mb-6'>
      What’s on your mind?
      </Title>
      <Text className='mb-2'>
         Title
      </Text>
      <TextField type='text' placeholder='Hello world' className='mb-6'/>
      <Text className='mb-2'>
         Content
      </Text>
      <TextField type='text' placeholder='Content here' className='h-[74px] mb-6'/>
      <Button className='
      justify-self-end mt-4
         bg-blue text-white
         mt-4 hover:bg-blueHover duration-500
      '>CREATE</Button>
   </div>;
}

export default CreatePoster;