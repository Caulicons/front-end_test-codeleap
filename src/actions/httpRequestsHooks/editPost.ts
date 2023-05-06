import { useDispatch, useSelector } from 'react-redux';
import { useShowNotification } from '../hooks/showNotification';
import { RootState } from '../../redux/store';
import { editPostInStore } from '../../redux/Slices/postsSlice';
import { editPostPopUp } from '../../redux/Slices/handlePostOptionsSlice';
import codeleapHTTP from '../../http';
import newPost from '../../interface/NewPost';

const useEditPost = () => {
   const postSelected = useSelector(
      (state: RootState) => state.postsStorage.postSelected
   );
   const showNotification = useShowNotification();
   const dispatch = useDispatch();

   return async (postToEdit: newPost) => {
      return codeleapHTTP
         .patch(`${postSelected?.id}/`, postToEdit)
         .then((res) => {
            if (res.status === 200) {
               dispatch(editPostInStore(res.data));
               dispatch(editPostPopUp());
               showNotification({
                  text: 'Post edited successfully!',
                  type: 'success',
               });
            }
         })
         .catch((err) => {
            console.log(err);
            showNotification({
               text: 'Unable to edit post. Try again later.',
               type: 'failed',
            });
         });
   };
};

export default useEditPost;
