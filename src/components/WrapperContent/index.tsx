import { Outlet } from 'react-router-dom';

function WrapperContent() {
   return (
      <main
         className="
      flex h-full min-h-screen w-full
      items-center justify-center bg-backgroundColor 
      font-Roboto
   "
      >
         <Outlet />
      </main>
   );
}

export default WrapperContent;
