/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useDeleteLessonMutation } from "../../../redux/Features/Lesson/lessonApi";
import { toast } from "sonner";
import { Button } from "antd";

const DeleteLesson = ({ item }) => {
  // delete lesson
  const [deleteLesson] = useDeleteLessonMutation();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Delete this lesson!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Loading...");

        try {
          const res = await deleteLesson(id);

          if (res?.data) {
            toast.success("Lesson deleted", { id: toastId, duration: 3000 });
          } else {
            toast.error(
              res?.error?.data?.message || "An unexpected error occurred",
              { id: toastId, duration: 3000 }
            );
          }
        } catch (error) {
          toast.error("Failed to delete the lesson. Please try again.", {
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
      <Button danger onClick={() => handleDelete(item?.key)}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteLesson;
