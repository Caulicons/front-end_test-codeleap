import Button from '../../../Inputs/Button';
import Box from '../../../Layout/Box';
import Title from '../../../Typography/Title';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostPopUp } from '../../../../redux/Slices/selectedPostToEdit';
import axios from 'axios';
import { RootState } from '../../../../redux/store';
import { deletePost as deletePostInStore } from '../../../../redux/Slices/posts';
import IPost from '../../../../interface/Post';


function DeletePost() {
   const postToDelete = useSelector((state: RootState) => state.postsStorage.postSelected) as IPost;
   const dispatch = useDispatch();

   const deletePost = () => {

      axios.delete(`https://dev.codeleap.co.uk/careers/${postToDelete?.id}/`)
         .then(res => {
            console.log(res);
            if (res.status === 204) {

               dispatch(deletePostPopUp());
               dispatch(deletePostInStore(postToDelete));
            }
         })
         .catch(err => { console.log(err); });
   };

   return <div className="
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
               onClick={() => dispatch(deletePostPopUp())}>Cancel</Button>
            <Button
               className='bg-red hover:bg-redHover duration-500 text-white'
               onClick={deletePost}
            >Delete</Button>
         </div>
      </Box>
   </div>;
}

export default DeletePost;