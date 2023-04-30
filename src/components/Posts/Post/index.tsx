import IPost from '../../../interface/Post';
import Title from '../../Typography/Title';
import { ReactComponent as EditIcon } from '../../../assets/editIcon.svg';
import { ReactComponent as TrashIcon } from '../../../assets/trashIcon.svg';
import Text from '../../Typography/Text';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../../../redux/Slices/selectedPostToEdit';

function Post(postData: IPost) {

   const dispatch = useDispatch();

   const userInfo = {
      username: '@Vítor'
   };

   const formattingDate = (postDate: string): string => {
      const currentTime = Date.now();
      const postTime = new Date(postDate).getTime();
      const timeDiffInSeconds = Math.floor((currentTime - postTime) / 1000);

      const secondsInMinute = 60;
      const secondsInHour = 3600;
      const secondsInDay = 86400;

      if (timeDiffInSeconds < secondsInMinute) {
         return `${timeDiffInSeconds} seconds ago`;
      } else if (timeDiffInSeconds >= secondsInMinute && timeDiffInSeconds < secondsInHour) {
         const timeDiffInMinutes = Math.floor(timeDiffInSeconds / secondsInMinute);
         return `${timeDiffInMinutes} minutes ago`;
      } else if (timeDiffInSeconds >= secondsInHour && timeDiffInSeconds < secondsInDay) {
         const timeDiffInHours = Math.floor(timeDiffInSeconds / secondsInHour);
         return `${timeDiffInHours} hours ago`;
      } else {
         return `Posted on ${new Date(postDate).toLocaleDateString('en-GB')}`;
      };
   };

   return <div
      className="
         h-auto min-w-fit max-w-[752px] 
      "
      id='post'
   >
      <div className='
        flex justify-between p-default bg-blue text-white rounded-t-default
      '>
         <Title className='break-all' Tag='h3'>{postData.title}</Title>
         <div className='
         flex flex-wrap  w-[90px] break-words pocket:justify-end sm:justify-between
         '>
            {postData.username === userInfo.username ?
               <>
                  <TrashIcon onClick={() => dispatch(deletePost(postData))} className='p-1 hover:stroke-red' fill='blue' width={40} height={40} cursor='pointer' />
                  <EditIcon onClick={() => dispatch(editPost(postData))} className='p-1 hover:stroke-green' width={40} height={40} cursor='pointer' />
               </>
               :
               <></>
            }
         </div>
      </div>
      <div className='flex flex-col gap-[16px] p-default 
      border rounded-b-small border-solid border-borderColor
      
      '>
         <div className='flex justify-between text-gray'>
            <Text className='font-bold'>{postData.username}</Text>
            <Text>{formattingDate(postData.created_datetime)}</Text>
         </div>
         <Text className='break-words leading-[21px] text-[18px]'>
            {postData.content}
         </Text>
      </div>
   </div>;
}

export default Post;