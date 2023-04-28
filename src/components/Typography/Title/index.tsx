interface TitleProps extends React.ComponentProps<'div'> {
   Tag?: 'p' | 'h1' |'h2' | 'h3' | 'h4'  | 'h5' | 'h6'
}

function Title({ children, Tag, className }: TitleProps) {
   const TagElement = Tag ? Tag : 'p';

   return <TagElement className={`
    font-bold text-titleFontSize 
    ${className}
   `}>
      {children}
   </TagElement>;
}

export default Title;  