import IPost from '../../../../interface/Post';
import { editPostPopUp } from '../../../../redux/Slices/selectedPostToEdit';
import Button from '../../../Inputs/Button';
import TextField from '../../../Inputs/TextField';
import Box from '../../../Layout/Box';
import Text from '../../../Typography/Text';
import Title from '../../../Typography/Title';
import { useDispatch } from 'react-redux';


function EditPost() {

   const dispatch = useDispatch();

   return <div className="
   flex justify-center items-center h-screen w-full fixed
    bg-gray bg-opacity-60 
    top-0 left-0 
   "

   >
      <Box className='w-[660px]'>
         <Title >Edit item</Title>
         <Text className='mt-default'>
            Title
         </Text>
         <TextField type='text' placeholder='Hello world' className='mb-6' />
         <Text className='mb-2'>
            Content
         </Text>
         <TextField type='text' placeholder='Content here' className='h-[74px]' />
         <div className='flex justify-end gap-4 mt-10'>
            <Button className='border border-solid  border-gray hover:bg-grayHover duration-500'
               onClick={() => dispatch(editPostPopUp())}>Cancel</Button>
            <Button className='bg-green hover:bg-greenHover duration-500 text-white'>Save</Button>
         </div>
      </Box>
   </div>;
}

export default EditPost;