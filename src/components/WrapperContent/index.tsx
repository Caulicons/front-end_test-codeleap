

function WrapperContent({children}: React.PropsWithChildren) {

   return <main className="
      w-screen h-screen bg-backgroundColor
      flex items-center justify-center 
      font-Roboto
   ">
      {children}
   </main>;
}

export default WrapperContent;  