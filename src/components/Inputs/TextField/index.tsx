function TextField({ children, className, ...props }: React.ComponentProps<'input'>) {

   return <input className={`
      w-full 
      border border-solid border-borderColor rounded-small 
      py-[8px] px-[11px]
      ${className}
   `}
   
   {...props}
   >
      {children}
   </input>;
}

export default TextField;  