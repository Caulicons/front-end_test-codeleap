import { Outlet } from 'react-router-dom';

function WrapperContent() {

   return <main className="
      w-full min-h-screen h-full bg-backgroundColor
      flex items-center justify-center 
      font-Roboto
   ">
      <Outlet />
   </main>;
}

export default WrapperContent;  