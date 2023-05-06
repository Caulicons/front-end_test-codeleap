import Button from '../../../Inputs/Button';
import Box from '../../../Layout/Box';
import Title from '../../../Typography/Title';
import PostForm from '../../../PostForm';
import usePostOptionsPopUp from '../../../../actions/hooks/handlePostOptionsPopUp';

function EditPost() {
   const toggleEditPostPopUp = usePostOptionsPopUp('editPost');

   return (
      <div
         className="
         fixed left-0 top-0 flex h-screen 
         w-full items-center justify-center 
      bg-gray bg-opacity-80
   "
      >
         <Box className="w-[660px]">
            <Title>Edit item</Title>
            <PostForm
               whatToDO="edit"
               CustomButton={
                  <div className="mt-10 flex justify-end gap-4">
                     <Button
                        className="border border-solid  border-gray duration-500 hover:bg-grayHover"
                        type="reset"
                        onClick={() => {
                           toggleEditPostPopUp();
                        }}
                     >
                        Cancel
                     </Button>
                     <Button
                        className="bg-green text-white duration-500 hover:bg-greenHover"
                        type="submit"
                     >
                        Save
                     </Button>
                  </div>
               }
            />
         </Box>
      </div>
   );
}

export default EditPost;
