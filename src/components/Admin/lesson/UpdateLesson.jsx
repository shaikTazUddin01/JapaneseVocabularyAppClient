/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import JPForm from "../../Form/JPForm";
import JPInput from "../../Form/JPInput";
import { toast } from "sonner";
import { useUpdateLessonMutation } from "../../../redux/Features/Lesson/lessonApi";

// import { toast } from "sonner";

const UpdateLesson = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateLesson] = useUpdateLessonMutation();

  //   console.log("-->", item);

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
      <Button type="primary" onClick={showModal}>
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
