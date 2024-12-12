import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpecificLessonQuery } from "../../redux/Features/Lesson/lessonApi";
import { MdRecordVoiceOver } from "react-icons/md";
// react confetti
import Confetti from "react-confetti";
import { HiArrowNarrowLeft } from "react-icons/hi";
import bg from "../../assets/9919310.jpg";

const VocabularyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);
  // get data
  const { data: lessonData, isLoading } = useGetSpecificLessonQuery(id);

  const vocabulary = lessonData?.data?.vocabulary;

  // Loading state
  if (isLoading) {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat w-auto h-[88vh]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-7xl mx-auto p-6 text-center min-h-[88vh] flex flex-col pt-10 bg-gradient-to-br from-blue-50 to-white">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 animate-pulse">
            Vocabulary Learning
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
            <div className="h-9 bg-blue-300 rounded-md w-2/4 mb-4 mx-auto"></div>

            <div className="h-6 w-[220px] bg-gray-200 rounded-lg animate-pulse mx-auto mb-4"></div>

            <div className="h-6 w-[250px] bg-gray-200 rounded-lg animate-pulse mx-auto mb-4"></div>

            <div className="h-6 w-[180px] bg-gray-200 rounded-lg animate-pulse mx-auto mb-6"></div>

            <div className="flex justify-between mt-4">
              <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-8 w-24 bg-blue-300 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // navigation
  const handleNext = () => {
    if (currentIndex < vocabulary?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Current vocabulary word
  const currentVocab = vocabulary[currentIndex];

  // pronounce word
  function pronounceWord(word) {
    const proWord = new SpeechSynthesisUtterance(word);
    proWord.lang = "ja-JP";
    window.speechSynthesis.speak(proWord);
  }

  //  complect lesson

  const complectLesson = () => {
    setIsLessonCompleted(true);
    setTimeout(() => {
      navigate("/");
    }, 6000);
  };

  return (
    <div
      className=" mx-auto p-6 text-center min-h-[90vh]  bg-gradient-to-br from-blue-50 to-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" text-black">
        <a href="/">
          <h1 className="text-left flex items-center gap-1">
            <span>
              <HiArrowNarrowLeft />
            </span>{" "}
            Back to lesson
          </h1>
        </a>
      </div>

      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
          Vocabulary Learning
        </h1>
        {/* complect celibate */}
        {
        
        (
          isLessonCompleted && (
            <div className="absolute inset-0 overflow-hidden">
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            </div>
          )
        )}

        {

!currentVocab ? (
  <h1 className="text-xl">No Vocabulary added in this Lesson ☹☹</h1>
) :
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-auto border">
          {/* Vocabulary Word */}
          <h2
            className="text-3xl font-bold text-blue-600 cursor-pointer mb-6 hover:text-blue-700 transition"
            onClick={() => pronounceWord(currentVocab?.word)}
          >
            <div className="relative inline-block">
              {currentVocab?.word}
              <span className="absolute top-0 -end-10 text-xl text-black">
                <MdRecordVoiceOver />
              </span>
            </div>
          </h2>

          {/* Pronunciation */}
          <p className="text-gray-600 text-lg mb-2">
            <strong className="text-gray-800">Pronunciation:</strong>{" "}
            {currentVocab?.pronunciation}
          </p>

          {/* When to Say */}
          <p className="text-gray-600 text-lg mb-2">
            <strong className="text-gray-800">When to Say:</strong>{" "}
            {currentVocab?.whenToSay}
          </p>

          {/* Meaning */}
          <p className="text-gray-600 text-lg mb-6">
            <strong className="text-gray-800">Meaning:</strong>{" "}
            {currentVocab?.meaning}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="px-5 py-3 bg-gray-200 rounded-lg shadow-md text-gray-700 hover:bg-gray-300 hover:shadow-lg transition disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {currentIndex == vocabulary.length - 1 ? (
              <button
                onClick={complectLesson}
                className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-50"
              >
                Lesson Complect
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-50"
                disabled={currentIndex === vocabulary?.length}
              >
                Next
              </button>
            )}
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default VocabularyPage;
