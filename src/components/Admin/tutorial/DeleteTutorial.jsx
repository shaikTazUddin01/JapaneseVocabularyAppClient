/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
// import { useDeleteLessonMutation } from "../../../redux/Features/Lesson/lessonApi";
import { toast } from "sonner";
import { Button } from "antd";
import { useDeleteTutorialMutation } from "../../../redux/Features/Tutorial/tutorialApi";
import { MdDeleteSweep } from "react-icons/md";

const DeleteTutorial = ({ id }) => {
  // delete lesson
  const [deleteTutorial] = useDeleteTutorialMutation();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Delete this tutorial!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Loading...");
        console.log(id);

        try {
          const res = await deleteTutorial(id);

          if (res?.data) {
            toast.success("tutorial deleted", { id: toastId, duration: 3000 });
          } else {
            toast.error(
              res?.error?.data?.message || "An unexpected error occurred",
              { id: toastId, duration: 3000 }
            );
          }
        } catch (error) {
          toast.error("Failed to delete the tutorial. Please try again.", {
            id: toastId,
            duration: 3000,
          });
          console.error(error);
        }
      }
    });
  };

  return (
    <div>
      <Button
        danger
        onClick={() => handleDelete()}
        className="flex items-center gap-1"
      >
        <span className="text-xl">
          <MdDeleteSweep />
        </span>
        Delete
      </Button>
    </div>
  );
};

export default DeleteTutorial;
