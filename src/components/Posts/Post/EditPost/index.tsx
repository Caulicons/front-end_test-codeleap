import { editPostPopUp } from '../../../../redux/Slices/selectedPostToEdit';
import Button from '../../../Inputs/Button';
import TextField from '../../../Inputs/TextField';
import Box from '../../../Layout/Box';
import Text from '../../../Typography/Text';
import Title from '../../../Typography/Title';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../../redux/store';
import axios from 'axios';
import { editPost } from '../../../../redux/Slices/posts';
interface IAlert {
   field?: string,
   type: string,
   infoError: string,
   isWrong: boolean,
}

function EditPost() {


   const [title, setTitle] = useState<string>('');
   const [content, setContent] = useState<string>('');
   const [trySubmit, setTrySubmit] = useState<boolean>();
   const [contentLenght, setContentLenght] = useState<number>(0);
   const [alertMessage, setAlertMessage] = useState<Array<IAlert>>([
      { field: 'title', type: 'isEmpty', infoError: 'It must not be empty.', isWrong: true },
      { field: 'title', type: 'isFull', infoError: 'It must not have more than fifty characters.', isWrong: false },
      { field: 'content', type: 'isEmpty', infoError: 'It must not be empty.', isWrong: true },
      { field: 'content', type: 'isFull', infoError: 'It must not have more than 280 characters.', isWrong: false },
   ]);
   const dispatch = useDispatch();
   const postSelected = useSelector((state: RootState) => state.postsStorage.postSelected);

   const formSubmitHandle = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault();

      if (!trySubmit) setTrySubmit(true);

      const hasSomeError = alertMessage.find(alert => alert.isWrong);

      if (!hasSomeError) {
         console.log(postSelected);
         const updatedPost = {
            title,
            content
         };

         axios.patch(`https://dev.codeleap.co.uk/careers/${postSelected?.id}/`, updatedPost)
            .then(res => {
               console.log(res);

               if (res.status === 200) {
                  dispatch(editPost(res.data));
                  dispatch(editPostPopUp());
               };
            })
            .catch(err => { console.log(err); });
      }
   };

   const formChangeHandle = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = evento.target.name;

      if (field === 'title') {
         setTitle(evento.target.value);
      }

      if (field === 'content') {
         setContentLenght(evento.target.value.length);
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
      if (input.value.length > 50 || input.value.length > 280) erros.isFull = true;

      setAlertMessage(alerts => alerts.map(alert => {
         if (!(alert.field === input.name)) return alert;

         if (alert.type === 'isEmpty') return { ...alert, isWrong: erros.isEmpty };
         if (alert.type === 'isFull') return { ...alert, isWrong: erros.isFull };
         return alert;
      }));
   };

   /*  return <form
       className="
        flex justify-center items-center h-screen w-full fixed
     bg-gray bg-opacity-60 
     top-0 left-0 
 "
       onSubmit={formSubmitHandle}
    >
       <Title Tag="h3" className='mb-6'>
          What’s on your mind?
       </Title>
       <Text className='mb-2'>
          Title
       </Text>
       <TextField
          type='text' placeholder='Hello world' className='mb-6' name='title'
          onChange={formChangeHandle}
       />
       {trySubmit ? alertMessage.map((alert, i) => {
          if (alert?.field === 'content' || !alert.isWrong) return;
 
          return <Text key={i} role='alert'
             className={`
             font-light duration-500 relative top-[-15px]
             `}>
             {'❌ ' + alert.infoError}
          </Text>;
       }) : ''}
       <Text htmlFor='textarea' className='mb-2'>
          Content
       </Text>
       <textarea maxLength={281} placeholder='Content here' name="content"
          className="
          w-full 
          border border-solid border-borderColor rounded-small 
          py-[8px] px-[11px] min-h-[81px] h-full mb-6
       "
          onChange={formChangeHandle}
       ></textarea>
       <div className={`
    flex justify-end font-extralight mr-4 
    relative top-[-21px] text-gray text-[12px] 
 ${contentLenght === 280 ? 'text-red' : ''}
    `}>{contentLenght}</div>
       {trySubmit ? alertMessage.map((alert, i) => {
          if (alert?.field === 'title' || !alert.isWrong) return;
 
          return <Text key={i} role='alert'
             className={`
             font-light mt-2 duration-500 relative top-[-15px]
             `}>
             {'❌ ' + alert.infoError}
          </Text>;
       }) : ''}
 
 
       <Button className='
    justify-self-end mt-4
       bg-blue text-white
       mt-4 hover:bg-blueHover duration-500
    '>CREATE</Button>
    </form>;
  */
   return <form
      className="
   flex justify-center items-center h-screen w-full fixed
    bg-gray bg-opacity-60 
    top-0 left-0 
   "

      onSubmit={formSubmitHandle}
   >
      <Box className='w-[660px]'>
         <Title >Edit item</Title>
         <Text className='mt-default'>
            Title
         </Text>
         <TextField
            name='title'
            type='text' placeholder='Hello world' className='mb-6'
            onChange={formChangeHandle} />
         {trySubmit ? alertMessage.map((alert, i) => {
            if (alert?.field === 'content' || !alert.isWrong) return;

            return <Text key={i} role='alert'
               className={`
             font-light duration-500 relative top-[-15px]
             `}>
               {'❌ ' + alert.infoError}
            </Text>;
         }) : ''}
         <Text className='mb-2'>
            Content
         </Text>
         <textarea name="content" maxLength={281} placeholder='Content here'
            className="
          w-full 
          border border-solid border-borderColor rounded-small 
          py-[8px] px-[11px] min-h-[81px] h-full mb-6
       "
            onChange={formChangeHandle}
         ></textarea>
         <div className={`
               flex justify-end font-extralight mr-4 
            relative top-[-21px] text-gray text-[12px] 
            ${contentLenght >= 280 ? 'text-red' : ''}
    `}>{contentLenght}</div>
         {trySubmit ? alertMessage.map((alert, i) => {
            if (alert?.field === 'title' || !alert.isWrong) return;

            return <Text key={i} role='alert'
               className={`
            font-light mt-2 duration-500 relative top-[-15px]
            `}>
               {'❌ ' + alert.infoError}
            </Text>;
         }) : ''}
         <div className='flex justify-end gap-4 mt-10'>
            <Button
               className='border border-solid  border-gray hover:bg-grayHover duration-500'
               onClick={() => dispatch(editPostPopUp())}>Cancel</Button>
            <Button
               className='bg-green hover:bg-greenHover duration-500 text-white'
               type='submit'
            >Save</Button>
         </div>
      </Box >
   </ form>;
}

export default EditPost;