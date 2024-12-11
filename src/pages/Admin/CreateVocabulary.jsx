import { toast } from "sonner";
import JPForm from "../../components/Form/JPForm";
import JPInput from "../../components/Form/JPInput";
import useUser from "../../hooks/useUser";
import {
  useAddVocMutation,
  useGetLessonQuery,
} from "../../redux/Features/Lesson/lessonApi";
import JPSelect from "../../components/Form/JPSelect";

const CreateVocabulary = () => {
  const currentUser = useUser();
  const { data: lessonData } = useGetLessonQuery(undefined);
  const [addedVoc] = useAddVocMutation();

  const handleCreate = async (data) => {
    const toastId = toast.loading("Loading..");

    const newVoc = {
      word: data?.word,
      pronunciation: data?.pronunciation,
      whentoSay: data?.whenToSay,
      lessonNo: Number(data?.lessonNumber),
      adminEmail: currentUser?.email,
    };

    console.log(newVoc);

    try {
      const res = await addedVoc(newVoc);

      console.log(res);
      if (res?.data) {
        toast.success("New Lesson Added", { id: toastId, duration: 3000 });
      } else {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error, { id: toastId, duration: 3000 });
    }
  };

  const lessonNo = lessonData?.data?.reduce((acc, cur) => {
    acc.push({ name: cur?.lessonNumber });
    return acc;
  }, []);
  //   console.log(lessonNo);

  return (
    <div className="min-h-[81vh] flex flex-col items-center py-20">
      <h1 className="text-2xl text-center font-semibold">
        Create New Vocabulary
      </h1>
      <div className="w-[45%] mx-auto shadow-xl rounded-lg ">
        <JPForm onSubmit={handleCreate}>
          <div className="space-y-2">
            <JPInput name={"word"} label={"Word"} />
            <JPInput name={"pronunciation"} label={"Pronunciation"} />
            <JPInput name={"whenToSay"} label={"When to Say"} />
            <JPSelect items={lessonNo} label={"Lesson"} name={"lessonNumber"} />
            <button
              className="w-full bg-blue-600 py-[7px] rounded-md text-white font-semibold"
              type="submit"
            >
              Create Vocabulary
            </button>
          </div>
        </JPForm>
      </div>
    </div>
  );
};

export default CreateVocabulary;
