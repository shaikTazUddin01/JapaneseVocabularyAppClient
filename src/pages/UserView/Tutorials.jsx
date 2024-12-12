import bg from "../../assets/theme.png";
import bg2 from "../../assets/japan-bg.png";
import { useGetTutorialQuery } from "../../redux/Features/Tutorial/tutorialApi";

const Tutorials = () => {
  const { data: tutorialvideo, isLoading } = useGetTutorialQuery();

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* header */}
      <div className=" bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bg2})` }}>
       <div className="bg-[#0f0000c2] h-full w-full py-16">
       <h1 className="text-5xl font-extrabold text-white text-center mb-4">
          Video Tutorials
        </h1>
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto">
          Explore our curated collection of Japanese tutorials to enhance your
          language skills and cultural understanding.
        </p>
       </div>
      </div>

    {/* content */}
      <div className="max-w-7xl mx-auto px-6 pb-16 pt-10">
      <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
          Video Tutorials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array(9)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full h-56 animate-pulse bg-gray-300 rounded-lg"
                  ></div>
                ))
            : tutorialvideo?.data?.map((video, index) => (
                <div
                  key={index}
                  className="aspect-w-16 aspect-h-9 relative group"
                >
                  {/* Video */}
                  <iframe
                    className="w-full h-full rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-[1.01]"
                    src={video?.videoLink}
                    title={`Japanese Tutorial ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
