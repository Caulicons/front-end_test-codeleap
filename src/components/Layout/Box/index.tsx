function Box({ children, className }: React.ComponentProps<'div'>) {

   return <div className={`
      grid
   bg-white p-default rounded-default max-w-800 m-[24px] ${className}
   `} >
      {children}
   </div>;
}

export default Box;