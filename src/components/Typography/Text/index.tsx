type textAllowed = 'p' | 'label'


interface ITextProps extends React.HTMLProps<HTMLParagraphElement | HTMLLabelElement> {
   tag?: textAllowed;
};

function Text({ children, className, tag }: ITextProps) {
   const Tag = tag ? tag : 'p';

   return <Tag className={`
      ${className}
   `}>
      {children}
   </Tag>;
}

export default Text;  