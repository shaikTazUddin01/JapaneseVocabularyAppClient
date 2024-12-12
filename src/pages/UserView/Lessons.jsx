
import { useNavigate } from "react-router-dom";
import { useGetLessonQuery } from "../../redux/Features/Lesson/lessonApi";

const Lessons = () => {
  const navigate = useNavigate();
  const {data:lessons}=useGetLessonQuery(undefined)

  // Static lesson data for demo
//   const lessons = [
//     { id: 1, name: "Basic Greetings", number: 1, vocabularyCount: 10 },
//     { id: 2, name: "Daily Activities", number: 2, vocabularyCount: 8 },
//     { id: 3, name: "Numbers and Time", number: 3, vocabularyCount: 12 },
//   ];

  const handleLessonClick = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Available Lessons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons?.data?.map((lesson) => (
         <div
         key={lesson._id}
         onClick={() => handleLessonClick(lesson.id)}
         className="relative bg-gradient-to-r from-white to-blue-50 border border-blue-200 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
       >
         <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
           <span className="text-sm font-bold">{lesson.lessonNumber}</span>
         </div>
         <div className="flex flex-col items-center">
           <div className="bg-blue-100 text-blue-500 rounded-full p-3 mb-4">
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
           </div>
           <h2 className="text-lg font-semibold text-blue-600 mb-2 text-center">
             {lesson?.lessonName}
           </h2>
           <p className="text-gray-600 text-sm mb-4">
             Vocabulary Count: {lesson?.vocabulary?.length > 0 ? lesson?.vocabulary?.length : "0"}
           </p>
           <button
             onClick={(e) => {
               e.stopPropagation(); 
               handleLessonClick(lesson.id);
             }}
             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
           >
             View Lesson
           </button>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
