import { toast } from "sonner";
import JPForm from "../../components/Form/JPForm";
import JPInput from "../../components/Form/JPInput";
import useUser from "../../hooks/useUser";
import { useCreateTutorialMutation } from "../../redux/Features/Tutorial/tutorialApi";

const CreateTutorial = () => {
  const currentUser = useUser();
const[createNewTutorial]=useCreateTutorialMutation()

  const handleCreate = async (data) => {
    const toastId = toast.loading("creating..");

    const newTutorial = {
      videoLink:data?.tutorialLink,
      authId: currentUser?.userId,
    };

    try {
      const res = await createNewTutorial(newTutorial);
      if (res?.data) {
        toast.success("New tutorial Added", { id: toastId, duration: 3000 });
      } else {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error, { id: toastId, duration: 3000 });
    }
  };
  return (
    <div className="min-h-[81vh] flex flex-col items-center py-10 md:py-20">
      <h1 className="text-3xl mb-4 text-center font-semibold">Create New Lesson</h1>
      <div className="w-full md:w-[55%] lg:w-[45%] mx-auto shadow-xl rounded-lg bg-white">
        <JPForm onSubmit={handleCreate}>
          <div className="space-y-2">
            <label htmlFor="" className="text-[16px]">Tutorial Link :</label>
            <JPInput
              name={"tutorialLink"}
              label={"Tutorial Link"}
              type={"text"}
            />
            <button
              className="w-full bg-blue-600 py-2 rounded-md text-white font-semibold"
              type="submit"
            >
              Create Tutorial
            </button>
          </div>
        </JPForm>
      </div>
    </div>
  );
};

export default CreateTutorial;
