import { deletePostPopUp } from '../../redux/Slices/handlePostOptionsSlice';
import { useDispatch } from 'react-redux';
import { editPostPopUp } from '../../redux/Slices/handlePostOptionsSlice';
import IPost from '../../interface/Post';
import { postSelectedInStore } from '../../redux/Slices/postsSlice';

type PopUpType = 'deletePost' | 'editPost';

const usePostOptionsPopUp = (popUpType: PopUpType) => {
   const handleInput = {
      editPost: () => editPostPopUp(),
      deletePost: () => deletePostPopUp(),
   };

   const dispatch = useDispatch();

   return (postData?: IPost) => {
      dispatch(handleInput[popUpType]());

      if (postData) dispatch(postSelectedInStore(postData));
      return;
   };
};

export default usePostOptionsPopUp;
