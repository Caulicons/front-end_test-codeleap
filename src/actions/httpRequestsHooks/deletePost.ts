import { useDispatch, useSelector } from 'react-redux';
import { useShowNotification } from '../hooks/showNotification.ts';
import { RootState } from '../../redux/store.ts';
import { deletePostPopUp } from '../../redux/Slices/handlePostOptionsSlice.ts';
import IPost from '../../interface/Post/index.ts';
import { deletePostInStore as deletePostInStore } from '../../redux/Slices/postsSlice.ts';
import codeleapHTTP from '../../http/index.ts';

const useDeletePost = () => {
   const dispatch = useDispatch();
   const showNotification = useShowNotification();
   const postToDelete = useSelector(
      (state: RootState) => state.postsStorage.postSelected
   ) as IPost;

   return async () => {
      return codeleapHTTP
         .delete(`${postToDelete?.id}/`)
         .then((res) => {
            if (res.status === 204) {
               dispatch(deletePostPopUp());
               dispatch(deletePostInStore(postToDelete));
               showNotification({
                  text: 'Post deleted successfully!',
                  type: 'success',
               });
            }
         })
         .catch((err) => {
            console.log(err);
            showNotification({
               text: 'Unable to deleted post. Try again later.',
               type: 'failed',
            });
         });
   };
};

export default useDeletePost;
