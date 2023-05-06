import Button from '../../../Inputs/Button';
import Box from '../../../Layout/Box';
import Title from '../../../Typography/Title';
import { useState } from 'react';
import useDeletePost from '../../../../actions/httpRequestsHooks/deletePost';
import usePostOptionsPopUp from '../../../../actions/hooks/handlePostOptionsPopUp';

function DeletePost() {
   const deletePoster = useDeletePost();
   const deletePostPopUp = usePostOptionsPopUp('deletePost');
   const [delayClickedSubmitButton, setDelayClickedSubmitButton] =
      useState<boolean>(false);

   const handleDelayClicked = () => {
      setDelayClickedSubmitButton(true);
      setTimeout(() => delayClickedSubmitButton, 700);
   };

   const deletePost = () => {
      handleDelayClicked();
      deletePoster();
   };

   return (
      <div
         className="
         fixed left-0 top-0 flex h-screen w-full
          items-center justify-center 
          bg-gray bg-opacity-60 
   "
      >
         <Box className="w-[660px]">
            <Title className="mb-10">
               Are you sure you want to delete this item?
            </Title>
            <div className="flex justify-end gap-4">
               <Button
                  className="border border-solid  border-gray duration-500 hover:bg-grayHover"
                  onClick={() => deletePostPopUp()}
               >
                  Cancel
               </Button>
               <Button
                  className="bg-red text-white duration-500 hover:bg-redHover"
                  onClick={deletePost}
                  disabled={delayClickedSubmitButton}
               >
                  Delete
               </Button>
            </div>
         </Box>
      </div>
   );
}

export default DeletePost;
