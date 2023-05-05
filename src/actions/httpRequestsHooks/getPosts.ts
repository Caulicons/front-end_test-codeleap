import IEndPointPosts from '../../interface/EndPointPosts';
import { useDispatch } from 'react-redux';
import { addPostsInStore, nextPostsURLStore } from '../../redux/Slices/postsSlice';
import codeleapHTTP from '../../http';

const useGetPosts = () => {

   const dispatch = useDispatch();

   return async (nextPostsURL?: string) => {

      return codeleapHTTP.get(nextPostsURL || '')
         .then(res => res.data)
         .then(res => {
            const response = res as IEndPointPosts;
            dispatch(addPostsInStore(response.results));
            dispatch(nextPostsURLStore(response.next));
            return response.next;
         })
         .catch(err => console.log(err));
   };


};;

export default useGetPosts;