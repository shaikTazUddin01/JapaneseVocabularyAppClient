/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import JPForm from "../../Form/JPForm";
import JPInput from "../../Form/JPInput";
import { toast } from "sonner";
import { useGetLessonQuery, useUpdateLessonMutation } from "../../../redux/Features/Lesson/lessonApi";
import { MdEditDocument } from "react-icons/md";

// import { toast } from "sonner";

const UpdateLesson = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateLesson] = useUpdateLessonMutation();
  const {data:userLesson}=useGetLessonQuery()

    // console.log("-->", userLesson);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async (data) => {
    const toastId = toast.loading("Loading..");
    try {
    
      const res = await updateLesson({id:item?.key, data:data});

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

  

  return (
    <>
      <Button color="primary" variant="outlined" onClick={showModal} className="flex items-center gap-1">
        <span className="text-xl">
        <MdEditDocument />
        </span>
        Update
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div>
          <h1 className="text-xl font-semibold text-center mt-2 -mb-2">
            Update Lesson
          </h1>
          <div className="shadow-lg w-[90%] mx-auto">
            <JPForm onSubmit={handleUpdate}>
              <div className="space-y-2">
                <div>
                  <label htmlFor="">Lesson Name</label>
                  <JPInput
                    name={"lessonName"}
                    label={"Lesson Name"}
                    type={"text"}
                    defaultFieldValue={item?.name}
                  />
                </div>
                <div>
                  <label htmlFor="">Lesson Number</label>
                  <JPInput
                    name={"lessonNumber"}
                    label={"Lesson Number"}
                    type={"number"}
                    defaultFieldValue={item?.number}
                  />
                  
                </div>
                <button
                  className="w-full bg-blue-600 py-[6px] rounded-md text-white font-semibold"
                  type="submit"
                >
                  Update Lesson
                </button>
              </div>
            </JPForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateLesson;
