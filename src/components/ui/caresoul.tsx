import { useState, useEffect } from "react";
import { Card, CardBody, Image } from "@heroui/react";
import caresoul1 from "../../assets/caresoul-1.jpg";
import caresoul2 from "../../assets/caresoul-2.jpg";
import caresoul3 from "../../assets/caresoul-3.jpg";
import caresoul4 from "../../assets/logo-perusahaan.jpg";
import caresoul5 from "../../assets/IMG-20250525-WA0005.jpg";
import caresoul6 from "../../assets/IMG-20250525-WA0006.jpg";
import caresoul7 from "../../assets/IMG-20250525-WA0007.jpg";
import caresoul8 from "../../assets/IMG-20250525-WA0008.jpg";
import caresoul9 from "../../assets/IMG-20250525-WA0009.jpg";
import caresoul10 from "../../assets/IMG-20250525-WA0010.jpg";
import caresoul11 from "../../assets/IMG-20250525-WA0011.jpg";
import caresoul12 from "../../assets/IMG-20250525-WA0012.jpg";
import caresoul13 from "../../assets/IMG-20250525-WA0013.jpg";
import caresoul14 from "../../assets/IMG-20250525-WA0014.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  const images = [
    caresoul1,
    caresoul2,
    caresoul3,
    caresoul4,
    caresoul5,
    caresoul6,
    caresoul7,
    caresoul8,
    caresoul9,
    caresoul10,
    caresoul11,
    caresoul12,
    caresoul13,
    caresoul14,
  ];

  // Auto slide setiap 2 detik
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  // Deteksi swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const threshold = 50; // minimal swipe

    if (distance > threshold) {
      // swipe kiri
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (distance < -threshold) {
      // swipe kanan
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    // reset nilai swipe
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="w-full max-w-[400px] h-auto rounded-lg mb-4">
        <CardBody
          className="overflow-visible py-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={images[currentIndex]}
            width={400}
            height={400}
          />
        </CardBody>
        <div className="flex space-x-2 mx-auto mb-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Carousel;
