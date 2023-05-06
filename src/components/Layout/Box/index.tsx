function Box({ children, className }: React.ComponentProps<'div'>) {
   return (
      <div
         className={`
      m-[24px]
      grid max-w-800 rounded-default bg-white p-default ${className}
   `}
      >
         {children}
      </div>
   );
}

export default Box;
