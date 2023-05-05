import { useEffect } from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import EditPost from './Post/EditPost';
import DeletePost from './Post/DeletePost.tsx';
import useGetPosts from '../../actions/httpRequestsHooks/getPosts.ts';

function Posts() {

   const getPostInfo = useGetPosts();
   const isPostSelect = useSelector((state: RootState) => state.postOption);
   const posts = useSelector((state: RootState) => state.postsStorage.posts);
   const nextPostStore = useSelector((state: RootState) => state.postsStorage.nextPostURL);

   useEffect(() => {

      if (!nextPostStore) {
         getPostInfo();
         return;
      };

      const intersectionObserver = new IntersectionObserver((entries) => {
         if (entries.some((entry) => entry.isIntersecting)) {
            getPostInfo(nextPostStore);
            return;
         }
      });

      const posts = document.querySelectorAll('#post');
      const lastPost = posts[posts.length - 1];

      intersectionObserver.observe(lastPost);
      return () => intersectionObserver.disconnect();
   }, [nextPostStore]);


   return <section className='grid gap-6 mt-6'>
      {posts?.map(postData =>
         <Post key={postData.id} {...postData} />
      )}
      {isPostSelect.editingPost ? <EditPost /> : <></>}
      {isPostSelect.deletingPost ? <DeletePost /> : <></>}
   </section>;
}

export default Posts;