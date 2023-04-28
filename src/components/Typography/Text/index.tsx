function Text({ children, className }: React.ComponentProps<'p'>) {

   return <p className={`
      ${className}
   `}>
      {children}
   </p>;
}

export default Text;  