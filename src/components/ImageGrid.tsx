import React, { useState, useEffect } from "react";
import "./ImageGrid.css";

interface ImageData {
  images: Array<{
    original: string;
    thumbnailBig: string;
    thumbnailSmall: string;
  }>;
  title: string;
  author: string;
  date: string;
  location: string;
  state: string;
  tags: string[];
  big: boolean;
  onHomepage: boolean;
  specifications: {
    camera: string;
    f_stop: string;
    iso: number;
    lens: string;
  };
}

const ImageGrid: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("https://gallery.imdeepmind.com/api/images.json")
      .then((res) => res.json())
      .then((data) => {
        const imageList = (Object.values(data) as ImageData[]).filter(
          (item) => item.onHomepage
        );
        setImages(imageList);
      })
      .catch((err) => console.error("Failed to fetch images:", err));
  }, []);

  return (
    <div className="image-grid">
      {images.map((item, index) => (
        <div
          key={index}
          className={`image-container ${index === 3 ? "large" : ""}`}
        >
          <img
            src={item.images[0].thumbnailBig}
            alt={item.title}
            className="grid-item"
          />
          <div className="overlay">
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
