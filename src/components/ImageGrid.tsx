import React, { useState, useEffect } from "react";
import "./ImageGrid.css";

interface ImageData {
  id: string;
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
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    fetch("https://gallery.imdeepmind.com/api/images.json")
      .then((res) => res.json())
      .then((data) => {
        const imageList = Object.entries(data)
          .filter(([id, item]: [string, any]) => item.onHomepage)
          .map(([id, item]: [string, any]) => ({ id, ...item }));
        setImages(imageList);
        setLoaded(new Array(imageList.length).fill(false));
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
          <a
            href={`https://gallery.imdeepmind.com/gallery/details/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {!loaded[index] && <div className="skeleton"></div>}
            <img
              src={item.images[0].thumbnailBig}
              alt={item.title}
              className="grid-item"
              onLoad={() =>
                setLoaded((prev) => {
                  const newLoaded = [...prev];
                  newLoaded[index] = true;
                  return newLoaded;
                })
              }
            />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
