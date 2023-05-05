import Button from '../../../Inputs/Button';
import Box from '../../../Layout/Box';
import Title from '../../../Typography/Title';
import PostForm from '../../../PostForm';
import usePostOptionsPopUp from '../../../../actions/hooks/handlePostOptionsPopUp';

function EditPost() {

   const toggleEditPostPopUp = usePostOptionsPopUp('editPost');;

   return <div
      className="
         flex justify-center items-center h-screen w-full 
         fixed top-0 left-0 
      bg-gray bg-opacity-80
   "
   >
      <Box className='w-[660px]'>
         <Title >Edit item</Title>
         <PostForm
            whatToDO='edit'
            CustomButton={
               <div className='flex justify-end gap-4 mt-10'>
                  <Button
                     className='border border-solid  border-gray hover:bg-grayHover duration-500'
                     type='reset'
                     onClick={() => { toggleEditPostPopUp(); }}>Cancel</Button>
                  <Button
                     className='bg-green hover:bg-greenHover duration-500 text-white'
                     type='submit'
                  >Save</Button>
               </div>
            }
         />
      </Box >
   </ div>;
}

export default EditPost;