import React, { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../redux/store';
import Text from '../Typography/Text';
import TextField from '../Inputs/TextField';
import Button from '../Inputs/Button';
import { addPost, editPost } from '../../redux/Slices/posts';
import { editPostPopUp } from '../../redux/Slices/selectedPostToEdit';
import { hiddenNotification, showNotification } from '../../redux/Slices/notificationsPopUp';
import IAlert from '../../interface/Alert';

interface IProps {
   whatToDO: 'edit' | 'create',
   CustomButton?: React.ComponentProps<'button'> | React.ComponentProps<'div'>;
};

const PostForm = ({ whatToDO, CustomButton: CustomButton }: IProps) => {

   const [title, setTitle] = useState<string>('');
   const [content, setContent] = useState<string>('');
   const [trySubmit, setTrySubmit] = useState<boolean>();
   const [contentLength, setContentLength] = useState<number>(0);
   const [alertMessage, setAlertMessage] = useState<Array<IAlert>>([
      { field: 'postTitle', type: 'isEmpty', infoError: 'It must not be empty.', isWrong: true },
      { field: 'postTitle', type: 'isFull', infoError: 'It must not have more than eighty characters.', isWrong: false },
      { field: 'postContent', type: 'isEmpty', infoError: 'It must not be empty.', isWrong: true },
      { field: 'postContent', type: 'isFull', infoError: 'It must not have more than 280 characters.', isWrong: false },
   ]);
   const dispatch = useDispatch();
   const postSelected = useSelector((state: RootState) => state.postsStorage.postSelected);
   const userName = useSelector((state: RootState) => state.user.username);

   const formSubmitHandle = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault();

      if (!trySubmit) setTrySubmit(true);

      const hasSomeError = alertMessage.find(alert => alert.isWrong);

      if (!hasSomeError) {

         if (whatToDO === 'edit') {
            const updatedPost = {
               title,
               content
            };

            axios.patch(`https://dev.codeleap.co.uk/careers/${postSelected?.id}/`, updatedPost)
               .then(res => {

                  if (res.status === 200) {
                     setTrySubmit(false);
                     dispatch(editPost(res.data));
                     dispatch(editPostPopUp());
                     dispatch(showNotification({ text: 'Post edited successfully!', type: 'success' }));
                     setTimeout(() => dispatch(hiddenNotification()), 1500);
                  };
               })
               .catch(err => {

                  console.log(err);
                  dispatch(showNotification({ text: 'Unable to edit post. Try again later.', type: 'failed' }));
                  setTimeout(() => dispatch(hiddenNotification()), 1500);
               });
            return;
         }

         const newPost = {
            username: userName,
            title,
            content
         };

         axios.post('https://dev.codeleap.co.uk/careers/', newPost)
            .then(res => {

               if (res.status === 201) {
                  setTrySubmit(false);
                  dispatch(addPost(res.data));
                  dispatch(showNotification({ text: 'Post created successfully!', type: 'success' }));
                  setTimeout(() => dispatch(hiddenNotification()), 1500);
               };
            })
            .catch(err => {
               console.log(err);
               dispatch(showNotification({ text: 'Unable to created post. Try again later.', type: 'failed' }));
               setTimeout(() => dispatch(hiddenNotification()), 1500);
            });
         setTitle('');
         setContent('');
      }
   };

   const formChangeHandle = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = evento.target.name;

      if (field === 'postTitle') {
         setTitle(evento.target.value);
      }

      if (field === 'postContent') {
         setContentLength(evento.target.value.length);
         setContent(evento.target.value);
      }

      handleErros(evento.target);
   };

   const handleErros = (input: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
      const erros = {
         isEmpty: false,
         isFull: false,
      };

      if (input.value.length === 0) erros.isEmpty = true;
      if (input.name === 'postTitle' && input.value.length > 80) { erros.isFull = true; };
      if (input.name === 'postContent' && input.value.length > 280) { erros.isFull = true; };

      setAlertMessage(alerts => alerts.map(alert => {
         if (!(alert.field === input.name)) return alert;

         if (alert.type === 'isEmpty') return { ...alert, isWrong: erros.isEmpty };
         if (alert.type === 'isFull') return { ...alert, isWrong: erros.isFull };
         return alert;
      }));
   };

   return (<form className='grid h-auto' onSubmit={formSubmitHandle}>
      <Text htmlFor='postTitle' as='label' className='mb-2'>
         Title
      </Text>
      <TextField
         type='text'
         name='postTitle'
         id='postTitle'
         placeholder='Hello world'
         className='mb-6'
         value={title}
         maxLength={81}
         onChange={formChangeHandle}
      />
      {trySubmit ? alertMessage.map((alert, i) => {
         if (alert?.field === 'postContent' || !alert.isWrong) return;

         return <Text key={i} role='alert'
            className={`
         font-light duration-500 relative top-[-15px]
         `}>
            {'❌ ' + alert.infoError}
         </Text>;
      }) : ''}
      <Text as='label' htmlFor='postContent' className='mb-2'>
         Content
      </Text>
      <textarea
         maxLength={281}
         placeholder='Content here'
         name="postContent"
         className="
            w-full p-12
            border border-solid border-borderColor rounded-small 
            py-[8px] px-[11px] min-h-[81px] h-full mb-6
         "
         value={content}
         onChange={formChangeHandle}
      ></textarea>
      <div
         className={`
         flex justify-end font-extralight mr-4 
         relative top-[-21px] text-gray text-[12px] 
         ${contentLength >= 280 ? 'text-red' : ''}
         `}
      >{contentLength}
      </div>
      {trySubmit ? alertMessage.map((alert, i) => {
         if (alert?.field === 'postTitle' || !alert.isWrong) return;

         return <Text key={i} role='alert'
            className={`
         font-light mt-2 duration-500 relative top-[-15px]
         `}>
            {'❌ ' + alert.infoError}
         </Text>;
      }) : ''}
      {CustomButton ? CustomButton as ReactNode
         : <Button
            className='
            justify-self-end mt-4
            bg-blue text-white
            hover:bg-blueHover duration-500
         '
         >
            CREATE
         </Button>}
   </form>);
};

export default PostForm;