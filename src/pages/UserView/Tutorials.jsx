import bg from '../../assets/theme.png'

const Tutorials = () => {
  // List of YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/e5jpH4KPQ4k",
    "https://www.youtube.com/embed/CxtA5fG08Q8",
    "https://www.youtube.com/embed/Y9IdAc_2KwE",
    "https://www.youtube.com/embed/SMwK7DWWgjE",
    "https://www.youtube.com/embed/OyfNY14wh9c",
    "https://www.youtube.com/embed/Tsa5UoAl7vA",
    "https://www.youtube.com/embed/wZl9Ksqfrgc",
    "https://www.youtube.com/embed/QAo3SnGYoSo",
    "https://www.youtube.com/embed/h9XDuT4YqUA",
  ];

  return (
  <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
      Japanese Tutorials
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={video}
              title={`Japanese Tutorial ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Tutorials;
