import { useEffect, useState, useRef } from 'react';
import IEndPointPosts from '../../interface/EndPointPosts';
import IPost from '../../interface/Post';
import Post from './Post';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import EditPost from './Post/EditPost';
import DeletePost from './Post/DeletePost.tsx';

function Posts() {

   const [researchPosts, setResearchPosts] = useState<undefined | IEndPointPosts>();
   const [nextPosts, setNextPosts] = useState<string | null>();
   const [posts, setPosts] = useState<IPost[]>([]);

   const isPostSelect = useSelector((state: RootState) => state.postOption);

   useEffect(() => {
      catchPostsInfo();
   }, []);

   useEffect(() => {

      if (!nextPosts) return;

      const intersectionObserver = new IntersectionObserver((entries) => {
         if (entries.some((entry) => entry.isIntersecting)) {
            catchPostsInfo();
         }
      });

      const posts = document.querySelectorAll('#post');
      const lastPost = posts[posts.length - 1];

      intersectionObserver.observe(lastPost);
      return () => intersectionObserver.disconnect();
   }, [nextPosts]);


   const catchPostsInfo = async () => {

      if (nextPosts) {
         axios.get(nextPosts)
            .then(res => res.data)
            .then(res => {
               const response = res as IEndPointPosts;
               setNextPosts(response.next);
               setPosts(posts => [...posts, ...response.results]);
            })
            .catch(err => console.log(err));
         return;
      }

      axios.get('https://dev.codeleap.co.uk/careers/')
         .then(res => res.data)
         .then(res => {
            const response = res as IEndPointPosts;
            setNextPosts(response.next);
            setPosts(response.results);
         })
         .catch(err => console.log(err));
   };

   const postsMock: IPost[] = [
      {
         id: 1,
         username: '@Vítor',
         created_datetime: new Date().toLocaleDateString('en-GB'),
         title: 'My First Post at CodeLeap Network!',
         content: `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
   
         Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`
      },
      {
         id: 2,
         username: '@Vini',
         created_datetime: new Date().toLocaleDateString('en-GB'),
         title: 'My Second Post at CodeLeap Network!',
         content: `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
   
         Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`
      },
      {
         id: 3,
         username: '@Vítor',
         created_datetime: new Date().toLocaleDateString('en-GB'),
         title: 'My Third Post at CodeLeap Network!',
         content: `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
   
         Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`
      },
   ];

   return <div className='grid gap-6 mt-6'>
      {postsMock?.map(postData =>
         <Post key={postData.id} {...postData} />
      )}
      {isPostSelect.editingPost ? <EditPost /> : <></>}
      {isPostSelect.deletingPost ? <DeletePost /> : <></>}
   </div>;
}

export default Posts;