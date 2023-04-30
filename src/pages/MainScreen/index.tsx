import CreatePoster from '../../components/CreaterPoster';
import Posts from '../../components/Posts';
import Title from '../../components/Typography/Title';

function MainScreen() {


   return <div className='
   h-full w-[800px]
   '>
      <Title className='
      text-white bg-blue py-[27px] px-[37px]
      '>
         CodeLeap NetWork
      </Title>
      <div className='
      bg-white p-default min-h-[calc(100vh-87px)]
      '>
         <CreatePoster />
         <Posts />
      </div>
   </div>;
}

export default MainScreen;