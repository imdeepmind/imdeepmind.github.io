import React from "react";
import "./ImageGrid.css";

const TravelGrid: React.FC = () => {
  const images = [
    {
      url: "https://ik.imagekit.io/imdeepmind/imdeepmind/d4a7c1cd-3bc3-4411-98ae-87922a995dfb_-wuYoXXRr.JPG?tr=w-1170",
      location: "Kaziranga National Park",
      date: "21st December 2024",
    },
    {
      url: "https://ik.imagekit.io/imdeepmind/imdeepmind/d1a319b6-105d-475b-abf9-68bbc251f809_wh7baaPvwc.JPG?tr=w-1170",
      location: "Chandrapur",
      date: "10th April, 2024",
    },
    {
      url: "https://ik.imagekit.io/imdeepmind/imdeepmind/93f69da4-e0ed-4827-bca9-e5c4be932c16_6xJculJEV.JPG?tr=w-1170",
      location: "Sela Lake, Sela Pass",
      date: "16th August, 2024",
    },
    {
      url: "https://ik.imagekit.io/imdeepmind/imdeepmind/a045cca0-5239-40d2-a8f1-0aa7dbb566df_rHXv6dTsP8.JPG?tr=w-1170",
      location: "Sangti Valley",
      date: "9th December 2023",
    },
    {
      url: "https://ik.imagekit.io/imdeepmind/imdeepmind/a5a42657-4295-420e-b07a-44a20850f19e_Ph8qOAwGn1.JPG?tr=w-1170",
      location: "Sela Lake, Sela Pass",
      date: "16th August, 2024",
    },
    {
      url: "https://ik.imagekit.io/imdeepmind/imdeepmind/4ceb0d5a-3fff-4900-a0c7-1e698d5307ee_eZsrzg47z.jpg?tr=w-1170",
      location: "Grassland",
      date: "6th August, 2023",
    },
  ];

  return (
    <div className="image-grid">
      {images.map((item, index) => (
        <div
          key={index}
          className={`image-container ${index === 0 ? "large" : ""}`}
        >
          <img src={item.url} alt={item.location} className="grid-item" />
          <div className="overlay">
            <h3>{item.location}</h3>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelGrid;
