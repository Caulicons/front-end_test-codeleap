import React from 'react';

const TextField = React.forwardRef<
   HTMLInputElement,
   React.ComponentProps<'input'> & { className?: string }
>(({ className, ...props }, ref) => {
   return (
      <input
         ref={ref}
         className={`
      w-full 
      rounded-small border border-solid border-borderColor 
      px-[11px] py-[8px] 
      ${className}
   `}
         {...props}
      />
   );
});

TextField.displayName = 'TextField';

export default TextField;
