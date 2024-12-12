import { useNavigate } from "react-router-dom";
import { useGetLessonQuery } from "../../redux/Features/Lesson/lessonApi";
import bg from "../../assets/theme.png";
const Lessons = () => {
  const navigate = useNavigate();
  const { data: lessons, isLoading } = useGetLessonQuery(undefined);

  const handleLessonClick = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto p-6 min-h-[85vh] ">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-8 ">
          Available Lessons
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array(6).fill(null).map((_, idx) => (
                  <div
                    className="relative bg-gradient-to-r from-white to-blue-50 border border-blue-200 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1 animate-pulse"
                    key={idx}
                  >
                    <div className="absolute top-4 right-4 bg-blue-300 rounded-full flex items-center justify-center px-4 h-6 w-20">
                      <span className="text-sm font-bold text-blue-200">
                        &nbsp;
                      </span>
                    </div>

                    <div className="flex flex-col items-center mt-4">
                      {/* <div className="bg-blue-200 rounded-full h-12 w-12 mb-4"></div> */}

                      <div className="h-5 bg-blue-300 rounded-md w-2/4 mb-4"></div>

                      <div className="h-3 bg-blue-200 rounded-md w-[60%] mb-6"></div>

                      <div className="h-8 bg-blue-400 rounded-md w-1/3 mt-4"></div>
                    </div>
                  </div>
            ))
            : lessons?.data?.map((lesson) => (
                <div
                  key={lesson._id}
                  onClick={() => handleLessonClick(lesson._id)}
                  className="relative bg-gradient-to-r from-white to-blue-50 border border-blue-200 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full flex items-center justify-center px-2">
                    <span className="text-sm font-bold">
                      Lesson : {lesson.lessonNumber}
                    </span>
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    {/* <div className="bg-blue-100 text-blue-500 rounded-full p-3 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 11V7m0 0l-3 3m3-3l3 3m-6 8h6m-3 0v-6"
                        />
                      </svg>
                    </div> */}
                    <h2 className="text-lg font-semibold text-blue-600 mb-2 text-center">
                      {lesson?.lessonName}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      Vocabulary Count:{" "}
                      {lesson?.vocabulary?.length > 0
                        ? lesson?.vocabulary?.length
                        : "0"}
                    </p>
                    <a href={`/lesson/${lesson._id}`}>
                      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        View Lesson
                      </button>
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
