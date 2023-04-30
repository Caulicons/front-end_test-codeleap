function Button({ children, className, ...props }: React.ComponentProps<'button'>) {

   return <button className={`
      w-[120px] h-[33px]
      rounded-small 
      text-base font-bold
      ${className}
   `}
   {...props}
   >
      {children}
   </button>;
}

export default Button;  