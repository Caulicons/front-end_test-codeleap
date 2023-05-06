type textAllowed = 'p' | 'label';
interface ITextProps
   extends React.HTMLProps<HTMLParagraphElement | HTMLLabelElement> {
   as?: textAllowed;
}

function Text({ children, className, as }: ITextProps) {
   const Tag = as ? as : 'p';

   return (
      <Tag
         className={` break-words
      ${className}
   `}
      >
         {children}
      </Tag>
   );
}

export default Text;
