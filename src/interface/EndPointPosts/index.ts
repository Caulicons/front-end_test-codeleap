import IPost from '../Post';

interface IEndPointPosts {
   count: number,
   next: string,
   preview: string,
   results: IPost[]
}

export default IEndPointPosts;