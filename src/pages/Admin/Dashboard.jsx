import { FaUser, FaBook, FaLanguage, FaVideo } from "react-icons/fa";
import { useGetUserQuery } from "../../redux/Features/Auth/authApi";
import { useGetLessonQuery } from "../../redux/Features/Lesson/lessonApi";
import { useGetTutorialQuery } from "../../redux/Features/Tutorial/tutorialApi";
import ManageLesson from "./ManageLesson";
import ManageUser from "./ManageUser";


const Dashboard = () => {
  const { data: userData } = useGetUserQuery();
  const { data: lessonDate } = useGetLessonQuery();

  const { data: totalVideo } = useGetTutorialQuery();

  console.log(lessonDate?.data);

  const totalVocabulary = lessonDate?.data?.reduce(
    (acc, curr) => curr?.vocabulary?.length + acc,
    0
  );

  return (
    <div className="bg-cover bg-center bg-no-repeat" >
      {/* total content */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {/* total user */}
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col md:flex-row justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-blue-500 text-3xl">
            <FaUser />
          </div>
          <div className="ml-4 ">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600 text-center md:text-left">
              {userData?.data?.length}
            </p>
          </div>
        </div>

        {/* total lesson */}
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col md:flex-row justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-green-500 text-3xl">
            <FaBook />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Lessons
            </h3>
            <p className="text-2xl font-bold text-green-600 text-center md:text-left">
              {lessonDate?.data?.length}
            </p>
          </div>
        </div>

        {/* total vocabulary */}
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col md:flex-row justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-yellow-500 text-3xl">
            <FaLanguage />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Vocabulary
            </h3>
            <p className="text-2xl font-bold text-yellow-600 text-center md:text-left">
              {totalVocabulary}
            </p>
          </div>
        </div>

        {/* total Tutorial */}
        <div className="bg-blue-100 rounded-lg p-5 flex flex-col md:flex-row justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-red-500 text-3xl">
            <FaVideo />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Tutorials
            </h3>
            <p className="text-2xl font-bold text-red-600 text-center md:text-left">
              {totalVideo?.data?.length}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5">
      {/* manage User */}
      <ManageUser />
      {/* manage lesson */}
      <ManageLesson />
      </div>
    </div>
  );
};

export default Dashboard;
