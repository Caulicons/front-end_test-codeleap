function Button({
   children,
   className,
   ...props
}: React.ComponentProps<'button'>) {
   return (
      <button
         className={`
      text-base h-[33px]
      w-[120px] 
      rounded-small font-bold
      ${className}
   `}
         {...props}
      >
         {children}
      </button>
   );
}

export default Button;
