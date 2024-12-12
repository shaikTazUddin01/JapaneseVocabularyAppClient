import { useState } from "react";

const VocabularyPage = () => {
  // Static vocabulary data for demo
  const vocabulary = [
    {
      id: 1,
      word: "こんにちは",
      pronunciation: "Konnichiwa",
      whenToSay: "Used for greeting during the day.",
      meaning: "Hello",
      audio: "/audio/konnichiwa.mp3", // Example path to audio file
    },
    {
      id: 2,
      word: "さようなら",
      pronunciation: "Sayōnara",
      whenToSay: "Used when parting ways.",
      meaning: "Goodbye",
      audio: "/audio/sayonara.mp3", // Example path to audio file
    },
    {
      id: 3,
      word: "ありがとう",
      pronunciation: "Arigatō",
      whenToSay: "Used to express gratitude.",
      meaning: "Thank you",
      audio: "/audio/arigato.mp3", // Example path to audio file
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle pronunciation playback
  const playPronunciation = (audioPath) => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  // Handle navigation
  const handleNext = () => {
    if (currentIndex < vocabulary.length - 1) {
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

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Vocabulary Learning</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h2
          className="text-2xl font-semibold text-blue-600 cursor-pointer mb-4"
          onClick={() => playPronunciation(currentVocab.audio)}
        >
          {currentVocab.word}
        </h2>
        <p className="text-gray-700">
          <strong>Pronunciation:</strong> {currentVocab.pronunciation}
        </p>
        <p className="text-gray-700">
          <strong>When to Say:</strong> {currentVocab.whenToSay}
        </p>
        <p className="text-gray-700">
          <strong>Meaning:</strong> {currentVocab.meaning}
        </p>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            disabled={currentIndex === vocabulary.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyPage;
