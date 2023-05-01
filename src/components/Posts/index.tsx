import { useEffect, useState } from 'react';
import IEndPointPosts from '../../interface/EndPointPosts';
import Post from './Post';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import EditPost from './Post/EditPost';
import DeletePost from './Post/DeletePost.tsx';
import { addPosts } from '../../redux/Slices/posts';

function Posts() {

   const [nextPosts, setNextPosts] = useState<string | null>();
   const posts = useSelector((state: RootState) => state.postsStorage.posts);
   const isPostSelect = useSelector((state: RootState) => state.postOption);
   const dispatch = useDispatch();

   useEffect(() => {
      getPostsInfo();
   }, []);

   useEffect(() => {

      if (!nextPosts) return;

      const intersectionObserver = new IntersectionObserver((entries) => {
         if (entries.some((entry) => entry.isIntersecting)) {
            getPostsInfo();
         }
      });

      const posts = document.querySelectorAll('#post');
      const lastPost = posts[posts.length - 1];

      intersectionObserver.observe(lastPost);
      return () => intersectionObserver.disconnect();
   }, [nextPosts]);


   const getPostsInfo = async () => {

      if (nextPosts) {
         axios.get(nextPosts)
            .then(res => res.data)
            .then(res => {
               const response = res as IEndPointPosts;
               setNextPosts(response.next);
               dispatch(addPosts(response.results));
            })
            .catch(err => console.log(err));
         return;
      }

      axios.get('https://dev.codeleap.co.uk/careers/')
         .then(res => res.data)
         .then(res => {
            const response = res as IEndPointPosts;
            setNextPosts(response.next);
            dispatch(addPosts(response.results));
         })
         .catch(err => console.log(err));
   };

   return <section className='grid gap-6 mt-6'>
      {posts?.map(postData =>
         <Post key={postData.id} {...postData} />
      )}
      {isPostSelect.editingPost ? <EditPost /> : <></>}
      {isPostSelect.deletingPost ? <DeletePost /> : <></>}
   </section>;
}

export default Posts;