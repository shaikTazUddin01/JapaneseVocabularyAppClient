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
      whenToSay: data?.whenToSay,
      lessonNo: Number(data?.lessonNumber),
      adminEmail: currentUser?.email,
      meaning:data?.meaning
    };

    try {
      const res = await addedVoc(newVoc);

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
    <div className="min-h-[81vh] flex flex-col items-center py-10 ">
      <h1 className="text-3xl text-center font-semibold mb-4">
        Create New Vocabulary
      </h1>
      <div className="w-full md:w-[55%] lg:w-[45%] mx-auto shadow-xl rounded-lg border mt-1 bg-white">
        <JPForm onSubmit={handleCreate}>
          <div className="space-y-2">
            <JPInput name={"word"} label={"Word"} />
            <JPInput name={"pronunciation"} label={"Pronunciation"} />
            <JPInput name={"meaning"} label={"Meaning"} />
            <JPInput name={"whenToSay"} label={"When to Say"} />
            <JPSelect items={lessonNo} label={"Lesson"} name={"lessonNumber"} />
            <button
              className="w-full text-[16px] bg-blue-600 py-2 rounded-md text-white font-semibold"
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
