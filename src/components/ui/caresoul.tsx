import { useState, useEffect } from "react";
import { Card, CardBody, Image } from "@heroui/react";
import caresoul1 from "../../assets/caresoul-1.jpg";
import caresoul2 from "../../assets/caresoul-2.jpg";
import caresoul3 from "../../assets/caresoul-3.jpg";
import caresoul4 from "../../assets/logo-perusahaan.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [caresoul1, caresoul2, caresoul3, caresoul4];

  // Auto slide setiap 3 detik
  useEffect(() => {
    if (isHovered) return; // Jika di-hover, jangan auto slide
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); // Bersihkan saat unmount
  }, [currentIndex, isHovered]);

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="w-full max-w-[400px] h-auto rounded-lg mb-4">
        <CardBody className="overflow-visible py-2">
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

      {/* Dot Indicators */}
    </div>
  );
};

export default Carousel;
