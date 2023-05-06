import { ReactNode } from 'react';
import Text from '../Typography/Text';
import Button from '../Inputs/Button';
import useCreatePost from '../../actions/httpRequestsHooks/createPost';
import useEditPost from '../../actions/httpRequestsHooks/editPost';
import { useForm } from 'react-hook-form';

interface IProps {
   whatToDO: 'edit' | 'create';
   CustomButton?: ReactNode;
}

const PostForm = ({ whatToDO, CustomButton: CustomButton }: IProps) => {
   const {
      handleSubmit,
      register,
      formState: { errors },
      getValues,
      watch,
      resetField,
   } = useForm({
      defaultValues: {
         postTitle: '',
         postContent: '',
      },
   });
   const editPost = useEditPost();
   const createPost = useCreatePost();
   const contentLength = watch('postContent').length;

   const onSubmit = () => {
      const newPost = {
         title: getValues('postTitle'),
         content: getValues('postContent'),
      };

      if (whatToDO === 'edit') {
         editPost(newPost);
      }

      if (whatToDO === 'create') {
         createPost(newPost);
      }

      resetField('postContent');
      resetField('postTitle');
   };

   return (
      <form className="grid h-auto" onSubmit={handleSubmit(onSubmit)}>
         <Text as="label" className="mb-2">
            Title
         </Text>
         <input
            className="mb-6 w-full 
            rounded-small border border-solid border-borderColor 
            px-[11px] py-[8px]"
            placeholder="Hello world"
            maxLength={51}
            {...register('postTitle', {
               required: '❌ It must not be empty.',
               maxLength: {
                  value: 72,
                  message: '❌ It must not have more than 72 characters.',
               },
            })}
         />
         <Text
            role="alert"
            className={'relative top-[-15px] font-light duration-500'}
         >
            {errors.postTitle?.message}
         </Text>
         <Text as="label" className="mb-2">
            Content
         </Text>
         <textarea
            className="
            mb-6 h-full
            min-h-[81px] w-full rounded-small border 
            border-solid border-borderColor p-12 px-[11px] py-[8px]
         "
            maxLength={281}
            placeholder="Content here"
            {...register('postContent', {
               required: '❌ It must not be empty.',
               maxLength: {
                  value: 280,
                  message: '❌ It must not have more than 280 characters.',
               },
            })}
         ></textarea>
         <span
            className={`
         relative top-[-21px] mr-4 flex 
         justify-end text-[12px] font-extralight text-gray 
         ${contentLength >= 280 ? 'text-red' : ''}
         `}
         >
            {contentLength}
         </span>
         <Text
            role="alert"
            className={'relative top-[-15px] font-light duration-500'}
         >
            {errors.postContent?.message}
         </Text>
         {CustomButton ? (
            CustomButton
         ) : (
            <Button
               className="
            mt-4 justify-self-end
            bg-blue text-white
            duration-500 hover:bg-blueHover
         "
            >
               CREATE
            </Button>
         )}
      </form>
   );
};

export default PostForm;
