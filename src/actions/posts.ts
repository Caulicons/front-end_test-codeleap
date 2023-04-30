import axios from 'axios';
import IEndPointPosts from '../interface/EndPointPosts';

function catchPost() {

   const posts = axios.get('https://dev.codeleap.co.uk/careers/')
      .then(res => res.data)
      .then(res => res as IEndPointPosts)
      .catch(err => console.log(err))
      .finally(() => console.log('catchPost Finished.'));

   return posts;
}

export default catchPost;