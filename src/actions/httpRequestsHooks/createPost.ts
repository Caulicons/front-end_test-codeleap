import { useDispatch, useSelector } from 'react-redux';
import { useShowNotification } from '../hooks/showNotification';
import { RootState } from '../../redux/store';
import { addPostInStore } from '../../redux/Slices/postsSlice';
import codeleapHTTP from '../../http';
import newPost from '../../interface/NewPost';

const useCreatePost = () => {
   const username = useSelector((state: RootState) => state.user.username);
   const showNotification = useShowNotification();
   const dispatch = useDispatch();

   return async (newPostData: newPost) => {
      const handleNewPost = {
         username,
         ...newPostData,
      };

      return codeleapHTTP
         .post('', handleNewPost)
         .then((res) => {
            if (res.status === 201) {
               dispatch(addPostInStore(res.data));
               showNotification({
                  text: 'Post created successfully!',
                  type: 'success',
               });
               return true;
            }
         })
         .catch((err) => {
            console.log(err);
            showNotification({
               text: 'Unable to created post. Try again later.',
               type: 'failed',
            });
         });
   };
};

export default useCreatePost;
