/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import JPForm from "../../Form/JPForm";
import JPInput from "../../Form/JPInput";
import { toast } from "sonner";
import { useUpdateTutorialMutation } from "../../../redux/Features/Tutorial/tutorialApi";

// import { toast } from "sonner";

const UpdateTutorial = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UpdateTutorial] = useUpdateTutorialMutation();

  console.log("-->", item);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async (data) => {
    const toastId = toast.loading("Loading..");
    try {
      const res = await UpdateTutorial({
        id: item?.key,
        data,
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <div>
          <h1 className="text-xl font-semibold text-center mt-2 -mb-2">
            Update Tutorial
          </h1>
          <div className="shadow-lg w-[90%] mx-auto">
            <JPForm onSubmit={handleUpdate}>
              <div className="space-y-2">
                <div>
                  <label htmlFor="">Video Link</label>
                  <JPInput
                    name={"videoLink"}
                    label={"Video Link"}
                    type={"text"}
                    defaultFieldValue={item?.videoLink}
                  />
                </div>

                <button
                  className="w-full bg-blue-600 py-[6px] rounded-md text-white font-semibold"
                  type="submit"
                >
                  Update Tutorial
                </button>
              </div>
            </JPForm>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateTutorial;
