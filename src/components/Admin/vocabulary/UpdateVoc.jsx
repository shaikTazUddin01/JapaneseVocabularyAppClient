/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import JPForm from "../../Form/JPForm";
import JPInput from "../../Form/JPInput";
import { toast } from "sonner";
import {
  useGetLessonQuery,
  useUpdateVocMutation,
} from "../../../redux/Features/Lesson/lessonApi";
import { MdEditDocument } from "react-icons/md";
import JPSelect from "../../Form/JPSelect";
import useUser from "../../../hooks/useUser";

// import { toast } from "sonner";

const UpdateVoc = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UpdateVoc] = useUpdateVocMutation();

  const { data: userLesson } = useGetLessonQuery();
  const currentUser=useUser()
  // console.log("-->", item);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async (data) => {
    const toastId = toast.loading("Loading..");
    try {
      const updateData = {
        word: data?.word,
        pronunciation: data?.pronunciation,
        meaning: data?.meaning,
        whenToSay: data?.whenToSay,
        LessonNo: data?.lessonNumber,
        adminEmail:currentUser?.email
      };

      const res = await UpdateVoc({
        lessonId: item?.lessonId,
        vocId: item?.vocId,
        data: updateData,
      });

      if (res?.data) {
        toast.success("update success", { id: toastId, duration: 3000 });
        setIsModalOpen(false);
      } else {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error, { id: toastId, duration: 3000 });
    }
  };

  const lessonNo = userLesson?.data?.reduce((acc, cur) => {
    acc.push({ name: cur?.lessonNumber });
    return acc;
  }, []);

  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        onClick={showModal}
        className="flex items-center gap-1"
      >
        <span className="text-xl">
          <MdEditDocument />
        </span>
        Update
      </Button>

      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div>
          <h1 className="text-xl font-semibold text-center mt-2 -mb-2">
            Update Vocabulary
          </h1>
          <div className="shadow-lg w-[90%] mx-auto">
            <JPForm onSubmit={handleUpdate}>
              <div className="space-y-2">
                <div>
                  <label htmlFor="">Word</label>
                  <JPInput
                    name={"word"}
                    label={"Word"}
                    type={"text"}
                    defaultFieldValue={item?.word}
                  />
                </div>
                <div>
                  <label htmlFor="">Pronunciation</label>
                  <JPInput
                    name={"pronunciation"}
                    label={"Pronunciation"}
                    defaultFieldValue={item?.pronunciation}
                  />
                </div>
                <div>
                  <label htmlFor="">Meaning</label>
                  <JPInput
                    name={"meaning"}
                    label={"Meaning"}
                    defaultFieldValue={item?.meaning}
                  />
                </div>
                <div>
                  <label htmlFor="">When to Say</label>
                  <JPInput
                    name={"whenToSay"}
                    label={"When to Say"}
                    defaultFieldValue={item?.whenToSay}
                  />
                </div>
                <div>
                  <label htmlFor="">Lesson No</label>
                  {/* <JPInput
                    name={"lessonNumber"}
                    label={"lesson Number"}
                    defaultFieldValue={item?.lessonNumber}
                  /> */}

                  <JPSelect
                    items={lessonNo}
                    label={"Lesson"}
                    name={"lessonNumber"}
                    defaultFieldValue={item?.lessonNumber}
                  />
                </div>
                <button
                  className="w-full bg-blue-600 py-[6px] rounded-md text-white font-semibold"
                  type="submit"
                >
                  Update Vocabulary
                </button>
              </div>
            </JPForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateVoc;
