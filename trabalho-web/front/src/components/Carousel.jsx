import { useEffect, useState } from 'react';

const Carousel = ({ children }) => {
  const images = [
    'bg2.jpg',
    'isaquias.jpg',
    'rebeca.png',
    'darlan.JPG',
    'martine.JPG',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ height: '600px' }} className="relative overflow-hidden"> {}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(/images/${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%', 
            opacity: index === currentImageIndex ? 0.5 : 0, 
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
