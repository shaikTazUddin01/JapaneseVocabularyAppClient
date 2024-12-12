import { toast } from "sonner";
import JPForm from "../../components/Form/JPForm";
import JPInput from "../../components/Form/JPInput";
import useUser from "../../hooks/useUser";
import { useCreateLessonMutation } from "../../redux/Features/Lesson/lessonApi";

const CreateLesson = () => {
  const currentUser = useUser();
const[createNewLesson]=useCreateLessonMutation()

  // console.log(currentUser);

  const handleCreate = async(data) => {
    const toastId = toast.loading("Loading..");

    const newLesson = {
      lessonName: data?.lessonName,
      lessonNumber: Number(data?.lessonNumber),
      authId: currentUser?.userId,
    };

    // console.log(newLesson);

    try {
      const res = await createNewLesson(newLesson);
      // console.log(res);
      if (res?.data) {
        toast.success("New Lesson Added", { id: toastId, duration: 3000 });
      } else {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error, { id: toastId, duration: 3000 });
    }
  };
  return (
    <div className="min-h-[81vh] flex flex-col items-center py-10 md:py-20">
      <h1 className="text-3xl text-center mb-3 font-bold text-gray-900">
        Create New Lesson
      </h1>
      <div className="w-full md:w-[55%] lg:w-[45%] mx-auto shadow-xl rounded-lg bg-white">
        <JPForm onSubmit={handleCreate}>
          <div className="space-y-2">
            <JPInput name={"lessonName"} label={"Lesson Name"} type={"text"} />
            <JPInput
              name={"lessonNumber"}
              label={"Lesson Number"}
              type={"number"}
            />
            <button
              className="w-full text-[16px] bg-blue-600 py-2 rounded-md text-white font-semibold"
              type="submit"
            >
              Create Lesson
            </button>
          </div>
        </JPForm>
      </div>
    </div>
  );
};

export default CreateLesson;
