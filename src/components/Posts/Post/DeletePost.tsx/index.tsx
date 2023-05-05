import Button from '../../../Inputs/Button';
import Box from '../../../Layout/Box';
import Title from '../../../Typography/Title';
import { useState } from 'react';
import useDeletePost from '../../../../actions/httpRequestsHooks/deletePost';
import usePostOptionsPopUp from '../../../../actions/hooks/handlePostOptionsPopUp';

function DeletePost() {

   const deletePoster = useDeletePost();
   const deletePostPopUp = usePostOptionsPopUp('deletePost');
   const [delayClickedSubmitButton, setDelayClickedSubmitButton] = useState<boolean>(false);

   const handleDelayClicked = () => {
      setDelayClickedSubmitButton(true);
      setTimeout(() => delayClickedSubmitButton, 700);
   };

   const deletePost = () => {

      handleDelayClicked();
      deletePoster();
   };

   return <div
      className="
         flex justify-center items-center h-screen w-full fixed
          bg-gray bg-opacity-60 
          top-0 left-0 
   "
   >
      <Box className='w-[660px]'>
         <Title className='mb-10'>Are you sure you want to delete this item?</Title>
         <div className='flex justify-end gap-4'>
            <Button
               className='border border-solid  border-gray hover:bg-grayHover duration-500'
               onClick={() => deletePostPopUp()}>Cancel</Button>
            <Button
               className='bg-red hover:bg-redHover duration-500 text-white'
               onClick={deletePost}
               disabled={delayClickedSubmitButton}
            >Delete</Button>
         </div>
      </Box>
   </div>;
}

export default DeletePost;