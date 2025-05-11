const YouTubeVideo = () => {
  return (
    <div className="relative w-full z-10 max-w-full pb-[56.25%] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Menambahkan autoplay=1 di sini
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
